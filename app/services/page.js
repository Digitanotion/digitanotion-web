import ServicesPrograms from "../../modules/services/index";
export const metadata = {
  title:
    "Cybersecurity Services Awka, Anambra | Website Design and Development | App Development  | Digitanotion",
  description:
    "Professional cybersecurity services in Awka, Anambra. Network security, penetration testing, data protection for businesses across Southeast Nigeria.",
  keywords: [
    "cybersecurity company Awka",
    "cybersecurity services Anambra",
    "network security Nigeria",
    "penetration testing Southeast Nigeria",
    "data protection Awka",
    "ethical hacking services",
    "cyber security consulting Anambra",
    "information security Nigeria",
    "vulnerability assessment",
    "security audit Awka",
    "malware protection",
    "firewall installation Anambra",
    "incident response Nigeria",
    "security awareness training",
    "GDPR compliance Nigeria",
  ],
  openGraph: {
    title: "Cybersecurity Services Awka | Digitanotion",
    description:
      "Protect your business with our comprehensive cybersecurity solutions in Anambra State",
    url: "https://digitanotion.com.ng/services/cybersecurity",
    images: [
      {
        url: "https://digitanotion.com.ng/images/cybersecurity-og.jpg",
        width: 1200,
        height: 630,
        alt: "Digitanotion Cybersecurity Services",
      },
    ],
  },
  // Add canonical URL for each service
  alternates: {
    canonical: "https://digitanotion.com.ng/services/cybersecurity",
  },
};

export default function Page() {
  return <ServicesPrograms />;
}
