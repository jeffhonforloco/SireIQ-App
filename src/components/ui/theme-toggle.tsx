
import React, { useState, useEffect } from "react";
import { Volume, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { toast } from "@/components/ui/sonner";

export function ThemeToggle() {
  const { isSpeaking, stopSpeaking, speakText, updateVoiceSettings } = useVoiceAssistant();
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle toggle animation
  const handleToggleVoice = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    
    if (isSpeaking) {
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
    <Button
      variant="outline"
      size="icon"
      className={`h-9 w-9 rounded-full bg-transparent border-sireiq-accent/30 text-sireiq-light 
        hover:bg-sireiq-accent/10 hover:text-sireiq-cyan transition-all duration-300 ease-in-out
        ${isAnimating ? 'scale-90' : 'scale-100'}
      `}
      onClick={handleToggleVoice}
      disabled={isAnimating}
    >
      <div className={`transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {isSpeaking ? (
          <Volume className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </div>
      <span className="sr-only">Toggle voice output</span>
    </Button>
  );
}
