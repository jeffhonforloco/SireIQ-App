import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, Copy, Download, ShieldCheck } from 'lucide-react';
import { CodeExample } from './types';
import CodeDisplay from './CodeDisplay';
import CodePreview from './CodePreview';
import SecurityReviewPanel from './SecurityReviewPanel';

interface OutputPanelProps {
  generatedCode: CodeExample | null;
  canShowPreview: boolean;
  showPreview: boolean;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  onCopy: () => void;
  onDownload: () => void;
}

// Simple security analyzer: returns issue objects
function analyzeSecurity(code: string, language: string) {
  const issues: { message: string; suggestion?: string; line?: number }[] = [];

  const lines = code.split('\n');

  // Basic checks per language
  if (['javascript', 'react'].includes(language.toLowerCase())) {
    lines.forEach((line, idx) => {
      if (line.includes('eval(')) {
        issues.push({
          message: "Use of 'eval' detected.",
          suggestion: 'Avoid using eval() as it can run arbitrary code.',
          line: idx + 1,
        });
      }
      if (line.match(/document\.write|innerHTML\s*=/)) {
        issues.push({
          message: "'document.write' or direct 'innerHTML' assignment detected.",
          suggestion: 'Avoid document.write/innerHTML. Use safe DOM APIs or frameworks.',
          line: idx + 1,
        });
      }
      if (line.match(/dangerouslySetInnerHTML/)) {
        issues.push({
          message: "Use of 'dangerouslySetInnerHTML' detected.",
          suggestion:
            'Avoid using dangerouslySetInnerHTML except when absolutely necessary. Ensure you sanitize inputs.',
          line: idx + 1,
        });
      }
      if (line.match(/on\w+=".+"/)) {
        issues.push({
          message: "Inline JavaScript event detected.",
          suggestion:
            'Always use event handlers in your framework instead of HTML attributes (onClick, etc).',
          line: idx + 1,
        });
      }
    });
  }
  if (language === 'html') {
    lines.forEach((line, idx) => {
      if (line.match(/on\w+=".+"/)) {
        issues.push({
          message: "Inline JavaScript event found (e.g. onclick).",
          suggestion: 'Move scripts into separate JS files and avoid inline handlers.',
          line: idx + 1,
        });
      }
      if (line.match(/<script[\s>]/i)) {
        issues.push({
          message: 'Inline <script> tag detected.',
          suggestion:
            'Avoid inline scripts where possible. Use external files, and never inject untrusted content.',
          line: idx + 1,
        });
      }
    });
  }

  return issues;
}

const OutputPanel: React.FC<OutputPanelProps> = ({
  generatedCode,
  canShowPreview,
  showPreview,
  iframeRef,
  onCopy,
  onDownload
}) => {
  const [showSecurityReview, setShowSecurityReview] = useState(false);
  const [securityIssues, setSecurityIssues] = useState<any[]>([]);

  if (!generatedCode) {
    return (
      <Card className="border-0 bg-background-glass backdrop-blur-xl shadow-xl h-96 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent mx-auto">
            <Code className="h-8 w-8 text-text-inverse" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-text-primary mb-2">Ready to build</h3>
            <p className="text-text-secondary max-w-md">
              Describe what you want to create or upload a design, and we'll generate the code for you.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  // Handler to trigger security review
  const handleSecurityReview = () => {
    const language = generatedCode.language.toLowerCase();
    const issues = analyzeSecurity(generatedCode.code, language);
    setSecurityIssues(issues);
    setShowSecurityReview(true);
  };

  return (
    <Card className="border-0 bg-background-glass backdrop-blur-xl shadow-xl h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-text-primary">
            <Code className="h-5 w-5 text-brand-primary" />
            Generated Code
          </CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onCopy}
              className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10"
            >
              <Copy className="h-4 w-4 mr-1" /> 
              Copy
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onDownload}
              className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10"
            >
              <Download className="h-4 w-4 mr-1" /> 
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSecurityReview}
              className="border-yellow-500 text-yellow-700 hover:border-yellow-600 hover:bg-yellow-100 flex items-center ml-1"
              title="Review for Security Issues"
            >
              <ShieldCheck className="h-4 w-4 mr-1 text-yellow-700" /> Security Review
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <Tabs defaultValue="code" className="w-full h-full">
          <TabsList className="grid w-full grid-cols-2 bg-background-secondary">
            <TabsTrigger value="code" className="data-[state=active]:bg-brand-primary/20 data-[state=active]:text-brand-primary">
              Code
            </TabsTrigger>
            {canShowPreview && showPreview && (
              <TabsTrigger value="preview" className="data-[state=active]:bg-brand-primary/20 data-[state=active]:text-brand-primary">
                Live Preview
              </TabsTrigger>
            )}
          </TabsList>
          
          <TabsContent value="code" className="space-y-4 h-full">
            <CodeDisplay 
              generatedCode={generatedCode}
              onCopy={onCopy}
              onDownload={onDownload}
            />
          </TabsContent>
          
          {canShowPreview && showPreview && (
            <TabsContent value="preview" className="space-y-4 h-full">
              <CodePreview 
                generatedCode={generatedCode}
                iframeRef={iframeRef}
              />
            </TabsContent>
          )}
        </Tabs>
        
        <div className="flex justify-between text-xs text-text-secondary mt-4 pt-4 border-t border-border-primary">
          <span>Language: {generatedCode.language}</span>
          <span>Generated: {new Date().toLocaleTimeString()}</span>
        </div>
        {/* Security Review Panel */}
        {showSecurityReview && (
          <SecurityReviewPanel
            issues={securityIssues}
            language={generatedCode.language}
            onClose={() => setShowSecurityReview(false)}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default OutputPanel;
