import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { roseville } from '@/lib/city-page-data/roseville';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: roseville.metaTitle,
  description: roseville.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${roseville.citySlug}` },
};

export default function RosevilleMortgageBrokerPage() {
  return <ProductLedCityTemplate city={roseville} />;
}
