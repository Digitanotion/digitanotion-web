"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "./testimonial";
import {
  FiShield,
  FiCode,
  FiUsers,
  FiTarget,
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiTrendingUp,
  FiBriefcase,
  FiCheckCircle,
  FiStar,
  FiArrowRight,
  FiChevronDown,
  FiPlayCircle,
  FiClock,
  FiDollarSign,
  FiTag,
} from "react-icons/fi";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
  FaNetworkWired,
  FaPalette,
  FaGraduationCap,
  FaDesktop,
  FaServer,
  FaChartBar,
  FaBrush,
  FaCloud,
} from "react-icons/fa";

// Learning Paths Data with complete course details
const learningPaths = [
  {
    id: "foundations",
    title: "Foundations",
    description: "Perfect for beginners starting their tech journey",
    color: "from-blue-500 to-cyan-500",
    icon: FiBookOpen,
    courses: [
      {
        id: "computing-essentials",
        name: "Computing Essentials",
        description:
          "Start your tech journey with essential computer skills and digital literacy",
        duration: "4 weeks",
        level: "Beginner",
        format: "Onsite",
        price: "₦65,000",
        originalPrice: "₦100,000",
        status: "Available",
        isNew: true,
        link: "/academy/cec",
        icon: FaDesktop,
        highlights: [
          "Basic IT Skills",
          "Productivity Tools",
          "Digital Literacy",
          "Computer Fundamentals",
        ],
        color: "from-blue-500 to-cyan-500",
      },
      // {
      //   id: "digital-literacy",
      //   name: "Digital Literacy",
      //   description:
      //     "Master essential digital tools and online productivity skills for modern workplaces",
      //   duration: "3 weeks",
      //   level: "Beginner",
      //   format: "Online",
      //   price: "₦45,000",
      //   originalPrice: "₦60,000",
      //   status: "Available",
      //   isNew: false,
      //   link: "/academy/digital-literacy",
      //   icon: FaDesktop,
      //   highlights: [
      //     "Microsoft Office",
      //     "Online Collaboration",
      //     "Digital Safety",
      //     "Cloud Basics",
      //   ],
      //   color: "from-blue-400 to-cyan-400",
      // },
    ],
  },
  {
    id: "development",
    title: "App Development",
    description: "Build real-world applications and systems",
    color: "from-orange-500 to-red-500",
    icon: FiCode,
    courses: [
      {
        id: "web-development",
        name: "Web Development Fundamentals",
        description:
          "Learn web development from scratch without frameworks, understanding how everything works under the hood.",
        duration: "9 weeks",
        level: "Beginner",
        format: "Onsite/Online",
        price: "₦100,000",
        originalPrice: "₦150,000",
        status: "Available",
        isNew: true,
        link: "/academy/web-fundamentals",
        icon: FaLaptopCode,
        highlights: ["HTML", "CSS", "Vannila", "anilla JavaScript"],
        color: "from-orange-500 to-red-500",
      },
      {
        id: "web-frontend-development",
        name: "Web Front-End Engineer (Specialization)",
        description:
          "Build scalable web applications with modern frameworks like React",
        duration: "14 weeks",
        level: "Intermediate",
        format: "Onsite/Online",
        price: "₦170,000",
        originalPrice: "₦250,000",
        status: "Available",
        isNew: true,
        link: "/academy/web-frontend-engineering",
        icon: FaLaptopCode,
        highlights: [
          "React/Next.js",
          "Real Projects",
          "Portfolio Building",
          "API Wiring",
        ],
        color: "from-orange-500 to-red-500",
      },
      {
        id: "mobile-app-development",
        name: "Mobile App Development (Specialization)",
        description:
          "Create cross-platform mobile applications using modern frameworks",
        duration: "14 weeks",
        level: "Intermediate",
        format: "Onsite",
        price: "₦300,000",
        originalPrice: "₦450,000",
        status: "Available",
        isNew: false,
        link: "/academy/mobile-app",
        icon: FaMobileAlt,
        highlights: ["Flutter", "App Store Deployment", "UI/UX for Mobile"],
        color: "from-orange-600 to-red-600",
      },
      {
        id: "backend-specialization",
        name: "Backend Specialization",
        description:
          "Master server-side development, databases, and cloud deployment",
        duration: "14 weeks",
        level: "Intermediate",
        format: "Onsite",
        price: "₦270,000",
        originalPrice: "₦350,000",
        status: "Avaliable",
        isNew: false,
        link: "/academy/backend-engineer",
        icon: FaServer,
        highlights: [
          "PHP (Laravel)",
          "Building APIS",
          "Database Design",
          "Microservices",
        ],
        color: "from-orange-700 to-red-700",
      },
    ],
  },
  {
    id: "security",
    title: "Cybersecurity",
    description: "Protect digital assets and combat threats",
    color: "from-purple-500 to-indigo-500",
    icon: FiShield,
    courses: [
      {
        id: "cybersecurity-foundations",
        name: "Cybersecurity Foundations",
        description:
          "Start your security career with fundamental concepts and practices",
        duration: "5 weeks",
        level: "Beginner",
        format: "Onsite/Online",
        price: "₦100,000",
        originalPrice: "₦150,000",
        status: "Available",
        isNew: true,
        link: "/academy/cyber-foundations",
        icon: FiShield,
        highlights: [
          "Cybersecurity Basics and Essentials",
          "Networking basics",
          "Threat Awareness",
          "Compliance",
        ],
        color: "from-purple-500 to-indigo-500",
      },
      {
        id: "soc-analyst",
        name: "SOC Analyst (Specialization)",
        description:
          "Become a Security Operations Center analyst with hands-on threat detection",
        duration: "14 weeks",
        level: "Intermediate",
        format: "Onsite",
        price: "₦370,000",
        originalPrice: "₦500,000",
        status: "Not Available",
        isNew: false,
        link: "#",
        icon: FiShield,
        highlights: [
          "SIEM Tools",
          "Incident Response",
          "Threat Hunting",
          "Log Analysis",
        ],
        color: "from-purple-600 to-indigo-600",
      },
      {
        id: "ethical-hacking",
        name: "Ethical Hacking (Specialization)",
        description:
          "Learn offensive security techniques to identify and fix vulnerabilities",
        duration: "14 weeks",
        level: "Advanced",
        format: "Onsite",
        price: "₦370,000",
        originalPrice: "₦650,000",
        status: "Available",
        isNew: false,
        link: "/academy/ethical-hacking",
        icon: FiShield,
        highlights: [
          "Penetration Testing",
          "Vulnerability Assessment",
          "Exploit Development",
          "Reporting",
        ],
        color: "from-purple-700 to-indigo-700",
      },
      {
        id: "digital-forensics",
        name: "Digital Forensics",
        description:
          "Master investigation techniques for cyber crimes and data recovery",
        duration: "14 weeks",
        level: "Advanced",
        format: "Onsite",
        price: "₦380,000",
        originalPrice: "₦700,000",
        status: "Not Available",
        isNew: false,
        link: "#",
        icon: FiShield,
        highlights: [
          "Evidence Collection",
          "Data Recovery",
          "Legal Aspects",
          "Case Studies",
        ],
        color: "from-purple-800 to-indigo-800",
      },
    ],
  },
  {
    id: "design",
    title: "Design & Management",
    description: "Create user-centered digital products",
    color: "from-pink-500 to-rose-500",
    icon: FaPalette,
    courses: [
      {
        id: "product-design",
        name: "Product Design (UI/UX)",
        description:
          "Design beautiful and functional user interfaces with modern design principles",
        duration: "9 weeks",
        level: "Intermediate",
        format: "Onsite/Online",
        price: "₦120,000",
        originalPrice: "₦150,000",
        status: "Available",
        isNew: true,
        link: "/academy/product-design",
        icon: FaPalette,
        highlights: [
          "Figma/Sketch",
          "User Research",
          "Wireframing",
          "Prototyping",
        ],
        color: "from-pink-500 to-rose-500",
      },
      {
        id: "design-thinking",
        name: "Design Thinking",
        description:
          "Learn human-centered design approaches for problem-solving",
        duration: "6 weeks",
        level: "Beginner",
        format: "Online",
        price: "₦70,000",
        originalPrice: "₦90,000",
        status: "Not Available",
        isNew: false,
        link: "#",
        icon: FaBrush,
        highlights: ["Empathy Mapping", "Ideation", "Prototyping", "Testing"],
        color: "from-pink-400 to-rose-400",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Cloud",
    description: "Manage networks and cloud systems",
    color: "from-green-500 to-emerald-500",
    icon: FaNetworkWired,
    courses: [
      {
        id: "networking-essentials",
        name: "Networking Essentials",
        description:
          "Master network fundamentals, protocols, and infrastructure management",
        duration: "8 weeks",
        level: "Intermediate",
        format: "Onsite",
        price: "₦100,000",
        originalPrice: "₦130,000",
        status: "Not Available",
        isNew: false,
        link: "#",
        icon: FaNetworkWired,
        highlights: [
          "TCP/IP",
          "Routing/Switching",
          "Network Security",
          "Troubleshooting",
        ],
        color: "from-green-500 to-emerald-500",
      },
      {
        id: "cloud-computing",
        name: "Cloud Computing (AWS)",
        description:
          "Learn cloud infrastructure, deployment, and management on AWS",
        duration: "10 weeks",
        level: "Intermediate",
        format: "Onsite/Online",
        price: "₦120,000",
        originalPrice: "₦160,000",
        status: "Not Available",
        isNew: false,
        link: "#",
        icon: FaCloud,
        highlights: [
          "AWS Services",
          "Cloud Architecture",
          "DevOps",
          "Cost Optimization",
        ],
        color: "from-green-600 to-emerald-600",
      },
    ],
  },
  {
    id: "business",
    title: "Business & Analytics",
    description: "Drive growth with data and marketing",
    color: "from-amber-500 to-yellow-500",
    icon: FaChartLine,
    courses: [
      {
        id: "data-analytics",
        name: "Data Analysis",
        description:
          "Transform data into insights with statistical analysis and visualization",
        duration: "12 weeks",
        level: "Intermediate",
        format: "Onsite/Online",
        price: "₦130,000",
        originalPrice: "₦170,000",
        status: "Available",
        isNew: true,
        link: "/academy/data-analysis",
        icon: FaChartBar,
        highlights: [
          "SQL/Python",
          "Data Visualization",
          "Statistical Analysis",
          "Business Insights",
        ],
        color: "from-amber-500 to-yellow-500",
      },
      {
        id: "digital-marketing",
        name: "Digital Marketing",
        description:
          "Master online marketing strategies and campaign management",
        duration: "8 weeks",
        level: "Beginner",
        format: "Online",
        price: "₦80,000",
        originalPrice: "₦110,000",
        status: "Not Available",
        isNew: false,
        link: "#",
        icon: FaChartLine,
        highlights: [
          "SEO/SEM",
          "Social Media",
          "Content Marketing",
          "Analytics",
        ],
        color: "from-amber-400 to-yellow-400",
      },
      {
        id: "business-technology",
        name: "Business Technology",
        description:
          "Bridge business needs with technology solutions for digital transformation",
        duration: "10 weeks",
        level: "Intermediate",
        format: "Onsite",
        price: "₦110,000",
        originalPrice: "₦140,000",
        status: "Not Available",
        isNew: false,
        link: "#",
        icon: FaChartLine,
        highlights: [
          "Digital Strategy",
          "Process Automation",
          "Tech Implementation",
          "ROI Analysis",
        ],
        color: "from-amber-600 to-yellow-600",
      },
    ],
  },
];

// Featured Courses - Updated to match Learning Path style
const featuredCourses = [
  {
    id: "cybersecurity-professional",
    title: "Cybersecurity Foundations",
    description:
      "Start your security career with fundamental concepts and practices",
    level: "Beginner",
    duration: "5 weeks",
    format: "Onsite",
    price: "₦100,000",
    originalPrice: "₦150,000",
    image: "/images/cyber-security.png",
    highlights: [
      "Intro to Cybersecurity",
      "Cybesecurity Domains",
      "Risk & Threat Management",
      "Cybersecurity Frameworks",
      "Labs",
    ],
    color: "from-purple-500 to-indigo-500",
    link: "/academy/cybersecurity",
    status: "Available",
    icon: FiShield,
  },
  {
    id: "fullstack-development",
    title: "Web Front-End Engineer (Specialization)",
    description: "Build scalable web applications with modern frameworks",
    level: "Intermediate",
    duration: "3 months",
    format: "Onsite/Online",
    price: "₦170,000",
    originalPrice: "₦250,000",
    image: "/images/web-development.png",
    highlights: [
      "React/Next.js",
      "HTML,CSS (Tailwind)",
      "Portfolio Building",
      "Mentorship",
      "+ More",
    ],
    color: "from-orange-500 to-red-500",
    link: "/academy/web-frontend-engineering",
    status: "Available",
    icon: FiCode,
  },
  {
    id: "computing-fundamentals",
    title: "Computing Essentials",
    description: "Start your tech journey with essential computer skills",
    level: "Beginner",
    duration: "5 weeks",
    format: "Onsite",
    price: "₦65,000",
    originalPrice: "₦100,000",
    image: "/images/computing-essentials.png",
    highlights: [
      "Basic IT Skills",
      "Productivity Tools",
      "Digital Literacy",
      "Certification",
      "+ More",
    ],
    color: "from-blue-500 to-cyan-500",
    link: "/academy/computing-essentials",
    status: "Available",
    icon: FiBookOpen,
  },
];

// Academy Process
const processSteps = [
  {
    step: "01",
    title: "Learn",
    description: "Access world-class curriculum with weekly assessments",
    icon: FiBookOpen,
  },
  {
    step: "02",
    title: "Do",
    description: "Complete hands-on projects and capstone assignments",
    icon: FiCode,
  },
  {
    step: "03",
    title: "Score",
    description: "Achieve 70%+ passing score in your capstone project",
    icon: FiTarget,
  },
  {
    step: "04",
    title: "Certify",
    description: "Earn industry-recognized certifications",
    icon: FiAward,
  },
  {
    step: "05",
    title: "Experience",
    description: "Qualify for internships at Digitanotion or partner networks",
    icon: FiBriefcase,
  },
  {
    step: "06",
    title: "Grow",
    description: "Join our alumni network and access career opportunities",
    icon: FiTrendingUp,
  },
];

export default function AcademyPage() {
  const [selectedPath, setSelectedPath] = useState("foundations");
  const [isPathSelectorVisible, setIsPathSelectorVisible] = useState(false);

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-red-100 text-red-800";
      case "Not Available":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Handle scroll for path selector visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsPathSelectorVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Learning Path Selector */}
      {/* {isPathSelectorVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex flex-wrap gap-2 justify-center">
              {learningPaths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => {
                    setSelectedPath(path.id);
                    document
                      .getElementById("learning-paths-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedPath === path.id
                      ? `bg-gradient-to-r ${path.color} text-white shadow-lg`
                      : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {path.title}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )} */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FaGraduationCap className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Digitanotion Academy
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building People
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our premium yet affordable training arm is dedicated to shaping
                Africa's tech future. We offer world-class, industry-recognized
                certifications through state-of-the-art onsite and online
                programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#learning-paths-section"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
                >
                  Explore Courses
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-200">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "Hands-on Projects",
                    "Expert Mentors",
                    "Career Support",
                    "Global Recognition",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200"
                    >
                      <FiCheckCircle className="text-green-500" size={18} />
                      <span className="text-sm font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Building People Infrastructure
                    </h3>
                    <p className="text-sm text-gray-600">
                      Digital infrastructure thrives on people infrastructure—at
                      our Academy, Africa's tech talents rise to lead and
                      innovate on a global scale.
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">
                        Trained & Mentored
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        95%
                      </div>
                      <div className="text-sm text-gray-600">Job Placement</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses - Updated to match Learning Path style */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-leading programs designed for career transformation
            </p>
          </motion.div>

          {/* Featured Courses displayed like Learning Paths */}
          <div className="max-w-4xl mx-auto space-y-6">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${course.color} min-w-fit`}
                  >
                    <course.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {course.title}
                          </h3>
                          {index === 0 && (
                            <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-6">
                          {course.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {course.price}
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          {course.originalPrice}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(course.status)}`}
                      >
                        {course.status}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1">
                        <FiClock size={14} /> {course.duration}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {course.format}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm rounded-full">
                        {course.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {course.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={course.link}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 border border-gray-300 font-semibold text-gray-900 transition-all hover:border-orange-500 flex items-center gap-2"
                      >
                        View Details <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section
        id="learning-paths-section"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Structured career paths designed to take you from beginner to
              industry-ready professional
            </p>
          </motion.div>

          {/* Path Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {learningPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedPath === path.id
                    ? `bg-gradient-to-r ${path.color} text-white shadow-lg`
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                {path.title}
              </button>
            ))}
          </div>

          {/* Selected Path Details - Updated to match Featured Courses style */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPath}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {learningPaths.map(
                (path) =>
                  path.id === selectedPath && (
                    <div
                      key={path.id} // Add this key prop
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {path.courses.map((course, idx) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ y: -8 }}
                          className="group"
                        >
                          <div className="h-full bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                            {/* Course Header */}
                            <div className="relative h-48 overflow-hidden">
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10`}
                              />
                              <div className="absolute top-4 left-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(course.status)}`}
                                >
                                  {course.status}
                                </span>
                                {course.isNew && (
                                  <span className="ml-2 px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-semibold">
                                {course.level}
                              </div>
                              <div className="absolute bottom-4 left-4">
                                <div className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                                  <course.icon
                                    className={
                                      course.color
                                        .replace("from-", "text-")
                                        .split(" ")[0]
                                    }
                                    size={24}
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {course.name}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {course.description}
                              </p>

                              {/* Highlights */}
                              <div className="flex flex-wrap gap-1 mb-4">
                                {course.highlights
                                  .slice(0, 2)
                                  .map((highlight, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                    >
                                      {highlight}
                                    </span>
                                  ))}
                                {course.highlights.length > 2 && (
                                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                    {/* +{course.highlights.length - 2} more
                                     */}
                                    + more
                                  </span>
                                )}
                              </div>

                              {/* Details */}
                              <div className="flex items-center justify-between mb-6">
                                <div className="space-y-2">
                                  <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <FiClock size={14} />
                                    <span>{course.duration}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <FiGlobe size={14} />
                                    <span>{course.format}</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-gray-900">
                                    {course.price}
                                  </div>
                                  {course.originalPrice && (
                                    <div className="text-sm text-gray-500 line-through">
                                      {course.originalPrice}
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* CTA */}
                              {course.link ? (
                                <Link
                                  href={course.link}
                                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 border border-gray-300 text-center font-semibold text-gray-900 transition-all group-hover:border-orange-500 flex items-center justify-center gap-2"
                                >
                                  View Course Details <FiArrowRight />
                                </Link>
                              ) : (
                                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-center font-semibold text-gray-900 opacity-50 cursor-not-allowed">
                                  Coming Soon
                                </button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Academy Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn, do weekly assessments, achieve 70%+ in your capstone
              project, get certified, and qualify for real-world experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200" />
                )}

                <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl font-bold text-gray-300">
                      {step.step}
                    </div>
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${
                        index === 0
                          ? "from-blue-500 to-cyan-500"
                          : index === 1
                            ? "from-orange-500 to-red-500"
                            : index === 2
                              ? "from-purple-500 to-indigo-500"
                              : index === 3
                                ? "from-green-500 to-emerald-500"
                                : index === 4
                                  ? "from-amber-500 to-yellow-500"
                                  : "from-pink-500 to-rose-500"
                      }`}
                    >
                      <step.icon className="text-white" size={24} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      {/* <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of Africans who have transformed their careers with
              Digitanotion Academy. Affordable, practical, and career-focused
              education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/academy/apply"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Apply Now
              </Link>
              <Link
                href="/academy/contact"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-white transition-all"
              >
                Talk to an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
