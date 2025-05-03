
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useRole } from '@/contexts/RoleContext';
import { ArrowRight, Rocket } from 'lucide-react';

const StartPlatform = () => {
  const { role, setIsFirstTimeUser, setOnboardingStep } = useRole();
  const navigate = useNavigate();
  
  const handleStartPlatform = () => {
    setIsFirstTimeUser(false);
    setOnboardingStep('completed');
    navigate('/dashboard');
  };

  const getRoleInfo = () => {
    switch(role) {
      case 'user':
        return {
          title: "Your Personal AI Assistant",
          description: "Your personalized assistant is ready to help with conversations, content creation, and daily tasks.",
          features: [
            "Ask questions and get intelligent responses",
            "Generate creative content and ideas",
            "Summarize articles and documents",
            "Plan your schedule and manage tasks"
          ]
        };
      case 'developer':
        return {
          title: "Your Developer Workspace",
          description: "Your technical environment is configured with tools and APIs to help you build and code.",
          features: [
            "Code completion and debugging assistance",
            "API documentation and testing tools",
            "Custom agent creation and deployment",
            "GitHub and development integrations"
          ]
        };
      case 'enterprise':
        return {
          title: "Your Enterprise Command Center",
          description: "Your team workspace is ready for collaboration, knowledge sharing, and analytics.",
          features: [
            "Team chat and task management",
            "Custom workspace agents and knowledge base",
            "Performance analytics and insights",
            "Role-based access control and security"
          ]
        };
      default:
        return {
          title: "Your AI Platform",
          description: "Your SireIQ workspace is ready to use.",
          features: [
            "Personalized AI assistance",
            "Intelligent workflows",
            "Content creation tools",
            "Knowledge management"
          ]
        };
    }
  };

  const info = getRoleInfo();

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-gradient glow">Ready to Launch!</span>
      </h1>
      
      <div className="text-center">
        <div className="inline-block p-4 bg-sireiq-accent/20 rounded-full mb-6">
          <Rocket className="h-12 w-12 text-sireiq-cyan" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{info.title}</h2>
        <p className="text-sireiq-light/70">
          {info.description}
        </p>
      </div>
      
      <div className="w-full space-y-4">
        <h3 className="text-xl font-medium text-center">What you can do:</h3>
        
        <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
          <ul className="space-y-3">
            {info.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 text-sireiq-cyan mt-0.5">✓</div>
                <div>{feature}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <Button 
          variant="outline"
          onClick={() => setOnboardingStep(2)}
          className="px-6"
        >
          Back
        </Button>
        <Button 
          onClick={handleStartPlatform} 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-8 py-2 h-auto"
        >
          Get Started <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StartPlatform;
