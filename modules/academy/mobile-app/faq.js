"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiCode,
  FiTarget,
  FiAward,
  FiGlobe,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGoogleplay,
  SiAppstore,
} from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why choose Flutter over other mobile frameworks?",
      answer: (
        <>
          Flutter offers several advantages:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>Single codebase</strong> for iOS and Android
            </li>
            <li>
              • <strong>Native performance</strong> with compiled code
            </li>
            <li>
              • <strong>Hot reload</strong> for instant UI updates
            </li>
            <li>
              • <strong>Rich widget library</strong> for beautiful UIs
            </li>
            <li>
              • <strong>Backed by Google</strong> with strong community support
            </li>
            <li>
              • <strong>Growing job market</strong> with high demand
            </li>
          </ul>
          Companies like Google, Alibaba, and BMW use Flutter for their apps.
        </>
      ),
    },
    {
      question: "What are the prerequisites for this Flutter specialization?",
      answer: (
        <>
          You should have:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • Our{" "}
              <a
                href="/academy/computing-essentials"
                className="text-purple-600 hover:text-purple-800 underline font-medium"
              >
                Computing Essentials
              </a>{" "}
              course or equivalent
            </li>
            <li>
              • Basic understanding of object-oriented programming (Any
              Language)
            </li>
            <li>• Willingness to learn and build complex applications</li>
          </ul>
          We assess each student's readiness before admission.
        </>
      ),
    },
    {
      question:
        "Will I learn to publish apps to both Apple App Store and Google Play?",
      answer: (
        <>
          Yes! App publishing is a core part of this course:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>Google Play Store</strong> setup and publishing process
            </li>
            <li>
              • <strong>Apple App Store</strong> requirements and submission
            </li>
            <li>• App store optimization (ASO) techniques</li>
            <li>• App signing and security considerations</li>
            <li>• Store guideline compliance</li>
            <li>• Update management and version control</li>
          </ul>
          You'll publish at least one app to each store during the course.
        </>
      ),
    },
    {
      question: "What kind of apps will I build during the course?",
      answer: (
        <>
          You'll build a variety of real-world applications:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>E-commerce app</strong> with cart and payments
            </li>

            <li>
              • <strong>Task manager</strong> with local storage
            </li>
            <li>
              • <strong>Weather app</strong> with API integration
            </li>

            <li>
              • <strong>Capstone project</strong> - your own unique app idea
            </li>
          </ul>
          Each project builds on previous skills and concepts.
        </>
      ),
    },

    {
      question: "Do I need a Mac to develop iOS apps?",
      answer: (
        <>
          For iOS development:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>Mac is required</strong> for iOS development and App
              Store publishing, but you can still learn Flutter and develop
              Android apps if you don't have Mac for now.
            </li>
          </ul>
          The course focuses on cross-platform skills applicable to both
          platforms.
        </>
      ),
    },
    {
      question: "What career opportunities are available after this course?",
      answer: (
        <>
          Flutter developers are in high demand for roles like:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>Flutter Developer</strong>
            </li>
            <li>
              • <strong>Mobile App Developer</strong>
            </li>
            <li>
              • <strong>Cross-Platform Developer</strong>
            </li>
            <li>
              • <strong>UI/UX Developer</strong>
            </li>
            <li>
              • <strong>App Development Consultant</strong>
            </li>
            <li>
              • <strong>Freelance Mobile Developer</strong>
            </li>
          </ul>
          Many of our graduates work at tech companies or start their own app
          businesses.
        </>
      ),
    },
    {
      question: "How much time should I dedicate weekly?",
      answer: (
        <>
          We recommend:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>6 hours</strong> of live sessions per week
            </li>
            <li>
              • <strong>8-10 hours</strong> for project work and coding practice
            </li>
            <li>
              • <strong>4-6 hours</strong> for self-study and review
            </li>
            <li>
              • <strong>Total: 18-22 hours</strong> per week commitment
            </li>
          </ul>
          The course is intensive but structured with progressive learning.
        </>
      ),
    },
    {
      question: "What support is available during the course?",
      answer: (
        <>
          Comprehensive support includes:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>Experienced Flutter developers</strong> as instructors
            </li>
            <li>
              • <strong>Code reviews</strong> and personalized feedback
            </li>
            <li>
              • <strong>Technical support</strong> via the Cohort community
            </li>
            <li>
              • <strong>Office hours</strong> for one-on-one help
            </li>
            <li>
              • <strong>Project mentorship</strong> for capstone projects
            </li>
            <li>
              • <strong>Career guidance</strong> and job placement support
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What certification will I receive?",
      answer: (
        <>
          Upon completion, you'll receive the{" "}
          <span className="font-semibold text-purple-700">
            'Digitanotion Certified Flutter Developer'
          </span>{" "}
          certificate. This validates your skills in:
          <ul className="mt-2 space-y-1 pl-5">
            <li>• Flutter & Dart development</li>
            <li>• Cross-platform mobile app creation</li>
            <li>• App publishing and deployment</li>
            <li>• Backend integration with Firebase</li>
          </ul>
          The certificate is recognized by our industry partners.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <SiFlutter className="text-blue-500" size={24} />
            <h2 className="text-4xl font-bold text-gray-900">
              Mobile App Development FAQ
            </h2>
            <SiDart className="text-blue-600" size={24} />
          </div>
          <p className="text-lg text-gray-600">
            Everything you need to know about becoming a Flutter developer
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-purple-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-purple-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <span className="font-bold text-purple-600 text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                </div>
                <span className="text-purple-600">
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
                    <div className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
          <div className="text-center">
            <div className="flex justify-center gap-3 mb-4">
              <FiAward className="text-purple-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                Ready to Build Cross-Platform Mobile Apps?
              </h3>
              <TbBrandFlutter className="text-blue-500" size={24} />
            </div>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              Master Flutter & Dart to create beautiful iOS and Android apps
              from a single codebase.
            </p>
            <a
              href="mailto:mobile-dev@digitanotion.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <FiTarget /> Contact Admissions for Mobile App Development
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
