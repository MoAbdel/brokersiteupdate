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
import MaxHelocCalculator from '@/components/tools/MaxHelocCalculator';
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
    title: `Max HELOC Calculator — ${county.name}, ${stateName} [2026 Equity Line Limits & CLTV Analysis]`,
    description: `Calculate your maximum HELOC line in ${county.name}, ${stateName}. 2026 conforming limit: ${formatCurrency(county.conformingLoanLimit)}. Median home value: ${formatCurrency(county.medianHomePrice)}. Instant CLTV analysis at 80%, 85%, 90%.`,
    path: `/tools/max-heloc-calculator/${state}/${countySlug}`,
    type: 'website',
  });
}

export default async function CountyHelocPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);

  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);
  const estimatedLine85 = Math.max(
    0,
    Math.round(county.medianHomePrice * 0.85 - county.medianHomePrice * 0.6)
  );

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Max HELOC Calculator', href: '/tools/max-heloc-calculator' },
    { label: stateName, href: `/tools/max-heloc-calculator/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What is the maximum HELOC I can get in ${county.name}, ${stateName}?`,
      answer: `Your maximum HELOC depends on your home value, current mortgage balance, and the lender's CLTV limit. Based on ${county.name}'s median home value of ${formatCurrency(county.medianHomePrice)} with a 60% existing mortgage, you could access up to ${formatCurrency(estimatedLine85)} at 85% CLTV. Use the calculator above with your actual numbers for a precise estimate.`,
    },
    {
      question: `What is the difference between a HELOC and a home equity loan (HELOAN)?`,
      answer: `A HELOC is a revolving credit line with variable rates — you draw funds as needed during the draw period (typically 10 years) and only pay interest on what you use. A HELOAN is a lump-sum loan with a fixed rate and fixed monthly payments. Both use your home as collateral. Mo Abdel offers both products through 200+ wholesale lenders.`,
    },
    {
      question: `How does CLTV affect my HELOC approval in ${county.name}?`,
      answer: `CLTV (Combined Loan-to-Value) measures your total mortgage debt plus HELOC against your home's value. Most lenders cap CLTV at 80-90%. At ${county.name}'s median value of ${formatCurrency(county.medianHomePrice)}, an 80% CLTV allows ${formatCurrency(Math.round(county.medianHomePrice * 0.80))} in total debt, while 90% CLTV allows ${formatCurrency(Math.round(county.medianHomePrice * 0.90))}. Higher CLTV means more access but typically higher rates.`,
    },
    {
      question: `Are HELOC rates variable in ${county.name}?`,
      answer: `Yes, most HELOCs carry variable rates tied to the Prime rate. As of 2026, HELOC rates in ${county.name} typically range from Prime minus 0.5% to Prime plus 2%, depending on your credit score, CLTV, and loan amount. Some lenders offer fixed-rate draw options. Contact Mo Abdel at (949) 822-9662 for current HELOC rate quotes.`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/max-heloc-calculator/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'HELOC Program', href: '/loan-programs/heloc' },
    { label: 'HELOAN Program', href: '/loan-programs/heloan' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...(cities.length > 0
      ? cities.slice(0, 6).map((c) => ({
          label: `${c.name} HELOC Calculator`,
          href: `/tools/max-heloc-calculator/${state}/${countySlug}/${c.slug}`,
        }))
      : []),
  ];

  const schemas = buildToolSchemas({
    toolName: `Max HELOC Calculator — ${county.name}, ${stateName}`,
    description: `Calculate maximum HELOC equity line amounts for ${county.name}, ${stateName} using 2026 FHFA conforming loan limits and CLTV analysis.`,
    url: `/tools/max-heloc-calculator/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} Max HELOC Calculator`}
      subtitle={`Calculate your maximum home equity line of credit using ${county.name}'s 2026 conforming limit of ${formatCurrency(county.conformingLoanLimit)} and median home value of ${formatCurrency(county.medianHomePrice)}.`}
      badgeText={`${county.name}, ${state.toUpperCase()}`}
      badgeColor="bg-slate-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <MaxHelocCalculator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={county.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        avgAppreciation5yr={county.avgAppreciation5yr}
      />

      {/* City-level links */}
      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City HELOC Calculators in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/max-heloc-calculator/${state}/${countySlug}/${city.slug}`}
                className="group"
              >
                <Card className="hover:shadow-md hover:border-amber-300 transition-all">
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
