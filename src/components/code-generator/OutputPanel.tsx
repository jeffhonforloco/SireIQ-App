import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, Copy, Download, ShieldCheck } from 'lucide-react';
import { CodeExample } from './types';
import CodeDisplay from './CodeDisplay';
import CodePreview from './CodePreview';
import SecurityReviewPanel from './SecurityReviewPanel';
import { useSecurityReview } from './hooks/useSecurityReview';

interface OutputPanelProps {
  generatedCode: CodeExample | null;
  canShowPreview: boolean;
  showPreview: boolean;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  onCopy: () => void;
  onDownload: () => void;
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

  // Store the potentially edited/generated code locally for applying security fixes
  const [displayedCode, setDisplayedCode] = useState(generatedCode);

  // Use the new security review hook
  const {
    issues: securityIssues,
    runReview,
    fixIssue,
    setIssues,
    analyzeSecurity
  } = useSecurityReview(displayedCode?.code || '', displayedCode?.language || '');

  React.useEffect(() => {
    setDisplayedCode(generatedCode);
    setIssues([]);
    // ... clear the security issues if code changes
  }, [generatedCode]);

  if (!displayedCode) {
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
    runReview();
    setShowSecurityReview(true);
  };

  // Handler to fix security issues
  const handleFixSecurityIssue = (index: number) => {
    // Fix the code for a specific issue
    const fixedCode = fixIssue(displayedCode.code, index);

    // Update displayedCode and rerun review
    setDisplayedCode({
      ...displayedCode,
      code: fixedCode
    });
    // The security review panel will update due to hook state
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
              generatedCode={displayedCode}
              onCopy={onCopy}
              onDownload={onDownload}
            />
          </TabsContent>
          
          {canShowPreview && showPreview && (
            <TabsContent value="preview" className="space-y-4 h-full">
              <CodePreview 
                generatedCode={displayedCode}
                iframeRef={iframeRef}
              />
            </TabsContent>
          )}
        </Tabs>
        
        <div className="flex justify-between text-xs text-text-secondary mt-4 pt-4 border-t border-border-primary">
          <span>Language: {displayedCode.language}</span>
          <span>Generated: {new Date().toLocaleTimeString()}</span>
        </div>
        {/* Security Review Panel */}
        {showSecurityReview && (
          <SecurityReviewPanel
            issues={securityIssues}
            language={displayedCode.language}
            onClose={() => setShowSecurityReview(false)}
            onFix={securityIssues.some((i: any) => i.canFix) ? handleFixSecurityIssue : undefined}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default OutputPanel;

// NOTE: OutputPanel.tsx is now quite long (> 200 lines). Consider refactoring into multiple files for maintainability!
