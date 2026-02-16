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
import PropertyTaxEstimator from '@/components/tools/PropertyTaxEstimator';
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

  const rate = (county.avgPropertyTaxRate * 100).toFixed(2);
  return genMeta({
    title: `Property Tax Estimator — ${county.name}, ${stateName} [2026 Tax Rate ${rate}% & Annual Cost Calculator]`,
    description: `Estimate property taxes in ${county.name}, ${stateName}. 2026 average effective rate: ${rate}%. Median home value: ${formatCurrency(county.medianHomePrice)}. Calculate annual and monthly property tax costs instantly.`,
    path: `/tools/property-tax-estimator/${state}/${countySlug}`,
    type: 'website',
  });
}

export default async function CountyPropertyTaxPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);

  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);
  const annualTaxMedian = Math.round(county.medianHomePrice * county.avgPropertyTaxRate);
  const monthlyTaxMedian = Math.round(annualTaxMedian / 12);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Property Tax Estimator', href: '/tools/property-tax-estimator' },
    { label: stateName, href: `/tools/property-tax-estimator/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What is the average property tax rate in ${county.name}, ${stateName}?`,
      answer: `The average effective property tax rate in ${county.name} is ${(county.avgPropertyTaxRate * 100).toFixed(2)}% for 2026. On the median home value of ${formatCurrency(county.medianHomePrice)}, that equals approximately ${formatCurrency(annualTaxMedian)} per year or ${formatCurrency(monthlyTaxMedian)} per month.`,
    },
    {
      question: `How are property taxes calculated in ${county.name}?`,
      answer: state === 'ca'
        ? `In ${county.name}, California, property taxes start with Proposition 13's base rate of 1% of the assessed value (purchase price), plus voter-approved local bonds and Mello-Roos special assessments. The assessed value increases by a maximum of 2% per year regardless of market appreciation.`
        : `In ${county.name}, Washington, property taxes are based on the assessed market value determined by the county assessor. Rates are set annually by local taxing districts including schools, fire, and utilities. Washington has no state income tax, so property taxes fund a larger share of local services.`,
    },
    {
      question: `What is Mello-Roos and does it affect ${county.name} property taxes?`,
      answer: state === 'ca'
        ? `Mello-Roos is a special tax district in California that funds local infrastructure and services in newer developments. Many communities in ${county.name} have Mello-Roos assessments ranging from 0.25% to 1.5% of the home's original sale price, added on top of the base property tax. Check with ${county.name} County Assessor for specific Mello-Roos districts.`
        : `Mello-Roos is a California-specific special tax district and does not apply in ${county.name}, Washington. However, Washington has similar special purpose levies for schools, fire districts, and utility infrastructure that are included in your property tax bill.`,
    },
    {
      question: `How do property taxes affect my mortgage payment in ${county.name}?`,
      answer: `Property taxes are included in your monthly PITI payment (Principal, Interest, Taxes, Insurance). In ${county.name}, the estimated ${formatCurrency(monthlyTaxMedian)}/month tax escrow on a median-priced home is factored into your debt-to-income ratio by lenders. This directly affects how much home you qualify for.`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/property-tax-estimator/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'Down Payment Assistance', href: '/resources/down-payment-assistance' },
    { label: 'Conventional Loans', href: '/loan-programs/conventional-loans' },
    { label: 'FHA Loans', href: '/loan-programs/fha-loans' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...(cities.length > 0
      ? cities.slice(0, 6).map((c) => ({
          label: `${c.name} Property Tax Estimator`,
          href: `/tools/property-tax-estimator/${state}/${countySlug}/${c.slug}`,
        }))
      : []),
  ];

  const schemas = buildToolSchemas({
    toolName: `Property Tax Estimator — ${county.name}, ${stateName}`,
    description: `Estimate annual and monthly property taxes for ${county.name}, ${stateName} using 2026 county-specific tax rates.`,
    url: `/tools/property-tax-estimator/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} Property Tax Estimator`}
      subtitle={`Estimate your property taxes in ${county.name} using the 2026 average effective rate of ${(county.avgPropertyTaxRate * 100).toFixed(2)}% and median home value of ${formatCurrency(county.medianHomePrice)}.`}
      badgeText={`${county.name}, ${state.toUpperCase()}`}
      badgeColor="bg-blue-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <PropertyTaxEstimator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={county.medianHomePrice}
        avgPropertyTaxRate={county.avgPropertyTaxRate}
        stateName={stateName}
      />

      {/* City-level links */}
      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City Tax Estimators in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/property-tax-estimator/${state}/${countySlug}/${city.slug}`}
                className="group"
              >
                <Card className="hover:shadow-md hover:border-blue-300 transition-all">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">
                      {city.name}
                    </h3>
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>Median: {formatCurrency(city.medianHomePrice)}</span>
                      <span>Rate: {(city.avgPropertyTaxRate * 100).toFixed(2)}%</span>
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
