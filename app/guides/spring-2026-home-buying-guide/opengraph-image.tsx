import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Spring 2026 Home Buying Guide - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Spring 2026 Orange County Home Buying Guide',
    subtitle: 'Best time to buy, market conditions, and strategies for the spring season',
    category: 'Guide',
  });
}
