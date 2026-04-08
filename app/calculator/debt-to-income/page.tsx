import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import DebtToIncomeCalculatorClient from './DebtToIncomeCalculatorClient';

export const metadata: Metadata = generateMetadata({
  title: 'Debt-to-Income Calculator | Mortgage Qualification Check',
  description: 'Calculate front-end and back-end debt-to-income ratios to see how your income and monthly debts affect mortgage approval.',
  path: '/calculator/debt-to-income',
  keywords: ['debt-to-income calculator', 'DTI calculator', 'mortgage qualification calculator', 'front-end back-end ratio'],
  dateModified: '2026-04-07',
});

export default function DebtToIncomeCalculatorPage() {
  return <DebtToIncomeCalculatorClient />;
}
