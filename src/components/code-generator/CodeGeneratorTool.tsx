
import React from 'react';
import Header from './Header';
import ConfigurationPanel from './ConfigurationPanel';
import OutputPanel from './OutputPanel';
import { useCodeGeneration } from './hooks/useCodeGeneration';

const CodeGeneratorTool = () => {
  const {
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
  } = useCodeGeneration();

  const canShowPreview = selectedLanguage === 'html' || selectedLanguage === 'react';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary">
      <Header 
        canShowPreview={canShowPreview}
        showPreview={showPreview}
        onTogglePreview={togglePreview}
      />

      {/* Mobile-first responsive layout */}
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-8 max-w-7xl">
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8 h-full">
          {/* Configuration Panel - Full width on mobile */}
          <div className="w-full order-1">
            <ConfigurationPanel
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              prompt={prompt}
              setPrompt={setPrompt}
              uploadedImage={uploadedImage}
              onFileUpload={handleFileUpload}
              isGenerating={isGenerating}
              onGenerate={generateCode}
              onClear={clearAll}
            />
          </div>

          {/* Output Panel - Full width on mobile, appears after config */}
          <div className="w-full order-2">
            <OutputPanel
              generatedCode={generatedCode}
              canShowPreview={canShowPreview}
              showPreview={showPreview}
              iframeRef={iframeRef}
              onCopy={copyToClipboard}
              onDownload={downloadCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGeneratorTool;
