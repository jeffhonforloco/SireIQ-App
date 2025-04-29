
import React from 'react';
import FeatureCard from './FeatureCard';
import { 
  BrainCircuit, 
  MessagesSquare, 
  Network, 
  Lightbulb, 
  LineChart, 
  Lock 
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Creation",
      description: "Leverage advanced neural networks to generate creative content that's indistinguishable from human-made work."
    },
    {
      icon: MessagesSquare,
      title: "Personality Engine",
      description: "Create content with consistent tone, style, and voice that reflects your brand's unique personality."
    },
    {
      icon: Network,
      title: "Real-time Collaboration",
      description: "Work seamlessly with your team in real-time, sharing ideas and refining content together."
    },
    {
      icon: Lightbulb,
      title: "Idea Generation",
      description: "Overcome creative blocks with AI-assisted brainstorming that sparks innovative concepts."
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Track content performance and audience engagement with comprehensive analytics dashboards."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Rest easy with bank-level encryption and robust privacy controls protecting your creative assets."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient glow">Powerful Features</span> for Creative Minds
          </h2>
          <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
            SireIQ combines cutting-edge AI technology with intuitive design to empower your creative process.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
