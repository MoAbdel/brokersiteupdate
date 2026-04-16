import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { ranchoSantaMargarita } from '@/lib/city-page-data/rancho-santa-margarita';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ranchoSantaMargarita.metaTitle,
  description: ranchoSantaMargarita.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${ranchoSantaMargarita.citySlug}` },
};

export default function RanchoSantaMargaritaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={ranchoSantaMargarita} nearbyCities={nearbyCitiesFor('rancho-santa-margarita')} />;
}
