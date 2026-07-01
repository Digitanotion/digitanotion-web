import CybersecurityFoundations from "@/modules/academy/cyber-foundations/index";
import courseData from "@/modules/academy/cyber-foundations/data.json";

const SITE_URL = "https://www.digitanotion.com.ng/academy/cyber-foundations";

export const metadata = {
  title: courseData.seo.title,
  description: courseData.seo.description,
  keywords: courseData.seo.keywords,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: courseData.seo.title,
    description: courseData.seo.description,
    url: SITE_URL,
    siteName: "Digitanotion Academy",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: courseData.seo.title,
    description: courseData.seo.description,
    site: "@digitanotion",
  },
};

export default function CybersecurityFoundationsPage() {
  return <CybersecurityFoundations />;
}