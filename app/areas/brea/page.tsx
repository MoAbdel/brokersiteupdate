import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { brea } from '@/lib/city-page-data/brea';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: brea.metaTitle,
  description: brea.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${brea.citySlug}` },
};

export default function BreaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={brea} nearbyCities={nearbyCitiesFor('brea')} />;
}
