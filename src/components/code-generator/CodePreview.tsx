
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';
import { CodeExample } from './types';

interface CodePreviewProps {
  generatedCode: CodeExample;
  iframeRef: React.RefObject<HTMLIFrameElement>;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  generatedCode,
  iframeRef
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Play className="h-5 w-5 text-brand-primary mr-2" />
          Live Preview
        </h3>
        <Badge variant="secondary" className="text-xs">
          Real-time rendering
        </Badge>
      </div>
      
      <div className="bg-background/50 border border-brand-accent/20 rounded-lg overflow-hidden">
        <div className="bg-background/30 px-4 py-2 border-b border-brand-accent/20">
          <span className="text-xs text-text-secondary">
            Interactive Preview - {generatedCode.language}
          </span>
        </div>
        <div className="relative">
          <iframe
            ref={iframeRef}
            className="w-full h-96 border-0"
            title="Code Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
