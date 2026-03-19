"use client";

import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiOutlineUsers,
} from "react-icons/hi";
import {
  FiClock,
  FiStar,
  FiShield,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { useEffect, useState } from "react";

const trustSignals = [
  {
    icon: FiStar,
    label: "4.9/5 Student Rating",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HiOutlineUsers,
    label: "500+ Graduates",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: TbCertificate,
    label: "Industry Certification",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: FiShield,
    label: "Job-Ready Curriculum",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const perks = [
  "Flexible onsite & online learning",
  "25+ hands-on lab projects",
  "Real-world datasets & case studies",
  "Career mentorship & portfolio support",
  "Industry-recognized certificate",
  "Lifetime access to course materials",
];

const courses = [
  {
    name: "Data Analysis",
    subtitle: "Power BI, Excel & SQL",
    price: "₦140,000",
    duration: "14 weeks",
    start: "Mar 4, 2026",
    color: "from-orange-500 to-red-500",
    badge: "Most Popular",
  },
  {
    name: "Web Development",
    subtitle: "Full Stack Specialization",
    price: "₦160,000",
    duration: "16 weeks",
    start: "Mar 4, 2026",
    color: "from-blue-500 to-indigo-500",
    badge: null,
  },
  {
    name: "Cybersecurity",
    subtitle: "CompTIA Security+",
    price: "₦150,000",
    duration: "12 weeks",
    start: "Mar 11, 2026",
    color: "from-green-500 to-emerald-500",
    badge: null,
  },
  {
    name: "Cloud Computing",
    subtitle: "AWS & Azure",
    price: "₦155,000",
    duration: "14 weeks",
    start: "Apr 1, 2026",
    color: "from-purple-500 to-pink-500",
    badge: null,
  },
];

export default function RegisterInterest() {
  const [iframeHeight, setIframeHeight] = useState(700);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIframeHeight(750); // Mobile
      } else if (window.innerWidth < 1024) {
        setIframeHeight(700); // Tablet
      } else {
        setIframeHeight(650); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16">
        {/* Decorative blobs - improved positioning */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-red-100/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full bg-blue-50/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-sm"
            aria-label="Breadcrumb"
          >
            <a
              href="/academy"
              className="text-orange-600 hover:text-orange-800 font-medium transition-colors"
            >
              Academy
            </a>
            <span className="text-gray-300" aria-hidden="true">
              /
            </span>
            <span className="text-gray-500">Register Interest</span>
          </nav>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-6 sm:space-y-8"
            >
              {/* Headline */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Start Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Tech Journey
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
                  Join Nigeria's fastest-growing tech academy. Get hands-on
                  training, industry certification, and land your dream tech
                  job.
                </p>
              </div>

              {/* Trust Signals - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {trustSignals.map((signal, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center group"
                  >
                    <div
                      className={`${signal.bg} w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}
                    >
                      <signal.icon
                        className={`${signal.color} text-lg sm:text-xl`}
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700">
                      {signal.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Course Preview Cards */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Popular Programs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courses.slice(0, 4).map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="relative bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      {course.badge && (
                        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full whitespace-nowrap">
                          {course.badge}
                        </span>
                      )}
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${course.color} mb-2`}
                      />
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900">
                        {course.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {course.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <FiClock className="text-gray-400" />
                        <span>{course.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Perks List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 p-4 sm:p-6 rounded-2xl"
              >
                <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4">
                  What You'll Get:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="text-green-500 flex-shrink-0 text-sm sm:text-base" />
                      <span className="text-xs sm:text-sm text-gray-700">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Google Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:w-[450px] xl:w-[520px] flex-shrink-0 mx-auto w-full max-w-lg lg:max-w-none"
            >
              {/* Form Card */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity" />

                <div className="relative bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-orange-100/40 overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-500" />

                  {/* Header */}
                  <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-2 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 sm:p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
                        <HiOutlineAcademicCap className="text-orange-600 text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                          Register Your Interest
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Takes less than 2 minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Google Form Container */}
                  <div className="p-3 sm:p-4">
                    {/* Location Info Bar */}
                    <div className="flex items-center gap-4 mb-3 text-xs sm:text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                      <div className="flex items-center gap-1">
                        <FiMapPin className="text-orange-500" />
                        <span>Lagos, Abuja</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiCalendar className="text-orange-500" />
                        <span>Next: Mar 4</span>
                      </div>
                    </div>

                    {/* Scrollable Form Area */}
                    <div
                      className="overflow-y-auto rounded-lg border border-gray-100 bg-white"
                      style={{
                        height: iframeHeight,
                        maxHeight: "80vh",
                      }}
                    >
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScNlJ6BI_jJKzMJCx5o7cT2EBfZZXWykT0A-G8NjBboskCKjQ/viewform?embedded=true"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Register Interest Form"
                        className="min-h-[500px] sm:min-h-[600px]"
                      >
                        Loading form...
                      </iframe>
                    </div>

                    {/* Footer */}
                    <div className="mt-3 sm:mt-4 space-y-2">
                      <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                          Secure form
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                          No spam
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                          2 min to complete
                        </span>
                      </div>
                      <p className="text-xs text-center text-gray-400">
                        By submitting, you agree to our{" "}
                        <a
                          href="/privacy"
                          className="text-orange-600 hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
