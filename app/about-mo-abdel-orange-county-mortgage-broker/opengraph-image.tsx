import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'About Mo Abdel - Licensed Orange County Mortgage Broker NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Mo Abdel - Licensed Mortgage Broker',
    subtitle: 'NMLS #1426884 | 18-day average closings | 200+ lender network | Orange County expert',
    category: 'About',
  });
}
