import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Home Equity Loan Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County Home Equity Loan',
    subtitle: 'Fixed-rate HELOAN options to access your home equity',
    category: 'Loan Program',
  });
}
