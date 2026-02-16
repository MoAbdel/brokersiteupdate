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
import MaxHelocCalculator from '@/components/tools/MaxHelocCalculator';

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
    title: `Max HELOC Calculator — ${city.name}, ${stateName} [${county.name} — 2026 Equity Line Limits & CLTV Analysis]`,
    description: `Calculate your maximum HELOC line in ${city.name}, ${county.name}, ${stateName}. Median home value: ${formatCurrency(city.medianHomePrice)}. 2026 conforming limit: ${formatCurrency(county.conformingLoanLimit)}. Instant 80/85/90% CLTV analysis.`,
    path: `/tools/max-heloc-calculator/${state}/${countySlug}/${citySlug}`,
    type: 'website',
  });
}

export default async function CityHelocPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);

  if (!county || !city || !stateName) notFound();

  const estimatedLine85 = Math.max(
    0,
    Math.round(city.medianHomePrice * 0.85 - city.medianHomePrice * 0.6)
  );

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Max HELOC Calculator', href: '/tools/max-heloc-calculator' },
    { label: stateName, href: `/tools/max-heloc-calculator/${state}` },
    { label: county.name, href: `/tools/max-heloc-calculator/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `What is the maximum HELOC available in ${city.name}, ${stateName}?`,
      answer: `${city.name} is in ${county.name}, which has a 2026 FHFA conforming loan limit of ${formatCurrency(county.conformingLoanLimit)}. With ${city.name}'s median home value of ${formatCurrency(city.medianHomePrice)} and a 60% existing mortgage, you could access up to ${formatCurrency(estimatedLine85)} at 85% CLTV. Enter your actual numbers above for a personalized calculation.`,
    },
    {
      question: `How does a HELOC draw period work in ${city.name}?`,
      answer: `A typical HELOC has a 10-year draw period where you can access funds as needed, paying only interest on what you use. After the draw period, you enter a 20-year repayment phase with principal and interest payments. During the draw period, your available credit replenishes as you repay — similar to a credit card secured by your ${city.name} property.`,
    },
    {
      question: `Should I get a HELOC or cash-out refinance in ${city.name}?`,
      answer: `A HELOC is ideal if you want flexible, revolving access to equity without refinancing your first mortgage — especially if your current rate is low. A cash-out refinance replaces your entire mortgage with a new, larger loan. In ${city.name}, with median values at ${formatCurrency(city.medianHomePrice)}, both options provide significant equity access. Mo Abdel can compare both scenarios with rates from 200+ wholesale lenders.`,
    },
    {
      question: `What credit score do I need for a HELOC in ${county.name}?`,
      answer: `Most HELOC lenders require a minimum credit score of 680, though some wholesale lenders offer HELOCs down to 620 with compensating factors. Higher scores (720+) unlock better rates and higher CLTV allowances. With ${city.name}'s property values, strong equity positions can offset marginal credit in some programs.`,
    },
  ];

  const internalLinks = [
    {
      label: `All ${county.name} Cities`,
      href: `/tools/max-heloc-calculator/${state}/${countySlug}`,
    },
    { label: `${stateName} Counties`, href: `/tools/max-heloc-calculator/${state}` },
    { label: 'HELOC Program', href: '/loan-programs/heloc' },
    { label: 'HELOAN Program', href: '/loan-programs/heloan' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `Max HELOC Calculator — ${city.name}, ${county.name}, ${stateName}`,
    description: `Calculate maximum HELOC equity line amounts for ${city.name}, ${county.name}, ${stateName}.`,
    url: `/tools/max-heloc-calculator/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} Max HELOC Calculator`}
      subtitle={`Calculate your maximum home equity line of credit in ${city.name}, ${county.name}. Median home value: ${formatCurrency(city.medianHomePrice)} | 2026 conforming limit: ${formatCurrency(county.conformingLoanLimit)}.`}
      badgeText={`${city.name}, ${state.toUpperCase()}`}
      badgeColor="bg-amber-100 text-amber-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <MaxHelocCalculator
        countyName={`${city.name}, ${county.name}`}
        stateCode={state}
        defaultHomeValue={city.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        avgAppreciation5yr={county.avgAppreciation5yr}
      />
    </ToolPageLayout>
  );
}
