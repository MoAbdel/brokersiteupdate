import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import ClosingCostsCalculatorClient from './ClosingCostsCalculatorClient';

export const metadata: Metadata = generateMetadata({
  title: 'Closing Costs Calculator | Orange County Home Purchase Costs',
  description: 'Estimate lender fees, prepaid items, escrow deposits, and total cash needed to close on an Orange County home purchase.',
  path: '/calculator/closing-costs',
  keywords: ['closing costs calculator', 'Orange County closing costs', 'home purchase costs', 'cash to close calculator'],
  dateModified: '2026-04-07',
});

export default function ClosingCostsCalculatorPage() {
  return <ClosingCostsCalculatorClient />;
}
