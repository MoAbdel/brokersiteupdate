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
import PropertyTaxEstimator from '@/components/tools/PropertyTaxEstimator';

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

  const rate = (city.avgPropertyTaxRate * 100).toFixed(2);
  return genMeta({
    title: `Property Tax Estimator — ${city.name}, ${stateName} [${county.name} — 2026 Tax Rate ${rate}%]`,
    description: `Estimate property taxes in ${city.name}, ${county.name}, ${stateName}. Median home value: ${formatCurrency(city.medianHomePrice)}. 2026 effective rate: ${rate}%. Calculate annual and monthly property tax costs.`,
    path: `/tools/property-tax-estimator/${state}/${countySlug}/${citySlug}`,
    type: 'website',
  });
}

export default async function CityPropertyTaxPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);

  if (!county || !city || !stateName) notFound();

  const annualTax = Math.round(city.medianHomePrice * city.avgPropertyTaxRate);
  const monthlyTax = Math.round(annualTax / 12);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Property Tax Estimator', href: '/tools/property-tax-estimator' },
    { label: stateName, href: `/tools/property-tax-estimator/${state}` },
    { label: county.name, href: `/tools/property-tax-estimator/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `What is the property tax rate in ${city.name}, ${stateName}?`,
      answer: `${city.name} is in ${county.name}, which has an average effective property tax rate of ${(city.avgPropertyTaxRate * 100).toFixed(2)}% for 2026. On ${city.name}'s median home value of ${formatCurrency(city.medianHomePrice)}, that equals approximately ${formatCurrency(annualTax)} per year or ${formatCurrency(monthlyTax)} per month.`,
    },
    {
      question: `How much are property taxes on a ${formatCurrency(city.medianHomePrice)} home in ${city.name}?`,
      answer: `At the current effective rate of ${(city.avgPropertyTaxRate * 100).toFixed(2)}%, a home valued at ${formatCurrency(city.medianHomePrice)} in ${city.name} pays approximately ${formatCurrency(annualTax)} in annual property taxes. That breaks down to ${formatCurrency(monthlyTax)} per month added to your mortgage escrow payment.`,
    },
    {
      question: `Does ${city.name} have Mello-Roos or special assessments?`,
      answer: state === 'ca'
        ? `Many newer developments in ${city.name}, ${county.name} are subject to Mello-Roos Community Facilities District taxes. These special assessments fund infrastructure like roads, schools, and utilities and are added on top of the base property tax. The effective rate shown here includes estimated local assessments, but check your specific parcel for exact Mello-Roos amounts.`
        : `${city.name}, ${county.name} does not have Mello-Roos (a California-specific program). However, Washington property taxes include special levies for schools, fire districts, library districts, and other local services that vary by location within the county.`,
    },
    {
      question: `How do ${city.name} property taxes affect mortgage qualification?`,
      answer: `Lenders include property taxes in your total PITI payment when calculating debt-to-income ratios. In ${city.name}, the estimated ${formatCurrency(monthlyTax)}/month tax escrow on a median-priced home directly reduces the loan amount you qualify for. Mo Abdel can help you factor in property taxes when comparing loan programs.`,
    },
  ];

  const internalLinks = [
    {
      label: `All ${county.name} Cities`,
      href: `/tools/property-tax-estimator/${state}/${countySlug}`,
    },
    { label: `${stateName} Counties`, href: `/tools/property-tax-estimator/${state}` },
    { label: 'Down Payment Assistance', href: '/resources/down-payment-assistance' },
    { label: 'Conventional Loans', href: '/loan-programs/conventional-loans' },
    { label: 'FHA Loans', href: '/loan-programs/fha-loans' },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `Property Tax Estimator — ${city.name}, ${county.name}, ${stateName}`,
    description: `Estimate annual and monthly property taxes for ${city.name}, ${county.name}, ${stateName}.`,
    url: `/tools/property-tax-estimator/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} Property Tax Estimator`}
      subtitle={`Estimate your property taxes in ${city.name}, ${county.name}. Median home value: ${formatCurrency(city.medianHomePrice)} | 2026 effective rate: ${(city.avgPropertyTaxRate * 100).toFixed(2)}%.`}
      badgeText={`${city.name}, ${state.toUpperCase()}`}
      badgeColor="bg-blue-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <PropertyTaxEstimator
        countyName={`${city.name}, ${county.name}`}
        stateCode={state}
        defaultHomeValue={city.medianHomePrice}
        avgPropertyTaxRate={city.avgPropertyTaxRate}
        stateName={stateName}
      />
    </ToolPageLayout>
  );
}
