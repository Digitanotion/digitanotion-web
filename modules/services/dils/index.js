"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiUsers,
  FiAward,
  FiTarget,
  FiZap,
  FiCheck,
  FiArrowRight,
  FiTrendingUp,
  FiGlobe,
  FiCode,
  FiShield,
  FiBrain,
  FiCalendar,
  FiStar,
  FiBarChart,
  FiRocket,
  FiHeart,
  FiCast,
  FiLayers,
  FiCpu,
  FiLock,
  FiPackage,
} from "react-icons/fi";
import {
  FaSchool,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaRobot,
  FaLock,
  FaUsers as FaUsersGroup,
  FaCertificate,
  FaTrophy,
  FaHandshake,
  FaLightbulb,
  FaWhatsapp,
  FaMicroscope,
  FaDesktop,
  FaMobileAlt,
  FaChild,
  FaUserGraduate,
  FaUserTie,
  FaUniversity,
} from "react-icons/fa";

// Updated Tracks based on new structure
const tracks = [
  {
    id: "coding",
    name: "Coding & Development",
    icon: FiCode,
    color: "from-blue-500 to-cyan-500",
    description: "Build websites, apps, and software solutions from scratch",
    levels: {
      "Junior Primary": "Block-based programming, simple animations",
      "Senior Primary": "Web development basics, game creation",
      Secondary: "Full-stack development, databases",
      University: "Enterprise applications, cloud services",
    },
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: FiCode,
    color: "from-purple-500 to-pink-500",
    description: "Learn to create, interact with, and apply AI responsibly",
    levels: {
      "Junior Primary": "AI interaction, voice prompting, basic awareness",
      "Senior Primary": "AI creation, visual prompting, simple ML",
      Secondary: "AI applications, APIs, critical evaluation",
      University: "AI innovation, custom models, research",
    },
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: FiShield,
    color: "from-orange-500 to-red-500",
    description: "Become digital guardians with defensive security skills",
    levels: {
      "Junior Primary": "Cyber safety basics, digital identity protection",
      "Senior Primary": "Cyber defenders, basic threat understanding",
      Secondary: "Security analysis, ethical hacking principles",
      University: "Enterprise security, advanced threat management",
    },
  },
];

// Updated Plans based on track combinations
const plans = [
  {
    name: "Single Track",
    tracks: 1,
    price: "₦7,000",
    color: "from-orange-400 to-orange-500",
    features: [
      "Choose ONE track: Coding, AI, OR Cybersecurity",
      "Age-appropriate curriculum for chosen track",
      "Instructor-led sessions at school",
      "All learning materials & exercises",
      "Digital Badge for track completion",
      "Internal Demo Day participation",
      "Ethics integration at appropriate level",
    ],
    badge: "Focused Learning",
    icon: FiTarget,
  },
  {
    name: "Dual Track",
    tracks: 2,
    price: "₦12,000",
    color: "from-orange-500 to-red-500",
    features: [
      "Choose ANY TWO tracks to combine",
      "Integrated learning across selected tracks",
      "Cross-disciplinary projects",
      "Enhanced mentorship from multiple trainers",
      "Advanced project portfolio",
      "Cyber + AI + Code Expo participation",
      "Digital Certificate of Achievement",
      "All Single Track features",
    ],
    badge: "Integrated Learning",
    icon: FiPackage,
    recommended: true,
  },
  {
    name: "Complete Innovation",
    tracks: 3,
    price: "₦15,000",
    color: "from-red-500 to-red-600",
    features: [
      "ALL THREE tracks: Coding + AI + Cybersecurity",
      "Comprehensive K-20 progressive curriculum",
      "Industry-aligned capstone projects",
      "Professional presentation skills",
      "Inter-school/regional Innovation Expo",
      "Eligibility for DILS Innovation Awards",
      "Verified Innovation Certificate",
      "Career pathway guidance",
      "All Dual Track features",
    ],
    badge: "Full Spectrum",
    icon: FiRocket,
  },
];

// Learning Pathways by Level
const learningPathways = [
  {
    level: "Junior Primary",
    icon: FaChild,
    color: "from-green-400 to-blue-400",
    focus: "Digital Foundations & Safety",
    tracks: {
      Coding: "Block-based programming, simple animations",
      AI: "AI interaction, voice prompting, basic awareness",
      Cybersecurity: "Cyber Safety Heroes - Digital identity protection",
    },
    project: "My First Digital Creation",
  },
  {
    level: "Senior Primary",
    icon: FaGraduationCap,
    color: "from-blue-500 to-purple-500",
    focus: "Creative Application",
    tracks: {
      Coding: "Web development basics, game creation",
      AI: "AI creation, visual prompting, simple ML",
      Cybersecurity: "Cyber Defenders - Basic threat protection",
    },
    project: "AI for Social Good Project",
  },
  {
    level: "Secondary",
    icon: FaUserGraduate,
    color: "from-purple-500 to-red-500",
    focus: "Practical Implementation",
    tracks: {
      Coding: "Full-stack development, databases",
      AI: "AI applications, APIs, critical evaluation",
      Cybersecurity: "Security Analysts - Ethical hacking principles",
    },
    project: "Industry-Ready Solution",
  },
  {
    level: "University",
    icon: FaUniversity,
    color: "from-red-600 to-orange-600",
    focus: "Professional Innovation",
    tracks: {
      Coding: "Enterprise applications, cloud services",
      AI: "AI innovation, custom models, research",
      Cybersecurity: "Security Professionals - Advanced threat management",
    },
    project: "Research & Development Project",
  },
];

