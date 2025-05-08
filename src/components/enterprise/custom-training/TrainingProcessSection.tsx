
import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";
import { Database, BookOpen, FileText, Upload, CheckCircle } from 'lucide-react';

interface TrainingProcessSectionProps {
  onRequestDemo: () => void;
}

const TrainingProcessSection: React.FC<TrainingProcessSectionProps> = ({ onRequestDemo }) => {
  const trainingSteps = [
    { 
      title: "Data Collection",
      description: "Gather your brand assets, style guides, and content samples",
      icon: FileText,
      status: "completed"
    },
    { 
      title: "Data Preprocessing",
      description: "Our AI processes your content to identify key patterns and styles",
      icon: Database,
      status: "completed"
    },
    { 
      title: "Model Training",
      description: "Custom fine-tuning of SireIQ models on your unique content",
      icon: BookOpen,
      status: "in-progress",
      progress: 65
    },
    { 
      title: "Validation & Testing",
      description: "Rigorous testing to ensure brand alignment and quality",
      icon: CheckCircle,
      status: "pending"
    }
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-gradient">Custom AI</span> Training Process
          </h2>
          <p className="text-lg text-sireiq-light/70 mb-8">
            Our proprietary training pipeline adapts SireIQ to your brand's unique style, tone, 
            and requirements through a structured process that ensures quality and alignment.
          </p>
          
          <div className="space-y-6">
            {trainingSteps.map((step, index) => (
              <div key={index} className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${step.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                    step.status === 'in-progress' ? 'bg-sireiq-cyan/20 text-sireiq-cyan' : 
                    'bg-sireiq-accent/20 text-sireiq-light/70'}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold">{step.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full capitalize 
                        ${step.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                          step.status === 'in-progress' ? 'bg-sireiq-cyan/20 text-sireiq-cyan' : 
                          'bg-sireiq-accent/20 text-sireiq-light/70'}">
                        {step.status === 'in-progress' ? 'In Progress' : step.status}
                      </span>
                    </div>
                    <p className="text-sm text-sireiq-light/70 mb-2">{step.description}</p>
                    {step.status === 'in-progress' && step.progress && (
                      <div className="w-full">
                        <Progress value={step.progress} className="h-1.5" />
                        <p className="text-xs text-right mt-1 text-sireiq-light/50">{step.progress}% Complete</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            className="mt-8 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
            onClick={onRequestDemo}
          >
            Request Training Demo
          </Button>
        </div>
        
        <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
          <h3 className="text-xl font-bold mb-6">Upload Training Data</h3>
          <div className="bg-sireiq-accent/10 border-2 border-dashed border-sireiq-accent/30 rounded-lg p-8 text-center mb-6">
            <Upload className="h-12 w-12 mx-auto mb-4 text-sireiq-light/50" />
            <p className="mb-2">Drag & drop files here or</p>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              Browse Files
            </Button>
            <p className="text-xs mt-4 text-sireiq-light/50">
              Supported formats: PDF, DOCX, JPG, PNG, MP3, MP4
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-sm mb-2">Recommended Training Materials</h4>
            <div className="space-y-2">
              {[
                "Brand Style Guide",
                "Company Voice Documentation",
                "Sample Content (blog posts, articles, etc.)",
                "Visual Assets & Design System",
                "Product Documentation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1 h-1 rounded-full bg-sireiq-cyan"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProcessSection;
