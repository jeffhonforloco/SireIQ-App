
import React from 'react';
import { 
  Clock, 
  Copy, 
  Feather, 
  Lightbulb, 
  Code, 
  BarChart2, 
  Image, 
  Sparkles 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface FeatureButtonsProps {
  isExpanded: boolean;
  handleFeatureClick: (featurePrompt: string) => void;
}

const FeatureButtons: React.FC<FeatureButtonsProps> = ({
  isExpanded,
  handleFeatureClick
}) => {
  const isMobile = useIsMobile();
  
  if (!isExpanded) return null;
  
  const features = [
    {
      name: "Strategic Roadmap",
      prompt: "Create a strategic roadmap for ",
      icon: <Clock className="h-4 w-4" />
    },
    {
      name: "Content Distiller",
      prompt: "Distill this content: ",
      icon: <Copy className="h-4 w-4" />
    },
    {
      name: "Neural Composer",
      prompt: "Write creative content about ",
      icon: <Feather className="h-4 w-4" />
    },
    {
      name: "Idea Accelerator",
      prompt: "Generate innovative ideas for ",
      icon: <Lightbulb className="h-4 w-4" />
    },
    {
      name: "Data Architect",
      prompt: "Analyze this dataset: ",
      icon: <BarChart2 className="h-4 w-4" />
    },
    {
      name: "CodeCraft Pro",
      prompt: "Generate code for ",
      icon: <Code className="h-4 w-4" />
    },
    {
      name: "Vision Insights",
      prompt: "Analyze this image: ",
      icon: <Image className="h-4 w-4" />
    },
    {
      name: "Neural Spark",
      prompt: "Surprise me with creative insights about ",
      icon: <Sparkles className="h-4 w-4" />
    }
  ];

  return (
    <div className={`feature-buttons-container ${isMobile ? 'mobile-features fixed bottom-16 left-0 right-0 bg-gray-900/95 border-t border-gray-800 p-4 z-30' : 'mt-3 mb-2'}`}>
      <div className={`${isMobile ? 'grid grid-cols-4 gap-3' : 'grid'}`}>
        {features.map((feature) => (
          <button 
            key={feature.name}
            className={`feature-button flex ${isMobile ? 'flex-col justify-center items-center h-20 space-y-2' : 'items-center space-x-2'} 
              bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 rounded-lg px-3 py-2 text-sm transition-colors`}
            onClick={() => handleFeatureClick(feature.prompt)}
          >
            <span className="text-blue-400">{feature.icon}</span>
            <span className={`${isMobile ? 'text-xs text-center' : 'whitespace-nowrap'}`}>
              {isMobile ? feature.name.split(' ')[0] : feature.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeatureButtons;
