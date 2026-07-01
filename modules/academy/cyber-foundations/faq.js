"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiShield, FiCpu } from "react-icons/fi";
import courseData from "./data.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = courseData.faqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <FiShield className="text-blue-600" size={24} />
            <h2 className="text-4xl font-bold text-gray-900">Questions People Ask</h2>
            <FiCpu className="text-purple-600" size={24} />
          </div>
          <p className="text-lg text-gray-600">
            Everything you need to know before you start your cybersecurity journey
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-blue-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="font-bold text-blue-600 text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                </div>
                <span className="text-blue-600 flex-shrink-0">
                  {openIndex === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to start your cybersecurity journey?</h3>
            <p className="text-gray-700 mb-4">Choose your path above and message us — we'll take it from there.</p>
            <a
              href="#choose-how-you-start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              <FiShield /> Choose How You Want to Start
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}