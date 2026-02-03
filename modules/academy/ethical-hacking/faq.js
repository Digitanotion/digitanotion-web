"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiShield,
  FiTarget,
  FiAward,
} from "react-icons/fi";
import { SiKalilinux, SiMetasploit } from "react-icons/si";

const faqs = [
  {
    question: "What makes this Ethical Hacking course different from others?",
    answer:
      "Our course offers: 1) 20+ hands-on advanced labs with real-world scenarios, 2) CEH-aligned curriculum, 3) Industry-recognized certification, 4) Access to professional hacking tools, 5) Career placement support, and 6) Alumni network of security professionals.",
  },
  {
    question: "What are the prerequisites for this specialization?",
    answer:
      "You need: 1) Computing Essentials or equivalent computer skills, 2) Cybersecurity Foundations knowledge, 3) Basic understanding of networking concepts, 4) Familiarity with operating systems. We provide assessment tests to ensure you're ready for the advanced content.",
  },
  {
    question: "Will I get certified after completing this course?",
    answer:
      "Yes! Upon successful completion, you'll receive the 'Digitanotion Certified Ethical Hacker (DCEH)' certificate. This certification is recognized by our industry partners and can help you pursue roles like Penetration Tester, Security Analyst, or Ethical Hacker.",
  },
  {
    question: "What tools will I learn to use?",
    answer:
      "You'll master industry-standard tools including: Kali Linux, Metasploit Framework, Burp Suite, Nmap, Wireshark, SQLmap, John the Ripper, Hydra, Aircrack-ng, Social Engineering Toolkit, and many others used by professional penetration testers.",
  },
  {
    question: "Are the labs conducted in a safe environment?",
    answer:
      "Absolutely! All labs are conducted in isolated virtual environments with intentionally vulnerable systems. You'll work in controlled lab networks designed specifically for training, ensuring no real systems are compromised during your learning.",
  },
  {
    question: "What career opportunities does this course open?",
    answer:
      "This course prepares you for roles such as: Penetration Tester, Ethical Hacker, Vulnerability Assessment Analyst, Security Consultant, Security Auditor, SOC Analyst (Level 2/3), Incident Responder, and Security Engineer. Our graduates have been placed in top security firms.",
  },
  {
    question: "How much time should I dedicate weekly?",
    answer:
      "We recommend 12-15 hours per week: 6 hours for live sessions, 6-8 hours for lab exercises, and 2-3 hours for self-study. The course is intensive but structured to ensure mastery of all concepts.",
  },
  {
    question: "Is this course suitable for beginners in cybersecurity?",
    answer:
      "This is an advanced specialization. While beginners can enroll, we strongly recommend completing our Cybersecurity Foundations course first. The content assumes foundational knowledge of security concepts and basic technical skills.",
  },
  {
    question: "What kind of projects will I work on?",
    answer:
      "You'll complete: 1) Comprehensive network penetration test, 2) Web application security assessment, 3) Wireless security audit, 4) Social engineering campaign simulation, and 5) Final capstone project simulating a real corporate penetration test with professional reporting.",
  },
  {
    question: "What support is available during the course?",
    answer:
      "You receive: 1) Dedicated mentor with industry experience, 2) 24/7 lab access, 3) Technical support forum, 4) Career counseling sessions, 5) Resume and interview preparation, and 6) Access to our alumni job board with exclusive opportunities.",
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
            <FiTarget className="text-red-600" size={24} />
            <h2 className="text-4xl font-bold text-gray-900">
              Ethical Hacking FAQ
            </h2>
            <SiKalilinux className="text-orange-600" size={24} />
          </div>
          <p className="text-lg text-gray-600">
            Everything you need to know about becoming a certified ethical
            hacker
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-red-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-red-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                      <span className="font-bold text-red-600 text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                </div>
                <span className="text-red-600">
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

        <div className="mt-12 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200">
          <div className="text-center">
            <div className="flex justify-center gap-3 mb-4">
              <FiAward className="text-red-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                Ready to become a Certified Ethical Hacker?
              </h3>
              <SiMetasploit className="text-orange-600" size={24} />
            </div>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              Join our elite program and gain the skills to protect
              organizations from cyber threats.
            </p>
            <a
              href="mailto:ethical-hacking@digitanotion.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <FiTarget /> Contact Admissions for Ethical Hacking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
