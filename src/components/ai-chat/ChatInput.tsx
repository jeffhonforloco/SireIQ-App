
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
        className="flex-1 p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400"
      />
      <Button 
        type="submit" 
        disabled={!input.trim() || disabled}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full aspect-square p-2"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default ChatInput;
