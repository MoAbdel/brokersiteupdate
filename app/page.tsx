import type { Metadata } from 'next';
import SimpleLandingPage from '@/components/SimpleLandingPage';

export const metadata: Metadata = {
  title: 'Mo Abdel | California & Washington Mortgage Broker | NMLS #1426884',
  description: 'California and Washington mortgage broker with 50+ lenders. Competitive rates & fast closings for FHA, VA, Conventional & Non-QM loans. Mo Abdel, NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
};

export default function HomePage() {
  return <SimpleLandingPage />;
}