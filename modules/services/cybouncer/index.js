"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShield,
  FiServer,
  FiZap,
  FiCheck,
  FiArrowRight,
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiMonitor,
  FiActivity,
  FiAlertCircle,
  FiRefreshCw,
  FiBarChart,
  FiTarget,
  FiHeart,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaBackward,
  FaChartLine,
  FaSearch,
  FaCogs,
  FaEye,
  FaHandshake,
  FaMobileAlt,
  FaDesktop,
  FaCloud,
  FaLock,
  FaCertificate,
} from "react-icons/fa";

const serviceTiers = [
  {
    name: "Essential Guardian",
    price: "₦15,000",
    discountPrice: "₦6,000",
    color: "from-orange-400 to-orange-500",
    features: [
      "Basic Security Monitoring",
      "Weekly Backups",
      "Monthly Updates",
      "Email Support (48h response)",
      "Uptime Monitoring",
      "Malware Scanning",
    ],
    target: "Micro-businesses, Basic Protection",
    badge: "Basic Protection",
  },
  {
    name: "Growth Partner",
    price: "₦35,000",
    discountPrice: "₦14,000",
    color: "from-orange-500 to-red-500",
    features: [
      "Daily Backups",
      "Weekly Performance Optimization",
      "Monthly Visibility Reports",
      "Priority Support (24h response)",
      "Competitor Analysis (Monthly)",
      "Content Update Support (4h/month)",
      "Basic SEO Optimization",
      "All Tier 1 Features Included",
    ],
    target: "Growing SMEs (Recommended)",
    badge: "Most Popular",
    recommended: true,
  },
  {
    name: "Enterprise Shield",
    price: "₦75,000",
    discountPrice: "₦30,000",
    color: "from-red-500 to-red-600",
    features: [
      "Real-time Security Monitoring",
      "Hourly Backups",
      "Bi-weekly Strategy Sessions",
      "Dedicated Account Manager",
      "Advanced Compliance Support",
      "Staff Security Training",
      "SLA: 4-hour Emergency Response",
      "All Tier 2 Features Included",
    ],
    target: "Established Businesses",
    badge: "Maximum Protection",
  },
];

const services = {
  security: [
    {
      icon: FaShieldAlt,
      title: "24/7 Security Monitoring",
      description:
        "Continuous surveillance of your digital assets against threats",
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Security logs analysis",
      ],
    },
    {
      icon: FaLock,
      title: "Vulnerability Management",
      description:
        "Proactive identification and patching of security weaknesses",
      features: [
        "Regular vulnerability scans",
        "Patch management",
        "Security hardening",
      ],
    },
    {
      icon: FiActivity,
      title: "Incident Response",
      description: "Immediate action when security incidents occur",
      features: [
        "Emergency response team",
        "Attack mitigation",
        "Recovery procedures",
      ],
    },
  ],
  management: [
    {
      icon: FiRefreshCw,
      title: "Backups & Updates",
      description:
        "Regular maintenance to keep your applications current and secure",
      features: ["Scheduled backups", "Software updates", "Security patches"],
    },
    {
      icon: FiZap,
      title: "Performance Optimization",
      description: "Ensure your applications run at peak efficiency",
      features: ["Speed optimization", "Resource management", "Load balancing"],
    },
    {
      icon: FiMonitor,
      title: "Uptime Monitoring",
      description:
        "Constant monitoring to ensure your services are always available",
      features: [
        "24/7 availability checks",
        "Downtime alerts",
        "Performance tracking",
      ],
    },
  ],
  growth: [
    {
      icon: FiBarChart,
      title: "Visibility Growth",
      description: "Enhance your online presence and reach",
      features: [
        "SEO optimization",
        "Analytics configuration",
        "Conversion tracking",
      ],
    },
    {
      icon: FaChartLine,
      title: "Competitor Analysis",
      description:
        "Stay ahead by monitoring your competitors' digital strategies",
      features: [
        "Market positioning",
        "Feature comparison",
        "Strategy insights",
      ],
    },
    {
      icon: FiTarget,
      title: "Strategic Support",
      description: "Expert guidance to grow your digital footprint",
      features: [
        "Monthly strategy reviews",
        "Growth recommendations",
        "Implementation support",
      ],
    },
  ],
};

