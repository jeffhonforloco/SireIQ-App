
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon, ArrowRight, CheckCircle } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';

const ImageEnhancer = () => {
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
        <section className="container mx-auto px-4 mb-20">
          <PageHeader 
            title="Image Enhancer"
            subtitle="Transform ordinary images into stunning visuals with our advanced AI image enhancement technology."
            icon={<ImageIcon className="h-8 w-8 text-sireiq-cyan" />}
          />
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-2xl p-8 border border-sireiq-accent/30 max-w-4xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-sireiq-darker rounded-lg overflow-hidden">
                    <div className="p-2 bg-sireiq-darker/80 border-b border-sireiq-accent/20 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-3 text-xs">Original Image</span>
                    </div>
                    <div className="relative aspect-square bg-gradient-to-br from-sireiq-darker to-sireiq-dark flex items-center justify-center p-4">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-sireiq-darker rounded-lg overflow-hidden">
                    <div className="p-2 bg-sireiq-darker/80 border-b border-sireiq-accent/20 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-3 text-xs">Enhanced Image</span>
                    </div>
                    <div className="relative aspect-square bg-gradient-to-br from-sireiq-darker to-sireiq-dark flex items-center justify-center p-4">
                      <div className="w-full h-full bg-gradient-to-br from-sireiq-cyan/30 to-sireiq-accent/30 rounded-lg glow"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Enhance Your Images <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                  title: "AI-Powered Upscaling",
                  description: "Increase image resolution without losing quality using advanced neural networks."
                },
                {
                  title: "Noise Reduction",
                  description: "Remove digital noise and grain from photos taken in low-light conditions."
                },
                {
                  title: "Color Correction",
                  description: "Automatically adjust white balance, exposure, and color saturation for perfect images."
                },
                {
                  title: "Detail Enhancement",
                  description: "Sharpen details and textures without creating artifacts or halos."
                },
                {
                  title: "Background Removal",
                  description: "Precisely separate subjects from backgrounds for professional-looking results."
                },
                {
                  title: "Style Transfer",
                  description: "Apply artistic styles from famous paintings or custom presets to your photos."
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
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default ImageEnhancer;
