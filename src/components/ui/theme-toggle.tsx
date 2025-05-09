
import React from "react";
import { Volume, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { toast } from "@/components/ui/sonner";

export function ThemeToggle() {
  const { isSpeaking, stopSpeaking, speakText } = useVoiceAssistant();

  const handleToggleVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
      toast.info("Voice output disabled");
    } else {
      speakText("Voice output enabled");
      toast.success("Voice output enabled");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 rounded-full bg-transparent border-sireiq-accent/30 text-sireiq-light hover:bg-sireiq-accent/10 hover:text-sireiq-cyan transition-colors"
      onClick={handleToggleVoice}
    >
      {isSpeaking ? (
        <Volume className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle voice output</span>
    </Button>
  );
}
