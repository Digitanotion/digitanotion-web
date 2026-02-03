"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiAward,
  FiCalendar,
  FiBook,
  FiTarget,
  FiZap,
  FiHeart,
  FiMessageSquare,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiCamera,
  FiUpload,
  FiStar,
  FiCheckCircle,
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaHandsHelping,
  FaNetworkWired,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaRegCalendarCheck,
} from "react-icons/fa";

// Pillars data
const pillars = [
  {
    title: "Cybersecurity Advancement",
    description:
      "Driving continent-wide awareness and digital safety education",
    icon: FiShield,
    color: "from-orange-500 to-red-500",
    metrics: [
      { label: "Schools Reached", value: "15+" },
      { label: "Daily Tips Shared", value: "500+" },
      { label: "Public Accounts Secured", value: "1,000+" },
    ],
    achievements: [
      "Leading Africa's Cybersecurity Month activities annually",
      "Delivering free security workshops in underserved communities",
      "Publishing daily cybersecurity awareness content",
    ],
  },
  {
    title: "Talent Pipeline Development",
    description: "Nurturing Africa's next generation of cybersecurity experts",
    icon: FaGraduationCap,
    color: "from-blue-500 to-cyan-500",
    metrics: [
      { label: "Mentorship Participants", value: "1,000+" },
      { label: "African Countries", value: "4+" },
      { label: "Completion Rate", value: "92%" },
    ],
    achievements: [
      "Free 5-week remote mentorship programs",
      "Hands-on vulnerability assessment training",
      "Connecting talents with industry opportunities",
    ],
  },
  {
    title: "Thriving Community",
    description:
      "Building collaborative networks across Africa's cybersecurity landscape",
    icon: FiUsers,
    color: "from-purple-500 to-pink-500",
    metrics: [
      { label: "Community Partners", value: "50+" },
      { label: "Active Members", value: "2,000+" },
      { label: "Incidents Resolved", value: "500+" },
    ],
    achievements: [
      "Real-time incident reporting and response system",
      "Opportunity sharing platform for jobs and internships",
      "Regular community meetups and networking events",
    ],
  },
];

// Gallery images data
const galleryImages = [
  {
    id: 1,
    category: "Awareness Outreach",
    title: "School Workshop - Lagos",
    description: "Teaching cybersecurity basics to high school students",
    stats: "120+ students trained",
    color: "from-orange-400 to-red-400",
  },
  {
    id: 2,
    category: "Organization Awareness",
    title: "Corporate Security Training",
    description: "Cybersecurity best practices for SMEs",
    stats: "50+ organizations impacted",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: 3,
    category: "Community Events",
    title: "Cybersecurity Month Launch",
    description: "Annual awareness campaign kickoff",
    stats: "500+ attendees",
    color: "from-purple-400 to-pink-400",
  },
  {
    id: 4,
    category: "Awareness Outreach",
    title: "Rural Community Workshop",
    description: "Digital safety education in remote areas",
    stats: "15+ villages reached",
    color: "from-green-400 to-emerald-400",
  },
  {
    id: 5,
    category: "Mentorship",
    title: "Virtual Training Session",
    description: "Remote mentorship across Africa",
    stats: "1,000+ participants",
    color: "from-indigo-400 to-violet-400",
  },
  {
    id: 6,
    category: "Community Events",
    title: "Networking Meetup",
    description: "Connecting professionals and beginners",
    stats: "4 African countries represented",
    color: "from-amber-400 to-yellow-400",
  },
];

// Statistics data
const statistics = [
  { icon: FiGlobe, value: "4+", label: "African Countries" },
  { icon: FiUsers, value: "2,000+", label: "Lives Impacted" },
  { icon: FaHandsHelping, value: "50+", label: "Community Partners" },
  { icon: FiAward, value: "1,500+", label: "Students Reached" },
];

// Impact metrics
const impactMetrics = [
  {
    number: "15",
    unit: "+",
    label: "Schools Visited",
    description: "Cybersecurity awareness workshops",
  },
  {
    number: "500",
    unit: "+",
    label: "Daily Tips",
    description: "Free security guidance shared",
  },
  {
    number: "1,000",
    unit: "+",
    label: "Accounts Secured",
    description: "Public account protection assistance",
  },
  {
    number: "92",
    unit: "%",
    label: "Completion Rate",
    description: "Mentorship program success",
  },
];

