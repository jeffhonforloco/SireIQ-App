
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroChat from '@/components/landing/HeroChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>AI Assistant | Your Intelligent Chat Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses and creative professionals enhance their workflows and productivity." />
      </Helmet>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="container mx-auto px-4 pt-20">
        <HeroChat />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
