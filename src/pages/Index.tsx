
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import Navbar from '@/components/Navbar';
import FeaturedAgents from '@/plugins/marketplace/FeaturedAgents';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Users, Rocket, ChevronDown, ChevronUp, Star, Zap, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [showFullFeatures, setShowFullFeatures] = useState(!isMobile);

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
          {/* Mobile-first approach with compact header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${isMobile ? 'mb-6' : 'mb-8 md:mb-12'}`}
          >
            {/* Mobile-optimized featured badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`flex justify-center ${isMobile ? 'mb-4' : 'mb-6 md:mb-8'}`}
            >
              <Link 
                to="/featured-agents" 
                className={`group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 hover:from-brand-primary/30 hover:to-brand-accent/30 border border-brand-primary/30 text-brand-primary rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow ${isMobile ? 'text-xs max-w-[280px]' : 'text-xs sm:text-sm'}`}
              >
                <Sparkles className={`${isMobile ? 'w-3 h-3' : 'w-3 h-3 sm:w-5 sm:h-5'} animate-pulse flex-shrink-0`} />
                <span className="font-medium whitespace-nowrap">
                  {isMobile ? 'Featured AI Agents' : 'Explore Featured AI Agents'}
                </span>
                <ArrowRight className={`${isMobile ? 'w-3 h-3' : 'w-3 h-3 sm:w-4 sm:h-4'} group-hover:translate-x-1 transition-transform flex-shrink-0`} />
              </Link>
            </motion.div>

            {/* Mobile: Streamlined quick features showcase */}
            {isMobile && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-3 gap-3 mb-6 max-w-sm mx-auto"
              >
                <div className="text-center p-3 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-lg border border-brand-primary/20">
                  <Star className="w-5 h-5 text-brand-primary mx-auto mb-1" />
                  <span className="text-xs text-text-secondary font-medium">AI Powered</span>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-brand-accent/10 to-brand-purple/10 rounded-lg border border-brand-accent/20">
                  <Zap className="w-5 h-5 text-brand-accent mx-auto mb-1" />
                  <span className="text-xs text-text-secondary font-medium">Lightning Fast</span>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-brand-purple/10 to-brand-primary/10 rounded-lg border border-brand-purple/20">
                  <Shield className="w-5 h-5 text-brand-purple mx-auto mb-1" />
                  <span className="text-xs text-text-secondary font-medium">Enterprise Ready</span>
                </div>
              </motion.div>
            )}
            
            {/* Mobile-optimized CTA section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`space-y-4 ${isMobile ? '' : 'mb-12'}`}
            >
              <Link 
                to="/get-started"
                className={`btn-primary inline-flex items-center gap-2 group ${isMobile ? 'text-base w-full justify-center py-3 px-6 max-w-sm mx-auto' : 'text-lg'}`}
              >
                <Rocket className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                Start Building Now
                <ArrowRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} group-hover:translate-x-1 transition-transform`} />
              </Link>
              
              {/* Removed "Show More / Show Less" button on mobile */}

              {/* Desktop CTA buttons */}
              {!isMobile && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/features"
                    className="btn-secondary inline-flex items-center gap-3 text-lg"
                  >
                    <Users className="w-5 h-5" />
                    Explore Features
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
          
          {/* Enhanced chat interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isMobile ? 0.8 : 1.0, duration: 0.8 }}
            className={`relative ${isMobile ? 'mb-4' : 'mb-6 md:mb-8'}`}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-purple rounded-2xl blur-lg opacity-20 animate-glow-pulse"></div>
            <div className="relative card-glass border-2 border-brand-primary/20 shadow-glow-strong">
              <HomeChatExperience />
            </div>
          </motion.div>
          
          {/* Featured Agents Section - Always visible on desktop, always hidden on mobile */}
          <AnimatePresence>
            {!isMobile && (
              <motion.div
                initial={false}
                animate={{}}
                className="overflow-hidden"
              >
                <FeaturedAgents containerClassName="mt-8" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Enhanced bottom features - Powered by Vytreon */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isMobile ? 1.0 : 1.2, duration: 0.8 }}
            className={`text-center ${isMobile ? 'mt-6 pb-6' : 'mt-12'}`}
          >
            <div className="flex flex-col items-center justify-center">
              <p className={`text-text-tertiary mb-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>Powered by</p>
              <a 
                href="https://www.vytreon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200 group"
              >
                <img 
                  src="/lovable-uploads/ca3d5628-293b-4717-a737-0eacfb84f9ea.png" 
                  alt="Vytreon Logo" 
                  className={`${isMobile ? 'h-5' : 'h-6 md:h-8'}`}
                />
                <span className={`text-brand-primary font-medium group-hover:text-brand-accent transition-colors ${isMobile ? 'text-sm' : 'text-sm md:text-base'}`}>Vytreon</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
