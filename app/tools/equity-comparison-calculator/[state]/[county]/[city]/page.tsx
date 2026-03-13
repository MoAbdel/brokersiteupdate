import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as genMeta } from '@/lib/metadata';
import {
  getCounty,
  getCity,
  getStateName,
  getAllStateCountyCityParams,
} from '@/lib/geo-data';
import { formatCurrency } from '@/lib/geo-data/calculations';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';
import EquityComparisonCalculator from '@/components/tools/EquityComparisonCalculator';
import LoanProgramRedirect from '@/components/tools/LoanProgramRedirect';
import { generateEquitySnapshot } from '@/lib/equity-snapshot';

interface Props {
  params: Promise<{ state: string; county: string; city: string }>;
}

export async function generateStaticParams() {
  return getAllStateCountyCityParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);
  if (!county || !city) return {};

  return genMeta({
    title: `Equity Comparison Calculator — ${city.name}, ${stateName} [HELOC vs Refi 2026]`,
    description: `Compare HELOC, cash-out refinance, and home equity loan options in ${city.name}, ${county.name}, ${stateName}. Median home: ${formatCurrency(city.medianHomePrice)}. Find the best equity access method with local market data.`,
    path: `/tools/equity-comparison-calculator/${state}/${countySlug}/${citySlug}`,
    type: 'website',
    noindex: true,
  });
}

export default async function CityEquityComparisonPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);

  if (!county || !city || !stateName) notFound();

  const snapshot = generateEquitySnapshot(county, city);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Equity Comparison Calculator', href: '/tools/equity-comparison-calculator' },
    { label: stateName, href: `/tools/equity-comparison-calculator/${state}` },
    { label: county.name, href: `/tools/equity-comparison-calculator/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `Should I get a HELOC or cash-out refinance in ${city.name}?`,
      answer: `The best choice depends on your current mortgage rate and goals. If your existing rate is below today's market rates, a HELOC lets you access equity without losing that low rate. If your rate is above current levels, a cash-out refinance replaces your mortgage at a lower rate while giving you cash. With ${city.name}'s median home value of ${formatCurrency(city.medianHomePrice)}, both options provide meaningful equity access — the calculator above compares exact costs for your situation.`,
    },
    {
      question: `How much equity can I access in ${city.name}?`,
      answer: `Your accessible equity depends on your home's current value and outstanding mortgage balance. Most lenders allow up to 90% CLTV for a HELOC and 80% for a cash-out refinance. At ${city.name}'s median of ${formatCurrency(city.medianHomePrice)}, homeowners who purchased five or more years ago typically have substantial equity available. Enter your actual numbers in the calculator for a personalized estimate.`,
    },
    {
      question: `What are home equity loan rates in ${city.name}, ${county.name}?`,
      answer: `Home equity loan rates in ${city.name} depend on your credit score, CLTV ratio, and loan amount. As a wholesale broker, Mo Abdel accesses 50+ Wholesale Lenders to find the most competitive HELOC, cash-out refinance, and HELOAN rates in ${county.name}. The calculator above uses current market rates for an accurate comparison of all three options.`,
    },
  ];

  const internalLinks = [
    { label: `${county.name} Equity Calculator`, href: `/tools/equity-comparison-calculator/${state}/${countySlug}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'HELOC Program', href: '/loan-programs/heloc' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: `${city.name} DSCR Calculator`, href: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${citySlug}` },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `Equity Comparison Calculator — ${city.name}, ${stateName}`,
    description: `Compare HELOC, cash-out refinance, and home equity loan options in ${city.name}, ${county.name}, ${stateName}.`,
    url: `/tools/equity-comparison-calculator/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} Equity Comparison Calculator`}
      subtitle={`Compare HELOC, cash-out refinance, and home equity loan options in ${city.name}. Median home: ${formatCurrency(city.medianHomePrice)}.`}
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
        defaultHomeValue={city.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        avgAppreciation5yr={county.avgAppreciation5yr}
        snapshot={snapshot}
      />

      <div className="mt-8">
        <LoanProgramRedirect context="equity" stateCode={state} countySlug={countySlug} />
      </div>
    </ToolPageLayout>
  );
}
