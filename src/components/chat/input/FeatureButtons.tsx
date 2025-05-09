
import React, { useState } from 'react';
import { Paperclip, Search, BrainCircuit, Clock, FileText, Cpu, Lightbulb, LineChart, Code, Eye } from 'lucide-react';

interface FeatureButtonsProps {
  handleAttachClick: () => void;
  handleSearchClick: () => void;
  handleReasonClick: () => void;
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
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => toggleFeatures('attach')}
          className={`flex items-center text-gray-500 hover:text-gray-300 text-sm ${activeButton === 'attach' ? 'text-blue-400' : ''}`}
        >
          <Paperclip className="h-5 w-5 mr-2" />
          <span>Attach</span>
        </button>
        
        <button
          type="button"
          onClick={() => toggleFeatures('search')}
          className={`flex items-center text-gray-500 hover:text-gray-300 text-sm ${activeButton === 'search' ? 'text-blue-400' : ''}`}
        >
          <Search className="h-5 w-5 mr-2" />
          <span>Search</span>
        </button>
        
        <button
          type="button"
          onClick={() => toggleFeatures('reason')}
          className={`flex items-center text-gray-500 hover:text-gray-300 text-sm ${activeButton === 'reason' ? 'text-blue-400' : ''}`}
        >
          <BrainCircuit className="h-5 w-5 mr-2" />
          <span>Reason</span>
        </button>
      </div>

      {showFeatures && (
        <div className="absolute left-0 bottom-full mb-2 w-full grid grid-cols-2 md:grid-cols-4 gap-2 bg-[#0f1216] border border-sireiq-accent/30 p-2 rounded-lg z-10">
          <FeatureCard 
            icon={<Clock className="h-6 w-6 text-blue-400" />}
            title="Strategic Roadmap"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<FileText className="h-6 w-6 text-blue-400" />}
            title="Content Distiller"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Cpu className="h-6 w-6 text-blue-400" />}
            title="Neural Composer"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Lightbulb className="h-6 w-6 text-blue-400" />}
            title="Idea Accelerator"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<LineChart className="h-6 w-6 text-blue-400" />}
            title="Data Architect"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Code className="h-6 w-6 text-blue-400" />}
            title="CodeCraft Pro"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Eye className="h-6 w-6 text-blue-400" />}
            title="Vision Insights"
            description="(Shift+click for prompt)"
          />
          <FeatureCard 
            icon={<Cpu className="h-6 w-6 text-blue-400" />}
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
    <div className="bg-[#171c26] hover:bg-[#1e2330] p-4 rounded-lg cursor-pointer flex flex-col items-center text-center transition-colors">
      <div className="mb-2">
        {icon}
      </div>
      <h4 className="text-sm font-medium text-white mb-1">{title}</h4>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureButtons;
