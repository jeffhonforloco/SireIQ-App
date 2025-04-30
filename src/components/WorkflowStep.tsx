
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDown, Settings, X } from 'lucide-react';
import { WorkflowStep as WorkflowStepType } from '@/lib/ai/types';
import { getAgentById } from '@/lib/ai/agents';

interface WorkflowStepProps {
  step: WorkflowStepType;
  isLast: boolean;
  onDelete: (stepId: string) => void;
  onConfigure: (stepId: string) => void;
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({
  step,
  isLast,
  onDelete,
  onConfigure,
}) => {
  const agent = getAgentById(step.agentId);
  
  if (!agent) {
    return null;
  }
  
  return (
    <div className="relative">
      <Card className="border border-sireiq-accent/30 bg-transparent mb-1">
        <CardHeader className="py-3 px-4 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-sireiq-light">{agent.name}</CardTitle>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0"
              onClick={() => onConfigure(step.id)}
            >
              <Settings className="h-3 w-3" />
              <span className="sr-only">Configure</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 hover:bg-red-500/20 hover:text-red-400"
              onClick={() => onDelete(step.id)}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="py-2 px-4">
          <p className="text-xs text-sireiq-light/70">{agent.description}</p>
        </CardContent>
      </Card>
      {!isLast && (
        <div className="flex justify-center py-1">
          <ArrowDown className="h-4 w-4 text-sireiq-light/50" />
        </div>
      )}
    </div>
  );
};
