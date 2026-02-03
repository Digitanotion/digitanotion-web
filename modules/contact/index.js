"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiHelpCircle,
  FiUsers,
  FiGlobe,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaTelegram,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaHeadset,
  FaHandshake,
  FaGraduationCap,
} from "react-icons/fa";

const contactOptions = [
  {
    icon: FiMail,
    title: "General Inquiries",
    description: "For general questions and information",
    contact: "hello@digitanotion.com",
    color: "from-orange-500 to-red-500",
    response: "24-48 hours response",
    buttonText: "Send Email",
  },
  {
    icon: FaHeadset,
    title: "Support & Technical Help",
    description: "Technical assistance and product support",
    contact: "support@digitanotion.com",
    color: "from-blue-500 to-cyan-500",
    response: "12-24 hours response",
    buttonText: "Get Help",
  },
  {
    icon: FiUsers,
    title: "Partnerships",
    description: "Business collaborations and partnerships",
    contact: "partners@digitanotion.com",
    color: "from-green-500 to-emerald-500",
    response: "2-3 business days",
    buttonText: "Explore Partnership",
  },
  // {
  //   icon: FaGraduationCap,
  //   title: "Academy & Training",
  //   description: "Course inquiries and enrollment",
  //   contact: "academy@digitanotion.com",
  //   color: "from-purple-500 to-pink-500",
  //   response: "24 hours response",
  //   buttonText: "Learn More",
  // },
];

const supportChannels = [
  {
    icon: FaWhatsapp,
    name: "WhatsApp Business",
    description: "Quick support via WhatsApp",
    details: "+234 80 7373 5836",
    color: "from-green-500 to-emerald-500",
    hours: "Mon-Fri: 9AM-6PM",
  },
  {
    icon: FiMessageSquare,
    name: "Live Chat",
    description: "Real-time support on website",
    details: "Available during business hours",
    color: "from-blue-500 to-cyan-500",
    hours: "Mon-Fri: 9AM-5PM",
  },
  {
    icon: FiPhone,
    name: "Phone Support",
    description: "Call us for urgent matters",
    details: "+234 80 7373 5836",
    color: "from-orange-500 to-red-500",
    hours: "Mon-Fri: 10AM-4PM",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/company/digitanotion",
    color: "bg-blue-600",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    url: "https://twitter.com/digitanotion",
    color: "bg-blue-400",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "https://instagram.com/digitanotion",
    color: "bg-pink-600",
  },
  {
    icon: FaFacebookF,
    name: "Facebook",
    url: "https://facebook.com/digitanotion",
    color: "bg-blue-700",
  },
  {
    icon: FaTelegram,
    name: "Telegram",
    url: "https://t.me/digitanotion",
    color: "bg-blue-500",
  },
];

