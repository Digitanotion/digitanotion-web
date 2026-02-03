"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiCode,
  FiTarget,
  FiAward,
  FiGlobe,
} from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiVercel } from "react-icons/si";

const faqs = [
  {
    question: "What makes this Front-End Engineering course special?",
    answer:
      "Our course focuses on: 1) Modern stack with Next.js 14 and TypeScript, 2) 15+ hands-on real-world projects, 3) Performance optimization mastery, 4) Production deployment expertise, 5) Industry-recognized certification, and 6) Career-focused portfolio building.",
  },
  {
    question: "What are the prerequisites for this specialization?",
    answer: (
      <>
        You need our{" "}
        <a
          href="/academy/computing-essentials"
          className="text-blue-600 hover:text-blue-800 underline font-medium"
        >
          Computing Essentials
        </a>{" "}
        course or equivalent computer skills, plus HTML, CSS & JavaScript
        fundamentals.
      </>
    ),
  },
  {
    question: "Will I receive a certification after completing this course?",
    answer:
      "Yes! Upon successful completion, you'll receive the 'Digitanotion Certified Front-End Engineer' certificate. This certification is recognized by our industry partners and validates your skills in modern front-end development.",
  },
  {
    question: "What technologies and tools will I learn?",
    answer:
      "You'll master: React 18 with Hooks, Next.js 14 (App Router, Server Components), TypeScript, Tailwind CSS, Vercel deployment, React Query, Zustand, Testing Library, and modern development tools like ESLint, Prettier, and Git.",
  },
  {
    question: "How is web hosting and deployment covered in this course?",
    answer:
      "We provide comprehensive training on: 1) Vercel platform deployment, 2) Custom domain setup, 3) Environment variables management, 4) CI/CD pipelines, 5) Performance monitoring, and 6) Production optimization techniques.",
  },
  {
    question: "What career opportunities does this course prepare me for?",
    answer:
      "This course prepares you for roles such as: Front-End Developer, React Developer, Next.js Developer, UI Engineer, Front-End Engineer, Web Developer, and Technical Lead. Our graduates work at top tech companies and startups.",
  },
  {
    question: "How much time should I dedicate weekly?",
    answer:
      "We recommend 10-12 hours per week: 6 hours for live sessions, 4-5 hours for project work, and 2-3 hours for self-study and practice. The course is intensive but structured for optimal learning.",
  },
  {
    question: "Is this course suitable for beginners in web development?",
    answer:
      "This is an advanced specialization. We recommend completing our Web Development Fundamentals course first or having equivalent experience. The course builds on foundational knowledge with advanced concepts.",
  },
  {
    question: "What kind of projects will I build?",
    answer:
      "You'll build: 1) E-commerce platform with payments, 2) Social media dashboard, 3) Real-time chat application, 4) Portfolio website with CMS, 5) Performance-optimized blog, and 6) Final capstone project solving real-world problems.",
  },
  {
    question: "What support is available during the course?",
    answer:
      "You receive: 1) Dedicated mentor with industry experience, 2) Code reviews and feedback, 3) Technical support forum, 4) Career guidance sessions, 5) Portfolio review, and 6) Access to our job referral network.",
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
            <FiCode className="text-blue-600" size={24} />
            <h2 className="text-4xl font-bold text-gray-900">
              Front-End Engineering FAQ
            </h2>
            <SiReact className="text-cyan-600" size={24} />
          </div>
          <p className="text-lg text-gray-600">
            Everything you need to know about becoming a professional front-end
            engineer
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

        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
          <div className="text-center">
            <div className="flex justify-center gap-3 mb-4">
              <FiAward className="text-blue-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                Ready to become a Professional Front-End Engineer?
              </h3>
              <SiNextdotjs className="text-gray-800" size={24} />
            </div>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              Join our specialized program and master modern front-end
              development with React, Next.js, and advanced web technologies.
            </p>
            <a
              href="mailto:frontend@digitanotion.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <FiTarget /> Contact Admissions for Front-End Engineering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
