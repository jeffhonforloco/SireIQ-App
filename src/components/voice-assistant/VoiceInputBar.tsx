
import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Volume } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';

const VoiceInputBar: React.FC = () => {
  const {
    isListening,
    isSpeaking,
    transcript,
    startListening,
    stopListening,
    stopSpeaking,
    supportsSpeechRecognition
  } = useVoiceAssistant();

  const [placeholder, setPlaceholder] = useState("Click the microphone to start speaking");

  const handleToggleMic = () => {
    if (isListening) {
      stopListening();
      setPlaceholder("Click the microphone to start speaking");
    } else {
      if (!supportsSpeechRecognition) {
        toast.error("Your browser doesn't support speech recognition.");
        return;
      }
      startListening();
      setPlaceholder("Listening...");
      toast.info("Listening...");
    }
  };

  const handleToggleSpeaker = () => {
    stopSpeaking();
    toast.info(isSpeaking ? "Voice responses disabled" : "Voice responses enabled");
  };

  return (
    <div className="p-4 border-t border-gray-800">
      <div className="flex items-center">
        <Button
          className={`rounded-full p-3 mr-3 ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          size="icon"
          onClick={handleToggleMic}
        >
          {isListening ? (
            <MicOff className="h-6 w-6 text-white" />
          ) : (
            <Mic className="h-6 w-6 text-white" />
          )}
        </Button>
        
        <Card className="flex-grow bg-gray-800 border-gray-700">
          <div className="p-3 text-gray-400">
            {isListening ? (
              transcript || "Listening..."
            ) : (
              placeholder
            )}
          </div>
        </Card>
        
        <Button
          className={`rounded-full p-3 ml-3 ${
            isSpeaking 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
          size="icon"
          onClick={handleToggleSpeaker}
        >
          {isSpeaking ? (
            <Volume2 className="h-6 w-6 text-white" />
          ) : (
            <Volume className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default VoiceInputBar;
