import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { escondido } from '@/lib/city-page-data/escondido';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: escondido.metaTitle,
  description: escondido.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${escondido.citySlug}` },
};

export default function EscondidoMortgageBrokerPage() {
  return <ProductLedCityTemplate city={escondido} nearbyCities={nearbyCitiesFor('escondido')} />;
}
