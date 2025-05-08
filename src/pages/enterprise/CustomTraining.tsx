
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';

// Import our new component sections
import HeroSection from '@/components/enterprise/custom-training/HeroSection';
import TrainingProcessSection from '@/components/enterprise/custom-training/TrainingProcessSection';
import BenefitsGrid from '@/components/enterprise/custom-training/BenefitsGrid';
import CaseStudySection from '@/components/enterprise/custom-training/CaseStudySection';
import CTAContainer from '@/components/enterprise/custom-training/CTAContainer';

const CustomTraining = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  const handleRequestDemo = () => {
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Custom Training | SireIQ Enterprise</title>
        <meta name="description" content="Train SireIQ on your brand assets and content for perfectly aligned AI-generated outputs." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <HeroSection />
        
        {/* Training Process */}
        <TrainingProcessSection onRequestDemo={handleRequestDemo} />
        
        {/* Benefits grid */}
        <BenefitsGrid />
        
        {/* Case Study */}
        <CaseStudySection />
        
        {/* CTA section */}
        <CTAContainer onRequestDemo={handleRequestDemo} />
      </main>
      
      <CTASection />
      <Footer />
      
      {/* Demo Request Modal */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default CustomTraining;
