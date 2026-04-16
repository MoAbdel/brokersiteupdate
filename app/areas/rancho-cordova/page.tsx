import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { ranchoCordova } from '@/lib/city-page-data/rancho-cordova';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ranchoCordova.metaTitle,
  description: ranchoCordova.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${ranchoCordova.citySlug}` },
};

export default function RanchoCordovaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={ranchoCordova} nearbyCities={nearbyCitiesFor('rancho-cordova')} />;
}
