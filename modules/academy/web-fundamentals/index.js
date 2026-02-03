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
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
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
  HiOutlineDesktopComputer,
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
  FiLayout,
  FiSearch,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdDesignServices,
  MdSpeed,
  MdDevices,
  MdVerifiedUser,
  MdWeb,
  MdImportantDevices,
} from "react-icons/md";
import { TbCertificate, TbBrowser, TbWorld } from "react-icons/tb";
import { SiGooglechrome } from "react-icons/si";
import { GiProgression, GiWebSpit } from "react-icons/gi";

export default function WebDevelopmentFundamentals() {
  const courseData = {
    title: "Web Development",
    subtitle: "Fundamentals (Beginners)",
    description:
      "Master the core building blocks of the web - HTML, CSS, and vanilla JavaScript. Learn web development from scratch without frameworks, understanding how everything works under the hood.",
    level: "Beginner",
    duration: "9 weeks",
    format: "Onsite",
    price: "₦100,000",
    originalPrice: "₦150,000",
    status: "Available",
    isNew: true,
    hasLabs: true,
    labCount: "3+",
    hasCertification: true,
    prerequisites: [
      "Basic computer literacy",
      "No prior coding experience required",
      "Ability to use a computer and browse the internet",
      "Willingness to learn and practice",
    ],
    highlights: [
      "HTML5 & Semantic Markup",
      "Modern CSS & Responsive Design",
      "Vanilla JavaScript Fundamentals",
      "Web Hosting & Deployment",
      "SEO Best Practices",
      "Web Performance Basics",
      "Debugging & DevTools",
      "Portfolio Project",
    ],
    learningOutcomes: [
      "Build responsive websites from scratch with HTML5, CSS3, and JavaScript",
      "Understand how the web works - from browser to server",
      "Deploy websites to live servers with custom domains",
      "Implement SEO principles for better search visibility",
      "Create mobile-first, accessible web designs",
      "Debug code effectively using browser developer tools",
      "Structure web projects with proper file architecture",
      "Prepare a professional portfolio website for job applications",
    ],
    schedule: "Monday, Wednesday, Friday | 6PM - 8PM",
    startDates: ["Mar 4, 2024", "Apr 1, 2024", "May 6, 2024"],
    prerequisitesText:
      "No coding experience required. Perfect for absolute beginners.",
    language: "English",
    labEnvironment:
      "Modern browser, code editor (VS Code), and live deployment platforms",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Using Ethical Hacking background theme */}
      <section className="relative overflow-hidden">
        {/* Light Gradient Background for Web Fundamentals Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <a href="/academy" className="text-green-600 hover:text-green-800">
              Academy
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-green-600 hover:text-green-800">
              Web
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Web Development Fundamentals
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
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold rounded-full">
                    BEGINNER FRIENDLY
                  </span>
                )}
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {courseData.level}
                </span>
                {courseData.hasCertification && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <TbCertificate /> Certification Included
                  </span>
                )}
                {courseData.hasLabs && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <HiOutlineDesktopComputer /> {courseData.labCount} Hands-on
                    Exercises
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Web Development
                <span className="block text-4xl lg:text-5xl text-green-600">
                  Fundamentals (Beginners)
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Start your web development journey with the basics. Learn HTML,
                CSS, and JavaScript the vanilla way - understanding how the web
                actually works before diving into frameworks.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FiClock className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {courseData.duration}
                    </div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MdOutlineOnlinePrediction
                      className="text-blue-600"
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
                    <HiOutlineBeaker className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      No Experience Needed
                    </div>
                    <div className="text-sm text-gray-500">Prerequisites</div>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {courseData.price}
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      {courseData.originalPrice}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-full">
                    33% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect starting point for complete beginners. Includes all
                  learning materials, hosting resources, certificate, and
                  foundation for advanced courses.
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
                    <GiWebSpit className="text-green-600" /> What you'll achieve
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
                      <HiOutlineAcademicCap /> Who is this for?
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
                      <MdImportantDevices /> Tech Stack
                    </h4>
                    <div className="flex gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <RiHtml5Fill className="text-red-600" size={24} />
                      </div>
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <RiCss3Fill className="text-blue-600" size={24} />
                      </div>
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <RiJavascriptFill
                          className="text-yellow-600"
                          size={24}
                        />
                      </div>
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <TbBrowser className="text-gray-600" size={24} />
                      </div>
                    </div>
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
              What You'll Learn
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master the essential skills every web developer needs, without
              overwhelming frameworks
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
                className="bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow hover:border-green-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <RiHtml5Fill className="text-red-600 text-2xl" />
                  ) : index === 1 ? (
                    <RiCss3Fill className="text-blue-600 text-2xl" />
                  ) : index === 2 ? (
                    <RiJavascriptFill className="text-yellow-600 text-2xl" />
                  ) : index === 3 ? (
                    <TbWorld className="text-green-600 text-2xl" />
                  ) : index === 4 ? (
                    <FiSearch className="text-purple-600 text-2xl" />
                  ) : (
                    <FiZap className="text-amber-600 text-2xl" />
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
      title: "Web Foundations & HTML5",
      points:
        "How the web works, browser fundamentals, semantic HTML5, forms, tables, accessibility, and web standards.",
      icon: RiHtml5Fill,
      color: "from-red-100 to-orange-100",
      duration: "2 weeks",
    },
    {
      id: 2,
      title: "Modern CSS & Responsive Design",
      points:
        "CSS3 fundamentals, Flexbox, Grid, responsive design principles, media queries, animations, and CSS best practices.",
      icon: RiCss3Fill,
      color: "from-blue-100 to-cyan-100",
      duration: "2 weeks",
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      points:
        "Variables, data types, functions, DOM manipulation, events, basic algorithms, and problem-solving with vanilla JavaScript.",
      icon: RiJavascriptFill,
      color: "from-yellow-100 to-amber-100",
      duration: "2 weeks",
    },
    {
      id: 4,
      title: "Web Design & Architecture",
      points:
        "UI/UX basics, color theory, typography, layout design, project structure, and creating user-friendly interfaces.",
      icon: FiLayout,
      color: "from-purple-100 to-pink-100",
      duration: "1 week",
    },
    {
      id: 5,
      title: "Deployment & Web Technologies",
      points:
        "Web hosting, domain setup, FTP, browser DevTools, debugging, and deploying websites live.",
      icon: TbWorld,
      color: "from-green-100 to-emerald-100",
      duration: "1 week",
    },
    {
      id: 6,
      title: "Portfolio Project",
      points:
        "Build a complete personal portfolio website with responsive design, SEO optimization, and live deployment.",
      icon: FiAward,
      color: "from-indigo-100 to-violet-100",
      duration: "1 week",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            9-Week Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Step-by-step learning path designed for complete beginners
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
                    Week {index + 1}-
                    {index + (topic.duration === "2 weeks" ? 2 : 1)}
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
    "HTML5 Semantic Markup",
    "CSS3 & Modern Layouts",
    "JavaScript Basics",
    "Responsive Web Design",
    "Web Hosting & FTP",
    "Browser DevTools",
    "SEO Fundamentals",
    "Web Performance",
    "Accessibility (a11y)",
    "UI/UX Principles",
    "Debugging Techniques",
  ];

  const projects = [
    {
      name: "Personal Bio Page",
      description: "Create your first HTML page with CSS styling",
      duration: "4 hours",
      skills: ["HTML", "CSS"],
      level: "Beginner",
    },
    // {
    //   name: "Responsive Restaurant Website",
    //   description: "Build a mobile-first restaurant site with responsive menu",
    //   duration: "8 hours",
    //   skills: ["HTML", "CSS", "Responsive Design"],
    //   level: "Beginner",
    // },
    {
      name: "Interactive Calculator",
      description: "Build a functional calculator with JavaScript",
      duration: "6 hours",
      skills: ["HTML", "CSS", "JavaScript"],
      level: "Intermediate",
    },
    {
      name: "Portfolio Website",
      description: "Complete personal portfolio with projects showcase",
      duration: "12 hours",
      skills: ["All Skills", "SEO", "Deployment"],
      level: "Capstone",
    },

    // {
    //   name: "Blog Template",
    //   description: "Create a blog template with articles and comments section",
    //   duration: "10 hours",
    //   skills: ["HTML", "CSS", "JavaScript", "Layout"],
    //   level: "Intermediate",
    // },
    // {
    //   name: "E-commerce Product Page",
    //   description: "Design a product page with image gallery and cart",
    //   duration: "15 hours",
    //   skills: ["All Skills", "UI/UX", "Interactivity"],
    //   level: "Advanced Beginner",
    // },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Build practical skills through hands-on projects and exercises
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Core Web Development Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <HiBadgeCheck className="text-lg text-green-600" />
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
              Hands-on Projects
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-medium rounded-full flex items-center gap-1">
              <HiOutlineDesktopComputer /> 3 Real Projects
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group hover:border-green-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <span className="font-bold text-green-800">
                        P{index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      {/* <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FiClock size={12} /> {project.duration}
                      </span> */}
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.level === "Beginner"
                            ? "bg-blue-100 text-blue-800"
                            : project.level === "Intermediate"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {project.level}
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
