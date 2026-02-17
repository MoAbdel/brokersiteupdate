import HeroSection from './home/HeroSection';
import WestCapitalAdvantage from './home/WestCapitalAdvantage';
import GuidesAndResources from './home/GuidesAndResources';
import WhyChooseUs from './home/WhyChooseUs';
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

      {/* Lumin Lending Advantage */}
      <WestCapitalAdvantage />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Guides & Resources */}
      <GuidesAndResources />

      {/* Service Areas */}
      <ServiceAreasGrid />

      {/* Social Proof Section */}
      <SocialProofSection />
    </article>
  );
}
