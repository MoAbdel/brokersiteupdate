import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'FHA Loans Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'FHA Loans in Orange County',
    subtitle: 'Low down payment options starting at 3.5% with flexible credit guidelines',
    category: 'Loan Program',
  });
}
