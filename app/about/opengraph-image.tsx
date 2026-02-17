import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'About Mo Abdel - Orange County Mortgage Broker NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'About Mo Abdel',
    subtitle: 'Licensed Orange County mortgage broker with access to 200+ wholesale lenders',
    category: 'About',
  });
}
