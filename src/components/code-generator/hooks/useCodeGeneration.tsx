
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CodeExample } from '../types';
import { codeTemplates } from '../codeTemplates';
import { generateCustomCode } from '../codeGenerationUtils';
import { updatePreview } from '../previewUtils';

export const useCodeGeneration = () => {
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

  return {
    prompt,
    setPrompt,
    selectedLanguage,
    setSelectedLanguage,
    generatedCode,
    isGenerating,
    showPreview,
    uploadedImage,
    iframeRef,
    handleFileUpload,
    generateCode,
    copyToClipboard,
    downloadCode,
    clearAll,
    togglePreview
  };
};
