
import React from 'react';
import { MessageSquare, Volume, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import VoiceSettingsPanel from './VoiceSettingsPanel';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';
import { toast } from '@/components/ui/sonner';

interface VoiceAssistantHeaderProps {
  isFullScreen: boolean;
  setIsFullScreen: (isFullScreen: boolean) => void;
}

const VoiceAssistantHeader: React.FC<VoiceAssistantHeaderProps> = ({ 
  isFullScreen, 
  setIsFullScreen 
}) => {
  const { isSpeaking, stopSpeaking, speakText } = useVoiceAssistant();

  const handleToggleSound = () => {
    if (isSpeaking) {
      stopSpeaking();
      toast.info("Voice output muted");
    } else {
      speakText("Voice output enabled");
      toast.info("Voice output enabled");
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center">
        <div className="bg-blue-600 p-2 rounded-full mr-3">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Sire Voice Assistant</h2>
          <p className="text-sm text-gray-400">Chat with our AI assistant</p>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="border-gray-700 bg-gray-800 hover:bg-gray-700"
          onClick={handleToggleSound}
        >
          {isSpeaking ? <Volume className="h-5 w-5 text-white" /> : <VolumeX className="h-5 w-5 text-white" />}
        </Button>
        
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 bg-gray-800 hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-gray-900 border-gray-800">
            <VoiceSettingsPanel />
          </DrawerContent>
        </Drawer>
        
        <Button
          variant="outline"
          size="icon"
          className="border-gray-700 bg-gray-800 hover:bg-gray-700"
          onClick={() => setIsFullScreen(!isFullScreen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isFullScreen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
            )}
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default VoiceAssistantHeader;
