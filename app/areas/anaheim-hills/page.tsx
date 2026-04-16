import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { anaheimHills } from '@/lib/city-page-data/anaheim-hills';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: anaheimHills.metaTitle,
  description: anaheimHills.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${anaheimHills.citySlug}` },
};

export default function AnaheimHillsMortgageBrokerPage() {
  return <ProductLedCityTemplate city={anaheimHills} nearbyCities={nearbyCitiesFor('anaheim-hills')} />;
}
