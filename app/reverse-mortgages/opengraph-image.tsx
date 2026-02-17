import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Reverse Mortgages California & Washington - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Reverse Mortgages in California & Washington',
    subtitle: 'Complete guide to HECM programs for homeowners 62 and older',
    category: 'Loan Program',
  });
}
