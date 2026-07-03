// app/api/chat/route.js
import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "@/lib/chat/build-system-prompt";

export const runtime = "nodejs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Free-tier eligible, fast, good quality for a support-FAQ widget.
// Override with an env var if you ever want to swap models without a code change.
const MODEL = process.env.GEMINI_CHAT_MODEL || "gemini-2.5-flash";

const MAX_HISTORY_MESSAGES = 20; // keep requests small and cheap
const MAX_MESSAGE_CHARS = 4000; // guard against pasted essays / abuse
const MAX_OUTPUT_TOKENS = 500;

// ── Basic in-memory rate limiting ────────────────────────────────────────
// NOTE: this is a best-effort guard, not a complete solution. On Vercel,
// each serverless instance has its own memory — under real concurrent
// traffic across multiple instances, this won't perfectly enforce a global
// limit, and a cold start resets it entirely. It's still useful for
// stopping a single sustained abuser hitting a warm instance. For a
// guaranteed multi-instance limit at scale, swap this for Upstash Redis
// (a few lines with @upstash/ratelimit) — flagged here so it's not
// forgotten, not because this is broken for a v1 launch.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 15;
const requestLog = new Map(); // ip -> timestamps[]

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(req) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

// Gemini's free tier has been cut sharply (as low as 20 requests/day on
// some projects as of mid-2026) — a 429 RESOURCE_EXHAUSTED here is a real,
// common outcome on the free tier, not an edge case. Detect it specifically
// so visitors get an honest message instead of a generic "something broke."
function isQuotaError(err) {
  const message = err?.message || err?.error?.message || "";
  return err?.status === 429 || /RESOURCE_EXHAUSTED|quota/i.test(message);
}

export async function POST(req) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return jsonError(
      "You're sending messages a bit fast — please wait a moment, or use the WhatsApp button to reach us directly.",
      429
    );
  }

  let messages;
  try {
    const body = await req.json();
    messages = body?.messages;
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return jsonError("messages is required and must be a non-empty array.", 400);
  }

  // Trim to the last N turns, clamp length, and map to Gemini's shape:
  // { role: 'user' | 'model', parts: [{ text }] } — note Gemini uses
  // "model" where Claude/OpenAI use "assistant".
  const contents = messages.slice(-MAX_HISTORY_MESSAGES).map((m) => ({
    role: m?.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m?.content ?? "").slice(0, MAX_MESSAGE_CHARS) }],
  }));

  try {
    const stream = await ai.models.generateContentStream({
      model: MODEL,
      contents,
      config: {
        systemInstruction: buildSystemPrompt(),
        maxOutputTokens: MAX_OUTPUT_TOKENS,
      },
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (chunk.text) {
              controller.enqueue(encoder.encode(chunk.text));
            }
          }
          controller.close();
        } catch (err) {
          console.error("Gemini stream error:", err);
          try {
            const fallback = isQuotaError(err)
              ? "\n\n(Our assistant is getting more questions than usual right now — please try again shortly, or use the WhatsApp button below.)"
              : "\n\n(Something went wrong finishing that response — please try again, or use the WhatsApp button below.)";
            controller.enqueue(encoder.encode(fallback));
            controller.close();
          } catch {
            controller.error(err);
          }
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    if (isQuotaError(err)) {
      return jsonError(
        "Our assistant is getting more questions than usual right now and needs a short break. Please try again shortly, or use the WhatsApp button below to reach us directly.",
        429
      );
    }
    return jsonError(
      "Something went wrong on our end. Please try again, or message us directly on WhatsApp.",
      500
    );
  }
}

function jsonError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}