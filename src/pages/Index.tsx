
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeChatExperience from '@/components/chat/HomeChatExperience';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
      </Helmet>
      
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content with Chat Experience - positioned asymmetrically */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/3 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sireiq-cyan to-purple-600">
              Think it.<br />Build it.<br />With SireIQ.
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Our advanced AI platform amplifies your creativity, analyzes your data, and supercharges your productivity.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mr-3">
                  <Sparkles className="h-5 w-5 text-sireiq-cyan" />
                </div>
                <p className="text-gray-200">Advanced neural networks</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-600/20 flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-gray-200">Real-time insights</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                  <BrainCircuit className="h-5 w-5 text-blue-400" />
                </div>
                <p className="text-gray-200">Workflow optimization</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 ml-auto transform rotate-1 hover:rotate-0 transition-transform duration-700">
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
