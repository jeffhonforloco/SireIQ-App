
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Play, Pause, Settings, Workflow, Plus } from 'lucide-react';
import { toast } from 'sonner';

const WorkflowAutomation = () => {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: "Daily Report Generator",
      description: "Automatically generate daily summaries",
      isActive: true,
      lastRun: "2 hours ago",
      nextRun: "In 22 hours",
      status: "running"
    },
    {
      id: 2,
      name: "Email Template Creator",
      description: "Create personalized email templates",
      isActive: false,
      lastRun: "Yesterday",
      nextRun: "Manual trigger",
      status: "paused"
    },
    {
      id: 3,
      name: "Content Optimizer",
      description: "Enhance and optimize content automatically",
      isActive: true,
      lastRun: "1 hour ago",
      nextRun: "In 3 hours",
      status: "running"
    }
  ]);

  const toggleWorkflow = (id: number) => {
    setWorkflows(prev => prev.map(workflow => 
      workflow.id === id 
        ? { ...workflow, isActive: !workflow.isActive, status: workflow.isActive ? 'paused' : 'running' }
        : workflow
    ));
    toast.success("Workflow status updated");
  };

  const runWorkflow = (name: string) => {
    toast.loading(`Running ${name}...`, {
      duration: 2000,
      onAutoClose: () => toast.success(`${name} completed successfully!`)
    });
  };

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-sireiq-cyan" />
            Workflow Automation
          </CardTitle>
          <Button size="sm" variant="outline" className="border-sireiq-accent/30">
            <Plus className="h-4 w-4 mr-1" />
            New
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="bg-sireiq-accent/5 p-4 rounded-lg border border-sireiq-accent/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{workflow.name}</h4>
                <Badge 
                  variant={workflow.status === 'running' ? 'default' : 'secondary'}
                  className={workflow.status === 'running' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}
                >
                  {workflow.status}
                </Badge>
              </div>
              <Switch 
                checked={workflow.isActive}
                onCheckedChange={() => toggleWorkflow(workflow.id)}
              />
            </div>
            <p className="text-sm text-sireiq-light/70 mb-3">{workflow.description}</p>
            <div className="flex items-center justify-between text-xs text-sireiq-light/50">
              <span>Last run: {workflow.lastRun}</span>
              <span>Next: {workflow.nextRun}</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="text-xs border-sireiq-accent/30"
                onClick={() => runWorkflow(workflow.name)}
              >
                <Play className="h-3 w-3 mr-1" />
                Run Now
              </Button>
              <Button size="sm" variant="ghost" className="text-xs">
                <Settings className="h-3 w-3 mr-1" />
                Configure
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default WorkflowAutomation;
