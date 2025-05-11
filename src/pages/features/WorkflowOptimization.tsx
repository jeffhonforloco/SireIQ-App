
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ClipboardCheck, BarChart2, Zap, Settings } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Workflow } from '@/lib/ai/types';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const WorkflowOptimization = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [analyzingProcess, setAnalyzingProcess] = useState(false);
  
  // Sample workflows for demonstration
  const [workflows, setWorkflows] = useState<Workflow[]>([
    {
      id: 'wf-01',
      name: 'Content Approval Process',
      description: 'Multi-stage workflow for content approval across teams',
      steps: [
        {
          id: 'step-01',
          agentId: 'writer',
          position: 0,
          inputFrom: 'user',
          outputTo: 'step-02'
        },
        {
          id: 'step-02',
          agentId: 'analyst',
          position: 1,
          inputFrom: 'step-01',
          outputTo: 'user'
        }
      ],
      createdAt: new Date('2025-04-01'),
      updatedAt: new Date('2025-05-01'),
      userId: 'demo-user'
    },
    {
      id: 'wf-02',
      name: 'Customer Support Routing',
      description: 'Analyze and route support tickets to appropriate departments',
      steps: [
        {
          id: 'step-03',
          agentId: 'analyst',
          position: 0,
          inputFrom: 'user',
          outputTo: 'step-04'
        },
        {
          id: 'step-04',
          agentId: 'summarizer',
          position: 1,
          inputFrom: 'step-03',
          outputTo: 'user'
        }
      ],
      createdAt: new Date('2025-04-15'),
      updatedAt: new Date('2025-05-05'),
      userId: 'demo-user'
    }
  ]);

  const handleAnalyzeWorkflow = () => {
    setAnalyzingProcess(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setAnalyzingProcess(false);
      toast({
        title: "Analysis Complete",
        description: "We've analyzed your workflow and found 3 optimization opportunities.",
      });
      setActiveTab('results');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Workflow Optimization | SireIQ</title>
        <meta name="description" content="Streamline your processes for maximum efficiency" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Globe className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Workflow</span> Optimization
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Streamline your processes for maximum efficiency
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analyzer">Workflow Analyzer</TabsTrigger>
                  <TabsTrigger value="results">Optimization Results</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Enhance Productivity Through Optimized Workflows</h2>
                    <p className="text-lg">
                      SireIQ's workflow optimization tools analyze your current processes to identify bottlenecks and 
                      inefficiencies. Our AI suggests intelligent improvements that save time, reduce errors, and 
                      enhance collaboration across your organization.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                        <div className="flex items-center mb-3">
                          <div className="bg-sireiq-cyan/20 p-2 rounded-md mr-3">
                            <ClipboardCheck className="h-5 w-5 text-sireiq-cyan" />
                          </div>
                          <h3 className="text-xl font-semibold">Process Mapping</h3>
                        </div>
                        <p>Visualize your current workflows to gain clarity on how information and tasks flow through your organization.</p>
                      </div>
                      
                      <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                        <div className="flex items-center mb-3">
                          <div className="bg-sireiq-cyan/20 p-2 rounded-md mr-3">
                            <BarChart2 className="h-5 w-5 text-sireiq-cyan" />
                          </div>
                          <h3 className="text-xl font-semibold">Bottleneck Identification</h3>
                        </div>
                        <p>Identify and resolve workflow constraints that slow down processes and cause delays in delivery.</p>
                      </div>
                      
                      <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                        <div className="flex items-center mb-3">
                          <div className="bg-sireiq-cyan/20 p-2 rounded-md mr-3">
                            <Zap className="h-5 w-5 text-sireiq-cyan" />
                          </div>
                          <h3 className="text-xl font-semibold">Task Automation</h3>
                        </div>
                        <p>Automate repetitive and time-consuming tasks to free up your team for more strategic activities.</p>
                      </div>
                      
                      <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                        <div className="flex items-center mb-3">
                          <div className="bg-sireiq-cyan/20 p-2 rounded-md mr-3">
                            <Settings className="h-5 w-5 text-sireiq-cyan" />
                          </div>
                          <h3 className="text-xl font-semibold">Resource Allocation</h3>
                        </div>
                        <p>Optimize the distribution of resources across projects to maximize efficiency and output.</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Button 
                        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                        onClick={() => setActiveTab('analyzer')}
                      >
                        Try Workflow Analyzer <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="analyzer">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Workflow Analyzer</h2>
                    <p className="text-lg">
                      Upload your workflow or select from our templates to receive AI-powered optimization suggestions.
                    </p>
                    
                    <div className="border border-dashed border-sireiq-accent/30 rounded-lg p-6 text-center">
                      <h3 className="text-xl font-semibold mb-4">Your Recent Workflows</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {workflows.map(workflow => (
                          <Card key={workflow.id} className="bg-sireiq-darker border-sireiq-accent/30">
                            <CardContent className="p-4">
                              <h4 className="text-lg font-medium mb-1">{workflow.name}</h4>
                              <p className="text-sm text-sireiq-light/70 mb-3">{workflow.description}</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-sireiq-light/50">
                                  Last updated: {workflow.updatedAt.toLocaleDateString()}
                                </span>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={handleAnalyzeWorkflow}
                                  disabled={analyzingProcess}
                                >
                                  Analyze
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="flex justify-center space-x-4">
                        <Button
                          variant="outline"
                          className="border-sireiq-accent/30"
                          onClick={() => toast({
                            title: "Coming Soon",
                            description: "This feature will be available in our next update.",
                          })}
                        >
                          Upload Workflow
                        </Button>
                        
                        <Link to="/ai-workflows">
                          <Button
                            className="bg-sireiq-cyan hover:bg-sireiq-cyan/90 text-sireiq-darker"
                          >
                            Create New Workflow
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    {analyzingProcess && (
                      <div className="mt-8 text-center">
                        <div className="inline-block w-8 h-8 border-4 border-sireiq-cyan/30 border-t-sireiq-cyan rounded-full animate-spin mb-4"></div>
                        <p className="text-sireiq-light/70">Analyzing your workflow for optimization opportunities...</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="results">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Optimization Results</h2>
                    <p className="text-lg">
                      Our AI has analyzed your workflow and identified the following optimization opportunities:
                    </p>
                    
                    <div className="space-y-4 mt-6">
                      <div className="bg-sireiq-darker p-6 rounded-lg border-l-4 border-l-green-500 border border-sireiq-accent/20">
                        <h3 className="text-xl font-semibold mb-2 flex items-center">
                          <span className="inline-block w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mr-2">1</span>
                          Automate Initial Content Review
                        </h3>
                        <p className="mb-4">
                          The initial content review is taking 45% of total process time. Implement AI-based pre-screening to reduce review time by 70%.
                        </p>
                        <div className="flex justify-between">
                          <span className="text-sm text-sireiq-light/70">Impact: High</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-green-400 border-green-500/30"
                            onClick={() => {
                              toast({
                                title: "Optimization Applied",
                                description: "Automation rule has been added to your workflow.",
                              });
                            }}
                          >
                            Apply This Optimization
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-sireiq-darker p-6 rounded-lg border-l-4 border-l-blue-500 border border-sireiq-accent/20">
                        <h3 className="text-xl font-semibold mb-2 flex items-center">
                          <span className="inline-block w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mr-2">2</span>
                          Consolidate Approval Stages
                        </h3>
                        <p className="mb-4">
                          Multiple approval stages create redundancy. Merge editorial and legal reviews into a single parallel review process to save 3.5 hours per workflow.
                        </p>
                        <div className="flex justify-between">
                          <span className="text-sm text-sireiq-light/70">Impact: Medium</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-blue-400 border-blue-500/30"
                            onClick={() => {
                              toast({
                                title: "Optimization Applied",
                                description: "Approval stages have been consolidated in your workflow.",
                              });
                            }}
                          >
                            Apply This Optimization
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-sireiq-darker p-6 rounded-lg border-l-4 border-l-purple-500 border border-sireiq-accent/20">
                        <h3 className="text-xl font-semibold mb-2 flex items-center">
                          <span className="inline-block w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mr-2">3</span>
                          Implement Notification System
                        </h3>
                        <p className="mb-4">
                          Wait times between stages account for 30% of total process time. Add automated notifications to reduce wait times by 80%.
                        </p>
                        <div className="flex justify-between">
                          <span className="text-sm text-sireiq-light/70">Impact: Medium</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-purple-400 border-purple-500/30"
                            onClick={() => {
                              toast({
                                title: "Optimization Applied",
                                description: "Notification system has been implemented in your workflow.",
                              });
                            }}
                          >
                            Apply This Optimization
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <Button 
                        className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                        onClick={() => {
                          toast({
                            title: "Workflow Updated",
                            description: "Your optimized workflow has been saved.",
                          });
                        }}
                      >
                        Apply All Optimizations <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Success</span> Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                company: "TechCorp Inc.",
                industry: "Software Development",
                result: "40% faster product releases",
                quote: "SireIQ helped us identify critical bottlenecks in our development pipeline, resulting in significantly faster releases without compromising quality."
              },
              {
                company: "Global Media Group",
                industry: "Digital Media",
                result: "65% reduction in content approval time",
                quote: "Our content approval process was overwhelming our teams. SireIQ's workflow optimization cut approval times dramatically while improving quality."
              },
              {
                company: "HealthServe Solutions",
                industry: "Healthcare",
                result: "90% faster patient intake process",
                quote: "The workflow optimization tools identified redundancies in our intake process that we hadn't noticed. Implementation was smooth and results were immediate."
              }
            ].map((study, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 border border-sireiq-accent/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{study.company}</h3>
                  <span className="px-3 py-1 bg-sireiq-cyan/10 text-sireiq-cyan rounded-full text-sm">
                    {study.industry}
                  </span>
                </div>
                
                <div className="mb-4 h-10 flex items-center">
                  <span className="text-2xl font-bold text-sireiq-cyan">{study.result}</span>
                </div>
                
                <p className="text-sireiq-light/70 italic">"{study.quote}"</p>
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

export default WorkflowOptimization;