const faqs = [
  {
    question:
      "What happens after my developer is done building my website/app?",
    answer:
      "CyBouncer takes over completely. We manage security, updates, backups, performance, and growth - everything needed to keep your digital assets secure and competitive.",
  },
  {
    question: "Who manages and secures my websites/apps daily?",
    answer:
      "Our team of cybersecurity experts and application managers monitor your assets 24/7, handling everything from security threats to performance optimization.",
  },
  {
    question: "What if hackers attack—how would you respond?",
    answer:
      "We have a dedicated incident response team that follows strict protocols. Within 4 hours for Enterprise plans, we'll contain the threat, mitigate damage, and restore normal operations.",
  },
  {
    question: "What does the 'Protected by CyBouncer' badge do?",
    answer:
      "It shows your customers you take security seriously, builds trust, and can improve conversion rates. It's a visible symbol of your commitment to digital security.",
  },
  {
    question: "How does the 60% discount work?",
    answer:
      "New subscribers get 60% off any plan for the first 3 months. After that, it renews at the standard rate. Limited to first 50 clients only.",
  },
];

const problemSolutions = [
  {
    problem: "Who manages and secures your websites/apps daily?",
    icon: FiUsers,
    solution:
      "CyBouncer's 24/7 monitoring team handles all daily management and security tasks.",
  },
  {
    problem: "Does your online presence stand out from competitors?",
    icon: FiTarget,
    solution:
      "Our growth services ensure your digital assets outperform competitors.",
  },
  {
    problem: "What if hackers attack—how would you respond?",
    icon: FiAlertCircle,
    solution: "Immediate incident response with dedicated security experts.",
  },
  {
    problem: "Struggling to find skilled staff?",
    icon: FiHeart,
    solution: "Get a complete digital management team without hiring.",
  },
];

