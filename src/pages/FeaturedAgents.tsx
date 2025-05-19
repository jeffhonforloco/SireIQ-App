
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import AgentGrid from '@/components/agents/AgentGrid';

const FeaturedAgents = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Helmet>
        <title>Featured AI Agents | SireIQ</title>
        <meta name="description" content="Explore SireIQ's collection of specialized AI agents that help with research, data analysis, content creation, and more." />
      </Helmet>
      
      <Navbar />
      
      <div className="w-full h-[1px] bg-black"></div>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 bg-clip-text text-transparent">
            AI Agents Marketplace
          </h1>
          <p className="text-sireiq-light/70 max-w-2xl mx-auto">
            Discover and utilize specialized AI agents designed to help with specific tasks. 
            Each agent comes with unique capabilities to enhance your productivity.
          </p>
        </div>

        <AgentGrid />
      </main>
    </div>
  );
};

export default FeaturedAgents;
