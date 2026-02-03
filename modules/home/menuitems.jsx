// modules\home\menuitems.jsx
"use client";

import * as React from "react";
import Link from "next/link";
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
  FiDollarSign,
  FiVideo,
  FiCalendar
} from "react-icons/fi";
import { cn } from "@/lib/utils";

// Enhanced Explore Flyout with proper width and scrolling
const ExploreFlyout = ({ isOpen, scrolled }) => {
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2
      }
    })
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop for closing menu when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          />
          
          {/* Mega Menu */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 pt-3 z-50 w-screen max-w-[1000px] px-4"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Explore Digitanotion</h3>
                      <p className="text-gray-600 mt-1">Building digital resilience through SASI principles</p>
                    </div>
                    <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-sm font-semibold">
                      <FiTarget size={16} />
                      SASI: Simplicity • Affordability • Security • Impact
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid - Scrollable on mobile */}
              <div className="max-h-[75vh] overflow-y-auto custom-scrollbar">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 min-w-[1200px]">
                    {/* Column 1: Academy */}
                    <motion.div 
                      custom={0}
                      variants={columnVariants}
                      className="p-8 border-r border-gray-100 min-h-[500px]"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                          <FiBookOpen className="text-blue-600" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xl">Academy</h4>
                          <p className="text-sm text-gray-600">Future-proof tech education & certifications</p>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        {academyItems.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.03 }}
                            whileHover={{ x: 4 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all border border-transparent hover:border-blue-100"
                            >
                              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-white transition-colors flex-shrink-0">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
                                  {item.label}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {item.description}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                    {item.level}
                                  </span>
                                  {/* <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {item.duration}
                                  </span> */}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-10 pt-6 border-t border-gray-100">
                        <Link
                          href="/academy"
                          className="inline-flex items-center gap-3 text-blue-600 font-semibold hover:gap-4 transition-all group"
                        >
                          <span>View all courses & certifications</span>
                          <FiTrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Column 2: Services */}
                    <motion.div 
                      custom={1}
                      variants={columnVariants}
                      className="p-8 border-r border-gray-100 min-h-[500px]"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                          <FiLayers className="text-purple-600" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xl">Services</h4>
                          <p className="text-sm text-gray-600">End-to-end digital solutions & consulting</p>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        {servicesItems.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.03 }}
                            whileHover={{ x: 4 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all border border-transparent hover:border-purple-100"
                            >
                              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-white transition-colors flex-shrink-0">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors text-lg">
                                  {item.label}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {item.description}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                                    {item.category}
                                  </span>
                                  {/* <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    Starting from {item.price}
                                  </span> */}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-10 pt-6 border-t border-gray-100">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-3 text-purple-600 font-semibold hover:gap-4 transition-all group"
                        >
                          <span>Explore all services & packages</span>
                          <FiTrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Column 3: Programs */}
                    <motion.div 
                      custom={2}
                      variants={columnVariants}
                      className="p-8 border-r border-gray-100 min-h-[500px]"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                          <FiGlobe className="text-green-600" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xl">Programs & Community</h4>
                          <p className="text-sm text-gray-600">Initiatives, labs & talent development</p>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        {programmeItems.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.03 }}
                            whileHover={{ x: 4 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all border border-transparent hover:border-green-100"
                            >
                              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-white transition-colors flex-shrink-0">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors text-lg">
                                  {item.label}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {item.description}
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                                    {item.type}
                                  </span>
                                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {item.status}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-10 pt-6 border-t border-gray-100">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-3 text-green-600 font-semibold hover:gap-4 transition-all group"
                        >
                          <span>Discover all programs & events</span>
                          <FiTrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Column 4: Resources & Company */}
                    <motion.div 
                      custom={3}
                      variants={columnVariants}
                      className="p-8 min-h-[500px]"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
                          <FiAward className="text-orange-600" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xl">Company & Resources</h4>
                          <p className="text-sm text-gray-600">About us, insights & support</p>
                        </div>
                      </div>
                      
                      {/* Company Info */}
                      <div className="mb-8 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
                        <h5 className="font-semibold text-gray-900 mb-2">About Digitanotion</h5>
                        <p className="text-sm text-gray-600">
                          Leading Cybersecurity & Tech Innovation Center since 2019. 
                          Building digital resilience through Security, Innovation, 
                          and Skills Development.
                        </p>
                      </div>

                      {/* Quick Links */}
                      <div className="space-y-3 mb-8">
                        {companyItems.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.03 }}
                            whileHover={{ x: 4 }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all"
                            >
                              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                                {item.icon}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                                  {item.label}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Card */}
                      <div className="mt-6 p-5 bg-gradient-to-r from-gray-900 to-black rounded-xl">
                        <h5 className="text-white font-semibold mb-2 text-lg">Start Your Journey</h5>
                        <p className="text-gray-300 text-sm mb-4">
                          Join 1,000+ professionals building digital resilience
                        </p>
                        <div className="space-y-3">
                          <Link
                            href="/contact"
                            className="block w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
                          >
                            Contact Sales
                          </Link>
                       
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Need help? <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact our team</Link>
                    </div>
                    <div className="text-sm text-gray-600">
                      Call us: <span className="font-semibold">+234 XXX XXX XXXX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Nav Trigger Component