const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export default function CyBouncer() {
  const [selectedTier, setSelectedTier] = useState(1);
  const [showPromo, setShowPromo] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            {showPromo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mb-6 animate-pulse"
              >
                <FiZap className="text-yellow-300" size={18} />
                <span className="text-sm font-bold">
                  LAUNCH OFFER: 60% OFF for 3 months! First 50 clients only
                </span>
                <button
                  onClick={() => setShowPromo(false)}
                  className="ml-2 text-white/70 hover:text-white"
                >
                  ✕
                </button>
              </motion.div>
            )}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiShield className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Managed Security Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Digital
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Caretaker & Bodyguard
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Building websites or apps is just the first step. CyBouncer
              delivers continuous protection and maintenance from the moment
              development ends. We ensure your online presence remains secure,
              updated, and growing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348073735836?text=Hi!%20I'm%20interested%20in%20CyBouncer%20managed%20security%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Get Protected Now
                <FiArrowRight className="inline ml-2" />
              </a>
              <Link
                href="#pricing"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Questions Every Business Owner Asks:
                </h3>
                <p className="text-gray-600">
                  Building is just the beginning. What happens after your
                  developer is done?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {problemSolutions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:border-orange-300 hover:shadow-md transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-orange-100 to-red-100">
                          <item.icon className="text-orange-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">
                            {item.problem}
                          </h4>
                          <p className="text-sm text-gray-600">
                            <strong className="text-orange-600">
                              Solution:{" "}
                            </strong>
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Digital Protection Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to keep your digital assets secure,
              optimized, and growing - so you can focus on your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(services).map(
              ([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                >
                  <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 p-8 h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                        {categoryIndex === 0 ? (
                          <FiShield className="text-white" size={24} />
                        ) : categoryIndex === 1 ? (
                          <FaCogs className="text-white" size={24} />
                        ) : (
                          <FiTrendingUp className="text-white" size={24} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 capitalize">
                          {category} Services
                        </h3>
                        <p className="text-sm text-gray-600">
                          {category === "security" &&
                            "24/7 protection & monitoring"}
                          {category === "management" &&
                            "Continuous maintenance & optimization"}
                          {category === "growth" &&
                            "Visibility & competitive advantage"}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {items.map((service, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-white border border-gray-200 hover:border-orange-200 transition-all"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <service.icon
                              className="text-orange-500 mt-1 flex-shrink-0"
                              size={20}
                            />
                            <h4 className="font-bold text-gray-900">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {service.description}
                          </p>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs text-gray-500"
                              >
                                <FiCheck className="text-green-500" size={12} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CyBouncer Badge Feature */}
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
                <FaCertificate className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Trust Badge
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Protected by CyBouncer Badge
              </h2>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Display our trust badge on your website to show customers you
                  take security seriously. This badge isn't just a logo - it's a
                  promise.
                </p>
                <p>
                  <strong className="text-orange-600">Benefits include:</strong>
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: FiHeart, text: "Builds customer trust" },
                  { icon: FiTrendingUp, text: "Improves conversion rates" },
                  { icon: FiShield, text: "Shows security commitment" },
                  { icon: FaEye, text: "Competitive advantage" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-100"
                  >
                    <item.icon className="text-orange-600" size={18} />
                    <span className="text-sm font-medium text-gray-900">
                      {item.text}
                    </span>
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
                {/* Badge Preview */}
                <div className="bg-white rounded-2xl p-8 border border-orange-300 shadow-lg mb-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
                      <FiShield className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Protected by CyBouncer
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      This website is continuously monitored and secured
                    </p>
                    <div className="text-xs text-gray-500">
                      24/7 Security • Daily Backups • Performance Optimized
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-orange-100">
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Increased Trust
                      </h4>
                      <p className="text-sm text-gray-600">
                        Customers feel safer on your site
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">
                      +27%
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-orange-100">
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Better Conversions
                      </h4>
                      <p className="text-sm text-gray-600">
                        Higher purchase confidence
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-700">
                      +15%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mb-6">
              <FiZap className="text-yellow-300" size={18} />
              <span className="text-sm font-bold">
                60% OFF for 3 months - Limited to first 50 clients
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Protection Level
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan for your business needs. All plans include
              our comprehensive security and management services.
            </p>
          </motion.div>

          {/* Tier Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceTiers.map((tier, index) => (
              <button
                key={tier.name}
                onClick={() => setSelectedTier(index)}
                className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
                  selectedTier === index
                    ? `border-transparent bg-gradient-to-r ${tier.color} text-white`
                    : "border-gray-300 text-gray-700 hover:border-orange-300"
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  tier.recommended ? "transform md:-translate-y-4" : ""
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold">
                      RECOMMENDED
                    </div>
                  </div>
                )}

                <div
                  className={`h-full rounded-2xl border-2 ${
                    tier.recommended
                      ? "border-orange-500 shadow-2xl"
                      : "border-gray-200"
                  } overflow-hidden`}
                >
                  {/* Header */}
                  <div className={`h-2 bg-gradient-to-r ${tier.color}`} />

                  <div className="p-8">
                    {/* Tier Name & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {tier.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                        {tier.badge}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-gray-900">
                          {showPromo ? tier.discountPrice : tier.price}
                        </span>
                        <span className="text-gray-600">/month</span>
                        {showPromo && (
                          <span className="text-sm line-through text-gray-400">
                            {tier.price}
                          </span>
                        )}
                      </div>
                      {showPromo && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-bold mt-2">
                          <FiZap size={10} />
                          60% OFF for 3 months
                        </div>
                      )}
                    </div>

                    {/* Target */}
                    <p className="text-sm text-gray-600 mb-6">
                      <strong>Perfect for:</strong> {tier.target}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <FiCheck className="text-green-600" size={12} />
                          </div>
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://wa.me/2348073735836?text=Hi!%20I'm%20interested%20in%20CyBouncer%20managed%20security%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 rounded-xl text-center font-bold transition-all ${
                        tier.recommended
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-200"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              *All plans include the "Protected by CyBouncer" badge. Prices in
              Naira.
              <br />
              *Launch offer: 60% discount for first 3 months, auto-renews at
              standard rate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about CyBouncer services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiClock className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Don't Leave Your Digital Assets Unprotected
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join the first 50 businesses to get 60% off CyBouncer protection
              for 3 months. Secure your digital presence today and focus on what
              matters most - growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348073735836?text=Hi!%20I'm%20interested%20in%20CyBouncer%20managed%20security%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Claim 60% Discount
                <FaWhatsapp className="inline ml-2" />
              </a>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
              >
                View All Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "24/7 Protection",
                  description: "Round-the-clock monitoring and security",
                  icon: FiShield,
                },
                {
                  title: "Daily Management",
                  description: "Regular updates, backups, and optimization",
                  icon: FiRefreshCw,
                },
                {
                  title: "Growth Support",
                  description: "SEO, analytics, and competitive advantage",
                  icon: FiTrendingUp,
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 bg-gray-50"
                >
                  <benefit.icon className="text-orange-600 text-2xl mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO & Structured Data */}
      <div className="sr-only" aria-hidden="true">
        <h1>CyBouncer - Managed Security Services by Digitanotion</h1>
        <h2>Your Digital Caretaker & Bodyguard for Websites & Apps</h2>

        <h3>Website Security Management Nigeria</h3>
        <p>
          CyBouncer provides managed cybersecurity and application management
          services for Nigerian and African SMEs. We offer continuous digital
          protection and maintenance from the moment development ends. Based in
          Awka, Anambra State, we serve businesses across Nigeria with 24/7
          security monitoring, regular backups, performance optimization, and
          growth services.
        </p>

        <h4>Managed Security Services Africa</h4>
        <ul>
          <li>24/7 website security monitoring Nigeria</li>
          <li>Managed cybersecurity services for SMEs</li>
          <li>Application management and maintenance</li>
          <li>Website backup services Nigeria</li>
          <li>Performance optimization for websites</li>
          <li>Incident response and threat mitigation</li>
          <li>Compliance support (NDPR, ISO 27001)</li>
          <li>Penetration testing services Nigeria</li>
        </ul>

        <h4>CyBouncer Pricing Plans</h4>
        <ul>
          <li>Essential Guardian: ₦15,000/month - Basic protection</li>
          <li>Growth Partner: ₦35,000/month - Recommended for SMEs</li>
          <li>Enterprise Shield: ₦75,000/month - Maximum protection</li>
          <li>60% discount for first 3 months for new subscribers</li>
        </ul>

        <h4>What We Protect</h4>
        <ul>
          <li>Website security management</li>
          <li>Mobile application security</li>
          <li>Web application protection</li>
          <li>E-commerce site security</li>
          <li>Business portal security</li>
          <li>School website management</li>
          <li>Hospital system security</li>
          <li>Government portal protection</li>
        </ul>

        <h5>Service Features</h5>
        <p>
          Daily backups, weekly performance optimization, monthly visibility
          reports, priority support, competitor analysis, content update
          support, SEO optimization, real-time security monitoring, staff
          security training, emergency response, compliance support, and the
          "Protected by CyBouncer" trust badge.
        </p>

        <h6>Keywords for Cybersecurity Nigeria</h6>
        <p>
          Website security Nigeria, Managed security services, Cybersecurity
          company Anambra, Website protection services, 24/7 security
          monitoring, Website backup services, Performance optimization Nigeria,
          Incident response services, Penetration testing Nigeria, Vulnerability
          management, Security compliance Nigeria, NDPR compliance, ISO 27001
          Nigeria, Website maintenance services, Uptime monitoring, Malware
          scanning, Security patching, Threat detection, Cyber attack
          prevention, Digital security Nigeria, Online protection services, Web
          application security, Mobile app security, E-commerce security,
          Business website protection, School portal security, Hospital system
          security, Government website security, Financial website protection,
          Banking security Nigeria, Payment gateway security, Data protection
          services, Cloud security Nigeria, Server security, Network security,
          Endpoint protection, Firewall management, Intrusion detection,
          Security information and event management, Security operations center,
          Cyber threat intelligence, Digital forensics, Security audit services,
          Risk assessment Nigeria, Security consulting, Information security
          management, Cyber insurance support, Business continuity planning,
          Disaster recovery services, Backup and recovery, Data encryption,
          Access control management, Identity management, Authentication
          services, Multi-factor authentication, Security awareness training,
          Phishing protection, Social engineering protection, Ransomware
          protection, Malware removal, Virus protection, Spyware detection,
          Adware removal, Trojan horse protection, Worm detection, Botnet
          protection, DDoS mitigation, Web application firewall, SQL injection
          prevention, Cross-site scripting protection, Cross-site request
          forgery protection, Clickjacking prevention, Session hijacking
          protection, Man-in-the-middle attack prevention, Zero-day exploit
          protection, Security patch management, Software update services,
          Plugin management, Theme security, Core updates, Security hardening,
          Configuration management, Change management, Log management, Security
          logging, Event correlation, Alert management, Notification services,
          Reporting services, Compliance reporting, Performance reporting,
          Analytics reporting, Custom reporting, API security, Mobile API
          protection, Web service security, REST API security, GraphQL security,
          Microservices security, Container security, Docker security,
          Kubernetes security, Cloud-native security, Serverless security,
          Function as a service security, Infrastructure as code security,
          DevOps security, DevSecOps, Continuous security, Agile security, Scrum
          security, Kanban security, Project management security, Collaboration
          tool security, Communication security, Email security, Messaging
          security, Video conferencing security, File sharing security, Cloud
          storage security, Document security, Data classification, Data loss
          prevention, Data leakage protection, Data privacy, Personal data
          protection, Customer data security, Employee data protection,
          Financial data security, Health data protection, Educational data
          security, Government data protection, Intellectual property
          protection, Trade secret security, Patent protection, Copyright
          security, Trademark protection, Brand security, Reputation management,
          Online reputation protection, Social media security, Social media
          monitoring, Social media protection, Platform security, Third-party
          security, Vendor security, Supply chain security, Partner security,
          Customer security, User security, End-user security, Employee
          security, Contractor security, Visitor security, Physical security
          integration, Access control systems, Surveillance systems, Alarm
          systems, Security personnel, Guard services, Patrol services,
          Monitoring services, Response services, Investigation services, Legal
          support services, Insurance coordination, Claim assistance, Recovery
          services, Restoration services, Business resumption, Continuity
          services, Resilience services, Redundancy services, Failover services,
          Load balancing, High availability, Disaster recovery sites, Backup
          sites, Cold sites, Warm sites, Hot sites, Cloud backup, Local backup,
          Hybrid backup, Incremental backup, Differential backup, Full backup,
          Snapshot backup, Image backup, File backup, Database backup,
          Application backup, System backup, Configuration backup, Registry
          backup, Boot backup, Recovery point objective, Recovery time
          objective, Service level agreement, Operational level agreement,
          Underpinning contract, Service improvement plan, Service design,
          Service transition, Service operation, Continual service improvement,
          Service strategy, Service portfolio, Service catalog, Service
          pipeline, Service knowledge management system, Configuration
          management database, Change advisory board, Emergency change advisory
          board, Standard change, Normal change, Emergency change, Request
          fulfillment, Incident management, Problem management, Event
          management, Access management, Service request management, Knowledge
          management, Service reporting, Service measurement, Service analytics,
          Service intelligence, Service automation, Service orchestration,
          Service integration, Service management, IT service management,
          Business service management, Enterprise service management, Cloud
          service management, Mobile service management, Security service
          management, Compliance service
        </p>
      </div>
    </div>
  );
}
