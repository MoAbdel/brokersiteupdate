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
import DscrRentAnalyzer from '@/components/tools/DscrRentAnalyzer';

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
    title: `DSCR Rent Analyzer — ${city.name}, ${stateName} [${county.name} — 2026 Investment Property Cash-Flow Analysis]`,
    description: `Calculate minimum rent for a 1.0 or 1.25 DSCR in ${city.name}, ${county.name}, ${stateName}. Median rent: ${formatCurrency(city.medianRent)}/mo. Median home: ${formatCurrency(city.medianHomePrice)}. Instant DSCR ratio analysis.`,
    path: `/tools/dscr-rent-analyzer/${state}/${countySlug}/${citySlug}`,
    type: 'website',
  });
}

export default async function CityDscrPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);

  if (!county || !city || !stateName) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'DSCR Rent Analyzer', href: '/tools/dscr-rent-analyzer' },
    { label: stateName, href: `/tools/dscr-rent-analyzer/${state}` },
    { label: county.name, href: `/tools/dscr-rent-analyzer/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `What DSCR ratio do I need for an investment property in ${city.name}, ${stateName}?`,
      answer: `Most DSCR lenders require a minimum ratio of 1.0 to 1.25. In ${city.name}, the median rent is ${formatCurrency(city.medianRent)}/mo and the median home value is ${formatCurrency(city.medianHomePrice)}. Use the calculator above to determine if your target property meets lender DSCR requirements.`,
    },
    {
      question: `What is the median rent in ${city.name} for 2026?`,
      answer: `The 2026 median rent in ${city.name}, ${county.name} is ${formatCurrency(city.medianRent)} per month. This is used by appraisers and DSCR lenders when underwriting investment property loans. Actual rents vary by property type, bedrooms, condition, and exact location.`,
    },
    {
      question: `What property tax rate applies to investment properties in ${city.name}?`,
      answer: `The average effective property tax rate in ${city.name} is ${(city.avgPropertyTaxRate * 100).toFixed(2)}%. On an investment property valued at ${formatCurrency(city.medianHomePrice)}, that's approximately ${formatCurrency(Math.round(city.medianHomePrice * city.avgPropertyTaxRate))} per year. Property taxes are a key component of the PITIA payment used in DSCR calculations.`,
    },
  ];

  const internalLinks = [
    {
      label: `All ${county.name} Cities`,
      href: `/tools/dscr-rent-analyzer/${state}/${countySlug}`,
    },
    { label: `${stateName} Counties`, href: `/tools/dscr-rent-analyzer/${state}` },
    { label: 'DSCR Investment Loans', href: '/loan-programs/dscr-investment-loans' },
    { label: 'DSCR Deal Analyzer', href: '/resources/dscr-deal-analyzer' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `DSCR Rent Analyzer — ${city.name}, ${county.name}, ${stateName}`,
    description: `Calculate minimum rent needed for DSCR loan qualification in ${city.name}, ${county.name}, ${stateName}.`,
    url: `/tools/dscr-rent-analyzer/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} DSCR Rent Analyzer`}
      subtitle={`Calculate the minimum rent for a DSCR loan in ${city.name}, ${county.name}. Median rent: ${formatCurrency(city.medianRent)}/mo | Median home: ${formatCurrency(city.medianHomePrice)}.`}
      badgeText={`${city.name}, ${state.toUpperCase()}`}
      badgeColor="bg-slate-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <DscrRentAnalyzer
        countyName={`${city.name}, ${county.name}`}
        stateCode={state}
        defaultHomeValue={city.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        medianRent={city.medianRent}
        avgPropertyTaxRate={city.avgPropertyTaxRate}
      />
    </ToolPageLayout>
  );
}
