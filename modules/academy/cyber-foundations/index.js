"use client";

import { useState } from "react";
import FAQ from "./faq";
import Image from "next/image";
import Button from "../button";
import { motion } from "framer-motion";

import {
  RiPoliceBadgeFill,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiCalendarLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import {
  HiBadgeCheck,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAlt,
  HiOutlineBeaker,
} from "react-icons/hi";
import { Details } from "../details";
import {
  FiClock,
  FiTarget,
  FiGlobe,
  FiBook,
  FiAward,
  FiShield,
  FiLock,
  FiGlobe as FiNetwork,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdSecurity,
  MdScience,
} from "react-icons/md";
import { TbCertificate, TbNetwork } from "react-icons/tb";
import { SiHackaday } from "react-icons/si";

export default function CybersecurityFoundations() {
  const courseData = {
    title: "Cybersecurity Foundations",
    description:
      "Begin your cybersecurity journey with hands-on labs and practical skills to identify your specialization path",
    level: "Beginner",
    duration: "8 weeks",
    format: "Onsite/Online",
    price: "₦100,000",
    originalPrice: "₦150,000",
    status: "Available",
    isNew: true,
    hasLabs: true,
    labCount: "5+",
    hasCertification: true,
    highlights: [
      "Hands-on Security Labs",
      "OSINT Fundamentals",
      "Networking Basics",
      "Threat Detection",
      "Security Tools Introduction",
      "Career Path Guidance",
      "Practical Exercises",
      "Industry Tools",
    ],
    learningOutcomes: [
      "Understand cybersecurity fundamentals and concepts",
      "Perform basic Open Source Intelligence (OSINT) gathering",
      "Identify different cybersecurity career paths and specializations",
      "Set up and use basic security tools and environments",
      "Understand network protocols and security basics",
      "Recognize common threats and attack vectors",
      "Apply basic security controls and best practices",
      "Create a personal cybersecurity learning roadmap",
    ],
    schedule: "Monday & Wednesday, 6PM - 9PM | Saturday, 10AM - 2PM",
    startDates: ["Feb 5, 2024", "Mar 4, 2024", "Apr 1, 2024"],
    prerequisites:
      "Basic computer literacy (Computing Essentials or equivalent)",
    language: "English",
    labEnvironment: "Virtual lab with Kali Linux and security tools",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Dark Gradient Background for Cybersecurity Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <a href="/academy" className="text-blue-400 hover:text-blue-300">
              Academy
            </a>
            <span className="text-gray-500">/</span>
            Cybersecurity
            <span className="text-gray-500">/</span>
            <span className="text-gray-300 font-medium">
              Cybersecurity Foundations
            </span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Course Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center gap-1">
                  <RiCheckboxCircleLine /> {courseData.status}
                </span>
                {courseData.isNew && (
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full">
                    NEW COURSE
                  </span>
                )}
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {courseData.level}
                </span>
                {courseData.hasCertification && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <TbCertificate /> Certificate
                  </span>
                )}
                {courseData.hasLabs && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <MdScience /> {courseData.labCount} Labs
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cybersecurity
                <span className="block text-4xl lg:text-5xl text-blue-400">
                  Foundations
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your cybersecurity career with this comprehensive
                foundation course. Learn essential security concepts, hands-on
                skills, and discover which cybersecurity specialization is right
                for you.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-900/30 rounded-lg">
                    <FiClock className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {courseData.duration}
                    </div>
                    <div className="text-sm text-gray-400">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-900/30 rounded-lg">
                    <MdOutlineOnlinePrediction
                      className="text-green-400"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {courseData.format}
                    </div>
                    <div className="text-sm text-gray-400">Format</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-900/30 rounded-lg">
                    <FiTarget className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Beginner</div>
                    <div className="text-sm text-gray-400">Level</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-900/30 rounded-lg">
                    <HiOutlineBeaker className="text-amber-400" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {courseData.labCount} Hands-on Labs
                    </div>
                    <div className="text-sm text-gray-400">Practical</div>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 mb-8 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-white">
                      {courseData.price}
                    </div>
                    <div className="text-lg text-gray-400 line-through">
                      {courseData.originalPrice}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full">
                    33% OFF
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Includes virtual lab access, all learning materials, hands-on
                  exercises, and certification
                </p>
                <Button data={courseData} />
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    What you'll achieve
                  </h3>
                  <ul className="space-y-3">
                    {courseData.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <HiBadgeCheck className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <HiOutlineClock /> Schedule
                    </h4>
                    <p className="text-gray-300">{courseData.schedule}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <HiOutlineCalendar /> Upcoming Start Dates
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {courseData.startDates.map((date, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {date}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <HiOutlineAcademicCap /> Prerequisites
                    </h4>
                    <p className="text-gray-300">{courseData.prerequisites}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <MdScience /> Lab Environment
                    </h4>
                    <p className="text-gray-300">{courseData.labEnvironment}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Learn />
      <Skills />
      <Details />
      <FAQ />
    </div>
  );
}

function Learn() {
  const topics = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      points:
        "Cybersecurity fundamentals, threat landscape, CIA triad, security domains, and career paths overview.",
      icon: FiShield,
    },
    {
      id: 2,
      title: "OSINT & Information Gathering",
      points:
        "Open Source Intelligence techniques, social engineering basics, reconnaissance methods, and ethical information gathering.",
      icon: SiHackaday,
    },
    {
      id: 3,
      title: "Networking Basics",
      points:
        "TCP/IP fundamentals, network devices, protocols, basic network security.",
      icon: TbNetwork,
    },
    {
      id: 4,
      title: "AI & Security Tools",
      points:
        "Kali Linux basics, Artificial Intelligence in Cybersecurity, Malware analysis basics, Security Logs Analysis.",
      icon: MdScience,
    },
    {
      id: 5,
      title: "Threats & Vulnerabilities",
      points:
        "Common attack vectors, malware types, vulnerability assessment basics, and security controls introduction.",
      icon: FiLock,
    },
    {
      id: 6,
      title: "Career Path Discovery",
      points:
        "Cybersecurity specializations, industry certifications roadmap, skill mapping, and career planning.",
      icon: HiOutlineAcademicCap,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Curriculum Breakdown
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive modules covering essential cybersecurity foundations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <topic.icon className="text-gray-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm">{topic.points}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Module {index + 1}
                  </span>
                  {index === 0 && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Foundation
                    </span>
                  )}
                  {index === 5 && (
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      Career Focus
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Cybersecurity Fundamentals",
    "OSINT Techniques",
    "Networking Basics",
    "Kali Linux Basics",
    "Artificial Intelligence in Cybersecurity",
    "Threat Identification",
    "Security Tools Usage",
    "Cyber Hygiene",
    "Incident Response Basics",
    "Security Documentation",
    "Career Path Mapping",
    "Security Best Practices",
  ];

  const labSkills = [
    {
      name: "Lab 1: Virtual Environment Setup",
      description: "Get your OS Setup and understand the environment",
      duration: "2 hours",
    },
    {
      name: "Lab 2: Simple Malware Analysis",
      description: "Practice basic malware analysis",
      duration: "2 hours",
    },
    {
      name: "Lab 3: OSINT Investigation",
      description: "Gather public information ethically",
      duration: "2 hours",
    },
    {
      name: "Lab 4: Social Engineering - Phishing",
      description: "See how attackers use phishing links",
      duration: "2 hours",
    },
    {
      name: "Lab 5: Security Tools + AI",
      description:
        "Hands-on with essential security attack strategies and A.I roles",
      duration: "2 hours",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Hands-on Labs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practical cybersecurity skills through immersive lab exercises
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Core Skills You'll Master
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <HiBadgeCheck className="text-lg text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {skill}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lab Exercises */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Hands-on Lab Exercises
            </h3>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full flex items-center gap-1">
              <MdScience /> 5+ Practical Labs
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labSkills.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <span className="font-bold text-gray-800">
                        Lab {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{lab.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {lab.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FiClock size={12} /> {lab.duration}
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Practical
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
