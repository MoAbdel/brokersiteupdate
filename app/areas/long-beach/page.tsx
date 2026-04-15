import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { longBeach } from '@/lib/city-page-data/long-beach';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: longBeach.metaTitle,
  description: longBeach.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${longBeach.citySlug}` },
};

export default function LongBeachMortgageBrokerPage() {
  return <ProductLedCityTemplate city={longBeach} nearbyCities={nearbyCitiesFor('long-beach')} />;
}
