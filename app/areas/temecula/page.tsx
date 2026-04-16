import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { temecula } from '@/lib/city-page-data/temecula';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: temecula.metaTitle,
  description: temecula.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${temecula.citySlug}` },
};

export default function TemeculaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={temecula} nearbyCities={nearbyCitiesFor('temecula')} />;
}
