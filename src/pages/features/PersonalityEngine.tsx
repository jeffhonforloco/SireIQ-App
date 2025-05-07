
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessagesSquare, Check } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const PersonalityEngine = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Personality Engine | SireIQ</title>
        <meta name="description" content="Create content with consistent tone, style, and voice that reflects your brand's unique personality." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <MessagesSquare className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Personality</span> Engine
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Create content with consistent tone, style, and voice that reflects your brand's unique personality.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Professional", "Friendly", "Quirky", "Technical", "Inspirational", "Minimalist"].map((style, index) => (
                  <div key={index} className={`rounded-lg p-4 ${index === 1 ? "bg-gradient-to-r from-sireiq-cyan/20 to-sireiq-cyan2/20 border border-sireiq-cyan/30" : "bg-sireiq-darker border border-sireiq-accent/20"}`}>
                    <h3 className={`font-bold mb-2 ${index === 1 ? "text-sireiq-cyan" : "text-sireiq-light"}`}>{style}</h3>
                    <p className="text-sm text-sireiq-light/70">
                      {index === 1 ? "Currently selected" : "Available style"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Features */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-4">Brand Voice Comparison</h3>
              
              <div className="space-y-6">
                {[
                  {
                    brand: "Professional",
                    text: "We're delighted to introduce our new cloud storage solution, designed to enhance productivity and security for enterprises of all sizes."
                  },
                  {
                    brand: "Friendly",
                    text: "Hey there! Super excited to show you our awesome new cloud storage that makes keeping your stuff safe a total breeze. You're gonna love it!"
                  },
                  {
                    brand: "Technical",
                    text: "Our next-gen distributed cloud architecture implements AES-256 encryption with multi-region failover, ensuring 99.99% uptime and zero data loss for mission-critical operations."
                  }
                ].map((example, index) => (
                  <div key={index} className="bg-sireiq-darker rounded-lg p-4">
                    <p className="text-sm font-medium text-sireiq-light/50 mb-2">{example.brand} tone</p>
                    <p className="text-sireiq-light/80">{example.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Consistent Brand Voice</span> Across All Channels
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Our Personality Engine learns from your existing content and brand guidelines to create a digital representation of your unique voice. Whether you're creating social media posts, emails, or website copy, your brand will always sound authentically you.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Create and save multiple brand personalities", 
                  "Adjust tone based on audience and channel", 
                  "Ensure consistency across teams and campaigns", 
                  "Evolve your voice while maintaining brand identity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Try Personality Engine <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Voice Customization */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Voice Customization</span> Parameters
          </h2>
          
          <div className="max-w-3xl mx-auto glass-effect rounded-xl p-8 border border-sireiq-accent/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Formality",
                  range: "Casual to Formal",
                  value: 70
                },
                {
                  name: "Technical Level",
                  range: "Simple to Complex",
                  value: 45
                },
                {
                  name: "Emotion",
                  range: "Neutral to Expressive",
                  value: 60
                },
                {
                  name: "Conciseness",
                  range: "Detailed to Brief",
                  value: 30
                }
              ].map((param, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{param.name}</span>
                    <span className="text-sireiq-light/50 text-sm">{param.range}</span>
                  </div>
                  <div className="h-2 bg-sireiq-darker rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 rounded-full" 
                      style={{ width: `${param.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default PersonalityEngine;
