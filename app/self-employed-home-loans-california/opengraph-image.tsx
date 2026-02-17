import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Self-Employed Home Loans California - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Self-Employed Home Loans in California',
    subtitle: 'Bank statement and non-QM programs designed for business owners and entrepreneurs',
    category: 'Loan Program',
  });
}
