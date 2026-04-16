import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { fullerton } from '@/lib/city-page-data/fullerton';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: fullerton.metaTitle,
  description: fullerton.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${fullerton.citySlug}` },
};

export default function FullertonMortgageBrokerPage() {
  return <ProductLedCityTemplate city={fullerton} nearbyCities={nearbyCitiesFor('fullerton')} />;
}
