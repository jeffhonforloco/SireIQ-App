
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface VoiceSettings {
  voice: string;
  volume: number;
  rate: number;
  pitch: number;
  autoResponse: boolean;
}

interface VoiceAssistantContextType {
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

const defaultVoiceSettings: VoiceSettings = {
  voice: 'female',
  volume: 1.0, // 0 to 1
  rate: 1.0, // 0.1 to 2
  pitch: 1.0, // 0.1 to 2
  autoResponse: true
};

const VoiceAssistantContext = createContext<VoiceAssistantContextType | undefined>(undefined);

interface VoiceAssistantProviderProps {
  children: ReactNode;
}

export const VoiceAssistantProvider: React.FC<VoiceAssistantProviderProps> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [transcript, setTranscript] = useState('');
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(defaultVoiceSettings);
  
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [supportsSpeechRecognition, setSupportsSpeechRecognition] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Check if browser supports Web Speech API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // @ts-ignore - TypeScript doesn't recognize webkitSpeechRecognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';
      
      setRecognition(recognitionInstance);
      setSupportsSpeechRecognition(true);
    }
    
    if ('speechSynthesis' in window) {
      setSynth(window.speechSynthesis);
    }
    
    // Load saved settings from localStorage if available
    const savedSettings = localStorage.getItem('voiceAssistantSettings');
    if (savedSettings) {
      try {
        setVoiceSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error('Failed to parse saved voice settings');
      }
    }
    
    return () => {
      stopListening();
      if (synth && synth.speaking) {
        synth.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (!recognition) return;
    
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let currentTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          currentTranscript += event.results[i][0].transcript + ' ';
        }
      }
      setTranscript(currentTranscript);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };
  }, [recognition]);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('voiceAssistantSettings', JSON.stringify(voiceSettings));
  }, [voiceSettings]);

  const startListening = useCallback(() => {
    if (recognition && !isListening) {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    }
  }, [recognition, isListening]);

  const stopListening = useCallback(() => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition, isListening]);

  const resetTranscript = useCallback(() => {
    setTranscript('');
  }, []);

  const speakText = useCallback((text: string) => {
    if (!synth || !isSpeaking) return;
    
    // Cancel any ongoing speech
    if (synth.speaking) {
      synth.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Apply voice settings
    utterance.volume = voiceSettings.volume;
    utterance.rate = voiceSettings.rate;
    utterance.pitch = voiceSettings.pitch;
    
    // Try to find a matching voice based on settings
    if (synth.getVoices().length > 0) {
      const voices = synth.getVoices();
      let selectedVoice;
      
      // Filter voices based on preference
      if (voiceSettings.voice === 'male') {
        selectedVoice = voices.find(voice => voice.name.toLowerCase().includes('male'));
      } else if (voiceSettings.voice === 'female') {
        selectedVoice = voices.find(voice => voice.name.toLowerCase().includes('female'));
      }
      
      // If no matching voice found, try to find one in the user's language
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang === 'en-US');
      }
      
      // Fall back to the first voice if no match
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }
    
    synth.speak(utterance);
  }, [synth, voiceSettings, isSpeaking]);

  const stopSpeaking = useCallback(() => {
    if (synth) {
      synth.cancel();
      setIsSpeaking(!isSpeaking);
    }
  }, [synth, isSpeaking]);

  const updateVoiceSettings = useCallback((settings: Partial<VoiceSettings>) => {
    setVoiceSettings(prev => ({
      ...prev,
      ...settings
    }));
  }, []);

  const value = {
    isListening,
    isSpeaking,
    transcript,
    voiceSettings,
    startListening,
    stopListening,
    resetTranscript,
    speakText,
    stopSpeaking,
    updateVoiceSettings,
    supportsSpeechRecognition
  };

  return (
    <VoiceAssistantContext.Provider value={value}>
      {children}
    </VoiceAssistantContext.Provider>
  );
};

export const useVoiceAssistant = () => {
  const context = useContext(VoiceAssistantContext);
  if (context === undefined) {
    throw new Error('useVoiceAssistant must be used within a VoiceAssistantProvider');
  }
  return context;
};
