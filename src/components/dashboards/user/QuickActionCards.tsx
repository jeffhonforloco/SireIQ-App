
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, BookOpen, ArrowRight, Code, FileText, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuickActionCardsProps {
  onNewChat?: () => void;
}

const QuickActionCards = ({ onNewChat }: QuickActionCardsProps) => {
  const navigate = useNavigate();

  const actions = [
    {
      title: 'AI Assistant',
      description: 'Get instant answers and assistance with any question',
      icon: Sparkles,
      action: () => navigate('/features/ai-assistant'),
      color: 'from-sireiq-cyan to-sireiq-purple'
    },
    {
      title: 'Code Helper',
      description: 'Generate, review, and optimize your code',
      icon: Code,
      action: () => navigate('/features/code-assistance'),
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Content Creator',
      description: 'Write articles, emails, and marketing content',
      icon: FileText,
      action: () => navigate('/features/content-creation'),
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Data Analyzer',
      description: 'Analyze and visualize your data insights',
      icon: BarChart3,
      action: () => navigate('/features/data-analysis'),
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Schedule Planner',
      description: 'Plan your day with AI-powered scheduling',
      icon: Calendar,
      action: () => {
        navigate('/features/ai-assistant', { 
          state: { initialMessage: 'Help me plan my schedule for today' } 
        });
      },
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Learning Hub',
      description: 'Discover new capabilities and tutorials',
      icon: BookOpen,
      action: () => navigate('/community'),
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {actions.map((action, index) => (
        <Card 
          key={index}
          className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
          onClick={action.action}
        >
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} mr-3`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              {action.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-sireiq-light/70">{action.description}</p>
          </CardContent>
          <CardFooter>
            <Button 
              variant="ghost" 
              className="w-full justify-between hover:bg-sireiq-accent/10 group-hover:text-sireiq-cyan transition-colors"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default QuickActionCards;
