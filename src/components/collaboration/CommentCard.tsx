
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import UserAvatar from './UserAvatar';
import { useCollaboration } from '@/contexts/CollaborationContext';

interface CommentCardProps {
  id: string;
  userName: string;
  userAvatar: string;
  userColor: string;
  text: string;
  timestamp: Date;
  resolved: boolean;
}

const CommentCard: React.FC<CommentCardProps> = ({
  id,
  userName,
  userAvatar,
  userColor,
  text,
  timestamp,
  resolved
}) => {
  const { resolveComment } = useCollaboration();
  const [isReplying, setIsReplying] = useState(false);
  const [reply, setReply] = useState('');

  const handleReply = () => {
    if (isReplying && reply.trim()) {
      // In a real app, this would send the reply to a backend
      console.log(`Reply to comment ${id}: ${reply}`);
      setReply('');
    }
    setIsReplying(!isReplying);
  };

  return (
    <div className={`bg-sireiq-darker rounded-lg p-4 mb-4 ${resolved ? 'opacity-60' : ''}`}>
      <div className="flex items-center gap-3 mb-4">
        <UserAvatar 
          name={userName} 
          initial={userAvatar} 
          color={userColor} 
          showStatus={false}
        />
        <div>
          <p className="font-medium">{userName}</p>
          <p className="text-xs text-sireiq-light/50">
            {formatDistanceToNow(timestamp, { addSuffix: true })}
          </p>
        </div>
      </div>
      
      <p className="text-sireiq-light/80">{text}</p>
      
      {!resolved && (
        <div className="flex mt-3 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs h-7 px-2 border-sireiq-accent/30"
            onClick={handleReply}
          >
            {isReplying ? 'Cancel' : 'Reply'}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs h-7 px-2 border-sireiq-accent/30"
            onClick={() => resolveComment(id)}
          >
            Resolve
          </Button>
        </div>
      )}

      {isReplying && (
        <div className="mt-3">
          <textarea
            className="w-full p-2 bg-sireiq-dark border border-sireiq-accent/30 rounded-md text-sm"
            placeholder="Type your reply..."
            rows={2}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <Button 
            size="sm" 
            className="mt-2 text-xs bg-sireiq-cyan text-sireiq-darker"
            onClick={handleReply}
          >
            Send Reply
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommentCard;
