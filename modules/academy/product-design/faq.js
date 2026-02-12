"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { TbBrandFigma } from "react-icons/tb";

const faqs = [
  {
    question: "Do I need prior design experience to join this course?",
    answer:
      "No, this course is designed for beginners with basic computer skills. We start from design thinking fundamentals and gradually build up to advanced UI/UX concepts. All you need is a creative mindset and willingness to learn!",
  },
  {
    question: "Why is Figma the primary tool taught in this course?",
    answer:
      "Figma is the industry standard for UI/UX design, used by 90%+ of design teams globally. It's browser-based, free for students, enables real-time collaboration, and handles everything from wireframing to prototyping and developer handoff.",
  },
  {
    question: "Will I have a portfolio by the end of this course?",
    answer:
      "Absolutely! You'll complete 15+ hands-on projects and a comprehensive capstone project. We guide you through creating professional case studies and building your portfolio website to showcase your work to employers.",
  },
  {
    question: "What's the difference between UI and UX design?",
    answer:
      "UX (User Experience) focuses on the overall feel and functionality - research, information architecture, user flows. UI (User Interface) focuses on the visual design - colors, typography, interactive elements. This course covers both comprehensively.",
  },
  {
    question: "Do you offer job placement support for designers?",
    answer:
      "Yes! Our career support includes portfolio reviews, mock interviews, resume optimization, and connections to our hiring partner network. Graduates with 70%+ scores qualify for internships at Digitanotion and partner companies.",
  },
  {
    question: "Can I take this course online from outside Awka?",
    answer:
      "Yes! We offer both onsite training at our Awka campus and live online classes for students across Nigeria and Africa. All online sessions are interactive with one-on-one mentorship.",
  },
  {
    question: "What software will I need for this course?",
    answer:
      "Figma is our primary tool (free). We also introduce Adobe XD, Framer, and prototyping tools. All software recommendations are free or have student plans. We'll guide you through setup on day one.",
  },
  {
    question: "Is this certification recognized by employers?",
    answer:
      "Yes, our Product Design certification is industry-recognized and valued by employers across Nigeria and Africa. Many of our graduates work at top tech companies and design agencies.",
  },
  {
    question: "What makes this course different from online tutorials?",
    answer:
      "This is a structured, mentor-led program with personalized feedback, peer collaboration, real-world projects, and career support. You don't just learn tools - you learn design thinking, problem-solving, and professional workflows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 mb-6">
            <TbBrandFigma className="text-pink-600" size={20} />
            <span className="text-sm font-semibold text-pink-700">
              Got Questions? We've Got Answers
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our Product Design program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <FiChevronDown className="text-gray-400" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Chat with our design program advisors for personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348073735836?text=Hi!%20I%20am%20interested%20in%20your%20Product%20Design%20course"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold hover:shadow-xl hover:shadow-pink-200 transition-all hover:-translate-y-1"
              >
                Chat on WhatsApp
              </a>
              <a
                href="/academy/contact"
                className="px-8 py-4 rounded-xl border-2 border-pink-500 text-pink-600 font-bold hover:bg-pink-50 transition-all"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
