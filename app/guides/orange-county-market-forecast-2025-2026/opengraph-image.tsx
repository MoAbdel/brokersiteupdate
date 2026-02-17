import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Orange County Market Forecast 2025-2026 - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County Housing Market Forecast',
    subtitle: 'Price trends, inventory levels, and rate predictions for 2025-2026',
    category: 'Guide',
  });
}
