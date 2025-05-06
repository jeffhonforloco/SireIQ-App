
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Workflow, Settings, Layers3, Grid3x3, Code, Repeat, FlowArrow, FileSpreadsheet } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const CustomWorkflows = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Custom Workflows | SireIQ Enterprise</title>
        <meta name="description" content="Design AI workflows specific to your organization's unique creative needs and processes with SireIQ's customizable workflow engine." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Workflow className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Custom</span> Workflows
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Design AI workflows specific to your organization's unique creative needs and processes.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileSpreadsheet,
                  title: "Workflow Builder",
                  description: "Visual editor to create custom AI processing chains"
                },
                {
                  icon: Settings,
                  title: "Process Automation",
                  description: "Automate repetitive tasks with AI-powered workflows"
                },
                {
                  icon: Repeat,
                  title: "Templates Library",
                  description: "Start with pre-built templates or create your own"
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
        
        {/* Workflow builder */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <div className="bg-sireiq-darker rounded-lg p-4">
                <h3 className="font-bold mb-4 text-xl text-sireiq-cyan">Visual Workflow Builder</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-sireiq-accent/30 flex items-center justify-center">
                      <Layers3 className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div className="h-10 w-10 flex justify-center">
                      <div className="h-full w-0.5 bg-sireiq-cyan/30"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-sireiq-accent/30 flex items-center justify-center">
                      <Grid3x3 className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div className="h-10 w-10 flex justify-center">
                      <div className="h-full w-0.5 bg-sireiq-cyan/30"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-sireiq-accent/30 flex items-center justify-center">
                      <Code className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div className="ml-6">
                      <div className="text-sm bg-sireiq-accent/10 rounded-lg px-3 py-2 border border-sireiq-accent/10">
                        <p className="font-medium">API Integration</p>
                        <p className="text-xs text-sireiq-light/70">Connect to external services</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-sireiq-accent/30 flex items-center justify-center">
                      <FlowArrow className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div className="ml-6">
                      <div className="text-sm bg-sireiq-accent/10 rounded-lg px-3 py-2 border border-sireiq-accent/10">
                        <p className="font-medium">Conditional Logic</p>
                        <p className="text-xs text-sireiq-light/70">If/then branching workflows</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button size="sm" className="bg-sireiq-cyan text-sireiq-darker">
                    Preview Workflow
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Customizable</span> Workflow Engine
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Build workflows that perfectly match your organization's unique processes. Combine AI capabilities with human oversight to create efficient and effective content production pipelines.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Visual drag-and-drop workflow builder",
                  "Chain multiple AI agents together for complex tasks",
                  "Define approval processes and review gates",
                  "Integrate with your existing tools and services",
                  "Schedule automated workflow runs at specified times"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-sireiq-cyan/20 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Explore Workflow Templates <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Use cases */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Workflow</span> Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Content Approval",
                description: "Create multi-stage approval workflows for marketing content with automated notifications and tracking.",
                steps: ["Draft Generation", "Editorial Review", "Legal Approval", "Publication"]
              },
              {
                title: "Data Processing",
                description: "Transform raw data into actionable insights and reports with customized AI analysis pipelines.",
                steps: ["Data Collection", "Cleaning & Formatting", "Analysis", "Visualization"]
              },
              {
                title: "Customer Support",
                description: "Route and process customer inquiries with AI-powered classification and response generation.",
                steps: ["Query Classification", "Response Generation", "Human Review", "Customer Reply"]
              }
            ].map((useCase, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 border border-sireiq-accent/20">
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-sireiq-light/70 mb-4">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.steps.map((step, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-2 text-xs font-medium text-sireiq-cyan">
                        {i + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default CustomWorkflows;
