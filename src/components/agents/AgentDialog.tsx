
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Agent, AgentResponse } from '@/agents/types';
import { Loader2, CheckCircle, AlertTriangle, Search, FileText, ChartBar } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/sonner';
import AgentOutput from './AgentOutput';

interface AgentDialogProps {
  agent: Agent;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AgentDialog: React.FC<AgentDialogProps> = ({ agent, open, onOpenChange }) => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AgentResponse | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error("Please enter a request for the agent to process");
      return;
    }
    
    try {
      setIsProcessing(true);
      setResult(null);
      
      const response = await agent.process(input);
      setResult(response);
      
      if (response.status === 'error') {
        toast.error(response.error || "An error occurred while processing your request");
      }
    } catch (error) {
      console.error("Error processing agent request:", error);
      toast.error("Failed to process your request");
      setResult({
        status: 'error',
        content: '',
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    } finally {
      setIsProcessing(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl bg-sireiq-darker border-sireiq-accent/20">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sireiq-accent/10 rounded-full">
              {getAgentIcon()}
            </div>
            <DialogTitle className="text-xl font-semibold text-sireiq-light">{agent.name}</DialogTitle>
          </div>
          <DialogDescription className="text-sireiq-light/70">
            {agent.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="request" className="text-sm font-medium text-sireiq-light/80">
                What would you like the {agent.name} to do?
              </label>
              <Textarea
                id="request"
                placeholder={`Enter your request for the ${agent.name.toLowerCase()}...`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="h-32 bg-sireiq-accent/5 border-sireiq-accent/20 focus:border-sireiq-cyan/50 focus:ring-sireiq-cyan/10"
              />
            </div>
            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isProcessing} 
                className="bg-sireiq-cyan hover:bg-sireiq-cyan2 text-black"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : "Process Request"}
              </Button>
            </div>
          </form>
          
          {isProcessing && (
            <div className="space-y-3">
              <div className="flex items-center text-sireiq-light/70">
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-sireiq-cyan" />
                <span>Processing your request...</span>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
          )}
          
          {result && <AgentOutput response={result} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgentDialog;
