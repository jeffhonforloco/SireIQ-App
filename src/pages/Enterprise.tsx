
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Users, Lock, Workflow, Server, Database, Globe, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';

const Enterprise = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
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
    }
  ];

  // New Enterprise Core Functionality
  const coreFunctionality = [
    {
      icon: Users,
      title: "Team Management",
      description: "Centralized controls and permissions for your entire creative team.",
      path: "/enterprise/team-management"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Advanced security features including SSO, audit logs, and role-based access.",
      path: "/features/enterprise-security"
    },
    {
      icon: Database,
      title: "Custom Training",
      description: "Train SireIQ on your brand assets and content for perfectly aligned outputs.",
      path: "/enterprise/custom-training"
    }
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Enterprise | AI-Powered Solutions for Business Growth</title>
        <meta name="description" content="Discover how SireIQ's enterprise solutions can transform your business with AI-powered tools, advanced security, and scalable workflows." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient glow">Enterprise Solutions</span>
              </h1>
              <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
                Scale creative excellence across your organization with SireIQ's enterprise-grade AI platform designed for large teams and complex workflows.
              </p>
              <Button 
                className="mt-8 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
                onClick={() => setDemoModalOpen(true)}
              >
                Request Enterprise Demo
              </Button>
            </div>
          </div>
        </section>
        
        {/* Enterprise Core Functionality */}
        <section className="py-16 bg-sireiq-darker">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-gradient">Enterprise-Grade AI</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {coreFunctionality.map((item, index) => (
                <Link to={item.path} key={index} className="group">
                  <Card className="bg-transparent h-full border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="bg-sireiq-accent/20 p-3 rounded-lg w-fit mb-4 text-sireiq-cyan group-hover:bg-sireiq-cyan/30 transition-all">
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-sireiq-cyan transition-colors">{item.title}</h3>
                      <p className="text-sireiq-light/70 mb-4 flex-1">{item.description}</p>
                      <div className="flex justify-end">
                        <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800" 
                  alt="Enterprise Team" 
                  className="rounded-lg w-full object-cover h-80"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gradient">Enterprise-Grade AI</span>
                </h2>
                <p className="text-lg mb-6 text-sireiq-light/70">
                  SireIQ Enterprise delivers a comprehensive solution for organizations looking to harness the power of AI for creative content at scale.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-sireiq-cyan/20 p-2 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Team Management</h3>
                      <p className="text-sireiq-light/70">Centralized controls and permissions for your entire creative team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-sireiq-cyan/20 p-2 rounded-lg mr-4">
                      <Lock className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Enterprise Security</h3>
                      <p className="text-sireiq-light/70">Advanced security features including SSO, audit logs, and role-based access</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-sireiq-cyan/20 p-2 rounded-lg mr-4">
                      <Database className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Custom Training</h3>
                      <p className="text-sireiq-light/70">Train SireIQ on your brand assets and content for perfectly aligned outputs</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="mt-8 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
                  onClick={() => setDemoModalOpen(true)}
                >
                  Request Enterprise Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enterprise Solutions Grid */}
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
        
        <CTASection />
      </main>
      
      <Footer />
      
      {/* Demo Request Modal */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default Enterprise;
