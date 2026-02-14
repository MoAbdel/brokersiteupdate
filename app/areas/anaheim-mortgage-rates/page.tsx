import React from 'react';
import type { Metadata } from 'next';
import CityPageTemplate from '@/components/seo/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Anaheim Mortgage pricing 2026 | Best Home Loan Rates CA | Mo Abdel NMLS #1426884',
  description: 'Current Anaheim mortgage pricing and home loan options. Compare FHA, VA, conventional rates in Anaheim CA. Licensed mortgage broker Mo Abdel NMLS #1426884.',
  openGraph: {
    title: 'Anaheim Mortgage pricing 2026 | Best Home Loan Rates CA',
    description: 'Current Anaheim mortgage pricing and home loan options. Compare FHA, VA, conventional rates in Anaheim CA.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mothebroker.com/areas/anaheim-mortgage-rates',
    languages: {
      'en-US': 'https://www.mothebroker.com/areas/anaheim-mortgage-rates',
      'x-default': 'https://www.mothebroker.com/areas/anaheim-mortgage-rates',
    },
  },
};

const anaheimData = {
  name: 'Anaheim',
  slug: 'anaheim-mortgage-rates',
  population: 354000,
  medianHomePrice: 775000,
  medianHouseholdIncome: 67800,
  averageLoanAmount: 620000,
  topNeighborhoods: [
    'Anaheim Hills',
    'Downtown Anaheim',
    'Canyon Area',
    'West Anaheim'
  ],
  marketTrends: {
    priceGrowth: '3.8% annually',
    inventoryLevel: 'Moderate',
    averageDaysOnMarket: 32
  },
  localFactors: [
    'Disney area proximity',
    'Sports venues nearby',
    'Diverse housing options',
    'Strong rental market'
  ],
  keywordPhrase: 'Anaheim mortgage pricing'
};

export default function AnaheimMortgageRatesPage() {
  return <CityPageTemplate cityData={anaheimData} />;
}