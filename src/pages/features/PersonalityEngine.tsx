
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { PersonalityEngineProvider, usePersonalityEngine } from '@/contexts/PersonalityEngineContext';
import Logo from '@/components/Logo';

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

  const handleTryInChat = () => {
    navigate('/chat');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

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

      {/* Header with Logo - Mobile Optimized */}
      <div className="border-b border-sireiq-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div 
            onClick={handleLogoClick}
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200 w-fit"
          >
            <Logo size="sm" showText={true} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-2 text-sireiq-cyan mb-4">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6" />
              <h1 className="text-2xl sm:text-3xl font-bold">Personality Engine</h1>
            </div>
            <p className="text-lg sm:text-xl text-sireiq-light/80 mb-6">
              Customize how SireIQ communicates with you to match your preferences and working style.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8">
              <CustomizeButton 
                className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90 w-full sm:w-auto" 
              />
              <Button 
                variant="outline" 
                className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full sm:w-auto"
                onClick={handleTryInChat}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Try in Chat
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="p-4 sm:p-6 bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-sireiq-cyan" />
                  <h3 className="text-base sm:text-lg font-medium">Current Style</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sireiq-cyan text-sm"
                  onClick={() => navigate('/features/customize-personality')}
                >
                  Change
                  <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs sm:text-sm text-sireiq-light/70">Communication Style</p>
                  <p className="font-medium text-sm sm:text-base">{selectedStyle?.name || "Professional & Technical"}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-sireiq-light/70">Response Format</p>
                  <p className="font-medium text-sm sm:text-base">Detailed with code examples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-sireiq-accent/20" />

      {/* Parameter Control Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Fine-tune SireIQ's Personality</h2>
            <div className="space-y-8 sm:space-y-12">
              {/* Style Selection */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Select Communication Style</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5 text-sireiq-cyan" />
                    Adjust Parameters
                  </div>
                </h3>
                <div className="space-y-4 sm:space-y-6">
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

              <div className="flex justify-center sm:justify-end">
                <Button 
                  className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90 w-full sm:w-auto"
                  onClick={() => setAdvancedSettingsOpen(true)}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Advanced Settings
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Preview</h2>
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
