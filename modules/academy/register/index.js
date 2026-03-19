"use client";

import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiMapPin, FiCalendar, FiShield } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function RegisterInterest() {
  const [iframeHeight, setIframeHeight] = useState(700);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIframeHeight(750); // Mobile
      } else if (window.innerWidth < 1024) {
        setIframeHeight(700); // Tablet
      } else {
        setIframeHeight(680); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Simple Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-100/30 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl"
        >
          {/* Simple Header */}
          <div className="text-center mb-4 sm:mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mb-3"
            >
              <HiOutlineAcademicCap className="text-orange-600 text-2xl sm:text-3xl" />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Register Your Interest
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Join our next cohort • Limited seats available
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl opacity-20 blur-xl" />

            {/* Main Card */}
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
              {/* Top Accent */}
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500" />

              {/* Quick Info Bar */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FiMapPin className="text-orange-500" />
                  <span>Onsite(Awka) • Online</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FiCalendar className="text-orange-500" />
                  <span>Next start: Apr 10, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FiShield className="text-orange-500" />
                  <span>Secure form</span>
                </div>
              </div>

              {/* Google Form Container */}
              <div className="p-3 sm:p-4">
                <div
                  className="overflow-y-auto rounded-xl border border-gray-100"
                  style={{
                    height: iframeHeight,
                    maxHeight: "calc(100vh - 250px)",
                  }}
                >
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScNlJ6BI_jJKzMJCx5o7cT2EBfZZXWykT0A-G8NjBboskCKjQ/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Registration Form"
                    className="min-h-[600px]"
                  >
                    Loading form...
                  </iframe>
                </div>

                {/* Simple Footer */}
                <p className="text-center text-xs text-gray-400 mt-4">
                  By submitting, you agree to be contacted about our programs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Back Link */}
          <div className="text-center mt-4">
            <a
              href="/academy"
              className="text-xs sm:text-sm text-gray-400 hover:text-orange-600 transition-colors"
            >
              ← Back to Academy
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
