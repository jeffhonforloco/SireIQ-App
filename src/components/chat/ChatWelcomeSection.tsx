
import React from 'react';
import { Rocket, MessageSquare, Crown } from 'lucide-react';
import { useRolePermissions } from '@/hooks/useRolePermissions';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

interface ChatWelcomeSectionProps {
  messageCount: number;
  chatMessageLimit: number;
}

const ChatWelcomeSection: React.FC<ChatWelcomeSectionProps> = ({ messageCount, chatMessageLimit }) => {
  const { role, isPersonal, isDeveloper, isEnterprise } = useRolePermissions();
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/pricing');
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center h-full">
      <div className="mt-20 md:mt-32 max-w-md">
        <div className="rounded-full bg-sireiq-accent/20 p-3 mb-4 mx-auto w-fit">
          <MessageSquare className="h-8 w-8 text-sireiq-cyan" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-2">What can I help with?</h2>
        
        {!role ? (
          <div>
            <p className="text-sireiq-light/70 mb-4">
              You have {chatMessageLimit} free messages. Sign up to unlock more capabilities and continue chatting!
            </p>
            <Button 
              onClick={() => navigate('/get-started')}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
            >
              Get Started
            </Button>
          </div>
        ) : isPersonal ? (
          <div>
            <p className="text-sireiq-light/70 mb-4">
              Upgrade to Developer for 5× more messages and advanced features!
            </p>
            <Button 
              onClick={handleUpgrade}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
            >
              Upgrade Plan
            </Button>
          </div>
        ) : isDeveloper ? (
          <div>
            <p className="text-sireiq-light/70 mb-2">
              Welcome to the Developer plan!
            </p>
            <div className="p-2 bg-sireiq-accent/10 border border-sireiq-accent/20 rounded-lg mb-4">
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-amber-400" />
                <p className="text-sm">Need more? Upgrade to Enterprise for unlimited messages.</p>
              </div>
            </div>
            <Button 
              onClick={handleUpgrade}
              variant="outline"
              className="border-sireiq-cyan/50 text-sireiq-cyan hover:bg-sireiq-cyan/10"
            >
              View Enterprise Plan
            </Button>
          </div>
        ) : (
          <div>
            <p className="text-sireiq-light/70 mb-2">
              Welcome to the Enterprise plan with unlimited messages!
            </p>
            <div className="p-2 bg-sireiq-accent/10 border border-sireiq-accent/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-amber-400" />
                <p className="text-sm">You have access to all premium features and unlimited usage.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWelcomeSection;
