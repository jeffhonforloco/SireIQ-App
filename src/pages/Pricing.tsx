
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import PricingComparisonTable from '@/components/pricing/PricingComparisonTable';
import PricingTabs from '@/components/pricing/PricingTabs';
import PricingCards from '@/components/pricing/PricingCards';
import EnterpriseCallout from '@/components/pricing/EnterpriseCallout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/pricing/FAQSection';

const Pricing: React.FC = () => {
  const [view, setView] = useState<'cards' | 'table'>('cards');

  return (
    <div className="min-h-screen bg-sireiq-darker text-sireiq-light">
      <Helmet>
        <title>Pricing | SireIQ</title>
        <meta name="description" content="View SireIQ's pricing tiers and choose the best plan for your needs." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, <span className="text-gradient glow">Transparent</span> Pricing
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Choose the plan that best fits your needs, from personal use to enterprise solutions.
            </p>
          </div>
          
          <PricingTabs activeView={view} setActiveView={setView} />
          
          {view === 'cards' ? (
            <div className="animate-fade-in">
              <PricingCards />
            </div>
          ) : (
            <div className="animate-fade-in">
              <PricingComparisonTable />
            </div>
          )}
          
          <EnterpriseCallout />
          
          <FAQSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
