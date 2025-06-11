import React, { useState, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Image as ImageIcon } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';
import { useToast } from '@/hooks/use-toast';

// Import refactored components
import ImageUpload from '@/components/image-enhancer/ImageUpload';
import QuickPresets from '@/components/image-enhancer/QuickPresets';
import EnhancementControls from '@/components/image-enhancer/EnhancementControls';
import ImagePreview from '@/components/image-enhancer/ImagePreview';
import FeaturesSection from '@/components/image-enhancer/FeaturesSection';
import { Enhancement, HistoryState, defaultEnhancement } from '@/components/image-enhancer/types';
import { applyPresetEnhancement, processImage } from '@/components/image-enhancer/imageProcessing';

const ImageEnhancer = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enhancementType, setEnhancementType] = useState('auto');
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [outputFormat, setOutputFormat] = useState('png');
  const [quality, setQuality] = useState([95]);
  
  const [enhancement, setEnhancement] = useState<Enhancement>(defaultEnhancement);
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const saveToHistory = useCallback((newEnhancement: Enhancement) => {
    const newState: HistoryState = {
      enhancement: { ...newEnhancement },
      timestamp: Date.now()
    };
    
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newState);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const handleImageUpload = (imageUrl: string, dimensions: { width: number; height: number }) => {
    console.log('handleImageUpload called with:', { imageUrl: imageUrl.substring(0, 50) + '...', dimensions });
    setOriginalDimensions(dimensions);
    setUploadedImage(imageUrl);
    setEnhancedImage(null);
    setHistory([]);
    setHistoryIndex(-1);
    console.log('Image upload state updated');
  };

  const handlePresetSelect = (preset: string) => {
    setEnhancementType(preset);
    const newEnhancement = applyPresetEnhancement(preset, enhancement);
    setEnhancement(newEnhancement);
    saveToHistory(newEnhancement);
  };

  const applyEnhancements = async () => {
    if (!uploadedImage || !canvasRef.current) return;

    setIsProcessing(true);
    
    try {
      const enhancedDataUrl = await processImage(
        canvasRef.current,
        uploadedImage,
        enhancement,
        outputFormat,
        quality[0]
      );
      
      setEnhancedImage(enhancedDataUrl);
      
      toast({
        title: "Enhancement complete!",
        description: "Your image has been enhanced with professional quality"
      });
    } catch (error) {
      toast({
        title: "Enhancement failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadEnhanced = () => {
    if (!enhancedImage) return;
    
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, '');
    link.download = `enhanced-image-${timestamp}.${outputFormat}`;
    link.href = enhancedImage;
    link.click();
    
    toast({
      title: "Download started",
      description: `Enhanced image downloaded in ${outputFormat.toUpperCase()} format`
    });
  };

  const resetSettings = () => {
    setEnhancement(defaultEnhancement);
    setEnhancementType('auto');
    saveToHistory(defaultEnhancement);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setEnhancement(history[newIndex].enhancement);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setEnhancement(history[newIndex].enhancement);
    }
  };

  const updateEnhancement = (key: keyof Enhancement, value: number) => {
    const newEnhancement = { ...enhancement, [key]: value };
    setEnhancement(newEnhancement);
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Professional Image Enhancer | SireIQ</title>
        <meta name="description" content="Transform and enhance your images with SireIQ's AI-powered professional image enhancement tools. Perfect for photographers and content creators." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-12">
          <PageHeader 
            title="Professional Image Enhancer"
            subtitle="Transform ordinary images into stunning visuals with our advanced AI image enhancement technology. Perfect for photographers, content creators, and anyone who wants professional-quality results."
            icon={<ImageIcon className="h-8 w-8 text-sireiq-cyan" />}
          />
        </section>

        {/* Main Enhancement Tool */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Upload and Controls */}
              <div className="xl:col-span-1 space-y-6">
                <ImageUpload 
                  onImageUpload={handleImageUpload}
                  originalDimensions={originalDimensions}
                />

                {uploadedImage && (
                  <>
                    <QuickPresets 
                      enhancementType={enhancementType}
                      onPresetSelect={handlePresetSelect}
                    />

                    <EnhancementControls
                      enhancement={enhancement}
                      isProcessing={isProcessing}
                      historyIndex={historyIndex}
                      historyLength={history.length}
                      outputFormat={outputFormat}
                      quality={quality}
                      onEnhancementChange={updateEnhancement}
                      onUndo={undo}
                      onRedo={redo}
                      onApplyEnhancements={applyEnhancements}
                      onReset={resetSettings}
                      onOutputFormatChange={setOutputFormat}
                      onQualityChange={setQuality}
                    />
                  </>
                )}
              </div>

              {/* Image Preview */}
              <div className="xl:col-span-2">
                <ImagePreview
                  uploadedImage={uploadedImage}
                  enhancedImage={enhancedImage}
                  outputFormat={outputFormat}
                  onDownload={downloadEnhanced}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <FeaturesSection />

        {/* Hidden canvas for image processing */}
        <canvas ref={canvasRef} className="hidden" />
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default ImageEnhancer;
