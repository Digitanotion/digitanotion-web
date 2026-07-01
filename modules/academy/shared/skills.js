"use client";

import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";

/**
 * Shared skills grid. Takes any course's `modules` array and renders the
 * deduplicated union of every module's `skills` list.
 */
export default function CourseSkills({ modules }) {
  const skills = Array.from(new Set(modules.flatMap((m) => m.skills)));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills You'll Walk Away With</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real, practical skills you can use right away — built through every step above.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <HiBadgeCheck className="text-lg text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">{skill}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}