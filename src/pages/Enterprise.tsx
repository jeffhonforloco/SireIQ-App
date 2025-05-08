
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';
import HeroSection from '@/components/enterprise/HeroSection';
import CoreFunctionality from '@/components/enterprise/CoreFunctionality';
import SolutionsGrid from '@/components/enterprise/SolutionsGrid';

const Enterprise = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Enterprise | AI-Powered Solutions for Business Growth</title>
        <meta name="description" content="Discover how SireIQ's enterprise solutions can transform your business with AI-powered tools, advanced security, and scalable workflows." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <HeroSection onDemoRequest={() => setDemoModalOpen(true)} />
        
        {/* Enterprise Core Functionality */}
        <CoreFunctionality onDemoRequest={() => setDemoModalOpen(true)} />
        
        {/* Enterprise Solutions Grid */}
        <SolutionsGrid />
        
        <CTASection />
      </main>
      
      <Footer />
      
      {/* Demo Request Modal */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default Enterprise;
