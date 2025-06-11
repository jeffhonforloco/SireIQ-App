
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

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-full">
          {/* Left Panel - Input */}
          <div className="space-y-6">
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

          {/* Right Panel - Output */}
          <div className="space-y-6">
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
