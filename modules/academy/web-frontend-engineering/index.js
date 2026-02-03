"use client";

import { useState } from "react";
import FAQ from "./faq";
import Image from "next/image";
import Button from "../button";
import { motion } from "framer-motion";

import {
  RiTimeLine,
  RiCheckboxCircleLine,
  RiCalendarLine,
  RiCodeSSlashLine,
  RiReactjsLine,
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
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { Details } from "../details";
import {
  FiClock,
  FiTarget,
  FiGlobe,
  FiBook,
  FiAward,
  FiShield,
  FiLayers,
  FiServer,
  FiZap,
  FiCpu,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdDesignServices,
  MdSpeed,
  MdDevices,
  MdVerifiedUser,
} from "react-icons/md";
import { TbCertificate, TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import { SiReact, SiNextdotjs, SiVercel, SiTypescript } from "react-icons/si";
import { GiProgression } from "react-icons/gi";

export default function WebFrontEndEngineer() {
  const courseData = {
    title: "Web Front-End Engineer",
    subtitle: "Specialization",
    description:
      "Master modern front-end development with React, Next.js, and advanced web technologies to build high-performance, scalable web applications",
    level: "Advanced",
    duration: "12 weeks",
    format: "Onsite",
    price: "₦170,000",
    originalPrice: "₦250,000",
    status: "Available",
    isNew: true,
    hasLabs: true,
    labCount: "15+",
    hasCertification: true,
    prerequisites: ["Computing Essentials, or basic knowledge of the computer"],
    highlights: [
      "Modern React with Next.js",
      "TypeScript Mastery",
      "Performance Optimization",
      "Deployment Skills",
      "Advanced State Management",
      "UI/UX Implementation",
      "Testing & Debugging",
    ],
    learningOutcomes: [
      "Build production-ready applications with Next.js and React",
      "Implement TypeScript/javaScript for scalable code architecture",
      "Optimize web performance and Core Web Vitals",
      "Deploy applications on modern hosting platforms",
      "Master advanced state management patterns",
      "Create responsive, accessible user interfaces",
      "Implement testing strategies and debugging techniques",
    ],
    schedule: "Tuesday, Thursday, Saturday | 6PM - 9PM",
    startDates: ["Mar 5, 2024", "Apr 2, 2024", "May 7, 2024"],
    prerequisitesText:
      "Our Web Front-End Engineer course requires Computing Essentials, or basic knowledge of the computer",
    language: "English",
    labEnvironment:
      "Modern development environment with VSCode, React DevTools, Next.js, and deployment platforms",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Light Gradient Background for Web Development Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <a href="/academy" className="text-blue-600 hover:text-blue-800">
              Academy
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Web
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Front-End Engineering Specialization
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
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full">
                    SPECIALIZATION
                  </span>
                )}
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {courseData.level}
                </span>
                {courseData.hasCertification && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <TbCertificate /> Industry Certification
                  </span>
                )}
                {courseData.hasLabs && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <MdDesignServices /> {courseData.labCount} Hands-on Projects
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Web Front-End Engineer
                <span className="block text-4xl lg:text-5xl text-blue-600">
                  Specialization
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master modern front-end development with React, Next.js, and
                advanced web technologies. Build high-performance, scalable
                applications that stand out in today's competitive market.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FiClock className="text-blue-600" size={20} />
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
                    <div className="font-semibold text-gray-900">
                      Intermediate
                    </div>
                    <div className="text-sm text-gray-500">Level</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <HiOutlineBeaker className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {courseData.labCount} Projects
                    </div>
                    <div className="text-sm text-gray-500">Practical</div>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {courseData.price}
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      {courseData.originalPrice}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full">
                    28% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes project materials, deployment resources, certificate,
                  and career support
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
                    <GiProgression className="text-blue-600" /> What you'll
                    achieve
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
                          <RiCodeSSlashLine
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
                      <MdDesignServices /> Development Environment
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
              Comprehensive front-end engineering training with modern tools and
              real-world projects
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
                className="bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow hover:border-blue-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <SiNextdotjs className="text-blue-600 text-2xl" />
                  ) : index === 1 ? (
                    <SiTypescript className="text-blue-700 text-2xl" />
                  ) : index === 2 ? (
                    <FiZap className="text-yellow-600 text-2xl" />
                  ) : index === 3 ? (
                    <TbBrandVercel className="text-black text-2xl" />
                  ) : (
                    <FiLayers className="text-purple-600 text-2xl" />
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
      title: "Introduction to Web Front-End",
      points: "HTML, CSS, and JavaScript fundamentals",
      icon: SiTypescript,
      color: "from-blue-100 to-indigo-100",
      duration: "2 weeks",
    },
    {
      id: 2,
      title: "React & Next.js",
      points:
        "Components, React Hooks mastery, Server Components, App Router, API Routes, Data Fetching patterns, and React 18 features.",
      icon: SiNextdotjs,
      color: "from-blue-100 to-cyan-100",
      duration: "3 weeks",
    },

    {
      id: 3,
      title: "State Management & Performance",
      points:
        "Advanced state patterns, Context API, Zustand, React Query, performance optimization.",
      icon: FiCpu,
      color: "from-purple-100 to-pink-100",
      duration: "2 weeks",
    },
    {
      id: 4,
      title: "Web Hosting & Deployment",
      points:
        "Vercel deployment, CI/CD pipelines, environment variables, domain configuration, and production monitoring.",
      icon: TbBrandVercel,
      color: "from-gray-100 to-black-100",
      duration: "1 week",
    },
    {
      id: 5,
      title: "Performance & Optimization",
      points:
        "Core Web Vitals, lazy loading, code splitting, image optimization, caching strategies, and bundle analysis.",
      icon: MdSpeed,
      color: "from-yellow-100 to-amber-100",
      duration: "2 weeks",
    },
    {
      id: 6,
      title: "Capstone Project",
      points:
        "Build a full-scale production application with deployment, testing, optimization, and real-world problem-solving.",
      icon: FiAward,
      color: "from-green-100 to-emerald-100",
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
            12-week intensive program covering modern front-end development with
            React, Next.js, and advanced web technologies
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
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
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
    "React 18 & Next.js ",
    "TypeScript Development",
    "State Management",
    "Performance Optimization",
    "Web Deployment",
    "Responsive Design",
    "Testing & Debugging",
    "API Integration",
    "SEO Implementation",
    "Accessibility (a11y)",
    "CI/CD Pipelines",
    "Analytics Integration",
  ];

  const labSkills = [
    {
      name: "Project 1-3: Next.js Fundamentals",
      description: "Build SSR/SSG applications with App Router and API Routes",
      duration: "15 hours",
      tools: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      name: "Project 4-6: TypeScript Integration",
      description: "Type-safe React components and API integration",
      duration: "12 hours",
      tools: ["TypeScript", "React Query", "Zod"],
    },
    {
      name: "Project 7-9: Performance Optimization",
      description: "Optimize Core Web Vitals and implement advanced caching",
      duration: "18 hours",
      tools: ["Lighthouse", "Webpack", "Next.js Analytics"],
    },
    {
      name: "Project 10-12: Deployment & Hosting",
      description: "Deploy applications on Vercel with CI/CD pipelines",
      duration: "10 hours",
      tools: ["Vercel", "GitHub Actions", "Environment Variables"],
    },
    {
      name: "Project 13-14: Advanced Features",
      description: "Implement authentication, payments, and real-time features",
      duration: "15 hours",
      tools: ["NextAuth", "Stripe", "Socket.io"],
    },
    {
      name: "Project 15: Capstone Project",
      description:
        "Full-scale production application with all advanced features",
      duration: "25 hours",
      tools: ["All Tools", "Custom Hooks", "Performance Monitoring"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Hands-on Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master professional front-end engineering skills through practical
            projects and real-world scenarios
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Core Front-End Engineering Skills
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

        {/* Project Exercises */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Hands-on Project Portfolio
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 text-sm font-medium rounded-full flex items-center gap-1">
              <MdDesignServices /> 15+ Real Projects
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
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group hover:border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <span className="font-bold text-blue-800">
                        P{index < 9 ? "0" + (index + 1) : index + 1}
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
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {index === 5 ? "Advanced" : "Intermediate"}
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
