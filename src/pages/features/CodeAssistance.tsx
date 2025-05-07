
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const CodeAssistance = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Code Assistance | SireIQ</title>
        <meta name="description" content="Get help with coding, debugging and development" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Code className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Code</span> Assistance
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Get help with coding, debugging and development
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Accelerate Development with AI-Powered Coding Support</h2>
                <p className="text-lg">
                  SireIQ's code assistance tools help developers of all skill levels write better code faster. 
                  From generating boilerplate to debugging complex issues, our AI understands modern programming 
                  paradigms and best practices across multiple languages and frameworks.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Code Generation</h3>
                    <p>Generate working code snippets across multiple languages based on natural language descriptions of functionality.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Debugging Support</h3>
                    <p>Get help identifying and fixing bugs with intelligent error analysis and suggested solutions.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Code Optimization</h3>
                    <p>Improve performance and readability with AI-powered suggestions for refactoring and optimizing your code.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                    <p>Automatically generate clear documentation for your code, including function descriptions and usage examples.</p>
                  </div>
                </div>
                
                <Button className="mt-6 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Try Code Assistance <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default CodeAssistance;
