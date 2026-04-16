import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { everett } from '@/lib/city-page-data/everett';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: everett.metaTitle,
  description: everett.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${everett.citySlug}` },
};

export default function EverettMortgageBrokerPage() {
  return <ProductLedCityTemplate city={everett} nearbyCities={nearbyCitiesFor('everett')} />;
}
