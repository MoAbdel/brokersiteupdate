import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { riverside } from '@/lib/city-page-data/riverside';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: riverside.metaTitle,
  description: riverside.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${riverside.citySlug}` },
};

export default function RiversideMortgageBrokerPage() {
  return <ProductLedCityTemplate city={riverside} />;
}
