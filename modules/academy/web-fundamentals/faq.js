"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiCode,
  FiTarget,
  FiAward,
  FiGlobe,
  FiBook,
  FiArrowRight,
} from "react-icons/fi";
import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill } from "react-icons/ri";
import { MdWeb, MdImportantDevices } from "react-icons/md";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Is this course suitable for complete beginners with no coding experience?",
      answer: (
        <>
          Absolutely! This course is specifically designed for{" "}
          <strong>complete beginners</strong>. We start from the very basics -
          what is the internet, how do browsers work, and what is code. No prior
          experience needed, just willingness to learn.
        </>
      ),
    },
    {
      question:
        "Why learn vanilla HTML/CSS/JavaScript instead of jumping to frameworks?",
      answer: (
        <>
          Learning the fundamentals first is crucial because:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • You understand <strong>how things actually work</strong> under
              the hood
            </li>
            <li>
              • Frameworks become easier to learn when you know the basics
            </li>
            <li>
              • You can <strong>debug problems</strong> more effectively
            </li>
            <li>
              • It makes you a <strong>better problem solver</strong>
            </li>
            <li>• You're not limited to framework constraints</li>
          </ul>
          As the saying goes:{" "}
          <em>"You have to learn to walk before you can run."</em>
        </>
      ),
    },
    {
      question:
        "What's the difference between this and the Front-End Engineer specialization?",
      answer: (
        <>
          Great question! Here's the difference:
          <ul className="mt-2 space-y-3 pl-5">
            <li>
              <strong>Web Development Fundamentals (This Course):</strong>
              <ul className="mt-1 ml-5 space-y-1">
                <li>• For absolute beginners</li>
                <li>• Teaches vanilla HTML, CSS, JavaScript</li>
                <li>• Focuses on understanding how the web works</li>
                <li>• 9 weeks, ₦100,000</li>
                <li>• Prepares you for the specialization</li>
              </ul>
            </li>
            <li>
              <strong>Front-End Engineer (Specialization):</strong>
              <ul className="mt-1 ml-5 space-y-1">
                <li>• Teaches React, Next.js, TypeScript</li>
                <li>• Focuses on modern frameworks and advanced topics</li>
                <li>• 14 weeks</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Will I learn web hosting and how to deploy my websites?",
      answer: (
        <>
          Yes! Deployment is a core part of this course. You'll learn:
          <ul className="mt-2 space-y-2 pl-5">
            <li>• How to purchase and set up a domain name</li>
            <li>• Different web hosting options (shared, VPS, cloud)</li>
            <li>• Using FTP to upload your files</li>
            <li>• Free hosting options for beginners</li>
            <li>• How to make your site live on the internet</li>
            <li>• Basic Git for version control</li>
          </ul>
          By the end, you'll have at least one website live on the internet with
          your own domain!
        </>
      ),
    },
    {
      question: "Do I need a powerful computer for this course?",
      answer: (
        <>
          Not at all! For web development fundamentals, any modern computer will
          work perfectly:
          <ul className="mt-2 space-y-1 pl-5">
            <li>• Any computer from the last 5 years</li>
            <li>• Windows, Mac, or Linux all work fine</li>
            <li>• 4GB RAM minimum (8GB recommended)</li>
            <li>• Any modern web browser (Chrome, Firefox, Edge)</li>
            <li>• We'll install free tools: VS Code and Git</li>
          </ul>
          You don't need expensive hardware to start learning web development.
        </>
      ),
    },
    {
      question: "What kind of jobs can I get after this course?",
      answer: (
        <>
          After completing this fundamentals course, you'll be prepared for:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>Junior Web Developer</strong> positions
            </li>
            <li>
              • <strong>Web Content Manager</strong> roles
            </li>
            <li>
              • <strong>Front-End Developer Intern</strong> opportunities
            </li>
            <li>
              • <strong>Freelance web projects</strong> (simple websites)
            </li>
            <li>
              • Further study in our{" "}
              <strong>Front-End Engineer Specialization</strong>
            </li>
          </ul>
          Many of our graduates start with freelance work while continuing to
          learn.
        </>
      ),
    },
    {
      question: "Will I learn SEO (Search Engine Optimization)?",
      answer: (
        <>
          Yes! SEO is covered in Week 7. You'll learn:
          <ul className="mt-2 space-y-1 pl-5">
            <li>• How search engines work</li>
            <li>• HTML tags that affect SEO (title, meta, headings)</li>
            <li>• Mobile-friendly design for better rankings</li>
            <li>• Page speed optimization basics</li>
            <li>• Creating SEO-friendly URLs and content structure</li>
          </ul>
          These skills will help your websites rank better in Google searches.
        </>
      ),
    },
    {
      question: "What if I struggle with the course material?",
      answer: (
        <>
          We provide extensive support:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • <strong>Patient instructors</strong> who explain concepts
              multiple ways
            </li>
            <li>
              • <strong>Small class sizes</strong> for individual attention
            </li>
            <li>
              • <strong>Office hours</strong> for one-on-one help
            </li>
            <li>
              • <strong>Student community</strong> for peer support
            </li>
            <li>
              • <strong>Weekly assignments</strong> to practice concepts
            </li>
          </ul>
          We're committed to helping every student succeed, regardless of their
          starting point.
        </>
      ),
    },
    {
      question: "Can I upgrade to the Front-End Engineer specialization later?",
      answer: (
        <>
          Absolutely! In fact, that's the recommended path. After completing
          this fundamentals course:
          <ul className="mt-2 space-y-2 pl-5">
            <li>
              • You'll receive a <strong>discount</strong> on the specialization
            </li>
            <li>
              • You'll be <strong>better prepared</strong> for advanced concepts
            </li>
            <li>• You can join the next available specialization cohort</li>
            <li>
              • Your fundamentals knowledge will make React/Next.js easier to
              understand
            </li>
          </ul>
          Think of this as Phase 1 of becoming a professional front-end
          engineer.
        </>
      ),
    },
    {
      question: "What certificate will I receive?",
      answer: (
        <>
          Upon successful completion, you'll receive the{" "}
          <span className="font-semibold text-green-700">
            'Digitanotion Certified Web Developer - Fundamentals'
          </span>{" "}
          certificate. This certificate:
          <ul className="mt-2 space-y-1 pl-5">
            <li>• Validates your HTML, CSS, and JavaScript skills</li>
            <li>• Is recognized by our industry partners</li>
            <li>• Can be shared on LinkedIn and job applications</li>
            <li>• Qualifies you for our advanced specialization</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <RiHtml5Fill className="text-red-600" size={24} />
            <RiCss3Fill className="text-blue-600" size={24} />
            <h2 className="text-4xl font-bold text-gray-900">
              Web Development FAQ
            </h2>
            <RiJavascriptFill className="text-yellow-600" size={24} />
            <MdWeb className="text-green-600" size={24} />
          </div>
          <p className="text-lg text-gray-600">
            Common questions from beginners starting their web development
            journey
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-green-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-green-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <span className="font-bold text-green-600 text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                </div>
                <span className="text-green-600">
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
        <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
          <div className="text-center">
            <div className="flex justify-center gap-3 mb-4">
              <FiBook className="text-green-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                Ready to Start Your Web Development Journey?
              </h3>
              <MdImportantDevices className="text-blue-600" size={24} />
            </div>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              Perfect for beginners. Learn the right way - from fundamentals to
              deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:web-fundamentals@digitanotion.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <FiTarget /> Enroll in Web Development Fundamentals
              </a>
              <a
                href="/academy/web-frontend-engineering"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-green-300 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-all"
              >
                View Front-End Specialization <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
