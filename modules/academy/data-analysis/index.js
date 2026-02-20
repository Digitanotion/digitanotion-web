"use client";

import { useState } from "react";
import FAQ from "./faq";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  RiCheckboxCircleLine,
  RiCalendarLine,
  RiDatabaseLine,
  RiBarChartLine,
  RiPieChartLine,
  RiTableLine,
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
  HiOutlineChartBar,
  HiOutlineChartPie,
} from "react-icons/hi";
import {
  FiClock,
  FiTarget,
  FiGlobe,
  FiBook,
  FiAward,
  FiBarChart2,
  FiPieChart,
  FiDatabase,
  FiGrid,
  FiSliders,
  FiTrendingUp,
  FiDownload,
} from "react-icons/fi";
import {
  MdOutlineOnlinePrediction,
  MdScience,
  MdLaptop,
  MdVerifiedUser,
  MdOutlineAnalytics,
  MdOutlineDataUsage,
  MdOutlineDashboard,
  MdOutlineQueryStats,
} from "react-icons/md";
import {
  TbCertificate,
  TbFileSpreadsheet,
  TbSql,
  TbChartBar,
  TbChartPie,
  TbChartInfographic,
} from "react-icons/tb";
import { GiTargeted, GiMagnifyingGlass, GiChart } from "react-icons/gi";
import {
  // Use alternative icons since these might not exist
  SiMicrosoftexcel,
  SiMysql,
  SiPostgresql,
  SiTableau,
  SiGoogleanalytics,
} from "react-icons/si";
import { VscGraph } from "react-icons/vsc";

