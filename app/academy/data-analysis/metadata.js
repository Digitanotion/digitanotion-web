export const dataAnalysisMetadata = {
  title:
    "Data Analysis Course in Awka | Power BI, Excel & SQL Training | Digitanotion Academy",
  description:
    "Master Data Analysis in 14 weeks. Learn Power BI, Excel, SQL Server. Build interactive dashboards, analyze business data, and become a certified data analyst. ₦140,000 (was ₦180,000). Onsite in Awka & Online. Start March 2026.",

  keywords: [
    // PRIMARY LOCATION KEYWORDS - Awka, Anambra Focus
    "data analysis course Awka",
    "Power BI training Anambra",
    "Excel classes Awka",
    "SQL training Southeast Nigeria",
    "data analytics bootcamp Nigeria",
    "business intelligence course Awka",
    "data analyst certification Anambra",
    "Power BI dashboard training Awka",
    "Excel advanced course Nigeria",
    "SQL query training Southeast Nigeria",

    // COURSE SPECIFIC
    "Power BI specialization",
    "Excel data analysis course",
    "SQL Server training Awka",
    "data visualization certification",
    "business intelligence analyst course",
    "dashboard design training",
    "data cleaning course",
    "DAX formulas training",
    "Power Query Excel",

    // TOOLS & TECHNOLOGIES
    "Microsoft Power BI training Nigeria",
    "Excel Power Pivot course Awka",
    "SQL Server Express Anambra",
    "Tableau training Southeast Nigeria",
    "data modeling course",

    // CAREER FOCUSED
    "become a data analyst Awka",
    "data analyst career Nigeria",
    "business intelligence jobs Anambra",
    "data analytics portfolio",
    "certified data analyst Awka",

    // LOCATION HIERARCHY
    "data analysis course in Awka",
    "Power BI training Anambra State",
    "best data analytics bootcamp Southeast Nigeria",
    "affordable Excel classes Nigeria",
    "data certification Africa",

    // LONG-TAIL
    "where to learn Power BI in Awka",
    "best Excel training in Anambra",
    "hands-on SQL training Nigeria",
    "job-ready data analyst course",
    "Microsoft Power BI certification Southeast Nigeria",

    // BRAND SPECIFIC
    "Digitanotion Academy data analysis",
    "Digitanotion Power BI course Awka",
    "Digitanotion Excel training Anambra",

    // STUDENT FOCUSED
    "data courses for beginners Awka",
    "analytics training Nigeria",
    "business intelligence skills Anambra",
    "dashboard design bootcamp Awka",
  ],

  openGraph: {
    title:
      "Data Analysis Course in Awka | Power BI, Excel & SQL | Digitanotion Academy",
    description:
      "🚀 Become a data analyst in 14 weeks. Master Power BI, Excel, SQL Server. ₦140,000 (was ₦180,000). 5 real-world projects. Onsite in Awka & Online. Start March 2026.",
    url: "https://digitanotion.com.ng/academy/data-analysis",
    siteName: "Digitanotion Academy",
    images: [
      {
        url: "https://digitanotion.com.ng/academy/data-analysis/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Data Analysis (Power BI, Excel, SQL) Course - Digitanotion Academy Awka, Anambra, Nigeria",
        type: "image/png",
      },
    ],
    locale: "en_NG",
    type: "website",
    authors: ["Digitanotion Limited"],
    tags: [
      "data analysis",
      "Power BI",
      "Excel",
      "SQL",
      "business intelligence",
      "Awka",
      "Anambra",
      "Nigeria",
      "Africa",
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Data Analysis Course in Awka | Power BI, Excel & SQL | ₦140k",
    description:
      "Master Power BI, Excel & SQL in 14 weeks. 5 real-world projects. Onsite in Awka & Online. Certification included.",
    images: ["https://digitanotion.com.ng/academy/data-analysis/twitter-image"],
    creator: "@digitanotion",
    site: "@digitanotion",
  },

  alternates: {
    canonical: "https://digitanotion.com.ng/academy/data-analysis",
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

  icons: {
    icon: "https://www.digitanotion.com.ng/icon.png",
    shortcut: "https://www.digitanotion.com.ng/icon.png",
    apple: "https://www.digitanotion.com.ng/icon.png",
  },

  category: "education",

  other: {
    "geo.region": "NG-AN",
    "geo.placename": "Awka",
    "geo.position": "6.210838;7.071666",
    ICBM: "6.210838, 7.071666",
    "course:duration": "P14W",
    "course:price": "₦140,000",
    "course:originalPrice": "₦180,000",
    "course:discount": "22%",
    "course:level": "Intermediate",
    "course:format": "Onsite/Online",
    "course:startDate": "2026-03-04",
  },
};

export const dataAnalysisStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": "https://digitanotion.com.ng/academy/data-analysis#course",
      name: "Data Analysis (Power BI, Excel & SQL) Specialization",
      description:
        "Comprehensive 14-week data analysis course covering Power BI dashboards, Excel advanced analytics, and SQL database querying. Build 5 real-world projects and develop professional data analyst skills.",
      provider: {
        "@type": "Organization",
        name: "Digitanotion Academy",
        sameAs: "https://digitanotion.com.ng/academy",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Awka",
          addressRegion: "Anambra",
          addressCountry: "NG",
        },
      },
      location: {
        "@type": "Place",
        name: "Digitanotion Academy, Awka",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Suite 6, Mgbajiaka Area, Along Onisha-Enugu Expressway",
          addressLocality: "Awka",
          addressRegion: "Anambra",
          addressCountry: "NG",
          postalCode: "420211",
        },
      },
      duration: "P14W",
      totalHistoricalEnrollment: 95,
      coursePrerequisites: "Computing Essentials or equivalent computer skills",
      courseMode: ["onsite", "online", "blended"],
      courseCode: "DN-DA-301",
      occupationalCredentialAwarded: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Certificate",
        name: "Data Analysis Professional Certification",
      },
      offers: {
        "@type": "Offer",
        price: 140000,
        priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
        url: "https://digitanotion.com.ng/academy/data-analysis",
        priceValidUntil: "2026-12-31",
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          returnPolicyCategory: "https://schema.org/NonRefundable",
        },
      },
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: ["onsite", "online"],
          location: {
            "@type": "Place",
            name: "Digitanotion Academy Awka Campus",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Awka",
              addressRegion: "Anambra",
              addressCountry: "NG",
            },
          },
          startDate: "2026-03-04",
          endDate: "2026-06-10",
          courseSchedule: {
            "@type": "Schedule",
            repeatFrequency: "Weekly",
            dayOfWeek: ["Tuesday", "Thursday", "Saturday"],
            startTime: "18:00",
            endTime: "21:00",
          },
        },
        {
          "@type": "CourseInstance",
          startDate: "2026-04-01",
          endDate: "2026-07-08",
        },
        {
          "@type": "CourseInstance",
          startDate: "2026-05-06",
          endDate: "2026-08-12",
        },
      ],
      teaches: [
        "Power BI Dashboard Development",
        "Excel Advanced Analytics",
        "SQL Query Writing",
        "Data Visualization",
        "Business Intelligence",
        "DAX Formulas",
        "Power Query",
        "Statistical Analysis",
        "Data Cleaning",
        "Data Modeling",
      ],
      educationalLevel: "Intermediate",
      timeRequired: "P14W",
      numberOfCredits: "16 CPD Credits",
      audience: {
        "@type": "Audience",
        audienceType: [
          "Beginners",
          "Business Professionals",
          "Finance Officers",
          "Administrators",
        ],
      },
      countryOfOrigin: {
        "@type": "Country",
        name: "Nigeria",
      },
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
    },
    {
      "@type": "ItemList",
      name: "Data Analysis Curriculum Modules",
      description: "14-week comprehensive data analysis curriculum",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Excel for Data Analysis",
          description:
            "Power Query, PivotTables, advanced formulas, DAX, data modeling",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SQL Database Querying",
          description:
            "SELECT statements, JOINs, aggregations, subqueries, optimization",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Power BI Fundamentals",
          description:
            "Data import, transformation, data modeling, DAX formulas",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Advanced Power BI Dashboards",
          description: "Interactive dashboards, drill-through, bookmarks, RLS",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Data Visualization Best Practices",
          description:
            "Chart selection, color theory, dashboard design, storytelling",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Business Intelligence & Reporting",
          description:
            "KPI development, executive dashboards, Power BI Service",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Statistical Analysis",
          description:
            "Descriptive statistics, correlation, regression, forecasting",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Capstone Project",
          description:
            "End-to-end data analysis with real-world dataset and dashboard",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://digitanotion.com.ng/academy#organization",
      name: "Digitanotion Academy",
      url: "https://digitanotion.com.ng/academy",
      logo: "https://www.digitanotion.com.ng/icon.png",
      sameAs: [
        "https://facebook.com/digitanotion",
        "https://twitter.com/digitanotion",
        "https://linkedin.com/company/digitanotion",
        "https://instagram.com/digitanotion",
        "https://youtube.com/@digitanotion",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://digitanotion.com.ng/academy/data-analysis#faq",
      name: "Frequently Asked Questions - Data Analysis Course",
      url: "https://digitanotion.com.ng/academy/data-analysis#faq",
      description:
        "Common questions about Digitanotion Academy's Data Analysis course in Awka, Anambra",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need prior experience in data analysis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, this course is designed for beginners with basic computer skills. We start from the fundamentals of Excel and SQL, gradually building up to advanced Power BI dashboards.",
          },
        },
        {
          "@type": "Question",
          name: "Why Power BI over other visualization tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Power BI is the market leader in business intelligence, used by 97% of Fortune 500 companies. It's free for desktop use, integrates seamlessly with Excel and SQL Server.",
          },
        },
        {
          "@type": "Question",
          name: "Will I learn both Excel and Power BI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! You'll master Excel for data preparation and analysis, then leverage Power BI for advanced visualization and dashboards. This combination makes you a complete data analyst.",
          },
        },
        {
          "@type": "Question",
          name: "What SQL Server will I learn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You'll learn SQL Server Express - the free, fully-featured database engine from Microsoft. You'll master writing queries, joining tables, aggregating data, and optimizing query performance.",
          },
        },
        {
          "@type": "Question",
          name: "Will I have a portfolio by the end?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You'll complete 5 real-world projects including sales dashboards, financial analytics, customer insights, HR analytics, and a capstone executive dashboard.",
          },
        },
        {
          "@type": "Question",
          name: "Is there job placement support for data analysts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We have partnerships with banks, telecoms, and consulting firms actively hiring data analysts. Our career support includes portfolio reviews, mock interviews, and direct referrals.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://digitanotion.com.ng/academy/data-analysis#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://digitanotion.com.ng",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Academy",
          item: "https://digitanotion.com.ng/academy",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Data Analysis",
          item: "https://digitanotion.com.ng/academy/data-analysis",
        },
      ],
    },
  ],
};
