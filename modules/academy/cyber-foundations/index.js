"use client";

import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
  HiBadgeCheck,
} from "react-icons/hi";
import { FiClock, FiTarget } from "react-icons/fi";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { HiOutlineBeaker } from "react-icons/hi";
import FAQ from "./faq";
import { Details } from "../details";
import PathBuilder from "./path-builder";
import courseData from "./data.json";

export default function CybersecurityFoundations() {
  const { hero, location, cohorts, learningOutcomes, beforeYouStart, modules } = courseData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero hero={hero} location={location} cohorts={cohorts} learningOutcomes={learningOutcomes} beforeYouStart={beforeYouStart} />
      <PathBuilder />
      <Skills modules={modules} />
      <Details />
      <FAQ />
    </div>
  );
}

function Hero({ hero, location, cohorts, learningOutcomes, beforeYouStart }) {
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

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {hero.title}
            </h1>

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

            {/* Teaser price + CTA, no pricing table */}
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

function Skills({ modules }) {
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