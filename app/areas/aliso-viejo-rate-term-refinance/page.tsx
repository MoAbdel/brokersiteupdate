import { Metadata } from 'next';
import RefinanceCityTemplate, { generateRefinanceMetadata } from '@/components/seo/RefinanceCityTemplate';
import { REFINANCE_CITIES } from '@/lib/refinance-city-data';

const cityData = REFINANCE_CITIES.find(c => c.slug === 'aliso-viejo')!;

export const metadata: Metadata = generateRefinanceMetadata(cityData, 'rate-term');

export default function AlisoViejoRateTermRefinancePage() {
  return <RefinanceCityTemplate cityData={cityData} refinanceType="rate-term" />;
}
