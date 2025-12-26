import React from 'react';
import HeroSection from './home/HeroSection';
import QuickActionHub from './home/QuickActionHub';
import WestCapitalAdvantage from './home/WestCapitalAdvantage';
import SocialProofSection from './home/SocialProofSection';
import WhyChooseUs from './home/WhyChooseUs';
import LocalMarketInsights from './home/LocalMarketInsights';

export default function SimpleLandingPage() {
  return (
    <div className="min-h-screen bg-white" data-version="2.0.0">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Action Hub */}
      <QuickActionHub />

      {/* West Capital Advantage */}
      <WestCapitalAdvantage />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Local Market Insights */}
      <LocalMarketInsights />
    </div>
  );
}
