"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiGlobe, 
  FiUsers, 
  FiAward, 
  FiShield,
  FiTarget,
  FiHeart,
  FiTrendingUp,
  FiArrowRight
} from "react-icons/fi";
import { FaHandshake, FaGraduationCap, FaStar } from "react-icons/fa";

const initiatives = [
  {
    id: "cysap",
    title: "CySAP Africa",
    tagline: "#1 Cybersecurity Awareness Project in Africa",
    icon: FiShield,
    color: "from-blue-500 to-cyan-500",
    stats: [
      { label: "Schools Visited", value: "15+" },
      { label: "Daily Tips Shared", value: "500+" },
      { label: "Students Reached", value: "1,500+" }
    ],
    highlights: [
      "Leading Africa's Cybersecurity Awareness Month activities",
      "Teaching basic cyber hygiene in schools across Africa",
      "Daily security tips and educational content"
    ],
    description: "Africa's foremost cybersecurity awareness initiative, consistently leading cybersecurity education with daily tips and school outreach programs.",
    image: "/images/cysap-school.jpg",
    link: "/cysapafrica"
  },
  {
    id: "tech6",
    title: "Tech6Project",
    tagline: "From Learning to Earning",
    icon: FaGraduationCap,
    color: "from-orange-500 to-red-500",
    stats: [
      { label: "Graduates Mentored", value: "100+" },
      { label: "Real Projects", value: "3+" },
      { label: "Job Placements", value: "85%" }
    ],
    highlights: [
      "6-month intensive real-world experience",
      "Bridging theory with practical app development",
      "Website & mobile app project portfolios"
    ],
    description: "Transforming tech graduates into industry-ready professionals through hands-on project experience and mentorship.",
    image: "/images/tech6project1.jpg",
    link: "/tech6project"
  },
  {
    id: "cyber-mentorship",
    title: "Free Cybersecurity Mentorship",
    tagline: "Empowering Africa's Cyber Defenders",
    icon: FiUsers,
    color: "from-purple-500 to-pink-500",
    stats: [
      { label: "Participants", value: "1,000+" },
      { label: "African Countries", value: "4+" },
      { label: "Completion Rate", value: "92%" }
    ],
    highlights: [
      "Free 5-week remote mentorship program",
      "Vulnerability Assessment & Penetration Testing",
      "Pan-African cybersecurity community"
    ],
    description: "Democratizing cybersecurity education across Africa with free, accessible mentorship for aspiring professionals.",
    image: "/images/cyber-mentorship.jpg",
    link: "#"
  }
];

const stats = [
  { icon: FiGlobe, value: "4+", label: "African Countries Reached" },
  { icon: FiUsers, value: "2,000+", label: "Individuals Impacted" },
  { icon: FaHandshake, value: "50+", label: "Community Partners" },
  { icon: FiAward, value: "4.9★", label: "Community Rating" }
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

export default function CommunityInitiatives() {
  return (
    <section className="relative py-20 lg:px-16 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-blue-50/20" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
            <FaHandshake className="text-orange-600" size={18} />
            <span className="text-sm font-semibold text-orange-700">
              Community First • Non-Profit Initiatives
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building Africa's Digital Future,<br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              One Community at a Time
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            At Digitanotion, we believe in a <span className="font-semibold text-orange-600">community-first business model</span>. 
            Our non-profit initiatives are the heart of our mission—creating impact where it matters most.
          </p>
          
          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                  <stat.icon className="text-orange-600" size={20} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Initiatives Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40 z-10" />
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${initiative.color} text-white text-sm font-semibold z-20`}>
                    {initiative.tagline}
                  </div>
                  
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <initiative.icon className="text-gray-400" size={48} />
                    <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                      {/* Photo placeholder text */}
                      {initiative.id === "cysap" && "Students learning cybersecurity"}
                      {initiative.id === "tech6" && "Graduates working on projects"}
                      {initiative.id === "cyber-mentorship" && "Remote mentorship session"}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {initiative.description}
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${initiative.color} shadow-lg`}>
                      <initiative.icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {initiative.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {initiative.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FaStar className="text-orange-500 mt-1 flex-shrink-0" size={14} />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={initiative.link}
                    className="inline-flex items-center justify-between w-full px-6 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-300 group-hover:border-orange-300 transition-all"
                  >
                    <span className="font-semibold text-gray-900">
                      Learn More
                    </span>
                    <FiArrowRight className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-2 transition-all" size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl border border-orange-200 p-10 md:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <FiTarget className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Why Community Comes First
                  </h3>
                  <p className="text-gray-600">
                    Our business model is built on a simple truth: when communities thrive, businesses grow.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-orange-200">
                      <FiHeart className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sustainable Impact</h4>
                      <p className="text-sm text-gray-600">Creating lasting change through education</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-orange-200">
                      <FiTrendingUp className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Talent Pipeline</h4>
                      <p className="text-sm text-gray-600">Nurturing Africa's next tech leaders</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-orange-200">
                      <FiGlobe className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pan-African Reach</h4>
                      <p className="text-sm text-gray-600">Impact across 4+ African countries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-orange-200">
                      <FaHandshake className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Collaborative Growth</h4>
                      <p className="text-sm text-gray-600">Partnering with communities for mutual success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 text-center">
              <div className="inline-flex flex-col items-center p-8 bg-white rounded-2xl border border-orange-200 shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">1,000+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Lives Impacted</div>
                <p className="text-sm text-gray-600">
                  Through our community initiatives since 2019
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in building a digitally resilient Africa through education, mentorship, and community empowerment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
            >
              Explore All Initiatives
            </Link>
            <Link
              href="/get-involved"
              className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
            >
              Get Involved
            </Link>
          </div>
        </motion.div>
      </div>

      {/* SEO: Hidden Content for Search Engines */}
      <div className="sr-only" aria-hidden="false">
        <h1>Community First Initiatives - Digitanotion</h1>
        <h2>Non-Profit Community Projects in Africa</h2>
        <p>
          Digitanotion's community-first business model drives impactful non-profit initiatives across Africa: 
          CySAP Africa cybersecurity awareness, Tech6Project graduate mentorship, and free cybersecurity training.
        </p>
        <ul>
          <li>CySAP Africa: #1 Cybersecurity Awareness Project in Africa</li>
          <li>Tech6Project: Bridging learning to earning for tech graduates</li>
          <li>Free Cybersecurity Mentorship: 1000+ participants across Africa</li>
          <li>Community Impact: 1,000+ lives transformed since 2019</li>
          <li>Pan-African Reach: Operating in 5+ African countries</li>
          <li>Non-Profit Focus: Putting communities before profits</li>
        </ul>
      </div>
    </section>
  );
}