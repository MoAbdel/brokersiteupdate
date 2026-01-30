import React from 'react';
import Script from 'next/script';

interface IndexingOptimizationProps {
  page: string;
  priority?: 'high' | 'medium' | 'low';
  lastModified?: string;
}

export default function IndexingOptimization({
  page,
  priority = 'medium',
  lastModified
}: IndexingOptimizationProps) {

  // Generate structured data optimized for indexing
  const generateIndexingSchema = () => {
    const baseUrl = 'https://www.mothebroker.com';
    const currentDate = new Date().toISOString();
    const currentYear = new Date().getFullYear();
    const pagePath = page.startsWith('/') ? page : `/${page}`;

    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": page,
      "url": `${baseUrl}${pagePath}`,
      "dateModified": lastModified || currentDate,
      "datePublished": currentDate,
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Mo Abdel - Mortgage Broker",
        "url": baseUrl
      },
      "copyrightYear": currentYear,
      "significantLink": [
        baseUrl,
        `${baseUrl}/loan-programs`,
        `${baseUrl}/areas`,
        `${baseUrl}/blog`,
        `${baseUrl}/contact`
      ],
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "publisher": {
        "@type": "Organization",
        "name": "Mo Abdel - Mortgage Broker",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/mo-logo-white.webp`
        }
      },
      "author": {
        "@type": "Person",
        "name": "Mo Abdel",
        "jobTitle": "Licensed Mortgage Broker",
        "identifier": "NMLS #1426884"
      },
      "mainEntity": {
        "@type": "FinancialService",
        "name": "Mortgage Broker Services",
        "provider": {
          "@type": "Organization",
          "name": "Mo Abdel - Mortgage Broker"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": {
              "@id": baseUrl,
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": page.replace(/[\/\-]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
            "item": {
              "@id": `${baseUrl}${pagePath}`,
              "name": page.replace(/[\/\-]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
            }
          }
        ]
      }
    };
  };

  return (
    <>
      {/* Enhanced structured data for better understanding */}
      <Script
        id={`indexing-optimization-${page.replace(/[\/\-]/g, '_')}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateIndexingSchema())
        }}
      />
    </>
  );
}