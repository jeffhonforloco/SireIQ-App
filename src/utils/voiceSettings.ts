
import { VoiceSettings } from '@/types/voice-assistant';

export const defaultVoiceSettings: VoiceSettings = {
  voice: 'female',
  volume: 1.0, // 0 to 1
  rate: 1.0, // 0.1 to 2
  pitch: 1.0, // 0.1 to 2
  autoResponse: true
};

export const loadSavedSettings = (): VoiceSettings => {
  const savedSettings = localStorage.getItem('voiceAssistantSettings');
  if (savedSettings) {
    try {
      return JSON.parse(savedSettings);
    } catch (e) {
      console.error('Failed to parse saved voice settings');
      return defaultVoiceSettings;
    }
  }
  
  return defaultVoiceSettings;
};

export const saveSettings = (settings: VoiceSettings): void => {
  localStorage.setItem('voiceAssistantSettings', JSON.stringify(settings));
};
