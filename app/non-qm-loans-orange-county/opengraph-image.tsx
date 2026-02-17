import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Non-QM Loans Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Non-QM Loans in Orange County',
    subtitle: 'Alternative documentation loans for self-employed, investors, and unique situations',
    category: 'Loan Program',
  });
}
