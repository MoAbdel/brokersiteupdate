import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Conventional Loans Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Conventional Loans in Orange County',
    subtitle: 'Traditional home financing with competitive rates from 200+ lenders',
    category: 'Loan Program',
  });
}
