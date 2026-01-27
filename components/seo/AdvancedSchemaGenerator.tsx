import React from 'react';

interface SchemaData {
  type: 'review' | 'howto' | 'faq' | 'product' | 'article' | 'calculator' | 'mortgage-program';
  title?: string;
  name?: string;
  description: string;
  url: string;
  data?: Record<string, unknown>;
}

interface AdvancedSchemaGeneratorProps {
  schemas: SchemaData[];
}

export default function AdvancedSchemaGenerator({ schemas }: AdvancedSchemaGeneratorProps) {

  const generateReviewSchema = (data: Record<string, unknown>) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "FinancialService",
      "name": "Mo Abdel Mortgage Broker Services",
      "provider": {
        "@type": "Person",
        "name": "Mo Abdel",
        "identifier": "NMLS #1426884"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": data.rating || 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": data.authorName || "Anonymous Client"
    },
    "reviewBody": data.reviewText,
    "datePublished": data.datePublished || new Date().toISOString()
  });

  const generateHowToSchema = (data: Record<string, unknown>, schemaData: SchemaData) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": schemaData.title || schemaData.name || data.title,
    "description": data.description,
    "image": data.image || "https://www.mothebroker.com/images/mo-headshot.jpg",
    "totalTime": data.totalTime || "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": data.cost || "0"
    },
    "supply": data.supplies || [],
    "tool": data.tools || [],
    "step": (data.steps as Array<{ name: string; text: string; image?: string }> | undefined)?.map((step, index: number) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    })) || []
  });

  const generateFAQSchema = (data: Record<string, unknown>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (data.questions as Array<{ question: string; answer: string }> | undefined)?.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Person",
          "name": "Mo Abdel",
          "identifier": "NMLS #1426884"
        }
      }
    })) || []
  });

  const generateProductSchema = (data: Record<string, unknown>) => ({
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": data.price || "0",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Person",
        "name": "Mo Abdel"
      }
    },
    "category": "Mortgage Loan",
    "brand": {
      "@type": "Brand",
      "name": "Lumin Lending"
    },
    "additionalProperty": (data.features as string[] | undefined)?.map((feature: string) => ({
      "@type": "PropertyValue",
      "name": "Feature",
      "value": feature
    })) || []
  });

  const generateArticleSchema = (data: Record<string, unknown>) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.description,
    "image": data.image || "https://www.mothebroker.com/images/mo-headshot.jpg",
    "author": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884",
      "jobTitle": "Licensed Mortgage Broker"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mo Abdel Mortgage Broker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mothebroker.com/images/mo-logo-white.webp"
      }
    },
    "datePublished": data.datePublished || new Date().toISOString(),
    "dateModified": data.dateModified || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url
    },
    "articleSection": data.section || "Mortgage Advice",
    "wordCount": data.wordCount || 1000,
    "keywords": data.keywords || ["mortgage", "home loans", "Orange County"]
  });

  const generateCalculatorSchema = (data: Record<string, unknown>, schemaData: SchemaData) => ({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": schemaData.name || schemaData.title || data.name,
    "description": data.description,
    "url": data.url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": (data.features as string[] | undefined) || [
      "Monthly payment calculation",
      "Interest Loan Comparison",
      "Loan term analysis",
      "Down payment scenarios"
    ],
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    }
  });

  const generateMortgageProgramSchema = (data: Record<string, unknown>) => ({
    "@context": "https://schema.org",
    "@type": ["LoanOrCredit", "Service"],
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "Person",
      "name": "Mo Abdel",
      "identifier": "NMLS #1426884"
    },
    "serviceType": "Mortgage Loan",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Orange County, CA"
    },
    "offers": {
      "@type": "Offer",
      "name": data.name,
      "description": data.description,
      "eligibility": data.eligibility || "Varies by program",
      "price": data.price || "Market pricing",
      "priceCurrency": "USD"
    },
    "additionalType": "https://schema.org/LoanOrCredit",
    "category": data.category || "Mortgage Loan",
    "audience": {
      "@type": "Audience",
      "audienceType": data.audienceType || "Home Buyers"
    }
  });

  const generateSchema = (schemaData: SchemaData) => {
    const data = schemaData.data || {};
    switch (schemaData.type) {
      case 'review':
        return generateReviewSchema(data);
      case 'howto':
        return generateHowToSchema(data, schemaData);
      case 'faq':
        return generateFAQSchema(data);
      case 'product':
        return generateProductSchema(data);
      case 'article':
        return generateArticleSchema(data);
      case 'calculator':
        return generateCalculatorSchema(data, schemaData);
      case 'mortgage-program':
        return generateMortgageProgramSchema(data);
      default:
        return null;
    }
  };

  const validSchemas = schemas
    .map(generateSchema)
    .filter((schema): schema is NonNullable<typeof schema> => schema !== null);

  if (validSchemas.length === 0) return null;

  return (
    <>
      {validSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
}