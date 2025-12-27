export const seoData = {
  Home: {
    title: "Orange County Mortgage Broker | Mo Abdel NMLS #1426884",
    description: "Licensed mortgage broker serving Orange County homeowners. Access over 200 wholesale lenders for competitive pricing, fast closings, and personalized refinance solutions. NMLS #1426884."
  },
  About: {
    title: "About Mo Abdel | West Capital Lending Broker",
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
    "worksFor": {
      "@type": "Organization",
      "name": "West Capital Lending",
      "url": "https://westcapitallending.com"
    }
  },
  "founder": {
    "@type": "Person",
    "name": "Mo Abdel",
    "identifier": "NMLS #1426884"
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
  "telephone": "+1-949-537-2357",
  "url": "https://mothebroker.com",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61573517340174",
    "https://www.yelp.com/biz/mo-abdel-west-capital-lending-lake-forest",
    "https://maps.google.com/?cid=11756575614226532751",
    "https://www.instagram.com/mo_thebroker",
    "https://mothebroker.com"
  ],
  "priceRange": "$$",
  "description": "Licensed mortgage broker based in Lake Forest, serving Orange County, CA. Local homeowners get access to over 200 lenders for competitive mortgage pricing on refinancing and home equity loans. NMLS #1426884. Call (949) 537-2357 for local mortgage expertise.",
  "image": "https://mothebroker.com/images/moabdel-headshot-final.png",
  "logo": "https://mothebroker.com/images/mo-logo-white.webp",
  "openingHours": ["Mo 08:00-20:00", "Tu 08:00-20:00", "We 08:00-20:00", "Th 08:00-20:00", "Fr 08:00-20:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
  "paymentAccepted": ["Cash", "Check", "Wire Transfer", "ACH"],
  "currenciesAccepted": "USD",
  "keywords": "mortgage broker near me, Orange County mortgage broker, home loans, refinancing, FHA loans, VA loans, competitive mortgage pricing"
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
    }
  ]
};

export type PageName = keyof typeof seoData;