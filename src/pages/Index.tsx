
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Users, Zap, Shield, Bot, Brain, Rocket } from 'lucide-react';

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
            {/* Enhanced featured badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <Link 
                to="/featured-agents" 
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 hover:from-brand-primary/30 hover:to-brand-accent/30 border border-brand-primary/30 text-brand-primary text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-medium">Explore Featured AI Agents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Enhanced main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="text-text-primary">
                Think it.
              </span>
              <br />
              <span className="text-gradient glow-strong">
                Build it.
              </span>
              <br />
              <span className="text-text-primary">
                With{' '}
                <span className="text-gradient glow">SireIQ</span>.
              </span>
            </motion.h1>
            
            {/* Enhanced subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Experience the future of AI-powered creativity. The most advanced platform designed for{' '}
              <span className="text-brand-primary font-medium">next-generation creators</span> who demand excellence.
            </motion.p>
            
            {/* Enhanced feature highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 mb-12 text-sm"
            >
              <div className="flex items-center gap-3 badge-primary">
                <Zap className="w-5 h-5 text-warning" />
                <span>Lightning Fast Processing</span>
              </div>
              <div className="flex items-center gap-3 badge-primary">
                <Shield className="w-5 h-5 text-success" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-3 badge-primary">
                <Brain className="w-5 h-5 text-brand-accent" />
                <span>Advanced Neural Networks</span>
              </div>
              <div className="flex items-center gap-3 badge-primary">
                <Bot className="w-5 h-5 text-brand-purple" />
                <span>Intelligent Automation</span>
              </div>
            </motion.div>
            
            {/* Enhanced CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
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
            transition={{ delay: 1.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-purple rounded-2xl blur-lg opacity-20 animate-glow-pulse"></div>
            <div className="relative card-glass border-2 border-brand-primary/20 shadow-glow-strong">
              <HomeChatExperience />
            </div>
          </motion.div>
          
          {/* Enhanced bottom features */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mt-12 text-sm text-text-tertiary"
          >
            <p>Trusted by <span className="text-brand-primary font-medium">10,000+</span> innovators worldwide</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
