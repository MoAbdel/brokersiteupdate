import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { spokane } from '@/lib/city-page-data/spokane';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: spokane.metaTitle,
  description: spokane.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${spokane.citySlug}` },
};

export default function SpokaneMortgageBrokerPage() {
  return <ProductLedCityTemplate city={spokane} nearbyCities={nearbyCitiesFor('spokane')} />;
}
