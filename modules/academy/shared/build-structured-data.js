const SITE_URL = "https://www.digitanotion.com.ng";
const ACADEMY_URL = `${SITE_URL}/academy`;

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${ACADEMY_URL}#organization`,
  name: "Digitanotion Academy",
  url: ACADEMY_URL,
  logo: "https://www.digitanotion.com.ng/icon.png",
  sameAs: [
    "https://facebook.com/digitanotion",
    "https://twitter.com/digitanotion",
    "https://linkedin.com/company/digitanotion",
    "https://www.instagram.com/digitanotionsystems/",
  ],
};

/**
 * Turns a course's location.typeLabel into schema.org courseMode values.
 * Falls back to ["onsite"] if nothing matches, since that's the safest default.
 */
function inferCourseMode(typeLabel = "") {
  const label = typeLabel.toLowerCase();
  const modes = [];
  if (label.includes("onsite") || label.includes("on-site")) modes.push("onsite");
  if (label.includes("online")) modes.push("online");
  return modes.length > 0 ? modes : ["onsite"];
}

/**
 * Builds a full JSON-LD @graph (Course, curriculum ItemList, Organization,
 * FAQPage, BreadcrumbList) for any Academy course from its data.json.
 *
 * Usage in a course's page.js:
 *
 *   export const structuredData = buildCourseStructuredData(
 *     courseData,
 *     "https://www.digitanotion.com.ng/academy/some-course"
 *   );
 *   // then render: <StructuredData data={structuredData} />
 */
export function buildCourseStructuredData(data, canonicalUrl) {
  const { hero, location, pricing, modules, faqs, certificates, beforeYouStart } = data;

  const individualSum = modules.reduce((sum, m) => sum + m.price, 0);
  const allSkills = Array.from(new Set(modules.flatMap((m) => m.skills)));
  const durationWeeksMatch = hero.durationLabel.match(/\d+/);
  const durationIso = durationWeeksMatch ? `P${durationWeeksMatch[0]}W` : undefined;

  const courseSchedule = location.scheduleStructured
    ? {
        "@type": "Schedule",
        repeatFrequency: "Weekly",
        dayOfWeek: location.scheduleStructured.daysOfWeek,
        startTime: location.scheduleStructured.startTime,
        endTime: location.scheduleStructured.endTime,
      }
    : undefined;

  const courseNode = {
    "@type": "Course",
    "@id": `${canonicalUrl}#course`,
    name: hero.title,
    description: hero.tagline,
    provider: {
      "@type": "Organization",
      name: "Digitanotion Academy",
      sameAs: ACADEMY_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Awka",
        addressRegion: "Anambra",
        addressCountry: "NG",
      },
    },
    location: {
      "@type": "Place",
      name: `Digitanotion Academy, Awka`,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.onsiteDetails,
        addressLocality: "Awka",
        addressRegion: "Anambra",
        addressCountry: "NG",
      },
    },
    duration: durationIso,
    coursePrerequisites: beforeYouStart,
    courseMode: inferCourseMode(location.typeLabel),
    educationalLevel: hero.level,
    timeRequired: durationIso,
    teaches: allSkills,
    occupationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certificate",
      name: certificates.fullCourseCertificateLabel,
    },
    offers: {
      "@type": "Offer",
      price: pricing.fullCoursePrice,
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
    hasCourseInstance: courseSchedule
      ? [
          {
            "@type": "CourseInstance",
            courseMode: inferCourseMode(location.typeLabel),
            courseSchedule,
          },
        ]
      : undefined,
    audience: {
      "@type": "Audience",
      audienceType: ["Beginners", "Career Changers", "Working Professionals"],
    },
    countryOfOrigin: { "@type": "Country", name: "Nigeria" },
    areaServed: [
      { "@type": "City", name: "Awka" },
      { "@type": "State", name: "Anambra" },
      { "@type": "AdministrativeArea", name: "Southeast Nigeria" },
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Continent", name: "Africa" },
    ],
  };

  const curriculumNode = {
    "@type": "ItemList",
    name: `${hero.title} Curriculum`,
    description: `Step-by-step curriculum for ${hero.title}`,
    itemListElement: modules.map((m) => ({
      "@type": "ListItem",
      position: m.order,
      name: m.title,
      description: m.summary,
    })),
  };

  const faqNode = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Academy", item: ACADEMY_URL },
      { "@type": "ListItem", position: 3, name: hero.title, item: canonicalUrl },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [courseNode, curriculumNode, ORGANIZATION, faqNode, breadcrumbNode],
  };
}