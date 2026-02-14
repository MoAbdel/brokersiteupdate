'use client';

import React from 'react';
import { PHONE_DISPLAY, PHONE_E164 } from '@/lib/site';

interface EnhancedLocalSchemaProps {
  city?: string;
  state?: 'CA' | 'WA';
  regionName?: string;
  page_type?: 'home' | 'city' | 'service' | 'resource';
  service_focus?: string;
}

export default function EnhancedLocalSchema({
  city,
  state = 'CA',
  regionName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  page_type = 'home',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  service_focus
}: EnhancedLocalSchemaProps) {
  const siteUrl = "https://www.mothebroker.com";
  const stateFull = state === 'WA' ? 'Washington' : 'California';
  const stateRegionCode = state === 'WA' ? 'US-WA' : 'US-CA';
  const fallbackCoverage = regionName || (state ? stateFull : 'California and Washington');
  const coverageLabel = city ? `${city}, ${stateFull}` : fallbackCoverage;
  const defaultGeo =
    state === 'WA'
      ? { latitude: '47.6062', longitude: '-122.3321' }
      : { latitude: '33.6846', longitude: '-117.8265' };

  // Generate location-specific schema
  const generateLocationSchema = () => {
    const baseLocation = {
      "@type": "Place",
      "name": coverageLabel,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city || fallbackCoverage,
        "addressRegion": state,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": defaultGeo.latitude,
        "longitude": defaultGeo.longitude
      }
    };

    return baseLocation;
  };

  // Enhanced mortgage broker schema
  const mortgageBrokerSchema = {
    "@context": "https://schema.org",
    "@type": ["MortgageLoan", "FinancialProduct", "Service"],
    "name": `${city ? city + ' ' : 'California & Washington '}Mortgage Broker Services`,
    "description": `Professional mortgage broker services in ${coverageLabel}. Access to 200+ lenders for competitive pricing on home loans, refinancing, FHA, VA, and jumbo loans.`,
    "provider": {
      "@type": ["Person", "FinancialService"],
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884",
      "jobTitle": "Licensed Mortgage Broker",
      "telephone": PHONE_DISPLAY,
      "email": "mo.abdel@luminlending.com",
      "url": siteUrl,
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "NMLS License",
        "identifier": "1426884",
        "issuedBy": {
          "@type": "Organization",
          "name": "Nationwide Multistate Licensing System"
        }
      },
      "memberOf": {
        "@type": "Organization",
        "name": "Lumin Lending",
        "identifier": "Company NMLS #2716106",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5559 S Sossaman Rd, Bldg 1 Ste 101",
          "addressLocality": "Mesa",
          "addressRegion": "AZ",
          "postalCode": "85212",
          "addressCountry": "US"
        }
      }
    },
    "serviceArea": generateLocationSchema(),
    "offers": [
      {
        "@type": "Offer",
        "name": "FHA Loans",
        "description": "Low down payment FHA loans with as little as 3.5% down payment",
        "category": "Mortgage Loan",
        "eligibility": "Owner-occupied primary residence",
        "url": `${siteUrl}/fha-loans-orange-county`
      },
      {
        "@type": "Offer",
        "name": "VA Loans",
        "description": "Zero down payment VA loans for veterans and active military",
        "category": "Mortgage Loan",
        "eligibility": "Veterans and active military",
        "url": `${siteUrl}/va-loans-orange-county`
      },
      {
        "@type": "Offer",
        "name": "Conventional Loans",
        "description": "Traditional home financing with down payments as low as 3%",
        "category": "Mortgage Loan",
        "url": `${siteUrl}/conventional-loans-orange-county`
      },
      {
        "@type": "Offer",
        "name": "HELOC",
        "description": "Home Equity Line of Credit with flexible access to funds",
        "category": "Home Equity Loan",
        "url": `${siteUrl}/heloc-orange-county`
      },
      {
        "@type": "Offer",
        "name": "Jumbo Loans",
        "description": "High-balance loans for luxury homes exceeding conforming loan limits",
        "category": "Mortgage Loan",
        "url": `${siteUrl}/loan-programs/jumbo-loans`
      }
    ],
    "additionalType": "https://schema.org/FinancialService",
    "category": "Mortgage Broker",
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Place",
        "name": coverageLabel
      }
    }
  };

  // Local business schema for city pages
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${city ? city + ' ' : 'California & Washington '}Mortgage Broker | Mo Abdel`,
    "image": "https://www.mothebroker.com/images/mo-headshot.jpg",
    "telephone": PHONE_DISPLAY,
    "email": "mo.abdel@luminlending.com",
    "url": city ? `${siteUrl}/areas/${city.toLowerCase().replace(/\s+/g, '-')}-mortgage-broker` : siteUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city || fallbackCoverage,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": defaultGeo.latitude,
      "longitude": defaultGeo.longitude
    },
    "openingHours": [
      "Mo 08:00-20:00",
      "Tu 08:00-20:00",
      "We 08:00-20:00",
      "Th 08:00-20:00",
      "Fr 08:00-20:00",
      "Sa 09:00-18:00",
      "Su 10:00-16:00"
    ],
    "priceRange": "$$",
    "description": `Licensed mortgage broker serving ${coverageLabel}. Access to 200+ lenders for competitive mortgage pricing, fast closings, and personalized service. NMLS #1426884.`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mortgage Loan Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "FHA Loans",
            "description": "Low down payment home loans with flexible credit requirements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "VA Loans",
            "description": "Zero down payment loans for military veterans"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Conventional Loans",
            "description": "Traditional home financing with Competitive pricing"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": coverageLabel,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": stateFull
      }
    },
    "knowsAbout": [
      "Mortgage Lending",
      "Home Loans",
      "Refinancing",
      "FHA Loans",
      "VA Loans",
      "HELOC",
      city ? `${city} Real Estate Market` : `${stateFull} Real Estate Market`,
      "First Time Home Buyers",
      "Investment Property Loans"
    ],
    "makesOffer": {
      "@type": "Offer",
      "name": "Free Mortgage Consultation",
      "description": "Complimentary mortgage consultation and Loan Comparison",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  // Professional license schema
  const licenseSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Licensed Mortgage Broker",
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "NMLS Mortgage License",
          "identifier": "1426884",
          "issuedBy": {
            "@type": "Organization",
            "name": "Nationwide Multistate Licensing System",
            "url": "https://www.nmlsconsumeraccess.org/"
          },
          "validIn": [
            {
              "@type": "AdministrativeArea",
              "name": "California"
            },
            {
              "@type": "AdministrativeArea",
              "name": "Washington"
            }
          ]
        }
      ]
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": coverageLabel
    },
    "license": "NMLS #1426884"
  };

  return (
    <>
      {/* Enhanced Mortgage Broker Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mortgageBrokerSchema, null, 2)
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema, null, 2)
        }}
      />

      {/* Professional License Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(licenseSchema, null, 2)
        }}
      />

      {/* Geographic targeting for local SEO */}
      <meta name="geo.region" content={stateRegionCode} />
      <meta name="geo.placename" content={coverageLabel} />
      <meta name="geo.position" content={`${defaultGeo.latitude};${defaultGeo.longitude}`} />
      <meta name="ICBM" content={`${defaultGeo.latitude}, ${defaultGeo.longitude}`} />

      {/* Local business meta */}
      <meta name="business.hours" content="M-F 8:00-20:00, Sa 9:00-18:00, Su 10:00-16:00" />
      <meta name="business.phone" content={PHONE_E164} />
      <meta name="business.license" content="NMLS #1426884" />
      <meta name="business.service_area" content={coverageLabel} />

      {/* Professional certification meta */}
      <meta name="professional.license" content="NMLS #1426884" />
      <meta name="professional.type" content="Mortgage Broker" />
      <meta name="professional.jurisdiction" content="California, Washington" />
    </>
  );
}