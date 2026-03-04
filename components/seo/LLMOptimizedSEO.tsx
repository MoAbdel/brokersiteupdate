'use client';

import React from 'react';
import Script from 'next/script';
import { PHONE_DISPLAY } from '@/lib/site';

interface LLMSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  city?: string;
  canonicalUrl: string;
  structuredFAQ?: Array<{
    question: string;
    answer: string;
  }>;
  businessContext?: {
    name: string;
    service: string;
    location: string;
    credentials: string;
    phone: string;
  };
}

export default function LLMOptimizedSEO({
  title,
  description,
  keywords = [],
  city,
  canonicalUrl,
  structuredFAQ = [],
  businessContext = {
    name: "Mo Abdel",
    service: "Mortgage Broker",
    location: "Orange County, CA",
    credentials: "NMLS #1426884",
    phone: PHONE_DISPLAY
  }
}: LLMSEOProps) {
  void keywords;

  // Create FAQ schema for rich snippets and LLM understanding
  const faqSchema = structuredFAQ.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: structuredFAQ.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  // WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: canonicalUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      "cssSelector": ["main", "h1", "h2"]
    },
    about: {
      "@type": "Service",
      name: "Mortgage Broker Services",
      provider: {
        "@type": "Person",
        name: businessContext.name,
        jobTitle: "Licensed Mortgage Broker",
        hasCredential: businessContext.credentials
      }
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main"
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.mothebroker.com"
        },
        ...(city ? [{
          "@type": "ListItem",
          position: 2,
          name: `${city} Mortgage Broker`,
          item: canonicalUrl
        }] : [])
      ]
    }
  };

  return (
    <>
      {/* Structured Data for AI Understanding */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema)
        }}
      />

      {/* FAQ Schema if provided */}
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      )}
    </>
  );
}
