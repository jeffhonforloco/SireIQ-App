import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowRight, Check, User, Cpu, Zap, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Input Your Requirements",
      description: "Define your content needs, target audience, and creative direction to guide the AI."
    },
    {
      icon: Cpu,
      title: "AI Analysis & Processing",
      description: "Our advanced neural networks analyze your inputs and process them using specialized algorithms."
    },
    {
      icon: Zap,
      title: "Content Generation",
      description: "Multiple AI agents collaborate to create high-quality content tailored to your requirements."
    },
    {
      icon: Database,
      title: "Refinement & Memory",
      description: "The system remembers your preferences and improves with each interaction for better results."
    }
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>About SireIQ | Empowering the Future of Intelligent Creation</title>
        <meta name="description" content="Learn how SireIQ empowers creators with advanced AI tools, agent-based reasoning, and edge-aware deployment to build next-generation applications." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient glow">How SireIQ Works</span>
              </h1>
              <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
                Our innovative AI platform combines advanced algorithms, multi-agent reasoning, and personalized memory to deliver unparalleled creative results.
              </p>
            </div>
          </div>
        </section>
        
        {/* Process Flow */}
        <section className="py-16 bg-sireiq-darker">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-gradient">The SireIQ Process</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-sireiq-cyan flex items-center justify-center text-sireiq-darker font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Card */}
                  <div className="glass-effect p-6 rounded-lg border border-sireiq-accent/30 h-full">
                    <div className="mb-4 text-sireiq-cyan">
                      <step.icon size={40} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sireiq-light/70">{step.description}</p>
                  </div>
                  
                  {/* Connector (not for the last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2">
                      <ArrowRight className="text-sireiq-cyan" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gradient">Advanced AI Technologies</span>
                </h2>
                <p className="text-lg mb-6 text-sireiq-light/70">
                  SireIQ leverages state-of-the-art technologies to deliver exceptional creative content:
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Multi-agent reasoning system for complex tasks",
                    "Personalized memory that adapts to your preferences",
                    "Neural networks trained on diverse creative content",
                    "Contextual understanding of your brand and audience",
                    "Natural language processing for human-like results"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="mt-8 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  <Link to="/try-advanced-ai" className="flex items-center">
                    Try Our Technology <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800" 
                  alt="Advanced Technology" 
                  className="rounded-lg w-full object-cover h-80"
                />
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
