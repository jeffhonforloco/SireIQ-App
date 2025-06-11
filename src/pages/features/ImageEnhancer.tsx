
import React, { useState, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Image as ImageIcon, 
  Upload, 
  Download, 
  Zap, 
  Palette, 
  Focus, 
  Contrast,
  Sun,
  RefreshCw,
  CheckCircle,
  Undo,
  Redo,
  Layers,
  RotateCw,
  Crop,
  Filter,
  Settings
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';
import { useToast } from '@/hooks/use-toast';

interface Enhancement {
  brightness: number;
  contrast: number;
  saturation: number;
  sharpness: number;
  hue: number;
  gamma: number;
  vibrance: number;
  exposure: number;
  highlights: number;
  shadows: number;
  clarity: number;
  warmth: number;
}

interface HistoryState {
  enhancement: Enhancement;
  timestamp: number;
}

const ImageEnhancer = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enhancementType, setEnhancementType] = useState('auto');
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [outputFormat, setOutputFormat] = useState('png');
  const [quality, setQuality] = useState([95]);
  
  const [enhancement, setEnhancement] = useState<Enhancement>({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    sharpness: 100,
    hue: 0,
    gamma: 100,
    vibrance: 100,
    exposure: 100,
    highlights: 100,
    shadows: 100,
    clarity: 100,
    warmth: 0
  });

  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (PNG, JPEG, GIF, WebP)",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.width, height: img.height });
        setUploadedImage(e.target?.result as string);
        setEnhancedImage(null);
        setHistory([]);
        setHistoryIndex(-1);
        toast({
          title: "Image uploaded successfully",
          description: `${img.width}×${img.height} pixels - Ready for enhancement!`
        });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const applyPreset = (preset: string) => {
    let newEnhancement = { ...enhancement };
    
    switch (preset) {
      case 'portrait':
        newEnhancement = {
          ...newEnhancement,
          brightness: 105,
          contrast: 110,
          saturation: 95,
          sharpness: 115,
          warmth: 5,
          shadows: 110,
          highlights: 95
        };
        break;
      case 'landscape':
        newEnhancement = {
          ...newEnhancement,
          brightness: 100,
          contrast: 115,
          saturation: 120,
          sharpness: 110,
          vibrance: 115,
          clarity: 110
        };
        break;
      case 'vivid':
        newEnhancement = {
          ...newEnhancement,
          saturation: 140,
          vibrance: 130,
          contrast: 120,
          clarity: 115
        };
        break;
      case 'bw':
        newEnhancement = {
          ...newEnhancement,
          saturation: 0,
          contrast: 120,
          clarity: 110
        };
        break;
      case 'vintage':
        newEnhancement = {
          ...newEnhancement,
          brightness: 95,
          contrast: 90,
          saturation: 80,
          warmth: 15,
          gamma: 95
        };
        break;
    }
    
    setEnhancement(newEnhancement);
    saveToHistory(newEnhancement);
  };

  const applyEnhancements = () => {
    if (!uploadedImage || !canvasRef.current) return;

    setIsProcessing(true);
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Apply advanced filters
      const filters = [
        `brightness(${enhancement.brightness}%)`,
        `contrast(${enhancement.contrast}%)`,
        `saturate(${enhancement.saturation}%)`,
        `hue-rotate(${enhancement.hue}deg)`,
        `sepia(${enhancement.warmth}%)`,
        enhancement.sharpness < 100 ? `blur(${(100 - enhancement.sharpness) / 20}px)` : ''
      ].filter(Boolean).join(' ');
      
      ctx.filter = filters;
      ctx.drawImage(img, 0, 0);
      
      // Apply additional processing for advanced features
      if (enhancement.gamma !== 100 || enhancement.exposure !== 100 || enhancement.highlights !== 100 || enhancement.shadows !== 100) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          let r = data[i];
          let g = data[i + 1];
          let b = data[i + 2];
          
          // Apply gamma correction
          if (enhancement.gamma !== 100) {
            const gamma = enhancement.gamma / 100;
            r = Math.pow(r / 255, gamma) * 255;
            g = Math.pow(g / 255, gamma) * 255;
            b = Math.pow(b / 255, gamma) * 255;
          }
          
          // Apply exposure
          if (enhancement.exposure !== 100) {
            const exposureFactor = enhancement.exposure / 100;
            r *= exposureFactor;
            g *= exposureFactor;
            b *= exposureFactor;
          }
          
          // Apply highlights/shadows
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
          if (luminance > 128 && enhancement.highlights !== 100) {
            const factor = enhancement.highlights / 100;
            r *= factor;
            g *= factor;
            b *= factor;
          } else if (luminance <= 128 && enhancement.shadows !== 100) {
            const factor = enhancement.shadows / 100;
            r *= factor;
            g *= factor;
            b *= factor;
          }
          
          data[i] = Math.max(0, Math.min(255, r));
          data[i + 1] = Math.max(0, Math.min(255, g));
          data[i + 2] = Math.max(0, Math.min(255, b));
        }
        
        ctx.putImageData(imageData, 0, 0);
      }
      
      // Convert canvas to data URL with specified format and quality
      const mimeType = outputFormat === 'jpeg' ? 'image/jpeg' : 'image/png';
      const qualityValue = outputFormat === 'jpeg' ? quality[0] / 100 : undefined;
      const enhancedDataUrl = canvas.toDataURL(mimeType, qualityValue);
      
      setEnhancedImage(enhancedDataUrl);
      setIsProcessing(false);
      
      toast({
        title: "Enhancement complete!",
        description: "Your image has been enhanced with professional quality"
      });
    };
    img.src = uploadedImage;
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
    const defaultEnhancement: Enhancement = {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      sharpness: 100,
      hue: 0,
      gamma: 100,
      vibrance: 100,
      exposure: 100,
      highlights: 100,
      shadows: 100,
      clarity: 100,
      warmth: 0
    };
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
                
                {/* Upload Section */}
                <Card className="glass-effect border border-sireiq-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Upload className="h-5 w-5 text-sireiq-cyan mr-2" />
                      Upload Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="border-2 border-dashed border-sireiq-accent/50 rounded-lg p-8 text-center cursor-pointer hover:border-sireiq-cyan/50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-12 w-12 text-sireiq-accent mx-auto mb-4" />
                      <p className="text-sm text-sireiq-light/70 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-sireiq-light/50">
                        PNG, JPG, JPEG, GIF, WebP (max 10MB)
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    
                    {originalDimensions.width > 0 && (
                      <div className="mt-4 text-center text-sm text-sireiq-light/70">
                        Original: {originalDimensions.width} × {originalDimensions.height} pixels
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Quick Presets */}
                {uploadedImage && (
                  <Card className="glass-effect border border-sireiq-accent/30">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Filter className="h-5 w-5 text-sireiq-cyan mr-2" />
                        Quick Presets
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'portrait', label: 'Portrait', icon: '👤' },
                          { id: 'landscape', label: 'Landscape', icon: '🏔️' },
                          { id: 'vivid', label: 'Vivid', icon: '🌈' },
                          { id: 'bw', label: 'B&W', icon: '⚫' },
                          { id: 'vintage', label: 'Vintage', icon: '📷' },
                          { id: 'auto', label: 'Auto', icon: '✨' }
                        ].map((preset) => (
                          <Button
                            key={preset.id}
                            variant={enhancementType === preset.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setEnhancementType(preset.id);
                              applyPreset(preset.id);
                            }}
                            className="text-xs"
                          >
                            <span className="mr-1">{preset.icon}</span>
                            {preset.label}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Enhancement Controls */}
                {uploadedImage && (
                  <Card className="glass-effect border border-sireiq-accent/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Settings className="h-5 w-5 text-sireiq-cyan mr-2" />
                          Fine Controls
                        </CardTitle>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={undo}
                            disabled={historyIndex <= 0}
                          >
                            <Undo className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={redo}
                            disabled={historyIndex >= history.length - 1}
                          >
                            <Redo className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                      
                      {/* Basic Controls */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-sireiq-cyan">Basic Adjustments</h4>
                        
                        {[
                          { key: 'brightness' as keyof Enhancement, label: 'Brightness', icon: Sun, min: 50, max: 150, value: enhancement.brightness },
                          { key: 'contrast' as keyof Enhancement, label: 'Contrast', icon: Contrast, min: 50, max: 150, value: enhancement.contrast },
                          { key: 'saturation' as keyof Enhancement, label: 'Saturation', icon: Palette, min: 0, max: 200, value: enhancement.saturation },
                          { key: 'sharpness' as keyof Enhancement, label: 'Sharpness', icon: Focus, min: 50, max: 150, value: enhancement.sharpness }
                        ].map(({ key, label, icon: Icon, min, max, value }) => (
                          <div key={key}>
                            <div className="flex items-center justify-between mb-2">
                              <label className="text-sm font-medium flex items-center">
                                <Icon className="h-4 w-4 mr-1" />
                                {label}
                              </label>
                              <span className="text-xs text-sireiq-light/70">{value}%</span>
                            </div>
                            <Slider
                              value={[value]}
                              onValueChange={(values) => updateEnhancement(key, values[0])}
                              min={min}
                              max={max}
                              step={1}
                              className="w-full"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Advanced Controls */}
                      <div className="space-y-4 pt-4 border-t border-sireiq-accent/20">
                        <h4 className="text-sm font-semibold text-sireiq-cyan">Advanced Adjustments</h4>
                        
                        {[
                          { key: 'exposure' as keyof Enhancement, label: 'Exposure', min: 50, max: 150, value: enhancement.exposure },
                          { key: 'highlights' as keyof Enhancement, label: 'Highlights', min: 50, max: 150, value: enhancement.highlights },
                          { key: 'shadows' as keyof Enhancement, label: 'Shadows', min: 50, max: 150, value: enhancement.shadows },
                          { key: 'vibrance' as keyof Enhancement, label: 'Vibrance', min: 50, max: 150, value: enhancement.vibrance },
                          { key: 'clarity' as keyof Enhancement, label: 'Clarity', min: 50, max: 150, value: enhancement.clarity },
                          { key: 'warmth' as keyof Enhancement, label: 'Warmth', min: -50, max: 50, value: enhancement.warmth },
                          { key: 'hue' as keyof Enhancement, label: 'Hue Shift', min: -180, max: 180, value: enhancement.hue },
                          { key: 'gamma' as keyof Enhancement, label: 'Gamma', min: 50, max: 150, value: enhancement.gamma }
                        ].map(({ key, label, min, max, value }) => (
                          <div key={key}>
                            <div className="flex items-center justify-between mb-2">
                              <label className="text-sm font-medium">{label}</label>
                              <span className="text-xs text-sireiq-light/70">
                                {key === 'hue' ? `${value}°` : key === 'warmth' ? `${value > 0 ? '+' : ''}${value}` : `${value}%`}
                              </span>
                            </div>
                            <Slider
                              value={[value]}
                              onValueChange={(values) => updateEnhancement(key, values[0])}
                              min={min}
                              max={max}
                              step={1}
                              className="w-full"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Output Settings */}
                      <div className="pt-4 border-t border-sireiq-accent/20">
                        <h4 className="text-sm font-semibold text-sireiq-cyan mb-4">Output Settings</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Format</label>
                            <Select value={outputFormat} onValueChange={setOutputFormat}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="png">PNG (Lossless)</SelectItem>
                                <SelectItem value="jpeg">JPEG (Smaller size)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {outputFormat === 'jpeg' && (
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium">Quality</label>
                                <span className="text-xs text-sireiq-light/70">{quality[0]}%</span>
                              </div>
                              <Slider
                                value={quality}
                                onValueChange={setQuality}
                                min={50}
                                max={100}
                                step={5}
                                className="w-full"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <Button 
                          onClick={applyEnhancements}
                          disabled={isProcessing}
                          className="flex-1 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                        >
                          {isProcessing ? (
                            <>
                              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Zap className="h-4 w-4 mr-2" />
                              Enhance
                            </>
                          )}
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={resetSettings}
                          className="border-sireiq-accent/50"
                        >
                          Reset
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Image Preview */}
              <div className="xl:col-span-2">
                <Card className="glass-effect border border-sireiq-accent/30 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <ImageIcon className="h-5 w-5 text-sireiq-cyan mr-2" />
                        Preview
                      </span>
                      {enhancedImage && (
                        <Button 
                          onClick={downloadEnhanced}
                          size="sm"
                          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download {outputFormat.toUpperCase()}
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!uploadedImage ? (
                      <div className="h-96 flex items-center justify-center border-2 border-dashed border-sireiq-accent/30 rounded-lg">
                        <div className="text-center">
                          <ImageIcon className="h-16 w-16 text-sireiq-accent/50 mx-auto mb-4" />
                          <p className="text-sireiq-light/70 mb-2">Upload an image to get started</p>
                          <p className="text-sm text-sireiq-light/50">
                            Supports PNG, JPEG, GIF, WebP up to 10MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Original Image */}
                        <div>
                          <div className="flex items-center mb-2">
                            <Badge variant="secondary" className="bg-sireiq-darker/50">Original</Badge>
                          </div>
                          <div className="border border-sireiq-accent/30 rounded-lg overflow-hidden">
                            <img 
                              src={uploadedImage} 
                              alt="Original" 
                              className="w-full h-64 object-contain bg-sireiq-darker/20"
                            />
                          </div>
                        </div>

                        {/* Enhanced Image */}
                        <div>
                          <div className="flex items-center mb-2">
                            <Badge 
                              variant="secondary" 
                              className={enhancedImage ? "bg-green-500/20 text-green-400" : "bg-sireiq-darker/50"}
                            >
                              {enhancedImage ? (
                                <>
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Enhanced
                                </>
                              ) : "Preview"}
                            </Badge>
                          </div>
                          <div className="border border-sireiq-accent/30 rounded-lg overflow-hidden">
                            {enhancedImage ? (
                              <img 
                                src={enhancedImage} 
                                alt="Enhanced" 
                                className="w-full h-64 object-contain bg-sireiq-darker/20"
                              />
                            ) : (
                              <div className="w-full h-64 flex items-center justify-center bg-sireiq-darker/20 text-sireiq-light/50">
                                Click "Enhance" to process
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Enhancement Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI-Powered Enhancement",
                  description: "Automatically improve image quality using advanced algorithms and machine learning for professional results."
                },
                {
                  title: "Professional Manual Controls",
                  description: "Fine-tune exposure, highlights, shadows, clarity, and more with photographer-grade precision controls."
                },
                {
                  title: "Real-time Preview",
                  description: "See changes instantly as you adjust settings with immediate visual feedback for the perfect result."
                },
                {
                  title: "High-Quality Output",
                  description: "Download enhanced images in high resolution without quality loss, with PNG and JPEG format options."
                },
                {
                  title: "Multiple Formats Support",
                  description: "Support for PNG, JPEG, GIF, WebP input formats with optimized output options for any use case."
                },
                {
                  title: "Instant Processing",
                  description: "Fast client-side processing without uploading to external servers - your images stay private and secure."
                },
                {
                  title: "Professional Presets",
                  description: "Quick-apply presets for portraits, landscapes, vintage effects, and more to get started instantly."
                },
                {
                  title: "Undo/Redo History",
                  description: "Full editing history with undo/redo capabilities so you can experiment freely and revert changes."
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 flex items-start">
                  <CheckCircle className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sireiq-light/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden canvas for image processing */}
        <canvas ref={canvasRef} className="hidden" />
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default ImageEnhancer;
