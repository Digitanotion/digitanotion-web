"use client";

import { useState } from "react";
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
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaHandshake,
  FaNetworkWired,
  FaLightbulb,
} from "react-icons/fa";

const tracks = [
  { name: "Front-End", icon: FiCode, color: "from-blue-500 to-cyan-500" },
  {
    name: "Back-End",
    icon: FaLaptopCode,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Product Design",
    icon: FaLightbulb,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Digital Marketing",
    icon: FiTarget,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Cybersecurity",
    icon: FiBriefcase,
    color: "from-red-500 to-rose-500",
  },
  { name: "Mobile Dev", icon: FiUsers, color: "from-indigo-500 to-violet-500" },
];

const benefits = [
  {
    icon: FiBriefcase,
    title: "Real-World Projects",
    description: "Work on actual client projects to build your portfolio",
  },
  {
    icon: FaHandshake,
    title: "Expert Mentorship",
    description:
      "Guidance from industry professionals with years of experience",
  },
  {
    icon: FaNetworkWired,
    title: "Career Network",
    description: "Connect with professionals and potential employers",
  },
  {
    icon: FiAward,
    title: "Certificate & Recommendation",
    description: "Receive official certification and professional references",
  },
  {
    icon: FiMapPin,
    title: "Office Facilities",
    description: "Free power & internet on office days",
  },
  {
    icon: FaGraduationCap,
    title: "Skill Development",
    description: "Transform theoretical knowledge into practical expertise",
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

export default function CareersPage() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(true);

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
              <FaGraduationCap className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Tech6Project Cohort 4 • Stream 1
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building Africa's
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Tech Talent
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-orange-200 shadow-sm mb-8">
              <div
                className={`w-3 h-3 rounded-full ${isApplicationOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
              />
              <span className="text-sm font-semibold">
                {isApplicationOpen
                  ? "Applications Open"
                  : "Applications Closed"}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Training Done. Now What?
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              No experience? No portfolio? No network?
              <br />
              <span className="font-bold text-orange-600">
                Turn theory into reality.
              </span>
            </p>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
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
              <div className="text-xl font-bold text-gray-900 mb-1">
                6 Months
              </div>
              <div className="text-sm text-gray-600">Hybrid Internship</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                <FiCalendar className="text-orange-600" size={20} />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                2 Office Days
              </div>
              <div className="text-sm text-gray-600">
                Weekly (Free power & internet)
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                <FiUsers className="text-orange-600" size={20} />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                12 Spots Only
              </div>
              <div className="text-sm text-gray-600">Limited availability</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
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
                <FaHandshake className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Program Overview
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                6-Month Hybrid Internship
              </h2>

              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p>
                  For those ready to go from{" "}
                  <span className="font-bold text-orange-600">
                    learning → earning
                  </span>
                  . This is your bridge from academic knowledge to professional
                  expertise.
                </p>
                <p>
                  Work on real projects, receive expert mentorship, and build
                  the network you need to launch your tech career.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">
                    Real-world project experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Professional mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">Career network building</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">
                    Office facilities with free utilities
                  </span>
                </div>
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
                    <FiTarget className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Available Tracks
                    </h3>
                    <p className="text-gray-600">
                      3 people per track (12 spots total)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tracks.map((track, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div
                        className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${track.color} mb-3`}
                      >
                        <track.icon className="text-white" size={20} />
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {track.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl border border-orange-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">
                      Limited Availability
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      12 Spots Only
                    </div>
                    <div className="text-sm text-gray-600">
                      Competitive selection process. Apply early to secure your
                      spot.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your theoretical knowledge into practical, career-ready
              skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                    <benefit.icon className="text-orange-600" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
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
              Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to join Cohort 4 and start your professional journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Online Application",
                desc: "Fill out the application form",
              },
              {
                step: "02",
                title: "Screening",
                desc: "Initial review of applications",
              },
              {
                step: "03",
                title: "Assessment",
                desc: "Technical skills evaluation",
              },
              {
                step: "04",
                title: "Interview",
                desc: "Final selection interview",
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiCalendar className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Early Application Recommended
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to Launch Your Tech Career?
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Join Tech6Project Cohort 4 and transform from a learner to an
                earner. Limited to 12 spots. Apply now before applications
                close.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ng.indeed.com/viewjob?jk=8d5285b0469a82ea&from=shareddesktop_copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <FiArrowRight />
                </a>
                <Link
                  href="/tech6project"
                  className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
                >
                  Learn More About Tech6Project
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                Application deadline: 21st February, 2026
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200 p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                  <FaLightbulb className="text-white" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Important Information
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      This is a 6-month <strong>unpaid internship</strong>{" "}
                      program
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Hybrid model</strong>: 2 office days onsite, 3
                      days remote.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Office days include{" "}
                      <strong>free power and internet</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Successful completion leads to{" "}
                      <strong>certification and professional references</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      For recent graduates and career switchers with basic tech
                      knowledge
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO: Hidden Content for Search Engines */}
      <div className="sr-only" aria-hidden="false">
        <h1>
          Tech6Project Cohort 4 - Internship Opportunities at Digitanotion
        </h1>
        <h2>6-Month Hybrid Internship Program for Tech Graduates</h2>
        <p>
          Tech6Project Cohort 4 Stream 1 is a 6-month unpaid hybrid internship
          program at Digitanotion for aspiring tech professionals. Offering
          real-world project experience, expert mentorship, and career
          networking across 6 tracks: Front-End, Back-End, Product Design,
          Digital Marketing, Cybersecurity, and Mobile Development.
        </p>
        <ul>
          <li>Program: Tech6Project Cohort 4 Stream 1 Internship</li>
          <li>Duration: 6 months hybrid internship</li>
          <li>Schedule: 2 office days per week (free power & internet)</li>
          <li>
            Tracks: Front-End, Back-End, Product Design, Digital Marketing,
            Cybersecurity, Mobile Dev
          </li>
          <li>Capacity: 18 spots only (3 per track)</li>
          <li>Location: Digitanotion offices (hybrid model)</li>
          <li>
            Benefits: Real projects, expert mentorship, career network,
            certification
          </li>
          <li>
            Eligibility: Recent graduates and career switchers with basic tech
            knowledge
          </li>
          <li>Application: Competitive selection process</li>
          <li>Outcome: Portfolio building and professional references</li>
        </ul>
        <h3>Keywords</h3>
        <p>
          Tech internship Nigeria, Hybrid internship, Tech6Project Cohort 4,
          Tech training program, Unpaid internship, Tech graduate program,
          Front-end internship, Back-end internship, Cybersecurity internship,
          Mobile development internship, Product design internship, Digital
          marketing internship, Tech career start, Portfolio building, Tech
          mentorship, Career networking, Tech skills development, Recent
          graduate opportunities, Career switching tech, Tech apprenticeship
          Nigeria
        </p>
      </div>
    </div>
  );
}
