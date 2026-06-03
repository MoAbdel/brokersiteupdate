import HeroSection from './home/HeroSection';
import WholesaleAdvantage from './home/WholesaleAdvantage';
import GuidesAndResources from './home/GuidesAndResources';
import ServiceAreasGrid from './home/ServiceAreasGrid';
import SocialProofSection from './home/SocialProofSection';

export default function SimpleLandingPage() {
  return (
    <article
      className="min-h-screen bg-white"
      style={{ marginTop: 'calc(var(--header-offset) * -1)' }}
      data-version="2.0.0"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* The Wholesale Advantage */}
      <WholesaleAdvantage />

      {/* Guides & Resources */}
      <GuidesAndResources />

      {/* Service Areas */}
      <ServiceAreasGrid />

      {/* Social Proof Section (Zillow/Google Reviews) */}
      <div id="reviews">
        <SocialProofSection />
      </div>
    </article>
  );
}
