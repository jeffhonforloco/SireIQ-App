
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HomepageChat from '@/components/ai-chat/HomepageChat';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-36 md:pt-40 pb-16 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
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
  );
};

export default HeroSection;
