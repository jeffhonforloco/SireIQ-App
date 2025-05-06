
export interface VoiceSettings {
  voice: string;
  volume: number;
  rate: number;
  pitch: number;
  autoResponse: boolean;
}

export interface VoiceAssistantContextType {
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  voiceSettings: VoiceSettings;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  speakText: (text: string) => void;
  stopSpeaking: () => void;
  updateVoiceSettings: (settings: Partial<VoiceSettings>) => void;
  supportsSpeechRecognition: boolean;
}