export default function CySAPAfrica() {
  const [activeImage, setActiveImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showVideoModal, setShowVideoModal] = useState(false);

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) =>
          img.category.toLowerCase().includes(activeFilter.toLowerCase()),
        );

  const categories = [
    "all",
    "awareness",
    "organization",
    "events",
    "mentorship",
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated Shield Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
              className="inline-flex mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-2xl">
                  <FiShield className="text-white text-3xl" />
                </div>
              </div>
            </motion.div>

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-8">
              <FiStar className="text-orange-600" size={16} />
              <span className="text-sm font-semibold text-orange-700">
                #1 Cybersecurity Awareness Project in Africa
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                CySAP Africa
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">
                Cybersecurity Awareness Project
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              A visionary community project driven by the mission to create a
              secure and resilient digital environment for every African. We
              foster continent-wide cybersecurity culture through awareness,
              talent development, and collaborative communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all flex items-center gap-3 group"
              >
                <FiCamera className="text-white" />
                View Our Gallery
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideoModal(true)}
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all flex items-center gap-3 group"
              >
                <FiPlay className="text-orange-600" />
                Watch Our Story
                <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-orange-600 text-2xl" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section
        id="pillars"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiTarget className="text-orange-600" size={16} />
              <span className="text-sm font-semibold text-orange-700">
                Our Three Pillars
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Africa's Digital Resilience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on three core areas to create lasting impact in Africa's
              cybersecurity landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl hover:border-orange-200 transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${pillar.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon className="text-white text-2xl" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {pillar.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {pillar.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      {/* <section
        id="impact"
        className="py-20 bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable results from our journey of securing Africa's digital
              future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {metric.number}
                    <span className="text-orange-600">{metric.unit}</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsGalleryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Current Image */}
              <div
                className={`relative h-[60vh] rounded-2xl overflow-hidden bg-gradient-to-br ${filteredImages[activeImage]?.color} opacity-90`}
              >
                {/* Image Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8 max-w-2xl">
                    <div className="text-6xl mb-6">📸</div>
                    <div className="text-sm font-semibold mb-4 opacity-90">
                      {filteredImages[activeImage]?.category}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {filteredImages[activeImage]?.title}
                    </h3>
                    <p className="text-lg opacity-90 mb-6">
                      {filteredImages[activeImage]?.description}
                    </p>
                    <div className="text-lg font-semibold">
                      {filteredImages[activeImage]?.stats}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <FiChevronLeft className="text-white text-2xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <FiChevronRight className="text-white text-2xl" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <FiX className="text-white text-xl" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white text-sm">
                  {activeImage + 1} / {filteredImages.length}
                </span>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {filteredImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage(idx);
                    }}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                      idx === activeImage
                        ? "ring-2 ring-orange-500 ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${img.color}`}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                <FiX className="text-white text-xl" />
              </button>

              {/* Video Header */}
              <div className="p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                    <FiPlay className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      CySAP Africa Story
                    </h3>
                    <p className="text-gray-300">
                      Watch our journey in securing Africa's digital future
                    </p>
                  </div>
                </div>
              </div>

              {/* YouTube Video Embed */}
              <div className="relative pt-[56.25%]">
                {" "}
                {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?autoplay=1&rel=0"
                  title="CySAP Africa - Our Story"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      About This Video
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Discover how CySAP Africa is transforming cybersecurity
                      awareness across the continent. From school workshops to
                      community mentorship, see our impact in action.
                    </p>
                  </div>
                  {/* <div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      Video Chapters
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "00:00 - Our Mission",
                        "01:30 - School Workshops",
                        "03:15 - Mentorship Programs",
                        "05:45 - Community Impact",
                        "07:20 - Future Vision",
                      ].map((chapter, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <FiPlay className="text-orange-500 text-xs" />
                          {chapter}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>

                {/* CTA */}
                {/* <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all">
                      Subscribe to Our Channel
                    </button>
                    <button
                      onClick={() =>
                        document
                          .getElementById("gallery")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      className="flex-1 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                    >
                      View Photo Gallery
                    </button>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
