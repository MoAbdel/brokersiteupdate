import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/metadata';
import { STATES } from '@/lib/geo-data';
import { Card, CardContent } from '@/components/ui/Card';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';

export const metadata: Metadata = genMeta({
  title: 'Bank Statement Loan Estimator — Self-Employed Mortgage Qualification [2026]',
  description:
    'Estimate your bank statement loan qualification as a self-employed borrower. See your qualifying income, max purchase price, and required documents for CA and WA counties.',
  path: '/tools/bank-statement-loan-estimator',
  type: 'website',
});

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '/tools' },
  { label: 'Bank Statement Loan Estimator' },
];

const faqs = [
  {
    question: 'What is a bank statement loan?',
    answer:
      'A bank statement loan uses 12 or 24 months of personal or business bank statements instead of tax returns to verify income. Lenders calculate your qualifying income by subtracting an expense factor from your average monthly deposits. This makes bank statement loans ideal for self-employed borrowers whose tax returns understate their actual earning capacity.',
  },
  {
    question: 'How accurate is this bank statement loan estimator?',
    answer:
      'This tool provides an estimate based on standard expense factors and current market rates. Actual qualification varies by lender — each has its own expense factor methodology, minimum deposit requirements, and program guidelines. Use this as a starting point, then contact Mo Abdel for a full scenario review with 50+ Wholesale Lenders.',
  },
];

const internalLinks = [
  { label: 'All Mortgage Tools', href: '/tools' },
  { label: 'Bank Statement Loans', href: '/loan-programs/bank-statement-loans' },
  { label: 'Non-QM Loans', href: '/loan-programs/non-qm-loans' },
  { label: 'DSCR Qualification Calculator', href: '/tools/dscr-qualification-calculator' },
  { label: 'Contact Mo Abdel', href: '/contact' },
];

const schemas = buildToolSchemas({
  toolName: 'Bank Statement Loan Estimator',
  description:
    'Estimate your bank statement loan qualification as a self-employed borrower across California and Washington.',
  url: '/tools/bank-statement-loan-estimator',
  countyName: 'California & Washington',
  stateName: 'United States',
  breadcrumbs,
  faqs,
});

export default function BankStatementHubPage() {
  return (
    <ToolPageLayout
      title="Bank Statement Loan Estimator"
      subtitle="Estimate your self-employed mortgage qualification using bank deposits instead of tax returns. Select your state and county below."
      badgeText="Self-Employed"
      badgeColor="bg-amber-100 text-amber-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STATES.map((s) => (
          <Link key={s.code} href={`/tools/bank-statement-loan-estimator/${s.slug}`}>
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
