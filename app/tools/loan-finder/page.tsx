import React from 'react';
import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/metadata';
import ToolPageLayout, { buildToolSchemas } from '@/components/tools/ToolPageLayout';
import LoanFinderQuiz from '@/components/tools/LoanFinderQuiz';

export const metadata: Metadata = genMeta({
  title: 'Which Loan Program Am I? — Find Your Match in 60 Seconds [2026]',
  description:
    'Answer 5 quick questions to find the right mortgage program for your situation. Matches you to conventional, FHA, DSCR, bank statement, HELOC, and more — with direct links to calculators.',
  path: '/tools/loan-finder',
  type: 'website',
});

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '/tools' },
  { label: 'Find Your Loan Program' },
];

const faqs = [
  {
    question: 'How does the loan program quiz work?',
    answer:
      'The quiz asks 5 questions about your goal, income type, property type, documentation situation, and location. Based on your answers, it matches you to the most relevant loan program and links you to the right calculator for a detailed estimate. The entire process takes about 60 seconds.',
  },
  {
    question: 'Is this quiz accurate?',
    answer:
      'The quiz provides a strong starting point based on common program matching criteria. However, every borrower\'s situation is unique — factors like credit score, exact income, and property specifics affect final program eligibility. For a definitive answer, contact Mo Abdel for a free scenario review with access to 50+ Wholesale Lenders.',
  },
  {
    question: 'What programs does the quiz match to?',
    answer:
      'The quiz covers conventional mortgages, FHA loans, DSCR investment loans, bank statement loans, HELOCs, cash-out refinances, rate-and-term refinances, HECM reverse mortgages, and foreign national programs. It also identifies situations that benefit from a custom scenario review.',
  },
  {
    question: 'Do I need to create an account to take the quiz?',
    answer:
      'No account or login required. The quiz is completely free. After seeing your results, you can optionally enter your email to receive a detailed comparison report with required documents, timelines, and questions to ask your broker.',
  },
];

const internalLinks = [
  { label: 'All Mortgage Tools', href: '/tools' },
  { label: 'DSCR Qualification Calculator', href: '/tools/dscr-qualification-calculator' },
  { label: 'Bank Statement Loan Estimator', href: '/tools/bank-statement-loan-estimator' },
  { label: 'Max HELOC Calculator', href: '/tools/max-heloc-calculator' },
  { label: 'Cash-Out Limit Calculator', href: '/tools/cash-out-limit-calculator' },
  { label: 'All Loan Programs', href: '/loan-programs' },
  { label: 'Contact Mo Abdel', href: '/contact' },
];

const schemas = buildToolSchemas({
  toolName: 'Loan Finder Quiz — Which Loan Program Am I?',
  description:
    'Answer 5 quick questions to find the right mortgage program. Matches to conventional, DSCR, bank statement, HELOC, and more.',
  url: '/tools/loan-finder',
  countyName: 'California & Washington',
  stateName: 'United States',
  breadcrumbs,
  faqs,
});

export default function LoanFinderPage() {
  return (
    <ToolPageLayout
      title="Which Loan Program Am I?"
      subtitle="Answer 5 quick questions — get matched to the right mortgage program in 60 seconds."
      badgeText="60-Second Quiz"
      badgeColor="bg-emerald-100 text-emerald-700"
      breadcrumbs={breadcrumbs}
      faqs={faqs}
      internalLinks={internalLinks}
      schemaJsonLd={schemas}
    >
      <LoanFinderQuiz />
    </ToolPageLayout>
  );
}
