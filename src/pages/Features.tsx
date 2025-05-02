
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Features | Intelligent Tools for Smarter App Development</title>
        <meta name="description" content="Explore SireIQ's AI-powered features including persistent memory, real-time collaboration, creative workflows, and more—designed for creators and builders." />
      </Helmet>
      
      {/* Particle effect background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero section for the features page */}
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient glow">Powerful Features</span> for Creative Excellence
            </h1>
            <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto mb-8">
              Discover all the tools and capabilities that make SireIQ the leading platform for AI-powered content creation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Include the main features section */}
      <FeaturesSection />
      
      {/* Additional features sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Advanced AI Generation</span>
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Our state-of-the-art neural networks create content with unprecedented quality and creativity, adapting to your specific needs and preferences.
              </p>
              
              <ul className="space-y-4">
                {["Multi-modal content generation", "Style transfer across formats", "Semantic understanding", "Context-aware responses"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 mt-8 h-auto">
                Try Advanced AI <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <div className="aspect-video rounded-lg bg-sireiq-darker mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sireiq-cyan/30 to-sireiq-accent/10 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png" 
                    alt="AI Generation Visualization" 
                    className="w-24 h-24 opacity-90" 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Neural Network Visualization</h3>
              <p className="text-sireiq-light/70">
                Watch our AI in action as it processes and generates content tailored to your specifications.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Features;
