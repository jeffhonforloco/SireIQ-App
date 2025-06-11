
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Code, Loader2, Sparkles, Eye, EyeOff, Zap, Play, Download, Copy } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
      {/* Modern Header */}
      <div className="border-b border-border-primary bg-background-glass backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-brand-primary to-brand-accent">
                <Code className="h-5 w-5 text-text-inverse" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-text-primary">AI Code Generator</h1>
                <p className="text-sm text-text-secondary">Build anything with AI</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-brand-primary/20 text-brand-primary border-brand-primary/30">
                <Sparkles className="h-3 w-3 mr-1" />
                AI Powered
              </Badge>
              {canShowPreview && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={togglePreview}
                  className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10"
                >
                  {showPreview ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-full">
          {/* Left Panel - Input */}
          <div className="space-y-6">
            <Card className="border-0 bg-background-glass backdrop-blur-xl shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-text-primary">
                  <Zap className="h-5 w-5 text-brand-primary" />
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="language-select" className="block text-sm font-medium text-text-primary">
                    Programming Language
                  </label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="w-full bg-background-secondary border-border-primary hover:border-brand-primary/50 text-text-primary">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-secondary border border-border-primary shadow-xl backdrop-blur-xl z-[9999]">
                      {languages.map((lang) => (
                        <SelectItem 
                          key={lang.value} 
                          value={lang.value}
                          className="hover:bg-brand-primary/10 focus:bg-brand-primary/10 text-text-primary cursor-pointer"
                        >
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <FileUpload onFileUpload={handleFileUpload} />

                <div className="space-y-2">
                  <label htmlFor="code-prompt" className="block text-sm font-medium text-text-primary">
                    Describe what you want to build
                  </label>
                  <Textarea 
                    id="code-prompt"
                    placeholder="E.g., Create a React component for user authentication, Build a Python function to process CSV files, Generate HTML for a landing page..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px] resize-none bg-background-secondary border-border-primary text-text-primary placeholder:text-text-tertiary focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                  />
                  <div className="text-xs text-text-secondary">
                    Be specific about functionality, styling, and any special requirements.
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={generateCode}
                    disabled={isGenerating || (!prompt.trim() && !uploadedImage)} 
                    className="bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-glow-strong text-text-inverse flex-1 h-12"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Building...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Build
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={clearAll}
                    disabled={isGenerating}
                    className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10 text-text-primary"
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Output */}
          <div className="space-y-6">
            {generatedCode ? (
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
                        onClick={copyToClipboard}
                        className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10"
                      >
                        <Copy className="h-4 w-4 mr-1" /> 
                        Copy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={downloadCode}
                        className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10"
                      >
                        <Download className="h-4 w-4 mr-1" /> 
                        Download
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
                        onCopy={copyToClipboard}
                        onDownload={downloadCode}
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
                </CardContent>
              </Card>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGeneratorTool;
