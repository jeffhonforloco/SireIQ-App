
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Download, Code } from 'lucide-react';
import { CodeExample } from './types';

interface CodeDisplayProps {
  generatedCode: CodeExample;
  onCopy: () => void;
  onDownload: () => void;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({
  generatedCode,
  onCopy,
  onDownload
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium flex items-center">
            <Code className="h-5 w-5 text-brand-primary mr-2" />
            Generated {generatedCode.language.toUpperCase()} Code
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            {generatedCode.description}
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onCopy}
            className="flex items-center gap-1"
          >
            <Copy className="h-4 w-4" /> 
            Copy
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onDownload}
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" /> 
            Download
          </Button>
        </div>
      </div>
      
      <div className="bg-background/50 border border-brand-accent/20 rounded-lg overflow-hidden">
        <div className="bg-background/30 px-4 py-2 border-b border-brand-accent/20 flex items-center justify-between">
          <span className="text-xs font-mono text-text-secondary">
            {generatedCode.language}
          </span>
          <Badge variant="outline" className="text-xs">
            {generatedCode.code.split('\n').length} lines
          </Badge>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono whitespace-pre-wrap leading-relaxed">
            {generatedCode.code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeDisplay;
