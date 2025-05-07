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
import { useNavigate } from 'react-router-dom';

interface FeatureButtonsProps {
  isExpanded: boolean;
  handleFeatureClick: (featurePrompt: string) => void;
}

const FeatureButtons: React.FC<FeatureButtonsProps> = ({
  isExpanded,
  handleFeatureClick
}) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // On mobile, we still want to render the component structure even if not expanded,
  // but with a visibility class to control its display
  if (!isExpanded) {
    return null;
  }
  
  const features = [
    {
      name: "Strategic Roadmap",
      prompt: "Create a strategic roadmap for ",
      icon: <Clock className="h-4 w-4" />,
      path: "/features/workflow-optimization"
    },
    {
      name: "Content Distiller",
      prompt: "Distill this content: ",
      icon: <Copy className="h-4 w-4" />,
      path: "/features/content-creation"
    },
    {
      name: "Neural Composer",
      prompt: "Write creative content about ",
      icon: <Feather className="h-4 w-4" />,
      path: "/features/content-creation"
    },
    {
      name: "Idea Accelerator",
      prompt: "Generate innovative ideas for ",
      icon: <Lightbulb className="h-4 w-4" />,
      path: "/features/idea-generation"
    },
    {
      name: "Data Architect",
      prompt: "Analyze this dataset: ",
      icon: <BarChart2 className="h-4 w-4" />,
      path: "/features/data-analysis"
    },
    {
      name: "CodeCraft Pro",
      prompt: "Generate code for ",
      icon: <Code className="h-4 w-4" />,
      path: "/features/code-assistance"
    },
    {
      name: "Vision Insights",
      prompt: "Analyze this image: ",
      icon: <Image className="h-4 w-4" />,
      path: "/features/ai-powered-creation"
    },
    {
      name: "Neural Spark",
      prompt: "Surprise me with creative insights about ",
      icon: <Sparkles className="h-4 w-4" />,
      path: "/features/idea-generation"
    }
  ];

  // Handle both adding prompt to chat and navigating to feature page
  const handleFeatureAction = (feature: typeof features[0], e: React.MouseEvent) => {
    // If user is holding Ctrl/Cmd key, navigate to feature page
    if (e.ctrlKey || e.metaKey) {
      navigate(feature.path);
    } else {
      // Otherwise insert the prompt into the chat
      handleFeatureClick(feature.prompt);
    }
  };
  
  // Long press for mobile devices
  const handleLongPress = (feature: typeof features[0]) => {
    navigate(feature.path);
  };

  return (
    <div className={`feature-buttons-container ${isMobile ? 'mobile-features fixed bottom-16 left-0 right-0 bg-gray-900/95 border-t border-gray-800 p-4 z-30' : 'mt-3 mb-2'}`}>
      <div className={`${isMobile ? 'grid grid-cols-4 gap-3' : 'grid'}`}>
        {features.map((feature) => (
          <button 
            key={feature.name}
            className={`feature-button flex ${isMobile ? 'flex-col justify-center items-center h-20 space-y-2' : 'items-center space-x-2'} 
              bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 rounded-lg px-3 py-2 text-sm transition-colors`}
            onClick={(e) => handleFeatureAction(feature, e)}
            onContextMenu={(e) => {
              e.preventDefault();
              navigate(feature.path);
            }}
            onTouchStart={() => {
              let timer = setTimeout(() => {
                handleLongPress(feature);
              }, 800);
              return () => clearTimeout(timer);
            }}
          >
            <span className="text-blue-400">{feature.icon}</span>
            <span className={`${isMobile ? 'text-xs text-center' : 'whitespace-nowrap'}`}>
              {isMobile ? feature.name.split(' ')[0] : feature.name}
            </span>
            {!isMobile && (
              <span className="text-xs text-gray-400 ml-1">
                (Ctrl+click for page)
              </span>
            )}
          </button>
        ))}
      </div>
      {isMobile && (
        <div className="text-xs text-center text-gray-400 mt-3">
          Long-press any feature to visit its page
        </div>
      )}
    </div>
  );
};

export default FeatureButtons;
