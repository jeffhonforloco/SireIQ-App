
import React from 'react';
import { CheckCircle } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
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
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Enhancement Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
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
  );
};

export default FeaturesSection;
