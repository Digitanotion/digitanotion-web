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
} from "react-icons/ri";
import {
  HiBadgeCheck,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { Details } from "../details";
import { FiClock, FiTarget, FiGlobe, FiBook, FiAward } from "react-icons/fi";
import { MdComputer, MdOutlineOnlinePrediction } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";

export default function ComputingEssentials() {
  const courseData = {
    title: "Computing Essentials",
    description:
      "Master fundamental computer skills and digital literacy to kickstart your tech journey",
    level: "Beginner",
    duration: "5 weeks",
    format: "Onsite/Online",
    price: "₦60,000",
    originalPrice: "₦100,000",
    status: "Available",
    isNew: true,
    hasCertification: true,
    highlights: [
      "Basic IT Skills",
      "Productivity Tools",
      "Digital Literacy",
      "Computer Fundamentals",
      "Microsoft Office Suite",
      "Online Safety",
      "File Management",
      "Cloud Basics",
    ],
    learningOutcomes: [
      "Operate computers confidently",
      "Use Microsoft Office efficiently",
      "Navigate the internet safely",
      "Manage files and folders",
      "Understand computer hardware",
      "Use cloud storage services",
      "Protect personal data online",
      "Solve basic computer problems",
    ],
    schedule: "Chosen by the Students",
    startDates: ["Jan 15, 2024", "Feb 12, 2024", "Mar 11, 2026"],
    prerequisites: "No prior experience required",
    language: "English",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <a href="/academy" className="text-blue-600 hover:text-blue-800">
              Academy
            </a>
            <span className="text-gray-400">/</span>
            <a
              href="/academy/foundations"
              className="text-blue-600 hover:text-blue-800"
            >
              Foundations
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Computing Essentials
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
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Computing Essentials
                <span className="block text-4xl lg:text-5xl text-blue-600">
                  Specialization
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Learn fundamental computing skills that will prepare you for the
                digital world. Master Computing Essentials and build a solid
                foundation for your tech career.
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
                    <div className="font-semibold text-gray-900">Beginner</div>
                    <div className="text-sm text-gray-500">Level</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <HiOutlineCalendar className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Starting March
                    </div>
                    <div className="text-sm text-gray-500">Next Batch</div>
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
                    40% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes all learning materials, practical exercises, and
                  certification
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What you'll achieve
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
                    <p className="text-gray-600">{courseData.prerequisites}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <HiOutlineGlobeAlt /> Language
                    </h4>
                    <p className="text-gray-600">{courseData.language}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Course Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to become digitally proficient
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
                className="bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <MdComputer className="text-blue-600 text-2xl" />
                </div>
                <h3 className="font-semibold text-gray-900">{highlight}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
      title: "Computer Mastery and Digital Tools",
      points: "Computer mastery, the internet, and everyday digital tools.",
      icon: MdComputer,
    },
    {
      id: 2,
      title: "Workplace and Productivity Tools",
      points:
        "Trending workplace and productivity tools, covering both cloud and on-premise solutions.",
      icon: HiOutlineUsers,
    },
    {
      id: 3,
      title: "Artificial Intelligence Basics",
      points: "Introduction to AI tools for smart productivity.",
      icon: TbCertificate,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum covering essential computing skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6">
                <topic.icon className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {topic.title}
              </h3>
              <p className="text-gray-600">{topic.points}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "Computer Basics",
    "Docs, Sheet, and  more Google Tools",
    "Internet Fundamentals",
    "Operating System Fundamentals",
    "Online Safety",
    "Artificial Intelligence Fundamentals",
    "Email Communication",
    "Basic Troubleshooting",
    "Software Installation",
    "Cloud Storage",
    "Social Media Basics",
    "Digital Documentation",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills You'll Master
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Foundational computer literacy and digital proficiency through
            practical learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <HiBadgeCheck className="text-xl text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {skill}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
