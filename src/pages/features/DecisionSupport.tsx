
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const DecisionSupport = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Decision Support | SireIQ</title>
        <meta name="description" content="Get AI-powered insights for better decision making" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Shield className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Decision</span> Support
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Get AI-powered insights for better decision making
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Make Confident Decisions with AI-Powered Intelligence</h2>
                <p className="text-lg">
                  SireIQ's decision support systems combine advanced analytics, scenario modeling, and expert insights 
                  to help you make more informed choices. Our AI evaluates options, predicts outcomes, and 
                  identifies risks to guide your strategic decision-making.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Risk Analysis</h3>
                    <p>Identify potential risks and uncertainties associated with different courses of action to minimize negative outcomes.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Scenario Modeling</h3>
                    <p>Generate and evaluate multiple scenarios to understand potential outcomes of different decision paths.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Recommendation Engine</h3>
                    <p>Receive data-driven recommendations based on your specific situation, goals, and constraints.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Impact Assessment</h3>
                    <p>Evaluate the potential impact of decisions on various aspects of your business before implementation.</p>
                  </div>
                </div>
                
                <Button className="mt-6 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Enhance Your Decision Making <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default DecisionSupport;
