// modules/academy/shared/hero.js
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
import { getTheme } from "./themes";

/**
 * Shared course hero. Works for any Academy course as long as `data` follows
 * the shared schema: { hero, location, cohorts, learningOutcomes, beforeYouStart }.
 * No pricing table here by design — just a teaser + a CTA into the path builder.
 *
 * Visual theme is picked via data.theme (see ./themes.js). Defaults to "midnight".
 */
export default function CourseHero({ data }) {
  const { hero, location, cohorts, learningOutcomes, beforeYouStart } = data;
  const t = getTheme(data.theme);
  const icons = [FiClock, MdOutlineOnlinePrediction, FiTarget, HiOutlineBeaker];
  const iconLabels = [hero.durationLabel, location.typeLabel, hero.level, hero.labCountLabel];
  const iconCaptions = ["Duration", "Where you learn", "Level", "Practical"];

  return (
    <section className={`relative overflow-hidden ${t.heroBg}`}>
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-50 ${t.heroOrb1}`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-50 ${t.heroOrb2}`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <nav className="flex items-center gap-2 mb-8">
          <a href="/academy" className={t.heroLink}>
            Academy
          </a>
          <span className="text-gray-400">/</span>
          <span className={`font-medium ${t.heroBreadcrumbCurrent}`}>{hero.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Open for enrollment
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${t.heroLevelBadge}`}>{hero.level}</span>
            </div>

            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${t.heroHeading}`}>{hero.title}</h1>

            <p className={`text-xl mb-8 leading-relaxed ${t.heroBody}`}>{hero.tagline}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {icons.map((Icon, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${t.heroIcons[i].box}`}>
                    <Icon className={t.heroIcons[i].icon} size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold ${t.heroHeading}`}>{iconLabels[i]}</div>
                    <div className="text-sm text-gray-400">{iconCaptions[i]}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl p-6 border ${t.heroTeaserCard}`}>
              <div className={`text-lg font-semibold mb-1 ${t.heroTeaserHeading}`}>{hero.startingFromLabel}</div>
              <p className={`text-sm mb-4 ${t.heroTeaserBody}`}>
                Take it step by step, or all at once — you choose what fits your budget.
              </p>
              <a
                href={hero.ctaTarget}
                className={`inline-flex items-center justify-center w-full px-6 py-4 text-white font-bold rounded-xl hover:shadow-lg transition-all ${t.heroCtaButton}`}
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
            <div className={`backdrop-blur-sm rounded-2xl border p-8 shadow-xl ${t.heroPanel}`}>
              <div className="mb-8">
                <h3 className={`text-lg font-semibold mb-4 ${t.heroPanelHeading}`}>What you'll achieve</h3>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <HiBadgeCheck className={`mt-1 flex-shrink-0 ${t.heroBulletCheck}`} />
                      <span className={t.heroPanelBody}>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`font-semibold mb-3 flex items-center gap-2 ${t.heroPanelHeading}`}>
                    <HiOutlineClock /> Class times
                  </h4>
                  <p className={t.heroPanelBody}>{location.scheduleLabel}</p>
                </div>

                <div>
                  <h4 className={`font-semibold mb-3 flex items-center gap-2 ${t.heroPanelHeading}`}>
                    <HiOutlineCalendar /> Next class starts
                  </h4>
                  <p className={`mb-2 ${t.heroPanelBody}`}>{cohorts.nextStartLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {cohorts.upcoming.map((c, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm ${t.heroPill}`}>
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold mb-3 flex items-center gap-2 ${t.heroPanelHeading}`}>
                    <HiOutlineLocationMarker /> Where you can learn
                  </h4>
                  <p className={t.heroPanelBody}>
                    <span className={`font-medium ${t.heroPanelHeading}`}>Onsite:</span> {location.onsiteDetails}
                  </p>
                  <p className={`mt-1 ${t.heroPanelBody}`}>
                    <span className={`font-medium ${t.heroPanelHeading}`}>Online:</span> {location.onlineDetails}
                  </p>
                </div>

                <div>
                  <h4 className={`font-semibold mb-3 flex items-center gap-2 ${t.heroPanelHeading}`}>
                    <HiOutlineAcademicCap /> Before you start
                  </h4>
                  <p className={t.heroPanelBody}>{beforeYouStart}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}