
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSubmit, disabled }) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask SireIQ something..."
        disabled={disabled}
        className="flex-1 p-3 rounded-md bg-sireiq-darker border-2 border-sireiq-cyan/30 text-sireiq-light focus:ring-2 focus:ring-sireiq-cyan focus:border-sireiq-cyan placeholder:text-sireiq-light/50"
      />
      <Button 
        type="submit" 
        disabled={!input.trim() || disabled}
        className="bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-sireiq-darker"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default ChatInput;
