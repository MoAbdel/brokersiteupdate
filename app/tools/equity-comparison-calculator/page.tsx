import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { STATES } from '@/lib/geo-data';
import { Card, CardContent } from '@/components/ui/Card';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';

export const metadata: Metadata = genMeta({
  title: 'HELOC vs Cash-Out Refi vs HELOAN Comparison Calculator [2026]',
  description:
    'Compare HELOC, cash-out refinance, and home equity loan options side by side. See monthly payments, total costs, and which equity access method saves the most for your situation in CA and WA.',
  path: '/tools/equity-comparison-calculator',
  type: 'website',
});

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '/tools' },
  { label: 'Equity Comparison Calculator' },
];

const faqs = [
  {
    question: 'What is the difference between a HELOC, cash-out refinance, and home equity loan?',
    answer:
      'A HELOC is a revolving credit line secured by your home — you draw funds as needed and pay interest only on what you use. A cash-out refinance replaces your existing mortgage with a larger one and gives you the difference in cash at a fixed rate. A home equity loan (HELOAN) provides a lump sum at a fixed rate as a second lien, leaving your first mortgage untouched. Each option has different rates, payment structures, and closing costs that affect total cost.',
  },
  {
    question: 'How do I decide which equity access option is best for my situation?',
    answer:
      'The best option depends on your current mortgage rate, how much equity you need, and your repayment preference. If your first mortgage rate is below current market rates, a HELOC or HELOAN preserves that low rate. If you need a large lump sum and your current rate is high, a cash-out refinance consolidates everything into one payment. Use the calculator to compare all three options with your actual numbers.',
  },
];

const internalLinks = [
  { label: 'All Mortgage Tools', href: '/tools' },
  { label: 'HELOC Program', href: '/loan-programs/heloc' },
  { label: 'Cash-Out Refinance', href: '/loan-programs/cash-out-refinance' },
  { label: 'Home Equity Loans', href: '/loan-programs/heloan' },
  { label: 'DSCR Qualification Calculator', href: '/tools/dscr-qualification-calculator' },
  { label: 'Bank Statement Loan Estimator', href: '/tools/bank-statement-loan-estimator' },
  { label: 'Contact Mo Abdel', href: '/contact' },
];

const schemas = buildToolSchemas({
  toolName: 'HELOC vs Cash-Out Refi vs HELOAN Comparison Calculator',
  description:
    'Compare HELOC, cash-out refinance, and home equity loan options side by side across California and Washington.',
  url: '/tools/equity-comparison-calculator',
  countyName: 'California & Washington',
  stateName: 'United States',
  breadcrumbs,
  faqs,
});

export default function EquityComparisonHubPage() {
  return (
    <ToolPageLayout
      title="HELOC vs Cash-Out Refi vs HELOAN Comparison Calculator"
      subtitle="Compare home equity access options side by side. See monthly payments, total interest, and which method saves the most. Select your state and county below."
      badgeText="Homeowners"
      badgeColor="bg-blue-100 text-blue-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STATES.map((s) => (
          <Link key={s.code} href={`/tools/equity-comparison-calculator/${s.slug}`}>
            <Card className="hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-1">{s.name}</h2>
                <p className="text-sm text-slate-600">
                  {s.countyCount} counties with local market data
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </ToolPageLayout>
  );
}
