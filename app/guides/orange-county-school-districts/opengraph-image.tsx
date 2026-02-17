import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Orange County School Districts Guide - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County School Districts Guide',
    subtitle: 'Top-rated schools, neighborhood ratings, and home values by district',
    category: 'Guide',
  });
}
