
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
  item(index: number): SpeechRecognitionResult | null;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  length: number;
  isFinal: boolean;
  item(index: number): SpeechRecognitionAlternative | null;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

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
  speakText: (text: string) => void;
  stopSpeaking: () => void;
  resetTranscript: () => void;
  updateVoiceSettings: (settings: Partial<VoiceSettings>) => void;
  supportsSpeechRecognition: boolean;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const VoiceAssistantContext = createContext<VoiceAssistantContextType | undefined>(undefined);

export const VoiceAssistantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>({
    voice: 'female',
    volume: 1,
    rate: 1,
    pitch: 1,
    autoResponse: true
  });
  
  // Check if speech recognition is supported
  const supportsSpeechRecognition = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    if (!supportsSpeechRecognition) {
      console.warn('Speech recognition not supported in this browser');
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        console.log('Speech recognition started');
        setIsListening(true);
      };

      recognitionInstance.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript;
          } else {
            interimTranscript += result[0].transcript;
          }
        }

        setTranscript(finalTranscript || interimTranscript);
      };

      recognitionInstance.onend = () => {
        console.log('Speech recognition ended');
        setIsListening(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } catch (error) {
      console.error('Failed to initialize speech recognition:', error);
    }
  }, [supportsSpeechRecognition]);

  const startListening = useCallback(() => {
    if (!recognition || !supportsSpeechRecognition) {
      console.warn('Speech recognition not available');
      return;
    }

    try {
      setTranscript('');
      recognition.start();
    } catch (error) {
      console.error('Failed to start speech recognition:', error);
    }
  }, [recognition, supportsSpeechRecognition]);

  const stopListening = useCallback(() => {
    if (!recognition) return;

    try {
      recognition.stop();
    } catch (error) {
      console.error('Failed to stop speech recognition:', error);
    }
  }, [recognition]);

  const speakText = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('Speech synthesis not supported');
      return;
    }

    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Apply voice settings
      utterance.volume = voiceSettings.volume;
      utterance.rate = voiceSettings.rate;
      utterance.pitch = voiceSettings.pitch;
      
      utterance.onstart = () => {
        console.log('Speech synthesis started');
        setIsSpeaking(true);
      };
      
      utterance.onend = () => {
        console.log('Speech synthesis ended');
        setIsSpeaking(false);
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Failed to speak text:', error);
      setIsSpeaking(false);
    }
  }, [voiceSettings]);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } catch (error) {
        console.error('Failed to stop speech synthesis:', error);
      }
    }
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
  }, []);

  const updateVoiceSettings = useCallback((settings: Partial<VoiceSettings>) => {
    setVoiceSettings(prev => ({ ...prev, ...settings }));
  }, []);

  const value: VoiceAssistantContextType = {
    isListening,
    isSpeaking,
    transcript,
    voiceSettings,
    startListening,
    stopListening,
    speakText,
    stopSpeaking,
    resetTranscript,
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
