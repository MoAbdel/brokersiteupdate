import React from 'react';
import type { Metadata } from 'next';
import SimpleLandingPage from '@/components/SimpleLandingPage';

export const metadata: Metadata = {
  title: 'Mo Abdel | Orange County Mortgage Broker | NMLS #1426884',
  description: 'Orange County mortgage broker with 100+ lenders. Competitive rates & fast closings for FHA, VA, Conventional & Non-QM loans. Mo Abdel, NMLS #1426884.',
  alternates: {
    canonical: 'https://www.mothebroker.com',
  },
  openGraph: {
    images: [
      {
        url: '/images/mo-headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Mo Abdel - Orange County Mortgage Broker',
      },
    ],
  },
};

export default function HomePage() {
  return <SimpleLandingPage />;
}