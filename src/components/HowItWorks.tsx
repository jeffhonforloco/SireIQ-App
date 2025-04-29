
import React from 'react';
import { Check, Upload, Sparkles, Download } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Content",
      description: "Start by uploading existing content or sketching your ideas to establish your creative direction."
    },
    {
      icon: Check,
      title: "Set Parameters",
      description: "Define your goals, audience, tone, and style preferences to guide the AI content creation."
    },
    {
      icon: Sparkles,
      title: "Let SireIQ Create",
      description: "Our AI analyzes your inputs and generates high-quality content aligned with your creative vision."
    },
    {
      icon: Download,
      title: "Refine & Export",
      description: "Fine-tune the generated content, then export in multiple formats ready for publication."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-sireiq-accent/20 skew-y-3 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient glow">SireIQ</span> Works
          </h2>
          <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
            Our streamlined process makes AI-powered content creation simple, intuitive, and efficient.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Step number with icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-sireiq-darker" />
                </div>
                
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sireiq-accent border border-sireiq-cyan flex items-center justify-center">
                  <span className="text-sireiq-cyan font-bold">{index + 1}</span>
                </div>
              </div>
              
              {/* Step content */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sireiq-light/70">{step.description}</p>
              
              {/* Connector line for all but the last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute w-[calc(25%-3rem)] h-0.5 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 left-[calc(12.5%+1.5rem)] top-[5.5rem]" 
                     style={{ left: `calc(${index * 25}% + 8rem)` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
