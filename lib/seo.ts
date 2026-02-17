import { SITE_ORIGIN, PHONE_DISPLAY, PHONE_E164 } from '@/lib/site';

export const seoData = {
  Home: {
    title: "California & Washington Mortgage Broker | 200+ Lender Options | Mo Abdel",
    description: "Licensed mortgage broker serving California and Washington with access to 200+ wholesale lenders for lower rates, faster closings, and tailored purchase or refinance solutions. NMLS #1426884."
  },
  About: {
    title: "About Mo Abdel | California & Washington Mortgage Broker",
    description: "Meet Mo Abdel, a licensed mortgage broker helping buyers and homeowners compare lender options, secure better terms, and close faster across California and Washington."
  },
  Programs: {
    title: "Mortgage Loan Programs | FHA, VA, HELOC, HELOAN, Jumbo, Non-QM",
    description: "Compare major mortgage and refinance options, including FHA, VA, HELOC, HELOAN, jumbo, and non-QM programs, with guidance tailored to your goals."
  },
  Calculator: {
    title: "Mortgage Calculator | California & Washington Rates & Payments",
    description: "Use our free mortgage pricing calculator to estimate your monthly payments, compare loan types, and explore refinancing options."
  },
  Contact: {
    title: "Contact | California & Washington Mortgage Broker | Mo Abdel",
    description: "Start your mortgage application with Mo Abdel. Serving California and Washington with personalized loan solutions and competitive pricing."
  }
};

const SITE_URL = SITE_ORIGIN;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#person-mo-abdel`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const currentYear = new Date().getFullYear();

/**
 * Single site-wide @graph schema injected in root layout.
 * Replaces the previous duplicate structuredData + AdvancedSchemaMarkup approach.
 * Contains: Organization, Person, LocalBusiness, WebSite, and LoanOrCredit catalog.
 */
