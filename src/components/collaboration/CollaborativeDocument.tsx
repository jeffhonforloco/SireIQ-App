
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useCollaboration } from '@/contexts/CollaborationContext';
import { MessageCircle, Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface CollaborativeDocumentProps {
  title: string;
  content: string;
  lastEdit?: string;
}

const CollaborativeDocument: React.FC<CollaborativeDocumentProps> = ({ 
  title, 
  content,
  lastEdit = 'just now'
}) => {
  const { setSelectedContent, addComment, currentUser } = useCollaboration();
  const [selectedText, setSelectedText] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [documentContent, setDocumentContent] = useState(content);
  const [selection, setSelection] = useState<{ start: number, end: number } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelection = () => {
    const windowSelection = window.getSelection();
    if (windowSelection && windowSelection.toString().trim() !== '') {
      const text = windowSelection.toString();
      setSelectedText(text);
      setSelectedContent(text);
      
      if (contentRef.current) {
        // Calculate the selection range within the content
        const range = windowSelection.getRangeAt(0);
        const preSelectionRange = range.cloneRange();
        preSelectionRange.selectNodeContents(contentRef.current);
        preSelectionRange.setEnd(range.startContainer, range.startOffset);
        const start = preSelectionRange.toString().length;
        const end = start + text.length;
        
        setSelection({ start, end });
      }
      
      setShowCommentInput(true);
    }
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      addComment(commentText);
      setCommentText('');
      setShowCommentInput(false);
      setSelection(null);
      
      toast({
        title: "Comment added",
        description: "Your comment has been added to the document."
      });
    }
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: `Document "${title}" has been updated.`
    });
  };

  // Highlight the selected text when selection exists
  const renderContent = () => {
    if (!selection || isEditing) return documentContent;
    
    const before = documentContent.substring(0, selection.start);
    const selected = documentContent.substring(selection.start, selection.end);
    const after = documentContent.substring(selection.end);
    
    return (
      <>
        {before}
        <mark className="bg-sireiq-accent/30 text-sireiq-light">{selected}</mark>
        {after}
      </>
    );
  };

  // Clear selection when editing or when user clicks elsewhere
  useEffect(() => {
    if (isEditing) {
      setSelection(null);
      setShowCommentInput(false);
    }
    
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contentRef.current && 
        !contentRef.current.contains(e.target as Node) && 
        !showCommentInput
      ) {
        setSelection(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isEditing, showCommentInput]);

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
              onClick={handleSaveChanges}
            >
              <Save className="h-3 w-3 mr-1" /> Save Changes
            </Button>
          </div>
        </div>
      ) : (
        <div 
          ref={contentRef}
          className="text-sireiq-light/80 p-2 rounded-md bg-sireiq-dark/50 mb-4 min-h-[100px] whitespace-pre-wrap"
          onMouseUp={handleSelection}
        >
          {renderContent()}
        </div>
      )}
      
      {showCommentInput && (
        <div className="mb-4 p-2 bg-sireiq-accent/10 rounded-md">
          <div className="flex items-center mb-2">
            <MessageCircle className="h-4 w-4 text-sireiq-cyan mr-2" />
            <span className="text-sm">Comment on: <i className="text-sireiq-cyan">"{selectedText.length > 60 ? selectedText.substring(0, 60) + '...' : selectedText}"</i></span>
          </div>
          <textarea
            className="w-full p-2 bg-sireiq-dark border border-sireiq-accent/30 rounded-md text-sm"
            placeholder="Type your comment..."
            rows={2}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs mr-2"
              onClick={() => {
                setShowCommentInput(false);
                setSelection(null);
              }}
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
