import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/(marketing)/components/Schema';
import { SITE_ORIGIN } from '@/lib/site';
import DefaultPageSchema from '@/components/seo/DefaultPageSchema';

export const metadata: Metadata = {
  openGraph: {
    type: 'article',
    authors: ['Mo Abdel'],
    siteName: 'Mo Abdel | Mortgage Broker',
  },
  other: {
    'article:author': 'Mo Abdel, NMLS #1426884',
    'article:publisher': SITE_ORIGIN,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_ORIGIN}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_ORIGIN}/blog`,
      },
    ],
  };

  return (
    <>
      <DefaultPageSchema
        title="Mo Abdel | Mortgage Broker Blog"
        description="Expert mortgage guidance for California and Washington homeowners from Mo Abdel, NMLS #1426884."
        url={`${SITE_ORIGIN}/blog`}
      />
      <JsonLd json={breadcrumbSchema} />
      {children}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Explore Loan Program Hubs</h2>
          <p className="mt-2 text-slate-600">
            Compare your options and move from research to a personalized scenario review.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/purchase-loans">
              Purchase Loans
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/refinance-loans">
              Refinance Loans
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/fha-loans-orange-county">
              FHA Loans
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/va-loans-orange-county">
              VA Loans
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/conventional-loans-orange-county">
              Conventional Loans
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/jumbo-loans-orange-county">
              Jumbo Loans
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/heloc-orange-county">
              HELOC
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/contact">
              Talk With Mo
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/blog/wholesale-mortgage-broker-california-guide-2026">
              California Mortgage Hub
            </Link>
            <Link className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50" href="/blog/wholesale-mortgage-broker-washington-2026">
              Washington Mortgage Hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