const NavTrigger = ({ children, isOpen, scrolled }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 py-3 px-5 rounded-lg transition-all cursor-pointer select-none group relative",
        scrolled 
          ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" 
          : "text-white hover:bg-white/10"
      )}
    >
      <span className="font-semibold text-[20px] tracking-wide">
        {children}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "transition-colors",
          scrolled ? "text-gray-500" : "text-white/70"
        )}
      >
        <FiChevronDown size={18} />
      </motion.div>
      
      {/* Active indicator */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 1 : 0 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"
      />
    </div>
  );
};

// Main Menu Component
export function MenuItems({ scrolled }) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const timeoutRef = React.useRef(null);
  const menuRef = React.useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <nav className="flex items-center gap-2">
        {/* Home Link */}
        {/* <Link
          href="/"
          className={cn(
            "py-3 px-5 rounded-lg font-semibold text-[15px] tracking-wide transition-all relative group",
            scrolled 
              ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" 
              : "text-white hover:bg-white/10"
          )}
        >
          <span className="flex items-center gap-2">
            <FiHome size={18} />
            Home
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1.5 h-1.5 bg-blue-500 rounded-full transition-all duration-200" />
        </Link> */}

        {/* Explore Mega Menu */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("explore")}
          onMouseLeave={handleMouseLeave}
        >
          <NavTrigger isOpen={openMenu === "explore"} scrolled={scrolled}>
            Explore
          </NavTrigger>
          <ExploreFlyout isOpen={openMenu === "explore"} scrolled={scrolled} />
        </div>

        {/* Simple Links */}
        {/* {simpleNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "py-3 px-5 rounded-lg font-semibold text-[15px] tracking-wide transition-all relative group",
              scrolled 
                ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            )}
          >
            {item.label}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1.5 h-1.5 bg-blue-500 rounded-full transition-all duration-200" />
          </Link>
        ))} */}
      </nav>
    </div>
  );
}

