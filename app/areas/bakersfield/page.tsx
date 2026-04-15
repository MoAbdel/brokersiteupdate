import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { bakersfield } from '@/lib/city-page-data/bakersfield';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: bakersfield.metaTitle,
  description: bakersfield.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${bakersfield.citySlug}` },
};

export default function BakersfieldMortgageBrokerPage() {
  return <ProductLedCityTemplate city={bakersfield} />;
}
