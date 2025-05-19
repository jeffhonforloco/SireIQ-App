
import React, { useState } from 'react';
import { Agent, AgentResponse } from '@/agents/types';
import AgentDialog from './AgentDialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, ChartBar, AlertTriangle, CheckCircle } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'beta':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'maintenance':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  const getAgentIcon = () => {
    switch (agent.icon) {
      case 'search':
        return <Search className="h-5 w-5 text-sireiq-cyan" />;
      case 'file-text':
        return <FileText className="h-5 w-5 text-sireiq-cyan" />;
      case 'chart-bar':
        return <ChartBar className="h-5 w-5 text-sireiq-cyan" />;
      default:
        return <Search className="h-5 w-5 text-sireiq-cyan" />;
    }
  };
  
  return (
    <>
      <Card className="bg-sireiq-accent/5 border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-all duration-300 hover:shadow-md hover:shadow-sireiq-cyan/10 overflow-hidden">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <div className="p-2 bg-sireiq-accent/10 rounded-full">
              {getAgentIcon()}
            </div>
            <Badge className={`${getStatusColor(agent.status)} capitalize border`}>
              {agent.status}
            </Badge>
          </div>
          <CardTitle className="text-xl font-semibold text-sireiq-light">{agent.name}</CardTitle>
          <CardDescription className="text-sireiq-light/70">{agent.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm font-medium text-sireiq-light/80">Capabilities:</p>
            <ul className="space-y-1">
              {agent.capabilities.map((capability, index) => (
                <li key={index} className="text-xs flex items-center space-x-2 text-sireiq-light/60">
                  <CheckCircle className="h-3.5 w-3.5 text-sireiq-cyan/70" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-sireiq-accent/20 hover:bg-sireiq-accent/40 text-sireiq-cyan border-none"
            onClick={() => setIsDialogOpen(true)}
          >
            Use This Agent
          </Button>
        </CardFooter>
      </Card>
      
      <AgentDialog 
        agent={agent} 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
};

export default AgentCard;
