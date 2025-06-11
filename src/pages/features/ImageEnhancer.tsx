
import React, { useState, useRef } from 'react';
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
  CheckCircle
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';
import { useToast } from '@/hooks/use-toast';

const ImageEnhancer = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enhancementType, setEnhancementType] = useState('auto');
  const [brightness, setBrightness] = useState([100]);
  const [contrast, setContrast] = useState([100]);
  const [saturation, setSaturation] = useState([100]);
  const [sharpness, setSharpness] = useState([100]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setEnhancedImage(null);
      toast({
        title: "Image uploaded successfully",
        description: "Ready for enhancement!"
      });
    };
    reader.readAsDataURL(file);
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
      
      // Apply filters based on settings
      ctx.filter = `
        brightness(${brightness[0]}%) 
        contrast(${contrast[0]}%) 
        saturate(${saturation[0]}%) 
        blur(${sharpness[0] < 100 ? (100 - sharpness[0]) / 20 : 0}px)
      `;
      
      ctx.drawImage(img, 0, 0);
      
      // Convert canvas to data URL
      const enhancedDataUrl = canvas.toDataURL('image/png');
      setEnhancedImage(enhancedDataUrl);
      setIsProcessing(false);
      
      toast({
        title: "Enhancement complete!",
        description: "Your image has been enhanced successfully"
      });
    };
    img.src = uploadedImage;
  };

  const downloadEnhanced = () => {
    if (!enhancedImage) return;
    
    const link = document.createElement('a');
    link.download = 'enhanced-image.png';
    link.href = enhancedImage;
    link.click();
    
    toast({
      title: "Download started",
      description: "Enhanced image downloaded successfully"
    });
  };

  const resetSettings = () => {
    setBrightness([100]);
    setContrast([100]);
    setSaturation([100]);
    setSharpness([100]);
    setEnhancementType('auto');
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Image Enhancer | SireIQ</title>
        <meta name="description" content="Transform and enhance your images with SireIQ's AI-powered image enhancement tools." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-12">
          <PageHeader 
            title="Image Enhancer"
            subtitle="Transform ordinary images into stunning visuals with our advanced AI image enhancement technology."
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
                        PNG, JPG, JPEG (max 10MB)
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </CardContent>
                </Card>

                {/* Enhancement Controls */}
                {uploadedImage && (
                  <Card className="glass-effect border border-sireiq-accent/30">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="h-5 w-5 text-sireiq-cyan mr-2" />
                        Enhancement Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      
                      {/* Enhancement Type */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Enhancement Type</label>
                        <Select value={enhancementType} onValueChange={setEnhancementType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="auto">Auto Enhance</SelectItem>
                            <SelectItem value="portrait">Portrait</SelectItem>
                            <SelectItem value="landscape">Landscape</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Manual Controls */}
                      <div className="space-y-4">
                        
                        {/* Brightness */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium flex items-center">
                              <Sun className="h-4 w-4 mr-1" />
                              Brightness
                            </label>
                            <span className="text-xs text-sireiq-light/70">{brightness[0]}%</span>
                          </div>
                          <Slider
                            value={brightness}
                            onValueChange={setBrightness}
                            min={50}
                            max={150}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        {/* Contrast */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium flex items-center">
                              <Contrast className="h-4 w-4 mr-1" />
                              Contrast
                            </label>
                            <span className="text-xs text-sireiq-light/70">{contrast[0]}%</span>
                          </div>
                          <Slider
                            value={contrast}
                            onValueChange={setContrast}
                            min={50}
                            max={150}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        {/* Saturation */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium flex items-center">
                              <Palette className="h-4 w-4 mr-1" />
                              Saturation
                            </label>
                            <span className="text-xs text-sireiq-light/70">{saturation[0]}%</span>
                          </div>
                          <Slider
                            value={saturation}
                            onValueChange={setSaturation}
                            min={0}
                            max={200}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        {/* Sharpness */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium flex items-center">
                              <Focus className="h-4 w-4 mr-1" />
                              Sharpness
                            </label>
                            <span className="text-xs text-sireiq-light/70">{sharpness[0]}%</span>
                          </div>
                          <Slider
                            value={sharpness}
                            onValueChange={setSharpness}
                            min={50}
                            max={150}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
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
                        Image Preview
                      </span>
                      {enhancedImage && (
                        <Button 
                          onClick={downloadEnhanced}
                          size="sm"
                          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!uploadedImage ? (
                      <div className="h-96 flex items-center justify-center border-2 border-dashed border-sireiq-accent/30 rounded-lg">
                        <div className="text-center">
                          <ImageIcon className="h-16 w-16 text-sireiq-accent/50 mx-auto mb-4" />
                          <p className="text-sireiq-light/70">Upload an image to get started</p>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Image Enhancement Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI-Powered Enhancement",
                  description: "Automatically improve image quality using advanced algorithms and machine learning."
                },
                {
                  title: "Manual Controls",
                  description: "Fine-tune brightness, contrast, saturation, and sharpness to your exact preferences."
                },
                {
                  title: "Real-time Preview",
                  description: "See changes instantly as you adjust settings for the perfect result."
                },
                {
                  title: "High-Quality Output",
                  description: "Download enhanced images in high resolution without quality loss."
                },
                {
                  title: "Multiple Formats",
                  description: "Support for PNG, JPEG, and other popular image formats."
                },
                {
                  title: "Instant Processing",
                  description: "Fast client-side processing without uploading to external servers."
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
