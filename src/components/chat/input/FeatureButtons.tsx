
import React, { useState } from 'react';
import { Paperclip, Search, Zap, Clock, FileText, Cpu, Lightbulb, LineChart, Code, Image } from 'lucide-react';

interface FeatureButtonsProps {
  handleAttachClick?: () => void;
  handleSearchClick?: () => void;
  handleReasonClick?: () => void;
}

const FeatureButtons: React.FC<FeatureButtonsProps> = ({
  handleAttachClick,
  handleSearchClick,
  handleReasonClick
}) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const toggleFeatures = (buttonType: string) => {
    if (activeButton === buttonType) {
      setShowFeatures(false);
      setActiveButton(null);
    } else {
      setShowFeatures(true);
      setActiveButton(buttonType);
    }
  };

  return (
    <div className="relative">
      <div className="flex space-x-6">
        <button
          type="button"
          onClick={() => toggleFeatures('attach')}
          className={`flex items-center text-gray-400 hover:text-gray-200 ${activeButton === 'attach' ? 'text-blue-400' : ''}`}
        >
          <Paperclip className="h-6 w-6" />
        </button>
        
        <button
          type="button"
          onClick={() => toggleFeatures('search')}
          className={`flex items-center text-gray-400 hover:text-gray-200 ${activeButton === 'search' ? 'text-blue-400' : ''}`}
        >
          <Search className="h-6 w-6" />
        </button>
        
        <button
          type="button"
          onClick={() => toggleFeatures('reason')}
          className={`flex items-center text-gray-400 hover:text-gray-200 ${activeButton === 'reason' ? 'text-blue-400' : ''}`}
        >
          <Zap className="h-6 w-6" />
        </button>
      </div>

      {showFeatures && (
        <div className="absolute left-0 bottom-full mb-4 grid grid-cols-4 gap-2 bg-[#121620] w-full z-10">
          <FeatureCard 
            icon={<Clock className="h-5 w-5 text-blue-400" />}
            title="Strategic Roadmap"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<FileText className="h-5 w-5 text-blue-400" />}
            title="Content Distiller"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Cpu className="h-5 w-5 text-blue-400" />}
            title="Neural Composer"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Lightbulb className="h-5 w-5 text-blue-400" />}
            title="Idea Accelerator"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<LineChart className="h-5 w-5 text-blue-400" />}
            title="Data Architect"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Code className="h-5 w-5 text-blue-400" />}
            title="CodeCraft Pro"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Image className="h-5 w-5 text-blue-400" />}
            title="Vision Insights"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Cpu className="h-5 w-5 text-blue-400" />}
            title="Neural Spark"
            description="(Shift+click for prompt)"
          />
        </div>
      )}
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#1A202C] hover:bg-[#232A38] p-3 rounded-lg cursor-pointer flex flex-col items-center justify-center text-center transition-colors">
      <div className="mb-1.5">
        {icon}
      </div>
      <h4 className="text-xs font-medium text-white mb-1">{title}</h4>
      <p className="text-[10px] text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureButtons;
