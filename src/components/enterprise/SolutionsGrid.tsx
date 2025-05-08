
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Users, Lock, Workflow, Server, Database, Globe, BarChart, Webhook } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsGrid: React.FC = () => {
  const solutions = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless collaboration across your creative teams with shared workspaces and real-time editing.",
      path: "/enterprise/team-collaboration"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption, SSO integration, and compliance with industry standards to protect your data.",
      path: "/features/enterprise-security"
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description: "Design AI workflows specific to your organization's unique creative needs and processes.",
      path: "/enterprise/custom-workflows"
    },
    {
      icon: Server,
      title: "Dedicated Infrastructure",
      description: "Dedicated cloud resources ensure maximum performance and availability for your enterprise.",
      path: "/enterprise/dedicated-infrastructure"
    },
    {
      icon: Database,
      title: "Private Knowledge Base",
      description: "Train AI on your company's private data for more relevant and brand-aligned outputs.",
      path: "/enterprise/private-knowledge-base"
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Deploy SireIQ across international teams with multi-language support and regional adaptations.",
      path: "/enterprise/global-deployment"
    },
    {
      icon: ShieldCheck,
      title: "Compliance Controls",
      description: "Ensure all AI-generated content meets your regulatory and compliance requirements.",
      path: "/enterprise/compliance-controls"
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Comprehensive reporting on usage, performance, and ROI across your organization.",
      path: "/enterprise/advanced-analytics"
    },
    {
      icon: Webhook,
      title: "Integrations",
      description: "Connect SireIQ with your favorite tools and platforms for a seamless workflow experience.",
      path: "/enterprise/integrations"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-gradient">Enterprise Solutions</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Link to={solution.path} key={index}>
              <Card className="bg-transparent border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 text-sireiq-cyan">
                    <solution.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-sireiq-light/70">{solution.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
