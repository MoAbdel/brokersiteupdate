export const seoData = {
  Home: {
    title: "Orange County Mortgage Broker | Mo Abdel NMLS #1426884",
    description: "Licensed mortgage broker serving Orange County homeowners. Access over 200 wholesale lenders for competitive pricing, fast closings, and personalized refinance solutions. NMLS #1426884."
  },
  About: {
    title: "About Mo Abdel | Lumin Lending Broker",
    description: "Meet Mo Abdel – licensed mortgage broker helping homeowners in CA, WA, VA & CO get better pricing, faster approvals, and more flexible refinance options. Specializing in Orange County home equity and refinancing."
  },
  Programs: {
    title: "Loan Programs | Equity & Refinance | Orange County",
    description: "Explore HELOC, HELOAN, and Cash-Out Refinance options. Mo Abdel finds the right equity or refinance solution for your goals with competitive pricing and flexible terms."
  },
  Calculator: {
    title: "Mortgage Calculator | Orange County Rates & Payments",
    description: "Use our free mortgage pricing calculator to estimate your monthly payments, compare loan types, and explore refinancing options."
  },
  Contact: {
    title: "Contact | Orange County Mortgage Broker | Mo Abdel",
    description: "Start your mortgage application with Mo Abdel. Serving Orange County & beyond with personalized loan solutions and Competitive pricing."
  }
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": ["FinancialService", "LocalBusiness"],
  "name": "Mo Abdel - Mortgage Broker",
  "alternateName": "Mo Abdel",
  "serviceType": "Mortgage Broker",
  "additionalType": "https://schema.org/FinancialService",
  "employee": {
    "@type": "Person",
    "name": "Mo Abdel",
    "jobTitle": "Licensed Mortgage Broker",
    "identifier": "NMLS #1426884",
    "image": "https://mothebroker.com/images/mo-headshot.jpg",
    "knowsAbout": [
      "Mortgage Lending",
      "Real Estate Finance",
      "Refinancing Strategies",
      "Wholesale Mortgage Operations",
      "Orange County Real Estate Market",
      "Home Equity Solutions",
      "FHA & VA Loan Programs"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Lumin Lending",
      "url": "https://luminglending.com",
      "sameAs": [
        "https://www.linkedin.com/company/lumin-lending/",
        "https://www.crunchbase.com/organization/lumin-lending"
      ]
    }
  },
  "founder": {
    "@type": "Person",
    "name": "Mo Abdel",
    "identifier": "NMLS #1426884",
    "sameAs": [
      "https://www.linkedin.com/in/moabdel/",
      "https://muckrack.com/mo-abdel"
    ]
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lake Forest, CA"
    },
    {
      "@type": "City",
      "name": "Irvine, CA"
    },
    {
      "@type": "City",
      "name": "Newport Beach, CA"
    },
    {
      "@type": "City",
      "name": "Costa Mesa, CA"
    },
    {
      "@type": "City",
      "name": "Huntington Beach, CA"
    },
    {
      "@type": "City",
      "name": "Mission Viejo, CA"
    },
    {
      "@type": "City",
      "name": "Anaheim, CA"
    },
    {
      "@type": "City",
      "name": "Santa Ana, CA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Orange County, CA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "California"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Washington"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Virginia"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Colorado"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lake Forest",
    "addressRegion": "CA",
    "addressCountry": "US",
    "postalCode": "92630"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.6846",
    "longitude": "-117.8265"
  },
  "telephone": "+1-949-822-9662",
  "url": "https://mothebroker.com",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573517340174",
    "https://www.yelp.com/biz/mo-abdel-lumin-lending-lake-forest",
    "https://maps.google.com/?cid=11756575614226532751",
    "https://www.instagram.com/mo_thebroker",
    "https://mothebroker.com"
  ],
  "priceRange": "$$",
  "description": "Licensed mortgage broker based in Lake Forest, serving CA, WA, VA, and CO. Local homeowners get access to over 200 lenders for competitive mortgage pricing on refinancing and home equity loans. NMLS #1426884. Call (949) 537-2357 for multi-state mortgage expertise.",
  "image": "https://mothebroker.com/images/mo-headshot.jpg",
  "logo": "https://mothebroker.com/images/mo-logo-white.webp",
  "openingHours": ["Mo 08:00-20:00", "Tu 08:00-20:00", "We 08:00-20:00", "Th 08:00-20:00", "Fr 08:00-20:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
  "paymentAccepted": ["Cash", "Check", "Wire Transfer", "ACH"],
  "currenciesAccepted": "USD",
  "keywords": "mortgage broker near me, Orange County mortgage broker, home loans, refinancing, FHA loans, VA loans, competitive mortgage pricing",
  "potentialAction": [
    {
      "@type": "ScheduleAction",
      "name": "Schedule Mortgage Consultation",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mothebroker.com/contact",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Mortgage Consultation"
      }
    },
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mothebroker.com/areas?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ]
};

export const mortgageLoanSchema = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  "name": "Orange County Mortgage Refinance Loans",
  "description": "HELOC, HELOAN, Cash-Out, and Rate & Term Refinance loans with competitive pricing in Orange County, CA",
  "provider": {
    "@type": "FinancialService",
    "name": "Mo Abdel - Mortgage Broker",
    "serviceType": "Mortgage Broker"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "FHA Loans",
      "description": "Low down payment FHA loans with as little as 3.5% down",
      "url": "/fha-loans-orange-county"
    },
    {
      "@type": "Offer",
      "name": "VA Refinance",
      "description": "Zero down VA refinance options for veterans and military families",
      "url": "/loan-programs/va-refinance"
    },
    {
      "@type": "Offer",
      "name": "HELOC",
      "description": "Home Equity Line of Credit with flexible access to funds",
      "url": "/heloc-orange-county"
    },
    {
      "@type": "Offer",
      "name": "Conventional Refinance",
      "description": "Traditional refinance options with flexible terms",
      "url": "/conventional-loans-orange-county"
    },
    {
      "@type": "Offer",
      "name": "Non-QM Loans",
      "description": "Alternative documentation loans for self-employed and investors",
      "url": "/non-qm-loans-orange-county"
    },
    {
      "@type": "Offer",
      "name": "HELOAN",
      "description": "Fixed-rate home equity loan with lump sum funding",
      "url": "/heloan-orange-county"
    },
    {
      "@type": "Offer",
      "name": "Rate & Term Refinance",
      "description": "Lower your mortgage pricing or eliminate PMI with refinancing",
      "url": "/rate-term-refinance-orange-county"
    },
    {
      "@type": "Offer",
      "name": "2026 Newport Beach Mortgage Guide",
      "description": "Access wholesale rates and specialized jumbo financing in Newport Beach.",
      "url": "/blog/newport-beach-mortgage-guide-2026"
    },
    {
      "@type": "Offer",
      "name": "2026 Laguna Beach Mortgage Guide",
      "description": "Expert financing for coastal and hillside homes in Laguna Beach.",
      "url": "/blog/laguna-beach-mortgage-guide-2026"
    },
    {
      "@type": "Offer",
      "name": "2026 Dana Point Mortgage Guide",
      "description": "Harbor-adjacent financing and wholesale advantages for Dana Point buyers.",
      "url": "/blog/dana-point-mortgage-guide-2026"
    }
  ]
};

export type PageName = keyof typeof seoData;