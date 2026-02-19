"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { TbBrandLaravel } from "react-icons/tb";

const faqs = [
  {
    question: "Do I need prior programming experience for this course?",
    answer:
      "Yes, this is an intermediate-level course. You should have completed Web Development Fundamentals or have equivalent knowledge of HTML/CSS and basic programming concepts. We recommend being comfortable with variables, loops, functions, and basic logic.",
  },
  {
    question: "Why Laravel/PHP over other backend technologies?",
    answer:
      "Laravel is the most popular PHP framework, powering over 1.5 million websites including major platforms like Slack, Pfizer, and BBC. PHP powers 78% of all websites with known server-side programming languages. In Nigeria, there's massive demand for Laravel developers in fintech, e-commerce, and enterprise applications.",
  },
  {
    question: "Will I learn cloud deployment?",
    answer:
      "Absolutely! You'll deploy multiple projects to AWS (Amazon Web Services) including EC2, RDS, and Elastic Beanstalk. You'll understand server configuration, environment variables, and CI/CD pipelines - skills highly sought after by employers.",
  },
  {
    question: "What kind of projects will I build?",
    answer:
      "You'll build 5 production-ready projects including an e-commerce API, social media backend, hotel booking system, task management API, and a complete SaaS platform with multi-tenancy and subscription billing. All projects go into your portfolio.",
  },
  {
    question: "Is there job placement support for backend developers?",
    answer:
      "Yes! We have strong partnerships with Nigerian tech companies, banks, and fintech startups actively hiring Laravel developers. Our career support includes resume optimization, technical interview prep, portfolio review, and direct referrals to our hiring network.",
  },
  {
    question: "What databases will I learn?",
    answer:
      "You'll master both MySQL and PostgreSQL - the two most popular open-source relational databases. You'll learn database design, complex queries, indexing strategies, and optimization techniques used in high-scale applications.",
  },
  {
    question: "Do I need a powerful computer?",
    answer:
      "No, our cloud-based development environment means you can code from any laptop. We provide pre-configured Laravel environments, so you focus on learning, not setup. A basic laptop with 4GB RAM is sufficient.",
  },
  {
    question: "Is this certification recognized by employers?",
    answer:
      "Yes, our Backend Engineering certification is highly regarded by employers across Nigeria and Africa. Many of our graduates work at leading companies like Andela, Paystack, Flutterwave, and Nigerian banks as backend developers.",
  },
  {
    question: "What makes this course different from online tutorials?",
    answer:
      "This is mentor-led, project-based learning with personalized code reviews, real-world architecture discussions, and career coaching. You don't just learn syntax - you learn how to think like a senior backend engineer and make architectural decisions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
            <TbBrandLaravel className="text-orange-600" size={20} />
            <span className="text-sm font-semibold text-orange-700">
              Got Questions? We've Got Answers
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our Backend Engineering program
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
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to become a Backend Engineer?
            </h3>
            <p className="text-gray-600 mb-6">
              Chat with our program advisors to learn more about the course
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348073735836?text=Hi!%20I%20am%20interested%20in%20your%20Backend%20Engineer%20Laravel%20PHP%20Specialization%20Course"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Chat on WhatsApp
              </a>
              <a
                href="/academy/contact"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
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
