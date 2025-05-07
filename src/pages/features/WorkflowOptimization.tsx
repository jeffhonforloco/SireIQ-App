
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const WorkflowOptimization = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Workflow Optimization | SireIQ</title>
        <meta name="description" content="Streamline your processes for maximum efficiency" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Globe className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Workflow</span> Optimization
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Streamline your processes for maximum efficiency
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Enhance Productivity Through Optimized Workflows</h2>
                <p className="text-lg">
                  SireIQ's workflow optimization tools analyze your current processes to identify bottlenecks and 
                  inefficiencies. Our AI suggests intelligent improvements that save time, reduce errors, and 
                  enhance collaboration across your organization.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Process Mapping</h3>
                    <p>Visualize your current workflows to gain clarity on how information and tasks flow through your organization.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Bottleneck Identification</h3>
                    <p>Identify and resolve workflow constraints that slow down processes and cause delays in delivery.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Task Automation</h3>
                    <p>Automate repetitive and time-consuming tasks to free up your team for more strategic activities.</p>
                  </div>
                  
                  <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-xl font-semibold mb-3">Resource Allocation</h3>
                    <p>Optimize the distribution of resources across projects to maximize efficiency and output.</p>
                  </div>
                </div>
                
                <Button className="mt-6 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Optimize Your Workflows <ArrowRight className="ml-2 h-4 w-4" />
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

export default WorkflowOptimization;
