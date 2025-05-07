
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { VoiceSettings, VoiceAssistantContextType } from '@/types/voice-assistant';
import { initializeSpeechRecognition, setupRecognitionListeners } from '@/utils/speechRecognition';
import { findVoice, createUtterance } from '@/utils/speechSynthesis';
import { defaultVoiceSettings, loadSavedSettings, saveSettings } from '@/utils/voiceSettings';

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
    // Initialize speech recognition
    const { recognition: recognitionInstance, supportsSpeechRecognition: supported } = initializeSpeechRecognition();
    setRecognition(recognitionInstance);
    setSupportsSpeechRecognition(supported);
    
    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      setSynth(window.speechSynthesis);
    }
    
    // Load saved settings
    setVoiceSettings(loadSavedSettings());
    
    return () => {
      stopListening();
      if (synth && synth.speaking) {
        synth.cancel();
      }
    };
  }, []);

  useEffect(() => {
    setupRecognitionListeners(recognition, setTranscript, setIsListening);
  }, [recognition]);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    saveSettings(voiceSettings);
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
    
    const utterance = createUtterance(text, voiceSettings);
    
    // Try to find a matching voice based on settings
    const selectedVoice = findVoice(synth, voiceSettings.voice);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
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
