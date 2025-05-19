
import React from 'react';
import { useChatState } from './hooks/useChatState';
import { useRolePermissions } from '@/hooks/useRolePermissions';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ clearChat }) => {
  const { isEnterprise } = useRolePermissions();
  const isMobile = useIsMobile();

  return (
    <header className="border-b border-sireiq-accent/20 p-3 flex justify-between items-center bg-sireiq-darker/50">
      <div className="flex items-center gap-2">
        {/* Empty div to maintain header spacing */}
      </div>
      
      <div className="flex items-center gap-2 shrink-0">
        {/* All buttons removed */}
      </div>
    </header>
  );
};

export default ChatHeader;
