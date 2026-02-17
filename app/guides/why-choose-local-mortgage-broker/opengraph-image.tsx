import { generateOGImage } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Why Choose a Local Mortgage Broker - Mo Abdel NMLS #1426884';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return generateOGImage({
    title: 'Why Choose a Local Mortgage Broker',
    subtitle: 'The advantages of working with a local expert who knows your market',
    category: 'Guide',
  });
}
