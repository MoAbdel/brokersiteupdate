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
import BankStatementEstimator from '@/components/tools/BankStatementEstimator';
import LoanProgramRedirect from '@/components/tools/LoanProgramRedirect';
import { generateBankStatementSnapshot } from '@/lib/bank-statement-snapshot';
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
    title: `Bank Statement Loan Estimator — ${county.name}, ${stateName} [Self-Employed 2026]`,
    description: `Estimate your bank statement loan qualification in ${county.name}, ${stateName}. Median home: ${formatCurrency(county.medianHomePrice)}. See qualifying income, max purchase price, and required documents for self-employed borrowers.`,
    path: `/tools/bank-statement-loan-estimator/${state}/${countySlug}`,
    type: 'website',
    noindex: true,
  });
}

export default async function CountyBankStatementPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);

  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);
  const snapshot = generateBankStatementSnapshot(county, county);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Bank Statement Loan Estimator', href: '/tools/bank-statement-loan-estimator' },
    { label: stateName, href: `/tools/bank-statement-loan-estimator/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What bank statement loan programs are available in ${county.name}, ${stateName}?`,
      answer: `Bank statement programs in ${county.name} accept 12 or 24 months of personal or business bank statements instead of tax returns. With a median home price of ${formatCurrency(county.medianHomePrice)} and a conforming limit of ${formatCurrency(county.conformingLoanLimit)}, most purchases in ${county.name} stay within conforming guidelines. Self-employed borrowers in service, retail, professional, and gig industries all qualify — each with business-type-specific expense factors.`,
    },
    {
      question: `How much do I need in monthly deposits to buy in ${county.name}?`,
      answer: `The deposit requirement depends on your business type and down payment. For a median-priced home at ${formatCurrency(county.medianHomePrice)} with 20% down, a service business owner typically needs significant monthly deposits. Use the calculator above with your actual numbers for a precise estimate.`,
    },
    {
      question: `Should I use 12 or 24 months of bank statements in ${county.name}?`,
      answer: `24-month statements generally produce stronger qualification because they smooth seasonal income variations and some lenders apply a slightly more favorable expense factor. However, if your income has increased recently, 12 months may show higher average deposits. The calculator above compares both options in the detailed report.`,
    },
    {
      question: `What expense factor will lenders use for my business in ${county.name}?`,
      answer: `Expense factors vary by business type: professional practices typically see 35-45%, service businesses 40-50%, and retail or gig businesses 45-55%. Each lender uses their own methodology — some use a flat percentage, others analyze actual expenses. Mo Abdel works with 200+ wholesale lenders to find the most favorable expense calculation for your situation.`,
    },
    {
      question: `Can I get a bank statement loan with less than 20% down in ${county.name}?`,
      answer: `Some bank statement programs accept as little as 10% down, though 15-20% is more common. Lower down payments typically require higher credit scores (680+) and may carry private mortgage insurance. In ${county.name}'s market, a larger down payment also increases your purchasing power by reducing the loan amount needed for qualification.`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/bank-statement-loan-estimator/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    { label: 'Bank Statement Loans', href: '/loan-programs/bank-statement-loans' },
    { label: 'Non-QM Loans', href: '/loan-programs/non-qm-loans' },
    { label: 'P&L Statement Loans', href: '/loan-programs/profit-loss-statement-loans' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...(cities.length > 0
      ? cities.slice(0, 6).map((c) => ({
          label: `${c.name} Bank Statement Estimator`,
          href: `/tools/bank-statement-loan-estimator/${state}/${countySlug}/${c.slug}`,
        }))
      : []),
  ];

  const schemas = buildToolSchemas({
    toolName: `Bank Statement Loan Estimator — ${county.name}, ${stateName}`,
    description: `Estimate your bank statement loan qualification in ${county.name}, ${stateName} using local market data.`,
    url: `/tools/bank-statement-loan-estimator/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} Bank Statement Loan Estimator`}
      subtitle={`Estimate your self-employed mortgage qualification in ${county.name}. Median home: ${formatCurrency(county.medianHomePrice)} | Conforming limit: ${formatCurrency(county.conformingLoanLimit)}.`}
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
        defaultHomeValue={county.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        snapshot={snapshot}
      />

      <div className="mt-8">
        <LoanProgramRedirect context="bank-statement" stateCode={state} countySlug={countySlug} />
      </div>

      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City Bank Statement Estimators in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/bank-statement-loan-estimator/${state}/${countySlug}/${city.slug}`}
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
