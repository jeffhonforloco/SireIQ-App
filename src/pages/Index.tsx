
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col overflow-hidden">
      <Helmet>
        <title>SireIQ | Think it. Build it. With SireIQ</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Helmet>
      
      <Navbar />
      
      {/* Replace spacer div with a solid black one */}
      <div className="w-full h-[1px] bg-black border-0 border-none"></div>
      
      <div className="flex-1 flex justify-center items-center p-0 overflow-auto border-0 border-t-0 border-none">
        <div className="w-full max-w-3xl mx-auto px-4 flex flex-col h-full justify-center">
          {/* Add Featured Agents Link */}
          <div className="flex justify-center mb-4">
            <Link 
              to="/featured-agents" 
              className="px-3 py-1.5 bg-sireiq-accent/20 hover:bg-sireiq-accent/40 text-sireiq-cyan text-sm rounded-full flex items-center gap-2 transition-all"
            >
              <span className="w-2 h-2 bg-sireiq-cyan rounded-full animate-pulse"></span>
              Explore Our Featured AI Agents
            </Link>
          </div>
          
          <HomeChatExperience />
        </div>
      </div>
    </div>
  );
};

export default Index;
