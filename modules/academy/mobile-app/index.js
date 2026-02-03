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
  RiSmartphoneLine,
  RiAppStoreLine,
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
  HiOutlineDeviceMobile,
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
  FiSmartphone,
  FiDatabase,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdDesignServices,
  MdSpeed,
  MdDevices,
  MdVerifiedUser,
  MdStore,
  MdCloudUpload,
} from "react-icons/md";
import { TbCertificate, TbBrandFlutter, TbApi } from "react-icons/tb";
import { SiFlutter, SiDart, SiFirebase, SiGoogleplay } from "react-icons/si";
import { GiTargeted, GiSmartphone } from "react-icons/gi";

export default function MobileAppDevelopment() {
  const courseData = {
    title: "Mobile App Development",
    subtitle: "Flutter Specialization",
    description:
      "Master cross-platform mobile app development with Flutter & Dart. Build beautiful, high-performance iOS and Android applications from a single codebase.",
    level: "Advanced",
    duration: "14 weeks",
    format: "Onsite",
    price: "₦300,000",
    originalPrice: "₦450,000",
    status: "Available",
    isNew: true,
    hasLabs: true,
    labCount: "15+",
    hasCertification: true,
    prerequisites: [
      "Programming fundamentals (any language)",
      "Basic understanding of object-oriented programming",
      "Familiarity with development tools",
    ],
    highlights: [
      "Flutter & Dart Mastery",
      "Cross-Platform Development",
      "State Management",
      "API Integration",
      "App Publishing",
      "Firebase Backend",
      "UI/UX Design",
      "Real Projects",
    ],
    learningOutcomes: [
      "Build production-ready iOS and Android apps with Flutter",
      "Master Dart programming language and Flutter framework",
      "Implement advanced state management solutions (Provider, Bloc)",
      "Integrate REST APIs and handle asynchronous operations",
      "Publish apps to Google Play Store and Apple App Store",
      "Implement Firebase authentication, database, and cloud functions",
      "Create beautiful, responsive UIs with Material and Cupertino widgets",
      "Deploy and maintain mobile applications with CI/CD pipelines",
    ],
    schedule: "Tuesday, Thursday, Saturday | 6PM - 9PM",
    startDates: ["Mar 5, 2024", "Apr 2, 2024", "May 7, 2024"],
    prerequisitesText:
      "Programming fundamentals, Computing Essentials or equivalent skills",
    language: "English",
    labEnvironment:
      "Complete Flutter development setup with Android Studio, VS Code, iOS Simulator, Android Emulator, and Firebase tools",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Using Ethical Hacking background theme */}
      <section className="relative overflow-hidden">
        {/* Light Gradient Background for Mobile Development Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <a
              href="/academy"
              className="text-purple-600 hover:text-purple-800"
            >
              Academy
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-purple-600 hover:text-purple-800">
              Mobile Development
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Flutter Specialization
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
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full">
                    SPECIALIZATION
                  </span>
                )}
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  {courseData.level}
                </span>
                {courseData.hasCertification && (
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <TbCertificate /> Flutter Certification
                  </span>
                )}
                {courseData.hasLabs && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <RiSmartphoneLine /> {courseData.labCount} App Projects
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Mobile App Development
                <span className="block text-4xl lg:text-5xl text-purple-600">
                  Flutter Specialization
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master cross-platform mobile app development with Flutter &
                Dart. Build beautiful, high-performance applications for both
                iOS and Android from a single codebase.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FiClock className="text-purple-600" size={20} />
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
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <FiTarget className="text-indigo-600" size={20} />
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
                      {courseData.labCount} Hands-on Apps
                    </div>
                    <div className="text-sm text-gray-500">Practical</div>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {courseData.price}
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      {courseData.originalPrice}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full">
                    33% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes Flutter tools, app publishing resources,
                  certification, and career support for mobile developers.
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
                    <GiTargeted className="text-purple-600" /> What you'll
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
                      <RiSmartphoneLine /> Development Environment
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
              Comprehensive mobile app development training with Flutter, from
              basics to app store publishing
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
                className="bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow hover:border-purple-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <SiFlutter className="text-blue-500 text-2xl" />
                  ) : index === 1 ? (
                    <MdDevices className="text-purple-600 text-2xl" />
                  ) : index === 2 ? (
                    <FiCpu className="text-indigo-600 text-2xl" />
                  ) : index === 3 ? (
                    <TbApi className="text-green-600 text-2xl" />
                  ) : index === 4 ? (
                    <SiGoogleplay className="text-green-600 text-2xl" />
                  ) : index === 5 ? (
                    <SiFirebase className="text-orange-600 text-2xl" />
                  ) : (
                    <MdDesignServices className="text-pink-600 text-2xl" />
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
      title: "Dart Programming Fundamentals",
      points:
        "Dart language syntax, object-oriented programming, asynchronous programming, packages, and tooling setup.",
      icon: SiDart,
      color: "from-blue-100 to-cyan-100",
      duration: "2 weeks",
    },
    {
      id: 2,
      title: "Flutter UI Development",
      points:
        "Widgets, layouts, Material & Cupertino design, responsive design, animations, and custom UI components.",
      icon: TbBrandFlutter,
      color: "from-purple-100 to-pink-100",
      duration: "3 weeks",
    },
    {
      id: 3,
      title: "State Management & Architecture",
      points:
        "Provider, Bloc, Riverpod, state management patterns, app architecture, and clean code practices.",
      icon: FiCpu,
      color: "from-indigo-100 to-violet-100",
      duration: "2 weeks",
    },
    {
      id: 4,
      title: "Backend Integration & APIs",
      points:
        "REST API integration, HTTP clients, JSON serialization, authentication, and working with Firebase.",
      icon: TbApi,
      color: "from-green-100 to-emerald-100",
      duration: "2 weeks",
    },
    {
      id: 5,
      title: "Advanced Features & Deployment",
      points:
        "Push notifications, maps, camera access, local storage, app publishing, and store guidelines.",
      icon: MdCloudUpload,
      color: "from-amber-100 to-yellow-100",
      duration: "3 weeks",
    },
    {
      id: 6,
      title: "Capstone Project",
      points:
        "Build and publish a complete mobile application with all features, testing, and deployment.",
      icon: FiAward,
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
            14-week intensive program covering Flutter mobile app development
            from fundamentals to deployment
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
    "Dart Programming",
    "Flutter Framework",
    "Cross-Platform Development",
    "State Management",
    "API Integration",
    "Firebase Backend",
    "UI/UX Design",
    "App Publishing",
    "Debugging & Testing",
    "Performance Optimization",
    "CI/CD Pipelines",
    "App Store Guidelines",
  ];

  const labSkills = [
    {
      name: "Project 1-3: Dart Fundamentals",
      description: "Dart language exercises and object-oriented programming",
      duration: "15 hours",
      tools: ["Dart", "VS Code", "DartPad"],
    },
    {
      name: "Project 4-6: Flutter UI Basics",
      description: "Build simple UIs with Material and Cupertino widgets",
      duration: "20 hours",
      tools: ["Flutter", "Android Studio", "iOS Simulator"],
    },
    {
      name: "Project 7-9: State Management",
      description: "Implement Provider and Bloc for complex state",
      duration: "18 hours",
      tools: ["Provider", "Bloc", "Riverpod"],
    },
    {
      name: "Project 10-12: API Integration",
      description: "Connect to REST APIs and handle JSON data",
      duration: "16 hours",
      tools: ["HTTP", "Dio", "JSON Serialization"],
    },
    {
      name: "Project 13-14: Firebase Integration",
      description: "Implement authentication, database, and cloud functions",
      duration: "20 hours",
      tools: ["Firebase Auth", "Firestore", "Cloud Functions"],
    },
    {
      name: "Project 15: Complete App & Publishing",
      description: "Build and publish a complete app to stores",
      duration: "30 hours",
      tools: ["All Tools", "App Store", "Play Console"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & App Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master professional mobile app development skills through hands-on
            projects
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Core Mobile Development Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <HiBadgeCheck className="text-lg text-purple-600" />
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
              Hands-on App Projects
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium rounded-full flex items-center gap-1">
              <RiSmartphoneLine /> 15+ Real Apps
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
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group hover:border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <span className="font-bold text-purple-800">
                        App{index < 9 ? "0" + (index + 1) : index + 1}
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
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
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
