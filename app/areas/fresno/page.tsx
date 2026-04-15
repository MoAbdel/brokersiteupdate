import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { fresno } from '@/lib/city-page-data/fresno';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: fresno.metaTitle,
  description: fresno.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${fresno.citySlug}` },
};

export default function FresnoMortgageBrokerPage() {
  return <ProductLedCityTemplate city={fresno} nearbyCities={nearbyCitiesFor('fresno')} />;
}
