
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

interface NewChatButtonProps {
  position?: 'fixed' | 'relative';
  className?: string;
}

const NewChatButton: React.FC<NewChatButtonProps> = ({ 
  position = 'fixed',
  className = ''
}) => {
  const navigate = useNavigate();

  const handleNewChat = () => {
    // Force a reload to the home page to ensure a completely fresh chat session
    navigate('/', { replace: true });
    
    // Clear any local storage related to the current chat if needed
    // This ensures a completely fresh start
    localStorage.removeItem('current-chat');
    
    toast.success('New chat session created');
  };

  return (
    <Button 
      onClick={handleNewChat}
      className={`
        ${position === 'fixed' ? 'fixed bottom-24 right-4 md:bottom-16 md:right-8 z-30' : ''}
        rounded-full p-3 shadow-lg bg-sireiq-cyan hover:bg-sireiq-cyan/90 text-gray-900
        transition-all duration-200 hover:scale-105 hover:shadow-xl
        ${className}
      `}
      aria-label="New chat"
    >
      <MessageSquarePlus className="h-6 w-6" />
    </Button>
  );
};

export default NewChatButton;
