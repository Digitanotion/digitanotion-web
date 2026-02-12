"use client";

import { useState } from "react";
import FAQ from "./faq";
import Image from "next/image";
// import Button from "../button";
import { motion } from "framer-motion";

import {
  RiCheckboxCircleLine,
  RiCalendarLine,
  RiBrushLine,
  RiPaletteLine,
  RiLayoutLine,
  RiPenNibLine,
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
  HiOutlineLightBulb,
  HiOutlineColorSwatch,
} from "react-icons/hi";
import {
  FiClock,
  FiTarget,
  FiGlobe,
  FiBook,
  FiAward,
  FiPenTool,
  FiSmartphone,
  FiMonitor,
  FiUsers,
  FiLayers,
  FiGrid,
  FiSliders,
  FiHeart,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdScience,
  MdLaptop,
  MdVerifiedUser,
  MdOutlineDesignServices,
  MdOutlineDraw,
  MdOutlineAutoAwesome,
  MdOutlinePalette,
} from "react-icons/md";
import {
  TbCertificate,
  TbBrandFigma,
  TbBrandSketch,
  TbBrandAdobe,
  TbBrandInvision,
} from "react-icons/tb";
import {
  GiTargeted,
  GiPencilRuler,
  GiPaintBrush,
  GiSmartphone,
} from "react-icons/gi";
import { FaFigma, FaUserCircle } from "react-icons/fa";
import { SiAdobexd, SiFramer, SiProtodotio, SiInvision } from "react-icons/si";

export default function ProductDesign() {
  const courseData = {
    title: "Product Design",
    subtitle: "UI/UX Specialization",
    description:
      "Master user-centered design principles, create stunning interfaces, and build a professional portfolio using Figma and industry-standard design tools.",
    level: "Intermediate",
    duration: "9 weeks",
    format: "Onsite/Online",
    price: "₦120,000",
    originalPrice: "₦150,000",
    status: "Available",
    isNew: true,
    hasLabs: true,
    labCount: "15+",
    hasCertification: true,
    prerequisites: [
      "Computing Essentials or equivalent computer skills",
      "Basic computer literacy",
      "Creative mindset and attention to detail",
      "Access to a laptop/computer",
    ],
    highlights: [
      "User-Centered Design Methodology",
      "Figma Mastery & Design Systems",
      "Wireframing & Prototyping",
      "User Research & Testing",
      "Visual Design & Branding",
      "Mobile & Web Interface Design",
      "Portfolio Development",
      "Design Thinking Process",
    ],
    learningOutcomes: [
      "Master Figma for professional UI/UX design projects",
      "Conduct effective user research and usability testing",
      "Create wireframes, interactive prototypes, and design systems",
      "Apply visual design principles for stunning interfaces",
      "Design responsive web and mobile applications",
      "Build a professional design portfolio",
      "Collaborate effectively with developers",
      "Present and justify design decisions to stakeholders",
    ],
    schedule: "Tuesdays, Thursdays, Saturdays | 6PM - 9PM",
    startDates: ["Mar 4, 2026"],
    prerequisitesText: "Computing Essentials or equivalent computer skills",
    language: "English",
    labEnvironment:
      "Cloud-based Figma environment with design kits, UI libraries, prototyping tools, and collaborative workspace",
  };

  const handleWhatsAppRegistration = () => {
    const phoneNumber = "+2348073735836";
    const message = encodeURIComponent(
      `Hello Digitanotion Academy! I am interested in your Product Design UI/UX Specialization Course (₦120,000) starting March 2026. How do I enroll?`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Light Gradient Background for Design Theme - Orange/Red brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-sm md:text-base">
            <a
              href="/academy"
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              Academy
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="text-red-600 hover:text-red-800 font-medium">
              Design
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Product Design Specialization
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
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full">
                    SPECIALIZATION
                  </span>
                )}
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                  {courseData.level}
                </span>
                {courseData.hasCertification && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <TbCertificate /> Industry-Recognized Certification
                  </span>
                )}
                {courseData.hasLabs && (
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full flex items-center gap-1">
                    <MdScience /> {courseData.labCount} Hands-on Projects
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Product Design
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  UI/UX Specialization
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Become a professional product designer. Master Figma, design
                thinking, and create stunning user experiences through hands-on
                projects and real-world design challenges.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <FiClock className="text-orange-600" size={20} />
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
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <FiTarget className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Intermediate
                    </div>
                    <div className="text-sm text-gray-500">Level</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <HiOutlineBeaker className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {courseData.labCount} Portfolio Projects
                    </div>
                    <div className="text-sm text-gray-500">Practical</div>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 mb-8 border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {courseData.price}
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      {courseData.originalPrice}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full">
                    20% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes Figma workspace access, UI kits, design resources,
                  portfolio review, and career mentorship support
                </p>
                <button
                  onClick={handleWhatsAppRegistration}
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  <span>Enroll Now - {courseData.price}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
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
                    <GiTargeted className="text-orange-600" /> What you'll
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
                          <FiHeart
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
                      <TbBrandFigma className="text-orange-600" size={20} />{" "}
                      Primary Tool
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Master Figma - the industry standard for UI/UX design.
                      Plus explore Adobe XD, Framer, and prototyping tools.
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
              Comprehensive product design training with real-world projects and
              portfolio development
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
                className="bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow hover:border-orange-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <MdOutlineDesignServices className="text-orange-600 text-2xl" />
                  ) : index === 1 ? (
                    <TbBrandFigma className="text-red-600 text-2xl" />
                  ) : index === 2 ? (
                    <RiLayoutLine className="text-amber-600 text-2xl" />
                  ) : index === 3 ? (
                    <HiOutlineUsers className="text-green-600 text-2xl" />
                  ) : index === 4 ? (
                    <HiOutlineColorSwatch className="text-orange-600 text-2xl" />
                  ) : index === 5 ? (
                    <FiSmartphone className="text-red-600 text-2xl" />
                  ) : index === 6 ? (
                    <FiBook className="text-amber-600 text-2xl" />
                  ) : (
                    <GiPencilRuler className="text-orange-600 text-2xl" />
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
      <FAQ />
    </div>
  );
}