const faqs = [
  {
    question: "What's the best way to get technical support?",
    answer:
      "For technical issues, email support@digitanotion.com or use our WhatsApp business line for faster response.",
  },
  {
    question: "How long does it take to get a response?",
    answer:
      "General inquiries: 24-48 hours. Support requests: 12-24 hours. Urgent matters: Please use phone support during business hours.",
  },
  {
    question: "Do you offer after-hours support?",
    answer:
      "Yes, for critical issues. Contact our emergency support line available 24/7 for active service clients.",
  },
  {
    question: "Where is your office located?",
    answer:
      "Our headquarters are in Enugu, Nigeria. We serve clients across Africa and globally through our remote teams.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopyEmail = async (email) => {
    try {
      // Method 1: Modern Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      }
      // Method 2: Fallback for older browsers/mobile
      else {
        // Create a temporary textarea element
        const textArea = document.createElement("textarea");
        textArea.value = email;

        // Make it invisible
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);

        // Select and copy
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");

        // Clean up
        document.body.removeChild(textArea);

        if (!successful) {
          throw new Error("Copy failed");
        }
      }

      // Show success state
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);

      // Fallback: Open email app with pre-filled email
      window.location.href = `mailto:?subject=Contact%20Email&body=${encodeURIComponent(`Please contact me at: ${email}`)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FaHandshake className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                We're Here to Help
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch,
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Get the Support You Need
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you need technical support, partnership inquiries, or just
              want to say hello— we're ready to connect and help you succeed.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-orange-200 shadow-sm">
                <FiCheckCircle className="text-green-500" size={18} />
                <span className="text-sm font-semibold">
                  Multiple Support Channels
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
                <FiClock className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Fast Response Times
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose How to Connect
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the channel that best matches your needs for the fastest
              response
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${option.color} mb-6`}
                  >
                    <option.icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {option.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    {option.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {option.contact}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <FiClock size={14} />
                      {option.response}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        (window.location.href = `mailto:${option.contact}`)
                      }
                      className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition-all"
                    >
                      {option.buttonText}
                    </button>
                    <button
                      onClick={() => handleCopyEmail(option.contact)}
                      className="px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                      title="Copy email"
                    >
                      {copiedEmail === option.contact ? (
                        <FiCheckCircle className="text-green-500" />
                      ) : (
                        "Copy"
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Support Channels */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FaHeadset className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Real-Time Support
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Immediate Assistance Channels
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Need help right now? Choose from our real-time support options
                for faster response times and immediate assistance.
              </p>

              <div className="space-y-6">
                {supportChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${channel.color}`}
                    >
                      <channel.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {channel.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {channel.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-900 font-medium">
                          {channel.details}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <FiClock size={12} />
                          {channel.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                    <FiMapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Visit Our Office
                    </h3>
                    <p className="text-gray-600">Schedule a visit or drop by</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-orange-200">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Headquarters
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Digitanotion Limited
                      <br />
                      Suite 6, Mgbajiaka Area,
                      <br />
                      Along Onitsha - Enugu Expy, opposite East-End Hotel,
                      <br />
                      Awka, Anambra State, Nigeria
                    </p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <FiClock size={16} />
                      <span className="text-sm">
                        Mon-Fri: 9:00 AM - 4:00 PM
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-orange-200">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Before You Visit
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <FiCheckCircle
                          className="text-green-500 mt-1"
                          size={14}
                        />
                        <span>Schedule appointments in advance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle
                          className="text-green-500 mt-1"
                          size={14}
                        />
                        <span>Bring valid identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheckCircle
                          className="text-green-500 mt-1"
                          size={14}
                        />
                        <span>Check parking availability</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://www.google.com/maps/dir//Suite+6,+Digitanotion+Limited,+Mgbajiaka+Area,+Digitanotion+Limited,+Along+Onitsha+-+Enugu+Expy,+opposite+East-End+Hotel,+Awka+420211,+Nigeria/@6.2220053,7.0821171,3131m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x104383e159d8d45b:0x4ec051752de34136!2m2!1d7.0861492!2d6.2281087?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition-all"
                  >
                    Get Directions
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social & Community */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiGlobe className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Join Our Community
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Connect on Social Media
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Follow us for updates, tech tips, community events, and
              behind-the-scenes insights
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center group-hover:shadow-lg transition-all">
                    <div
                      className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <social.icon className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-sm font-medium text-gray-900">
                      {social.name}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiHelpCircle className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Common Questions
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to questions we get asked often
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center">
                      <span className="font-bold text-orange-600">?</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 text-gray-600">
              <FiAlertCircle />
              <span className="text-sm">
                Still have questions? Email us at{" "}
              </span>
              <button
                onClick={() => handleCopyEmail("help@digitanotion.com")}
                className="text-orange-600 font-semibold hover:underline"
              >
                hello@digitanotion.com
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Emergency Support */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border border-orange-200 p-12">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 mb-6">
                <FiAlertCircle className="text-white" size={32} />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Need Emergency Support?
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                For critical issues affecting your business operations, our
                emergency support team is available 24/7 for active service
                clients.
              </p>

              <div className="space-y-6 max-w-md mx-auto">
                <div className="bg-white rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500">
                      <FiPhone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Emergency Hotline
                      </h4>
                      <p className="text-sm text-gray-600">
                        24/7 for active clients
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      +234 80 7373 5836
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Verified clients only
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <FiCheckCircle className="text-green-500 mt-1" size={14} />
                    <span>
                      Available for critical business-impacting issues
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <FiCheckCircle className="text-green-500 mt-1" size={14} />
                    <span>Requires client verification</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <FiCheckCircle className="text-green-500 mt-1" size={14} />
                    <span>
                      24/7 availability including weekends and holidays
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Connect?
            </h3>

            <p className="text-lg text-gray-600 mb-8">
              Choose the contact method that works best for you. We're committed
              to providing timely, helpful responses to all inquiries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@digitanotion.com"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send General Inquiry
                <FiArrowRight />
              </a>
              <Link
                href="/support"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
              >
                Visit Support Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* SEO: Hidden Content */}
      <div className="sr-only" aria-hidden="false">
        <h1>Contact Digitanotion - Support & Inquiries</h1>
        <h2>Get Help from Africa's Leading Tech Innovation Center</h2>
        <p>
          Contact Digitanotion Limited for cybersecurity services, tech
          training, partnership opportunities, and technical support. Multiple
          contact channels available including email, phone, WhatsApp, and
          social media.
        </p>
        <ul>
          <li>Email: hello@digitanotion.com (General Inquiries)</li>
          <li>Email: support@digitanotion.com (Technical Support)</li>
          <li>Email: academy@digitanotion.com (Training & Courses)</li>
          <li>Phone: +234 80 7373 5836 (Business Hours)</li>
          <li>WhatsApp: +234 80 7373 5836 (Business Support)</li>
          <li>Emergency: Coming Soon (24/7 Active Clients)</li>
          <li>
            Address: Suite 6, Mgbajiaka Area, Digitanotion Limited, Along
            Onitsha - Enugu Expy, opposite East-End Hotel, Awka, Anambra State,
            Nigeria
          </li>
          <li>Hours: Monday-Friday 9:00 AM - 4:00 PM WAT</li>
          <li>Social: LinkedIn, Twitter, Instagram, Facebook, Telegram</li>
          <li>
            Support: Real-time chat, email support, phone support, WhatsApp
            business
          </li>
          <li>Response Times: 12-48 hours depending on inquiry type</li>
        </ul>
        <h3>Keywords</h3>
        <p>
          Contact Digitanotion, Tech Support Nigeria, Cybersecurity Help, IT
          Support Africa, Tech Training Inquiries, Business Partnership Africa,
          Technical Assistance, Digital Innovation Support, IT Consulting
          Contact, Software Development Help, Contact Tech Company Nigeria,
          Africa Tech Support, IT Help Desk, Technology Consultation, Digital
          Solutions Contact
        </p>
      </div>
    </div>
  );
}
