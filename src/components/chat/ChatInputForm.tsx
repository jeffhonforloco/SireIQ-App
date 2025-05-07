
import React, { useRef, useEffect } from 'react';
import { ArrowUp, Paperclip, Search, Lightbulb } from 'lucide-react';

interface ChatInputFormProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleVoiceInput: () => void;
  isTyping: boolean;
}

const ChatInputForm: React.FC<ChatInputFormProps> = ({
  input,
  setInput,
  handleSubmit,
  handleVoiceInput,
  isTyping
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Focus input on component mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleAttachClick = () => {
    // Open file picker dialog
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log("File selected:", file.name);
        // You could add actual file handling logic here
        setInput(`I'm attaching ${file.name}`);
      }
    };
    input.click();
  };

  const handleSearchClick = () => {
    setInput("Search for: ");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleReasonClick = () => {
    setInput("Provide reasoning about ");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFeatureClick = (featurePrompt: string) => {
    setInput(featurePrompt);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="px-4 pt-2 pb-4 sticky bottom-0 bg-[#0f1117]">
      <div className="max-w-3xl mx-auto">
        <form 
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
            return false;
          }} 
          className="relative w-full"
        >
          {/* Input field container */}
          <div className="chat-input-container">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything"
              disabled={isTyping}
              className="chat-input-field"
            />
            
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className={`submit-button ${
                input.trim() && !isTyping ? 'active' : 'inactive'
              }`}
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
          
          {/* Button row under input */}
          <div className="input-buttons-container">
            <button
              type="button"
              className="input-button"
              onClick={handleAttachClick}
            >
              <Paperclip className="h-4 w-4" />
              <span>Attach</span>
            </button>
            
            <button
              type="button"
              className="input-button"
              onClick={handleSearchClick}
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
            
            <button
              type="button"
              className="input-button"
              onClick={handleReasonClick}
            >
              <Lightbulb className="h-4 w-4" />
              <span>Reason</span>
            </button>
            
            <div className="flex-grow"></div>
            
            <button
              type="button"
              className="voice-button"
              onClick={handleVoiceInput}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
              <span>Voice</span>
            </button>
          </div>
        </form>
        
        {/* Feature buttons */}
        <div className="feature-buttons-container">
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Create a strategic roadmap for ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            Strategic Roadmap
          </button>
          
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Distill this content: ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
            </svg>
            Content Distiller
          </button>
          
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Write creative content about ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 8v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"></path>
              <path d="M11 2H9a2 2 0 0 0-2 2v4h10V4a2 2 0 0 0-2-2h-2"></path>
              <path d="M14 14a2 2 0 0 1-4 0"></path>
            </svg>
            Neural Composer
          </button>
          
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Generate innovative ideas for ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            Idea Accelerator
          </button>
          
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Analyze this dataset: ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Data Architect
          </button>
          
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Generate code for ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            CodeCraft Pro
          </button>
          
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Analyze this image: ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v.01"></path>
              <path d="M12 13a2 2 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483 1.988 1.988 0 0 0-.371 1.313"></path>
            </svg>
            Vision Insights
          </button>
          
          <button 
            className="feature-button"
            onClick={() => handleFeatureClick("Surprise me with creative insights about ")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c-.1 0-.2-.1-.3-.1-.8-.5-1.7-1-2.5-1.5-1.1-.7-2.3-1.3-3.3-2.2-1.8-1.5-2.9-3.3-2.9-5.6.1-2.3 1.3-4.1 3.4-5.2 2.1-1.2 4.3-.9 6.2.5 1.1-.8 2.3-1.4 3.7-1.5 1.3-.1 2.6.2 3.8.9 1.1.7 1.9 1.6 2.3 2.9.4 1.4.4 2.8.1 4.1-.4 1.8-1.2 3.3-2.4 4.6-.9 1-2 1.8-3.1 2.5-.8.5-1.7 1-2.5 1.5-.2.1-.3.1-.5.1zm-7.3-9.6c.1.8.3 1.5.8 2.1.7.9 1.6 1.6 2.5 2.3.5.3 1 .7 1.5 1 .7.4 1.1.4 1.8 0l1.5-1c.8-.5 1.5-1.1 2.2-1.7 1-.9 1.8-2 2.1-3.4.3-1.2.3-2.4 0-3.5-.8-2.9-3.8-4-6.4-2.6-.4.2-.4.2-.8-.1-1.3-.8-2.6-1-4.1-.5-1.3.5-2.1 1.4-2.5 2.8-.4 1.1-.3 2.3.1 3.4.2.4.2.8.3 1.2z"></path>
            </svg>
            Neural Spark
          </button>
        </div>
        
        <div className="disclaimer-text">
          SireIQ helps with AI-powered insights, content creation, and workflow optimization. Your conversations may be reviewed to improve our services.
        </div>
      </div>
    </div>
  );
};

export default ChatInputForm;
