
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
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
              Choose the plan that works best for you or your organization.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
