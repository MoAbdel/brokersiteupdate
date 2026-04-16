import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { whittier } from '@/lib/city-page-data/whittier';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: whittier.metaTitle,
  description: whittier.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${whittier.citySlug}` },
};

export default function WhittierMortgageBrokerPage() {
  return <ProductLedCityTemplate city={whittier} nearbyCities={nearbyCitiesFor('whittier')} />;
}
