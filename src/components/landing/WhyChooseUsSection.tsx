
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="inline-block px-4 py-2 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-full mb-4">
              <span className="text-sm font-medium text-sireiq-cyan">Why Choose SireIQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="text-gradient">Smarter</span> Choice for AI
            </h2>
            <p className="text-lg text-sireiq-light/70 mb-8">
              SireIQ stands out from other AI platforms with unique capabilities designed to enhance your productivity and creativity.
            </p>
            <Button 
              onClick={() => navigate('/enterprise')}
              variant="outline"
              className="border-sireiq-accent text-sireiq-light px-6 py-3 h-auto"
            >
              Enterprise Solutions <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Advanced AI models trained on diverse datasets",
              "Customizable to your specific workflow",
              "Seamless integration with existing tools",
              "Regular updates with cutting-edge features",
              "Enterprise-grade security and privacy",
              "Dedicated support team"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-sireiq-accent/5 border border-sireiq-accent/20 rounded-lg">
                <Check className="h-5 w-5 text-sireiq-cyan mt-0.5 flex-shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
