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
import DscrQualificationCalculator from '@/components/tools/DscrQualificationCalculator';
import { generateDscrSnapshot } from '@/lib/dscr-snapshot';
import LoanProgramRedirect from '@/components/tools/LoanProgramRedirect';

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
    title: `DSCR Loan Calculator — ${city.name}, ${stateName} [${county.name} — Check If You Qualify 2026]`,
    description: `Check if your investment property in ${city.name}, ${county.name}, ${stateName} qualifies for a DSCR loan. Median rent: ${formatCurrency(city.medianRent)}/mo. Median home: ${formatCurrency(city.medianHomePrice)}. Instant qualification analysis.`,
    path: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${citySlug}`,
    type: 'website',
  });
}

export default async function CityDscrQualificationPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);

  if (!county || !city || !stateName) notFound();

  const dscrSnapshot = generateDscrSnapshot(city, county);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'DSCR Qualification Calculator', href: '/tools/dscr-qualification-calculator' },
    { label: stateName, href: `/tools/dscr-qualification-calculator/${state}` },
    { label: county.name, href: `/tools/dscr-qualification-calculator/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `What DSCR do I need for an investment property in ${city.name}, ${stateName}?`,
      answer: `Most DSCR lenders require a minimum ratio of 1.0 to 1.25. In ${city.name}, the median rent is ${formatCurrency(city.medianRent)}/mo and the median home value is ${formatCurrency(city.medianHomePrice)}. Use the calculator above to determine if your target property meets lender DSCR requirements with both amortizing and interest-only payment structures.`,
    },
    {
      question: `Can I use interest-only to improve DSCR qualification in ${city.name}?`,
      answer: `Yes. An interest-only payment removes the principal portion, lowering your monthly PITIA and boosting your DSCR. In ${city.name}, switching from amortizing to IO typically increases your DSCR by 0.15 to 0.30. The calculator above shows both options side by side so you can compare qualification outcomes.`,
    },
    {
      question: `What property tax rate applies to DSCR calculations in ${city.name}?`,
      answer: `The average effective property tax rate in ${city.name} is ${(city.avgPropertyTaxRate * 100).toFixed(2)}%. On an investment property valued at ${formatCurrency(city.medianHomePrice)}, that is approximately ${formatCurrency(Math.round(city.medianHomePrice * city.avgPropertyTaxRate))} per year. Property taxes are a key component of the PITIA payment used in DSCR calculations.`,
    },
  ];

  const internalLinks = [
    {
      label: `All ${county.name} Cities`,
      href: `/tools/dscr-qualification-calculator/${state}/${countySlug}`,
    },
    { label: `${stateName} Counties`, href: `/tools/dscr-qualification-calculator/${state}` },
    {
      label: `${city.name} DSCR Rent Analyzer`,
      href: `/tools/dscr-rent-analyzer/${state}/${countySlug}/${citySlug}`,
    },
    { label: 'DSCR Investment Loans', href: '/loan-programs/dscr-investment-loans' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `DSCR Qualification Calculator — ${city.name}, ${county.name}, ${stateName}`,
    description: `Check if your investment property qualifies for a DSCR loan in ${city.name}, ${county.name}, ${stateName}.`,
    url: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} DSCR Qualification Calculator`}
      subtitle={`Check if your investment property qualifies for a DSCR loan in ${city.name}, ${county.name}. Median rent: ${formatCurrency(city.medianRent)}/mo | Median home: ${formatCurrency(city.medianHomePrice)}.`}
      badgeText={`${city.name}, ${state.toUpperCase()}`}
      badgeColor="bg-slate-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <DscrQualificationCalculator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={city.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        medianRent={city.medianRent}
        avgPropertyTaxRate={city.avgPropertyTaxRate}
        avgAppreciation5yr={county.avgAppreciation5yr}
        cityName={city.name}
        dscrSnapshot={dscrSnapshot}
      />

      <div className="mt-8">
        <LoanProgramRedirect context="dscr" stateCode={state} countySlug={countySlug} />
      </div>
    </ToolPageLayout>
  );
}
