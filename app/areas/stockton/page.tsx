import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { stockton } from '@/lib/city-page-data/stockton';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: stockton.metaTitle,
  description: stockton.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${stockton.citySlug}` },
};

export default function StocktonMortgageBrokerPage() {
  return <ProductLedCityTemplate city={stockton} nearbyCities={nearbyCitiesFor('stockton')} />;
}
