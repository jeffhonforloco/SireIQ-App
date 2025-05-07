
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useVoiceAssistant } from '@/hooks/useVoiceAssistant';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const VoiceSettingsPanel: React.FC = () => {
  const { voiceSettings, updateVoiceSettings } = useVoiceAssistant();
  const [apiKey, setApiKey] = useState('');
  
  const handleVoiceChange = (voice: string) => {
    updateVoiceSettings({ voice });
  };
  
  const handleVolumeChange = (value: number[]) => {
    updateVoiceSettings({ volume: value[0] / 100 });
  };
  
  const handleRateChange = (value: number[]) => {
    updateVoiceSettings({ rate: value[0] / 100 * 2 }); // 0 to 2 range
  };
  
  const handlePitchChange = (value: number[]) => {
    updateVoiceSettings({ pitch: value[0] / 100 * 2 }); // 0 to 2 range
  };
  
  const handleAutoResponseToggle = (checked: boolean) => {
    updateVoiceSettings({ autoResponse: checked });
  };
  
  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      // In a real app, you would save this securely
      toast.success("API key saved");
    } else {
      toast.error("Please enter a valid API key");
    }
  };
  
  return (
    <div className="p-6 space-y-6">
      <h3 className="text-xl font-semibold">Voice Settings</h3>
      
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="voice-selection">Voice</Label>
          <Select 
            value={voiceSettings.voice} 
            onValueChange={handleVoiceChange}
          >
            <SelectTrigger id="voice-selection" className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent className="bg-sireiq-darker border-sireiq-accent/30">
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="neutral">Neutral</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="volume-slider">Volume</Label>
            <span className="text-sm text-sireiq-light/70">{Math.round(voiceSettings.volume * 100)}%</span>
          </div>
          <Slider
            id="volume-slider"
            defaultValue={[voiceSettings.volume * 100]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="py-4"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="rate-slider">Speech Rate</Label>
            <span className="text-sm text-sireiq-light/70">{Math.round(voiceSettings.rate * 100)}%</span>
          </div>
          <Slider
            id="rate-slider"
            defaultValue={[voiceSettings.rate * 50]}
            max={100}
            step={1}
            onValueChange={handleRateChange}
            className="py-4"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="pitch-slider">Pitch</Label>
            <span className="text-sm text-sireiq-light/70">{Math.round(voiceSettings.pitch * 100)}%</span>
          </div>
          <Slider
            id="pitch-slider"
            defaultValue={[voiceSettings.pitch * 50]}
            max={100}
            step={1}
            onValueChange={handlePitchChange}
            className="py-4"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-response" className="cursor-pointer">Auto-respond with voice</Label>
          <Switch
            id="auto-response"
            checked={voiceSettings.autoResponse}
            onCheckedChange={handleAutoResponseToggle}
          />
        </div>
        
        <div className="space-y-2 pt-4 border-t border-sireiq-accent/30">
          <Label htmlFor="api-key">Voice Service API Key (Optional)</Label>
          <div className="flex gap-2">
            <input
              id="api-key"
              type="password"
              className="w-full p-2 rounded-md bg-sireiq-accent/10 border border-sireiq-accent/30"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your API key"
            />
            <Button onClick={handleSaveApiKey}>Save</Button>
          </div>
          <p className="text-xs text-sireiq-light/50">
            Add your API key to unlock premium voice features
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceSettingsPanel;
