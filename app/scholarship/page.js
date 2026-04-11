import ScholarshipPage from "@/modules/scholarship/index";

export const metadata = {
  title: "Scholarship Opportunity | Digitanotion Academy × CySap Africa",
  description:
    "Apply for the Digitanotion Academy scholarship in partnership with CySap Africa and Team Sync. 10 seats per track in Cybersecurity or Data Analysis. No fees required. Deadline: April 13, 2026.",
  keywords:
    "scholarship, tech scholarship, cybersecurity, data analysis, Digitanotion Academy, CySap Africa, Anambra tech training, free IT training",
  openGraph: {
    title: "Scholarship Opportunity | Digitanotion Academy",
    description:
      "Free tech scholarship for aspiring talents in Anambra. Choose Cybersecurity or Data Analysis. Limited seats available!",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/og-scholarship.jpg",
        width: 1200,
        height: 630,
        alt: "Digitanotion Academy Scholarship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarship Opportunity | Digitanotion Academy",
    description:
      "Free tech scholarship for aspiring talents in Anambra. Apply now!",
    images: ["/og-scholarship.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ScholarshipApplicationPage() {
  return <ScholarshipPage />;
}
