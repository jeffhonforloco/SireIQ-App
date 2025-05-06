
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
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

const FeaturesHighlight = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 relative">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
  );
};

export default FeaturesHighlight;
