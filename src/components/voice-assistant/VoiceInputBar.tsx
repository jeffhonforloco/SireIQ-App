
import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';

const VoiceInputBar: React.FC = () => {
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    supportsSpeechRecognition
  } = useVoiceAssistant();

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
              "Click the microphone to start speaking"
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VoiceInputBar;
