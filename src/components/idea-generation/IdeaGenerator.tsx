
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Search, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';

interface IdeaGeneratorProps {
  onGenerateIdeas: (product: string, industry: string, additionalContext: string) => void;
  isGenerating: boolean;
}

const IdeaGenerator = ({ onGenerateIdeas, isGenerating }: IdeaGeneratorProps) => {
  const [product, setProduct] = useState<string>('');
  const [industry, setIndustry] = useState<string>('');
  const [additionalContext, setAdditionalContext] = useState<string>('');
  const [showAdvancedOptions, setShowAdvancedOptions] = useState<boolean>(false);
  const { toast } = useToast();

  const handleGenerateIdeas = () => {
    if (!product.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a product or service to generate ideas.",
        variant: "destructive"
      });
      return;
    }
    
    onGenerateIdeas(product, industry, additionalContext);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center mb-3">
        <div className="p-2 rounded-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 mr-3">
          <Lightbulb className="h-5 w-5 text-sireiq-darker" />
        </div>
        <h3 className="text-xl font-bold">Campaign Idea Generator</h3>
      </div>
      
      <p className="text-sireiq-light/70 mb-5">Enter your product or service to generate campaign ideas tailored to your needs</p>
      
      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-sireiq-light/50" />
        </div>
        <Input 
          type="text" 
          placeholder="e.g., Smart fitness tracker, Organic coffee subscription, Online learning platform"
          className="bg-sireiq-darker border border-sireiq-accent/30 rounded-md pl-10 py-6 text-sireiq-light"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerateIdeas()}
        />
      </div>
      
      <div className="flex gap-3 flex-col sm:flex-row mb-5">
        <Button 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker py-6"
          onClick={handleGenerateIdeas}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate Ideas'}
        </Button>
        
        <Button 
          variant="outline" 
          className="border-sireiq-accent/30 text-sireiq-light flex items-center"
          onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
        >
          Advanced Options
          {showAdvancedOptions ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </div>
      
      {showAdvancedOptions && (
        <div className="space-y-4 animate-fade-in p-4 bg-sireiq-accent/10 rounded-lg border border-sireiq-accent/20">
          <div>
            <label className="block text-sm font-medium mb-1 text-sireiq-light/70">Industry or Market</label>
            <Input
              type="text"
              placeholder="e.g., Healthcare, Technology, Food & Beverage"
              className="w-full bg-sireiq-darker border border-sireiq-accent/30 rounded-md px-4 py-2 text-sireiq-light"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-sireiq-light/70">Additional Context or Constraints</label>
            <Textarea
              placeholder="Add more details about your target audience, goals, budget constraints, etc."
              className="w-full bg-sireiq-darker border border-sireiq-accent/30 rounded-md px-4 py-2 text-sireiq-light"
              rows={3}
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaGenerator;
