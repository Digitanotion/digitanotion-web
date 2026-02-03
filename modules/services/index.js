"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShield,
  FiCpu,
  FiUsers,
  FiAward,
  FiSearch,
  FiFilter,
  FiChevronRight,
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiMonitor,
  FiCode,
  FiBriefcase,
  FiBookOpen,
  FiLayers,
  FiTarget,
  FiLock,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";
import {
  FaHandshake,
  FaGraduationCap,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaDesktop,
  FaMobileAlt,
  FaServer,
  FaBrain,
} from "react-icons/fa";

// Service categories
const serviceCategories = [
  {
    id: "all",
    name: "All Services",
    icon: FiLayers,
    count: 6,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: FiShield,
    count: 2,
  },
  {
    id: "innovation",
    name: "Tech Innovation",
    icon: FiCpu,
    count: 2,
  },
  {
    id: "community",
    name: "Community",
    icon: FiUsers,
    count: 1,
  },
  {
    id: "talent",
    name: "Talent Development",
    icon: FaGraduationCap,
    count: 1,
  },
];

// All services data
const allServices = [
  {
    id: "cybouncer",
    category: "cybersecurity",
    title: "CyBouncer",
    subtitle: "Managed Security Services",
    tagline: "Your digital caretaker and bodyguard",
    description:
      "Managed cybersecurity and application management services providing continuous digital protection and maintenance from the moment development concludes. We ensure your online presence remains secure, updated, and growing.",
    icon: FiShield,
    color: "from-red-500 to-orange-500",
    features: [
      "Penetration Testing",
      "Cybersecurity Operations & Consultation",
      "Website/App Management",
      "DevOps Services",
    ],
    cta: "Secure Your Business",
    cta_link: "/cybouncer",
    isFeatured: true,
  },
  {
    id: "cysap",
    category: "cybersecurity",
    title: "CySAP Africa",
    subtitle: "Cybersecurity Awareness Project",
    tagline: "Building a secure digital environment for every African",
    description:
      "A visionary non-profit initiative fostering continent-wide cybersecurity culture through awareness, talent development, and collaborative communities.",
    icon: FiGlobe,
    color: "from-orange-500 to-amber-500",
    features: [
      "Community Awareness Programs",
      "Talent Development Initiatives",
      "Collaborative Security Communities",
      "Digital Resilience Workshops",
      "Cybersecurity Education",
      "Public-Private Partnerships",
    ],
    cta: "Join the Community",
    cta_link: "https://chat.whatsapp.com/LdIJKKrgsgA5g8GPNEaAwY?mode=gi_t",
    isCommunity: true,
  },
  {
    id: "sad",
    category: "innovation",
    title: "Secured Application Development",
    subtitle: "End-to-End Development Service",
    tagline: "Engineered with security from the ground up",
    description:
      "Build custom websites, web and mobile applications, and desktop software designed to meet diverse business needs—whether to establish a brand, enhance engagement, or streamline operations.",
    icon: FiCode,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Custom Web & Mobile Apps",
      "Security-First Architecture",
      "Brand Development",
      "User Experience Design",
      "Cloud Integration",
      "Performance Optimization",
    ],
    cta: "Build Your Solution",
    cta_link:
      "https://wa.me/2348073735836?text=Hi!%20I'm%20interested%20in%20Secured%20Application%20Development",
    isFeatured: true,
  },
  {
    id: "dils",
    category: "innovation",
    title: "Digital Innovation Labs for Schools",
    subtitle: "DILS Program",
    tagline: "Igniting passion for technology in the next generation",
    description:
      "Inspirational program partnering with educational institutions to deliver immersive training in Coding, AI, and Cybersecurity, culminating in project showcases.",
    icon: FaLightbulb,
    color: "from-purple-500 to-pink-500",
    features: [
      "Coding Workshops",
      "AI & ML Training",
      "Cybersecurity Education",
      "DILS Expo Showcases",
      "Teacher Training",
      "Future Talent Pipeline",
    ],
    cta: "Partner With Schools",
    cta_link: "#contact",
    isCommunity: true,
  },
  {
    id: "tech6",
    category: "community",
    title: "Tech6Project",
    subtitle: "Intensive Internship Program",
    tagline: "Bridging theory with real-world experience",
    description:
      "A unique 6-month intensive internship program held twice yearly, immersing promising tech talents in hands-on, project-based environments to accelerate career readiness.",
    icon: FaUsers,
    color: "from-green-500 to-emerald-500",
    features: [
      "6-Month Intensive Program",
      "Project-Based Learning",
      "Expert Mentorship",
      "Real Community Projects",
      "Professional Networking",
      "Career Acceleration",
    ],
    cta: "Apply for Internship",
    cta_link: "/tech6project",
    isFeatured: true,
  },
  {
    id: "academy",
    category: "talent",
    title: "Digitanotion Academy",
    subtitle: "Premium Training Arm",
    tagline: "Shaping the future of tech in Africa",
    description:
      "World-class, industry-recognized certifications through state-of-the-art onsite and online programs, delivering future-proof skills in cybersecurity, app development, and cloud technologies.",
    icon: FaGraduationCap,
    color: "from-indigo-500 to-violet-500",
    features: [
      "Industry Certifications",
      "Onsite & Online Programs",
      "Cybersecurity Training",
      "App Development Courses",
      "Cloud Technologies",
      "Continental Workforce Development",
    ],
    cta: "Start Learning",
    cta_link: "/academy",
    isFeatured: true,
  },
];

