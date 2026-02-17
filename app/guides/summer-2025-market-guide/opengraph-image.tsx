import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Summer 2026 Market Guide - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Summer 2026 Orange County Market Guide',
    subtitle: 'Peak season strategies, pricing trends, and buyer competition analysis',
    category: 'Guide',
  });
}
