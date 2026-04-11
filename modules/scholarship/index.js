"use client";

import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FiShield, FiTrendingUp, FiLock, FiCalendar } from "react-icons/fi";
import { MdOutlineDataUsage } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ScholarshipPage() {
  const [iframeHeight, setIframeHeight] = useState(750);
  const [mounted, setMounted] = useState(false);
  const [selectedTrack, setSelectedTrack] =
    (useState < "cybersecurity") | ("data" > "cybersecurity");

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIframeHeight(800); // Mobile
      } else if (window.innerWidth < 1024) {
        setIframeHeight(750); // Tablet
      } else {
        setIframeHeight(720); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  // Scholarship-specific Google Form URL (replace with actual form)
  const scholarshipFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScNlJ6BI_jJKzMJCx5o7cT2EBfZZXWykT0A-G8NjBboskCKjQ/viewform?embedded=true";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute -bottom-40 right-20 w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:pt-16 lg:pb-12">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-1.5 shadow-sm border border-orange-100 mb-4 sm:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Limited Scholarship • 10 Seats Per Track
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Scholarship Opportunity
                </span>
                <br />
                For Aspiring Tech Talents
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
                Begin your IT journey in Anambra with{" "}
                <span className="font-semibold text-orange-600">
                  Digitanotion Academy
                </span>{" "}
                in partnership with{" "}
                <span className="font-semibold">CySap Africa</span> &{" "}
                <span className="font-semibold">Team Sync</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.a
                  href="#apply"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Apply Now - No Fees Required
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="#tracks"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Explore Tracks
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats / Key Info Cards */}
        <section className="px-4 sm:px-6 py-6 sm:py-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  icon: HiOutlineUserGroup,
                  label: "Seats Available",
                  value: "10 Per Track",
                  color: "orange",
                },
                {
                  icon: HiOutlineCalendar,
                  label: "Application Deadline",
                  value: "April 13, 2026",
                  color: "red",
                },
                {
                  icon: HiOutlineLocationMarker,
                  label: "Location",
                  value: "Onsite (Awka) + Online",
                  color: "amber",
                },
                {
                  icon: FiLock,
                  label: "Requirements",
                  value: "Passion + Laptop",
                  color: "orange",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-${stat.color}-100 flex items-center justify-center mb-3`}
                  >
                    <stat.icon className={`text-${stat.color}-600 text-xl`} />
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tracks Selection */}
        <section id="tracks" className="px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Choose Your Path
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Select between two high-demand tracks. Learn from industry
                experts with hands-on practical sessions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              {/* Cybersecurity Track */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  selectedTrack === "cybersecurity"
                    ? "ring-2 ring-orange-500 shadow-xl scale-[1.02]"
                    : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedTrack("cybersecurity")}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-100">
                  {selectedTrack === "cybersecurity" && (
                    <div className="absolute top-4 right-4">
                      <div className="w-5 h-5 rounded-full bg-orange-500 ring-2 ring-white" />
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                    <FiShield className="text-orange-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Cybersecurity
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Master the art of protecting digital assets. Learn threat
                    detection, ethical hacking, and security best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Threat Analysis",
                      "Network Security",
                      "Risk Management",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Data Analysis Track */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  selectedTrack === "data"
                    ? "ring-2 ring-orange-500 shadow-xl scale-[1.02]"
                    : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedTrack("data")}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-100">
                  {selectedTrack === "data" && (
                    <div className="absolute top-4 right-4">
                      <div className="w-5 h-5 rounded-full bg-orange-500 ring-2 ring-white" />
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                    <MdOutlineDataUsage className="text-orange-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Data Analysis
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Transform raw data into actionable insights. Learn
                    visualization, statistical analysis, and reporting tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "Python", "Data Visualization"].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Secure Your Seat
              </h2>
              <p className="text-gray-500">
                Fill out the form below to apply for the scholarship.{" "}
                <span className="font-semibold text-orange-600">
                  10 seats per track only.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-20 blur-xl" />

              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500" />

                {/* Info Bar */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <FiTrendingUp className="text-orange-500" />
                    <span>No fees required</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <HiOutlineUserGroup className="text-orange-500" />
                    <span>10 seats per track</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <FiCalendar className="text-orange-500" />
                    <span>Deadline: Apr 13</span>
                  </div>
                </div>

                {/* Google Form Container */}
                <div className="p-3 sm:p-4">
                  <div
                    className="overflow-y-auto rounded-xl border border-gray-100"
                    style={{
                      height: iframeHeight,
                      maxHeight: "calc(100vh - 250px)",
                    }}
                  >
                    <iframe
                      src={scholarshipFormUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Scholarship Application Form"
                      className="min-h-[650px]"
                    >
                      Loading application form...
                    </iframe>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-400">
                      By submitting, you agree to our terms and conditions.
                      Selected candidates will be contacted via email/phone.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      *Terms and Conditions apply
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners & Footer */}
        <section className="px-4 sm:px-6 py-8 sm:py-12 border-t border-gray-100 mt-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm text-gray-400 mb-4">Powered by</p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <span className="text-gray-600 font-semibold">
                Digitanotion Academy
              </span>
              <span className="text-gray-400">+</span>
              <span className="text-gray-600 font-semibold">CySap Africa</span>
              <span className="text-gray-400">+</span>
              <span className="text-gray-600 font-semibold">Team Sync</span>
            </div>
            <div className="mt-6 text-center">
              <a
                href="/academy"
                className="text-xs sm:text-sm text-gray-400 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Academy
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
