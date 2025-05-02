
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Check } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const AIPoweredCreation = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>AI-Powered Creation | SireIQ</title>
        <meta name="description" content="Leverage advanced neural networks to generate creative content that's indistinguishable from human-made work." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <BrainCircuit className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">AI-Powered</span> Creation
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Leverage advanced neural networks to generate creative content that's indistinguishable from human-made work.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sireiq-cyan/20 to-sireiq-accent/10"></div>
              <img 
                src="/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png" 
                alt="AI Content Generation" 
                className="w-full h-full object-cover opacity-70" 
              />
            </div>
          </div>
        </section>
        
        {/* Content Features */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Next Generation</span> Content Creation
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Our AI-powered creation tools use advanced machine learning models to understand your brand, your audience, and your goals. The result? Content that's not just coherent, but compelling and conversion-focused.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Generate long-form content in seconds", 
                  "Adapt to your brand voice automatically", 
                  "Multi-modal creation across text, images, and more", 
                  "Context-aware content that understands your business"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Try Advanced AI <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-4">See it in action</h3>
              
              <div className="space-y-4">
                <div className="bg-sireiq-darker rounded-lg p-4">
                  <p className="text-sm font-medium text-sireiq-light/50 mb-2">Input prompt</p>
                  <p className="text-sireiq-light/80">Write a creative product description for a smart water bottle</p>
                </div>
                
                <div className="bg-sireiq-dark/50 border border-sireiq-accent/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-sireiq-light/50 mb-2">AI output</p>
                  <p className="text-sireiq-light/80">
                    <span className="text-sireiq-cyan">HydroSync:</span> Where intelligence meets hydration. This sleek, minimalist bottle doesn't just hold water—it transforms your drinking experience with temperature-sensing technology that keeps your beverage at the perfect temperature for up to 24 hours. The subtle glow at the base reminds you when it's time to hydrate, while the companion app tracks your intake and adjusts recommendations based on your activity level and local weather conditions. With HydroSync, staying hydrated isn't just healthy—it's effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">AI Creation</span> Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Content Marketing",
                description: "Generate blog posts, social media content, and email campaigns that engage your audience and drive conversions."
              },
              {
                title: "Product Descriptions",
                description: "Create compelling product descriptions that highlight benefits and features while maintaining brand voice."
              },
              {
                title: "Creative Briefs",
                description: "Develop comprehensive creative briefs that align teams around project goals, audience, and deliverables."
              }
            ].map((useCase, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20">
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-sireiq-light/70">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default AIPoweredCreation;
