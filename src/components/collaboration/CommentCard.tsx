
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import UserAvatar from './UserAvatar';
import { useCollaboration } from '@/contexts/CollaborationContext';
import { MessageCircle, Check } from 'lucide-react';

interface ReplyType {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userColor: string;
  text: string;
  timestamp: Date;
}

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
  const [replies, setReplies] = useState<ReplyType[]>([]);

  const handleReply = () => {
    if (isReplying && reply.trim()) {
      // Add the reply to the comment
      const newReply: ReplyType = {
        id: Date.now().toString(),
        userId: 'current-user',
        userName: 'You',
        userAvatar: 'Y',
        userColor: 'bg-green-500',
        text: reply,
        timestamp: new Date(),
      };
      
      setReplies([...replies, newReply]);
      setReply('');
      setIsReplying(false);
    } else {
      setIsReplying(!isReplying);
    }
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
      
      <p className="text-sireiq-light/80 mb-3">{text}</p>
      
      {/* Replies section */}
      {replies.length > 0 && (
        <div className="ml-6 border-l-2 border-sireiq-accent/20 pl-4 mt-3 mb-3">
          {replies.map((reply) => (
            <div key={reply.id} className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <UserAvatar 
                  name={reply.userName} 
                  initial={reply.userAvatar} 
                  color={reply.userColor}
                  size="sm"
                  showStatus={false}
                />
                <div>
                  <p className="font-medium text-sm">{reply.userName}</p>
                  <p className="text-xs text-sireiq-light/50">
                    {formatDistanceToNow(reply.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
              <p className="text-sireiq-light/80 text-sm">{reply.text}</p>
            </div>
          ))}
        </div>
      )}
      
      {!resolved && (
        <div className="flex mt-3 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs h-7 px-2 border-sireiq-accent/30"
            onClick={handleReply}
          >
            <MessageCircle className="h-3 w-3 mr-1" />
            {isReplying ? 'Cancel' : 'Reply'}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs h-7 px-2 border-sireiq-accent/30"
            onClick={() => resolveComment(id)}
          >
            <Check className="h-3 w-3 mr-1" />
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
