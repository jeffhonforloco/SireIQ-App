
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import VoiceAssistantComponent from '@/components/voice-assistant/VoiceAssistantComponent';

const VoiceAssistant: React.FC = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Sire Voice Assistant | SireIQ</title>
        <meta name="description" content="Experience the power of SireIQ's voice assistant - interact with AI naturally using your voice." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <span className="h-8 w-8 text-sireiq-cyan flex items-center justify-center">🎙️</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Sire Voice</span> Assistant
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Interact with SireIQ naturally through voice commands. Ask questions, get answers, and accomplish tasks with ease.
            </p>
          </div>
          
          <div className="flex justify-center">
            <VoiceAssistantComponent />
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default VoiceAssistant;
