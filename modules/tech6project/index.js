"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiUsers,
  FiBriefcase,
  FiCode,
  FiTarget,
  FiAward,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiGitMerge,
  FiLayers,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaHandshake,
  FaNetworkWired,
  FaLightbulb,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

const tracks = [
  {
    name: "Front-End Development",
    icon: FiCode,
    color: "from-blue-500 to-cyan-500",
    tech: ["React", "Next.js", "Advanced JS", "Performance"],
  },
  {
    name: "Back-End Development",
    icon: FaLaptopCode,
    color: "from-green-500 to-emerald-500",
    tech: ["Laravel", "PHP", "APIs", "Microservices", "DB Design"],
  },
  {
    name: "Product Design",
    icon: FaLightbulb,
    color: "from-purple-500 to-pink-500",
    tech: ["UI/UX", "Research", "Prototyping", "Design Systems"],
  },
  {
    name: "Digital Marketing",
    icon: FiTarget,
    color: "from-orange-500 to-yellow-500",
    tech: ["Strategy", "Analytics", "Content", "Growth Hacking"],
  },
  {
    name: "Cybersecurity",
    icon: FiBriefcase,
    color: "from-red-500 to-rose-500",
    tech: ["Security Architecture", "Pentesting", "Compliance"],
  },
  {
    name: "Mobile Development",
    icon: FiUsers,
    color: "from-indigo-500 to-violet-500",
    tech: ["Flutter", "Dart", "Native Integration", "Architecture"],
  },
];

const timeline = [
  {
    phase: "Foundation & Specialization",
    duration: "Month 1-2",
    items: [
      "Intensive onboarding",
      "Professional skills bootcamp",
      "Project discovery",
      "Core skill development",
    ],
  },
  {
    phase: "Advanced Implementation",
    duration: "Month 3-4",
    items: [
      "Full-scale project development",
      "Cross-track collaboration",
      "Security implementation",
      "Performance optimization",
    ],
  },
  {
    phase: "Production & Transition",
    duration: "Month 5-6",
    items: [
      "Production readiness",
      "Final deployment",
      "Portfolio development",
      "Career transition",
    ],
  },
];

