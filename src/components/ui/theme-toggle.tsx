
import React, { useState, useEffect } from "react";
import { Volume, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { toast } from "@/components/ui/sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { isSpeaking, stopSpeaking, speakText, updateVoiceSettings } = useVoiceAssistant();
  const [isAnimating, setIsAnimating] = useState(false);
  const [localSpeakingState, setLocalSpeakingState] = useState(isSpeaking);

  // Sync local state with context state
  useEffect(() => {
    setLocalSpeakingState(isSpeaking);
  }, [isSpeaking]);

  // Handle toggle animation and state change
  const handleToggleVoice = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    
    // Toggle the state immediately for UI feedback
    setLocalSpeakingState(!localSpeakingState);
    
    if (localSpeakingState) {
      stopSpeaking();
      toast.info("Voice output disabled");
    } else {
      // Enable voice output
      updateVoiceSettings({ autoResponse: true });
      speakText("Voice output enabled");
      toast.success("Voice output enabled");
    }
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`h-9 w-9 rounded-full bg-transparent border-gray-600 text-gray-200 
              hover:bg-gray-700/50 hover:text-gray-100 transition-all duration-300 ease-in-out
              ${isAnimating ? 'scale-90' : 'scale-100'}
            `}
            onClick={handleToggleVoice}
            disabled={isAnimating}
          >
            <div className={`transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {localSpeakingState ? (
                <Volume className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5" />
              )}
            </div>
            <span className="sr-only">Toggle voice output</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-gray-800 text-gray-100 border border-gray-600 shadow-lg">
          <p>{localSpeakingState ? "Disable voice output" : "Enable voice output"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
