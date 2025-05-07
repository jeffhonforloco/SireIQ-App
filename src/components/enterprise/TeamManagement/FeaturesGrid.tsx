
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Feature = {
  title: string;
  description: string;
};

type FeaturesGridProps = {
  features: Feature[];
};

const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        <span className="text-gradient">Key Features</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-transparent border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sireiq-light/70">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
