
import React from 'react';
import { Lightbulb, Sparkles, Network, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Lightbulb className="h-5 w-5 text-sireiq-cyan" />,
      label: "Campaign Concepts"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-sireiq-cyan" />,
      label: "Product Names"
    },
    {
      icon: <Network className="h-5 w-5 text-sireiq-cyan" />,
      label: "Content Themes"
    },
    {
      icon: <Brain className="h-5 w-5 text-sireiq-cyan" />,
      label: "Blog Topics"
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-sireiq-cyan" />,
      label: "Social Media Posts"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-sireiq-cyan" />,
      label: "Email Subject Lines"
    },
    {
      icon: <Network className="h-5 w-5 text-sireiq-cyan" />,
      label: "Video Scripts"
    },
    {
      icon: <Brain className="h-5 w-5 text-sireiq-cyan" />,
      label: "Brand Storytelling"
    }
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        <span className="text-gradient">Ideation</span> Use Cases
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index} className="glass-effect border border-sireiq-accent/20 bg-transparent">
            <CardContent className="flex items-center p-4">
              <div className="mr-3">{useCase.icon}</div>
              <span className="text-sireiq-light font-medium">{useCase.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
