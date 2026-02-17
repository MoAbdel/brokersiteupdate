import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Orange County VA Loans Guide - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County VA Loans Guide',
    subtitle: 'Complete guide to VA loan benefits, eligibility, and local programs',
    category: 'Guide',
  });
}
