"use client";

import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt,
  HiOutlineUsers,
  HiOutlineCalendar,
} from "react-icons/hi";
import { FiArrowRight, FiClock, FiStar, FiShield } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";
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
  const [iframeHeight, setIframeHeight] = useState(600);

  useEffect(() => {
    // Adjust iframe height based on viewport
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIframeHeight(800); // Taller on mobile
      } else {
        setIframeHeight(700); // Fixed height on desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-100/30 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-sm">
            <a
              href="/academy"
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              Academy
            </a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">Register Interest</span>
          </nav>

          {/* New responsive layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* LEFT - Independent column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:flex-1"
            >
              {/* pill badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 text-orange-700 rounded-full text-sm font-semibold mb-6"
              >
                <HiOutlineLightningBolt />
                Limited Seats — Cohort Filling Fast
              </motion.div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
                Secure Your{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Spot Today
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Express your interest in any of our professional tech
                programmes. Our admissions team will reach out within 24 hours
                with next steps.
              </p>

              {/* trust signals */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {trustSignals.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                    >
                      <div className={`p-2 rounded-lg ${item.bg}`}>
                        <Icon className={`${item.color}`} size={16} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* perks list */}
              <ul className="space-y-2">
                {perks.map((perk, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <HiOutlineCheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={18}
                    />
                    {perk}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT - Independent column with scrollable form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:w-[480px] xl:w-[520px] flex-shrink-0"
            >
              {/* glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-20 blur-lg" />

              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-orange-100/40 overflow-hidden">
                {/* top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-red-500" />

                <div className="px-6 pt-6 pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2.5 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
                      <HiOutlineAcademicCap
                        className="text-orange-600"
                        size={22}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Register Your Interest
                      </h2>
                      <p className="text-sm text-gray-500">
                        Takes less than 2 minutes
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── SCROLLABLE GOOGLE FORM ── */}
                <div className="px-2 pb-4">
                  <div
                    className="overflow-y-auto rounded-lg border border-gray-100"
                    style={{
                      maxHeight: "600px",
                      height: iframeHeight,
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
                      className="min-h-[500px]"
                    >
                      Loading…
                    </iframe>
                  </div>

                  {/* Form footer hint */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-400">
                      Scroll within form • Secure • 2 min to complete
                    </p>
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
