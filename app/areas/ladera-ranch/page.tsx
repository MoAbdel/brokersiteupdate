import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { laderaRanch } from '@/lib/city-page-data/ladera-ranch';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: laderaRanch.metaTitle,
  description: laderaRanch.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${laderaRanch.citySlug}` },
};

export default function LaderaRanchMortgageBrokerPage() {
  return <ProductLedCityTemplate city={laderaRanch} nearbyCities={nearbyCitiesFor('ladera-ranch')} />;
}
