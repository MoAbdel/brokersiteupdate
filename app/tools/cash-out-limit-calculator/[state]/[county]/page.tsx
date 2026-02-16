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
import CashOutCalculator from '@/components/tools/CashOutCalculator';
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
    title: `Cash-Out Refinance ${county.name}, ${stateName} [2026 Limit ${formatCurrency(county.conformingLoanLimit)} & Max Equity Calculator]`,
    description: `Calculate your maximum cash-out refinance in ${county.name}, ${stateName}. 2026 conforming limit: ${formatCurrency(county.conformingLoanLimit)}. Median home value: ${formatCurrency(county.medianHomePrice)}. Instant LTV analysis at 80%, 85%, 90%.`,
    path: `/tools/cash-out-limit-calculator/${state}/${countySlug}`,
    type: 'website',
  });
}

export default async function CountyCalculatorPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);

  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);
  const maxCashOut80 = Math.round(county.medianHomePrice * 0.8 - county.medianHomePrice * 0.6);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Cash-Out Calculator', href: '/tools/cash-out-limit-calculator' },
    { label: stateName, href: `/tools/cash-out-limit-calculator/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What is the 2026 conforming loan limit for ${county.name}, ${stateName}?`,
      answer: `The 2026 FHFA conforming loan limit for ${county.name} is ${formatCurrency(county.conformingLoanLimit)}. Loans above this threshold are classified as jumbo loans and typically require higher credit scores and larger reserves.`,
    },
    {
      question: `How much cash can I take out of my home in ${county.name}?`,
      answer: `Based on the ${county.name} median home value of ${formatCurrency(county.medianHomePrice)}, a homeowner with 40% equity could access up to ${formatCurrency(maxCashOut80)} through a cash-out refinance at 80% LTV. Your actual amount depends on your home's appraised value and current mortgage balance.`,
    },
    {
      question: `Is a cash-out refinance in ${county.name} conforming or jumbo?`,
      answer: `If your new loan amount exceeds ${formatCurrency(county.conformingLoanLimit)}, it's classified as a jumbo cash-out refinance. With ${county.name}'s median home value at ${formatCurrency(county.medianHomePrice)}, many ${county.medianHomePrice > county.conformingLoanLimit ? 'borrowers will need jumbo financing' : 'borrowers qualify for conforming rates'}. Mo Abdel has access to 200+ wholesale lenders for both conforming and jumbo cash-out products.`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/cash-out-limit-calculator/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'Cash-Out Refinance Program', href: '/loan-programs/cash-out-refinance' },
    { label: 'HELOC Program', href: '/loan-programs/heloc' },
    { label: 'Conventional Loans', href: '/loan-programs/conventional-loans' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...(cities.length > 0
      ? cities.slice(0, 6).map((c) => ({
          label: `${c.name} Cash-Out Calculator`,
          href: `/tools/cash-out-limit-calculator/${state}/${countySlug}/${c.slug}`,
        }))
      : []),
  ];

  const schemas = buildToolSchemas({
    toolName: `Cash-Out Refinance Calculator — ${county.name}, ${stateName}`,
    description: `Calculate maximum cash-out refinance amounts for ${county.name}, ${stateName} using 2026 FHFA conforming loan limits.`,
    url: `/tools/cash-out-limit-calculator/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} Cash-Out Refinance Calculator`}
      subtitle={`Calculate your maximum cash-out amount using ${county.name}'s 2026 conforming limit of ${formatCurrency(county.conformingLoanLimit)} and median home value of ${formatCurrency(county.medianHomePrice)}.`}
      badgeText={`${county.name}, ${state.toUpperCase()}`}
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <CashOutCalculator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={county.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        avgAppreciation5yr={county.avgAppreciation5yr}
        avgPropertyTaxRate={county.avgPropertyTaxRate}
      />

      {/* City-level links */}
      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City Calculators in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/cash-out-limit-calculator/${state}/${countySlug}/${city.slug}`}
                className="group"
              >
                <Card className="hover:shadow-md hover:border-blue-300 transition-all">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">
                      {city.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Median: {formatCurrency(city.medianHomePrice)}
                    </p>
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
