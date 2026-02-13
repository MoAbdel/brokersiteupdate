import type { Metadata } from 'next';
import SimpleLandingPage from '@/components/SimpleLandingPage';

export const metadata: Metadata = {
  title: 'Orange County Mortgage Broker | 200+ Lenders, Faster Closings | Mo Abdel',
  description:
    'Compare mortgage options across 200+ wholesale lenders with Mo Abdel (NMLS #1426884). Lower rates, faster closings, and tailored FHA, VA, jumbo, and non-QM solutions.',
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
};

export default function HomePage() {
  return <SimpleLandingPage />;
}