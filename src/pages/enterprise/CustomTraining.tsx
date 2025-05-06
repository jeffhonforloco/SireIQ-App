
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { Database, BookOpen, FileText, Upload, CheckCircle } from 'lucide-react';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';

const CustomTraining = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  const trainingSteps = [
    { 
      title: "Data Collection",
      description: "Gather your brand assets, style guides, and content samples",
      icon: FileText,
      status: "completed"
    },
    { 
      title: "Data Preprocessing",
      description: "Our AI processes your content to identify key patterns and styles",
      icon: Database,
      status: "completed"
    },
    { 
      title: "Model Training",
      description: "Custom fine-tuning of SireIQ models on your unique content",
      icon: BookOpen,
      status: "in-progress",
      progress: 65
    },
    { 
      title: "Validation & Testing",
      description: "Rigorous testing to ensure brand alignment and quality",
      icon: CheckCircle,
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Custom Training | SireIQ Enterprise</title>
        <meta name="description" content="Train SireIQ on your brand assets and content for perfectly aligned AI-generated outputs." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Database className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Custom Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Train SireIQ on your brand assets and content for perfectly aligned outputs.
            </p>
          </div>
        </section>
        
        {/* Training Process */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Custom AI</span> Training Process
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Our proprietary training pipeline adapts SireIQ to your brand's unique style, tone, 
                and requirements through a structured process that ensures quality and alignment.
              </p>
              
              <div className="space-y-6">
                {trainingSteps.map((step, index) => (
                  <div key={index} className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${step.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                        step.status === 'in-progress' ? 'bg-sireiq-cyan/20 text-sireiq-cyan' : 
                        'bg-sireiq-accent/20 text-sireiq-light/70'}`}>
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold">{step.title}</h3>
                          <span className="text-xs px-2 py-1 rounded-full capitalize 
                            ${step.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                              step.status === 'in-progress' ? 'bg-sireiq-cyan/20 text-sireiq-cyan' : 
                              'bg-sireiq-accent/20 text-sireiq-light/70'}">
                            {step.status === 'in-progress' ? 'In Progress' : step.status}
                          </span>
                        </div>
                        <p className="text-sm text-sireiq-light/70 mb-2">{step.description}</p>
                        {step.status === 'in-progress' && step.progress && (
                          <div className="w-full">
                            <Progress value={step.progress} className="h-1.5" />
                            <p className="text-xs text-right mt-1 text-sireiq-light/50">{step.progress}% Complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="mt-8 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
                onClick={() => setDemoModalOpen(true)}
              >
                Request Training Demo
              </Button>
            </div>
            
            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-6">Upload Training Data</h3>
              <div className="bg-sireiq-accent/10 border-2 border-dashed border-sireiq-accent/30 rounded-lg p-8 text-center mb-6">
                <Upload className="h-12 w-12 mx-auto mb-4 text-sireiq-light/50" />
                <p className="mb-2">Drag & drop files here or</p>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  Browse Files
                </Button>
                <p className="text-xs mt-4 text-sireiq-light/50">
                  Supported formats: PDF, DOCX, JPG, PNG, MP3, MP4
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-sm mb-2">Recommended Training Materials</h4>
                <div className="space-y-2">
                  {[
                    "Brand Style Guide",
                    "Company Voice Documentation",
                    "Sample Content (blog posts, articles, etc.)",
                    "Visual Assets & Design System",
                    "Product Documentation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 rounded-full bg-sireiq-cyan"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features grid */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Key Benefits</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((feature, index) => (
              <Card key={index} className="bg-transparent border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sireiq-light/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Case Study */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-xl border border-sireiq-accent/30 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-gradient text-2xl font-bold mb-4">Case Study: Global Brand</h3>
                <p className="text-sireiq-light/70 mb-4">
                  A leading global brand trained SireIQ on their extensive content library, 
                  style guides, and brand assets. The results were transformative:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sireiq-cyan flex-shrink-0 mt-0.5" />
                    <span>85% reduction in content editing time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sireiq-cyan flex-shrink-0 mt-0.5" />
                    <span>97% brand alignment score on AI-generated content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-sireiq-cyan flex-shrink-0 mt-0.5" />
                    <span>3x increase in content production capacity</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                >
                  Read Full Case Study
                </Button>
              </div>
              <div className="md:w-1/2 bg-sireiq-darker p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-1">Before Custom Training</h4>
                    <p className="p-3 bg-sireiq-accent/5 rounded-lg text-sm text-sireiq-light/70">
                      "We're excited to announce our new product! It's really great and you should definitely buy it."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">After Custom Training</h4>
                    <p className="p-3 bg-sireiq-cyan/10 rounded-lg text-sm">
                      "We're thrilled to introduce our groundbreaking innovation – designed with our signature attention to detail and backed by our industry-leading guarantee. Experience the difference today."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-xl border border-sireiq-accent/30 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to train SireIQ on your brand?
            </h2>
            <p className="text-lg text-sireiq-light/70 mb-8 max-w-2xl mx-auto">
              Get started with custom AI training and create content that truly represents your brand.
            </p>
            <Button 
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
              onClick={() => setDemoModalOpen(true)}
            >
              Request Training Demo
            </Button>
          </div>
        </section>
      </main>
      
      <CTASection />
      <Footer />
      
      {/* Demo Request Modal */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default CustomTraining;
