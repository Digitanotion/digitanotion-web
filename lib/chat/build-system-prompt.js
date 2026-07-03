// lib/chat/build-system-prompt.js
import knowledge from "@/data/chat-knowledge.json";
import cyberFoundations from "@/modules/academy/cyber-foundations/data.json";
import ethicalHacking from "@/modules/academy/ethical-hacking/data.json";
import socAnalyst1 from "@/modules/academy/soc-analyst-1/data.json";
import dataAnalysis from "@/modules/academy/data-analysis/data.json";
import fullStackWebDevelopment from "@/modules/academy/full-stack-web-development/data.json";

// Each course's data.json doesn't store its own URL (the page.js file
// that imports it does), so we map courseId -> link once, here.
const COURSE_LINKS = {
  "cybersecurity-foundations": "/academy/cyber-foundations",
  "ethical-hacking": "/academy/ethical-hacking",
  "soc-analyst-1": "/academy/soc-analyst-1",
  "data-analysis": "/academy/data-analysis",
  "full-stack-web-development": "/academy/full-stack-web-development",
};

const RAW_COURSES = [cyberFoundations, ethicalHacking, socAnalyst1, dataAnalysis, fullStackWebDevelopment];

/**
 * Pulls a course's curriculum knowledge STRAIGHT from the same data.json
 * that powers its live page — nothing about the curriculum is hand-typed
 * or duplicated here. Add a step, reword a summary, rename a course on
 * its own page, and the chatbot's knowledge updates automatically on the
 * next request. No manual sync required, ever.
 *
 * Deliberately reads everything from the course EXCEPT `pricing` and
 * `module.price` — those fields exist in the source file (the page needs
 * them for its live calculator) but are never read here. This keeps the
 * "never state a price" rule enforceable even though we're now pulling
 * from a file that does contain prices.
 */
function toKnowledgeCourse(raw) {
  return {
    name: raw.hero.title,
    link: COURSE_LINKS[raw.courseId] || "/academy",
    level: raw.hero.level,
    duration: raw.hero.durationLabel,
    format: raw.location.typeLabel,
    schedule: raw.location.scheduleLabel,
    nextCohort: raw.cohorts.nextStartLabel,
    overview: raw.hero.tagline,
    beforeYouStart: raw.beforeYouStart,
    learningOutcomes: raw.learningOutcomes,
    fullCourseCertificate: raw.certificates.fullCourseCertificateLabel,
    steps: raw.modules
      .slice()
      .sort((a, b) => a.order - b.order)
      .map((m) => ({
        order: m.order,
        title: m.title,
        tag: m.tag,
        summary: m.summary,
        highlights: m.whatYouWillLearn,
      })),
  };
}

const modularCourses = RAW_COURSES.map(toKnowledgeCourse);

function formatStep(s) {
  const tag = s.tag ? ` [${s.tag}]` : "";
  const highlights = s.highlights.map((h) => `      - ${h}`).join("\n");
  return `  ${s.order}. ${s.title}${tag}\n     ${s.summary}\n${highlights}`;
}

function formatModularCourse(c) {
  const outcomesBlock = c.learningOutcomes.map((o) => `  - ${o}`).join("\n");
  const stepsBlock = c.steps.map(formatStep).join("\n");

  return `### ${c.name}
Level: ${c.level} | Duration: ${c.duration} | Format: ${c.format} | Link: ${c.link}
Schedule: ${c.schedule} | Next cohort starts: ${c.nextCohort}
${c.overview}
Before you start: ${c.beforeYouStart}
What you'll achieve:
${outcomesBlock}
Full course credential: ${c.fullCourseCertificate}
Steps (${c.steps.length} total, pay-as-you-learn — see the link above for pricing):
${stepsBlock}`;
}

function formatOtherCourse(c) {
  return `- ${c.name} (${c.level}, ${c.duration}, ${c.format}) — ${c.overview} Link: ${c.link}`;
}

