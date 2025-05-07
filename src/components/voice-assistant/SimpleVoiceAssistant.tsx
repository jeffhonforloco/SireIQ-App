
import React, { useState } from 'react';
import { Plus, Globe, Lightbulb, Mic, AudioWaveform } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';

const SimpleVoiceAssistant: React.FC = () => {
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    speakText,
    supportsSpeechRecognition
  } = useVoiceAssistant();

  const [inputValue, setInputValue] = useState("");

  const handleToggleMic = () => {
    if (isListening) {
      stopListening();
    } else {
      if (!supportsSpeechRecognition) {
        toast.error("Your browser doesn't support speech recognition.");
        return;
      }
      startListening();
      toast.info("Listening...");
    }
  };

  const handleOptionClick = (option: string) => {
    toast.info(`Selected option: ${option}`);
    
    const responses = {
      "new": "Starting a new conversation. What would you like to talk about?",
      "web": "I can search the web for information. What would you like to know?",
      "idea": "Let me help you brainstorm ideas. What topic are you interested in?",
      "announce": "I can help you create an announcement. What's the occasion?"
    };
    
    const response = responses[option as keyof typeof responses];
    speakText(response);
  };

  return (
    <Card className="w-full max-w-3xl bg-gray-900 border-gray-800 text-white">
      <CardContent className="p-6">
        <h2 className="text-4xl font-light mb-10 text-gray-300">Ask anything</h2>
        
        <div className="flex justify-between mb-8">
          <Button 
            onClick={() => handleOptionClick("new")}
            className="rounded-full bg-gray-800 hover:bg-gray-700 h-16 w-16"
            size="icon"
          >
            <Plus className="h-8 w-8" />
          </Button>
          
          <Button 
            onClick={() => handleOptionClick("web")}
            className="rounded-full bg-gray-800 hover:bg-gray-700 h-16 w-16"
            size="icon"
          >
            <Globe className="h-8 w-8" />
          </Button>
          
          <Button 
            onClick={() => handleOptionClick("idea")}
            className="rounded-full bg-gray-800 hover:bg-gray-700 h-16 w-16"
            size="icon"
          >
            <Lightbulb className="h-8 w-8" />
          </Button>
          
          <Button 
            onClick={() => handleOptionClick("announce")}
            className="rounded-full bg-gray-800 hover:bg-gray-700 h-16 w-16"
            size="icon"
          >
            <AudioWaveform className="h-8 w-8" />
          </Button>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button 
            onClick={handleToggleMic}
            className={`rounded-full ${isListening ? 'bg-red-500 hover:bg-red-600 animate-pulse' : 'bg-gray-800 hover:bg-gray-700'} h-16 w-16`}
            size="icon"
          >
            <Mic className="h-8 w-8" />
          </Button>
          
          <Button 
            className="rounded-full bg-white text-black hover:bg-gray-200 h-16 w-16"
            size="icon"
          >
            <AudioWaveform className="h-8 w-8" />
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-800 p-3 flex justify-center">
        <div className="w-1/2 h-1 bg-white rounded-full"></div>
      </CardFooter>
    </Card>
  );
};

export default SimpleVoiceAssistant;
