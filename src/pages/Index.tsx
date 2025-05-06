
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomepageChat from '@/components/ai-chat/HomepageChat';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
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
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Next Generation <span className="text-gradient glow">AI Platform</span>
                </h1>
                <p className="text-xl text-sireiq-light/70 mb-8 max-w-lg">
                  Empowering creators and innovators with advanced AI solutions. 
                  Build faster, smarter, and more creatively.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => navigate('/get-started')}
                    className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-6 h-auto"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    onClick={() => navigate('/features')}
                    variant="outline"
                    className="border-sireiq-accent text-sireiq-light px-6 py-6 h-auto"
                  >
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <HomepageChat />
              </div>
            </div>
          </div>
        </section>
        
        {/* Clients Section */}
        <section className="py-16 px-4 bg-sireiq-darker/50">
          <div className="container mx-auto">
            <h2 className="text-2xl text-center font-medium mb-8 text-sireiq-light/70">
              Trusted by innovative companies worldwide
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {/* Simple client logos placeholders */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div 
                  key={item} 
                  className="h-12 w-32 bg-sireiq-accent/10 rounded-md flex items-center justify-center border border-sireiq-accent/20"
                >
                  <span className="text-sireiq-light/30 font-medium">Client {item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Highlights */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Supercharge Your <span className="text-gradient">Workflow</span>
              </h2>
              <p className="text-lg text-sireiq-light/70 max-w-2xl mx-auto">
                SireIQ combines cutting-edge AI with intuitive design to transform how you work and create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div 
                  key={index} 
                  className="glass-effect border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all"
                >
                  <div className="bg-sireiq-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sireiq-light/70 mb-4">{feature.description}</p>
                  <Button 
                    variant="link" 
                    className="text-sireiq-cyan p-0 h-auto"
                    onClick={() => navigate(feature.link)}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-sireiq-darker to-sireiq-dark">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-sireiq-light/70 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and innovators already using SireIQ to build faster and smarter.
            </p>
            <Button 
              onClick={() => navigate('/get-started')}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-8 py-7 h-auto text-lg"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
