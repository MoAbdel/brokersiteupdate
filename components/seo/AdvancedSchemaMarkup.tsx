import React from 'react';
import { PHONE_E164 } from '@/lib/site';

interface SchemaProps {
  type: 'Organization' | 'MortgageBroker' | 'FinancialService' | 'LocalBusiness';
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  significantLinks?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed?: string[];
  services?: string[];
  priceRange?: string;
  openingHours?: string[];
  sameAs?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  founder?: {
    name: string;
    jobTitle: string;
    sameAs?: string[];
  };
}

export default function AdvancedSchemaMarkup({
  type,
  name = "Mo Abdel - California & Washington Mortgage Broker | Lumin Lending",
  description = "Mortgage broker serving California and Washington with direct access to 200+ wholesale lenders. Strategic mortgage planning for purchase, refinance, HELOC, and investment properties. Licensed NMLS #1426884.",
  url = "https://www.mothebroker.com",
  telephone = PHONE_E164,
  significantLinks = [
    "https://www.mothebroker.com/",
    "https://www.mothebroker.com/loan-programs",
    "https://www.mothebroker.com/areas",
    "https://www.mothebroker.com/blog",
    "https://www.mothebroker.com/contact"
  ],
  address = {
    streetAddress: "18301 Von Karman Ave Suite 820",
    addressLocality: "Irvine",
    addressRegion: "CA",
    postalCode: "92614",
    addressCountry: "US"
  },
  areaServed = [
    "California",
    "Washington",
    "Orange County, CA",
    "Irvine, CA",
    "Newport Beach, CA",
    "Seattle, WA",
    "Bellevue, WA"
  ],
  services = [
    "Mortgage Broker Services", "Home Purchase Loans", "Refinancing",
    "FHA Loans", "VA Loans", "Conventional Loans", "Jumbo Loans",
    "HELOC", "Cash-Out Refinance", "First-Time Buyer Programs",
    "Investment Property Loans", "Non-QM Loans", "Bank Statement Loans"
  ],
  priceRange = "$0 - No cost consultations",
  openingHours = [
    "Mo-Fr 08:00-18:00"
  ],
  sameAs = [
    "https://luminlending.com/team/mo-abdel",
    "https://www.nmlsconsumeraccess.org"
  ],
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 127
  },
  founder = {
    name: "Mo Abdel",
    jobTitle: "Branch Manager",
    sameAs: ["https://luminlending.com/team/mo-abdel"]
  }
}: SchemaProps) {

  const generateSchema = () => {
    const currentYear = new Date().getFullYear();
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type,
      name,
      description,
      url,
      telephone,
      copyrightHolder: {
        "@type": "Organization",
        name,
        url
      },
      copyrightYear: currentYear,
      significantLink: significantLinks,
      address: {
        "@type": "PostalAddress",
        ...address
      },
      areaServed: areaServed.map(area => ({
        "@type": "Place",
        name: area
      })),
      openingHours,
      sameAs,
      aggregateRating: {
        "@type": "AggregateRating",
        ...aggregateRating
      }
    };

    // Add specific schema properties based on type
    switch (type) {
      case 'Organization':
        return {
          ...baseSchema,
          founder: {
            "@type": "Person",
            ...founder
          },
          memberOf: {
            "@type": "Organization",
            name: "Lumin Lending, Inc.",
            url: "https://luminlending.com"
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "NMLS License",
            recognizedBy: {
              "@type": "Organization",
              name: "Nationwide Multistate Licensing System"
            }
          }
        };

      case 'MortgageBroker':
      case 'FinancialService':
        return {
          ...baseSchema,
          "@type": ["FinancialService", "MortgageBroker"],
          serviceType: "Mortgage Broker Services",
          serviceOutput: services.map(service => ({
            "@type": "Service",
            name: service
          })),
          priceRange,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Mortgage Loan Programs",
            itemListElement: services.map((service, index) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service
              },
              position: index + 1
            }))
          },
          broker: {
            "@type": "Person",
            name: founder.name,
            jobTitle: founder.jobTitle,
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "NMLS #1426884"
            }
          }
        };

      case 'LocalBusiness':
        return {
          ...baseSchema,
          "@type": ["LocalBusiness", "FinancialService"],
          priceRange,
          paymentAccepted: ["Cash", "Check", "Wire Transfer"],
          currenciesAccepted: "USD",
          hasMap: `https://maps.google.com/?q=${encodeURIComponent(
            `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`
          )}`
        };

      default:
        return baseSchema;
    }
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}