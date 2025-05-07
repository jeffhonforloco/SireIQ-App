
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 overflow-hidden bg-black text-white">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Main content with Chat Experience - fixed size to prevent scrolling */}
      <main className="fixed inset-0 flex items-center justify-center">
        <div className="h-full w-full max-w-full flex items-center justify-center">
          <HomeChatExperience />
        </div>
      </main>
    </div>
  );
};

export default Index;
