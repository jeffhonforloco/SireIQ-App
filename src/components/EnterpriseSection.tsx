
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Database, Slack } from 'lucide-react';
import { AdobeIcon, TeamsIcon } from './CustomIcons';
import { Link } from 'react-router-dom';

const EnterpriseSection: React.FC = () => {
  const enterpriseFeatures = [
    {
      title: "Team Dashboards",
      description: "Custom dashboards for team productivity tracking and version control",
      icon: Server,
    },
    {
      title: "API Access",
      description: "Connect your enterprise tools with our robust API endpoints",
      icon: Database,
    },
    {
      title: "SSO & Security",
      description: "Enterprise-grade security with Single Sign-On and advanced permissions",
      icon: Slack,
    },
  ];

  return (
    <section id="enterprise" className="py-20 bg-gradient-to-b from-sireiq-darker to-sireiq-dark">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient glow">Enterprise Solutions</span> for Teams
          </h2>
          <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
            Scale creativity across your organization with powerful tools designed for enterprise teams.
          </p>
        </div>

        {/* Enterprise features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="bg-transparent border border-sireiq-accent/30 overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="glass-effect rounded-full p-4 mb-5 text-sireiq-cyan">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-sireiq-light">{feature.title}</h3>
                <p className="text-sireiq-light/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* New AI features callout */}
        <div className="bg-gradient-to-r from-sireiq-accent/20 to-sireiq-accent/10 p-6 rounded-lg mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Advanced AI Workflows</h3>
              <p className="text-sireiq-light/80 mb-4">
                Design custom AI workflows with our new multi-agent system. Combine specialized AI agents, add personalized memory, and automate complex tasks.
              </p>
              <ul className="list-disc pl-5 text-sireiq-light/70 space-y-1 mb-4">
                <li>Create workflows with specialized AI agents</li>
                <li>Store and retrieve personalized context with memory system</li>
                <li>Chain agents together for complex reasoning tasks</li>
              </ul>
            </div>
            <div>
              <Link to="/ai-workflows">
                <Button className="bg-sireiq-cyan hover:bg-sireiq-cyan/90">
                  Try AI Studio
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Integration partners */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-8">Integration Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <AdobeIcon size={48} className="text-sireiq-light/70 hover:text-sireiq-cyan transition-colors" />
              <span className="mt-2 text-sm text-sireiq-light/50">Adobe</span>
            </div>
            <div className="flex flex-col items-center">
              <Slack size={48} className="text-sireiq-light/70 hover:text-sireiq-cyan transition-colors" />
              <span className="mt-2 text-sm text-sireiq-light/50">Slack</span>
            </div>
            <div className="flex flex-col items-center">
              <TeamsIcon size={48} className="text-sireiq-light/70 hover:text-sireiq-cyan transition-colors" />
              <span className="mt-2 text-sm text-sireiq-light/50">Teams</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-8 py-6 h-auto text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Request Enterprise Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