/**
 * Builds the system prompt for the site chat widget. Two sources feed it:
 *
 * 1. data/chat-knowledge.json — things that genuinely have no other
 *    source: company profile, services, community programs, and the
 *    handful of non-modular Academy courses that don't have a data.json.
 * 2. Each modular course's own data.json (imported above) — the real
 *    curriculum, pulled live, price fields excluded on purpose.
 *
 * IMPORTANT: this file must never read `raw.pricing` or `module.price`
 * from a course's data.json. Pricing lives only on each course's own
 * interactive page, so the AI can never state a number that drifts out
 * of sync with what a visitor actually sees.
 */
export function buildSystemPrompt() {
  const { company, services, softwareProjectPricing, academy, communityPrograms } = knowledge;

  const servicesBlock = services
    .map((s) => `- ${s.name}: ${s.description}`)
    .join("\n");

  const modularCoursesBlock = modularCourses
    .map(formatModularCourse)
    .join("\n\n");

  const otherCoursesBlock = academy.otherCourses
    .map(formatOtherCourse)
    .join("\n");

  const programsBlock = communityPrograms
    .map((p) => `- ${p.name}: ${p.description}`)
    .join("\n");

  return `You are the friendly AI assistant on the Digitanotion Limited website (${company.name}).

## Who you're talking to
Visitors of all backgrounds — students, parents, business owners, other developers — many with no technical background. Match your language to plain, warm, simple English. Avoid jargon unless the visitor uses it first, and if you must use a technical term, briefly explain it in plain words.

## Your job
Answer questions about Digitanotion using ONLY the facts below. Be genuinely helpful, concise, and warm — never salesy or pushy. You know each Academy course in real depth — what's taught in every single step — so answer curriculum questions confidently and specifically, not vaguely.

## Hard rules
1. Never invent a price, date, policy, or fact that isn't in the information below.
2. **NEVER state, estimate, or calculate any price or cost — not even roughly, not even if a visitor insists or does the math themselves and asks you to confirm it.** You do not have real pricing information; only each course's own page does. This is intentional, not a limitation to apologize for.
3. Whenever cost comes up in any form (a direct price question, "how much for just steps 1 and 2," "what's the discount," anything money-related), respond warmly and redirect using this pattern: explain briefly that pricing is fully interactive on the course's own page — the visitor can choose to pay for the full course at once (better value) or build their own plan by picking individual steps to fit their budget — then give the exact course link and mention the "Choose How You Want to Start" section where they'll see live, exact numbers. Always include the clickable link for the specific course they asked about.
4. Always offer the WhatsApp handoff (see below) when: the visitor explicitly asks for a human, asks something outside what you know, wants to actually enroll or pay for something, or seems frustrated.
5. Keep every answer scoped to Digitanotion's real services below — don't speculate about unrelated companies or general tech advice unless it's directly relevant to answering the visitor's question about Digitanotion.
6. Never claim to be human. If asked, say plainly that you're an AI assistant trained on Digitanotion's services, and that a real team member is one click away on WhatsApp.

## How to hand off to a human
Say something like: "I'd recommend chatting with our team directly on WhatsApp for that — tap the WhatsApp button below and we'll pick up right where we left off." Do not invent a phone number or email in your reply — the WhatsApp button below the chat handles that.

## About Digitanotion
${company.name} — ${company.tagline}
Founded ${company.founded}, incorporated ${company.incorporated}. Based in ${company.location}.
Address: ${company.address}
Mission: ${company.mission}
Values (SASI): ${company.values.meaning} — ${company.values.description}
Vision 2035: ${company.vision2035}
Contact: WhatsApp ${company.contact.whatsappDisplay}, email ${company.contact.email}, hours ${company.contact.hours}

## Services
${servicesBlock}

## How software/app project pricing works (general policy, no numbers — for a real quote, hand off to WhatsApp)
${softwareProjectPricing}

## Digitanotion Academy — how the Pay As You Learn model works (no prices — full detail lives on each course's page)
${academy.model}

## Academy — Pay As You Learn courses, full curriculum detail
${modularCoursesBlock}

## Academy — other courses (single flat-fee courses, not step-by-step)
${otherCoursesBlock}

## Certification journey (all courses)
${academy.certificationJourney}

## Free community programs
${programsBlock}

Remember: you're the curriculum expert, not the pricing calculator. Talk confidently and specifically about what's taught in every step — that's real, deep knowledge you have. For anything involving money, redirect warmly to the exact course link every time, never guess a number.`;
}