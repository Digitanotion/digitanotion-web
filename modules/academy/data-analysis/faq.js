"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { TbChartInfographic } from "react-icons/tb";

const faqs = [
  {
    question: "Do I need prior experience in data analysis?",
    answer:
      "No, this course is designed for beginners with basic computer skills. We start from the fundamentals of Excel and SQL, gradually building up to advanced Power BI dashboards. All you need is analytical thinking and willingness to learn!",
  },
  {
    question: "Why Power BI over other visualization tools?",
    answer:
      "Power BI is the market leader in business intelligence, used by 97% of Fortune 500 companies. It's free for desktop use, integrates seamlessly with Excel and SQL Server, and has the fastest-growing job demand in Nigeria's data analytics market.",
  },
  {
    question: "Will I learn both Excel and Power BI?",
    answer:
      "Absolutely! You'll master Excel for data preparation and analysis, then leverage Power BI for advanced visualization and dashboards. This combination makes you a complete data analyst ready for any role.",
  },
  {
    question: "What SQL Server will I learn?",
    answer:
      "You'll learn SQL Server Express - the free, fully-featured database engine from Microsoft. You'll master writing queries, joining tables, aggregating data, and optimizing query performance - skills essential for any data professional.",
  },
  {
    question: "Do I need a powerful computer?",
    answer:
      "A Windows laptop with 8GB RAM is recommended for the best experience with Power BI and SQL Server. Mac users can use Boot Camp or Parallels. We provide guidance on setup during orientation.",
  },
  {
    question: "Will I have a portfolio by the end?",
    answer:
      "Yes! You'll complete 5 real-world projects including sales dashboards, financial analytics, customer insights, HR analytics, and a capstone executive dashboard. These become your professional portfolio to showcase to employers.",
  },
  {
    question: "Is there job placement support for data analysts?",
    answer:
      "Yes! We have partnerships with banks, telecoms, and consulting firms actively hiring data analysts. Our career support includes portfolio reviews, mock interviews, resume optimization, and direct referrals to our hiring network.",
  },
  {
    question: "Is this certification recognized by employers?",
    answer:
      "Yes, our Data Analysis certification is industry-recognized and valued by employers across Nigeria and Africa. Many of our graduates work as data analysts at banks, fintechs, NGOs, and multinational companies.",
  },
  {
    question: "What makes this course different from online tutorials?",
    answer:
      "This is a structured, mentor-led program with personalized feedback, real-world datasets, and career coaching. You don't just learn tools - you learn how to think like a data analyst and solve business problems with data.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
            <TbChartInfographic className="text-orange-600" size={20} />
            <span className="text-sm font-semibold text-orange-700">
              Got Questions? We've Got Answers
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our Data Analysis program
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
              Ready to become a Data Analyst?
            </h3>
            <p className="text-gray-600 mb-6">
              Chat with our program advisors to learn more about the course
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348073735836?text=Hi!%20I%20am%20interested%20in%20your%20Data%20Analysis%20Course%20with%20Power%20BI%2C%20Excel%20and%20SQL"
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
