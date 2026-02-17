import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Orange County Investment Property Guide - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County Investment Property Guide 2026',
    subtitle: 'Real estate investing strategies, financing options, and market analysis',
    category: 'Guide',
  });
}