// Updated sample projects for different track combinations
const sampleProjects = {
  "Coding Only": [
    "Personal Portfolio Website",
    "School Management System",
    "E-commerce Platform",
  ],
  "AI Only": ["FakeAlert AI", "Teachable Machine Projects", "AI Art Gallery"],
  "Cybersecurity Only": [
    "Security Awareness Campaign",
    "Network Security Plan",
    "Phishing Detection Tool",
  ],
  "Coding + AI": [
    "AI-Powered Website",
    "Smart Chatbot",
    "ML-Powered Analytics Dashboard",
  ],
  "Coding + Cybersecurity": [
    "Secure Web Application",
    "Vulnerability Scanner",
    "Encrypted Messaging App",
  ],
  "AI + Cybersecurity": [
    "AI-Powered Threat Detection",
    "Secure AI Assistant",
    "Adversarial ML Defense",
  ],
  "All Three": [
    "Complete Secure AI Application",
    "Enterprise Security Solution",
    "Innovation Competition Entry",
  ],
};

// AI Curriculum Details
const aiCurriculum = [
  {
    level: "Junior Primary",
    title: "AI Interaction",
    focus: "Voice prompting, AI as helper",
    tools: ["Interactive stories", "Drawing with AI", "Simple chatbots"],
    ethics: "Fairness concepts, AI as tool",
  },
  {
    level: "Senior Primary",
    title: "AI Creation",
    focus: "Visual prompting, simple ML",
    tools: [
      "Train image classifiers",
      "Create AI art galleries",
      "Block-based AI",
    ],
    ethics: "Bias awareness, responsible creation",
  },
  {
    level: "Secondary",
    title: "AI Application",
    focus: "Advanced prompting, APIs",
    tools: [
      "Build AI-powered websites",
      "Analyze social trends",
      "GUI AI tools",
    ],
    ethics: "Critical evaluation, social impact",
  },
  {
    level: "University",
    title: "AI Innovation",
    focus: "Custom models, agent systems",
    tools: ["Develop novel applications", "RAG systems", "MLOps basics"],
    ethics: "Ethical frameworks, research ethics",
  },
];

// Cybersecurity Curriculum Details
const cyberCurriculum = [
  {
    level: "Junior Primary",
    title: "Cyber Safety Heroes",
    theme: "Protecting Your Digital Self",
    activities: ["Password games", "Phishing play", "Privacy theater"],
    project: "Create Your Digital Superhero",
  },
  {
    level: "Senior Primary",
    title: "Cyber Defenders",
    theme: "Building Your Digital Fortress",
    activities: ["Cipher challenges", "Phishing labs", "Privacy audits"],
    project: "Design Security Awareness Campaign",
  },
  {
    level: "Secondary",
    title: "Security Analysts",
    theme: "Thinking Like an Attacker",
    activities: [
      "Capture The Flag",
      "Network analysis",
      "Vulnerability scanning",
    ],
    project: "Build Home Network Security Plan",
  },
  {
    level: "University",
    title: "Security Professionals",
    theme: "Enterprise Defense",
    activities: [
      "Enterprise CTF",
      "Threat hunting",
      "Incident response drills",
    ],
    project: "Design Corporate Security Program",
  },
];

