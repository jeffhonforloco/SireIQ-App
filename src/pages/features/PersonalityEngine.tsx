import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessagesSquare } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { usePersonalityEngine } from '@/contexts/PersonalityEngineContext';
import StyleCard from '@/components/personality/StyleCard';
import ParameterSlider from '@/components/personality/ParameterSlider';
import TextPreview from '@/components/personality/TextPreview';
import { toast } from '@/components/ui/sonner';

// Content component separated to access the context
const PersonalityEngineContent: React.FC = () => {
  const { styles, parameters, updateSelectedStyle, updateParameter } = usePersonalityEngine();
  
  const handleStyleSelect = (id: string) => {
    updateSelectedStyle(id);
    toast.success(`${styles.find(s => s.id === id)?.name} style selected!`);
  };
  
  const handleParameterChange = (paramName: string, value: number) => {
    updateParameter(paramName, value);
  };
  
  const handleTryEngine = () => {
    toast.success("Generating content with your settings...");
  };
  
  return (
    <>
      {/* Hero section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <div className="glass-effect inline-flex rounded-full p-3 mb-4">
            <MessagesSquare className="h-8 w-8 text-sireiq-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient glow">Personality</span> Engine
          </h1>
          <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
            Create content with consistent tone, style, and voice that reflects your brand's unique personality.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {styles.map((style) => (
                <StyleCard
                  key={style.id}
                  id={style.id}
                  name={style.name}
                  isSelected={style.isSelected}
                  description={style.description}
                  onClick={() => handleStyleSelect(style.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Features */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <TextPreview />
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-gradient">Consistent Brand Voice</span> Across All Channels
            </h2>
            <p className="text-lg text-sireiq-light/70 mb-8">
              Our Personality Engine learns from your existing content and brand guidelines to create a digital representation of your unique voice. Whether you're creating social media posts, emails, or website copy, your brand will always sound authentically you.
            </p>
            
            <Button 
              onClick={handleTryEngine} 
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker mb-8"
            >
              Try Personality Engine <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <h3 className="text-xl font-bold mb-4">Customize Your Brand Voice</h3>
            <div className="space-y-6">
              {parameters.map((param) => (
                <ParameterSlider
                  key={param.name}
                  name={param.name}
                  range={param.range}
                  value={param.value}
                  onChange={(value) => handleParameterChange(param.name, value)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Voice Customization */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          <span className="text-gradient">Generate Sample Content</span>
        </h2>
        
        <div className="max-w-3xl mx-auto glass-effect rounded-xl p-8 border border-sireiq-accent/30">
          <div className="mb-6">
            <label htmlFor="contentType" className="block text-sm font-medium mb-2">Content Type</label>
            <select 
              id="contentType" 
              className="w-full p-3 rounded-md bg-sireiq-darker border border-sireiq-accent/30 text-sireiq-light focus:ring-sireiq-cyan focus:border-sireiq-cyan"
            >
              <option value="social">Social Media Post</option>
              <option value="email">Email</option>
              <option value="blog">Blog Introduction</option>
              <option value="product">Product Description</option>
              <option value="ad">Advertisement</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="topic" className="block text-sm font-medium mb-2">Topic or Keywords</label>
            <input 
              type="text" 
              id="topic" 
              placeholder="E.g., New cloud storage solution, Summer sale, Product launch..."
              className="w-full p-3 rounded-md bg-sireiq-darker border border-sireiq-accent/30 text-sireiq-light focus:ring-sireiq-cyan focus:border-sireiq-cyan"
            />
          </div>
          
          <Button 
            onClick={() => {
              toast.success("Generating content sample...");
              setTimeout(() => {
                toast("Content generated! Check your dashboard.", {
                  description: "Your sample has been added to your content library."
                });
              }, 2000);
            }}
            className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          >
            Generate Sample
          </Button>
        </div>
      </section>
    </>
  );
};

// Main component with provider
const PersonalityEngine: React.FC = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Personality Engine | SireIQ</title>
        <meta name="description" content="Create content with consistent tone, style, and voice that reflects your brand's unique personality." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <PersonalityEngineContent />
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default PersonalityEngine;