const deliverables = [
  {
    title: "Professional Portfolio",
    description:
      "1 production-level project, and others skill development projects/tasks",
    icon: FiLayers,
  },
  {
    title: "Industry Network",
    description: "Direct connections with tech professionals",
    icon: FaNetworkWired,
  },
  {
    title: "Mentorship Access",
    description: "Mentorship from industry experts",
    icon: FaUserTie,
  },
  {
    title: "Career Support",
    description: "3 months post-program placement assistance",
    icon: FaHandshake,
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

export default function Tech6ProjectPage() {
  const [currentCohort] = useState({
    number: 4,
    stream: 1,
    status: "Applications Open",
    spots: 18,
  });

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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiStar className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Cohort {currentCohort.number} • Stream {currentCohort.stream} is
                Open
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Tech6Project
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                From Learning to Earning
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              A unique, intensive program bridging the gap between theoretical
              training and real-world experience. Transforming promising tech
              talents into industry-ready professionals through hands-on,
              project-based learning.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-orange-200 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold">
                  {currentCohort.status}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
                <FiUsers className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  {currentCohort.spots} Spots Available
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                <FiClock className="text-orange-600" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                6 Months
              </div>
              <div className="text-sm text-gray-600">Intensive Program</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                <FiGitMerge className="text-orange-600" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                6 Tracks
              </div>
              <div className="text-sm text-gray-600">Specialized Focus</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                <FiUsers className="text-orange-600" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                12Fellows
              </div>
              <div className="text-sm text-gray-600">Elite Selection</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                <FaUserTie className="text-orange-600" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                1:1.5 Ratio
              </div>
              <div className="text-sm text-gray-600">Mentor Support</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FaLightbulb className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  The Bridge Between Theory & Practice
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                One Project at a Time
              </h2>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Tech6Project is a unique, intensive program held twice yearly
                  that bridges the critical gap between theoretical training and
                  real-world experience.
                </p>
                <p>
                  We select promising tech talents and immerse them in a
                  hands-on, project-based environment. Under expert mentorship,
                  participants collaborate to build tangible projects—often
                  addressing real community needs—while gaining professional
                  guidance and network access.
                </p>
                <p className="font-semibold text-orange-600">
                  This compressed, impactful experience accelerates readiness
                  for successful tech careers.
                </p>
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                    <FaChartLine className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Program Scale & Selectivity
                    </h3>
                    <p className="text-gray-600">
                      Premium experience with personalized attention
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        6 Months
                      </div>
                      <div className="text-sm text-gray-600">
                        Total Duration
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        18
                      </div>
                      <div className="text-sm text-gray-600">
                        Total Participants
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <FiTarget className="text-orange-500" />
                      <div className="font-semibold">
                        High-Competition Selection
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Only the top 3% of applicants in each track are selected
                      for this premium experience.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <FiMapPin className="text-orange-500" />
                      <div className="font-semibold">Hybrid Model</div>
                    </div>
                    <p className="text-sm text-gray-600">
                      2 days in-office (free power & internet), 3 days remote
                      per week.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Elite Track Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              6 specialized tracks with 3 participants each, supported by 12
              dedicated mentors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${track.color} mb-6`}
                  >
                    <track.icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {track.name}
                  </h3>

                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">
                      Participants: <span className="font-semibold">2</span>
                    </div>
                    {/* <div className="text-sm text-gray-500">
                      Mentor Ratio:{" "}
                      <span className="font-semibold">1:1.5 (2 mentors)</span>
                    </div> */}
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">
                      Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {track.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              6-Month Program Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured journey from foundation to career transition
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-500 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-4">
                        <FiCalendar className="text-orange-600" size={16} />
                        <span className="text-sm font-semibold text-orange-700">
                          {phase.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {phase.phase}
                      </h3>

                      <ul className="space-y-3">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative md:w-1/2 flex justify-center my-6 md:my-0">
                    <div className="absolute z-10 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border-4 border-white shadow-lg" />
                    <div className="md:hidden w-full h-1 bg-gradient-to-r from-orange-500 to-red-500" />
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Model */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FiMapPin className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Hybrid Learning Model
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Best of Both Worlds
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                      <FiBriefcase className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Office Days</h4>
                      <p className="text-sm text-gray-600">
                        Collaborative development & in-person mentorship
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free power & internet access</li>
                    <li>• Collaborative development sessions</li>
                    <li>• In-person mentorship & pair programming</li>
                    <li>• Cross-track integration workshops</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                      <FaLaptopCode className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Remote Days</h4>
                      <p className="text-sm text-gray-600">
                        Deep work & virtual learning
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Virtual mentorship check-ins</li>
                    <li>• Technical learning sessions</li>
                    <li>• Guest expert sessions</li>
                    <li>• Independent project work</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                    <FiAward className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      What You'll Achieve
                    </h3>
                    <p className="text-gray-600">
                      Tangible outcomes from your 6-month journey
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-orange-100 to-red-100">
                          <deliverable.icon
                            className="text-orange-600"
                            size={20}
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {deliverable.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {deliverable.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-orange-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">
                      Guaranteed Outcomes
                    </div>
                    <div className="text-xl font-bold text-orange-600 mb-2">
                      Production-Ready Skills
                    </div>
                    <p className="text-sm text-gray-600">
                      Job readiness verified by mentors, with priority access to
                      partner companies and freelance platforms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Selection Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rigorous 5-phase selection for the top 3% of applicants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {[
              {
                phase: "Initial Application",
                duration: "2 weeks",
                icon: FiCheckCircle,
              },
              {
                phase: "Technical Assessment",
                duration: "1 week",
                icon: FiCode,
              },
              { phase: "Portfolio Review", duration: "1 week", icon: FiLayers },
              {
                phase: "Intensive Interviews",
                duration: "1 week",
                icon: FaUserTie,
              },
              {
                phase: "Selection & Onboarding",
                duration: "1 week",
                icon: FaHandshake,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mb-4 mx-auto">
                  <step.icon className="text-white" size={20} />
                  <div className="text-xs mt-1 font-bold">
                    Phase {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {step.phase}
                </h3>
                <p className="text-xs text-gray-600">{step.duration}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiTarget className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Selection Criteria: Technical Proficiency • Learning Agility •
                Project Potential • Professional Mindset
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
                <FaGraduationCap className="text-white" size={32} />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Career?
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Join Tech6Project Cohort 4 and bridge the gap between learning
                and earning. Limited to 12 elite spots across 6 specialized
                tracks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ng.indeed.com/viewjob?jk=8d5285b0469a82ea&from=shareddesktop_copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Apply for Cohort 4
                  <FiArrowRight />
                </a>
                <Link
                  href="/careers"
                  className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
                >
                  View All Opportunities
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {/* <div className="text-sm text-gray-500">
                  ⏰ Application deadline: [Insert Date]
                </div> */}
                <div className="text-sm text-gray-500">
                  👥 Limited to 12 participants
                </div>
                <div className="text-sm text-gray-500">
                  🎯 6 specialized tracks available
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO: Hidden Content */}
      <div className="sr-only" aria-hidden="false">
        <h1>Tech6Project - 6-Month Intensive Tech Internship Program</h1>
        <h2>From Learning to Earning: Bridge Theory with Practice</h2>
        <p>
          Tech6Project is Digitanotion's flagship intensive internship program
          that transforms promising tech talents into industry-ready
          professionals. This 6-month hybrid program offers hands-on,
          project-based experience across 6 specialized tracks with expert
          mentorship and career support.
        </p>
        <ul>
          <li>Program: Tech6Project Cohort 4 Stream 1</li>
          <li>Duration: 6 months intensive internship</li>
          <li>Model: Hybrid (2 office days, 3 remote days weekly)</li>
          <li>
            Tracks: Front-End, Back-End, Product Design, Digital Marketing,
            Cybersecurity, Mobile Development
          </li>
          <li>Capacity: 12 participants (2 per track)</li>
          <li>Mentorship: 1:1.5 mentor ratio with 12 dedicated mentors</li>
          <li>Selection: Top 3% of applicants in competitive process</li>
          <li>
            Outcomes: Production portfolio, industry network, career placement
          </li>
          <li>
            Benefits: Free office facilities, expert mentorship, job readiness
          </li>
          <li>
            Schedule: Structured 6-month roadmap with progressive learning
          </li>
        </ul>
      </div>
    </div>
  );
}
