
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Zap, Play } from 'lucide-react';
import { languages } from './languageConfig';
import FileUpload from './FileUpload';

interface ConfigurationPanelProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  uploadedImage: { file: File; data: string } | null;
  onFileUpload: (file: File, imageData: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
  onClear: () => void;
}

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  selectedLanguage,
  setSelectedLanguage,
  prompt,
  setPrompt,
  uploadedImage,
  onFileUpload,
  isGenerating,
  onGenerate,
  onClear
}) => {
  return (
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
            <SelectTrigger className="w-full bg-background-primary border-border-primary hover:border-brand-primary/50 text-text-primary">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="bg-background-primary border border-border-primary shadow-xl backdrop-blur-xl z-[9999]">
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

        <FileUpload onFileUpload={onFileUpload} />

        <div className="space-y-2">
          <label htmlFor="code-prompt" className="block text-sm font-medium text-text-primary">
            Describe what you want to build
          </label>
          <Textarea 
            id="code-prompt"
            placeholder="E.g., Create a React component for user authentication, Build a Python function to process CSV files, Generate HTML for a landing page..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] resize-none bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          />
          <div className="text-xs text-text-secondary">
            Be specific about functionality, styling, and any special requirements.
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={onGenerate}
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
            onClick={onClear}
            disabled={isGenerating}
            className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10 text-text-primary"
          >
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfigurationPanel;