const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export default function DILS() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [selectedTracks, setSelectedTracks] = useState(["coding", "ai"]);
  const [activeLevel, setActiveLevel] = useState("Junior Primary");

  const handleTrackSelect = (trackId) => {
    if (selectedTracks.includes(trackId)) {
      setSelectedTracks(selectedTracks.filter((id) => id !== trackId));
    } else {
      if (selectedTracks.length < plans[selectedPlan].tracks) {
        setSelectedTracks([...selectedTracks, trackId]);
      }
    }
  };

  const getSampleProjects = () => {
    if (selectedTracks.length === 1) {
      const trackName = tracks.find((t) => t.id === selectedTracks[0])?.name;
      return (
        sampleProjects[`${trackName.split(" ")[0]} Only`] ||
        sampleProjects["Coding Only"]
      );
    } else if (selectedTracks.length === 2) {
      const trackNames = selectedTracks.map(
        (id) => tracks.find((t) => t.id === id)?.name.split(" ")[0],
      );
      const combo = `${trackNames[0]} + ${trackNames[1]}`;
      return sampleProjects[combo] || sampleProjects["Coding + AI"];
    } else {
      return sampleProjects["All Three"];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
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
              <FaSchool className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Digitanotion Innovation Lab for Schools
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose Your Innovation Path
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Coding • AI • Cybersecurity
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Progressive K-20 curriculum that evolves from digital foundations
              to professional innovation. Mix and match tracks to create the
              perfect learning journey for your students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#tracks"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Explore Learning Tracks
                <FiArrowRight className="inline ml-2" />
              </Link>
              <Link
                href="#plans"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </motion.div>

          {/* Track Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${track.color} mb-6`}
                    >
                      <track.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {track.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{track.description}</p>
                    <div className="space-y-2">
                      {Object.entries(track.levels).map(([level, desc]) => (
                        <div key={level} className="text-sm">
                          <span className="font-semibold text-gray-900">
                            {level}:
                          </span>
                          <span className="text-gray-600 ml-2">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section id="tracks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Progressive K-20 Learning Pathways
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Age-appropriate curriculum that grows with your students, from
              digital foundations to professional innovation.
            </p>
          </motion.div>

          {/* Level Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {learningPathways.map((pathway) => (
              <button
                key={pathway.level}
                onClick={() => setActiveLevel(pathway.level)}
                className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
                  activeLevel === pathway.level
                    ? "border-transparent bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "border-gray-300 text-gray-700 hover:border-orange-300"
                }`}
              >
                {pathway.level}
              </button>
            ))}
          </div>

          {/* Active Level Details */}
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 shadow-lg"
          >
            {learningPathways
              .filter((pathway) => pathway.level === activeLevel)
              .map((pathway) => (
                <div key={pathway.level} className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${pathway.color}`}
                      >
                        <pathway.icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {pathway.level}
                        </h3>
                        <p className="text-gray-600">{pathway.focus}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {Object.entries(pathway.tracks).map(
                        ([track, description]) => (
                          <div
                            key={track}
                            className="p-4 rounded-lg bg-white border border-gray-200"
                          >
                            <h4 className="font-bold text-gray-900 mb-2">
                              {track}
                            </h4>
                            <p className="text-gray-600">{description}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200 mb-6">
                      <h4 className="font-bold text-gray-900 mb-4">
                        Capstone Project
                      </h4>
                      <div className="flex items-center gap-3 mb-4">
                        <FiTarget className="text-orange-600" size={24} />
                        <span className="text-lg font-semibold">
                          {pathway.project}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Students apply their learning to create meaningful
                        solutions appropriate for their developmental level.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900">
                        Curriculum Integration
                      </h4>
                      {pathway.level === "Junior Primary" && (
                        <div className="text-sm text-gray-600 space-y-2">
                          <p>• Interactive, play-based learning</p>
                          <p>• Digital safety foundation</p>
                          <p>• Basic computational thinking</p>
                        </div>
                      )}
                      {pathway.level === "Senior Primary" && (
                        <div className="text-sm text-gray-600 space-y-2">
                          <p>• Creative application of concepts</p>
                          <p>• Project-based learning</p>
                          <p>• Cross-disciplinary integration</p>
                        </div>
                      )}
                      {pathway.level === "Secondary" && (
                        <div className="text-sm text-gray-600 space-y-2">
                          <p>• Practical implementation focus</p>
                          <p>• Career pathway exploration</p>
                          <p>• Industry-aligned skills</p>
                        </div>
                      )}
                      {pathway.level === "University" && (
                        <div className="text-sm text-gray-600 space-y-2">
                          <p>• Professional innovation</p>
                          <p>• Research & development</p>
                          <p>• Industry certification preparation</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Track Selection & Pricing */}
      <section
        id="plans"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mix & Match Learning Tracks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your combination of Coding, AI, and Cybersecurity. The more
              tracks you choose, the more integrated and comprehensive the
              learning experience.
            </p>
          </motion.div>

          {/* Plan Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {plans.map((plan, index) => (
              <button
                key={plan.name}
                onClick={() => {
                  setSelectedPlan(index);
                  // Reset tracks if new plan has fewer tracks selected
                  if (selectedTracks.length > plan.tracks) {
                    setSelectedTracks(selectedTracks.slice(0, plan.tracks));
                  }
                }}
                className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
                  selectedPlan === index
                    ? `border-transparent bg-gradient-to-r ${plan.color} text-white`
                    : "border-gray-300 text-gray-700 hover:border-orange-300"
                }`}
              >
                {plan.name} ({plan.tracks} Track{plan.tracks > 1 ? "s" : ""})
              </button>
            ))}
          </div>

          {/* Track Selection */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Select Your {plans[selectedPlan].tracks} Track
              {plans[selectedPlan].tracks > 1 ? "s" : ""}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => handleTrackSelect(track.id)}
                  disabled={
                    !selectedTracks.includes(track.id) &&
                    selectedTracks.length >= plans[selectedPlan].tracks
                  }
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedTracks.includes(track.id)
                      ? `border-transparent bg-gradient-to-br ${track.color} text-white`
                      : "border-gray-300 text-gray-700 hover:border-orange-300"
                  } ${
                    !selectedTracks.includes(track.id) &&
                    selectedTracks.length >= plans[selectedPlan].tracks
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <track.icon size={24} />
                      <span className="font-semibold">{track.name}</span>
                    </div>
                    {selectedTracks.includes(track.id) && (
                      <FiCheck className="text-white" size={20} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  plan.recommended ? "transform md:-translate-y-4" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold">
                      RECOMMENDED
                    </div>
                  </div>
                )}

                <div
                  className={`h-full rounded-2xl border-2 ${
                    plan.recommended
                      ? "border-orange-500 shadow-2xl"
                      : "border-gray-200"
                  } overflow-hidden`}
                >
                  {/* Header */}
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`} />

                  <div className="p-8">
                    {/* Plan Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {plan.tracks} Track{plan.tracks > 1 ? "s" : ""}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                        {plan.badge}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-gray-600">/student/term</span>
                      </div>
                      {plan.tracks > 1 && (
                        <p className="text-sm text-gray-600 mt-2">
                          Save ₦{plan.tracks === 2 ? "2,000" : "6,000"} compared
                          to individual tracks
                        </p>
                      )}
                    </div>

                    {/* Sample Projects */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Sample Projects
                      </h4>
                      <ul className="space-y-2">
                        {getSampleProjects()
                          .slice(0, 3)
                          .map((project, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-700"
                            >
                              <FiCheck className="text-green-500" size={14} />
                              {project}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <FiCheck className="text-green-600" size={12} />
                          </div>
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://wa.me/2348073735836?text=Hi!%20I'm%20interested%20in%20DILS%20for%20my%20school"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 rounded-xl text-center font-bold transition-all ${
                        plan.recommended
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-200"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Pricing Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
              <FaUsersGroup className="text-orange-600" />
              <span className="text-gray-700">
                <strong>Special Group Pricing:</strong> Schools with 55+
                students can request custom pricing
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants.fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Progressive Curriculum Details
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each track follows age-appropriate progression with ethics
              integrated at every level
            </p>
          </motion.div>

          {/* AI Curriculum */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FiCode className="text-purple-600" />
              Artificial Intelligence Pathway
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiCurriculum.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-full bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100">
                        <FaRobot className="text-purple-600" size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900">{level.level}</h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-1">
                          Focus
                        </h5>
                        <p className="text-sm text-gray-600">{level.focus}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-1">
                          Tools & Projects
                        </h5>
                        <ul className="space-y-1">
                          {level.tools.map((tool, idx) => (
                            <li key={idx} className="text-xs text-gray-600">
                              • {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-1">
                          Ethics Integration
                        </h5>
                        <p className="text-xs text-gray-600">{level.ethics}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cybersecurity Curriculum */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FiShield className="text-orange-600" />
              Cybersecurity Pathway
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cyberCurriculum.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-full bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-orange-100 to-red-100">
                        <FiShield className="text-orange-600" size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900">{level.level}</h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-1">
                          Theme
                        </h5>
                        <p className="text-sm text-gray-600">{level.theme}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-1">
                          Activities
                        </h5>
                        <ul className="space-y-1">
                          {level.activities.slice(0, 2).map((activity, idx) => (
                            <li key={idx} className="text-xs text-gray-600">
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-1">
                          Capstone Project
                        </h5>
                        <p className="text-xs text-gray-600">{level.project}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FaLightbulb className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Customize Your Innovation Journey
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Build Future-Ready Students
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Choose the perfect combination of Coding, AI, and Cybersecurity
              for your school. Our progressive K-20 curriculum ensures
              age-appropriate learning with real-world applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348073735836?text=Hi!%20I'm%20interested%20in%20DILS%20for%20my%20school"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                Schedule a School Demo
                <FaWhatsapp className="inline ml-2" />
              </a>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
              >
                View All Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Flexible Tracks",
                  description: "Mix and match Coding, AI, Cybersecurity",
                  icon: FiPackage,
                },
                {
                  title: "Progressive Curriculum",
                  description: "K-20 pathway with age-appropriate content",
                  icon: FiTrendingUp,
                },
                {
                  title: "Integrated Ethics",
                  description: "Ethical considerations at every level",
                  icon: FiHeart,
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 bg-gray-50"
                >
                  <benefit.icon className="text-orange-600 text-2xl mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
