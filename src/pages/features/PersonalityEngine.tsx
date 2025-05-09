
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { PersonalityEngineProvider, usePersonalityEngine } from '@/contexts/PersonalityEngineContext';

// Import components
import ParameterSlider from '@/components/personality/ParameterSlider';
import StyleCard from '@/components/personality/StyleCard';
import TextPreview from '@/components/personality/TextPreview';
import CustomizeButton from '@/components/personality/CustomizeButton';
import AdvancedSettingsDialog from '@/components/personality/AdvancedSettingsDialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Sparkles, 
  MessageSquare, 
  Settings,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';

// Create a separate component for the content to use the context hook
const PersonalityEngineContent = () => {
  const navigate = useNavigate();
  const { 
    styles, 
    parameters, 
    updateSelectedStyle, 
    updateParameter,
    selectedStyle 
  } = usePersonalityEngine();
  
  const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sireiq-darker text-sireiq-light">
      <Helmet>
        <title>Personality Engine | SireIQ</title>
        <meta name="description" content="Customize SireIQ's personality and communication style to match your preferences" />
      </Helmet>

      {/* Advanced Settings Dialog */}
      <AdvancedSettingsDialog 
        open={advancedSettingsOpen} 
        onOpenChange={setAdvancedSettingsOpen} 
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sireiq-cyan mb-4">
              <Brain className="h-6 w-6" />
              <h1 className="text-3xl font-bold">Personality Engine</h1>
            </div>
            <p className="text-xl text-sireiq-light/80 mb-6">
              Customize how SireIQ communicates with you to match your preferences and working style.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <CustomizeButton 
                className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90" 
              />
              <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                <MessageSquare className="mr-2 h-4 w-4" />
                Try in Chat
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="p-6 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-sireiq-cyan" />
                  <h3 className="text-lg font-medium">Current Style</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sireiq-cyan"
                  onClick={() => navigate('/features/customize-personality')}
                >
                  Change
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-sireiq-light/70">Communication Style</p>
                  <p className="font-medium">{selectedStyle?.name || "Professional & Technical"}</p>
                </div>
                <div>
                  <p className="text-sm text-sireiq-light/70">Response Format</p>
                  <p className="font-medium">Detailed with code examples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-sireiq-accent/20" />

      {/* Parameter Control Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Fine-tune SireIQ's Personality</h2>
            <div className="space-y-12">
              {/* Style Selection */}
              <div>
                <h3 className="text-xl font-medium mb-6">Select Communication Style</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {styles.map((style) => (
                    <StyleCard 
                      key={style.id}
                      id={style.id}
                      name={style.name}
                      description={style.description}
                      isSelected={style.isSelected}
                      onClick={() => updateSelectedStyle(style.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Parameter Sliders */}
              <div>
                <h3 className="text-xl font-medium mb-6">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5 text-sireiq-cyan" />
                    Adjust Parameters
                  </div>
                </h3>
                <div className="space-y-6">
                  {parameters.map((param) => (
                    <ParameterSlider 
                      key={param.name}
                      name={param.name}
                      range={param.range}
                      value={param.value}
                      onChange={(value) => updateParameter(param.name, value)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
                  onClick={() => setAdvancedSettingsOpen(true)}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Advanced Settings
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Preview</h2>
            <TextPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrapper component that provides the context
const PersonalityEngine = () => {
  return (
    <PersonalityEngineProvider>
      <PersonalityEngineContent />
    </PersonalityEngineProvider>
  );
};

export default PersonalityEngine;
