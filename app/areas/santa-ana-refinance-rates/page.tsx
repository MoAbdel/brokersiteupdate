import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Santa Ana Refinance Rates 2026 | Cash-Out & Rate-Term Refinancing | Mo Abdel NMLS #1426884',
  description: 'Current Santa Ana refinance pricing and cash-out refinancing options. Compare rate-and-term refinance pricing in Santa Ana CA. Licensed mortgage broker Mo Abdel (949) 822-9662.',
  openGraph: {
    title: 'Santa Ana Refinance Rates 2026 | Cash-Out & Rate-Term Refinancing',
    description: 'Current Santa Ana refinance pricing and cash-out refinancing options. Compare rate-and-term refinance pricing in Santa Ana CA.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/areas/santa-ana-refinance-rates',
  },
};

const santaAnaData = {
  name: 'Santa Ana',
  slug: 'santa-ana-refinance-rates',
  population: 335000,
  medianHomePrice: 720000,
  medianHouseholdIncome: 65000,
  averageLoanAmount: 575000,
  topNeighborhoods: [
    'South Coast Metro',
    'Floral Park',
    'Park Santiago',
    'French Court'
  ],
  marketTrends: {
    priceGrowth: '4.8% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 38
  },
  localFactors: [
    'County seat location',
    'Diverse housing stock',
    'Historic neighborhoods',
    'Urban redevelopment'
  ],
  keywordPhrase: 'Santa Ana refinance pricing',
  specialization: 'refinance'
};

export default function SantaAnaRefinanceRatesPage() {
  return <CityPageTemplate cityData={santaAnaData} />;
}