import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { modesto } from '@/lib/city-page-data/modesto';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: modesto.metaTitle,
  description: modesto.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${modesto.citySlug}` },
};

export default function ModestoMortgageBrokerPage() {
  return <ProductLedCityTemplate city={modesto} nearbyCities={nearbyCitiesFor('modesto')} />;
}
