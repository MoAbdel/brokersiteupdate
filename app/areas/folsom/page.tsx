import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { folsom } from '@/lib/city-page-data/folsom';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: folsom.metaTitle,
  description: folsom.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${folsom.citySlug}` },
};

export default function FolsomMortgageBrokerPage() {
  return <ProductLedCityTemplate city={folsom} nearbyCities={nearbyCitiesFor('folsom')} />;
}
