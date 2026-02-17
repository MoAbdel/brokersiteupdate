import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Jumbo Loans Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Jumbo Loans in Orange County',
    subtitle: 'High-balance mortgage financing for luxury and high-value properties',
    category: 'Loan Program',
  });
}
