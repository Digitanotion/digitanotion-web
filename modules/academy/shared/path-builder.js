"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheck, HiChevronDown, HiOutlineExclamation, HiBadgeCheck, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

function formatMoney(amount, symbol) {
  return `${symbol}${amount.toLocaleString("en-NG")}`;
}

/**
 * Shared, reusable Pay-As-You-Learn path builder.
 *
 * Works for any course whose JSON follows this shape:
 * {
 *   hero: { title },
 *   pricing: { currencySymbol, fullCoursePrice, fullCourseOriginalPrice },
 *   whatsapp: { phone, messageTemplate },
 *   modules: [{ id, order, title, tag, price, prerequisiteIds, summary,
 *                whatYouWillLearn, labs, skills }]
 * }
 *
 * Nothing in this component is course-specific — all copy that varies by
 * course (title, prices, steps) is read from `data`. Colors are intentionally
 * fixed (teal = commit, purple = pay-as-you-learn, amber = caution) so every
 * Academy course shares the same visual language.
 */
export default function PathBuilder({ data }) {
  const { modules, pricing, whatsapp } = data;
  const allIds = modules.map((m) => m.id);

  const [mode, setMode] = useState(null); // null | 'full' | 'custom'
  const [selectedIds, setSelectedIds] = useState([]);
  const [acknowledgedIds, setAcknowledgedIds] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [pendingWarningId, setPendingWarningId] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  const individualSum = modules.reduce((sum, m) => sum + m.price, 0);
  const savings = individualSum - pricing.fullCoursePrice;

  const total =
    mode === "full"
      ? pricing.fullCoursePrice
      : selectedIds.reduce((sum, id) => {
          const m = modules.find((mod) => mod.id === id);
          return sum + (m ? m.price : 0);
        }, 0);

  const isFullyComplete = mode === "full" || (mode === "custom" && selectedIds.length === modules.length);
  const hasSelection = mode === "full" || (mode === "custom" && selectedIds.length > 0);

  function switchToFull() {
    setMode("full");
    setSelectedIds(allIds);
    setPendingWarningId(null);
    setDismissed(false);
  }

  function switchToCustom() {
    setMode("custom");
    setSelectedIds([]);
    setPendingWarningId(null);
    setDismissed(false);
  }

  function getMissingPrereqs(moduleId) {
    const mod = modules.find((m) => m.id === moduleId);
    if (!mod) return [];
    return mod.prerequisiteIds.filter((id) => !selectedIds.includes(id));
  }

  function toggleModule(moduleId) {
    if (selectedIds.includes(moduleId)) {
      setSelectedIds((prev) => prev.filter((id) => id !== moduleId));
      setAcknowledgedIds((prev) => prev.filter((id) => id !== moduleId));
      if (pendingWarningId === moduleId) setPendingWarningId(null);
      setDismissed(false);
      return;
    }

    const missing = getMissingPrereqs(moduleId);
    if (missing.length > 0 && !acknowledgedIds.includes(moduleId)) {
      setPendingWarningId(moduleId);
      return;
    }

    setSelectedIds((prev) => [...prev, moduleId]);
    setPendingWarningId(null);
    setDismissed(false);
  }

  function acknowledgeAndAdd(moduleId) {
    setAcknowledgedIds((prev) => [...prev, moduleId]);
    setSelectedIds((prev) => [...prev, moduleId]);
    setPendingWarningId(null);
    setDismissed(false);
  }

  function buildWhatsappLink() {
    const chosen = mode === "full" ? modules : modules.filter((m) => selectedIds.includes(m.id));
    const moduleList =
      mode === "full"
        ? "All 6 steps (Full Course)"
        : chosen
            .sort((a, b) => a.order - b.order)
            .map((m) => `Step ${m.order}: ${m.title} — ${formatMoney(m.price, pricing.currencySymbol)}`)
            .join("\n");

    const message = whatsapp.messageTemplate
      .replace("{courseTitle}", data.hero.title)
      .replace("{moduleList}", moduleList)
      .replace("{currency}", pricing.currencySymbol)
      .replace("{total}", total.toLocaleString("en-NG"));

    return `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(message)}`;
  }

  return (
    <section id="choose-how-you-start" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Choose How You Want to Start</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the full course and save money, or start with just one step — whatever fits your
            budget today. You can always add more later.
          </p>
        </div>

        {/* Mode cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <button
            onClick={switchToFull}
            className={`text-left rounded-2xl p-6 border-2 transition-all ${
              mode === "full" ? "border-teal-500 bg-teal-50 shadow-lg" : "border-gray-200 bg-white hover:border-teal-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wide text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                Best value
              </span>
              {mode === "full" && <HiCheck className="text-teal-600 text-2xl" />}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Take the Full Course</h3>
            <p className="text-gray-600 text-sm mb-4">
              All {modules.length} steps, one price. You save {formatMoney(savings, pricing.currencySymbol)} compared
              to paying step by step.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {formatMoney(pricing.fullCoursePrice, pricing.currencySymbol)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {formatMoney(pricing.fullCourseOriginalPrice, pricing.currencySymbol)}
              </span>
            </div>
          </button>

          <button
            onClick={switchToCustom}
            className={`text-left rounded-2xl p-6 border-2 transition-all ${
              mode === "custom" ? "border-purple-500 bg-purple-50 shadow-lg" : "border-gray-200 bg-white hover:border-purple-200"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                Pay as you learn
              </span>
              {mode === "custom" && <HiCheck className="text-purple-600 text-2xl" />}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Start With One Step</h3>
            <p className="text-gray-600 text-sm mb-4">
              Pick just the steps you can afford right now. Every step comes with its own
              certificate.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                From {formatMoney(Math.min(...modules.map((m) => m.price)), pricing.currencySymbol)}
              </span>
            </div>
          </button>
        </div>

        {/* Step list - only shown once the student has made a choice above */}
        {mode === null ? (
          <div className="text-center py-10 px-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50 mb-10">
            <p className="text-gray-500">
              Pick an option above — we'll show you each step, what you'll learn, and your total.
              Nothing is charged yet.
            </p>
          </div>
        ) : (
          <div className={`space-y-4 ${hasSelection ? "mb-32" : "mb-10"}`}>
            {modules.map((mod) => {
              const isSelected = mode === "full" ? true : selectedIds.includes(mod.id);
              const isExpanded = expandedId === mod.id;
              const missing = getMissingPrereqs(mod.id);
              const showWarning = pendingWarningId === mod.id;
              const missingTitles = missing.map((id) => {
                const m = modules.find((x) => x.id === id);
                return m ? `Step ${m.order}` : id;
              });

              return (
                <div
                  key={mod.id}
                  className={`rounded-2xl border transition-all ${
                    isSelected ? "border-gray-300 bg-white shadow-sm" : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div className="flex items-start gap-4 p-5">
                    {mode === "custom" && (
                      <button
                        onClick={() => toggleModule(mod.id)}
                        aria-label={isSelected ? `Remove Step ${mod.order}` : `Add Step ${mod.order}`}
                        className={`flex-shrink-0 mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                          isSelected ? "bg-purple-600 border-purple-600" : "border-gray-300 bg-white"
                        }`}
                      >
                        {isSelected && <HiCheck className="text-white text-sm" />}
                      </button>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-gray-500">
                          Step {mod.order} of {modules.length}
                        </span>
                        {mod.tag && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                            {mod.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{mod.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{mod.summary}</p>

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : mod.id)}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
                      >
                        {isExpanded ? "Hide what you'll learn" : "See what you'll learn"}
                        <HiChevronDown className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-3 space-y-2 pl-1">
                              {mod.whatYouWillLearn.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <HiBadgeCheck className="text-teal-600 mt-0.5 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                            {mod.labs.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {mod.labs.map((lab, i) => (
                                  <span key={i} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                                    Hands-on: {lab.title}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {showWarning && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                              <div className="flex items-start gap-2 mb-3">
                                <HiOutlineExclamation className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
                                <div>
                                  <p className="text-sm font-semibold text-amber-900">Before you skip ahead</p>
                                  <p className="text-sm text-amber-800 mt-1">
                                    This step usually comes after {missingTitles.join(" and ")}. Starting
                                    here is completely fine if you already know the basics — just know
                                    some parts may assume you do. It won't affect your Full Course
                                    Certificate as long as you complete all {modules.length} steps eventually.
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <button
                                  onClick={() => acknowledgeAndAdd(mod.id)}
                                  className="text-sm font-semibold bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                                >
                                  I understand, add this step
                                </button>
                                <button
                                  onClick={() => setPendingWarningId(null)}
                                  className="text-sm font-semibold text-amber-800 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-gray-900">{formatMoney(mod.price, pricing.currencySymbol)}</div>
                      <div className="text-xs text-gray-400">this step</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Sticky summary bar - closable, reappears automatically on any new selection */}
      <AnimatePresence>
        {hasSelection && !dismissed && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pointer-events-none"
          >
            <div className="max-w-5xl mx-auto relative pointer-events-auto">
              <button
                onClick={() => setDismissed(true)}
                aria-label="Close summary"
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition-colors z-10"
              >
                <HiX size={16} />
              </button>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500">
                    {mode === "full" ? "Full Course selected" : `${selectedIds.length} of ${modules.length} steps selected`}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{formatMoney(total, pricing.currencySymbol)}</div>
                  {mode === "custom" && !isFullyComplete && (
                    <div className="text-xs text-teal-700 font-medium mt-0.5">
                      Take all {modules.length} steps and save {formatMoney(savings, pricing.currencySymbol)}
                    </div>
                  )}
                  {isFullyComplete && (
                    <div className="text-xs text-teal-700 font-medium mt-0.5">Full Course Certificate unlocked</div>
                  )}
                </div>

                <a
                  href={buildWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all"
                >
                  <FaWhatsapp size={20} />
                  Continue on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}