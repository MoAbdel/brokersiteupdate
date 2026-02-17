import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Cash-Out Refinance Orange County - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Orange County Cash-Out Refinance',
    subtitle: 'Turn your home equity into cash for renovations, debt consolidation, or investments',
    category: 'Loan Program',
  });
}
