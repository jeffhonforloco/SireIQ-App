
import React, { useState } from 'react';
import { useCollaboration } from '@/contexts/CollaborationContext';
import CommentCard from './CommentCard';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CommentsSection: React.FC = () => {
  const { comments, addComment } = useCollaboration();
  const [newComment, setNewComment] = useState('');
  const [showInput, setShowInput] = useState(false);
  
  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment('');
      setShowInput(false);
    }
  };
  
  return (
    <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
      <h3 className="font-bold text-xl flex items-center mb-4">
        <MessageCircle className="h-5 w-5 mr-2 text-sireiq-cyan" />
        Comments
      </h3>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {comments.length === 0 ? (
          <p className="text-sireiq-light/50 text-center py-4">No comments yet</p>
        ) : (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              id={comment.id}
              userName={comment.userName}
              userAvatar={comment.userName.charAt(0)}
              userColor={comment.userColor}
              text={comment.text}
              timestamp={comment.timestamp}
              resolved={comment.resolved}
              replies={comment.replies}
            />
          ))
        )}
      </div>
      
      {!showInput ? (
        <Button 
          variant="outline" 
          className="w-full mt-4 border-sireiq-accent/30"
          onClick={() => setShowInput(true)}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Add general comment
        </Button>
      ) : (
        <div className="mt-4">
          <textarea
            className="w-full p-2 bg-sireiq-dark border border-sireiq-accent/30 rounded-md text-sm"
            placeholder="Type your comment..."
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs mr-2"
              onClick={() => setShowInput(false)}
            >
              Cancel
            </Button>
            <Button 
              size="sm" 
              className="text-xs bg-sireiq-cyan text-sireiq-darker"
              onClick={handleAddComment}
            >
              Add Comment
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
