"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "This course is perfect for absolute beginners with no prior computer experience, career switchers looking to enter the tech industry, students preparing for higher education, professionals needing digital skills, and anyone wanting to improve their computer literacy.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "You need a computer (Windows or Mac) with internet access. No prior knowledge is required - we start from absolute basics. All software and tools will be provided during the course.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes! Upon successful completion with at least 70% score in your final project, you'll receive a Digitanotion Academy Certificate of Completion that's recognized by industry partners.",
  },
  {
    question: "How is the course delivered?",
    answer:
      "The course is delivered onsite at our training center or online with hands-on practical sessions. Each class includes live instruction, guided exercises, and individual practice with mentor support.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "You can also schedule makeup sessions with our mentors to catch up on missed content, but make sure you dropped a notice of absence official to the Academy",
  },
  {
    question: "Can I get a refund?",
    answer: "You can be refunded only if your class has not started",
  },
  {
    question: "What support is available during the course?",
    answer:
      "You'll have access to dedicated mentors, a student community forum, office hours for one-on-one help, and career guidance sessions.",
  },
  {
    question: "How will this course help my career?",
    answer:
      "This course provides the essential digital skills needed for modern workplaces. You'll be prepared for administrative roles, further tech training, or to improve productivity in your current job.",
  },
  {
    question: "Are there any prerequisites?",
    answer:
      "No prerequisites required! This course starts from absolute basics. You just need enthusiasm and commitment to learn.",
  },
  {
    question: "What happens after I complete the course?",
    answer:
      "You'll join our alumni network, get career placement assistance, receive guidance on next learning steps, and have access to exclusive job opportunities from our partner companies.",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Computing Essentials
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
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

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="mailto:academy@digitanotion.com"
              className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
            >
              Contact our admissions team
            </a>
            , or Send us a DM via WhatsApp +234 80 7373 5836
          </p>
        </div>
      </div>
    </section>
  );
}
