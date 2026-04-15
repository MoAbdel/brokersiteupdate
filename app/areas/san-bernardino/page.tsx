import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { sanBernardino } from '@/lib/city-page-data/san-bernardino';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: sanBernardino.metaTitle,
  description: sanBernardino.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${sanBernardino.citySlug}` },
};

export default function SanBernardinoMortgageBrokerPage() {
  return <ProductLedCityTemplate city={sanBernardino} nearbyCities={nearbyCitiesFor('san-bernardino')} />;
}
