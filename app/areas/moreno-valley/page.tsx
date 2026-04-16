import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { morenoValley } from '@/lib/city-page-data/moreno-valley';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: morenoValley.metaTitle,
  description: morenoValley.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${morenoValley.citySlug}` },
};

export default function MorenoValleyMortgageBrokerPage() {
  return <ProductLedCityTemplate city={morenoValley} nearbyCities={nearbyCitiesFor('moreno-valley')} />;
}
