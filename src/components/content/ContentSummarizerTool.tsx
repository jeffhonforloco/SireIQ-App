
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Copy, Scissors, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContentSummarizerTool = () => {
  const [inputText, setInputText] = useState('');
  const [summarizedContent, setSummarizedContent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const summarizeContent = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Empty content",
        description: "Please enter some content to summarize.",
        variant: "destructive"
      });
      return;
    }

    if (inputText.length < 100) {
      toast({
        title: "Content too short",
        description: "Please provide at least 100 characters for meaningful summarization.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create summary by extracting key sentences and reducing length
      const sentences = inputText.split(/[.!?]+/).filter(s => s.trim().length > 20);
      let summary = '';
      
      if (sentences.length > 3) {
        // Take first sentence, middle sentence, and a concluding thought
        const keyPoints = [
          sentences[0]?.trim(),
          sentences[Math.floor(sentences.length / 2)]?.trim(),
          sentences[sentences.length - 1]?.trim()
        ].filter(Boolean);
        
        summary = keyPoints.join('. ') + '.';
      } else {
        // For shorter content, just reduce word count
        const words = inputText.split(/\s+/);
        summary = words.slice(0, Math.ceil(words.length * 0.6)).join(' ');
      }
      
      // Clean up the summary
      summary = summary
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/([.!?])\s*([.!?])/g, '$1 $2'); // Fix multiple punctuation
      
      setSummarizedContent(summary);
      
      toast({
        title: "Summary created",
        description: "Your content has been successfully summarized!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to summarize content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(summarizedContent);
      toast({
        title: "Copied to clipboard",
        description: "Summary has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive"
      });
    }
  };

  const clearContent = () => {
    setInputText('');
    setSummarizedContent('');
  };

  return (
    <Card className="bg-card-gradient border border-brand-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-brand-primary" />
          Content Summarizer Tool
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="content-input" className="block text-sm font-medium">
            Paste your content here
          </label>
          <Textarea 
            id="content-input"
            placeholder="Enter the content you want to summarize (minimum 100 characters)..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px] resize-none bg-background/50"
          />
          <div className="flex justify-between items-center text-xs text-text-secondary">
            <span>{inputText.length} characters</span>
            <span>Minimum: 100 characters</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={summarizeContent}
            disabled={isProcessing || inputText.length < 100} 
            className="btn-primary flex-1"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Summarizing...
              </>
            ) : (
              <>
                <Scissors className="w-4 h-4 mr-2" />
                Summarize Content
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={clearContent}
            disabled={isProcessing}
            className="border-brand-accent/50 hover:border-brand-primary/50"
          >
            Clear
          </Button>
        </div>
        
        {summarizedContent && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium flex items-center">
                <FileText className="h-5 w-5 text-brand-primary mr-2" />
                Summarized Content
              </h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={copyToClipboard}
                className="flex items-center gap-1"
              >
                <Copy className="h-4 w-4" /> 
                Copy
              </Button>
            </div>
            
            <div className="bg-background/50 border border-brand-accent/20 rounded-lg p-4">
              <p className="whitespace-pre-wrap leading-relaxed">{summarizedContent}</p>
            </div>
            
            <div className="flex justify-between text-xs text-text-secondary">
              <span>Original: {inputText.length} characters</span>
              <span>Summary: {summarizedContent.length} characters</span>
              <span>Reduction: {Math.round((1 - summarizedContent.length / inputText.length) * 100)}%</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentSummarizerTool;