export const siteRootSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization — Lumin Lending (parent company)
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      "name": "Lumin Lending, Inc.",
      "url": "https://luminlending.com",
      "identifier": "NMLS #2716106",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Mortgage Broker License",
          "name": "NMLS #2716106",
          "url": "https://www.nmlsconsumeraccess.org",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Nationwide Multistate Licensing System (NMLS)",
            "url": "https://www.nmlsconsumeraccess.org"
          }
        }
      ],
      "areaServed": [
        { "@type": "State", "name": "California", "sameAs": "https://en.wikipedia.org/wiki/California" },
        { "@type": "State", "name": "Washington", "sameAs": "https://en.wikipedia.org/wiki/Washington_(state)" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/lumin-lending/",
        "https://luminlending.com"
      ]
    },

    // 2. Person — Mo Abdel (the broker)
    {
      "@type": "Person",
      "@id": PERSON_ID,
      "name": "Mohammad Basel Abdelfattah",
      "alternateName": "Mo Abdel",
      "jobTitle": "Licensed Mortgage Broker",
      "identifier": "NMLS #1426884",
      "telephone": PHONE_DISPLAY,
      "email": "mo@mothebroker.com",
      "url": `${SITE_URL}/about-mo-abdel-orange-county-mortgage-broker`,
      "image": `${SITE_URL}/images/mo-headshot.jpg`,
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Mortgage Loan Originator License",
          "name": "NMLS #1426884",
          "url": "https://www.nmlsconsumeraccess.org",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Nationwide Multistate Licensing System (NMLS)",
            "url": "https://www.nmlsconsumeraccess.org"
          }
        }
      ],
      "knowsAbout": [
        "Wholesale Mortgage Brokerage",
        "Conventional Loans",
        "FHA Loans",
        "VA Loans",
        "Jumbo Loans",
        "HELOC",
        "Home Equity Loans",
        "Cash-Out Refinance",
        "DSCR Investment Loans",
        "Non-QM Loans",
        "Bank Statement Loans",
        "Reverse Mortgages (HECM)",
        "California Real Estate Finance",
        "Washington Real Estate Finance"
      ],
      "worksFor": { "@id": ORGANIZATION_ID },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61573517340174",
        "https://www.instagram.com/mo_thebroker",
        "https://www.yelp.com/biz/mo-abdel-lumin-lending-lake-forest",
        "https://maps.google.com/?cid=11756575614226532751",
        "https://www.linkedin.com/in/moabdel/"
      ]
    },

    // 3. LocalBusiness + FinancialService — The brokerage
    {
      "@type": ["LocalBusiness", "FinancialService"],
      "@id": LOCAL_BUSINESS_ID,
      "name": "Mo Abdel - Mortgage Broker",
      "alternateName": "Mo The Broker",
      "additionalType": "https://schema.org/MortgageBroker",
      "description": "Licensed wholesale mortgage broker based in Irvine, CA serving all of California and Washington. Access to 200+ lenders for competitive pricing on purchase, refinance, HELOC, DSCR, and specialty loan programs. NMLS #1426884.",
      "url": SITE_URL,
      "telephone": `+1-949-822-9662`,
      "email": "mo@mothebroker.com",
      "founder": { "@id": PERSON_ID },
      "employee": { "@id": PERSON_ID },
      "parentOrganization": { "@id": ORGANIZATION_ID },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "18301 Von Karman Ave Suite 820",
        "addressLocality": "Irvine",
        "addressRegion": "CA",
        "addressCountry": "US",
        "postalCode": "92614"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.6846",
        "longitude": "-117.8265"
      },
      "areaServed": [
        { "@type": "State", "name": "California", "sameAs": "https://en.wikipedia.org/wiki/California" },
        { "@type": "State", "name": "Washington", "sameAs": "https://en.wikipedia.org/wiki/Washington_(state)" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mortgage Loan Programs",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "Conventional Loans", "url": `${SITE_URL}/conventional-loans-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "FHA Loans", "url": `${SITE_URL}/fha-loans-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "VA Loans", "url": `${SITE_URL}/va-loans-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "Jumbo Loans", "url": `${SITE_URL}/jumbo-loans-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "HELOC", "url": `${SITE_URL}/heloc-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "Home Equity Loan (HELOAN)", "url": `${SITE_URL}/heloan-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "Cash-Out Refinance", "url": `${SITE_URL}/cash-out-refinance` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "Rate & Term Refinance", "url": `${SITE_URL}/rate-term-refinance-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "Non-QM Loans", "url": `${SITE_URL}/non-qm-loans-orange-county` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "DSCR Investment Loans", "url": `${SITE_URL}/blog/dscr-loans-california-investor-guide-2026` }},
          { "@type": "Offer", "itemOffered": { "@type": "LoanOrCredit", "name": "Reverse Mortgage (HECM)", "url": `${SITE_URL}/reverse-mortgages` }}
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5"
      },
      "priceRange": "$$",
      "image": `${SITE_URL}/images/mo-headshot.jpg`,
      "logo": `${SITE_URL}/images/mo-logo-white.webp`,
      "openingHours": ["Mo-Fr 08:00-20:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
      "paymentAccepted": ["Cash", "Check", "Wire Transfer", "ACH"],
      "currenciesAccepted": "USD",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61573517340174",
        "https://www.instagram.com/mo_thebroker",
        "https://www.yelp.com/biz/mo-abdel-lumin-lending-lake-forest",
        "https://maps.google.com/?cid=11756575614226532751"
      ],
      "potentialAction": [
        {
          "@type": "ScheduleAction",
          "name": "Schedule Mortgage Consultation",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/contact`,
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
          "@type": "CommunicateAction",
          "name": "Call Mo Abdel",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `tel:${PHONE_E164}`,
            "actionPlatform": "http://schema.org/MobileWebPlatform"
          }
        }
      ]
    },

    // 4. WebSite — site identity for search features
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Mo The Broker",
      "alternateName": "MoTheBroker.com",
      "description": "Wholesale mortgage broker serving California and Washington with 200+ lender access",
      "publisher": { "@id": LOCAL_BUSINESS_ID },
      "inLanguage": "en-US",
      "copyrightYear": currentYear,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

// Keep backwards-compatible exports for any pages still importing these
export const structuredData = siteRootSchema;
export const mortgageLoanSchema = {}; // Absorbed into siteRootSchema.hasOfferCatalog

export type PageName = keyof typeof seoData;
