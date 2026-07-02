// components/chat/ChatWidget.js
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_PHONE = "2348073735836";
const GREETING =
  "Hi! I'm the Digitanotion AI assistant. Ask me about our Academy courses, cybersecurity services, or anything else — and if I can't help, tap the WhatsApp button below any time to continue with a real person.";
const MAX_INPUT_CHARS = 1000;

// wa.me links have a practical safe length across WhatsApp clients — stay
// comfortably under it. If the conversation is longer than this, we keep
// the MOST RECENT messages (most relevant to "help me right now") and note
// that older messages were left out, rather than silently truncating mid-sentence.
const WHATSAPP_CHAR_BUDGET = 1200;

/**
 * Site-wide floating AI chat widget. Drop this once in your root layout
 * (app/layout.js) so it appears on every page:
 *
 *   import ChatWidget from "@/components/chat/ChatWidget";
 *   ...
 *   <body>{children}<ChatWidget /></body>
 *
 * Talks to /api/chat (streaming, provider-agnostic contract: POST
 * {messages}, receive a streamed plain-text response). The WhatsApp
 * escalation button forwards the real conversation transcript and never
 * depends on the AI working — it's a plain deep link.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  /**
   * Builds a readable transcript for WhatsApp, most-recent-first until the
   * character budget is hit, then restored to chronological order. Skips
   * the seeded greeting (not a real exchange) and any empty bubbles.
   */
  function buildWhatsappTranscript() {
    const real = messages.filter((m) => m.content?.trim() && m.content !== GREETING);

    const collected = [];
    let used = 0;
    let truncated = false;

    for (let i = real.length - 1; i >= 0; i--) {
      const label = real[i].role === "user" ? "Me" : "Assistant";
      const line = `${label}: ${real[i].content.trim()}`;
      if (used + line.length > WHATSAPP_CHAR_BUDGET) {
        if (collected.length > 0) truncated = true;
        break;
      }
      collected.unshift(line);
      used += line.length;
    }

    const intro =
      "Hi! I was chatting with your AI assistant on the Digitanotion website and would like to continue with a real person.";
    const body = collected.length
      ? `\n\nHere's our conversation${truncated ? " (most recent part)" : ""}:\n\n${collected.join("\n\n")}`
      : "";
    const outro = "\n\nCan you help me with this?";

    return `${intro}${body}${outro}`;
  }

  function buildWhatsappLink() {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(buildWhatsappTranscript())}`;
  }

  async function sendMessage(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || isStreaming) return;

    setError(null);
    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setIsStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        let friendlyMessage = "Something went wrong sending that. Please try again, or use the WhatsApp button below.";
        try {
          const data = await res.json();
          if (data?.error) friendlyMessage = data.error;
        } catch {
          // response wasn't JSON (e.g. a network-level failure) — keep the default message
        }
        throw new Error(friendlyMessage);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: assistantText };
          return updated;
        });
      }

      // Guard against a stream that opened but yielded nothing (e.g. the
      // model returned an empty response) — never leave a blank bubble.
      if (!assistantText.trim()) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: "Sorry, I didn't catch that — could you try rephrasing, or use the WhatsApp button below?",
          };
          return updated;
        });
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Chat widget error:", err);
        setError(err.message || "Something went wrong. Please try again, or use the WhatsApp button below.");
        setMessages((prev) => prev.slice(0, -1)); // drop the empty/failed assistant bubble
      }
    } finally {
      setIsStreaming(false);
      abortRef.current = null;
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FiX size={24} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <FiMessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Digitanotion chat assistant"
            className="fixed bottom-24 right-6 z-[90] w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white flex items-center justify-between flex-shrink-0">
              <div>
                <div className="font-bold">Digitanotion Assistant</div>
                <div className="text-xs text-orange-100">Usually replies instantly</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} aria-live="polite" className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-br-sm"
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {m.content || (isStreaming && i === messages.length - 1 ? (
                      <span className="inline-flex gap-1" aria-label="Assistant is typing">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                      </span>
                    ) : null)}
                  </div>
                </div>
              ))}
              {error && (
                <div role="alert" className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {error}
                </div>
              )}
            </div>

            {/* WhatsApp handoff — always visible, always works, never depends on the AI */}
            <a
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 mb-2 flex-shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-semibold hover:bg-green-100 transition-colors"
            >
              <FaWhatsapp size={16} />
              Chat with a human on WhatsApp
            </a>

            {/* Input */}
            <form onSubmit={sendMessage} className="p-3 border-t border-gray-200 flex items-center gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_CHARS))}
                placeholder="Ask a question..."
                disabled={isStreaming}
                maxLength={MAX_INPUT_CHARS}
                aria-label="Type your message"
                className="flex-1 px-4 py-2.5 rounded-xl bg-gray-100 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isStreaming || !input.trim()}
                aria-label="Send message"
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <FiSend size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}