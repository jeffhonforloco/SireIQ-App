
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import FeaturesHero from '@/components/features/FeaturesHero';
import FeaturesGrid from '@/components/features/FeaturesGrid';

const Features = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Features | SireIQ</title>
        <meta name="description" content="Explore the powerful AI features offered by SireIQ to enhance your business and creativity." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FeaturesHero />
          <FeaturesGrid />
        </div>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Features;
