
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Users, Zap, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-950 to-black flex flex-col overflow-hidden relative">
      <Helmet>
        <title>SireIQ | Think it. Build it. With SireIQ</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=SF+Pro+Display:wght@400;500;600;700&display=swap" />
      </Helmet>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-sireiq-cyan/5 to-transparent rounded-full"></div>
      </div>
      
      <Navbar />
      
      <div className="flex-1 flex justify-center items-center p-0 overflow-auto relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col h-full justify-center">
          {/* Enhanced header section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            {/* Featured badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <Link 
                to="/featured-agents" 
                className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sireiq-cyan/20 to-blue-600/20 hover:from-sireiq-cyan/30 hover:to-blue-600/30 border border-sireiq-cyan/30 text-sireiq-cyan text-sm rounded-full transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Explore Our Featured AI Agents</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Think it.
              </span>
              <br />
              <span className="bg-gradient-to-r from-sireiq-cyan via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Build it.
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                With SireIQ.
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Experience the future of AI-powered creativity. Build, innovate, and scale with intelligent tools designed for the modern creator.
            </motion.p>
            
            {/* Feature highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Team Collaboration</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Chat interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-sireiq-cyan via-blue-500 to-purple-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl">
              <HomeChatExperience />
            </div>
          </motion.div>
          
          {/* Bottom features */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-8 text-sm text-gray-500"
          >
            <p>Join thousands of creators already building with SireIQ</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
