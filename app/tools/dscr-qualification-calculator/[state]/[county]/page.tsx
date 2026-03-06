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
import DscrQualificationCalculator from '@/components/tools/DscrQualificationCalculator';
import { generateDscrSnapshot } from '@/lib/dscr-snapshot';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import LoanProgramRedirect from '@/components/tools/LoanProgramRedirect';

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
    title: `DSCR Loan Calculator — ${county.name}, ${stateName} [Check If You Qualify 2026]`,
    description: `Check if your investment property in ${county.name}, ${stateName} qualifies for a DSCR loan. Median rent: ${formatCurrency(county.medianRent)}/mo. Median home: ${formatCurrency(county.medianHomePrice)}. Instant qualification analysis with amortizing and interest-only comparison.`,
    path: `/tools/dscr-qualification-calculator/${state}/${countySlug}`,
    type: 'website',
  });
}

export default async function CountyDscrQualificationPage({ params }: Props) {
  const { state, county: countySlug } = await params;
  const county = getCounty(state, countySlug);
  const stateName = getStateName(state);

  if (!county || !stateName) notFound();

  const cities = getCitiesByCounty(state, countySlug);
  const dscrSnapshot = generateDscrSnapshot(county, county);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'DSCR Qualification Calculator', href: '/tools/dscr-qualification-calculator' },
    { label: stateName, href: `/tools/dscr-qualification-calculator/${state}` },
    { label: county.name },
  ];

  const faqs = [
    {
      question: `What DSCR do I need to qualify for a loan in ${county.name}, ${stateName}?`,
      answer: `Most DSCR lenders require a minimum ratio of 1.0 to 1.25. A 1.0 DSCR means the property's rental income exactly covers the mortgage payment (PITIA). A 1.25 DSCR — the most common lender minimum — means the rent is 25% higher than the payment. In ${county.name}, with a median rent of ${formatCurrency(county.medianRent)}/mo and a median home price of ${formatCurrency(county.medianHomePrice)}, use the calculator above to see your exact qualification.`,
    },
    {
      question: `Can I qualify for a DSCR loan below 1.0 in ${county.name}?`,
      answer: `Some lenders offer DSCR loans with ratios as low as 0.75, though these come with higher interest rates — typically 0.5% to 1.0% above standard DSCR pricing. A sub-1.0 DSCR means the rent does not fully cover the mortgage, so lenders view the loan as higher risk. In ${county.name}, the median rent is ${formatCurrency(county.medianRent)}/mo; if your property rents below PITIA, a sub-1.0 DSCR program may still work.`,
    },
    {
      question: `How does interest-only affect my DSCR in ${county.name}?`,
      answer: `An interest-only (IO) payment structure removes the principal portion of your mortgage for the first 5 to 10 years, lowering your monthly PITIA and boosting your DSCR ratio. In ${county.name}, switching from a 30-year amortizing loan to IO can increase your DSCR by 0.15 to 0.30, potentially pushing a marginal deal into qualification range. The calculator above shows both amortizing and IO DSCR side by side.`,
    },
    {
      question: `What is the conforming loan limit in ${county.name} for 2026?`,
      answer: `The 2026 conforming loan limit in ${county.name}, ${stateName} is ${formatCurrency(county.conformingLoanLimit)}. Loans above this threshold are classified as jumbo and typically carry higher rates, which reduces your DSCR. DSCR lenders offer both conforming and jumbo products, but qualification requirements may be stricter for jumbo amounts.`,
    },
    {
      question: `Do DSCR loans require income verification in ${county.name}?`,
      answer: `No. DSCR loans qualify based on the property's rental income relative to the mortgage payment — not your personal W-2, tax returns, or employment history. This makes DSCR loans ideal for self-employed investors, LLC-held properties, and borrowers with complex income structures. In ${county.name}, the property's market rent (median: ${formatCurrency(county.medianRent)}/mo) is the primary qualification factor.`,
    },
  ];

  const internalLinks = [
    { label: `${stateName} Counties`, href: `/tools/dscr-qualification-calculator/${state}` },
    { label: 'All Mortgage Tools', href: '/tools' },
    {
      label: `${county.name} DSCR Rent Analyzer`,
      href: `/tools/dscr-rent-analyzer/${state}/${countySlug}`,
    },
    { label: 'DSCR Investment Loans', href: '/loan-programs/dscr-investment-loans' },
    { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
    { label: 'Contact Mo Abdel', href: '/contact' },
    ...(cities.length > 0
      ? cities.slice(0, 6).map((c) => ({
          label: `${c.name} DSCR Calculator`,
          href: `/tools/dscr-qualification-calculator/${state}/${countySlug}/${c.slug}`,
        }))
      : []),
  ];

  const schemas = buildToolSchemas({
    toolName: `DSCR Qualification Calculator — ${county.name}, ${stateName}`,
    description: `Check if your investment property qualifies for a DSCR loan in ${county.name}, ${stateName} using 2026 market data.`,
    url: `/tools/dscr-qualification-calculator/${state}/${countySlug}`,
    countyName: county.name,
    stateName,
    breadcrumbs,
    faqs,
  });

  return (
    <ToolPageLayout
      title={`${county.name} DSCR Qualification Calculator`}
      subtitle={`Check if your investment property qualifies for a DSCR loan in ${county.name}. Median rent: ${formatCurrency(county.medianRent)}/mo | Median home: ${formatCurrency(county.medianHomePrice)}.`}
      badgeText={`${county.name}, ${state.toUpperCase()}`}
      badgeColor="bg-slate-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <DscrQualificationCalculator
        countyName={county.name}
        stateCode={state}
        defaultHomeValue={county.medianHomePrice}
        conformingLoanLimit={county.conformingLoanLimit}
        medianRent={county.medianRent}
        avgPropertyTaxRate={county.avgPropertyTaxRate}
        avgAppreciation5yr={county.avgAppreciation5yr}
        dscrSnapshot={dscrSnapshot}
      />

      <div className="mt-8">
        <LoanProgramRedirect context="dscr" stateCode={state} countySlug={countySlug} />
      </div>

      {/* City-level links */}
      {cities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            City DSCR Calculators in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tools/dscr-qualification-calculator/${state}/${countySlug}/${city.slug}`}
                className="group"
              >
                <Card className="hover:shadow-md hover:border-purple-300 transition-all">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">
                      {city.name}
                    </h3>
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>Rent: {formatCurrency(city.medianRent)}/mo</span>
                      <span>Home: {formatCurrency(city.medianHomePrice)}</span>
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
