
import React, { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Prevent all events that might cause page reloads or undesired behaviors
  useEffect(() => {
    const preventDefaultForEvent = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    // Apply event listeners to the entire document
    document.addEventListener('touchstart', preventDefaultForEvent, { passive: false });
    document.addEventListener('touchmove', preventDefaultForEvent, { passive: false });
    document.addEventListener('click', preventDefaultForEvent);
    document.addEventListener('contextmenu', preventDefaultForEvent);
    
    return () => {
      // Cleanup event listeners
      document.removeEventListener('touchstart', preventDefaultForEvent);
      document.removeEventListener('touchmove', preventDefaultForEvent);
      document.removeEventListener('click', preventDefaultForEvent);
      document.removeEventListener('contextmenu', preventDefaultForEvent);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden bg-black text-white">
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
