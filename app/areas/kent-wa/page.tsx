import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { kentWa } from '@/lib/city-page-data/kent-wa';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: kentWa.metaTitle,
  description: kentWa.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${kentWa.citySlug}` },
};

export default function KentWaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={kentWa} nearbyCities={nearbyCitiesFor('kent-wa')} />;
}
