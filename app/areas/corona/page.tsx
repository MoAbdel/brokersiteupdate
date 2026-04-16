import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { corona } from '@/lib/city-page-data/corona';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: corona.metaTitle,
  description: corona.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${corona.citySlug}` },
};

export default function CoronaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={corona} nearbyCities={nearbyCitiesFor('corona')} />;
}
