
import { useState, useRef } from 'react';
import { updatePreview } from '../previewUtils';
import { CodeExample } from '../types';

export const usePreview = () => {
  const [showPreview, setShowPreview] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const updateCodePreview = (generatedCode: CodeExample | null, selectedLanguage: string) => {
    if (generatedCode && (selectedLanguage === 'html' || selectedLanguage === 'react') && showPreview) {
      console.log('🖥️ Rendering intelligent preview...');
      updatePreview(generatedCode.code, selectedLanguage, iframeRef);
    }
  };

  const clearPreview = () => {
    if (iframeRef.current) {
      iframeRef.current.src = 'about:blank';
    }
  };

  return {
    showPreview,
    iframeRef,
    togglePreview,
    updateCodePreview,
    clearPreview
  };
};
