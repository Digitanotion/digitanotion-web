"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiShield, FiCpu } from "react-icons/fi";

const faqs = [
  {
    question: "Who should take this Cybersecurity Foundations course?",
    answer:
      "This course is ideal for: 1) Complete beginners interested in cybersecurity, 2) IT professionals wanting to transition to security roles, 3) Students exploring cybersecurity careers, 4) Professionals seeking to understand security basics for their current roles, 5) Anyone curious about which cybersecurity specialization suits them best.",
  },
  {
    question: "What equipment or software do I need?",
    answer:
      "You need a computer with at least 8GB RAM (16GB recommended), 50GB free storage, and stable internet. We provide access to our virtual lab environment with Kali Linux and all necessary security tools. No prior tools or software needed.",
  },
  {
    question: "Will this course help me choose a cybersecurity specialization?",
    answer:
      "Absolutely! This course includes dedicated modules on cybersecurity career paths. You'll explore different specializations like Network Security, Ethical Hacking, SOC Analysis, Digital Forensics, and more. By the end, you'll have a clear roadmap for your preferred specialization.",
  },
  {
    question: "What are the 5+ labs included in this course?",
    answer:
      "You'll work on hands-on labs including: 1) Linux Operating System (Kali) basics, 2) Simple Malware Analysis, 3) OSINT Information Gathering, 4) Social Engineering - Phishing, and 5) AI and Security Tool Exploration. Each lab includes guided exercises and practical challenges.",
  },
  {
    question: "Is there any certification after completion?",
    answer:
      "Yes! Upon successful completion with at least 70% score in lab exercises, you'll receive the 'Digitanotion Cybersecurity Foundations Certificate'. This certificate is recognized by our industry partners and can be included in your cybersecurity portfolio.",
  },
  {
    question: "What if I have no IT background?",
    answer:
      "This course starts from absolute basics. We recommend completing our Computing Essentials course first or having equivalent basic computer skills. We provide supplementary materials for complete beginners to catch up on any IT fundamentals needed.",
  },
  {
    question: "How much time should I dedicate weekly?",
    answer:
      "We recommend 8-10 hours per week: 3-4 hours for live sessions, 3-4 hours for lab exercises, and 2 hours for self-study and practice. The course is designed to be intensive yet manageable alongside other commitments.",
  },
  {
    question: "What career opportunities can this course lead to?",
    answer:
      "This foundation prepares you for entry-level roles like Security Analyst Trainee, SOC Junior Analyst, IT Support with Security Focus, or further specialized training. Many students continue to our advanced cybersecurity courses after completing foundations.",
  },
  {
    question: "Are the labs real or simulated?",
    answer:
      "We use a combination of virtual machines with real security tools and controlled lab environments. All exercises are conducted in safe, isolated environments designed specifically for learning. You'll work with real tools like Nmap, Wireshark, and Metasploit in ethical, controlled scenarios.",
  },
  {
    question: "What support is available during the course?",
    answer:
      "You get: 1) Dedicated mentor for technical guidance, 2) 24/7 lab access, 3) Student community forum, 4) Weekly office hours, 5) Career counseling sessions, and 6) Alumni network access upon completion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <FiShield className="text-blue-600" size={24} />
            <h2 className="text-4xl font-bold text-gray-900">
              Cybersecurity FAQ
            </h2>
            <FiCpu className="text-purple-600" size={24} />
          </div>
          <p className="text-lg text-gray-600">
            Everything you need to know about starting your cybersecurity
            journey
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
                      <span className="font-bold text-blue-600 text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                </div>
                <span className="text-blue-600">
                  {openIndex === index ? (
                    <FiChevronUp size={24} />
                  ) : (
                    <FiChevronDown size={24} />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to start your cybersecurity journey?
            </h3>
            <p className="text-gray-700 mb-4">
              Join our next cohort and begin building your security skills
              today.
            </p>
            <a
              href="mailto:security@digitanotion.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              <FiShield /> Contact Security Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
