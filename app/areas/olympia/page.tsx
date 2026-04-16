import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { olympia } from '@/lib/city-page-data/olympia';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: olympia.metaTitle,
  description: olympia.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${olympia.citySlug}` },
};

export default function OlympiaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={olympia} nearbyCities={nearbyCitiesFor('olympia')} />;
}
