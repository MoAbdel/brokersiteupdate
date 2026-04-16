import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { auburnWa } from '@/lib/city-page-data/auburn-wa';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: auburnWa.metaTitle,
  description: auburnWa.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${auburnWa.citySlug}` },
};

export default function AuburnWaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={auburnWa} nearbyCities={nearbyCitiesFor('auburn-wa')} />;
}
