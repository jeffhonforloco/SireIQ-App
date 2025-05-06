
import React from 'react';
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

const TrustBadgesSection = () => {
  return (
    <section className="py-12 px-4 bg-sireiq-darker/50">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
  );
};

export default TrustBadgesSection;
