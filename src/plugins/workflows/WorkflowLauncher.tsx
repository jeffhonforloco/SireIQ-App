
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, FileText, Briefcase, Megaphone, Star } from 'lucide-react';

type WorkflowTemplate = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'legal' | 'finance' | 'marketing' | 'favorite';
  complexity: 'simple' | 'medium' | 'complex';
};

// Sample templates - would come from an API in production
const workflowTemplates: WorkflowTemplate[] = [
  {
    id: 'legal-1',
    title: 'Contract Review',
    description: 'AI-assisted legal document review with risk assessment',
    icon: <FileText className="h-4 w-4" />,
    category: 'legal',
    complexity: 'medium',
  },
  {
    id: 'legal-2',
    title: 'Legal Compliance Check',
    description: 'Verify document compliance with regulations',
    icon: <FileText className="h-4 w-4" />,
    category: 'legal',
    complexity: 'complex',
  },
  {
    id: 'finance-1',
    title: 'Financial Report Generation',
    description: 'Create financial reports from data sources',
    icon: <Briefcase className="h-4 w-4" />,
    category: 'finance',
    complexity: 'medium',
  },
  {
    id: 'finance-2',
    title: 'Budget Analysis',
    description: 'AI-powered budget optimization suggestions',
    icon: <Briefcase className="h-4 w-4" />,
    category: 'finance',
    complexity: 'complex',
  },
  {
    id: 'marketing-1',
    title: 'Content Calendar',
    description: 'Generate a content calendar for your campaign',
    icon: <Megaphone className="h-4 w-4" />,
    category: 'marketing',
    complexity: 'simple',
  },
  {
    id: 'marketing-2',
    title: 'SEO Optimization',
    description: 'Analyze and optimize content for search engines',
    icon: <Megaphone className="h-4 w-4" />,
    category: 'marketing',
    complexity: 'medium',
  },
];

const WorkflowLauncher: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredTemplates = activeTab === 'all' 
    ? workflowTemplates 
    : workflowTemplates.filter(template => template.category === activeTab);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
          Start Workflow
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-sireiq-dark border-sireiq-accent/30">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gradient glow">Select Workflow Template</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="favorite">Favorites</TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-2 gap-3 mt-2">
            {filteredTemplates.map((template) => (
              <Card 
                key={template.id}
                className="border border-sireiq-accent/20 bg-sireiq-darker/50 cursor-pointer hover:border-sireiq-cyan/50 transition-colors"
                onClick={() => setOpen(false)}
              >
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-sireiq-accent/10 text-sireiq-cyan">
                      {template.icon}
                    </div>
                    <div className="font-medium">{template.title}</div>
                  </div>
                  <p className="text-sm text-sireiq-light/70 mb-3">{template.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-sireiq-light/50">
                      Complexity: 
                      <span className={`ml-1 ${
                        template.complexity === 'simple' ? 'text-green-400' :
                        template.complexity === 'medium' ? 'text-amber-400' :
                        'text-red-400'
                      }`}>
                        {template.complexity}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 h-7">
                      <span className="text-xs">Start</span>
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Tabs>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-sireiq-accent/20">
          <span className="text-xs text-sireiq-light/60">
            Can't find what you need? Create a custom workflow from scratch.
          </span>
          <Button variant="outline" size="sm">Custom Workflow</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkflowLauncher;
