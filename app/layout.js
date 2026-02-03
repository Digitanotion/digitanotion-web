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
        url: "https://digitanotion.com.ng/og-image.png",
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
    images: ["https://digitanotion.com.ng/twitter-card.png"],
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
  "@type": ["ProfessionalService", "EducationalOrganization", "LocalBusiness"],
  name: "Digitanotion Systems",
  description:
    "Leading cyber security and tech innovation company in Awka, Anambra State, Nigeria",
  url: "https://digitanotion.com.ng",
  logo: "https://digitanotion.com.ng/images/digitanotion-logo.png",

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

  // Service Areas - CRITICAL FOR LOCAL SEO
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

  // Services Offered - Helps with service-specific searches
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cybersecurity Services",
        description: "Professional cyber security solutions for businesses",
        serviceType: "Cybersecurity",
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Software Development",
        description: "Custom software and app development",
        serviceType: "Software Development",
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Tech Training",
        description: "Digital skills training and certification",
        serviceType: "Education",
        areaServed: [
          "Awka",
          "Anambra",
          "Southeast Nigeria",
          "Nigeria",
          "Africa",
        ],
      },
    },
  ],

  // Reviews/Testimonials Schema
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
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
