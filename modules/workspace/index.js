// modules/workspace/index.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiMapPin,
  FiClock,
  FiWifi,
  FiCoffee,
  FiPower,
  FiPrinter,
  FiMonitor,
  FiLock,
  FiUsers,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
  FiZap,
  FiTrendingUp,
  FiBriefcase,
  FiSmile,
  FiShield,
  FiStar,
  FiVideo,
  FiAirplay,
  FiDroplet,
  FiWind,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaDeskpro,
  FaChalkboardTeacher,
  FaChair,
  FaBuilding,
  FaCrown,
} from "react-icons/fa";
import { TbDeviceDesktop } from "react-icons/tb";

// WhatsApp contact
const WHATSAPP_NUMBER = "2348073735836";
const WHATSAPP_MESSAGE =
  "Hello%20Digitanotion%2C%20I%27m%20interested%20in%20your%20workspace%20plans";

// Workspace Plans Data
const workspacePlans = [
  {
    id: "shared-desk",
    name: "Shared Desk",
    icon: FiUsers,
    iconBg: "from-blue-500 to-cyan-500",
    price: "₦3,500",
    priceUnit: "per day",
    description:
      "Flexible hot desk in our open workspace. Perfect for freelancers and remote workers.",
    features: [
      "High-speed WiFi (Unlimited)",
      "Power supply",
      "Community events access",
    ],
    capacity: "10 person",
    availability: "Available",
    popular: false,
  },
  {
    id: "special-desk",
    name: "Special Desk",
    icon: FaDeskpro,
    iconBg: "from-orange-500 to-red-500",
    price: "₦6,000",
    priceUnit: "per day",
    description:
      "Dedicated desk just for you. Your personal workspace, always ready.",
    features: [
      "High-speed WiFi (Unlimited)",
      "Dedicated Table and Chair",
      "Water and Snacks",
      "Power supply",
      "Priority event access",
    ],
    capacity: "1 person",
    availability: "Limited",
    popular: true,
    bookedStatus: "3 desks booked",
  },
  {
    id: "classroom-35",
    name: "35-Seater Classroom",
    icon: FaChalkboardTeacher,
    iconBg: "from-purple-500 to-pink-500",
    price: "₦8,500",
    priceUnit: "per hour",
    description:
      "Spacious training room with Television and whiteboard. Ideal for workshops and classes.",
    features: [
      "Led Television",
      "Whiteboard & Markers",
      "High-speed WiFi (Unlimited)",
      "11 Comfortable seats",
      "Power supply",
      "Trainer's desk",
      "Trainer's water and snacks",
    ],
    capacity: "11 persons",
    availability: "Limited",
    bookedStatus: "Booked: Mar 15-25, 2026",
    isBooked: true,
  },
];

// Additional Amenities
const amenities = [
  {
    icon: FiWifi,
    name: "Unlimited Fiber Internet",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiCoffee,
    name: "Water and Snacks",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: FiPower,
    name: "Power Supply",
    color: "from-green-500 to-emerald-500",
  },
];

// Stats
const stats = [
  {
    icon: FiCalendar,
    value: "Daily or Monthly",
    label: "Access",
    description: "For dedicated members",
  },
  {
    icon: FiTrendingUp,
    value: "Unlimited",
    label: "Internet",
    description: "Ultra-fast fiber",
  },
  {
    icon: FiSmile,
    value: "98%",
    label: "Satisfaction",
    description: "Member rating",
  },
];

