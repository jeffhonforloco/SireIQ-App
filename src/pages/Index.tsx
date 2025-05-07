
import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Prevent default browser behaviors that might cause page reloads
  const preventDefaults = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  return (
    <div 
      className="fixed inset-0 overflow-hidden bg-black text-white"
      onClick={preventDefaults}
      onTouchStart={preventDefaults}
    >
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Main content with Chat Experience - fixed size to prevent scrolling */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-full w-full max-w-full flex items-center justify-center">
          <HomeChatExperience />
        </div>
      </div>
    </div>
  );
};

export default Index;
