import ProductLedCityTemplate from '@/components/templates/ProductLedCityTemplate';
import { missionViejo } from '@/lib/city-page-data/mission-viejo';
import { nearbyCitiesFor } from '@/lib/city-page-data/nearby-cities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: missionViejo.metaTitle,
  description: missionViejo.metaDescription,
  alternates: { canonical: `https://www.mothebroker.com/areas/${missionViejo.citySlug}` },
};

export default function MissionViejoMortgageBrokerPage() {
  return <ProductLedCityTemplate city={missionViejo} nearbyCities={nearbyCitiesFor('mission-viejo')} />;
}