function Learn() {
  const topics = [
    {
      id: 1,
      title: "Design Thinking & User-Centered Design",
      points:
        "Empathy mapping, user personas, problem framing, ideation techniques, and design thinking methodology.",
      icon: HiOutlineLightBulb,
      color: "from-orange-100 to-red-100",
      duration: "1 week",
    },
    {
      id: 2,
      title: "Figma Mastery",
      points:
        "Figma interface mastery, frames, auto layout, components, variants, interactive components, and design systems.",
      icon: TbBrandFigma,
      color: "from-amber-100 to-orange-100",
      duration: "2 weeks",
    },
    {
      id: 3,
      title: "Visual Design & Branding",
      points:
        "Color theory, typography, spacing, grids, visual hierarchy, branding systems, and design consistency.",
      icon: MdOutlinePalette,
      color: "from-orange-100 to-amber-100",
      duration: "1.5 weeks",
    },
    {
      id: 4,
      title: "Wireframing & Prototyping",
      points:
        "Low to high-fidelity wireframes, interactive prototypes, micro-interactions, animations, and user flows.",
      icon: FiLayers,
      color: "from-red-100 to-orange-100",
      duration: "1.5 weeks",
    },
    {
      id: 5,
      title: "User Research & Usability Testing",
      points:
        "User interviews, surveys, usability testing, A/B testing, heatmaps, and data-driven design decisions.",
      icon: FiUsers,
      color: "from-amber-100 to-yellow-100",
      duration: "1 week",
    },
    {
      id: 6,
      title: "Mobile & Web Interface Design",
      points:
        "iOS Human Interface Guidelines, Material Design, responsive design, adaptive layouts, and platform-specific patterns.",
      icon: GiSmartphone,
      color: "from-orange-100 to-red-100",
      duration: "1 week",
    },
    {
      id: 7,
      title: "Design Systems & Component Libraries",
      points:
        "Creating scalable design systems, component documentation, design tokens, and developer handoff.",
      icon: FiGrid,
      color: "from-orange-100 to-amber-100",
      duration: "1 week",
    },
    {
      id: 8,
      title: "Portfolio & Career Development",
      points:
        "Case study creation, portfolio website, design presentations, client communication, and job interview preparation.",
      icon: FiAward,
      color: "from-red-100 to-orange-100",
      duration: "1 week",
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
            9-week intensive program covering everything from design thinking to
            professional portfolio development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{topic.points}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Module {index + 1}
                  </span>
                  {index === 0 && (
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                      Foundation
                    </span>
                  )}
                  {index === 7 && (
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
    "User-Centered Design",
    "Figma Mastery",
    "Wireframing",
    "Interactive Prototyping",
    "Visual Design",
    "Design Systems",
    "User Research",
    "Usability Testing",
    "Information Architecture",
    "Responsive Design",
    "Mobile UI Design",
    "Web UI Design",
    "Typography",
    "Color Theory",
    "Design Thinking",
    "Portfolio Development",
  ];

  const projectSkills = [
    {
      name: "Project 1-2: Design Thinking Challenge",
      description:
        "Empathy mapping, problem definition, ideation, and solution framing",
      duration: "2 weeks",
      tools: ["Miro", "Figma", "Notion"],
    },
    {
      name: "Project 3-4: Mobile App Redesign",
      description:
        "Competitive analysis, wireframing, UI redesign, and interactive prototype",
      duration: "2 weeks",
      tools: ["Figma", "Framer", "Proto.io"],
    },
    {
      name: "Project 5-6: Design System Creation",
      description:
        "Component library, design tokens, documentation, and handoff preparation",
      duration: "2 weeks",
      tools: ["Figma", "Zeroheight", "Storybook"],
    },
    {
      name: "Project 7-8: E-commerce Website Design",
      description:
        "Responsive web design, product pages, checkout flow, and conversion optimization",
      duration: "2 weeks",
      tools: ["Figma", "Adobe XD", "Sketch"],
    },
    {
      name: "Project 9-10: Dashboard & Data Visualization",
      description:
        "Complex data presentation, charts, filters, and admin interfaces",
      duration: "1 week",
      tools: ["Figma", "Tableau", "Chart.js"],
    },
    {
      name: "Project 11-15: Capstone Portfolio Project",
      description:
        "End-to-end product design with full case study and presentation",
      duration: "3 weeks",
      tools: ["Figma", "Webflow", "Framer", "Notion"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Portfolio Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master professional design skills through hands-on projects and
            build a job-ready portfolio
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MdOutlineDraw className="text-orange-600" /> Core Product Design
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <HiBadgeCheck className="text-lg text-orange-600" />
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

        {/* Tools Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TbBrandFigma className="text-orange-600" /> Industry Tools You'll
            Master
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "Figma",
                icon: TbBrandFigma,
                color: "text-orange-600",
                bg: "bg-orange-100",
              },
              {
                name: "Adobe XD",
                icon: SiAdobexd,
                color: "text-red-600",
                bg: "bg-red-100",
              },
              {
                name: "Framer",
                icon: SiFramer,
                color: "text-amber-600",
                bg: "bg-amber-100",
              },
              {
                name: "Sketch",
                icon: TbBrandSketch,
                color: "text-orange-600",
                bg: "bg-orange-100",
              },
              {
                name: "Proto.io",
                icon: SiProtodotio,
                color: "text-red-600",
                bg: "bg-red-100",
              },
              {
                name: "InVision",
                icon: SiInvision,
                color: "text-amber-600",
                bg: "bg-amber-100",
              },
              {
                name: "Miro",
                icon: FiGrid,
                color: "text-orange-600",
                bg: "bg-orange-100",
              },
              {
                name: "Webflow",
                icon: FiGlobe,
                color: "text-red-600",
                bg: "bg-red-100",
              },
            ].map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`p-2 rounded-lg ${tool.bg}`}>
                    <IconComponent className={`${tool.color} text-lg`} />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Portfolio Projects */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Portfolio Projects
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-medium rounded-full flex items-center gap-1">
              <MdScience /> 15+ Hands-on Projects
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectSkills.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group hover:border-orange-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                      <span className="font-bold text-orange-800">
                        P{index < 9 ? "0" + (index + 1) : index + 1}
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
                      {project.tools.map((tool, toolIndex) => (
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
                        <FiClock size={12} /> {project.duration}
                      </span>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        Portfolio Project
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
