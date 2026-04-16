import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { torrance } from '@/lib/city-page-data/torrance';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: torrance.metaTitle,
  description: torrance.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${torrance.citySlug}` },
};

export default function TorranceMortgageBrokerPage() {
  return <ProductLedCityTemplate city={torrance} nearbyCities={nearbyCitiesFor('torrance')} />;
}
