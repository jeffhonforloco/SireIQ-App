
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import TrustBadgesSection from '@/components/landing/TrustBadgesSection';
import FeaturesHighlight from '@/components/landing/FeaturesHighlight';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import CTASection from '@/components/landing/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ | AI Platform for Creators and Innovators</title>
        <meta name="description" content="SireIQ is an advanced AI platform that helps businesses and creative professionals enhance their workflows and productivity." />
      </Helmet>
      
      {/* Particle effect background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Trust Badges Section */}
        <TrustBadgesSection />
        
        {/* Features Highlights */}
        <FeaturesHighlight />

        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* Why Choose Us Section */}
        <WhyChooseUsSection />
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
