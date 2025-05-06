
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-3">Campaign Idea Generator</h3>
      <p className="text-sireiq-light/70 mb-4">Enter your product or service to generate campaign ideas</p>
      
      <div className="flex gap-3 flex-col sm:flex-row mb-4">
        <Input 
          type="text" 
          placeholder="e.g., Smart fitness tracker"
          className="flex-1 bg-sireiq-darker border border-sireiq-accent/30 rounded-md px-4 py-2 text-sireiq-light"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerateIdeas()}
        />
        <Button 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          onClick={handleGenerateIdeas}
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate Ideas'}
        </Button>
      </div>
      
      <div className="mb-4">
        <Button 
          variant="link" 
          className="text-sireiq-cyan p-0 h-auto"
          onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
        >
          {showAdvancedOptions ? 'Hide' : 'Show'} Advanced Options
        </Button>
      </div>
      
      {showAdvancedOptions && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <label className="block text-sm font-medium mb-1">Industry</label>
            <Input
              type="text"
              placeholder="e.g., Healthcare, Technology, Food"
              className="w-full bg-sireiq-darker border border-sireiq-accent/30 rounded-md px-4 py-2 text-sireiq-light"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Additional Context</label>
            <Textarea
              placeholder="Add more details about your target audience, goals, etc."
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
