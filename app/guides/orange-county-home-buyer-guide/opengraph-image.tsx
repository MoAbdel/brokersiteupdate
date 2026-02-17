import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Orange County Home Buyer Guide 2026 - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County Home Buyer Guide 2026',
    subtitle: 'Complete mortgage process from pre-approval to closing for first-time and repeat buyers',
    category: 'Guide',
  });
}
