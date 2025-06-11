
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import Navbar from '@/components/Navbar';
import FeaturedAgents from '@/plugins/marketplace/FeaturedAgents';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Users, Rocket } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background-primary flex flex-col overflow-hidden relative">
      <Helmet>
        <title>SireIQ | Think it. Build it. With SireIQ</title>
        <meta name="description" content="The most advanced AI platform for next-generation creators. Experience unparalleled design and intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-brand-accent/3 to-transparent rounded-full"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/8 rounded-full blur-2xl"></div>
      </div>
      
      <Navbar />
      
      <div className="flex-1 flex justify-center items-center p-0 overflow-auto relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col h-full justify-center">
          {/* Enhanced header section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Enhanced featured badge with better text wrapping */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <Link 
                to="/featured-agents" 
                className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 hover:from-brand-primary/30 hover:to-brand-accent/30 border border-brand-primary/30 text-brand-primary text-xs sm:text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow max-w-[90%] text-center"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse flex-shrink-0" />
                <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  <span className="hidden sm:inline">Explore Featured AI Agents</span>
                  <span className="sm:hidden">Featured AI Agents</span>
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </motion.div>
            
            {/* Enhanced CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link 
                to="/get-started"
                className="btn-primary inline-flex items-center gap-3 text-lg"
              >
                <Rocket className="w-5 h-5" />
                Start Building Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/features"
                className="btn-secondary inline-flex items-center gap-3 text-lg"
              >
                <Users className="w-5 h-5" />
                Explore Features
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Enhanced chat interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-purple rounded-2xl blur-lg opacity-20 animate-glow-pulse"></div>
            <div className="relative card-glass border-2 border-brand-primary/20 shadow-glow-strong">
              <HomeChatExperience />
            </div>
          </motion.div>
          
          {/* Featured Agents Section */}
          <FeaturedAgents containerClassName="mt-8" />
          
          {/* Enhanced bottom features - Powered by Vytreon */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-text-tertiary mb-2">Powered by</p>
              <a 
                href="https://www.vytreon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 group"
              >
                <img 
                  src="/lovable-uploads/ca3d5628-293b-4717-a737-0eacfb84f9ea.png" 
                  alt="Vytreon Logo" 
                  className="h-8" 
                />
                <span className="text-brand-primary font-medium group-hover:text-brand-accent transition-colors">Vytreon</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
