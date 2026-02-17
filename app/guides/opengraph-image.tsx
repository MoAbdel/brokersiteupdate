import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Mortgage Guides - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Mortgage Guides & Resources',
    subtitle: 'Expert guides for home buyers, refinancing, and real estate investing in California & Washington',
    category: 'Guides',
  });
}
