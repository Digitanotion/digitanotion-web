// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../modules/home/Navbar";
import Footer from "../modules/home/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default:
      "Digitanotion | #1 Cyber Security & Tech Innovation Company in Awka, Anambra",
    template: "%s | Digitanotion - Awka, Anambra",
  },
  description:
    "Leading cyber security company in Awka offering software development, ethical hacking training, app development services across Anambra State, Southeast Nigeria, and Africa.",
  keywords: [
    // CYBERSECURITY SERVICES (Location-Specific)
    "cybersecurity company Awka",
    "cybersecurity services Anambra",
    "cybersecurity company Nigeria",
    "cyber security solutions Southeast Nigeria",
    "penetration testing services Awka",
    "ethical hacking company Anambra",
    "network security services Nigeria",
    "data protection company Awka",
    "vulnerability assessment Anambra",
    "security audit services Nigeria",
    "malware protection Awka",
    "firewall installation Anambra",
    "incident response Nigeria",
    "security awareness training Awka",
    "GDPR compliance Nigeria",
    "cybersecurity consulting Southeast Nigeria",
    "information security services Awka",
    "cyber risk assessment Anambra",
    "security monitoring Nigeria",
    "cyber insurance consulting Awka",

    // WEB DEVELOPMENT SERVICES
    "web development company Awka",
    "website design Anambra",
    "web development services Nigeria",
    "custom website development Southeast Nigeria",
    "e-commerce website development Awka",
    "WordPress development Anambra",
    "responsive web design Nigeria",
    "website maintenance services Awka",
    "web application development Anambra",
    "frontend development Nigeria",
    "backend development Southeast Nigeria",
    "full-stack development Awka",
    "UI/UX design services Anambra",
    "website redesign Nigeria",
    "web hosting services Awka",
    "domain registration Anambra",
    "SSL certificate Nigeria",
    "website optimization Southeast Nigeria",

    // APP DEVELOPMENT SERVICES
    "mobile app development company Awka",
    "app developers Anambra",
    "mobile app development Nigeria",
    "iOS app development Southeast Nigeria",
    "Android app development Awka",
    "cross-platform app development Anambra",
    "Flutter app development Nigeria",
    "React Native development Southeast Nigeria",
    "app UI/UX design Awka",
    "app maintenance services Anambra",
    "app testing Nigeria",
    "app deployment Southeast Nigeria",
    "enterprise app development Awka",
    "business app development Anambra",
    "custom app development Nigeria",

    // SOFTWARE DEVELOPMENT
    "software development company Awka",
    "custom software development Anambra",
    "software developers Nigeria",
    "enterprise software solutions Southeast Nigeria",
    "business automation software Awka",
    "CRM development Anambra",
    "ERP software Nigeria",
    "inventory management software Southeast Nigeria",
    "accounting software development Awka",
    "school management software Anambra",
    "hospital management software Nigeria",
    "POS system development Southeast Nigeria",
    "custom API development Awka",
    "database management systems Anambra",

    // DIGITAL MARKETING SERVICES
    "digital marketing company Awka",
    "SEO services Anambra",
    "social media marketing Nigeria",
    "content marketing Southeast Nigeria",
    "email marketing services Awka",
    "Google Ads management Anambra",
    "Facebook advertising Nigeria",
    "Instagram marketing Southeast Nigeria",
    "LinkedIn marketing Awka",
    "branding services Anambra",
    "graphic design Nigeria",
    "video marketing Southeast Nigeria",
    "influencer marketing Awka",
    "digital marketing strategy Anambra",

    // TECH TRAINING & ACADEMY
    "tech training center Awka",
    "IT training institute Anambra",
    "coding bootcamp Nigeria",
    "programming courses Southeast Nigeria",
    "cybersecurity training Awka",
    "web development courses Anambra",
    "app development training Nigeria",
    "digital skills training Southeast Nigeria",
    "computer training center Awka",
    "IT certification courses Anambra",
    "industrial training IT Nigeria",
    "internship opportunities tech Awka",
    "youth empowerment training Anambra",
    "digital literacy programs Nigeria",

    // HARDWARE & INFRASTRUCTURE
    "CCTV installation company Awka",
    "surveillance systems Anambra",
    "biometric access control Nigeria",
    "network cabling services Southeast Nigeria",
    "computer sales and repair Awka",
    "IT equipment supply Anambra",
    "server setup and maintenance Nigeria",
    "cloud infrastructure Southeast Nigeria",
    "wireless network installation Awka",
    "structured cabling Anambra",

    // BUSINESS SOLUTIONS
    "business automation services Awka",
    "digital transformation consulting Anambra",
    "IT consulting services Nigeria",
    "tech startup support Southeast Nigeria",
    "business process automation Awka",
    "IT support services Anambra",
    "managed IT services Nigeria",
    "tech outsourcing Southeast Nigeria",
    "IT project management Awka",

    // SPECIFIC TO YOUR SERVICES.
    "CySAP Africa services Awka",
    "CySAP cybersecurity training Anambra",
    "Tech6Project development Nigeria",
    "Cybouncer security solutions Southeast Nigeria",
    "Digitanotion Academy Awka",
    "Innovation Lab for Schools Anambra",
    "Computing Essentials training Nigeria",

    // LOCATION-BASED SEARCHES (All levels)
    "IT company in Awka",
    "tech services in Anambra State",
    "software company in Southeast Nigeria",
    "cybersecurity firm in Nigeria",
    "web designers in Awka",
    "app developers in Anambra",
    "digital agency in Nigeria",
    "tech hub in Southeast Nigeria",
    "IT solutions provider Awka",
    "technology company Anambra",
    "computer services Nigeria",
    "IT support Awka",
    "tech consultants Anambra",

    // INDUSTRY-SPECIFIC
    "IT services for banks Awka",
    "school management software Anambra",
    "hospital IT solutions Nigeria",
    "e-commerce development Southeast Nigeria",
    "government IT projects Awka",
    "SME business automation Anambra",
    "startup tech support Nigeria",

    // LONG-TAIL KEYWORDS
    "best web development company in Awka",
    "top cybersecurity services in Anambra",
    "affordable app development Nigeria",
    "professional digital marketing agency Southeast Nigeria",
    "reliable IT support services Awka",
    "experienced software developers Anambra",
    "certified cybersecurity training Nigeria",
    "responsive web design company Southeast Nigeria",
    "custom mobile app development Awka",
    "e-commerce website design Anambra",
    "social media management services Nigeria",
    "IT infrastructure setup Southeast Nigeria",
    "business website development Awka",
    "corporate cybersecurity solutions Anambra",
  ],
  authors: [{ name: "Digitanotion Systems" }],
  creator: "Digitanotion Dev Team",
  publisher: "Digitanotion Systems",
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://digitanotion.com.ng",
    siteName: "Digitanotion Systems",
    title:
      "Digitanotion | Leading Cyber Security & Software Development in Anambra",
    description:
      "Top-tier cyber security solutions and cutting-edge software development services in Awka, Anambra State.",
    images: [
      {
        url: "https://digitanotion.com.ng/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digitanotion - Cyber Security & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitanotion | #1 Tech Company in Anambra State",
    description:
      "Cyber security, software development, and digital training services in Southeast Nigeria",
    images: ["https://www.digitanotion.com.ng/icon.png"],
    creator: "@digitanotion",
  },
  verification: {
    google: "E28D96DFA8E3B8DAAF69D8A373AE789D",
    other: {
      "msvalidate.01": "E28D96DFA8E3B8DAAF69D8A373AE789D",
    },
  },
  alternates: {
    canonical: "https://digitanotion.com.ng",
    languages: {
      "en-NG": "https://digitanotion.com.ng",
    },
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": [
    "ProfessionalService",
    "EducationalOrganization",
    "LocalBusiness",
    "Organization",
  ],
  name: "Digitanotion Limited",
  alternateName: "Digitanotion",
  foundingDate: "2019",
  description:
    "A Leading Cybersecurity & Tech Innovation Center since 2019. Building digital resilience through Security, Innovation, and Skills Development. Digitanotion combines cutting-edge cybersecurity, custom app development, and tech talent training to build resilient, future-proof businesses. We build Digital and People infrastructure. We build, secure and empower.",
  url: "https://digitanotion.com.ng",
  logo: "https://www.digitanotion.com.ng/icon.png",

  // Slogan/Tagline
  slogan:
    "Building Digital Resilience Through Security, Innovation & Skills Development",

  // What We Do - Concise
  knowsAbout: [
    "Cybersecurity",
    "Innovation",
    "Skills Development",
    "Digital Resilience",
    "People Infrastructure",
    "Digital Infrastructure",
  ],

  // Enhanced Address Information
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suite 6, Mgbajiaka Area, Along Onisha-Enugu Expressway",
    addressLocality: "Awka",
    addressRegion: "Anambra",
    addressCountry: "NG",
    postalCode: "420211",
  },

  // Geo Coordinates for Map Listings
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.210838,
    longitude: 7.071666,
  },

  // Contact Information
  telephone: "+234-807-373-5836", // Add your phone number
  email: "info@digitanotion.com.ng",

  // Opening Hours
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],

  // Service Areas
  areaServed: [
    {
      "@type": "City",
      name: "Awka",
    },
    {
      "@type": "State",
      name: "Anambra",
    },
    {
      "@type": "AdministrativeArea",
      name: "Southeast Nigeria",
    },
    {
      "@type": "Country",
      name: "Nigeria",
    },
    {
      "@type": "Continent",
      name: "Africa",
    },
  ],

  // Core Pillars - Organized by your main focus areas
  makesOffer: [
    // ===== SECURITY PILLAR =====
    {
      "@type": "Offer",
      itemOffered: {
        "@type": ["Service", "Course"],
        name: "Cybersecurity & Ethical Hacking",
        description:
          "Professional cybersecurity services and ethical hacking training to protect and secure digital assets",
        serviceType: "Cybersecurity",
        category: ["Security", "Training"],
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          offerCount: "2",
          offers: [
            {
              "@type": "Offer",
              name: "Security Operations Services",
              description:
                "Penetration testing, vulnerability assessment, security audits, and SOC services",
            },
            {
              "@type": "Offer",
              name: "Ethical Hacking Training",
              description:
                "Certified ethical hacking courses and security training programs",
            },
          ],
        },
      },
    },

    // ===== INNOVATION PILLAR =====
    // 1. Web Development
    {
      "@type": "Offer",
      itemOffered: {
        "@type": ["Service", "Course"],
        name: "Web Development & Innovation",
        description:
          "Cutting-edge web development services and training programs building modern digital solutions",
        serviceType: "Web Development",
        category: ["Development", "Training", "Innovation"],
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          offerCount: "2",
          offers: [
            {
              "@type": "Offer",
              name: "Web Development Services",
              description:
                "Custom website development, e-commerce solutions, and web applications",
            },
            {
              "@type": "Offer",
              name: "Web Development Training",
              description:
                "Comprehensive web development bootcamps and courses",
            },
          ],
        },
      },
    },

    // 2. Mobile App Development
    {
      "@type": "Offer",
      itemOffered: {
        "@type": ["Service", "Course"],
        name: "Mobile App Development & Innovation",
        description:
          "Innovative mobile app development services and training for iOS and Android platforms",
        serviceType: "Mobile Development",
        category: ["Development", "Training", "Innovation"],
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          offerCount: "2",
          offers: [
            {
              "@type": "Offer",
              name: "Mobile App Development Services",
              description: "Native and cross-platform mobile app development",
            },
            {
              "@type": "Offer",
              name: "Mobile App Development Training",
              description:
                "iOS, Android, and cross-platform development courses",
            },
          ],
        },
      },
    },

    // 3. Software Development
    {
      "@type": "Offer",
      itemOffered: {
        "@type": ["Service", "Course"],
        name: "Custom Software Development",
        description:
          "Innovative custom software solutions and programming training",
        serviceType: "Software Development",
        category: ["Development", "Training", "Innovation"],
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          name: "Software Solutions",
          description: "Custom software development and programming training",
        },
      },
    },

    // 4. UI/UX & Product Design
    {
      "@type": "Offer",
      itemOffered: {
        "@type": ["Service", "Course"],
        name: "UI/UX Design & Product Innovation",
        description:
          "Professional UI/UX design services and comprehensive product design and management training",
        serviceType: "Design Services",
        category: ["Design", "Training", "Innovation", "Management"],
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          offerCount: "3",
          offers: [
            {
              "@type": "Offer",
              name: "UI/UX Design Services",
              description:
                "Professional UI/UX design for web and mobile applications",
            },
            {
              "@type": "Offer",
              name: "UI/UX Design Training",
              description: "Comprehensive UI/UX design courses and workshops",
            },
            {
              "@type": "Offer",
              name: "Product Management Training",
              description:
                "Product management and product design training programs",
            },
          ],
        },
      },
    },

    // ===== SKILLS DEVELOPMENT PILLAR =====
    // 1. Data Analysis Training
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Data Analysis Training",
        description:
          "Comprehensive data analysis training including Excel, Power BI, Python, and SQL for building data skills",
        serviceType: "Data Science Training",
        category: "Training",
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          name: "Data Analysis Programs",
          description:
            "Multiple data analysis training programs for different skill levels",
        },
      },
    },

    // 2. Digital Marketing
    {
      "@type": "Offer",
      itemOffered: {
        "@type": ["Service", "Course"],
        name: "Digital Marketing Services & Training",
        description:
          "Comprehensive digital marketing services and training including SEO, social media, content marketing, and PPC",
        serviceType: "Digital Marketing",
        category: ["Marketing", "Training"],
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          offerCount: "2",
          offers: [
            {
              "@type": "Offer",
              name: "Digital Marketing Services",
              description:
                "SEO, social media management, content marketing, and PPC advertising",
            },
            {
              "@type": "Offer",
              name: "Digital Marketing Training",
              description:
                "Comprehensive digital marketing courses and certifications",
            },
          ],
        },
      },
    },

    // 3. Python Programming Training
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Python Programming Training",
        description:
          "Comprehensive Python programming courses from beginner to advanced levels",
        serviceType: "Programming Training",
        category: "Training",
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          name: "Python Programs",
          description:
            "Multiple Python training programs for different skill levels and specializations",
        },
      },
    },

    // 4. Coding & Programming Training
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Coding & Programming Training",
        description:
          "Comprehensive coding and programming courses in various languages and technologies",
        serviceType: "Programming Training",
        category: "Training",
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
        offers: {
          "@type": "AggregateOffer",
          name: "Coding Programs",
          description:
            "Multiple programming courses including JavaScript, Java, C#, and more",
        },
      },
    },

    // 5. Institutional Training
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Institutional Training Programs",
        description:
          "Specialized tech training programs for secondary schools and tertiary institutions",
        serviceType: "Educational Services",
        category: ["Education", "Training"],
        areaServed: ["Awka", "Anambra", "Southeast Nigeria", "Nigeria"],
        offers: {
          "@type": "AggregateOffer",
          offerCount: "2",
          offers: [
            {
              "@type": "Offer",
              name: "Secondary School Programs",
              description:
                "Coding and digital skills programs for secondary school students",
            },
            {
              "@type": "Offer",
              name: "Tertiary Institution Programs",
              description:
                "Advanced tech training and certification programs for university students",
            },
          ],
        },
      },
    },

    // 6. Staff Training
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Corporate Staff Training",
        description:
          "Professional development and tech training programs for corporate staff and organizations",
        serviceType: "Corporate Training",
        category: ["Training", "Corporate Services"],
        areaServed: ["Awka", "Anambra", "Southeast Nigeria", "Nigeria"],
        offers: {
          "@type": "AggregateOffer",
          name: "Corporate Training Programs",
          description:
            "Customized tech training solutions for businesses and organizations",
        },
      },
    },

    // ===== PEOPLE INFRASTRUCTURE =====
    // Workspace / Co-working Space
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Co-working & Innovation Space",
        description:
          "Modern co-working space and innovation hub in Awka for tech professionals, startups, and digital creators - Building people infrastructure",
        serviceType: "Workspace Rental",
        category: ["Workspace", "Infrastructure", "Innovation"],
        areaServed: "Awka",
        offers: {
          "@type": "AggregateOffer",
          name: "Workspace Options",
          description:
            "Flexible workspace solutions including hot desks, dedicated desks, and private offices",
        },
      },
    },
  ],

  // Awards and Recognition (if any)
  award: [
    "Leading Cybersecurity & Tech Innovation Center in Anambra State",
    // Add any awards you've won
  ],

  // Reviews/Testimonials Schema
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50", // Required field - update with actual number
    bestRating: "5",
    worstRating: "1",
  },

  // Payment Methods
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "POS"],

  // Price Range (₦ = inexpensive, ₦₦₦₦ = premium)
  priceRange: "₦₦",

  // Has Offer Catalog (Organized by your three pillars)
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digitanotion Limited Services",
    description:
      "Building digital resilience through Security, Innovation, and Skills Development",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "🔒 Security Pillar",
        description: "Professional cybersecurity services and training",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cybersecurity Services" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Ethical Hacking" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Security Operations" },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "💡 Innovation Pillar",
        description: "Cutting-edge development and design services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Web Development" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Mobile App Development" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "UI/UX Design" },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "📚 Skills Development Pillar",
        description: "Comprehensive tech training programs",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Web Development Training",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Mobile App Development Training",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Course", name: "Data Analysis Training" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Course", name: "Python Programming" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Course", name: "Digital Marketing" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Course", name: "UI/UX Design Training" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Course", name: "Institutional Training" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Corporate Staff Training",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "🏢 People Infrastructure",
        description: "Workspace and community building",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Co-working & Innovation Space",
            },
          },
        ],
      },
    ],
  },

  // Keywords
  keywords: [
    "Cybersecurity",
    "Innovation",
    "Skills Development",
    "Digital Resilience",
    "People Infrastructure",
    "Digital Infrastructure",
    "Web Development",
    "Ethical Hacking",
    "Security Operations",
    "Mobile App Development",
    "Data Analysis",
    "Digital Marketing",
    "Co-working Space",
    "Python Programming",
    "Coding Training",
    "UI/UX Design",
    "Product Management",
    "Institutional Training",
    "Staff Training",
    "Tech Training",
    "Security Services",
    "Innovation Center",
    "Coding and programming",
    "Internship",
  ],

  // Social Media Profiles
  sameAs: [
    "https://facebook.com/digitanotion",
    "https://twitter.com/digitanotion",
    "https://linkedin.com/company/digitanotion",
    "https://instagram.com/digitanotion",
    "https://youtube.com/@digitanotion",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Favicon Links */}
        {/* Favicon Links - Updated with your actual logo */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* Structured Data */}
        <StructuredData data={organizationSchema} />

        {/* Google Analytics Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-161445030-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-161445030-1', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-white text-stone-950`}
      >
        <Navbar />
        <main className="pt-18" role="main">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
