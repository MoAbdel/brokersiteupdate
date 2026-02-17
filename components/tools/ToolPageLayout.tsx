import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import PageHero from '@/components/marketing/PageHero';
import { Calculator } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface InternalLink {
  label: string;
  href: string;
}

interface ToolPageLayoutProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeColor?: string;
  breadcrumbs: Breadcrumb[];
  faqs: FAQ[];
  internalLinks: InternalLink[];
  ctaText?: string;
  children: React.ReactNode;
  schemaJsonLd?: Record<string, unknown>[];
}

export default function ToolPageLayout({
  title,
  subtitle,
  badgeText,
  badgeColor = 'bg-slate-900 text-slate-50',
  breadcrumbs,
  faqs,
  internalLinks,
  ctaText = 'Get a personalized quote from Mo Abdel — access 200+ wholesale lenders with one application.',
  children,
  schemaJsonLd,
}: ToolPageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Schema.org JSON-LD */}
      {schemaJsonLd?.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          {breadcrumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="mx-1">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-medium">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Header */}
      <div className="pt-6">
        {/* Keep badgeColor prop for compatibility; PageHero provides consistent styling. */}
        <div className="hidden">
          <Badge className={badgeColor}>{badgeText}</Badge>
        </div>
        <PageHero
          badgeText={badgeText}
          badgeIcon={Calculator}
          title={title}
          subtitle={subtitle}
          primaryAction={{ href: '/contact', label: 'Get a Free Quote' }}
          secondaryAction={{ href: '/calculator', label: 'Browse Calculators' }}
        />
      </div>

      {/* Calculator Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</main>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Take the Next Step?
            </h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">{ctaText}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:9498229662"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Call (949) 822-9662
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Internal Links */}
      {internalLinks.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Tools & Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-slate-700 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

/**
 * Build schema.org JSON-LD for a tool page.
 */
export function buildToolSchemas({
  toolName,
  description,
  url,
  countyName,
  stateName,
  breadcrumbs,
  faqs,
}: {
  toolName: string;
  description: string;
  url: string;
  countyName: string;
  stateName: string;
  breadcrumbs: { label: string; href?: string }[];
  faqs: { question: string; answer: string }[];
}): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [];

  // BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs
      .filter((b) => b.href)
      .map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.label,
        item: `https://mothebroker.com${b.href}`,
      })),
  });

  // WebApplication
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolName,
    description,
    url: `https://mothebroker.com${url}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Mo Abdel',
      jobTitle: 'Wholesale Mortgage Broker',
      url: 'https://mothebroker.com/about',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${countyName}, ${stateName}`,
    },
  });

  // FAQPage
  if (faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return schemas;
}
