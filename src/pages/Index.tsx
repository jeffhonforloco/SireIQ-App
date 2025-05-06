
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import EnterpriseSection from '@/components/EnterpriseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ | Think It. Build It. With SireIQ</title>
        <meta name="description" content="Turn your ideas into intelligent products with SireIQ—an AI-native platform built for creators, developers, and innovators. Build faster, smarter, and more creatively." />
      </Helmet>
      
      {/* Particle effect background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <EnterpriseSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
