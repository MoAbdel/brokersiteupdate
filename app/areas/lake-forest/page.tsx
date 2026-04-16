import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { lakeForest } from '@/lib/city-page-data/lake-forest';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: lakeForest.metaTitle,
  description: lakeForest.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${lakeForest.citySlug}` },
};

export default function LakeForestMortgageBrokerPage() {
  return <ProductLedCityTemplate city={lakeForest} nearbyCities={nearbyCitiesFor('lake-forest')} />;
}
