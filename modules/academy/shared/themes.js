// modules/academy/shared/themes.js

/**
 * Named theme registry for Academy course pages.
 *
 * Every class string here is written out literally (not constructed from
 * variables) so Tailwind's JIT compiler can find them at build time. Do NOT
 * build class names dynamically like `text-${color}-600` anywhere in the
 * shared components — always add a new named theme here instead.
 *
 * To theme a course, set `"theme": "midnight" | "ember"` in its data.json.
 * Unset or unrecognised values fall back to "midnight".
 *
 * - midnight: dark, blue/purple — Cybersecurity Foundations, SOC Analyst 1
 * - ember:    light, orange/red/amber — Ethical Hacking, Data Analysis
 */
export const THEMES = {
  midnight: {
    heroBg: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
    heroOrb1: "bg-purple-900/30",
    heroOrb2: "bg-blue-900/30",
    heroLink: "text-blue-400 hover:text-blue-300",
    heroBreadcrumbCurrent: "text-gray-300",
    heroLevelBadge: "bg-blue-100 text-blue-800",
    heroHeading: "text-white",
    heroBody: "text-gray-300",
    heroIcons: [
      { box: "bg-blue-900/30", icon: "text-blue-400" },
      { box: "bg-green-900/30", icon: "text-green-400" },
      { box: "bg-purple-900/30", icon: "text-purple-400" },
      { box: "bg-amber-900/30", icon: "text-amber-400" },
    ],
    heroTeaserCard: "bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700",
    heroTeaserHeading: "text-white",
    heroTeaserBody: "text-gray-300",
    heroCtaButton: "bg-gradient-to-r from-blue-600 to-purple-600",
    heroPanel: "bg-gray-800/50 border-gray-700",
    heroPanelHeading: "text-white",
    heroPanelBody: "text-gray-300",
    heroBulletCheck: "text-green-400",
    heroPill: "bg-gray-700 text-gray-300",

    modeFullActive: "border-teal-500 bg-teal-50 shadow-lg",
    modeFullIdle: "border-gray-200 bg-white hover:border-teal-200",
    modeFullBadge: "text-teal-700 bg-teal-100",
    modeFullCheck: "text-teal-600",
    modeCustomActive: "border-purple-500 bg-purple-50 shadow-lg",
    modeCustomIdle: "border-gray-200 bg-white hover:border-purple-200",
    modeCustomBadge: "text-purple-700 bg-purple-100",
    modeCustomCheck: "text-purple-600",
    checkboxSelected: "bg-purple-600 border-purple-600",
    learnLink: "text-blue-700 hover:text-blue-900",
    learnCheck: "text-teal-600",
    accentText: "text-teal-700",

    skillIcon: "bg-blue-50 group-hover:bg-blue-100 text-blue-600",
    skillHoverBorder: "hover:border-blue-300",

    faqNumberBadge: "bg-blue-100 text-blue-600",
    faqHoverBorder: "hover:border-blue-200",
    faqHoverBg: "hover:bg-blue-50",
    faqChevron: "text-blue-600",
    faqCtaCard: "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200",
    faqCtaButton: "bg-gradient-to-r from-blue-600 to-purple-600",
  },

  ember: {
    heroBg: "bg-gradient-to-br from-orange-50 via-white to-red-50",
    heroOrb1: "bg-orange-100",
    heroOrb2: "bg-red-100",
    heroLink: "text-orange-600 hover:text-orange-800",
    heroBreadcrumbCurrent: "text-gray-600",
    heroLevelBadge: "bg-orange-100 text-orange-800",
    heroHeading: "text-gray-900",
    heroBody: "text-gray-600",
    heroIcons: [
      { box: "bg-orange-100", icon: "text-orange-600" },
      { box: "bg-green-100", icon: "text-green-600" },
      { box: "bg-amber-100", icon: "text-amber-600" },
      { box: "bg-red-100", icon: "text-red-600" },
    ],
    heroTeaserCard: "bg-gradient-to-r from-orange-50 to-red-50 border-orange-200",
    heroTeaserHeading: "text-gray-900",
    heroTeaserBody: "text-gray-600",
    heroCtaButton: "bg-gradient-to-r from-orange-600 to-red-600",
    heroPanel: "bg-white border-gray-200",
    heroPanelHeading: "text-gray-900",
    heroPanelBody: "text-gray-600",
    heroBulletCheck: "text-green-500",
    heroPill: "bg-gray-100 text-gray-700",

    modeFullActive: "border-orange-500 bg-orange-50 shadow-lg",
    modeFullIdle: "border-gray-200 bg-white hover:border-orange-200",
    modeFullBadge: "text-orange-700 bg-orange-100",
    modeFullCheck: "text-orange-600",
    modeCustomActive: "border-red-500 bg-red-50 shadow-lg",
    modeCustomIdle: "border-gray-200 bg-white hover:border-red-200",
    modeCustomBadge: "text-red-700 bg-red-100",
    modeCustomCheck: "text-red-600",
    checkboxSelected: "bg-red-600 border-red-600",
    learnLink: "text-orange-700 hover:text-orange-900",
    learnCheck: "text-orange-600",
    accentText: "text-orange-700",

    skillIcon: "bg-orange-50 group-hover:bg-orange-100 text-orange-600",
    skillHoverBorder: "hover:border-orange-300",

    faqNumberBadge: "bg-orange-100 text-orange-600",
    faqHoverBorder: "hover:border-orange-200",
    faqHoverBg: "hover:bg-orange-50",
    faqChevron: "text-orange-600",
    faqCtaCard: "bg-gradient-to-r from-orange-50 to-red-50 border-orange-200",
    faqCtaButton: "bg-gradient-to-r from-orange-600 to-red-600",
  },
};

export function getTheme(themeKey) {
  return THEMES[themeKey] || THEMES.ember;
}