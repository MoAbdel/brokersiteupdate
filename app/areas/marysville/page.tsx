import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { marysville } from '@/lib/city-page-data/marysville';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: marysville.metaTitle,
  description: marysville.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${marysville.citySlug}` },
};

export default function MarysvilleMortgageBrokerPage() {
  return <ProductLedCityTemplate city={marysville} nearbyCities={nearbyCitiesFor('marysville')} />;
}
