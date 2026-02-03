"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiChevronDown, 
  FiShield, 
  FiCode, 
  FiUsers,
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiTarget,
  FiLayers,
  FiTrendingUp,
  FiBriefcase,
  FiHome,
  FiX,
  FiChevronRight,
  FiCalendar,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin
} from "react-icons/fi";
import { FaGraduationCap, FaUsers, FaTools } from "react-icons/fa";

// Your primary color variables (orange-red theme)
const PRIMARY_COLOR = "#e11802"; // Your brand red
const PRIMARY_LIGHT = "#ff6b35"; // Orange-red
const SECONDARY_COLOR = "#ff8c42"; // Light orange
const ACCENT_COLOR = "#ffa447"; // Warm accent

// Reuse your existing data structures
const academyItems = [
  {
    href: "/academy/computing-essentials",
    label: "Computing Essentials",
    description: "Master foundational tech concepts & IT fundamentals",
    level: "Beginner",
    icon: <FiCode className="text-orange-600" size={20} />
  },
  {
    href: "/academy/web-development",
    label: "Web Front-End Engineer",
    description: "Front-end web development with modern frameworks",
    level: "Intermediate",
    icon: <FiCode className="text-orange-600" size={20} />
  },
  {
    href: "/academy/cyber-foundations",
    label: "Cybersecurity Foundations",
    description: "Intro to Cybersecurity, Domains, Risk/Threat Awareness and Management",
    level: "Beginner",
    icon: <FiShield className="text-orange-600" size={20} />
  },
 
  // {
  //   href: "/academy/product-design",
  //   label: "Product Design & UX/UI",
  //   description: "Design thinking & user experience principles",
  //   level: "Beginner",
  //   icon: <FiLayers className="text-orange-600" size={20} />
  // },
   {
    href: "/academy",
    label: "All Courses",
    description: "See all our offerings",
    level: "Beginner-Intermediate",
    icon: <FiGlobe className="text-orange-600" size={20} />
  },
];

const servicesItems = [
  {
    href: "/services/app-development",
    label: "Custom App Development",
    description: "Web, mobile & desktop applications",
    category: "Development",
    icon: <FiCode className="text-red-600" size={20} />
  },
  {
    href: "/services/cybouncer",
    label: "CyBouncer Security",
    description: "Managed security & threat monitoring",
    category: "Security",
    icon: <FiShield className="text-red-600" size={20} />
  },
  // {
  //   href: "/services/product-design",
  //   label: "Digital Product Design",
  //   description: "UX/UI design, prototyping & testing",
  //   category: "Design",
  //   icon: <FiLayers className="text-red-600" size={20} />
  // },
  // {
  //   href: "/services/consulting",
  //   label: "Tech Strategy Consulting",
  //   description: "Digital transformation & IT roadmap",
  //   category: "Consulting",
  //   icon: <FiTrendingUp className="text-red-600" size={20} />
  // },
  // {
  //   href: "/services/cloud-migration",
  //   label: "Cloud Migration",
  //   description: "AWS, Azure & Google Cloud services",
  //   category: "Cloud",
  //   icon: <FiGlobe className="text-red-600" size={20} />
  // }
];

const programmeItems = [
  {
    href: "/cysapafrica",
    label: "Cysap Africa",
    description: "Cybersecurity awareness community",
    type: "Community",
    icon: <FaUsers className="text-orange-600" size={20} />
  },
  {
    href: "/dils",
    label: "DILS Innovation Labs",
    description: "School innovation labs & tech education",
    type: "Education",
    icon: <FaGraduationCap className="text-orange-600" size={20} />
  },
  {
    href: "/tech6project",
    label: "Tech6Project",
    description: "6-month intensive internship program",
    type: "Internship",
    icon: <FiAward className="text-orange-600" size={20} />
  },
  // {
  //   href: "#",
  //   label: "Alumni Network",
  //   description: "Connect with 1000+ graduates",
  //   type: "Network",
  //   icon: <FaUsers className="text-orange-600" size={20} />
  // },
  // {
  //   href: "#",
  //   label: "Tech Events & Workshops",
  //   description: "Monthly tech talks & hands-on workshops",
  //   type: "Events",
  //   icon: <FiCalendar className="text-orange-600" size={20} />
  // }
];

