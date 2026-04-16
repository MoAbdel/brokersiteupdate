import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { lagunaHills } from '@/lib/city-page-data/laguna-hills';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: lagunaHills.metaTitle,
  description: lagunaHills.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${lagunaHills.citySlug}` },
};

export default function LagunaHillsMortgageBrokerPage() {
  return <ProductLedCityTemplate city={lagunaHills} nearbyCities={nearbyCitiesFor('laguna-hills')} />;
}
