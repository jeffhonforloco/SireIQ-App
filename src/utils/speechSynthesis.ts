
import { VoiceSettings } from '@/types/voice-assistant';

export const findVoice = (synth: SpeechSynthesis, voicePreference: string): SpeechSynthesisVoice | undefined => {
  if (synth.getVoices().length === 0) return undefined;
  
  const voices = synth.getVoices();
  let selectedVoice;
  
  // Filter voices based on preference
  if (voicePreference === 'male') {
    selectedVoice = voices.find(voice => voice.name.toLowerCase().includes('male'));
  } else if (voicePreference === 'female') {
    selectedVoice = voices.find(voice => voice.name.toLowerCase().includes('female'));
  }
  
  // If no matching voice found, try to find one in the user's language
  if (!selectedVoice) {
    selectedVoice = voices.find(voice => voice.lang === 'en-US');
  }
  
  return selectedVoice;
};

export const createUtterance = (text: string, settings: VoiceSettings): SpeechSynthesisUtterance => {
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Apply voice settings
  utterance.volume = settings.volume;
  utterance.rate = settings.rate;
  utterance.pitch = settings.pitch;
  
  return utterance;
};
