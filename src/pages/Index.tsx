
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with Chat Experience - positioned responsively */}
      <main className="container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left side content - stacks on mobile */}
          <div className={`${isMobile ? 'w-full mb-6' : 'md:w-1/3 mb-10 md:mb-0 md:pr-8'}`}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sireiq-cyan to-purple-600">
              {isMobile ? "Think it. Build it." : "Think it.\nBuild it.\nWith SireIQ."}
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Our advanced AI platform amplifies your creativity, analyzes your data, and supercharges your productivity.
            </p>
            <div className="space-y-3 md:space-y-4 hidden md:block">
              <div className="flex items-center">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mr-3">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-sireiq-cyan" />
                </div>
                <p className="text-gray-200 text-sm md:text-base">Advanced neural networks</p>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
                  <Zap className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
                </div>
                <p className="text-gray-200 text-sm md:text-base">Real-time insights</p>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                  <BrainCircuit className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                </div>
                <p className="text-gray-200 text-sm md:text-base">Workflow optimization</p>
              </div>
            </div>
          </div>
          
          {/* Chat experience - full width on mobile */}
          <div className={`${isMobile ? 'w-full' : 'md:w-2/3 ml-auto transform rotate-1 hover:rotate-0 transition-transform duration-700'}`}>
            <HomeChatExperience />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
