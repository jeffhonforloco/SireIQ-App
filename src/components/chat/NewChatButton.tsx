
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { useIsMobile } from '@/hooks/use-mobile';

interface NewChatButtonProps {
  position?: 'fixed' | 'relative';
  className?: string;
}

const NewChatButton: React.FC<NewChatButtonProps> = ({ 
  position = 'fixed',
  className = ''
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNewChat = () => {
    // Clear all chat-related storage
    localStorage.removeItem('current-chat');
    sessionStorage.removeItem('chat-messages');
    sessionStorage.removeItem('chat-context');
    
    // Force a full page reload to reset all React states
    window.location.href = '/';
    
    // Show success toast to confirm action to user
    toast.success('New chat session created');
  };

  return (
    <Button 
      onClick={handleNewChat}
      className={`
        ${position === 'fixed' ? 'fixed top-20 right-4 md:top-20 md:right-8 z-50' : ''}
        rounded-full ${isMobile ? 'p-3' : 'p-3'} shadow-lg bg-sireiq-cyan hover:bg-sireiq-cyan/90 text-gray-900
        transition-all duration-200 hover:scale-105 hover:shadow-xl
        ${className}
      `}
      aria-label="New chat"
      type="button"
    >
      <MessageSquarePlus className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
    </Button>
  );
};

export default NewChatButton;
