"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShield,
  FiCpu,
  FiUsers,
  FiTarget,
  FiAward,
  FiGlobe,
  FiTrendingUp,
  FiArrowRight,
  FiHeart,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";
import {
  FaHandshake,
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";

const stats = [
  { icon: FaBuilding, value: "2019", label: "Founded", desc: "Our birth year" },
  { icon: FiGlobe, value: "001", label: "Offices", desc: "Around the world" },
  {
    icon: FiUsers,
    value: "1,000+",
    label: "Happy Clients",
    desc: "Satisfied partners",
  },
  {
    icon: FiAward,
    value: "4.9★",
    label: "Client Rating",
    desc: "Excellent service",
  },
];

const pillars = [
  {
    title: "Security",
    icon: FiShield,
    description:
      "Expert cybersecurity services protecting businesses from evolving online threats.",
    color: "from-red-500 to-orange-500",
    highlights: [
      "Advanced threat protection",
      "Vulnerability assessments",
      "Incident response",
      "Security consulting",
    ],
  },
  {
    title: "Innovation",
    icon: FiCpu,
    description:
      "Custom applications, websites, and cloud solutions that drive business growth.",
    color: "from-orange-500 to-amber-500",
    highlights: [
      "Custom software development",
      "Cloud solutions",
      "Digital transformation",
      "Tech consulting",
    ],
  },
  {
    title: "Skills Development",
    icon: FaGraduationCap,
    description:
      "Developing tech talent required to implement and sustain secure digital foundations.",
    color: "from-amber-500 to-yellow-500",
    highlights: [
      "Tech training programs",
      "Professional certifications",
      "Talent development",
      "Career placement",
    ],
  },
];

const sasiPrinciples = [
  {
    letter: "S",
    word: "Simplicity",
    description:
      "No jargon, no complexity. We deliver straightforward solutions that just work.",
    icon: FaLightbulb,
  },
  {
    letter: "A",
    word: "Affordability",
    description:
      "Premium quality doesn't have to mean premium prices. We make excellence accessible.",
    icon: FaChartLine,
  },
  {
    letter: "S",
    word: "Security",
    description:
      "Every solution is built with security as a foundation, not an afterthought.",
    icon: FiShield,
  },
  {
    letter: "I",
    word: "Impact",
    description:
      "Measurable results that drive growth, efficiency, and competitive advantage.",
    icon: FaRocket,
  },
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
      ease: [0.16, 1, 0.3, 1],
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
      damping: 20,
    },
  },
};

