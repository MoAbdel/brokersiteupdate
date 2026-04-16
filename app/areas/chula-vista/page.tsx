import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { chulaVista } from '@/lib/city-page-data/chula-vista';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: chulaVista.metaTitle,
  description: chulaVista.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${chulaVista.citySlug}` },
};

export default function ChulaVistaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={chulaVista} nearbyCities={nearbyCitiesFor('chula-vista')} />;
}
