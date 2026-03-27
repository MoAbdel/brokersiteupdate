import { Metadata } from 'next';
import RefinanceCityTemplate, { generateRefinanceMetadata } from '@/components/seo/RefinanceCityTemplate';
import { REFINANCE_CITIES } from '@/lib/refinance-city-data';

const cityData = REFINANCE_CITIES.find(c => c.slug === 'san-clemente')!;

export const metadata: Metadata = generateRefinanceMetadata(cityData, 'cash-out');

export default function SanClementeCashOutRefinancePage() {
  return <RefinanceCityTemplate cityData={cityData} refinanceType="cash-out" />;
}
