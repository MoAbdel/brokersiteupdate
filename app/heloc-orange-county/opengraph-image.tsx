import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'HELOC Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County HELOC',
    subtitle: 'Flexible home equity credit lines with competitive rates',
    category: 'Loan Program',
  });
}
