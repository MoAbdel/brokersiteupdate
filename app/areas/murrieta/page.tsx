import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { murrieta } from '@/lib/city-page-data/murrieta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: murrieta.metaTitle,
  description: murrieta.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${murrieta.citySlug}` },
};

export default function MurrietaMortgageBrokerPage() {
  return <ProductLedCityTemplate city={murrieta} />;
}
