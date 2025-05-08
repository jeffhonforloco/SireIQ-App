
import React from 'react';
import { Users, Share2, MessageSquare, History } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-16">
        <div className="glass-effect inline-flex rounded-full p-3 mb-4">
          <Users className="h-8 w-8 text-sireiq-cyan" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gradient glow">Team</span> Collaboration
        </h1>
        <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
          Enable seamless collaboration across your creative teams with shared workspaces and real-time editing.
        </p>
      </div>
      
      <div className="flex justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Share2,
              title: "Shared Workspaces",
              description: "Create dedicated spaces for teams to collaborate on content"
            },
            {
              icon: MessageSquare,
              title: "Threaded Comments",
              description: "Discuss ideas and provide feedback directly on content"
            },
            {
              icon: History,
              title: "Version History",
              description: "Track changes and revert to previous versions when needed"
            }
          ].map((feature, index) => (
            <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 text-center">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-sireiq-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sireiq-light/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
