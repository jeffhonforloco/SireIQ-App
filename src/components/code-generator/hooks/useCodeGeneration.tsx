
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useFileUpload } from './useFileUpload';
import { useCodeGenerator } from './useCodeGenerator';
import { useCodeActions } from './useCodeActions';
import { usePreview } from './usePreview';

export const useCodeGeneration = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const { toast } = useToast();

  // Use the smaller, focused hooks
  const { uploadedImage, handleFileUpload, clearUploadedImage } = useFileUpload(selectedLanguage, setPrompt);
  const { generatedCode, isGenerating, generateCode: generateCodeInternal, clearGeneratedCode } = useCodeGenerator();
  const { copyToClipboard: copyToClipboardInternal, downloadCode: downloadCodeInternal } = useCodeActions();
  const { showPreview, iframeRef, togglePreview, updateCodePreview, clearPreview } = usePreview();

  const generateCode = async () => {
    const result = await generateCodeInternal(prompt, selectedLanguage, uploadedImage);
    if (result) {
      updateCodePreview(result, selectedLanguage);
    }
  };

  const copyToClipboard = async () => {
    await copyToClipboardInternal(generatedCode);
  };

  const downloadCode = () => {
    downloadCodeInternal(generatedCode, selectedLanguage);
  };

  const clearAll = () => {
    setPrompt('');
    clearGeneratedCode();
    clearUploadedImage();
    clearPreview();
    
    toast({
      title: "🧹 Cleared",
      description: "Ready for your next AI code generation.",
    });
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
