
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';

const Index = () => {
  return (
    <div className="min-h-screen h-full w-full bg-black text-white flex flex-col items-center justify-center p-4">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      
      <div className="w-full max-w-3xl h-[calc(100vh-32px)]">
        <HomeChatExperience />
      </div>
    </div>
  );
};

export default Index;
