import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { federalWay } from '@/lib/city-page-data/federal-way';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: federalWay.metaTitle,
  description: federalWay.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${federalWay.citySlug}` },
};

export default function FederalWayMortgageBrokerPage() {
  return <ProductLedCityTemplate city={federalWay} nearbyCities={nearbyCitiesFor('federal-way')} />;
}
