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
import BankStatementEstimator from '@/components/tools/BankStatementEstimator';
import LoanProgramRedirect from '@/components/tools/LoanProgramRedirect';
import { generateBankStatementSnapshot } from '@/lib/bank-statement-snapshot';

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
    title: `Bank Statement Loan Estimator — ${city.name}, ${stateName} [Self-Employed 2026]`,
    description: `Estimate your bank statement loan qualification in ${city.name}, ${county.name}, ${stateName}. Median home: ${formatCurrency(city.medianHomePrice)}. Self-employed mortgage estimates with local market data.`,
    path: `/tools/bank-statement-loan-estimator/${state}/${countySlug}/${citySlug}`,
    type: 'website',
    noindex: true,
  });
}

export default async function CityBankStatementPage({ params }: Props) {
  const { state, county: countySlug, city: citySlug } = await params;
  const county = getCounty(state, countySlug);
  const city = getCity(state, countySlug, citySlug);
  const stateName = getStateName(state);

  if (!county || !city || !stateName) notFound();

  const snapshot = generateBankStatementSnapshot(county, city);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Bank Statement Loan Estimator', href: '/tools/bank-statement-loan-estimator' },
    { label: stateName, href: `/tools/bank-statement-loan-estimator/${state}` },
    { label: county.name, href: `/tools/bank-statement-loan-estimator/${state}/${countySlug}` },
    { label: city.name },
  ];

  const faqs = [
    {
      question: `How do bank statement loans work for self-employed buyers in ${city.name}?`,
      answer: `Bank statement loans in ${city.name} use 12 or 24 months of deposits to qualify you instead of tax returns. With a median home price of ${formatCurrency(city.medianHomePrice)}, self-employed buyers in ${city.name} can use personal or business bank statements to demonstrate income. Lenders apply an expense factor based on your business type to calculate qualifying income.`,
    },
    {
      question: `What monthly deposits do I need to buy a home in ${city.name}?`,
      answer: `The deposit requirement depends on your business type, down payment, and target price. For a median-priced home in ${city.name} at ${formatCurrency(city.medianHomePrice)} with 20% down, use the calculator above with your actual deposit amount to see if you qualify. Professional practices need the lowest deposits thanks to a favorable 40% expense factor.`,
    },
    {
      question: `Is ${city.name} within the conforming loan limit for bank statement loans?`,
      answer: `${county.name}'s 2026 conforming loan limit is ${formatCurrency(county.conformingLoanLimit)}. At ${city.name}'s median price of ${formatCurrency(city.medianHomePrice)}, ${city.medianHomePrice * 0.8 <= county.conformingLoanLimit ? 'most purchases with 20% down stay within conforming limits — giving you access to the best available bank statement rates' : 'many purchases will require jumbo bank statement programs, which may have stricter qualification requirements'}.`,
    },
  ];

  const internalLinks = [
    { label: `${county.name} Estimator`, href: `/tools/bank-statement-loan-estimator/${state}/${countySlug}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'Bank Statement Loans', href: '/loan-programs/bank-statement-loans' },
    { label: `${city.name} DSCR Calculator`, href: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${citySlug}` },
    { label: 'Contact Mo Abdel', href: '/contact' },
  ];

  const schemas = buildToolSchemas({
    toolName: `Bank Statement Loan Estimator — ${city.name}, ${stateName}`,
    description: `Estimate your bank statement loan qualification in ${city.name}, ${county.name}, ${stateName}.`,
    url: `/tools/bank-statement-loan-estimator/${state}/${countySlug}/${citySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${city.name} Bank Statement Loan Estimator`}
      subtitle={`Estimate your self-employed mortgage qualification in ${city.name}. Median home: ${formatCurrency(city.medianHomePrice)}.`}
      badgeText="Self-Employed"
      badgeColor="bg-amber-100 text-amber-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <BankStatementEstimator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={city.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        snapshot={snapshot}
      />

      <div className="mt-8">
        <LoanProgramRedirect context="bank-statement" stateCode={state} countySlug={countySlug} />
      </div>
    </ToolPageLayout>
  );
}
