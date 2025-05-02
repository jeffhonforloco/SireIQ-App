
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import IntegrationsSection from '@/components/IntegrationsSection';

const Integrations = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Integrations | Connect Your Favorite Tools</title>
        <meta name="description" content="Connect SireIQ with your favorite tools including Slack, Adobe, Microsoft Teams and more to streamline your creative workflow." />
      </Helmet>
      
      {/* Particle effect background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero section for integrations page */}
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient glow">Seamless Integrations</span> for Your Workflow
            </h1>
            <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto mb-8">
              Connect SireIQ with your favorite tools to streamline your creative workflow and enhance productivity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main integrations content */}
      <IntegrationsSection />
      
      {/* Call to action */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Integrations;
