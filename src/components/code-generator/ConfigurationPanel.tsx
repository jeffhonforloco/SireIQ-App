
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Loader2, Zap, Play, Sparkles, Brain, Code2, Lightbulb } from 'lucide-react';
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

const intelligentSuggestions = [
  "Create a responsive dashboard with charts and analytics",
  "Build a modern e-commerce product card with animations",
  "Design a real-time chat interface with message bubbles",
  "Generate a landing page with hero section and CTAs",
  "Create a data table with sorting and filtering",
  "Build a form with validation and error handling"
];

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
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    setShowSuggestions(false);
  };

  return (
    <Card className="border-0 bg-background-glass backdrop-blur-xl shadow-xl relative overflow-hidden">
      {/* AI Intelligence Indicator */}
      <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-bl from-brand-primary/20 to-transparent rounded-bl-full" />
      
      <CardHeader className="pb-3 sm:pb-4 relative px-3 sm:px-6 pt-3 sm:pt-6">
        <CardTitle className="flex items-center justify-between text-text-primary text-base sm:text-lg">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-brand-primary animate-pulse" />
              <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-brand-accent absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1" />
            </div>
            <span className="text-sm sm:text-base">AI Code Builder</span>
          </div>
          <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 text-xs">
            <Zap className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
            <span className="hidden sm:inline">Ultra</span> Smart
          </Badge>
        </CardTitle>
        <p className="text-xs sm:text-sm text-text-secondary">
          Advanced AI with pattern recognition and intelligent optimizations
        </p>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-6 relative px-3 sm:px-6 pb-4 sm:pb-6">
        <div className="space-y-2">
          <label htmlFor="language-select" className="block text-sm font-medium text-text-primary flex items-center gap-2">
            <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-brand-primary" />
            <span className="text-xs sm:text-sm">Programming Language</span>
          </label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full bg-background-primary border-border-primary hover:border-brand-primary/50 text-text-primary transition-all duration-200 h-9 sm:h-10">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="bg-background-primary border border-border-primary shadow-xl backdrop-blur-xl z-[9999]">
              {languages.map((lang) => (
                <SelectItem 
                  key={lang.value} 
                  value={lang.value}
                  className="hover:bg-brand-primary/10 focus:bg-brand-primary/10 text-text-primary cursor-pointer text-sm"
                >
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <FileUpload onFileUpload={onFileUpload} />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="code-prompt" className="block text-sm font-medium text-text-primary flex items-center gap-2">
              <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-brand-primary" />
              <span className="text-xs sm:text-sm">Describe what you want to build</span>
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSuggestions(!showSuggestions)}
              className="text-brand-primary hover:bg-brand-primary/10 h-6 px-2 text-xs"
            >
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
              Ideas
            </Button>
          </div>

          {showSuggestions && (
            <div className="grid gap-2 p-2 sm:p-3 bg-background-secondary/50 rounded-lg border border-border-primary/50">
              <p className="text-xs text-text-secondary mb-2">💡 Smart suggestions:</p>
              {intelligentSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-left text-xs p-2 rounded bg-background-primary hover:bg-brand-primary/10 text-text-primary transition-all duration-200 border border-transparent hover:border-brand-primary/30"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <Textarea 
            id="code-prompt"
            placeholder="E.g., Create a React component for user authentication with modern design, dark theme support, and smooth animations..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px] sm:min-h-[120px] resize-none bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200 text-sm"
          />
          <div className="text-xs text-text-secondary flex items-center gap-1">
            <Brain className="h-3 w-3" />
            AI will analyze your request and apply best practices, modern patterns, and intelligent optimizations.
          </div>
        </div>
        
        <div className="flex gap-2 sm:gap-3">
          <Button 
            onClick={onGenerate}
            disabled={isGenerating || (!prompt.trim() && !uploadedImage)} 
            className="bg-gradient-to-r from-brand-primary to-brand-accent hover:shadow-glow-strong text-text-inverse flex-1 h-10 sm:h-12 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
                <span className="animate-pulse">Building...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="hidden sm:inline">Build with </span>AI
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={onClear}
            disabled={isGenerating}
            className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10 text-text-primary transition-all duration-200 px-3 sm:px-4 text-sm"
          >
            Clear
          </Button>
        </div>

        {/* AI Features Indicator - Compact on mobile */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 pt-2 border-t border-border-primary/30">
          <div className="flex items-center gap-1 text-xs text-text-secondary">
            <Zap className="h-2 w-2 sm:h-3 sm:w-3 text-brand-primary" />
            <span className="hidden sm:inline">Smart </span>Analysis
          </div>
          <div className="flex items-center gap-1 text-xs text-text-secondary">
            <Code2 className="h-2 w-2 sm:h-3 sm:w-3 text-brand-primary" />
            <span className="hidden sm:inline">Best </span>Practices
          </div>
          <div className="flex items-center gap-1 text-xs text-text-secondary">
            <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-brand-primary" />
            Auto-Optimize
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfigurationPanel;