export default function AboutDigitanotion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FaBuilding className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Digitanotion Limited • Since 2019
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building Digital and People
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              A leading Cybersecurity and Tech Innovation Center committed to
              securing businesses, driving innovation, and developing
              world-class tech talent across Africa.
            </p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
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
                  <div className="text-sm font-semibold text-gray-700">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
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
                  Who We Are
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Cybersecurity & Tech Innovation Center
              </h2>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  We are committed to building digital resilience for our
                  clients by focusing on three key pillars:{" "}
                  <strong className="text-orange-600">
                    Security, Innovation, and Skills Development
                  </strong>
                  .
                </p>
                <p>
                  We secure businesses from evolving online threats through
                  expert cybersecurity services. We drive innovation by building
                  custom applications, websites, and cloud solutions that enable
                  growth.
                </p>
                <p>
                  Finally, we close the skills gap by developing the tech talent
                  required to implement and sustain a secure, modern digital
                  foundation.
                </p>
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                    <FaHandshake className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our SASI Promise
                    </h3>
                    <p className="text-gray-600">
                      Guiding principles behind everything we do
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {sasiPrinciples.map((principle, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-100"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-orange-600">
                          {principle.letter}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {principle.word}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Pillars
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three integrated approaches to building complete digital
              resilience
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
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.color} mb-6`}
                  >
                    <pillar.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{pillar.description}</p>

                  <ul className="space-y-3">
                    {pillar.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <FiCheckCircle className="text-green-500" size={18} />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Statement & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* CEO Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 border border-orange-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                    <FiStar className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      CEO Statement
                    </h3>
                    <p className="text-gray-600">Our definition of value</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="text-2xl font-bold text-gray-800 italic mb-6 leading-relaxed">
                    "To me value means a secure, sustainable fix to what's
                    broken or needed, delivered seamlessly and affordably."
                  </div>

                  {/* <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-200 to-red-200 flex items-center justify-center">
                      <span className="text-xl font-bold text-orange-600">
                        CE
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Chukwuemeka Eze
                      </div>
                      <div className="text-gray-600">CEO & Founder</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>

            {/* Company History */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FaChartLine className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Company History
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Journey Since 2019
              </h3>

              <div className="space-y-4 text-gray-600">
                <p>
                  Digitanotion was founded in 2019, born from a clear vision to
                  change the technology landscape in Southeastern Nigeria.
                </p>
                <p>
                  Witnessing a heavy reliance on foreign tech products and
                  talent, our founder identified a critical barrier to progress:
                  low local technology adoption, hindered by a lack of
                  understanding, access, and effective use.
                </p>
                <p>
                  Formally incorporated in 2023, Digitanotion was built with a
                  mission to end this dependency by developing local solutions
                  and cultivating local talent.
                </p>
                <p className="font-semibold text-orange-600">
                  We believe in building self-sufficiency and proudly exporting
                  homegrown tech products and skilled professionals worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FaLightbulb className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                The Problem We're Fixing
              </span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Challenges in Africa's Tech Ecosystem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Brain Drain",
                description:
                  "The region's best tech minds seek opportunities abroad, creating a scarce talent pool locally.",
                icon: FiUsers,
              },
              {
                title: "Import Dependency",
                description:
                  "A scarcity of affordable, homegrown innovation for local challenges, leading to sustained capital flight.",
                icon: FiTrendingUp,
              },
              {
                title: "Security Gaps",
                description:
                  "Organizations face escalating cyber threats but lack in-house expertise and security awareness.",
                icon: FiShield,
              },
              {
                title: "Low Tech Adoption",
                description:
                  "Lack of understanding, limited access, and ineffective usage prevent digital transformation.",
                icon: FiCpu,
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-orange-100 to-red-100 mb-4">
                  <problem.icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 border border-orange-200"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
                  <FiTarget className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">Where we're headed by 2035</p>
                </div>
              </div>

              <div className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
                To be Africa's leading force in cybersecurity and digital
                innovation, building secure, transformative solutions and
                nurturing world-class talent to define a resilient global
                digital future.
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    year: "2035",
                    title: "#1 in Cybersecurity",
                    icon: FiShield,
                  },
                  {
                    year: "2035",
                    title: "Top 10 Talent Developer",
                    icon: FaGraduationCap,
                  },
                  { year: "2035", title: "#1 IT Innovation", icon: FiCpu },
                ].map((goal, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-white border border-orange-200"
                  >
                    <div className="text-sm font-semibold text-orange-600 mb-1">
                      {goal.year}
                    </div>
                    <div className="text-xs text-gray-600">{goal.title}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FaRocket className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Our Mission
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What Drives Us Daily
              </h3>

              <div className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
                Securing valuable assets, building resilient products,
                developing globally competitive tech talent, all from within our
                local ecosystem.
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="p-2 rounded-lg bg-white border border-orange-200">
                    <FiCheckCircle className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      All-in-One Resilience
                    </h4>
                    <p className="text-sm text-gray-600">
                      Get cybersecurity, custom software, and talent development
                      from a single partner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="p-2 rounded-lg bg-white border border-orange-200">
                    <FaHandshake className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      The SASI Guarantee
                    </h4>
                    <p className="text-sm text-gray-600">
                      Simple, Affordable, Secure, and Impactful solutions with
                      clear results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="p-2 rounded-lg bg-white border border-orange-200">
                    <FiHeart className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Depth & Purpose
                    </h4>
                    <p className="text-sm text-gray-600">
                      More than a vendor – passionate experts invested in your
                      success and Africa's growth.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Our Clients Choose Us
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Our clients choose Digitanotion for a simple, powerful reason:
                we provide an integrated solution others can't. We don't just
                complete projects, we build lasting digital strength.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
                >
                  Partner With Us
                  <FiArrowRight className="inline ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO: Hidden Content for Search Engines */}
      <div className="sr-only" aria-hidden="false">
        <h1>
          About Digitanotion Limited - Cybersecurity & Tech Innovation Center
        </h1>
        <h2>Leading Digital Resilience Solutions in Africa</h2>
        <p>
          Digitanotion Limited is a leading Cybersecurity and Tech Innovation
          Center founded in 2019, specializing in Security, Innovation, and
          Skills Development. Based in Nigeria with global reach, we provide
          integrated digital resilience solutions for businesses across Africa.
        </p>
        <ul>
          <li>
            Cybersecurity Services: Advanced threat protection and security
            consulting
          </li>
          <li>Tech Innovation: Custom App development and cloud solutions</li>
          <li>
            Skills Development: Tech talent training and professional
            certification
          </li>
          <li>SASI Principles: Simplicity, Affordability, Security, Impact</li>
          <li>Founded: 2019 | Incorporated: 2023</li>
          <li>Clients: 1000+ satisfied businesses across Africa</li>
          <li>
            Mission: Building digital resilience and developing local tech
            talent
          </li>
          <li>
            Vision: Africa's leading force in cybersecurity and digital
            innovation
          </li>
          <li>Solutions: End-to-end digital transformation services</li>
          <li>Expertise: Cybersecurity, App Development, Talent Development</li>
        </ul>
        <h3>Keywords</h3>
        <p>
          Cybersecurity Africa, Tech Innovation Nigeria, Digital Resilience, App
          Development Nigeria, Tech Talent Training, Cloud Solutions Africa,
          Cybersecurity Services, Digital Transformation, Tech Education, IT
          Consulting Africa, Mobile App Development, Web Development,
          Cybersecurity Training, Tech Innovation Center, IT Solutions Provider,
          Internships
        </p>
      </div>
    </div>
  );
}
