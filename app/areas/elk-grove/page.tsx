import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { elkGrove } from '@/lib/city-page-data/elk-grove';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: elkGrove.metaTitle,
  description: elkGrove.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${elkGrove.citySlug}` },
};

export default function ElkGroveMortgageBrokerPage() {
  return <ProductLedCityTemplate city={elkGrove} />;
}