export default function DataAnalysis() {
  const courseData = {
    title: "Data Analysis",
    subtitle: "Power BI, Excel & SQL Specialization",
    description:
      "Transform raw data into actionable insights. Master Power BI, Excel, and SQL to become a professional data analyst. Learn to visualize, analyze, and present data that drives business decisions.",
    level: "Intermediate",
    duration: "14 weeks",
    format: "Onsite/Online",
    price: "₦140,000",
    originalPrice: "₦180,000",
    status: "Available",
    isNew: true,
    hasLabs: true,
    labCount: "25+",
    hasCertification: true,
    prerequisites: [
      "Computing Essentials or equivalent computer skills",
      "Basic numeracy and analytical thinking",
      "Familiarity with Microsoft Office",
      "Access to a laptop/computer (Windows recommended)",
    ],
    highlights: [
      "Power BI Dashboard Development",
      "Advanced Excel Analytics",
      "SQL Database Querying",
      "Data Visualization Best Practices",
      "Business Intelligence",
      "Statistical Analysis",
      "Data Cleaning & Transformation",
      "Real-world Case Studies",
    ],
    learningOutcomes: [
      "Create interactive Power BI dashboards and reports",
      "Master Excel for data analysis (PivotTables, Power Query, DAX)",
      "Write complex SQL queries to extract and manipulate data",
      "Clean and transform messy data into analysis-ready formats",
      "Build compelling data visualizations that tell stories",
      "Perform statistical analysis to uncover trends and patterns",
      "Present data insights to stakeholders effectively",
      "Develop a professional data analysis portfolio",
    ],
    schedule: "Tuesdays, Thursdays, Saturdays | 6PM - 9PM",
    startDates: ["Mar 4, 2026", "Apr 1, 2026", "May 6, 2026"],
    prerequisitesText: "Computing Essentials or equivalent computer skills",
    language: "English",
    labEnvironment:
      "Cloud-based lab environment with Power BI Desktop, SQL Server Express, and Excel with Power Query",
  };

  const handleWhatsAppRegistration = () => {
    const phoneNumber = "+2348073735836";
    const message = encodeURIComponent(
      `Hello Digitanotion Academy! I am interested in your Data Analysis Course (₦140,000) starting March 2026. How do I enroll?`,
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
              Data
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">
              Data Analysis Specialization
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
                    NEW
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
                    <MdScience /> {courseData.labCount} Hands-on Labs
                  </span>
                )}
              </div>

              {/* Course Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Data Analysis
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Power BI, Excel & SQL
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Become a professional data analyst. Master Power BI, Excel, and
                SQL to transform raw data into actionable business insights
                through powerful visualizations and reports.
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
                    22% OFF
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Includes Power BI license, SQL Server setup, datasets,
                  practice files, and career mentorship support
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
                          <FiBarChart2
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
                      <TbChartInfographic
                        className="text-orange-600"
                        size={20}
                      />{" "}
                      Primary Tools
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Master Power BI for dashboards, Excel for advanced
                      analytics, and SQL for data querying. The complete data
                      analyst toolkit.
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
              Comprehensive data analysis training with real-world datasets and
              industry tools
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
                    <TbChartInfographic className="text-orange-600 text-2xl" />
                  ) : index === 1 ? (
                    <TbFileSpreadsheet className="text-green-600 text-2xl" />
                  ) : index === 2 ? (
                    <TbSql className="text-blue-600 text-2xl" />
                  ) : index === 3 ? (
                    <FiPieChart className="text-purple-600 text-2xl" />
                  ) : index === 4 ? (
                    <FiTrendingUp className="text-amber-600 text-2xl" />
                  ) : index === 5 ? (
                    <FiBarChart2 className="text-red-600 text-2xl" />
                  ) : index === 6 ? (
                    <FiDatabase className="text-cyan-600 text-2xl" />
                  ) : (
                    <FiBarChart2 className="text-orange-600 text-2xl" />
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
      title: "Excel for Data Analysis",
      points:
        "Power Query, PivotTables, advanced formulas, DAX, data modeling, and what-if analysis.",
      icon: TbFileSpreadsheet,
      color: "from-green-100 to-emerald-100",
      duration: "3 weeks",
    },
    {
      id: 2,
      title: "SQL Database Querying",
      points:
        "SELECT statements, JOINs, aggregations, subqueries, window functions, and query optimization.",
      icon: TbSql,
      color: "from-blue-100 to-cyan-100",
      duration: "3 weeks",
    },
    {
      id: 3,
      title: "Power BI Fundamentals",
      points:
        "Data import, transformation, data modeling, DAX formulas, and basic visualizations.",
      icon: TbChartInfographic,
      color: "from-orange-100 to-amber-100",
      duration: "2 weeks",
    },
    {
      id: 4,
      title: "Advanced Power BI Dashboards",
      points:
        "Interactive dashboards, drill-through, bookmarks, parameters, and Row-Level Security.",
      icon: TbChartInfographic,
      color: "from-red-100 to-orange-100",
      duration: "2 weeks",
    },
    {
      id: 5,
      title: "Data Visualization Best Practices",
      points:
        "Chart selection, color theory, dashboard design, storytelling with data, and accessibility.",
      icon: FiPieChart,
      color: "from-purple-100 to-pink-100",
      duration: "1.5 weeks",
    },
    {
      id: 6,
      title: "Business Intelligence & Reporting",
      points:
        "KPI development, executive dashboards, scheduled refresh, and Power BI Service.",
      icon: MdOutlineDashboard,
      color: "from-amber-100 to-yellow-100",
      duration: "1.5 weeks",
    },
    {
      id: 7,
      title: "Statistical Analysis",
      points:
        "Descriptive statistics, correlation, regression, forecasting, and trend analysis.",
      icon: FiBarChart2,
      color: "from-indigo-100 to-blue-100",
      duration: "1 week",
    },
    {
      id: 8,
      title: "Capstone Project",
      points:
        "End-to-end data analysis project with real-world dataset, dashboard creation, and presentation.",
      icon: FiAward,
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
            14-week intensive program covering Excel, SQL, Power BI, and
            business intelligence
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
    "Power BI Desktop",
    "Power BI Service",
    "DAX Formulas",
    "Excel Power Query",
    "PivotTables",
    "Advanced Excel Formulas",
    "SQL Queries",
    "Database Design",
    "Data Cleaning",
    "Data Modeling",
    "Data Visualization",
    "Dashboard Design",
    "Statistical Analysis",
    "KPI Development",
    "Business Intelligence",
    "Storytelling with Data",
  ];

  const projectSkills = [
    {
      name: "Project 1-3: Sales Performance Dashboard",
      description:
        "Interactive Power BI dashboard analyzing sales trends, regional performance, and product categories",
      duration: "3 weeks",
      tools: ["Power BI", "Excel", "SQL"],
    },
    {
      name: "Project 4-6: Financial Analytics",
      description:
        "Excel-based financial model with forecasting, variance analysis, and what-if scenarios",
      duration: "3 weeks",
      tools: ["Excel", "Power Query", "DAX"],
    },
    {
      name: "Project 7-9: Customer Insights",
      description:
        "SQL customer segmentation analysis with Power BI visualization of RFM metrics",
      duration: "3 weeks",
      tools: ["SQL Server", "Power BI", "Excel"],
    },
    {
      name: "Project 10-11: HR Analytics",
      description:
        "Employee attrition analysis, workforce demographics, and retention insights dashboard",
      duration: "2 weeks",
      tools: ["Power BI", "Excel", "SQL"],
    },
    {
      name: "Project 12-14: Capstone - Executive Dashboard",
      description:
        "End-to-end business intelligence solution with data warehouse design and executive KPIs",
      duration: "3 weeks",
      tools: ["Power BI", "SQL Server", "Excel", "Power Query"],
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
            Master professional data analysis skills through hands-on projects
            with real datasets
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MdOutlineAnalytics className="text-orange-600" /> Core Data
            Analysis Skills
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
            <TbChartInfographic className="text-orange-600" /> Industry Tools
            You'll Master
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "Power BI",
                icon: TbChartInfographic,
                color: "text-orange-600",
                bg: "bg-orange-100",
              },
              {
                name: "Excel",
                icon: TbFileSpreadsheet,
                color: "text-green-600",
                bg: "bg-green-100",
              },
              {
                name: "SQL Server",
                icon: TbSql,
                color: "text-blue-600",
                bg: "bg-blue-100",
              },
              {
                name: "Power Query",
                icon: FiDatabase,
                color: "text-purple-600",
                bg: "bg-purple-100",
              },
              {
                name: "DAX",
                icon: FiBarChart2,
                color: "text-red-600",
                bg: "bg-red-100",
              },
              {
                name: "Tableau",
                icon: FiPieChart,
                color: "text-amber-600",
                bg: "bg-amber-100",
              },
              {
                name: "PostgreSQL",
                icon: FiDatabase,
                color: "text-cyan-600",
                bg: "bg-cyan-100",
              },
              {
                name: "Google Analytics",
                icon: FiTrendingUp,
                color: "text-yellow-600",
                bg: "bg-yellow-100",
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
              <MdScience /> 5 Real-World Projects
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
