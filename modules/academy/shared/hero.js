"use client";

import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
  HiOutlineBeaker,
  HiBadgeCheck,
} from "react-icons/hi";
import { FiClock, FiTarget } from "react-icons/fi";
import { MdOutlineOnlinePrediction } from "react-icons/md";

/**
 * Shared course hero. Works for any Academy course as long as `data` follows
 * the shared schema: { hero, location, cohorts, learningOutcomes, beforeYouStart }.
 * No pricing table here by design — just a teaser + a CTA into the path builder.
 */
export default function CourseHero({ data }) {
  const { hero, location, cohorts, learningOutcomes, beforeYouStart } = data;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 mb-8">
          <a href="/academy" className="text-blue-400 hover:text-blue-300">
            Academy
          </a>
          <span className="text-gray-500">/</span>
          <span className="text-gray-300 font-medium">{hero.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Open for enrollment
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {hero.level}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{hero.title}</h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{hero.tagline}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <FiClock className="text-blue-400" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{hero.durationLabel}</div>
                  <div className="text-sm text-gray-400">Duration</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-900/30 rounded-lg">
                  <MdOutlineOnlinePrediction className="text-green-400" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{location.typeLabel}</div>
                  <div className="text-sm text-gray-400">Where you learn</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-900/30 rounded-lg">
                  <FiTarget className="text-purple-400" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{hero.level}</div>
                  <div className="text-sm text-gray-400">Level</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-900/30 rounded-lg">
                  <HiOutlineBeaker className="text-amber-400" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">{hero.labCountLabel}</div>
                  <div className="text-sm text-gray-400">Practical</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
              <div className="text-lg font-semibold text-white mb-1">{hero.startingFromLabel}</div>
              <p className="text-gray-300 text-sm mb-4">
                Take it step by step, or all at once — you choose what fits your budget.
              </p>
              <a
                href={hero.ctaTarget}
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                {hero.ctaLabel}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What you'll achieve</h3>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <HiBadgeCheck className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <HiOutlineClock /> Class times
                  </h4>
                  <p className="text-gray-300">{location.scheduleLabel}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <HiOutlineCalendar /> Next class starts
                  </h4>
                  <p className="text-gray-300 mb-2">{cohorts.nextStartLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {cohorts.upcoming.map((c, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <HiOutlineLocationMarker /> Where you can learn
                  </h4>
                  <p className="text-gray-300">
                    <span className="font-medium text-white">Onsite:</span> {location.onsiteDetails}
                  </p>
                  <p className="text-gray-300 mt-1">
                    <span className="font-medium text-white">Online:</span> {location.onlineDetails}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <HiOutlineAcademicCap /> Before you start
                  </h4>
                  <p className="text-gray-300">{beforeYouStart}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}