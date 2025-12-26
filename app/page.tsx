import React from 'react';
import type { Metadata } from 'next';
import SimpleLandingPage from '@/components/SimpleLandingPage';

export const metadata: Metadata = {
  title: 'Mo Abdel - Mortgage Broker | West Capital Lending | 100+ Wholesale Lenders',
  description: 'Your direct line to 100+ wholesale lenders in California. Mo Abdel, Mortgage Broker at West Capital Lending. NMLS #1426884 | Company NMLS #1566096 | CA DRE #02022356. Better pricing through wholesale pricing.',
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
};

export default function HomePage() {
  return <SimpleLandingPage />;
}