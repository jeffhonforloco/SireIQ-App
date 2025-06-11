import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Code, Loader2, Sparkles, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CodeExample } from './types';
import { languages } from './languageConfig';
import { codeTemplates } from './codeTemplates';
import { generateCustomCode } from './codeGenerationUtils';
import { updatePreview } from './previewUtils';
import CodeDisplay from './CodeDisplay';
import CodePreview from './CodePreview';
import FileUpload from './FileUpload';

const CodeGeneratorTool = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [generatedCode, setGeneratedCode] = useState<CodeExample | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<{ file: File; data: string } | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (file: File, imageData: string) => {
    setUploadedImage({ file, data: imageData });
    
    // Auto-suggest prompt based on file
    const suggestedPrompt = `Convert this UI design to ${selectedLanguage} code. Create a responsive layout that matches the design, including colors, spacing, typography, and interactive elements.`;
    setPrompt(suggestedPrompt);
  };

  const generateCode = async () => {
    if (!prompt.trim() && !uploadedImage) {
      toast({
        title: "Missing input",
        description: "Please describe what code you want to generate or upload a design image.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Simulate AI processing with longer time for image analysis
      const processingTime = uploadedImage ? 3000 : 2000;
      await new Promise(resolve => setTimeout(resolve, processingTime));

      // Enhanced prompt for image uploads
      let enhancedPrompt = prompt;
      if (uploadedImage) {
        enhancedPrompt = `${prompt}\n\nBased on the uploaded design image (${uploadedImage.file.name}), create code that replicates the visual design, layout, and styling shown in the image.`;
      }

      // For demo purposes, use template based on language or create custom code
      let generatedExample: CodeExample;

      if (codeTemplates[selectedLanguage]) {
        generatedExample = {
          ...codeTemplates[selectedLanguage],
          description: uploadedImage 
            ? `Generated ${selectedLanguage} code based on uploaded design: "${uploadedImage.file.name}" and prompt: "${prompt}"`
            : `Generated ${selectedLanguage} code based on: "${prompt}"`
        };
      } else {
        // Generate custom code for other languages
        generatedExample = {
          language: selectedLanguage,
          description: uploadedImage
            ? `Generated ${selectedLanguage} code for uploaded design and prompt: "${prompt}"`
            : `Generated ${selectedLanguage} code for: "${prompt}"`,
          code: generateCustomCode(selectedLanguage, enhancedPrompt)
        };
      }

      setGeneratedCode(generatedExample);
      
      // Update preview if it's HTML/React
      if ((selectedLanguage === 'html' || selectedLanguage === 'react') && showPreview) {
        updatePreview(generatedExample.code, selectedLanguage, iframeRef);
      }

      toast({
        title: "Code built successfully!",
        description: uploadedImage
          ? `Generated ${selectedLanguage} code based on your design and requirements.`
          : `Generated ${selectedLanguage} code based on your prompt.`,
      });
    } catch (error) {
      toast({
        title: "Build failed",
        description: "Failed to generate code. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    if (!generatedCode) return;
    
    try {
      await navigator.clipboard.writeText(generatedCode.code);
      toast({
        title: "Copied to clipboard",
        description: "Code has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive"
      });
    }
  };

  const downloadCode = () => {
    if (!generatedCode) return;
    
    const extensions: Record<string, string> = {
      javascript: 'js',
      typescript: 'ts',
      react: 'jsx',
      python: 'py',
      html: 'html',
      css: 'css',
      sql: 'sql',
      java: 'java',
      csharp: 'cs',
      go: 'go',
      rust: 'rs',
      php: 'php'
    };
    
    const extension = extensions[selectedLanguage] || 'txt';
    const filename = `generated-code.${extension}`;
    
    const blob = new Blob([generatedCode.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: `Code saved as ${filename}`,
    });
  };

  const clearAll = () => {
    setPrompt('');
    setGeneratedCode(null);
    setUploadedImage(null);
    if (iframeRef.current) {
      iframeRef.current.src = 'about:blank';
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
    if (!showPreview && generatedCode && (selectedLanguage === 'html' || selectedLanguage === 'react')) {
      updatePreview(generatedCode.code, selectedLanguage, iframeRef);
    }
  };

  const canShowPreview = selectedLanguage === 'html' || selectedLanguage === 'react';

  return (
    <Card className="bg-card-gradient border border-brand-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-brand-primary" />
          AI Code Generator
          <Badge variant="secondary" className="ml-2">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
          {canShowPreview && (
            <Button
              variant="outline"
              size="sm"
              onClick={togglePreview}
              className="ml-auto"
            >
              {showPreview ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="language-select" className="block text-sm font-medium">
              Programming Language
            </label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full bg-background border-brand-accent/50 hover:border-brand-primary/50">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-brand-accent/50 shadow-lg z-50">
                {languages.map((lang) => (
                  <SelectItem 
                    key={lang.value} 
                    value={lang.value}
                    className="hover:bg-brand-primary/10 focus:bg-brand-primary/10"
                  >
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <FileUpload onFileUpload={handleFileUpload} />

        <div className="space-y-2">
          <label htmlFor="code-prompt" className="block text-sm font-medium">
            Describe what you want to build
          </label>
          <Textarea 
            id="code-prompt"
            placeholder="E.g., Create a React component for user authentication, Build a Python function to process CSV files, Generate HTML for a landing page..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] resize-none bg-background/50"
          />
          <div className="text-xs text-text-secondary">
            Be specific about functionality, styling, and any special requirements.
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={generateCode}
            disabled={isGenerating || (!prompt.trim() && !uploadedImage)} 
            className="btn-primary flex-1"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Building Code...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Build
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={clearAll}
            disabled={isGenerating}
            className="border-brand-accent/50 hover:border-brand-primary/50"
          >
            Clear
          </Button>
        </div>
        
        {generatedCode && (
          <div className="space-y-4 animate-fade-in">
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="code">Generated Code</TabsTrigger>
                {canShowPreview && showPreview && (
                  <TabsTrigger value="preview">Live Preview</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="code" className="space-y-4">
                <CodeDisplay 
                  generatedCode={generatedCode}
                  onCopy={copyToClipboard}
                  onDownload={downloadCode}
                />
              </TabsContent>
              
              {canShowPreview && showPreview && (
                <TabsContent value="preview" className="space-y-4">
                  <CodePreview 
                    generatedCode={generatedCode}
                    iframeRef={iframeRef}
                  />
                </TabsContent>
              )}
            </Tabs>
            
            <div className="flex justify-between text-xs text-text-secondary">
              <span>Language: {generatedCode.language}</span>
              <span>Generated: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CodeGeneratorTool;
