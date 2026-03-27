import { Metadata } from 'next';
import RefinanceCityTemplate, { generateRefinanceMetadata } from '@/components/seo/RefinanceCityTemplate';
import { REFINANCE_CITIES } from '@/lib/refinance-city-data';

const cityData = REFINANCE_CITIES.find(c => c.slug === 'irvine')!;

export const metadata: Metadata = generateRefinanceMetadata(cityData, 'cash-out');

export default function IrvineCashOutRefinancePage() {
  return <RefinanceCityTemplate cityData={cityData} refinanceType="cash-out" />;
}
