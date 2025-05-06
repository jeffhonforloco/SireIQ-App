
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroChat from '@/components/landing/HeroChat';
import QuickActions from '@/components/landing/QuickActions';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-sireiq-light">
      <Helmet>
        <title>SireIQ | AI Platform for Creators and Innovators</title>
        <meta name="description" content="SireIQ is an advanced AI platform that helps businesses and creative professionals enhance their workflows and productivity." />
      </Helmet>
      
      {/* Subtle particle background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="container mx-auto px-4 pt-16 pb-12">
        <HeroChat />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
