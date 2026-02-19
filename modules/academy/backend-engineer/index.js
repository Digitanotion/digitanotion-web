"use client";

import { useState } from "react";
import FAQ from "./faq";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  RiCheckboxCircleLine,
  RiCalendarLine,
  RiDatabaseLine,
  RiCloudLine,
  RiServerLine,
  RiCodeSSlashLine,
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
  HiOutlineCog,
  HiOutlineCode,
} from "react-icons/hi";
import {
  FiClock,
  FiTarget,
  FiGlobe,
  FiBook,
  FiAward,
  FiServer,
  FiCpu,
  FiDatabase,
  FiCloud,
  FiLayers,
  FiGrid,
  FiSliders,
  FiShield,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdScience,
  MdLaptop,
  MdVerifiedUser,
  MdOutlineStorage,
  MdOutlineApi,
  MdOutlineSecurity,
  MdOutlineSpeed,
} from "react-icons/md";
import {
  TbCertificate,
  TbBrandPhp,
  TbBrandLaravel,
  TbBrandMysql,
  TbBrandPostgres,
  TbApi,
  TbCloudComputing,
} from "react-icons/tb";
import {
  GiTargeted,
  GiNetworkCables,
  GiProcessor,
  GiDatabase,
} from "react-icons/gi";
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiFirebase,
} from "react-icons/si";

