
import React, { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Disable all browser default behaviors
  useEffect(() => {
    const preventDefault = (e: Event) => {
      e.preventDefault();
    };
    
    // Prevent pull-to-refresh and other gestures
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.touchAction = 'none';
    
    // Prevent context menu
    document.addEventListener('contextmenu', preventDefault);
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
      document.removeEventListener('contextmenu', preventDefault);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full bg-black text-white">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      
      <ParticleBackground />
      
      <div className="fixed inset-0 flex items-center justify-center">
        <HomeChatExperience />
      </div>
    </div>
  );
};

export default Index;
