
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ImageIcon, 
  Search, 
  Zap, 
  Newspaper, 
  Users 
} from 'lucide-react';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: <ImageIcon className="h-5 w-5" />,
      label: 'Create Content',
      onClick: () => navigate('/features/idea-generation')
    },
    {
      icon: <Search className="h-5 w-5" />,
      label: 'Research',
      onClick: () => navigate('/features')
    },
    {
      icon: <Zap className="h-5 w-5" />,
      label: 'How to',
      onClick: () => navigate('/how-it-works')
    },
    {
      icon: <Newspaper className="h-5 w-5" />,
      label: 'Latest Updates',
      onClick: () => navigate('/features/voice-assistant')
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: 'Personas',
      onClick: () => navigate('/features/personality-engine')
    }
  ];

  return (
    <div className="px-6 py-4 border-t border-gray-800 bg-gray-900/50">
      <div className="flex flex-wrap justify-center gap-2">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                      transition-colors rounded-full text-sm text-gray-200"
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
