import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { oceanside } from '@/lib/city-page-data/oceanside';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: oceanside.metaTitle,
  description: oceanside.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${oceanside.citySlug}` },
};

export default function OceansideMortgageBrokerPage() {
  return <ProductLedCityTemplate city={oceanside} nearbyCities={nearbyCitiesFor('oceanside')} />;
}
