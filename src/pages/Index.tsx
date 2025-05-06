
import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomepageChat from '@/components/ai-chat/HomepageChat';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Index = () => {
  const navigate = useNavigate();
  const controlsFeatures = useAnimation();
  const controlsClients = useAnimation();
  const controlsCTA = useAnimation();
  
  const featuresRef = useRef(null);
  const clientsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const clientsInView = useInView(clientsRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (featuresInView) controlsFeatures.start('visible');
    if (clientsInView) controlsClients.start('visible');
    if (ctaInView) controlsCTA.start('visible');
  }, [featuresInView, clientsInView, ctaInView, controlsFeatures, controlsClients, controlsCTA]);
  
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ | AI Platform for Creators and Innovators</title>
        <meta name="description" content="SireIQ is an advanced AI platform that helps businesses and creative professionals enhance their workflows and productivity." />
      </Helmet>
      
      {/* Particle effect background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        {/* Hero Section */}
        <section className="pt-36 md:pt-40 pb-16 px-4 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <div className="inline-block px-4 py-2 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-full mb-6">
                  <span className="text-sm font-medium text-sireiq-cyan">Next Generation AI</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Elevate Your Work with <span className="text-gradient glow">Intelligent AI</span>
                </h1>
                <p className="text-xl text-sireiq-light/70 mb-8 max-w-lg">
                  Empowering creators and innovators with advanced AI solutions. 
                  Build faster, smarter, and more creatively than ever before.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => navigate('/get-started')}
                    className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-6 h-auto group"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    onClick={() => navigate('/features')}
                    variant="outline"
                    className="border-sireiq-accent text-sireiq-light px-6 py-6 h-auto"
                  >
                    Explore Features <ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex justify-center">
                <HomepageChat />
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="hidden md:flex justify-center mt-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div className="w-6 h-10 border-2 border-sireiq-light/30 rounded-full flex justify-center p-1">
                <motion.div 
                  className="w-1 h-3 bg-sireiq-light/60 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-sireiq-cyan/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -z-10"></div>
        </section>
        
        {/* Trust Badges Section */}
        <section className="py-12 px-4 bg-sireiq-darker/50">
          <motion.div 
            className="container mx-auto"
            ref={clientsRef}
            animate={controlsClients}
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-2xl text-center font-medium mb-8 text-sireiq-light/70"
              variants={fadeIn}
            >
              Trusted by innovative companies worldwide
            </motion.h2>
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
              variants={fadeIn}
            >
              {/* Client logos with subtle hover effects */}
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div 
                  key={item} 
                  className="h-16 w-40 bg-sireiq-accent/10 rounded-lg flex items-center justify-center border border-sireiq-accent/20 transition-all hover:border-sireiq-cyan/40 hover:bg-sireiq-accent/20"
                  whileHover={{ scale: 1.05 }}
                  variants={fadeIn}
                >
                  <span className="text-sireiq-light/40 font-medium">Client {item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
        
        {/* Features Highlights */}
        <section className="py-20 px-4 relative">
          <motion.div 
            className="container mx-auto"
            ref={featuresRef}
            animate={controlsFeatures}
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-16"
              variants={fadeIn}
            >
              <div className="inline-block px-4 py-2 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-full mb-4">
                <span className="text-sm font-medium text-sireiq-cyan">What We Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Supercharge Your <span className="text-gradient">Workflow</span>
              </h2>
              <p className="text-lg text-sireiq-light/70 max-w-2xl mx-auto">
                SireIQ combines cutting-edge AI with intuitive design to transform how you work and create.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {/* Feature cards */}
              {[
                {
                  title: "AI-Powered Creation",
                  description: "Generate ideas, content, and designs with state-of-the-art AI models.",
                  icon: "✨",
                  link: "/features/ai-powered-creation"
                },
                {
                  title: "Personality Engine",
                  description: "Create content with consistent tone and voice that reflects your brand.",
                  icon: "🎭",
                  link: "/features/personality-engine"
                },
                {
                  title: "Voice Assistant",
                  description: "Interact naturally through voice commands to accomplish tasks faster.",
                  icon: "🎙️",
                  link: "/features/voice-assistant"
                },
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="glass-effect border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all hover:shadow-[0_0_15px_rgba(60,223,255,0.15)]"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-sireiq-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sireiq-light/70 mb-4">{feature.description}</p>
                  <Button 
                    variant="link" 
                    className="text-sireiq-cyan p-0 h-auto group"
                    onClick={() => navigate(feature.link)}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            
            {/* See all features button */}
            <motion.div 
              className="flex justify-center mt-12"
              variants={fadeIn}
            >
              <Button 
                onClick={() => navigate('/features')}
                variant="outline"
                className="border-sireiq-accent text-sireiq-light px-6 py-3 h-auto"
              >
                Explore All Features <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Background gradient */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-sireiq-darker/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-full mb-4">
                <span className="text-sm font-medium text-sireiq-cyan">Simple Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How <span className="text-gradient">SireIQ</span> Works
              </h2>
              <p className="text-lg text-sireiq-light/70 max-w-2xl mx-auto">
                Start enhancing your workflow in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Sign Up",
                  description: "Create your account and select your role (User, Developer, or Enterprise)"
                },
                {
                  step: "02",
                  title: "Choose Features",
                  description: "Select the AI features that best suit your workflow needs"
                },
                {
                  step: "03",
                  title: "Start Creating",
                  description: "Use SireIQ's powerful tools to enhance your productivity"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="glass-effect border border-sireiq-accent/30 rounded-xl p-6 h-full">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-sireiq-cyan to-sireiq-cyan2 rounded-full flex items-center justify-center text-sireiq-darker font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 mt-3">{item.title}</h3>
                    <p className="text-sireiq-light/70">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10 text-sireiq-cyan/30">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button 
                onClick={() => navigate('/get-started')}
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto group"
              >
                Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-block px-4 py-2 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-full mb-4">
                  <span className="text-sm font-medium text-sireiq-cyan">Why Choose SireIQ</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The <span className="text-gradient">Smarter</span> Choice for AI
                </h2>
                <p className="text-lg text-sireiq-light/70 mb-8">
                  SireIQ stands out from other AI platforms with unique capabilities designed to enhance your productivity and creativity.
                </p>
                <Button 
                  onClick={() => navigate('/enterprise')}
                  variant="outline"
                  className="border-sireiq-accent text-sireiq-light px-6 py-3 h-auto"
                >
                  Enterprise Solutions <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </div>
              
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Advanced AI models trained on diverse datasets",
                  "Customizable to your specific workflow",
                  "Seamless integration with existing tools",
                  "Regular updates with cutting-edge features",
                  "Enterprise-grade security and privacy",
                  "Dedicated support team"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-sireiq-accent/5 border border-sireiq-accent/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-sireiq-cyan mt-0.5 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section 
          ref={ctaRef}
          className="py-20 px-4 bg-gradient-to-br from-sireiq-darker to-sireiq-dark relative overflow-hidden"
        >
          <motion.div 
            className="container mx-auto text-center relative z-10"
            animate={controlsCTA}
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeIn}
            >
              Ready to transform your workflow?
            </motion.h2>
            <motion.p 
              className="text-xl text-sireiq-light/70 mb-8 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Join thousands of creators and innovators already using SireIQ to build faster and smarter.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button 
                onClick={() => navigate('/get-started')}
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-8 py-7 h-auto text-lg group"
              >
                Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sireiq-cyan/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
