import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { vancouverWa } from '@/lib/city-page-data/vancouver-wa';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: vancouverWa.metaTitle,
  description: vancouverWa.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${vancouverWa.citySlug}` },
};

export default function VancouverWaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={vancouverWa} nearbyCities={nearbyCitiesFor('vancouver-wa')} />;
}
