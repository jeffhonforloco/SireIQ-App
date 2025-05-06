
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCollaboration } from '@/contexts/CollaborationContext';
import { MessageCircle } from 'lucide-react';

interface CollaborativeDocumentProps {
  title: string;
  content: string;
  lastEdit?: string;
}

const CollaborativeDocument: React.FC<CollaborativeDocumentProps> = ({ 
  title, 
  content,
  lastEdit = '5 mins ago'
}) => {
  const { setSelectedContent, addComment } = useCollaboration();
  const [selectedText, setSelectedText] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [documentContent, setDocumentContent] = useState(content);

  const handleSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      setSelectedText(selection.toString());
      setSelectedContent(selection.toString());
      setShowCommentInput(true);
    }
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      addComment(commentText);
      setCommentText('');
      setShowCommentInput(false);
    }
  };

  return (
    <div className="bg-sireiq-darker rounded-lg p-4 mb-4 border border-sireiq-accent/20">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sireiq-cyan">{title}</span>
        <span className="text-xs text-sireiq-light/50">Last edit: {lastEdit}</span>
      </div>
      
      {isEditing ? (
        <div className="mb-4">
          <textarea
            className="w-full p-2 bg-sireiq-dark border border-sireiq-accent/30 rounded-md text-sm resize-none"
            rows={6}
            value={documentContent}
            onChange={(e) => setDocumentContent(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs mr-2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button 
              size="sm" 
              className="text-xs bg-sireiq-cyan text-sireiq-darker"
              onClick={() => setIsEditing(false)}
            >
              Save Changes
            </Button>
          </div>
        </div>
      ) : (
        <div 
          className="text-sireiq-light/80 p-2 rounded-md bg-sireiq-dark/50 mb-4 min-h-[100px]"
          onMouseUp={handleSelection}
        >
          {documentContent}
        </div>
      )}
      
      {showCommentInput && (
        <div className="mb-4 p-2 bg-sireiq-accent/10 rounded-md">
          <div className="flex items-center mb-2">
            <MessageCircle className="h-4 w-4 text-sireiq-cyan mr-2" />
            <span className="text-sm">Add comment about: <i className="text-sireiq-cyan">"{selectedText}"</i></span>
          </div>
          <textarea
            className="w-full p-2 bg-sireiq-dark border border-sireiq-accent/30 rounded-md text-sm"
            placeholder="Type your comment..."
            rows={2}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs mr-2"
              onClick={() => setShowCommentInput(false)}
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
      
      {!isEditing && (
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs"
          onClick={() => setIsEditing(true)}
        >
          Edit Document
        </Button>
      )}
    </div>
  );
};

export default CollaborativeDocument;
