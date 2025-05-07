
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeChatExperience from '@/components/chat/HomeChatExperience';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>SireIQ | Your Intelligent Ecommerce AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps ecommerce businesses leverage data for better insights and decision-making." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with Chat Experience */}
      <main className="container mx-auto px-4 py-16">
        <HomeChatExperience />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
