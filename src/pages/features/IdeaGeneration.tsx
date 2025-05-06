
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { useToast } from '@/hooks/use-toast';
import { generateCampaignIdeas } from '@/utils/ideaGenerationUtils';

// Import refactored components
import IdeaGenerator from '@/components/idea-generation/IdeaGenerator';
import IdeaCardList from '@/components/idea-generation/IdeaCardList';
import FeatureSection from '@/components/idea-generation/FeatureSection';
import UseCasesSection from '@/components/idea-generation/UseCasesSection';

interface Idea {
  title: string;
  description: string;
}

const IdeaGeneration = () => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const { toast } = useToast();
  
  const handleGenerateIdeas = async (product: string, industry: string, additionalContext: string) => {
    setIsGenerating(true);
    setIdeas([]); // Clear previous ideas
    
    try {
      // Simulate API call with a delay
      setTimeout(() => {
        // Generate ideas based on the product and additional context
        const generatedIdeas = generateCampaignIdeas(product, industry, additionalContext);
        setIdeas(generatedIdeas);
        setIsGenerating(false);
        
        toast({
          title: "Ideas generated",
          description: `Generated ${generatedIdeas.length} campaign ideas for ${product}`,
        });
      }, 1500);
    } catch (error) {
      setIsGenerating(false);
      toast({
        title: "Error generating ideas",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Idea Generation | SireIQ</title>
        <meta name="description" content="Overcome creative blocks with AI-assisted brainstorming that sparks innovative concepts." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Lightbulb className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Idea</span> Generation
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Overcome creative blocks with AI-assisted brainstorming that sparks innovative concepts.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <IdeaGenerator 
                onGenerateIdeas={handleGenerateIdeas}
                isGenerating={isGenerating}
              />
              
              <IdeaCardList 
                ideas={ideas}
                isGenerating={isGenerating}
              />
            </div>
          </div>
        </section>
        
        {/* Features section with visualizations */}
        <FeatureSection ideas={ideas} />
        
        {/* Use Cases */}
        <UseCasesSection />
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default IdeaGeneration;
