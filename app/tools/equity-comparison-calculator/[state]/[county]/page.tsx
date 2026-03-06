import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/metadata';
import {
  getCounty,
  getStateName,
  getCitiesByCounty,
  getAllStateCountyParams,
} from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';
import EquityComparisonCalculator from '@/components/tools/EquityComparisonCalculator';
import LoanProgramRedirect from '@/components/tools/LoanProgramRedirect';
import { generateEquitySnapshot } from '@/lib/equity-snapshot';
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
    title: `Equity Comparison Calculator — ${county.name}, ${stateName} [HELOC vs Refi 2026]`,
    description: `Compare HELOC, cash-out refinance, and home equity loan options in ${county.name}, ${stateName}. Median home: ${formatCurrency(county.medianHomePrice)}. See which equity access method saves the most with local market data.`,
    path: `/tools/equity-comparison-calculator/${state}/${countySlug}`,
    type: 'website',
    noindex: true,
  });
}

export default async function CountyEquityComparisonPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);

  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);
  const snapshot = generateEquitySnapshot(county, county);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Equity Comparison Calculator', href: '/tools/equity-comparison-calculator' },
    { label: stateName, href: `/tools/equity-comparison-calculator/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What equity access options are available to homeowners in ${county.name}, ${stateName}?`,
      answer: `${county.name} homeowners have three main options: a HELOC (revolving credit line at variable rates), a cash-out refinance (replace your mortgage with a larger one at today's fixed rate), or a home equity loan (fixed-rate lump sum as a second lien). With a median home price of ${formatCurrency(county.medianHomePrice)} and a conforming limit of ${formatCurrency(county.conformingLoanLimit)}, most homeowners in ${county.name} have significant equity to access.`,
    },
    {
      question: `Is a HELOC or cash-out refinance better in ${county.name}?`,
      answer: `It depends on your current mortgage rate and how you plan to use the funds. If your first mortgage rate is below 5%, a HELOC or HELOAN preserves that low rate while giving you access to equity. If your current rate is above 6.5%, a cash-out refinance consolidates everything into one lower payment. The calculator above compares both options with ${county.name} market data.`,
    },
    {
      question: `How much equity can I access in ${county.name}?`,
      answer: `Most lenders allow up to 80% combined loan-to-value (CLTV) for a cash-out refinance and up to 90% CLTV for a HELOC. With ${county.name}'s median home value of ${formatCurrency(county.medianHomePrice)}, homeowners who purchased five or more years ago often have substantial accessible equity. Enter your actual home value and mortgage balance in the calculator for a precise estimate.`,
    },
    {
      question: `What are current HELOC rates in ${county.name}, ${stateName}?`,
      answer: `HELOC rates in ${county.name} vary by lender, credit score, and CLTV ratio. As a wholesale broker, Mo Abdel shops 200+ lenders to find the most competitive HELOC, cash-out refinance, and home equity loan rates available. The calculator above uses current market rates for an accurate side-by-side comparison.`,
    },
    {
      question: `Can I get a home equity loan with a high loan-to-value ratio in ${county.name}?`,
      answer: `Some lenders offer home equity loans up to 90% CLTV, though the best rates are typically available at 80% CLTV or below. In ${county.name}'s market, higher home values mean even conservative LTV ratios provide meaningful equity access. Credit scores of 680+ and strong income documentation improve approval odds at higher CLTVs.`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/equity-comparison-calculator/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'HELOC Program', href: '/loan-programs/heloc' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Home Equity Loans', href: '/loan-programs/home-equity-loans' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...(cities.length > 0
      ? cities.slice(0, 6).map((c) => ({
          label: `${c.name} Equity Calculator`,
          href: `/tools/equity-comparison-calculator/${state}/${countySlug}/${c.slug}`,
        }))
      : []),
  ];

  const schemas = buildToolSchemas({
    toolName: `Equity Comparison Calculator — ${county.name}, ${stateName}`,
    description: `Compare HELOC, cash-out refinance, and home equity loan options in ${county.name}, ${stateName} using local market data.`,
    url: `/tools/equity-comparison-calculator/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} Equity Comparison Calculator`}
      subtitle={`Compare HELOC, cash-out refinance, and home equity loan options in ${county.name}. Median home: ${formatCurrency(county.medianHomePrice)} | Conforming limit: ${formatCurrency(county.conformingLoanLimit)}.`}
      badgeText="Homeowners"
      badgeColor="bg-blue-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <EquityComparisonCalculator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={county.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        avgAppreciation5yr={county.avgAppreciation5yr}
        snapshot={snapshot}
      />

      <div className="mt-8">
        <LoanProgramRedirect context="equity" stateCode={state} countySlug={countySlug} />
      </div>

      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City Equity Comparisons in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/equity-comparison-calculator/${state}/${countySlug}/${city.slug}`}
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
