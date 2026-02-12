import Careers from "@/modules/home/career";
import HomeHero from "../modules/home/homehero";
import ServicesSection from "@/modules/home/services";
import Cysap from "@/modules/home/cysap";

export const metadata = {
  title: {
    default:
      "Digitanotion Limited | #1 Cyber Security & Tech Innovation Company in Awka, Anambra, Nigeria",
    template: "%s | Digitanotion Limited - Awka, Anambra, Nigeria",
  },
  description:
    "Digitanotion Limited is the leading cyber security company and tech innovation center in Awka, Anambra State. We provide penetration testing, custom software development, ethical hacking training, and digital transformation services across Southeast Nigeria and Africa. Trusted by 50+ businesses since 2019.",

  keywords: [
    // BRAND + LOCATION (Primary)
    "Digitanotion Limited Awka",
    "Digitanotion Limited Anambra",
    "Digitanotion Limited Nigeria",
    "Digitanotion cyber security",
    "Digitanotion software development",
    "Digitanotion mobile app development",
    "Digitanotion website development",
    "Digitanotion tech training",
    "Digitanotion Academy",
    "CySAP Africa",
    "Tech6Project",
    "Cybouncer security",
    "Managed cybersecurity services",

    // CYBERSECURITY SERVICES
    "cyber security company Awka",
    "cybersecurity services Anambra",
    "penetration testing Nigeria",
    "ethical hacking company Southeast Nigeria",
    "vulnerability assessment Awka",
    "security operations center Anambra",
    "incident response Nigeria",
    "managed security services Awka",
    "cyber defense Africa",

    // SOFTWARE DEVELOPMENT
    "software development company Awka",
    "custom software development Anambra",
    "app developers Southeast Nigeria",
    "web development company Nigeria",
    "mobile app development Awka",
    "enterprise software solutions Anambra",
    "business automation Nigeria",
    "API development services Awka",
    "Data Analysis Training Awka",
    "Learn Data Analysis",
    "where do i learn Data Analysis",
    "Best place to learn Data Analysis",

    // TECH TRAINING
    "tech training center Awka",
    "cybersecurity training Anambra",
    "coding bootcamp Southeast Nigeria",
    "web development courses Nigeria",
    "website development courses Nigeria",
    "app development training Awka",
    "IT certification programs Anambra",
    "ethical hacking course Nigeria",
    "digital skills academy Africa",

    // COMMUNITY INITIATIVES
    "CySAP Africa cybersecurity awareness",
    "Tech6Project internship Nigeria",
    "DILS innovation labs Anambra",
    "free cybersecurity mentorship Africa",

    // LOCATION-BASED
    "IT company in Awka",
    "tech company Anambra State",
    "cybersecurity firm Southeast Nigeria",
    "software developers near me Awka",
    "mobile developers near me Awka",
    "website developers near me Awka",
    "best tech company in Anambra",

    // LONG-TAIL
    "best cyber security company in Awka",
    "top software development firm Anambra",
    "affordable web developers Southeast Nigeria",
    "recognized tech training center Nigeria",
    "community-first tech company Africa",

    // SASI PRINCIPLES
    "simplicity affordability security impact",
    "digital resilience company Nigeria",
    "tech innovation center Awka",
  ],

  authors: [{ name: "Digitanotion Limited" }],
  creator: "Digitanotion Dev Team",
  publisher: "Digitanotion Limited",

  openGraph: {
    title:
      "Digitanotion Limited | #1 Cyber Security & Tech Innovation in Awka, Anambra, Nigeria",
    description:
      "Nigeria's trusted partner for cyber security, software development, and tech talent training. Serving Awka, Anambra, Southeast Nigeria, and Africa with enterprise-grade solutions and community-first initiatives.",
    url: "https://digitanotion.com.ng",
    siteName: "Digitanotion Limited",
    images: [
      {
        url: "https://digitanotion.com.ng/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digitanotion Limited - #1 Cyber Security & Tech Innovation Company in Awka, Anambra, Nigeria",
        type: "image/png",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digitanotion Limited | #1 Cyber Security in Awka, Anambra",
    description:
      "Leading cyber security & software development company in Southeast Nigeria. Penetration testing, app dev, tech training. Trusted by 50+ businesses since 2019.",
    images: ["https://digitanotion.com.ng/twitter-image"],
    creator: "@digitanotion",
    site: "@digitanotion",
  },

  alternates: {
    canonical: "https://digitanotion.com.ng",
    languages: {
      "en-NG": "https://digitanotion.com.ng",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "E28D96DFA8E3B8DAAF69D8A373AE789D",
  },

  category: "technology",

  icons: {
    icon: "https://www.digitanotion.com.ng/icon.png",
    shortcut: "https://www.digitanotion.com.ng/icon.png",
    apple: "https://www.digitanotion.com.ng/icon.png",
  },

  other: {
    "geo.region": "NG-AN",
    "geo.placename": "Awka",
    "geo.position": "6.210838;7.071666",
    ICBM: "6.210838, 7.071666",
    "business:contact_data:street_address":
      "Suite 6, Mgbajiaka Area, Along Onisha-Enugu Expressway",
    "business:contact_data:locality": "Awka",
    "business:contact_data:region": "Anambra",
    "business:contact_data:country": "Nigeria",
    "business:contact_data:phone": "+234 807 373 5836",
    "business:contact_data:email": "hello@digitanotion.com.ng",
  },
};

// Enhanced Homepage Schema with Digitanotion Limited
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://digitanotion.com.ng#webpage",
      url: "https://digitanotion.com.ng",
      name: "Digitanotion Limited - #1 Cyber Security & Tech Innovation in Awka, Anambra",
      description:
        "Leading cyber security company and software development firm in Awka, Anambra State, Nigeria. Providing enterprise security, custom applications, and tech talent development since 2019.",
      inLanguage: "en-NG",
      isPartOf: {
        "@id": "https://digitanotion.com.ng#website",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://digitanotion.com.ng",
          },
        ],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.digitanotion.com.ng/icon.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://digitanotion.com.ng#website",
      url: "https://digitanotion.com.ng",
      name: "Digitanotion Limited",
      description:
        "Cyber Security & Tech Innovation Company in Awka, Anambra, Nigeria",
      publisher: {
        "@id": "https://digitanotion.com.ng#organization",
      },
      inLanguage: "en-NG",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://digitanotion.com.ng/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://digitanotion.com.ng#organization",
      name: "Digitanotion Limited",
      legalName: "Digitanotion Limited",
      description:
        "Premier cyber security and technology innovation company based in Awka, Anambra State, Nigeria. Specializing in cybersecurity, software development, and tech talent development.",
      url: "https://digitanotion.com.ng",
      logo: {
        "@type": "ImageObject",
        url: "https://www.digitanotion.com.ng/icon.png",
        width: 512,
        height: 512,
      },
      image: "https://www.digitanotion.com.ng/icon.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suite 6, Mgbajiaka Area, Along Onisha-Enugu Expressway",
        addressLocality: "Awka",
        addressRegion: "Anambra",
        addressCountry: "NG",
        postalCode: "420211",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.210838,
        longitude: 7.071666,
      },
      telephone: "+234 807 373 5836",
      email: "hello@digitanotion.com.ng",
      foundingDate: "2019",
      founders: [
        {
          "@type": "Person",
          name: "Divine Ezelibe",
          jobTitle: "Founder & CEO",
        },
      ],
      areaServed: [
        {
          "@type": "City",
          name: "Awka",
          sameAs: "https://www.wikidata.org/wiki/Q2867306",
        },
        {
          "@type": "State",
          name: "Anambra",
          sameAs: "https://www.wikidata.org/wiki/Q484578",
        },
        {
          "@type": "AdministrativeArea",
          name: "Southeast Nigeria",
          sameAs: "https://www.wikidata.org/wiki/Q48928",
        },
        {
          "@type": "Country",
          name: "Nigeria",
          sameAs: "https://www.wikidata.org/wiki/Q1033",
        },
        {
          "@type": "Continent",
          name: "Africa",
          sameAs: "https://www.wikidata.org/wiki/Q15",
        },
      ],
      slogan:
        "Building digital resilience through Security, Innovation, and Skills Development",
      knowsAbout: [
        "Cyber Security",
        "Penetration Testing",
        "Ethical Hacking",
        "Software Development",
        "Web Development",
        "Mobile App Development",
        "Tech Training",
        "Digital Transformation",
      ],
      sameAs: [
        "https://facebook.com/digitanotion",
        "https://twitter.com/digitanotion",
        "https://linkedin.com/company/digitanotion",
        "https://instagram.com/digitanotion",
        "https://youtube.com/@digitanotion",
      ],
    },
    {
      "@type": "ItemList",
      name: "Digitanotion Core Services",
      description:
        "Cyber security, software development, and tech training services",
      url: "https://digitanotion.com.ng/services",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Cybersecurity Services",
          serviceType: "Cyber Security",
          provider: {
            "@id": "https://digitanotion.com.ng#organization",
          },
          areaServed: ["Awka", "Anambra", "Nigeria", "Africa"],
          description:
            "Enterprise-grade penetration testing, threat monitoring, incident response, and managed security services through CyBouncer.",
        },
        {
          "@type": "Service",
          position: 2,
          name: "Software Development",
          serviceType: "Software Development",
          provider: {
            "@id": "https://digitanotion.com.ng#organization",
          },
          areaServed: ["Awka", "Anambra", "Nigeria", "Africa"],
          description:
            "Custom web applications, mobile apps, enterprise software, and API development tailored to business needs.",
        },
        {
          "@type": "Service",
          position: 3,
          name: "Tech Training Academy",
          serviceType: "Education",
          provider: {
            "@id": "https://digitanotion.com.ng#organization",
          },
          areaServed: ["Awka", "Anambra", "Nigeria", "Africa"],
          description:
            "Industry-recognized certification programs in cybersecurity, web development, app development, and digital skills.",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Digitanotion Community Initiatives",
      description: "Non-profit programs building Africa's digital future",
      url: "https://digitanotion.com.ng/community",
      itemListElement: [
        {
          "@type": "Project",
          position: 1,
          name: "CySAP Africa",
          description:
            "#1 Cybersecurity Awareness Project in Africa, reaching 1,500+ students across 15+ schools with daily security tips and education.",
          url: "https://digitanotion.com.ng/cysapafrica",
        },
        {
          "@type": "Project",
          position: 2,
          name: "Tech6Project",
          description:
            "6-month intensive internship program bridging the gap between learning and earning for tech graduates.",
          url: "https://digitanotion.com.ng/tech6project",
        },
        {
          "@type": "Project",
          position: 3,
          name: "Free Cybersecurity Mentorship",
          description:
            "Pan-African remote mentorship program with 1,000+ participants across 4+ African countries.",
          url: "https://digitanotion.com.ng/mentorship",
        },
        {
          "@type": "Project",
          position: 4,
          name: "DILS Innovation Labs",
          description:
            "Digital Innovation Labs for Schools, bringing tech education to young learners across Nigeria.",
          url: "https://digitanotion.com.ng/dils",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://digitanotion.com.ng#faq",
      url: "https://digitanotion.com.ng",
      name: "Frequently Asked Questions - Digitanotion Limited",
      description:
        "Common questions about Digitanotion's cyber security, software development, and tech training services in Awka, Anambra",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Digitanotion Limited located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digitanotion Limited is headquartered at Suite 6, Mgbajiaka Area, Along Onisha-Enugu Expressway, Awka, Anambra State, Nigeria. We serve clients across Southeast Nigeria and Africa.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Digitanotion provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digitanotion provides three core services: 1) Cybersecurity through our CyBouncer brand - penetration testing, threat monitoring, incident response; 2) Custom Software Development - web apps, mobile apps, enterprise solutions; and 3) Tech Training Academy - certification programs in cybersecurity, web development, and app development.",
          },
        },
        {
          "@type": "Question",
          name: "Is Digitanotion a registered company in Nigeria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Digitanotion Limited is a fully registered company in Nigeria, incorporated in 2019. We are recognized as a leading technology company in Anambra State and across Southeast Nigeria.",
          },
        },
        {
          "@type": "Question",
          name: "What is CySAP Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CySAP Africa is Digitanotion's flagship non-profit cybersecurity awareness initiative. It's the #1 Cybersecurity Awareness Project in Africa, providing free security education to schools, daily security tips, and community outreach programs across the continent.",
          },
        },
        {
          "@type": "Question",
          name: "Does Digitanotion offer internships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, through our Tech6Project program, we offer a 6-month intensive internship experience for tech graduates. Participants work on real-world projects, build portfolios, and receive mentorship from industry professionals.",
          },
        },
        {
          "@type": "Question",
          name: "What is the SASI principle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SASI is Digitanotion's core philosophy: Simplicity, Affordability, Security, and Impact. These principles guide everything we do - from software development to cybersecurity and community initiatives.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <HomeHero />
      <ServicesSection />
      <Careers />
      <Cysap />
    </>
  );
}