export default function BackendEngineer() {
  const courseData = {
    title: "Backend Engineer",
    subtitle: "Laravel/PHP Specialization",
    description:
      "Master server-side development, database architecture, and cloud deployment. Build robust, scalable APIs and web services using industry-standard tools and practices.",
    level: "Intermediate",
    duration: "14 weeks",
    format: "Onsite",
    price: "₦270,000",
    originalPrice: "₦350,000",
    status: "Available",
    isNew: false,
    hasLabs: true,
    labCount: "20+",
    hasCertification: true,
    prerequisites: [
      "Computing Essentials or equivalent computer skills",
      "Web Development Fundamentals",
      "Basic understanding of programming concepts",
      "Familiarity with HTML/CSS",
    ],
    highlights: [
      "PHP & Laravel Framework Mastery",
      "RESTful API Development",
      "Database Design & Management",
      "Authentication & Authorization",
      "Cloud Deployment (AWS)",
      "Server Management",
      "Security Best Practices",
      "Performance Optimization",
    ],
    learningOutcomes: [
      "Build professional-grade RESTful APIs with Laravel",
      "Design and optimize relational databases",
      "Implement secure authentication and authorization systems",
      "Deploy applications to cloud platforms (AWS)",
      "Master Eloquent ORM and database relationships",
      "Write clean, maintainable, and testable code",
      "Integrate third-party services and APIs",
      "Optimize application performance and scalability",
    ],
    schedule: "Mondays, Wednesdays, Fridays | 6PM - 9PM",
    startDates: ["Mar 4, 2026", "Apr 1, 2026", "May 6, 2026"],
    prerequisitesText: "Web Development Fundamentals or equivalent experience",
    language: "English",
    labEnvironment:
      "Cloud-based development environment with Laravel, MySQL, PostgreSQL, Docker, and AWS integration",
  };

  const handleWhatsAppRegistration = () => {
    const phoneNumber = "+2348073735836";
    const message = encodeURIComponent(
      `Hello Digitanotion Academy! I am interested in your Backend Engineer Laravel/PHP Specialization Course (₦270,000) starting March 2026. How do I enroll?`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Light Gradient Background - Orange/Red brand colors */}
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
              Development
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Backend Engineer Specialization
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
                    <MdScience /> {courseData.labCount} Hands-on Labs
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Backend Engineer
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Laravel/PHP Specialization
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Become a professional backend engineer. Master Laravel, database
                architecture, and cloud deployment to build scalable, secure
                applications that power modern businesses.
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
                      {courseData.labCount} Hands-on Labs
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
                    23% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes cloud development environment, database tools,
                  deployment credits, and career mentorship support
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
                          <FiCpu
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
                      <TbBrandLaravel className="text-orange-600" size={20} />{" "}
                      Primary Stack
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Master Laravel PHP framework with MySQL/PostgreSQL,
                      RESTful APIs, and AWS cloud deployment. Build
                      enterprise-grade backend systems.
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
              Comprehensive backend engineering training with real-world
              projects and cloud deployment
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
                    <SiLaravel className="text-orange-600 text-2xl" />
                  ) : index === 1 ? (
                    <TbApi className="text-red-600 text-2xl" />
                  ) : index === 2 ? (
                    <FiDatabase className="text-amber-600 text-2xl" />
                  ) : index === 3 ? (
                    <FiShield className="text-green-600 text-2xl" />
                  ) : index === 4 ? (
                    <FiCloud className="text-blue-600 text-2xl" />
                  ) : index === 5 ? (
                    <FiServer className="text-purple-600 text-2xl" />
                  ) : index === 6 ? (
                    <MdOutlineSecurity className="text-red-600 text-2xl" />
                  ) : (
                    <MdOutlineSpeed className="text-orange-600 text-2xl" />
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
      title: "PHP Fundamentals & OOP",
      points:
        "Modern PHP syntax, object-oriented programming, namespaces, traits, error handling, and Composer dependency management.",
      icon: SiPhp,
      color: "from-orange-100 to-red-100",
      duration: "2 weeks",
    },
    {
      id: 2,
      title: "Laravel Framework Mastery",
      points:
        "MVC architecture, routing, controllers, Blade templating, Eloquent ORM, migrations, and Artisan CLI.",
      icon: SiLaravel,
      color: "from-red-100 to-orange-100",
      duration: "3 weeks",
    },
    {
      id: 3,
      title: "Database Design & SQL",
      points:
        "Relational database design, complex queries, indexing, relationships, MySQL, PostgreSQL, and query optimization.",
      icon: SiMysql,
      color: "from-amber-100 to-orange-100",
      duration: "2 weeks",
    },
    {
      id: 4,
      title: "RESTful API Development",
      points:
        "API design principles, resource routing, request validation, API resources, rate limiting, and API documentation.",
      icon: TbApi,
      color: "from-orange-100 to-amber-100",
      duration: "2 weeks",
    },
    {
      id: 5,
      title: "Authentication & Authorization",
      points:
        "Laravel Sanctum/JWT, API tokens, OAuth, role-based permissions, middleware, and security best practices.",
      icon: FiShield,
      color: "from-red-100 to-orange-100",
      duration: "1.5 weeks",
    },
    {
      id: 6,
      title: "Testing & Debugging",
      points:
        "PHPUnit, feature tests, unit tests, TDD approach, Laravel Dusk, debugging tools, and error logging.",
      icon: HiOutlineBeaker,
      color: "from-green-100 to-emerald-100",
      duration: "1.5 weeks",
    },
    {
      id: 7,
      title: "Cloud Deployment (AWS)",
      points:
        "AWS EC2, RDS, S3, Elastic Beanstalk, environment configuration, CI/CD pipelines, and server management.",
      icon: SiAmazonaws,
      color: "from-amber-100 to-yellow-100",
      duration: "1 week",
    },
    {
      id: 8,
      title: "Performance & Scalability",
      points:
        "Caching strategies (Redis), queue workers, task scheduling, database optimization, and load balancing.",
      icon: MdOutlineSpeed,
      color: "from-orange-100 to-red-100",
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
            14-week intensive program covering everything from PHP fundamentals
            to cloud deployment
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
    "PHP 8.x",
    "Laravel Framework",
    "Eloquent ORM",
    "RESTful APIs",
    "MySQL/PostgreSQL",
    "Database Design",
    "Authentication",
    "Authorization",
    "AWS Cloud",
    "Docker",
    "Git Version Control",
    "Composer",
    "API Documentation",
    "Unit Testing",
    "Redis Caching",
    "Queue Workers",
  ];

  const projectSkills = [
    {
      name: "Project 1-3: E-commerce API",
      description:
        "Build a complete RESTful API for an e-commerce platform with products, carts, orders, and payments",
      duration: "3 weeks",
      tools: ["Laravel", "MySQL", "Postman", "JWT"],
    },
    {
      name: "Project 4-6: Social Media Backend",
      description:
        "Create backend system for social app with posts, comments, likes, followers, and real-time notifications",
      duration: "3 weeks",
      tools: ["Laravel", "Redis", "WebSockets", "MySQL"],
    },
    {
      name: "Project 7-9: Hotel Booking System",
      description:
        "Develop booking engine with availability checks, reservations, payments, and admin dashboard",
      duration: "3 weeks",
      tools: ["Laravel", "PostgreSQL", "Stripe", "AWS"],
    },
    {
      name: "Project 10-12: Task Management API",
      description:
        "Build project management backend with teams, tasks, assignments, comments, and file uploads",
      duration: "3 weeks",
      tools: ["Laravel", "MongoDB", "S3", "Sanctum"],
    },
    {
      name: "Project 13-14: Capstone - SaaS Platform",
      description:
        "Complete multi-tenant SaaS backend with subscription billing, API rate limiting, and cloud deployment",
      duration: "2 weeks",
      tools: ["Laravel", "AWS", "Redis", "Cashier"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Real-World Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master professional backend engineering skills through hands-on
            project-based learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FiCpu className="text-orange-600" /> Core Backend Engineering
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
            <TbBrandLaravel className="text-orange-600" /> Industry Tools You'll
            Master
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "PHP",
                icon: SiPhp,
                color: "text-indigo-600",
                bg: "bg-indigo-100",
              },
              {
                name: "Laravel",
                icon: SiLaravel,
                color: "text-red-600",
                bg: "bg-red-100",
              },
              {
                name: "MySQL",
                icon: SiMysql,
                color: "text-blue-600",
                bg: "bg-blue-100",
              },
              {
                name: "PostgreSQL",
                icon: SiPostgresql,
                color: "text-cyan-600",
                bg: "bg-cyan-100",
              },
              {
                name: "AWS",
                icon: SiAmazonaws,
                color: "text-amber-600",
                bg: "bg-amber-100",
              },
              {
                name: "Docker",
                icon: SiDocker,
                color: "text-sky-600",
                bg: "bg-sky-100",
              },
              {
                name: "Redis",
                icon: FiDatabase,
                color: "text-red-600",
                bg: "bg-red-100",
              },
              {
                name: "Composer",
                icon: FiLayers,
                color: "text-orange-600",
                bg: "bg-orange-100",
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
              Real-World Projects
            </h3>
            <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-medium rounded-full flex items-center gap-1">
              <MdScience /> 5 Production-Ready Projects
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
                        Production Ready
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