const companyItems = [
  {
    href: "/about",
    label: "About Us",
    icon: <FiUsers className="text-gray-700" size={20} />
  },
  // {
  //   href: "/careers",
  //   label: "Careers",
  //   icon: <FiBriefcase className="text-gray-700" size={20} />
  // },
  {
    href: "/contact",
    label: "Contact",
    icon: <FiMail className="text-gray-700" size={20} />
  },
  // {
  //   href: "/blog",
  //   label: "Blog & Insights",
  //   icon: <FiBookOpen className="text-gray-700" size={20} />
  // }
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  // Animation variants
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.25,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Light Backdrop Overlay */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          />

          {/* Light Theme Sidebar Container */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full w-full max-w-sm z-50 md:hidden"
          >
            <div className="h-full bg-white shadow-2xl border-l border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200 backdrop-blur-lg">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-md">
                      <FiShield className="text-white" size={20} />
                    </div>
                    <div>
                      <h2 className="text-gray-900 font-bold text-xl">Digitanotion</h2>
                      <p className="text-xs text-gray-500">Innovate, Secure, Empower seamlessly</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX className="text-gray-700" size={22} />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="h-[calc(100%-80px)] overflow-y-auto custom-scrollbar pb-24">
                <div className="p-6 space-y-1">
                  {/* Home Link */}
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 border border-orange-200 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 shadow-sm">
                      <FiHome className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-900 font-semibold">Home</span>
                      <p className="text-xs text-gray-600">Return to homepage</p>
                    </div>
                    <FiChevronRight className="text-orange-500 group-hover:text-red-500 transition-colors" size={18} />
                  </Link>

                  {/* Explore Section */}
                  <div className="mt-8 mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-4 mb-4">
                      Explore Services
                    </h3>
                    
                    {/* Academy */}
                    <div className="mb-3">
                      <button
                        onClick={() => toggleSection('academy')}
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 border border-orange-200 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 shadow-sm">
                            <FaGraduationCap className="text-white" size={20} />
                          </div>
                          <div className="text-left">
                            <span className="text-gray-900 font-semibold block">Academy</span>
                            <span className="text-sm text-gray-600">Tech Education & Certifications</span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: openSection === 'academy' ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown className="text-orange-500 group-hover:text-red-500" size={20} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openSection === 'academy' && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={sectionVariants}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-3 space-y-3 bg-orange-50/50 rounded-b-xl border-x border-b border-orange-200">
                              {academyItems.map((item, index) => (
                                <motion.div
                                  key={item.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                                  >
                                    <div className="p-2 rounded-lg bg-white shadow-sm group-hover:bg-orange-50 transition-colors">
                                      {item.icon}
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-gray-800 font-medium block">{item.label}</span>
                                      <span className="text-xs text-gray-600">{item.description}</span>
                                    </div>
                                    <span className="text-xs px-3 py-1 bg-orange-100 text-orange-700 font-medium rounded-full">
                                      {item.level}
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Services */}
                    <div className="mb-3">
                      <button
                        onClick={() => toggleSection('services')}
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 border border-red-200 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 shadow-sm">
                            <FaTools className="text-white" size={20} />
                          </div>
                          <div className="text-left">
                            <span className="text-gray-900 font-semibold block">Services</span>
                            <span className="text-sm text-gray-600">Digital Solutions & Consulting</span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: openSection === 'services' ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown className="text-red-500 group-hover:text-pink-500" size={20} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openSection === 'services' && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={sectionVariants}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-3 space-y-3 bg-red-50/50 rounded-b-xl border-x border-b border-red-200">
                              {servicesItems.map((item, index) => (
                                <motion.div
                                  key={item.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                                  >
                                    <div className="p-2 rounded-lg bg-white shadow-sm group-hover:bg-red-50 transition-colors">
                                      {item.icon}
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-gray-800 font-medium block">{item.label}</span>
                                      <span className="text-xs text-gray-600">{item.description}</span>
                                    </div>
                                    <span className="text-xs px-3 py-1 bg-red-100 text-red-700 font-medium rounded-full">
                                      {item.category}
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Programs */}
                    <div className="mb-3">
                      <button
                        onClick={() => toggleSection('programs')}
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 border border-amber-200 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 shadow-sm">
                            <FiGlobe className="text-white" size={20} />
                          </div>
                          <div className="text-left">
                            <span className="text-gray-900 font-semibold block">Programs</span>
                            <span className="text-sm text-gray-600">Community & Talent Development</span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: openSection === 'programs' ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown className="text-amber-500 group-hover:text-yellow-500" size={20} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openSection === 'programs' && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={sectionVariants}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-3 space-y-3 bg-amber-50/50 rounded-b-xl border-x border-b border-amber-200">
                              {programmeItems.map((item, index) => (
                                <motion.div
                                  key={item.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                                  >
                                    <div className="p-2 rounded-lg bg-white shadow-sm group-hover:bg-amber-50 transition-colors">
                                      {item.icon}
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-gray-800 font-medium block">{item.label}</span>
                                      <span className="text-xs text-gray-600">{item.description}</span>
                                    </div>
                                    <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 font-medium rounded-full">
                                      {item.type}
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Company Section */}
                  <div className="mt-8 mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-4 mb-4">
                      Company
                    </h3>
                    <div className="space-y-3">
                      {companyItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all group"
                        >
                          <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-white transition-colors">
                            {item.icon}
                          </div>
                          <span className="text-gray-800 font-medium">{item.label}</span>
                          <FiChevronRight className="ml-auto text-gray-400 group-hover:text-orange-500 transition-colors" size={18} />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* SASI Principles Card */}
                  <div className="mt-8 mx-4 p-5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <FiTarget className="text-white" size={22} />
                      <span className="text-white font-bold text-lg">SASI Principles</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Simplicity', 'Affordability', 'Security', 'Impact'].map((principle, idx) => (
                        <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                          <span className="text-white text-sm font-medium">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Cards */}
                  <div className="mt-8 space-y-4 px-4">
                    {/* Free Consultation */}
                    <div className="p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-orange-200 shadow-sm">
                      <h4 className="text-gray-900 font-bold mb-2">Start Your Journey</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Get a free consultation with our experts
                      </p>
                      <Link
                        href="/contact"
                        onClick={handleLinkClick}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-md"
                      >
                        <span>Schedule Free Call</span>
                        <FiArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm">
                      <h4 className="text-gray-900 font-bold mb-4">Contact Info</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-orange-100">
                            <FiPhone className="text-orange-600" size={18} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Call us</p>
                            <p className="text-gray-900 font-medium">+234 80 7373 5836</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-red-100">
                            <FiMail className="text-red-600" size={18} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Email us</p>
                            <p className="text-gray-900 font-medium">hello@digitanotion.com.ng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  {/* <div className="mt-6 mx-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">100+</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">1K+</div>
                        <div className="text-xs text-gray-600">Graduates</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-600">4.9</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    © {new Date().getFullYear()} Digitanotion
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-500">Secure & Reliable</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}