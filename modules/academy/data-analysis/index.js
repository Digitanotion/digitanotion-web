"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineX,
} from "react-icons/hi";
import { FiArrowRight, FiClock, FiStar, FiShield, FiExternalLink } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";

// ─── DATA ────────────────────────────────────────────────────────────────────

const trustSignals = [
  { icon: FiStar,         label: "4.9/5 Student Rating",  color: "text-amber-500",  bg: "bg-amber-50"  },
  { icon: HiOutlineUsers, label: "500+ Graduates",         color: "text-blue-500",   bg: "bg-blue-50"   },
  { icon: TbCertificate,  label: "Industry Certification", color: "text-green-500",  bg: "bg-green-50"  },
  { icon: FiShield,       label: "Job-Ready Curriculum",   color: "text-purple-500", bg: "bg-purple-50" },
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
    gradient: "from-orange-500 to-red-500",
    lightBg: "from-orange-50 to-red-50",
    badge: "Most Popular",
  },
  {
    name: "Web Development",
    subtitle: "Full Stack Specialization",
    price: "₦160,000",
    duration: "16 weeks",
    start: "Mar 4, 2026",
    gradient: "from-blue-500 to-indigo-500",
    lightBg: "from-blue-50 to-indigo-50",
    badge: null,
  },
  {
    name: "Cybersecurity",
    subtitle: "CompTIA Security+",
    price: "₦150,000",
    duration: "12 weeks",
    start: "Mar 11, 2026",
    gradient: "from-green-500 to-emerald-500",
    lightBg: "from-green-50 to-emerald-50",
    badge: null,
  },
  {
    name: "Cloud Computing",
    subtitle: "AWS & Azure",
    price: "₦155,000",
    duration: "14 weeks",
    start: "Apr 1, 2026",
    gradient: "from-purple-500 to-pink-500",
    lightBg: "from-purple-50 to-pink-50",
    badge: null,
  },
];

// ─── SLIDE-IN DRAWER MODAL ───────────────────────────────────────────────────

function FormDrawer({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer — slides from right */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 38 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex flex-col w-full max-w-lg bg-white shadow-2xl"
          >
            {/* Accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
                  <HiOutlineAcademicCap className="text-orange-600" size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900 leading-tight">
                    Register Your Interest
                  </h2>
                  <p className="text-xs text-gray-400">Takes less than 2 minutes</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <HiOutlineX size={20} />
              </button>
            </div>

            {/* Scrollable iframe area */}
            <div className="flex-1 overflow-y-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScNlJ6BI_jJKzMJCx5o7cT2EBfZZXWykT0A-G8NjBboskCKjQ/viewform?embedded=true"
                width="100%"
                height="2100"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Register Interest Form"
                className="w-full block"
              >
                Loading…
              </iframe>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100 bg-gray-50 flex-shrink-0">
              <p className="text-xs text-gray-400">Your info is safe &amp; never shared.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScNlJ6BI_jJKzMJCx5o7cT2EBfZZXWykT0A-G8NjBboskCKjQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-orange-600 hover:text-orange-800 font-medium"
              >
                Open in new tab <FiExternalLink size={11} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function RegisterInterest() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openForm = () => setDrawerOpen(true);
  const closeForm = () => setDrawerOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      <FormDrawer open={drawerOpen} onClose={closeForm} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-24">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-100/30 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-sm">
            <a href="/academy" className="text-orange-600 hover:text-orange-800 font-medium">
              Academy
            </a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">Register Interest</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 text-orange-700 rounded-full text-sm font-semibold mb-6"
              >
                <HiOutlineLightningBolt />
                Limited Seats — Cohort Filling Fast
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-5">
                Launch Your{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Tech Career
                </span>
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                Express your interest in any of our professional programmes. Our
                admissions team will reach out within 24 hours with your enrolment
                details.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={openForm}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Register My Interest
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="/academy"
                  className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
                >
                  Browse All Courses
                </a>
              </div>

              {/* Perks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {perks.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-2.5 text-gray-600 text-sm"
                  >
                    <HiOutlineCheckCircle className="text-green-500 flex-shrink-0" size={17} />
                    {perk}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-orange-100/30 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <HiOutlineAcademicCap className="text-white" size={26} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">Digitanotion Academy</div>
                    <div className="text-sm text-gray-400">Professional Tech Training</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {trustSignals.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className={`p-2 rounded-xl w-fit mb-2 ${item.bg}`}>
                          <Icon className={item.color} size={18} />
                        </div>
                        <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={openForm}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold hover:shadow-lg hover:shadow-orange-200 transition-all flex items-center justify-center gap-2 group"
                >
                  Open Registration Form
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>

              {/* floating badge — next cohort */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-white border border-gray-100 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
              >
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="text-xs text-gray-400">Next cohort</div>
                  <div className="text-sm font-bold text-gray-800">Mar 4, 2026</div>
                </div>
              </motion.div>

              {/* floating rating */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white border border-gray-100 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
              >
                <div className="text-amber-400 text-sm">★★★★★</div>
                <div className="text-sm font-bold text-gray-800">4.9 / 5.0</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COURSES ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programmes</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Pick a course, register your interest, and we'll handle the rest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={openForm}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`h-1.5 bg-gradient-to-r ${course.gradient}`} />
                <div className={`px-5 pt-5 pb-2 bg-gradient-to-b ${course.lightBg}`}>
                  <div className="flex items-start justify-between mb-0.5">
                    <h3 className="text-base font-bold text-gray-900">{course.name}</h3>
                    {course.badge && (
                      <span className="text-xs font-bold px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full ml-2 flex-shrink-0">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{course.subtitle}</p>
                </div>

                <div className="px-5 py-4">
                  <div className="flex flex-col gap-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FiClock size={12} /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <HiOutlineCalendar size={12} /> Starts {course.start}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-extrabold text-gray-900">{course.price}</span>
                    <div
                      className={`w-7 h-7 rounded-full bg-gradient-to-br ${course.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
                    >
                      <FiArrowRight className="text-white" size={13} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={openForm}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              Register My Interest Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <p className="text-sm text-gray-400 mt-3">
              No commitment required. We'll contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM STRIP ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MdOutlineAnalytics className="text-white/50 mx-auto mb-4" size={36} />
            <h2 className="text-3xl font-bold text-white mb-3">
              Not sure which course fits you?
            </h2>
            <p className="text-orange-100 mb-7 max-w-lg mx-auto">
              Register your interest and let us know your goals — we'll recommend
              the best programme for you.
            </p>
            <button
              onClick={openForm}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
            >
              Get in Touch <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}