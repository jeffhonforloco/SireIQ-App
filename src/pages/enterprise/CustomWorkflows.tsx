
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { ArrowRight, Workflow, Settings, Layers3, Grid3x3, Code, Repeat, ArrowRight as FlowIcon, FileSpreadsheet, Plus, Trash, X } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

type WorkflowNode = {
  id: string;
  type: string;
  title: string;
  description: string;
  icon?: React.ElementType;
};

type SampleWorkflow = {
  id: string;
  name: string;
  description: string;
  nodes: WorkflowNode[];
};

const CustomWorkflows = () => {
  const { toast } = useToast();
  const [activeWorkflow, setActiveWorkflow] = useState<SampleWorkflow | null>(null);
  const [sampleWorkflows, setSampleWorkflows] = useState<SampleWorkflow[]>([
    {
      id: "wf1",
      name: "Content Publishing Pipeline",
      description: "Automated flow from content drafting to social media publishing",
      nodes: [
        { id: "n1", type: "input", title: "Draft Content", description: "Initial content creation" },
        { id: "n2", type: "process", title: "AI Review", description: "Grammar and style check" },
        { id: "n3", type: "process", title: "SEO Optimization", description: "Keyword and metadata enhancement" },
        { id: "n4", type: "output", title: "Publish", description: "Distribute to channels" }
      ]
    },
    {
      id: "wf2",
      name: "Customer Support Automation",
      description: "Route and analyze customer support tickets",
      nodes: [
        { id: "n1", type: "input", title: "Ticket Intake", description: "Initial customer inquiry" },
        { id: "n2", type: "process", title: "AI Classification", description: "Categorize support request" },
        { id: "n3", type: "decision", title: "Routing Logic", description: "Determine department" },
        { id: "n4", type: "output", title: "Resolution", description: "Answer or escalation" }
      ]
    }
  ]);
  
  const workflowForm = useForm({
    defaultValues: {
      workflowName: "",
      workflowDescription: ""
    }
  });
  
  const handleCreateWorkflow = (values: { workflowName: string, workflowDescription: string }) => {
    const newWorkflow: SampleWorkflow = {
      id: `wf${Date.now()}`,
      name: values.workflowName,
      description: values.workflowDescription,
      nodes: []
    };
    
    setSampleWorkflows([...sampleWorkflows, newWorkflow]);
    setActiveWorkflow(newWorkflow);
    
    toast({
      title: "Workflow Created",
      description: `"${values.workflowName}" has been created successfully.`
    });
    
    workflowForm.reset();
  };
  
  const handleAddNode = (type: string) => {
    if (!activeWorkflow) return;
    
    const newNode: WorkflowNode = {
      id: `node${Date.now()}`,
      type,
      title: `New ${type.charAt(0).toUpperCase() + type.slice(1)} Node`,
      description: "Double-click to edit"
    };
    
    const updatedWorkflow = {
      ...activeWorkflow,
      nodes: [...activeWorkflow.nodes, newNode]
    };
    
    setSampleWorkflows(sampleWorkflows.map(wf => 
      wf.id === activeWorkflow.id ? updatedWorkflow : wf
    ));
    
    setActiveWorkflow(updatedWorkflow);
    
    toast({
      title: "Node Added",
      description: `A new ${type} node has been added to your workflow.`
    });
  };
  
  const handleDeleteNode = (nodeId: string) => {
    if (!activeWorkflow) return;
    
    const updatedNodes = activeWorkflow.nodes.filter(node => node.id !== nodeId);
    const updatedWorkflow = { ...activeWorkflow, nodes: updatedNodes };
    
    setSampleWorkflows(sampleWorkflows.map(wf => 
      wf.id === activeWorkflow.id ? updatedWorkflow : wf
    ));
    
    setActiveWorkflow(updatedWorkflow);
    
    toast({
      title: "Node Removed",
      description: "Node has been removed from your workflow."
    });
  };
  
  const openWorkflow = (workflow: SampleWorkflow) => {
    setActiveWorkflow(workflow);
  };
  
  const getNodeIcon = (type: string) => {
    switch (type) {
      case "input": return Layers3;
      case "process": return Settings;
      case "decision": return Grid3x3;
      case "output": return FileSpreadsheet;
      default: return Code;
    }
  };

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
        
        {/* Interactive Workflow Builder */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Sidebar with workflows list */}
            <div className="md:col-span-3">
              <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 mb-6">
                <h3 className="text-xl font-bold mb-4">Your Workflows</h3>
                
                <div className="space-y-3 mb-6">
                  {sampleWorkflows.map(workflow => (
                    <div 
                      key={workflow.id} 
                      onClick={() => openWorkflow(workflow)}
                      className={`p-3 rounded-lg cursor-pointer border transition-all ${
                        activeWorkflow?.id === workflow.id 
                          ? 'border-sireiq-cyan bg-sireiq-accent/20' 
                          : 'border-sireiq-accent/10 hover:bg-sireiq-accent/10'
                      }`}
                    >
                      <h4 className="font-medium">{workflow.name}</h4>
                      <p className="text-xs text-sireiq-light/70">{workflow.description}</p>
                    </div>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-sireiq-accent/30 hover:bg-sireiq-accent/50">
                      <Plus className="h-4 w-4 mr-2" />
                      New Workflow
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-sireiq-darker text-sireiq-light border-sireiq-accent/30">
                    <DialogHeader>
                      <DialogTitle>Create New Workflow</DialogTitle>
                      <DialogDescription>
                        Define your workflow's basic information to get started.
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...workflowForm}>
                      <form onSubmit={workflowForm.handleSubmit(handleCreateWorkflow)} className="space-y-4">
                        <FormField
                          control={workflowForm.control}
                          name="workflowName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Workflow Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="e.g. Content Approval Process" 
                                  className="bg-sireiq-dark border-sireiq-accent/30"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription className="text-sireiq-light/50">
                                A clear name that describes the workflow's purpose
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={workflowForm.control}
                          name="workflowDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="e.g. Streamlines the review and approval process for marketing content" 
                                  className="bg-sireiq-dark border-sireiq-accent/30"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription className="text-sireiq-light/50">
                                Brief description of what this workflow does
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit" className="bg-sireiq-cyan hover:bg-sireiq-cyan/90">
                            Create Workflow
                          </Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
                <h3 className="text-lg font-bold mb-2">Node Types</h3>
                <p className="text-xs text-sireiq-light/70 mb-4">Drag and drop these nodes to build your workflow</p>
                
                <div className="space-y-3">
                  {[
                    { type: "input", label: "Input", description: "Starting point for data" },
                    { type: "process", label: "Process", description: "Transform or analyze data" },
                    { type: "decision", label: "Decision", description: "Branch based on conditions" },
                    { type: "output", label: "Output", description: "Final result or action" }
                  ].map((nodeType) => (
                    <button
                      key={nodeType.type}
                      onClick={() => handleAddNode(nodeType.type)}
                      disabled={!activeWorkflow}
                      className={`flex items-center w-full p-3 rounded-lg border border-sireiq-accent/20 hover:bg-sireiq-accent/10 transition-colors ${!activeWorkflow ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="w-8 h-8 rounded-md bg-sireiq-cyan/20 flex items-center justify-center mr-3">
                        {React.createElement(getNodeIcon(nodeType.type), { className: "h-4 w-4 text-sireiq-cyan" })}
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-sm">{nodeType.label}</div>
                        <div className="text-xs text-sireiq-light/70">{nodeType.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main workflow canvas */}
            <div className="md:col-span-9">
              <div className="glass-effect rounded-xl border border-sireiq-accent/30 min-h-[500px] flex flex-col">
                <div className="p-6 border-b border-sireiq-accent/20">
                  <h2 className="text-2xl font-bold">
                    {activeWorkflow ? activeWorkflow.name : 'Workflow Canvas'}
                  </h2>
                  <p className="text-sireiq-light/70">
                    {activeWorkflow 
                      ? activeWorkflow.description 
                      : 'Select or create a workflow to begin'}
                  </p>
                </div>
                
                <div className="flex-1 p-6">
                  {!activeWorkflow ? (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center max-w-md">
                        <div className="w-16 h-16 rounded-full bg-sireiq-accent/20 flex items-center justify-center mx-auto mb-4">
                          <Workflow className="h-8 w-8 text-sireiq-cyan/50" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No Workflow Selected</h3>
                        <p className="text-sireiq-light/70 mb-6">
                          Select an existing workflow from the sidebar or create a new one to start building.
                        </p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-sireiq-cyan hover:bg-sireiq-cyan/90">
                              Create New Workflow
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-sireiq-darker text-sireiq-light border-sireiq-accent/30">
                            <DialogHeader>
                              <DialogTitle>Create New Workflow</DialogTitle>
                              <DialogDescription>
                                Define your workflow's basic information to get started.
                              </DialogDescription>
                            </DialogHeader>
                            <Form {...workflowForm}>
                              <form onSubmit={workflowForm.handleSubmit(handleCreateWorkflow)} className="space-y-4">
                                <FormField
                                  control={workflowForm.control}
                                  name="workflowName"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Workflow Name</FormLabel>
                                      <FormControl>
                                        <Input 
                                          placeholder="e.g. Content Approval Process" 
                                          className="bg-sireiq-dark border-sireiq-accent/30"
                                          {...field} 
                                        />
                                      </FormControl>
                                      <FormDescription className="text-sireiq-light/50">
                                        A clear name that describes the workflow's purpose
                                      </FormDescription>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={workflowForm.control}
                                  name="workflowDescription"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Description</FormLabel>
                                      <FormControl>
                                        <Input 
                                          placeholder="e.g. Streamlines the review and approval process for marketing content" 
                                          className="bg-sireiq-dark border-sireiq-accent/30"
                                          {...field} 
                                        />
                                      </FormControl>
                                      <FormDescription className="text-sireiq-light/50">
                                        Brief description of what this workflow does
                                      </FormDescription>
                                    </FormItem>
                                  )}
                                />
                                <DialogFooter>
                                  <Button type="submit" className="bg-sireiq-cyan hover:bg-sireiq-cyan/90">
                                    Create Workflow
                                  </Button>
                                </DialogFooter>
                              </form>
                            </Form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {activeWorkflow.nodes.length === 0 ? (
                        <div className="text-center p-12 border-2 border-dashed border-sireiq-accent/20 rounded-lg">
                          <p className="text-sireiq-light/50 mb-4">
                            This workflow doesn't have any nodes yet. 
                            Add nodes from the sidebar to build your workflow.
                          </p>
                          <div className="flex justify-center space-x-4">
                            {["input", "process", "decision", "output"].map(type => (
                              <Button 
                                key={type}
                                onClick={() => handleAddNode(type)}
                                className="bg-sireiq-accent/30 hover:bg-sireiq-accent/50"
                              >
                                Add {type.charAt(0).toUpperCase() + type.slice(1)}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {activeWorkflow.nodes.map((node, index) => {
                            const NodeIcon = getNodeIcon(node.type);
                            return (
                              <div key={node.id} className="relative">
                                <div className="flex items-start bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg p-4">
                                  <div className="w-10 h-10 rounded-md bg-sireiq-accent/30 flex items-center justify-center mr-4 flex-shrink-0">
                                    <NodeIcon className="h-5 w-5 text-sireiq-cyan" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium mb-1">{node.title}</h4>
                                    <p className="text-sm text-sireiq-light/70">{node.description}</p>
                                  </div>
                                  <button 
                                    onClick={() => handleDeleteNode(node.id)}
                                    className="p-1 hover:bg-red-900/30 rounded-full"
                                  >
                                    <X className="h-4 w-4 text-red-400" />
                                  </button>
                                </div>
                                
                                {index < activeWorkflow.nodes.length - 1 && (
                                  <div className="h-8 w-0.5 bg-sireiq-accent/50 absolute left-5 -bottom-4"></div>
                                )}
                              </div>
                            );
                          })}
                          
                          <div className="flex justify-end mt-8">
                            <Button 
                              className="bg-sireiq-cyan hover:bg-sireiq-cyan/90"
                              onClick={() => {
                                toast({
                                  title: "Workflow Saved",
                                  description: "Your workflow has been saved successfully."
                                });
                              }}
                            >
                              Save Workflow
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
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
