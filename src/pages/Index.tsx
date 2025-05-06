
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/landing/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses and creative professionals enhance their workflows and productivity." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
