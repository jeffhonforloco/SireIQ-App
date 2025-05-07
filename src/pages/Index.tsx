
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen h-full w-full bg-black flex flex-col">
      <Helmet>
        <title>SireIQ | Your Intelligent AI Assistant</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side - Marketing Content */}
        <div className="hidden md:flex md:w-1/3 lg:w-2/5 bg-black p-8 flex-col">
          <div className="text-white space-y-4 max-w-md">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
              Think it.<br />
              Build it.<br />
              With SireIQ.
            </h1>
            
            <p className="text-gray-300 mb-8">
              Our advanced AI platform amplifies your creativity, analyzes your data, and supercharges your productivity.
            </p>
            
            <div className="space-y-6 mt-10">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400">✦</span>
                </div>
                <div className="text-white">Advanced neural networks</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400">✦</span>
                </div>
                <div className="text-white">Real-time insights</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400">✦</span>
                </div>
                <div className="text-white">Workflow optimization</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Chat Interface */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl h-[calc(100vh-100px)]">
            <HomeChatExperience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
