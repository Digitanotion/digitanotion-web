// app/workspace/page.js
import WorkspacePage from "@/modules/workspace/index";

export const metadata = {
  title:
    "Premium Workspace & Coworking Space in Awka, Anambra | Digitanotion Limited",
  description:
    "Find your perfect workspace at Digitanotion in Awka, Anambra. Shared desks, dedicated special desks, and 35-seater classroom available. High-speed internet, 24/7 power, AC, and security. Book your space today!",
  keywords: [
    "workspace Awka",
    "coworking space Awka",
    "shared desk Awka",
    "dedicated desk Awka",
    "office space Anambra",
    "training room rental Awka",
    "conference room Awka",
    "Aroma workspace",
    "coworking space near me Awka",
    "affordable workspace Nigeria",
    "Digitanotion workspace",
    "hot desk Awka",
    "private office Awka",
    "meeting room rental Anambra",
    "workspace for freelancers Awka",
    "tech hub Awka",
    "innovation hub Anambra",
  ],
  openGraph: {
    title: "Digitanotion Workspace - Premium Coworking Space in Awka, Anambra",
    description:
      "Shared desks, dedicated special desks, and 35-seater classroom available. Book your workspace in Awka today!",
    url: "https://digitanotion.com.ng/workspace",
    siteName: "Digitanotion Limited",
    images: [
      {
        url: "https://digitanotion.com.ng/workspace-og.jpg",
        width: 1200,
        height: 630,
        alt: "Digitanotion Workspace - Premium Coworking in Awka, Anambra",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitanotion Workspace - Best Coworking Space in Awka",
    description:
      "Flexible workspace plans in Awka, Anambra. Book your desk today!",
    images: ["https://digitanotion.com.ng/workspace-twitter.jpg"],
    creator: "@digitanotion",
  },
  alternates: {
    canonical: "https://digitanotion.com.ng/workspace",
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
};

export default function Workspace() {
  return <WorkspacePage />;
}
