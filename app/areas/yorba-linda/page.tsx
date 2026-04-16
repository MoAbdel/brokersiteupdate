import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { yorbaLinda } from '@/lib/city-page-data/yorba-linda';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: yorbaLinda.metaTitle,
  description: yorbaLinda.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${yorbaLinda.citySlug}` },
};

export default function YorbaLindaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={yorbaLinda} nearbyCities={nearbyCitiesFor('yorba-linda')} />;
}