export default function WorkspacePage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
              <FaBuilding className="text-orange-600" size={18} />
              <span className="text-sm font-semibold text-orange-700">
                Digitanotion Workspace • Awka, Anambra
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Premium
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Workspace in Awka
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Find your perfect workspace at Digitanotion. High-speed internet,
              Power supply, and a thriving community of innovators. Located in
              the heart of Awka, Anambra State.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl hover:shadow-orange-200 transition-all hover:-translate-y-1"
              >
                <FaWhatsapp size={20} />
                Book Your Space on WhatsApp
                <FiArrowRight />
              </button>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition-all"
              >
                View Plans
                <FiArrowRight />
              </a>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-3">
                  <stat.icon className="text-orange-600" size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workspace Plans Section */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Space
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible plans designed for freelancers, teams, and trainers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {workspacePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                className="group relative"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FiStar size={12} />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Booked Overlay for Classroom */}
                {plan.isBooked && (
                  <div className="absolute inset-0 bg-black/60 rounded-2xl z-20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-3">
                        Currently Booked
                      </div>
                      <p className="text-white text-sm">{plan.bookedStatus}</p>
                      <button
                        onClick={handleWhatsApp}
                        className="mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-50 transition"
                      >
                        Check Availability
                      </button>
                    </div>
                  </div>
                )}

                <div
                  className={`h-full bg-white rounded-2xl border border-gray-200 p-6 shadow-lg transition-all ${!plan.isBooked ? "hover:shadow-2xl" : "opacity-80"}`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.iconBg} mb-4`}
                  >
                    <plan.icon className="text-white" size={24} />
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm">
                      /{plan.priceUnit}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>

                  {/* Capacity & Availability */}
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FiUsers size={14} />
                      <span>{plan.capacity}</span>
                    </div>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        plan.availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : plan.availability === "Limited"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {plan.availability}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <FiCheckCircle
                          className="text-green-500 flex-shrink-0"
                          size={14}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {!plan.isBooked && (
                    <button
                      onClick={handleWhatsApp}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp size={18} />
                      Book on WhatsApp
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Booking Status */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <FaChalkboardTeacher className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    12-Seater Classroom
                  </h3>
                  <p className="text-sm text-gray-600">
                    Training room • Workshop space
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <span className="text-gray-600">Current Status</span>
                  <span className="font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    Available
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Next Available</span>
                    <span className="font-bold text-gray-900">
                      March 26, 2026
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Booking</span>
                    <span className="font-bold text-orange-600">
                      Mar 15-25, 2026
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Booked By</span>
                    <span className="font-bold text-gray-900">
                      Corporate Training
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18} />
                Check Future Availability
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a productive workday
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 p-4 text-center hover:shadow-md transition-all"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${amenity.color} mb-3`}
                >
                  <amenity.icon className="text-white" size={20} />
                </div>
                <p className="font-medium text-gray-900 text-sm">
                  {amenity.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 mb-6">
                <FiMapPin className="text-orange-600" size={18} />
                <span className="text-sm font-semibold text-orange-700">
                  Find Us
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Conveniently Located in Awka
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                Suite 6, Mgbajiaka Area, Along Onitsha-Enugu Expressway,
                opposite East-End Hotel, Awka, Anambra State.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <FiClock className="text-orange-500" />
                  <span>Open: Monday-Friday, 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FiShield className="text-orange-500" />
                  <span>24/7 Security & Power Backup</span>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-xl transition-all"
              >
                <FaWhatsapp size={20} />
                Book Your Space Now
                <FiArrowRight />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-200">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789012!2d7.0861492!3d6.2281087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104383e159d8d45b%3A0x4ec051752de34136!2sDigitanotion%20Limited!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Digitanotion Workspace Location"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Hidden Content */}
      <div className="sr-only" aria-hidden="false">
        <h1>
          Digitanotion Workspace - Premium Coworking Space in Awka, Anambra
        </h1>
        <h2>Best Workspace in Awka for Freelancers and Teams</h2>
        <p>
          Looking for a workspace in Awka? Digitanotion offers premium coworking
          spaces including shared desks, dedicated special desks, and a
          35-seater classroom. Located in Aroma, Awka, Anambra State. High-speed
          internet, Power Supply.
        </p>
        <ul>
          <li>Coworking space Awka</li>
          <li>Shared desk Awka</li>
          <li>Dedicated desk Anambra</li>
          <li>Workspace for rent Awka</li>
          <li>Office space Anambra State</li>
          <li>Training room rental Awka</li>
          <li>Conference room Awka</li>
          <li>Hot desk Awka</li>
          <li>Private workspace Anambra</li>
          <li>Affordable workspace Nigeria</li>
        </ul>
        <h3>Location Keywords</h3>
        <p>
          Workspace Awka, Aroma Awka workspace, coworking space near me Anambra,
          office space for rent Awka, meeting room Awka, training hall Awka,
          Digitanotion workspace, best coworking space Awka
        </p>
      </div>
    </div>
  );
}
