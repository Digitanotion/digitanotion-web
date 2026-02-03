// app/page.js
import Careers from "@/modules/home/career";
import HomeHero from "../modules/home/homehero";
import ServicesSection from "@/modules/home/services";
import Cysap from "@/modules/home/cysap";

export const metadata = {
  title: "Home | Leading Cyber Security & Tech Innovation Center (Company)",
  description:
    "Leading cyber security solutions, custom software development, and digital training services in Awka, Anambra State. Enterprise protection, web/app development, and tech talent development.",
  keywords: [
    "cyber security company Awka",
    "software development Anambra",
    "app developers Southeast Nigeria",
    "website design Awka",
    "ethical hacking training center",
    "digital marketing services",
    "IT solutions provider",
    "tech training institute",
    "penetration testing company",
    "network security services",
    "data protection solutions",
    "cloud computing services",
    "e-commerce development",
    "mobile app development",
    "web application development",
    "UI/UX design services",
    "business automation",
    "digital transformation consulting",
  ],
  openGraph: {
    title:
      "Digitanotion | Leading Cyber Security & Tech Innovation in Awka, Anambra State, South East, Nigeria",
    description:
      "Comprehensive digital solutions including cyber security, App, Website development, and tech training in Southeast Nigeria",
    url: "https://digitanotion.com.ng",
    images: [
      {
        url: "https://digitanotion.com.ng/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Digitanotion Home - Cyber Security & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitanotion | Your Trusted Tech Partner in Anambra",
    description:
      "End-to-end digital solutions for businesses and individuals in Southeast Nigeria",
  },
  alternates: {
    canonical: "https://digitanotion.com.ng",
  },
};

// Homepage Schema
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Digitanotion Home - Cyber Security & Software Development",
  description: "Leading digital solutions provider in Anambra State, Nigeria",
  url: "https://digitanotion.com.ng",
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
  mainEntity: {
    "@type": "Organization",
    name: "Digitanotion Systems",
    description:
      "Cyber security, software development, and digital training services",
    url: "https://digitanotion.com.ng",
  },
};

export default function Home() {
  return (
    <div itemScope itemType="https://schema.org/WebPage">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <HomeHero />
      <ServicesSection />
      <Careers />
      <Cysap />
    </div>
  );
}
