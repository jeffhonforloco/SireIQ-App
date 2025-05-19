
import React from 'react';
import { AgentResponse } from '@/agents/types';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AgentOutputProps {
  response: AgentResponse;
}

const AgentOutput: React.FC<AgentOutputProps> = ({ response }) => {
  if (response.status === 'error') {
    return (
      <Alert variant="destructive" className="bg-red-500/10 border-red-500/30 text-red-400">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {response.error || "An unknown error occurred while processing your request."}
        </AlertDescription>
      </Alert>
    );
  }
  
  if (response.status === 'processing') {
    return (
      <Alert className="bg-amber-500/10 border-amber-500/30 text-amber-400">
        <Clock className="h-4 w-4" />
        <AlertTitle>Processing</AlertTitle>
        <AlertDescription>
          Your request is still being processed. This may take a few moments.
        </AlertDescription>
      </Alert>
    );
  }
  
  // Convert markdown-like formatting to basic HTML
  const formatContent = (content: string) => {
    let formattedContent = content
      .replace(/^### (.*$)/gm, '<h3 class="text-md font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-lg font-semibold mt-5 mb-3">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-xl font-bold mt-5 mb-4">$1</h1>')
      .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gm, '<em>$1</em>')
      .replace(/\n- (.*)/gm, '<li class="ml-4">• $1</li>')
      .replace(/\n\d\. (.*)/gm, '<li class="ml-4 list-decimal">$1</li>');
    
    // Replace newlines with br tags, but avoid adding them after headers or list items
    formattedContent = formattedContent.split('\n')
      .map(line => {
        if (line.includes('</h1>') || line.includes('</h2>') || line.includes('</h3>') || 
            line.includes('</li>')) {
          return line;
        }
        return line + '<br>';
      })
      .join('');
    
    return formattedContent;
  };
  
  return (
    <Card className="border-green-500/20 bg-green-500/5">
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-center space-x-2 text-green-400">
          <CheckCircle className="h-5 w-5" />
          <span className="font-medium">Results</span>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          className="prose prose-sm prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: formatContent(response.content) }}
        />
        
        {response.metadata && Object.keys(response.metadata).length > 0 && (
          <div className="mt-4 pt-3 border-t border-sireiq-accent/10">
            <p className="text-xs font-medium text-sireiq-light/50 mb-2">Metadata:</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(response.metadata).map(([key, value]) => (
                <div key={key} className="text-xs">
                  <span className="text-sireiq-light/40">{key}: </span>
                  <span className="text-sireiq-light/70">
                    {Array.isArray(value) ? value.join(', ') : String(value)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AgentOutput;
