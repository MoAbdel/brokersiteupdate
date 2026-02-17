import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Mortgage Broker vs Bank Comparison - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Mortgage Broker vs Bank: Complete Comparison',
    subtitle: 'Understand the key differences in rates, service, and loan options',
    category: 'Guide',
  });
}