// Why Choose Us points
const whyChooseUs = [
  {
    icon: FiLayers,
    title: "All-in-One Resilience",
    description:
      "Get cybersecurity, custom software, and talent development from a single, aligned partner. Saves time, cuts complexity, ensures secure integration.",
  },
  {
    icon: FiTarget,
    title: "The SASI Guarantee",
    description:
      "Simple, Affordable, Secure, and Impactful solutions. No jargon, no hidden costs, just robust protection and clear results.",
  },
  {
    icon: FaHandshake,
    title: "Depth & Purpose",
    description:
      "More than a vendor. Passionate experts invested in your success and Africa's growth through local talent development.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};



export default function ServicesPrograms() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(allServices);

  // Filter services based on category and search
  useEffect(() => {
    let results = allServices;

    if (selectedCategory !== "all") {
      results = results.filter(
        (service) => service.category === selectedCategory,
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        results = results.filter((service) => {
          // Search in multiple fields
          const searchableText = [
            service.title,
            service.subtitle,
            service.tagline,
            service.description,
            ...service.features,
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(query);
        });
      }
    }

    setFilteredServices(results);
  }, [selectedCategory, searchQuery]);

  // Helper function to determine if link is external
  const isExternalLink = (url) => {
    return url.startsWith("http") || url.startsWith("https://wa.me");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FiLayers className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Services & Programs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Digital
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Resilience Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              At Digitanotion, we deliver on our promise through three
              integrated pillars:
              <strong className="text-orange-600">
                {" "}
                Security, Innovation, and Skills Development
              </strong>
              . Our model uniquely combines premium commercial services with
              transformative community initiatives.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="relative">
              <FiSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search services, features, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-lg"
                      : "bg-white border-gray-200 text-gray-700 hover:border-orange-300"
                  }`}
                >
                  <category.icon size={18} />
                  <span className="font-semibold">{category.name}</span>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? "bg-white/20"
                        : "bg-gray-100"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  layout
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Service Header */}
                    <div
                      className={`relative h-2 bg-gradient-to-r ${service.color}`}
                    />

                    <div className="p-8">
                      {/* Icon & Category */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}
                        >
                          <service.icon className="text-white" size={24} />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                          {service.category.charAt(0).toUpperCase() +
                            service.category.slice(1)}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-orange-600 mb-1">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 mb-4 italic">
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features
                            .slice(0, 4)
                            .map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-3"
                              >
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                  <FiCheck
                                    className="text-green-600"
                                    size={12}
                                  />
                                </div>
                                <span className="text-sm text-gray-700">
                                  {feature}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* CTA Button - Now using Link with external/internal detection */}
                      {isExternalLink(service.cta_link) ? (
                        <a
                          href={service.cta_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-xl hover:shadow-orange-200 transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                        >
                          {service.cta}
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link
                          href={service.cta_link}
                          className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-xl hover:shadow-orange-200 transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                        >
                          {service.cta}
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <FiSearch className="text-gray-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No services found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition-all"
              >
                Clear filters
              </button>
            </motion.div>
          )}

          {/* Search Results Info */}
          {searchQuery && filteredServices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600">
                Found{" "}
                <span className="font-bold text-orange-600">
                  {filteredServices.length}
                </span>
                {filteredServices.length === 1 ? " service" : " services"}{" "}
                matching "{searchQuery}"
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FaHandshake className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                The Digitanotion Difference
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Our Clients Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clients choose Digitanotion for a simple, powerful reason: we
              provide an integrated solution others can't.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                    <point.icon className="text-orange-600" size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {point.title}
                  </h3>

                  <p className="text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FiTarget className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Our Integrated Model
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building Complete Digital Resilience
              </h2>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Unlike traditional providers who offer isolated services,
                  Digitanotion's
                  <strong className="text-orange-600">
                    {" "}
                    integrated approach
                  </strong>{" "}
                  ensures every aspect of your digital foundation works in
                  harmony.
                </p>
                <p>
                  Our cybersecurity services protect the solutions we build,
                  while our talent development programs ensure you have the
                  skilled professionals to maintain and evolve them.
                </p>
                <p className="font-semibold text-gray-900">
                  Result: A self-sustaining digital ecosystem that grows with
                  you.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all"
                >
                  Start Your Journey
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: FiShield, label: "Security", count: "2 Services" },
                    { icon: FiCpu, label: "Innovation", count: "2 Programs" },
                    {
                      icon: FaUsers,
                      label: "Community",
                      count: "1 Initiative",
                    },
                    {
                      icon: FaGraduationCap,
                      label: "Talent",
                      count: "1 Academy",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 text-center border border-orange-100 hover:shadow-md transition-shadow"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                        <item.icon className="text-orange-600" size={20} />
                      </div>
                      <div className="text-lg font-bold text-gray-900 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-600">{item.count}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-orange-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                      <FiZap className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Quick Start</h4>
                      <p className="text-sm text-gray-600">
                        Get matched with the right service in 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Digital Resilience?
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether you need cybersecurity protection, custom software
              development, or talent development solutions, we're here to help
              you build a secure and innovative digital future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Get a Free Consultation
                <FiArrowRight className="inline ml-2" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
              >
                Learn About Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Optimization */}
      <div className="sr-only" aria-hidden="true">
        <h1>Services & Programs - Digitanotion Limited</h1>
        <h2>Complete Digital Resilience Solutions for African Businesses</h2>
        <p>
          Digitanotion Limited offers integrated cybersecurity, tech innovation,
          and talent development services. Our portfolio includes CyBouncer
          Managed Security Services, Secured Application Development, Tech6
          Project Internships, Digitanotion Academy training, and community
          initiatives like CySAP Africa and DILS.
        </p>

        <h3>Cybersecurity Services Nigeria</h3>
        <ul>
          <li>
            CyBouncer: Managed Security Services including Penetration Testing,
            SOC, Risk Management
          </li>
          <li>
            CySAP Africa: Cybersecurity Awareness Project - Non-profit community
            initiative
          </li>
        </ul>

        <h3>Tech Innovation Services Africa</h3>
        <ul>
          <li>
            Secured Application Development: Custom websites, web apps, mobile
            apps, desktop software
          </li>
          <li>
            Digital Innovation Labs for Schools: Coding, AI, and Cybersecurity
            training for students
          </li>
        </ul>

        <h3>Community Programs</h3>
        <ul>
          <li>
            Tech6 Project: 6-month intensive internship program bridging theory
            and practice
          </li>
        </ul>

        <h3>Talent Development</h3>
        <ul>
          <li>
            Digitanotion Academy: Industry-recognized certifications in
            cybersecurity, app development, cloud
          </li>
        </ul>

        <h4>Why Choose Digitanotion</h4>
        <ul>
          <li>
            All-in-One Digital Resilience: Cybersecurity, software development,
            talent training
          </li>
          <li>
            SASI Guarantee: Simple, Affordable, Secure, Impactful solutions
          </li>
          <li>
            Integrated Model: Services work together for complete digital
            foundation
          </li>
          <li>
            Local Expertise with Global Standards: African solutions for African
            challenges
          </li>
        </ul>

        <h5>Keywords</h5>
        <p>
          Cybersecurity Services Nigeria, Managed Security Services Africa,
          Custom App Development Nigeria, Web Development Lagos, Mobile App
          Development Africa, Tech Internships Nigeria, IT Training Academy,
          Cybersecurity Training Africa, Digital Innovation Labs, School
          Technology Programs, Tech Talent Development, App Development Courses,
          Cloud Computing Training, Penetration Testing Services, SOC Services
          Nigeria, Risk Management Consulting, ISMS Development, DevOps Services
          Africa, Website Management Services, IT Security Consulting, Software
          Development Company Nigeria, EdTech Solutions Africa, Digital
          Transformation Services, IT Infrastructure Solutions
        </p>
      </div>
    </div>
  );
}
