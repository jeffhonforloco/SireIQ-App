
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, MoreVertical, Plus, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useChatState } from './hooks/useChatState';
import { useRolePermissions } from '@/hooks/useRolePermissions';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ clearChat }) => {
  const { messageCount, chatMessageLimit } = useChatState();
  const { isEnterprise } = useRolePermissions();
  const isMobile = useIsMobile();

  return (
    <header className="border-b border-sireiq-accent/20 p-3 flex justify-between items-center bg-sireiq-darker/50">
      <div className="flex items-center gap-2">
        <div className="bg-sireiq-accent/20 p-1.5 rounded-lg shrink-0">
          <MessageSquare className="h-5 w-5 text-sireiq-cyan" />
        </div>
        <span className="font-medium text-sm shrink-0">SireIQ Chat</span>
        
        {/* Message counter badge - Only show on desktop */}
        {!isEnterprise && !isMobile && (
          <div className="ml-2 px-3 py-0.5 bg-sireiq-accent/10 border border-sireiq-accent/20 rounded-md text-xs text-sireiq-light/70 whitespace-nowrap shrink-0">
            {messageCount}/{chatMessageLimit}
          </div>
        )}
        
        {isEnterprise && !isMobile && (
          <div className="ml-2 px-3 py-0.5 bg-sireiq-accent/10 border border-sireiq-accent/20 rounded-md text-xs text-sireiq-light/70 whitespace-nowrap shrink-0">
            Unlimited
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          title="New chat"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('new-chat-created'));
          }}
        >
          <Plus className="h-4 w-4" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-sireiq-darker border-sireiq-accent/30 text-sireiq-light">
            <DropdownMenuItem
              className="cursor-pointer hover:bg-sireiq-accent/10"
              onClick={clearChat}
            >
              <Trash2 className="mr-2 h-4 w-4" /> Clear chat
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default ChatHeader;
