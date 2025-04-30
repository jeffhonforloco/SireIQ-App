
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Settings } from 'lucide-react';
import { Agent } from '@/lib/ai/types';

interface AgentCardProps {
  agent: Agent;
  onAdd?: (agent: Agent) => void;
  onConfigure?: (agent: Agent) => void;
  selected?: boolean;
}

export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  onAdd,
  onConfigure,
  selected = false,
}) => {
  return (
    <Card className={`border ${
      selected ? 'border-sireiq-cyan/70' : 'border-sireiq-accent/30'
    } bg-transparent transition-all duration-200 hover:border-sireiq-cyan/50`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-sireiq-light">{agent.name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-sireiq-light/70">{agent.description}</p>
        <div className="mt-4">
          <p className="text-xs font-medium mb-1 text-sireiq-light/50">Capabilities:</p>
          <ul className="pl-4 text-xs text-sireiq-light/60">
            {agent.capabilities.map((capability, index) => (
              <li key={index} className="mb-1">• {capability}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        {onAdd && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs hover:bg-sireiq-accent/20"
            onClick={() => onAdd(agent)}
          >
            <Plus className="h-3 w-3 mr-1" />
            Add to Workflow
          </Button>
        )}
        {onConfigure && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs hover:bg-sireiq-accent/20"
            onClick={() => onConfigure(agent)}
          >
            <Settings className="h-3 w-3 mr-1" />
            Configure
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
