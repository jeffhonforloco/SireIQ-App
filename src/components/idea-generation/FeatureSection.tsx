
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import IdeaVisualization from './IdeaVisualization';

const FeatureSection = () => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <IdeaVisualization />
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-gradient">Spark Creativity</span> On Demand
          </h2>
          <p className="text-lg text-sireiq-light/70 mb-8">
            Never face a creative block again. Our AI idea generation tools help you brainstorm concepts, develop new angles, and expand your thinking—all tailored to your brand's unique needs and market position.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Generate dozens of ideas in seconds", 
              "Explore conceptual relationships with idea mapping", 
              "Filter suggestions by relevance and originality", 
              "Save and organize ideas for future reference"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
            onClick={() => {
              // Scroll to top of the page to focus on the idea generator
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Try Idea Generation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
