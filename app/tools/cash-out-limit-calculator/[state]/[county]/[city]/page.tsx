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
import CashOutCalculator from '@/components/tools/CashOutCalculator';

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
    title: `Cash-Out Refinance ${city.name}, ${stateName} [${county.name} — 2026 Limit ${formatCurrency(county.conformingLoanLimit)}]`,
    description: `Calculate your maximum cash-out refinance in ${city.name}, ${county.name}, ${stateName}. Median home value: ${formatCurrency(city.medianHomePrice)}. 2026 conforming limit: ${formatCurrency(county.conformingLoanLimit)}. Instant 80/85/90% LTV analysis.`,
    path: `/tools/cash-out-limit-calculator/${state}/${countySlug}/${citySlug}`,
    type: 'website',
  });
}

export default async function CityCalculatorPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);

  if (!county || !city || !stateName) notFound();

  const maxCashOut80 = Math.round(city.medianHomePrice * 0.8 - city.medianHomePrice * 0.6);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Cash-Out Calculator', href: '/tools/cash-out-limit-calculator' },
    { label: stateName, href: `/tools/cash-out-limit-calculator/${state}` },
    { label: county.name, href: `/tools/cash-out-limit-calculator/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `What is the 2026 conforming loan limit for ${city.name}, ${stateName}?`,
      answer: `${city.name} is in ${county.name}, which has a 2026 FHFA conforming loan limit of ${formatCurrency(county.conformingLoanLimit)}. This limit applies to all cities within the county. Loans exceeding this amount require jumbo financing.`,
    },
    {
      question: `How much equity can I access through a cash-out refinance in ${city.name}?`,
      answer: `With ${city.name}'s median home value of ${formatCurrency(city.medianHomePrice)}, a homeowner with 40% equity could access approximately ${formatCurrency(maxCashOut80)} at 80% LTV. Enter your actual home value and mortgage balance above for a personalized calculation.`,
    },
    {
      question: `What property tax rate applies in ${city.name}, ${county.name}?`,
      answer: `The average effective property tax rate in ${city.name} is ${(city.avgPropertyTaxRate * 100).toFixed(2)}%. On a home valued at ${formatCurrency(city.medianHomePrice)}, that's approximately ${formatCurrency(Math.round(city.medianHomePrice * city.avgPropertyTaxRate))} per year. Property taxes are factored into your total PITI payment.`,
    },
  ];

  const internalLinks = [
    {
      label: `All ${county.name} Cities`,
      href: `/tools/cash-out-limit-calculator/${state}/${countySlug}`,
    },
    { label: `${stateName} Counties`, href: `/tools/cash-out-limit-calculator/${state}` },
    { label: 'Cash-Out Refinance Program', href: '/loan-programs/cash-out-refinance' },
    { label: 'HELOC Program', href: '/loan-programs/heloc' },
    { label: 'Conventional Loans', href: '/loan-programs/conventional-loans' },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `Cash-Out Refinance Calculator — ${city.name}, ${county.name}, ${stateName}`,
    description: `Calculate maximum cash-out refinance amounts for ${city.name}, ${county.name}, ${stateName}.`,
    url: `/tools/cash-out-limit-calculator/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} Cash-Out Refinance Calculator`}
      subtitle={`Calculate your maximum cash-out amount in ${city.name}, ${county.name}. Median home value: ${formatCurrency(city.medianHomePrice)} | 2026 conforming limit: ${formatCurrency(county.conformingLoanLimit)}.`}
      badgeText={`${city.name}, ${state.toUpperCase()}`}
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <CashOutCalculator
        countyName={`${city.name}, ${county.name}`}
        stateCode={state}
        defaultHomeValue={city.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        avgAppreciation5yr={county.avgAppreciation5yr}
        avgPropertyTaxRate={city.avgPropertyTaxRate}
      />
    </ToolPageLayout>
  );
}
