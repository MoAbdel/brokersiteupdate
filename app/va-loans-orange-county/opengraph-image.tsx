import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'VA Loans Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'VA Loans in Orange County',
    subtitle: 'Zero down payment options for eligible veterans and active duty service members',
    category: 'Loan Program',
  });
}
