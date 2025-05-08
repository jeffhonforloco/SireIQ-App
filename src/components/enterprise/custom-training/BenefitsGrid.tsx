
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsGrid = () => {
  const benefits = [
    {
      title: "Brand-Perfect Content",
      description: "AI content that perfectly matches your brand voice, style, and messaging."
    },
    {
      title: "Custom Knowledge Base",
      description: "SireIQ learns from your private data to provide accurate, contextual responses."
    },
    {
      title: "Reduced Editing Time",
      description: "Less time spent editing AI outputs means greater team efficiency."
    },
    {
      title: "Domain Expertise",
      description: "Your AI understands industry-specific terms and concepts unique to your business."
    },
    {
      title: "Content Consistency",
      description: "Maintain consistent messaging across all channels and team members."
    },
    {
      title: "Private Training Data",
      description: "Your training data remains secure and is never used to train general models."
    }
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        <span className="text-gradient">Key Benefits</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-transparent border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sireiq-light/70">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BenefitsGrid;
