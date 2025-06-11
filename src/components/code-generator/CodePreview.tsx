
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';
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
        <h3 className="text-lg font-semibold flex items-center text-text-primary">
          <Play className="h-5 w-5 text-brand-primary mr-2" />
          Live Preview
        </h3>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
            Live
          </Badge>
          <div className="hidden sm:flex items-center gap-1 text-xs text-text-secondary bg-background-secondary/50 px-2 py-1 rounded-md">
            <Monitor className="h-3 w-3" />
            Desktop View
          </div>
        </div>
      </div>
      
      <div className="bg-background-primary border border-border-primary rounded-xl overflow-hidden shadow-lg">
        {/* Browser-like header */}
        <div className="bg-background-secondary/50 px-4 py-3 border-b border-border-primary/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-xs text-text-secondary font-mono bg-background-primary px-2 py-1 rounded border border-border-primary/30">
              localhost:preview
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <span className="hidden sm:inline">AI Generated • {generatedCode.language}</span>
            <div className="flex gap-1">
              <Monitor className="h-3 w-3 opacity-100" />
              <Tablet className="h-3 w-3 opacity-30" />
              <Smartphone className="h-3 w-3 opacity-30" />
            </div>
          </div>
        </div>
        
        {/* Preview content */}
        <div className="relative bg-white">
          <iframe
            ref={iframeRef}
            className="w-full h-[500px] border-0"
            title="Live Code Preview"
            sandbox="allow-scripts allow-same-origin allow-forms"
            style={{ 
              background: '#ffffff',
              minHeight: '500px'
            }}
          />
          
          {/* Loading overlay - shows briefly during updates */}
          <div className="absolute inset-0 bg-background-primary/50 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none" id="preview-loading">
            <div className="bg-background-primary border border-border-primary rounded-lg px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2 text-sm text-text-primary">
                <div className="w-4 h-4 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                Updating preview...
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer info */}
        <div className="bg-background-secondary/30 px-4 py-2 border-t border-border-primary/30 flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
            Interactive preview powered by AI
          </div>
          <div className="flex items-center gap-4">
            <span>Responsive: Auto</span>
            <span>Updates: Real-time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
