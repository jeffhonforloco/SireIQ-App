
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sireiq-darker to-sireiq-dark relative overflow-hidden">
      <motion.div 
        className="container mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
  );
};

export default CTASection;
