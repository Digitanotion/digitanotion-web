"use client";

import { motion } from "framer-motion";
import { 
  FiAlertTriangle, 
  FiUsers, 
  FiShield, 
  FiGlobe,
  FiTarget,
  FiTrendingUp,
  FiCode,
  FiZap
} from "react-icons/fi";
import { FaBrain, FaHandshake, FaChartLine } from "react-icons/fa";

const problemsData = [
  {
    icon: FiAlertTriangle,
    title: "Fragmented Digital Systems",
    color: "from-orange-500 to-red-500",
    problem: "Businesses rely on weak, fragmented digital systems while the region's best tech minds seek opportunities abroad.",
    stat: "A scarce talent pool",
    detail: "The demand for skilled tech professionals in Africa is greater than the available supply, leading to brain drain and talent shortages."
  },
  {
    icon: FiCode,
    title: "Capital Flight & Innovation Gap",
    color: "from-red-500 to-pink-500",
    problem: "A scarcity of affordable, homegrown innovation for local challenges.",
    stat: "$Billions in capital flight",
    detail: "Sustained spending flows to foreign software and services, draining local economies and limiting indigenous solutions."
  },
  {
    icon: FiShield,
    title: "Cybersecurity Vulnerabilities",
    color: "from-purple-500 to-indigo-500",
    problem: "Organizations face escalating cyber threats but lack in-house expertise, security awareness, and community support.",
    stat: "Weak defense systems",
    detail: "Limited understanding and resources prevent effective protection against growing digital threats."
  }
];

const solutionsData = [
  {
    year: "2035",
    title: "Africa's Cybersecurity Leader",
    description: "Digitanotion is Africa's leading force in Cybersecurity",
    color: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-200"
  },
  {
    year: "2035",
    title: "#1 Tech Talent Developer",
    description: "Ranking among the top 10 tech talent developers in the world",
    color: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
    borderColor: "border-red-200"
  },
  {
    year: "2035",
    title: "IT Innovation Powerhouse",
    description: "Africa's leading force in Information Technology Innovation",
    color: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-200"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
};

const statVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const iconVariants = {
  hover: {
    rotate: 15,
    scale: 1.1,
    transition: { type: "spring", stiffness: 400 }
  }
};

export default function ProblemSection() {
  return (
    <section className="relative py-20 lg:px-16 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-red-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-4">
            <FiAlertTriangle className="text-orange-600" size={18} />
            <span className="text-sm font-semibold text-orange-700">
              The Problem We're Fixing
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building Africa's Digital Resilience
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're addressing critical gaps in Africa's digital ecosystem—transforming 
            challenges into opportunities through security, innovation, and community.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problemsData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-transparent relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                
                {/* Icon Container */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="mb-6"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <motion.div
                  variants={statVariants}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 mb-4"
                >
                  <span className="text-sm font-semibold text-gray-700">
                    {item.stat}
                  </span>
                </motion.div>
                
                <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                  {item.problem}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.detail}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Culture & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl border border-orange-200 p-10 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Community Focus */}
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                    <FaHandshake className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Culture is Rooted in Community
                  </h3>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We cultivate an environment of collaboration and support, championing 
                  community initiatives that drive tangible impact. This is the foundation 
                  of our ethos: <span className="font-bold text-orange-600">Our money is with the people.</span>
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {["Collaboration", "Support", "Impact", "Community"].map((value, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 rounded-full bg-white border border-orange-200 text-orange-700 font-medium text-sm"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Vision Arrow */}
              <div className="lg:w-1/3 text-center">
                <div className="inline-flex flex-col items-center">
                  <FiTarget className="text-orange-500 mb-4" size={40} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    Vision 2035
                  </div>
                  <p className="text-gray-600">
                    Building Africa's Digital Future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2035 Vision Grid. Ok chang*/}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutionsData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Year Badge */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                <div className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {item.year}
                  </span>
                </div>
              </div>
              
              {/* Vision Card */}
              <div className={`h-full ${item.color} rounded-2xl border ${item.borderColor} p-8 pt-12 shadow-xl backdrop-blur-sm`}>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/80 shadow-lg mb-4">
                    <FiZap className="text-orange-600" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-semibold text-orange-600">On Track</span>
                  </div>
                  <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${50 + index * 10}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${item.color.replace('/20', '')}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <FaChartLine className="text-orange-600" size={24} />
            <span className="text-lg font-semibold text-gray-700">
              Borrow Our Lens
            </span>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            See Africa's digital future through our perspective—where every challenge 
            is an opportunity for growth, innovation, and community empowerment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1">
              Join Our Mission
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all">
              Learn About Solutions
            </button>
          </div>
        </motion.div>
      </div>

      {/* SEO: Hidden Content for Search Engines */}
      <div className="sr-only" aria-hidden="false">
        <h1>The Problem We're Fixing - Digitanotion</h1>
        <h2>Addressing Africa's Digital Challenges</h2>
        <p>
          Digitanotion tackles critical issues in Africa's tech ecosystem: talent shortage, 
          capital flight, cybersecurity vulnerabilities, and digital adoption gaps. 
          We provide solutions through community-focused innovation.
        </p>
        <ul>
          <li>Solving Africa's tech talent shortage</li>
          <li>Reducing capital flight through local innovation</li>
          <li>Strengthening cybersecurity across African businesses</li>
          <li>Increasing digital adoption through education</li>
          <li>Building community-driven tech solutions</li>
          <li>Vision 2035: Africa's leading tech force</li>
        </ul>
      </div>
    </section>
  );
}