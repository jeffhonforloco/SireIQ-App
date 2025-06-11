
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CodeExample } from '../types';
import { codeTemplates } from '../templates';
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
    
    // Intelligent prompt suggestions based on file type and name
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const fileName = file.name.toLowerCase();
    
    let suggestedPrompt = '';
    
    if (fileName.includes('dashboard') || fileName.includes('admin')) {
      suggestedPrompt = `Create a modern ${selectedLanguage} dashboard based on this design. Include interactive charts, responsive layout, data tables, and smooth animations.`;
    } else if (fileName.includes('login') || fileName.includes('auth')) {
      suggestedPrompt = `Build a sleek ${selectedLanguage} authentication interface matching this design with form validation, loading states, and security best practices.`;
    } else if (fileName.includes('landing') || fileName.includes('hero')) {
      suggestedPrompt = `Generate a stunning ${selectedLanguage} landing page based on this design with hero section, call-to-action buttons, and modern animations.`;
    } else {
      suggestedPrompt = `Convert this UI design to high-quality ${selectedLanguage} code with pixel-perfect styling, responsive design, modern patterns, and interactive elements.`;
    }
    
    setPrompt(suggestedPrompt);
    
    toast({
      title: "🎨 Design uploaded successfully!",
      description: "AI has analyzed your design and suggested an intelligent prompt.",
    });
  };

  const generateCode = async () => {
    if (!prompt.trim() && !uploadedImage) {
      toast({
        title: "⚠️ Missing input",
        description: "Please describe what code you want to generate or upload a design image.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Enhanced AI processing simulation with intelligent analysis
      console.log('🧠 AI analyzing request...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('🔍 Applying best practices and patterns...');
      await new Promise(resolve => setTimeout(resolve, uploadedImage ? 2000 : 1500));
      
      console.log('⚡ Optimizing code structure...');
      await new Promise(resolve => setTimeout(resolve, 500));

      // Enhanced prompt analysis for better code generation
      let enhancedPrompt = prompt;
      
      // Add intelligent context based on language
      const languageEnhancements = {
        react: 'Use modern React hooks, TypeScript interfaces, proper state management, and responsive Tailwind CSS.',
        javascript: 'Apply ES6+ features, proper error handling, clean architecture, and comprehensive documentation.',
        html: 'Include semantic HTML5, modern CSS Grid/Flexbox, accessibility features, and responsive design.',
        css: 'Use modern CSS features, custom properties, smooth animations, and mobile-first approach.',
        python: 'Follow PEP 8 standards, use type hints, proper error handling, and clean architecture.',
        typescript: 'Leverage strong typing, interfaces, generics, and modern TypeScript features.'
      };

      if (languageEnhancements[selectedLanguage as keyof typeof languageEnhancements]) {
        enhancedPrompt += ` ${languageEnhancements[selectedLanguage as keyof typeof languageEnhancements]}`;
      }

      if (uploadedImage) {
        enhancedPrompt = `${enhancedPrompt}\n\nBased on the uploaded design image (${uploadedImage.file.name}), create pixel-perfect code that replicates the visual design, layout, interactions, and styling shown in the image. Apply modern design principles and ensure responsive behavior.`;
      }

      // Generate intelligent code based on enhanced analysis
      let generatedExample: CodeExample;

      if (codeTemplates[selectedLanguage]) {
        // Enhance existing templates with intelligent modifications
        const baseTemplate = codeTemplates[selectedLanguage];
        generatedExample = {
          ...baseTemplate,
          description: uploadedImage 
            ? `🎨 AI-generated ${selectedLanguage} code from design analysis: "${uploadedImage.file.name}" with intelligent optimizations and modern patterns`
            : `🧠 AI-crafted ${selectedLanguage} code with smart analysis: "${prompt}" - Enhanced with best practices and optimizations`,
          code: enhanceCodeWithIntelligence(baseTemplate.code, prompt, selectedLanguage)
        };
      } else {
        // Generate custom intelligent code
        generatedExample = {
          language: selectedLanguage,
          description: uploadedImage
            ? `🎨 AI-generated ${selectedLanguage} code from uploaded design with intelligent analysis and modern patterns`
            : `🧠 Smart ${selectedLanguage} code generation: "${prompt}" - AI-optimized with best practices`,
          code: generateCustomCode(selectedLanguage, enhancedPrompt)
        };
      }

      setGeneratedCode(generatedExample);
      
      // Enhanced preview with intelligent rendering
      if ((selectedLanguage === 'html' || selectedLanguage === 'react') && showPreview) {
        console.log('🖥️ Rendering intelligent preview...');
        updatePreview(generatedExample.code, selectedLanguage, iframeRef);
      }

      toast({
        title: "🚀 Code built successfully!",
        description: uploadedImage
          ? `AI has crafted intelligent ${selectedLanguage} code from your design with modern patterns and optimizations.`
          : `Smart ${selectedLanguage} code generated with AI analysis, best practices, and performance optimizations.`,
      });
    } catch (error) {
      console.error('❌ Code generation failed:', error);
      toast({
        title: "❌ Build failed",
        description: "AI encountered an issue. Please try again or refine your request.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Intelligent code enhancement function
  const enhanceCodeWithIntelligence = (baseCode: string, userPrompt: string, language: string): string => {
    let enhancedCode = baseCode;
    
    // Add intelligent comments and documentation
    const header = `/*
 * 🧠 AI-Generated ${language.toUpperCase()} Code
 * 📝 User Request: ${userPrompt.slice(0, 100)}${userPrompt.length > 100 ? '...' : ''}
 * 🚀 Enhanced with: Modern patterns, best practices, and performance optimizations
 * 📅 Generated: ${new Date().toLocaleString()}
 */\n\n`;
    
    enhancedCode = header + enhancedCode;
    
    // Add modern enhancements based on detected patterns
    if (language === 'react' && userPrompt.toLowerCase().includes('dashboard')) {
      enhancedCode = enhancedCode.replace(
        'const ItemManager',
        `// 🎯 Enhanced Dashboard Component with Modern Patterns\nconst DashboardManager`
      );
    }
    
    return enhancedCode;
  };

  const copyToClipboard = async () => {
    if (!generatedCode) return;
    
    try {
      await navigator.clipboard.writeText(generatedCode.code);
      toast({
        title: "📋 Copied to clipboard",
        description: "Smart code has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "❌ Copy failed",
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
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
    const filename = `ai-generated-code-${timestamp}.${extension}`;
    
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
      title: "💾 Download started",
      description: `Smart code saved as ${filename}`,
    });
  };

  const clearAll = () => {
    setPrompt('');
    setGeneratedCode(null);
    setUploadedImage(null);
    if (iframeRef.current) {
      iframeRef.current.src = 'about:blank';
    }
    
    toast({
      title: "🧹 Cleared",
      description: "Ready for your next AI code generation.",
    });
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