// --- Enhanced Data with Complete Information ---
const academyItems = [
  {
    href: "/academy/computing-essentials",
    label: "Computing Essentials",
    description: "Master foundational tech concepts & IT fundamentals",
    level: "Beginner",
    duration: "5 wks",
    icon: <FiCode size={20} />
  },
  {
    href: "/academy/web-fundamentals",
    label: "Web Development Fundatmentals",
    description: "Master the core building blocks of the web - HTML, CSS, and vanilla JavaScript. ",
    level: "Beginner",
    duration: "12-24 wks",
    icon: <FiCode size={20} />
  },
  {
    href: "/academy/cyber-foundations",
    label: "Cyber Security Foundations",
    description: "Begin your cybersecurity journey with hands-on labs and practical skills to identify your specialization path",
    level: "Beginner",
    duration: "4-24 wks",
    icon: <FiShield size={20} />
  },
  // {
  //   href: "/academy/cloud-technologies",
  //   label: "Cloud Technologies",
  //   description: "AWS, Azure & cloud infrastructure mastery",
  //   level: "Intermediate",
  //   duration: "10-14 wks",
  //   icon: <FiGlobe size={20} />
  // },
  // {
  //   href: "/academy/product-design",
  //   label: "Product Design & UX/UI",
  //   description: "Design thinking & user experience principles",
  //   level: "Beginner",
  //   duration: "6-12 wks",
  //   icon: <FiLayers size={20} />
  // }
];

const servicesItems = [
  {
    href: "/services/app-development",
    label: "Custom App Development",
    description: "Web, mobile & desktop applications",
    category: "Development",
    price: "$5,000",
    icon: <FiCode size={20} />
  },
  {
    href: "/services/cyber-security",
    label: "CyBouncer (Security)",
    description: "Managed security & threat monitoring",
    category: "Security",
    price: "$2,500/mo",
    icon: <FiShield size={20} />
  },
             
  // {
  //   href: "/services/consulting",
  //   label: "Tech Strategy Consulting",
  //   description: "Digital transformation & IT roadmap",
  //   category: "Consulting",
  //   price: "$200/hr",
  //   icon: <FiTrendingUp size={20} />
  // },
  // {
  //   href: "/services/cloud-migration",
  //   label: "Cloud Migration",
  //   description: "AWS, Azure & Google Cloud services",
  //   category: "Cloud",
  //   price: "$10,000",
  //   icon: <FiGlobe size={20} />
  // }
];

const programmeItems = [
  {
    href: "/cysapafrica",
    label: "CySAP Africa",
    description: "Cybersecurity awareness community across Africa",
    type: "Community",
    status: "Active",
    icon: <FiGlobe size={20} />
  },
  {
    href: "/dils",
    label: "Innovation Labs For Schools (DILS)",
    description: "School innovation labs & tech education",
    type: "Education",
    status: "Active",
    icon: <FiUsers size={20} />
  },
  {
    href: "/tech6project",
    label: "Tech6Project",
    description: "6-month intensive internship program",
    type: "Internship",
    status: "Open",
    icon: <FiAward size={20} />
  },
  // {
  //   href: "/alumni",
  //   label: "Alumni Network",
  //   description: "Connect with 1000+ Digitanotion graduates/mentees",
  //   type: "Network",
  //   status: "Active",
  //   icon: <FiUsers size={20} />
  // },
  // {
  //   href: "/events",
  //   label: "Tech Events & Workshops",
  //   description: "Monthly tech talks & hands-on workshops",
  //   type: "Events",
  //   status: "Ongoing",
  //   icon: <FiCalendar size={20} />
  // }
];

const companyItems = [
  {
    href: "/about",
    label: "About Us",
    icon: <FiUsers size={18} />
  },
  // {
  //   href: "/history",
  //   label: "Our History & Mission",
  //   icon: <FiAward size={18} />
  // },
  {
    href: "/careers",
    label: "Careers at Digitanotion",
    icon: <FiBriefcase size={18} />
  },
  // {
  //   href: "/blog",
  //   label: "Blog & Tech Insights",
  //   icon: <FiBookOpen size={18} />
  // },
  // {
  //   href: "/resources",
  //   label: "Free Resources",
  //   icon: <FiVideo size={18} />
  // },
  // {
  //   href: "/pricing",
  //   label: "Pricing & Packages",
  //   icon: <FiDollarSign size={18} />
  // },
  {
    href: "/contact",
    label: "Contact Support",
    icon: <FiUsers size={18} />
  }
];

const simpleNavItems = [
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
];