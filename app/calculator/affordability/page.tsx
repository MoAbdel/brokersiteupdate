import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import AffordabilityCalculatorClient from './AffordabilityCalculatorClient';

export const metadata: Metadata = generateMetadata({
  title: 'Home Affordability Calculator | Orange County Mortgage Planning',
  description: 'Estimate how much house you can afford in Orange County using your income, monthly debts, down payment, and target rate.',
  path: '/calculator/affordability',
  keywords: ['home affordability calculator', 'how much house can I afford', 'Orange County mortgage calculator', 'debt-to-income affordability'],
  dateModified: '2026-04-07',
});

export default function AffordabilityCalculatorPage() {
  return <AffordabilityCalculatorClient />;
}
