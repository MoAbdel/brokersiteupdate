import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Orange County Refinancing Guide - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County Refinancing Guide',
    subtitle: 'HELOC, HELOAN, rate-and-term, and cash-out refinancing options explained',
    category: 'Guide',
  });
}
