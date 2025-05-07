
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import { Sparkles, Zap, BrainCircuit } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with Chat Experience - positioned to fill available space */}
      <main className="w-full h-[calc(100vh-4rem)] pt-16">
        <div className="h-full flex items-center justify-center">
          {/* Chat component takes full height and width */}
          <HomeChatExperience />
        </div>
      </main>
    </div>
  );
};

export default Index;
