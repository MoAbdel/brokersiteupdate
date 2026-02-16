import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta } from '@/lib/metadata';
import {
  getCounty,
  getStateName,
  getCitiesByCounty,
  getAllStateCountyParams,
} from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';
import DscrRentAnalyzer from '@/components/tools/DscrRentAnalyzer';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';

interface Props {
  params: Promise<{ state: string; county: string }>;
}

export async function generateStaticParams() {
  return getAllStateCountyParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);
  if (!county) return {};

  return genMeta({
    title: `DSCR Rent Analyzer — ${county.name}, ${stateName} [2026 Investment Property Cash-Flow Analysis]`,
    description: `Calculate minimum rent needed for a 1.0 or 1.25 DSCR in ${county.name}, ${stateName}. Median rent: ${formatCurrency(county.medianRent)}/mo. Median home: ${formatCurrency(county.medianHomePrice)}. Instant DSCR ratio analysis for investment properties.`,
    path: `/tools/dscr-rent-analyzer/${state}/${countySlug}`,
    type: 'website',
  });
}

export default async function CountyDscrPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);

  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'DSCR Rent Analyzer', href: '/tools/dscr-rent-analyzer' },
    { label: stateName, href: `/tools/dscr-rent-analyzer/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What DSCR ratio do I need for an investment property in ${county.name}, ${stateName}?`,
      answer: `Most DSCR lenders require a minimum ratio of 1.0 to 1.25. A 1.0 DSCR means the property's rental income exactly covers the mortgage payment (PITIA). A 1.25 DSCR — the most common lender minimum — means the rent is 25% higher than the payment. In ${county.name}, with a median rent of ${formatCurrency(county.medianRent)}/mo, your DSCR depends on purchase price, down payment, and interest rate.`,
    },
    {
      question: `What is the median rent in ${county.name}, ${stateName} for 2026?`,
      answer: `The 2026 median rent in ${county.name} is ${formatCurrency(county.medianRent)} per month. This figure is used by appraisers and lenders when evaluating DSCR loan applications. Your actual rental income may be higher or lower depending on property type, location, condition, and amenities.`,
    },
    {
      question: `How is DSCR calculated for a ${county.name} investment property?`,
      answer: `DSCR = Monthly Rent / Monthly PITIA (Principal + Interest + Taxes + Insurance + HOA). For a ${county.name} property at the median price of ${formatCurrency(county.medianHomePrice)} with 25% down, your PITIA includes the mortgage payment, ${(county.avgPropertyTaxRate * 100).toFixed(2)}% property tax, insurance, and HOA dues. Use the calculator above to see your exact DSCR.`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/dscr-rent-analyzer/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'DSCR Investment Loans', href: '/loan-programs/dscr-investment-loans' },
    { label: 'DSCR Deal Analyzer', href: '/resources/dscr-deal-analyzer' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...(cities.length > 0
      ? cities.slice(0, 6).map((c) => ({
          label: `${c.name} DSCR Analyzer`,
          href: `/tools/dscr-rent-analyzer/${state}/${countySlug}/${c.slug}`,
        }))
      : []),
  ];

  const schemas = buildToolSchemas({
    toolName: `DSCR Rent Analyzer — ${county.name}, ${stateName}`,
    description: `Calculate minimum rent needed for DSCR loan qualification in ${county.name}, ${stateName} using 2026 market data.`,
    url: `/tools/dscr-rent-analyzer/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} DSCR Rent Analyzer`}
      subtitle={`Calculate the minimum rent needed for a DSCR loan in ${county.name}. Median rent: ${formatCurrency(county.medianRent)}/mo | Median home: ${formatCurrency(county.medianHomePrice)}.`}
      badgeText={`${county.name}, ${state.toUpperCase()}`}
      badgeColor="bg-purple-100 text-purple-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <DscrRentAnalyzer
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={county.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        medianRent={county.medianRent}
        avgPropertyTaxRate={county.avgPropertyTaxRate}
      />

      {/* City-level links */}
      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City DSCR Analyzers in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/dscr-rent-analyzer/${state}/${countySlug}/${city.slug}`}
                className="group"
              >
                <Card className="hover:shadow-md hover:border-purple-300 transition-all">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors text-sm">
                      {city.name}
                    </h3>
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>Rent: {formatCurrency(city.medianRent)}/mo</span>
                      <span>Home: {formatCurrency(city.medianHomePrice)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </ToolPageLayout>
  );
}
