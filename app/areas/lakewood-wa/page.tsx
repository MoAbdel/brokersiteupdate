import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { lakewoodWa } from '@/lib/city-page-data/lakewood-wa';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: lakewoodWa.metaTitle,
  description: lakewoodWa.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${lakewoodWa.citySlug}` },
};

export default function LakewoodWaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={lakewoodWa} nearbyCities={nearbyCitiesFor('lakewood-wa')} />;
}
