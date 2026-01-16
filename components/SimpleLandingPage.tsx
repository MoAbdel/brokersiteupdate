import React from 'react';
import HeroSection from './home/HeroSection';
import QuickActionHub from './home/QuickActionHub';
import WestCapitalAdvantage from './home/WestCapitalAdvantage';
import SocialProofSection from './home/SocialProofSection';
import WhyChooseUs from './home/WhyChooseUs';

export default function SimpleLandingPage() {
  return (
    <div className="min-h-screen bg-white" data-version="2.0.0">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Action Hub */}
      <QuickActionHub />

      {/* Lumin Lending Advantage */}
      <WestCapitalAdvantage />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Social Proof Section */}
      <SocialProofSection />
    </div>
  );
}


