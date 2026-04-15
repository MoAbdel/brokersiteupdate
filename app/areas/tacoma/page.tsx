import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { tacoma } from '@/lib/city-page-data/tacoma';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: tacoma.metaTitle,
  description: tacoma.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${tacoma.citySlug}` },
};

export default function TacomaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={tacoma} />;
}
