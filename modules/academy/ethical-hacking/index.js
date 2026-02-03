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
  RiBugLine,
  RiShieldFlashLine,
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
  HiOutlineLockClosed,
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
  FiTerminal,
  FiSearch,
  FiAlertTriangle,
  FiKey,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdSecurity,
  MdScience,
  MdLaptop,
  MdVerifiedUser,
} from "react-icons/md";
import { TbCertificate, TbNetwork, TbBug, TbShieldLock } from "react-icons/tb";
import { SiHackaday, SiKalilinux, SiMetasploit } from "react-icons/si";
import { GiTargeted } from "react-icons/gi";

export default function EthicalHacking() {
  const courseData = {
    title: "Ethical Hacking",
    subtitle: "VAPT Specialization",
    description:
      "Master advanced penetration testing techniques, vulnerability assessment, and ethical hacking methodologies to secure modern organizations",
    level: "Advanced",
    duration: "14 weeks",
    format: "Onsite",
    price: "₦370,000",
    originalPrice: "₦650,000",
    status: "Available",
    isNew: true,
    hasLabs: true,
    labCount: "20+",
    hasCertification: true,
    prerequisites: [
      "Computing Essentials or equivalent computer skills",
      "Cybersecurity Foundations knowledge",
      "Basic networking concepts",
      "Understanding of operating systems",
    ],
    highlights: [
      "Comprehensive Penetration Testing",
      "Real-world Vulnerability Assessment",
      "Advanced Exploitation Techniques",
      "Web Application Security",
      "Network Penetration Testing",
      "Social Engineering Tactics",
      "Reporting & Documentation",
      "Legal & Compliance Aspects",
    ],
    learningOutcomes: [
      "Conduct professional vulnerability assessments and penetration tests",
      "Master Kali Linux tools for ethical hacking",
      "Exploit common vulnerabilities in systems and applications",
      "Perform advanced network penetration testing",
      "Assess web application security using industry-standard tools",
      "Execute social engineering attacks in controlled environments",
      "Document findings and prepare professional security reports",
      "Understand legal frameworks and compliance requirements for ethical hacking",
    ],
    schedule: "Monday, Wednesday, Friday | 6PM - 9PM",
    startDates: ["Mar 4, 2024", "Apr 1, 2024", "May 6, 2024"],
    prerequisitesText:
      "Computing Essentials or equivalent computer skills, Cybersecurity Foundations",
    language: "English",
    labEnvironment:
      "Advanced virtual lab with Kali Linux, Metasploit, Burp Suite, and custom vulnerable machines",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Light Gradient Background for Hacking Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <a href="/academy" className="text-red-600 hover:text-red-800">
              Academy
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-red-600 hover:text-red-800">
              Cybersecurity
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Ethical Hacking Specialization
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
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold rounded-full">
                    SPECIALIZATION
                  </span>
                )}
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                  {courseData.level}
                </span>
                {courseData.hasCertification && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <TbCertificate /> CEH-aligned Certification
                  </span>
                )}
                {courseData.hasLabs && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <MdScience /> {courseData.labCount} Advanced Labs
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Ethical Hacking
                <span className="block text-4xl lg:text-5xl text-red-600">
                  VAPT Specialization
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Become a certified ethical hacker and penetration tester. Master
                advanced security assessment techniques through hands-on labs
                and real-world scenarios.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FiClock className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {courseData.duration}
                    </div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MdOutlineOnlinePrediction
                      className="text-green-600"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {courseData.format}
                    </div>
                    <div className="text-sm text-gray-500">Format</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FiTarget className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Advanced</div>
                    <div className="text-sm text-gray-500">Level</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <HiOutlineBeaker className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {courseData.labCount} Hands-on Labs
                    </div>
                    <div className="text-sm text-gray-500">Practical</div>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-8 border border-red-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {courseData.price}
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      {courseData.originalPrice}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-full">
                    43% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes advanced lab access, hacking tools, certification
                  exam fee, and career placement support
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
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <GiTargeted className="text-red-600" /> What you'll achieve
                  </h3>
                  <ul className="space-y-3">
                    {courseData.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <HiBadgeCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <HiOutlineClock /> Schedule
                    </h4>
                    <p className="text-gray-600">{courseData.schedule}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <HiOutlineCalendar /> Upcoming Start Dates
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {courseData.startDates.map((date, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {date}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <HiOutlineAcademicCap /> Prerequisites
                    </h4>
                    <div className="space-y-2">
                      {courseData.prerequisites.map((req, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <HiOutlineLockClosed
                            className="text-gray-400 mt-1 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-gray-600 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MdScience /> Lab Environment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {courseData.labEnvironment}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Course Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive ethical hacking training with real-world penetration
              testing experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {courseData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow hover:border-red-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <TbBug className="text-red-600 text-2xl" />
                  ) : index === 1 ? (
                    <FiSearch className="text-orange-600 text-2xl" />
                  ) : index === 2 ? (
                    <RiBugLine className="text-red-600 text-2xl" />
                  ) : index === 3 ? (
                    <MdLaptop className="text-purple-600 text-2xl" />
                  ) : (
                    <TbNetwork className="text-blue-600 text-2xl" />
                  )}
                </div>
                <h3 className="font-semibold text-gray-900">{highlight}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Learn />
      <Skills />
      {/* <Details /> */}
      <FAQ />
    </div>
  );
}

function Learn() {
  const topics = [
    {
      id: 1,
      title: "Introduction to Ethical Hacking",
      points:
        "Legal frameworks, ethics, penetration testing methodologies, reconnaissance techniques, and information gathering strategies.",
      icon: MdVerifiedUser,
      color: "from-red-100 to-orange-100",
      duration: "2 weeks",
    },
    // {
    //   id: 2,
    //   title: "Kali Linux & Tools Mastery",
    //   points:
    //     "Advanced Kali Linux usage, Metasploit framework, Nmap scripting, vulnerability scanners, and automation tools.",
    //   icon: SiKalilinux,
    //   color: "from-purple-100 to-pink-100",
    //   duration: "2 weeks",
    // },
    {
      id: 3,
      title: "Network Penetration Testing",
      points:
        "Network reconnaissance, vulnerability scanning, exploitation, post-exploitation, pivoting, and covering tracks.",
      icon: TbNetwork,
      color: "from-blue-100 to-cyan-100",
      duration: "3 weeks",
    },
    {
      id: 4,
      title: "Web Application Security",
      points:
        "OWASP Top 10, SQL injection, XSS, CSRF, SSRF, authentication bypass, and web application firewall evasion.",
      icon: FiGlobe,
      color: "from-green-100 to-emerald-100",
      duration: "3 weeks",
    },
    {
      id: 5,
      title: "Mobile Security",
      points:
        "Mobile application vulnerability scanning, and reverse engineering tools.",
      icon: FiTerminal,
      color: "from-amber-100 to-yellow-100",
      duration: "2 weeks",
    },
    {
      id: 6,
      title: "Contract, Compliance, and Reporting",
      points: "Legal & compliance knowledge, professional report writing.",
      icon: HiOutlineUsers,
      color: "from-pink-100 to-rose-100",
      duration: "2 weeks",
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
            14-week intensive program covering all aspects of ethical hacking
            and penetration testing
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
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4`}
                >
                  <topic.icon className="text-gray-800 text-xl" />
                </div>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {topic.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{topic.points}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Module {index + 1}
                  </span>
                  {index === 0 && (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      Foundation
                    </span>
                  )}
                  {index === 5 && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Capstone
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
    "Penetration Testing Methodology",
    "Kali Linux Mastery",
    "Network Vulnerability Assessment",
    "Web Application Security Testing",
    "Metasploit Framework",
    "Social Engineering Techniques",
    "Wireless Network Security",
    "Cryptography & Steganography",
    "Incident Response",
    "Professional Report Writing",
    "Legal & Compliance Knowledge",
    "Ethical Hacking Ethics",
  ];

  const labSkills = [
    {
      name: "Lab 1-3: Reconnaissance & Scanning",
      description:
        "Advanced network reconnaissance, OS fingerprinting, service detection",
      duration: "12 hours",
      tools: ["Nmap", "Recon-ng", "Maltego"],
    },
    {
      name: "Lab 4-7: Vulnerability Assessment",
      description: "Comprehensive vulnerability scanning and analysis",
      duration: "16 hours",
      tools: ["Nessus", "OpenVAS", "Nikto"],
    },
    {
      name: "Lab 8-11: Exploitation Techniques",
      description: "System and application exploitation using Metasploit",
      duration: "20 hours",
      tools: ["Metasploit", "Empire", "Cobalt Strike"],
    },
    {
      name: "Lab 12-15: Web App Penetration",
      description: "OWASP Top 10 testing on vulnerable applications",
      duration: "24 hours",
      tools: ["Burp Suite", "OWASP ZAP", "SQLmap"],
    },
    {
      name: "Lab 16-18: Post-Exploitation",
      description: "Privilege escalation, persistence, lateral movement",
      duration: "18 hours",
      tools: ["Mimikatz", "PowerSploit", "BloodHound"],
    },
    {
      name: "Lab 19-20: Capstone Project",
      description: "Full penetration test on simulated corporate network",
      duration: "30 hours",
      tools: ["All Tools", "Custom Scripts", "Reporting Tools"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Advanced Labs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master professional ethical hacking skills through intensive lab
            exercises
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Core Ethical Hacking Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-4 border border-gray-200 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <HiBadgeCheck className="text-lg text-red-600" />
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
              Advanced Lab Exercises
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 text-sm font-medium rounded-full flex items-center gap-1">
              <MdScience /> 20+ Intensive Labs
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
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group hover:border-red-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                      <span className="font-bold text-red-800">
                        L{index < 9 ? "0" + (index + 1) : index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{lab.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {lab.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {lab.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FiClock size={12} /> {lab.duration}
                      </span>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        Advanced
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
