import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Orange County Mortgage Broker | Fast Rate Quote | Mo Abdel',
  description:
    'Talk with Mo Abdel, licensed mortgage broker (NMLS #1426884), for a fast custom mortgage or refinance quote. Call, text, or submit your scenario today.',
  alternates: {
    canonical: 'https://www.mothebroker.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}