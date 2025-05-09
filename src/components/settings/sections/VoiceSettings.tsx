
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const VoiceSettings = () => {
  const navigate = useNavigate();
  const { preferences, setPreferences } = useRole();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ Voice Assistant</h2>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Enable Voice Input</p>
              <p className="text-sm text-sireiq-light/60">Talk to SireIQ with your voice</p>
            </div>
            <Switch 
              checked={preferences.voiceEnabled || false} 
              onCheckedChange={(checked) => handlePreferenceChange('voiceEnabled', checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Voice Responses</p>
              <p className="text-sm text-sireiq-light/60">Let SireIQ respond with audio</p>
            </div>
            <Switch 
              checked={preferences.voiceFeedback || false} 
              onCheckedChange={(checked) => handlePreferenceChange('voiceFeedback', checked)}
            />
          </div>
          <div className="mt-3">
            <h3 className="font-medium mb-2">Voice Settings</h3>
            <div className="p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
              <p className="text-sm">To configure voice characteristics, go to the Voice Assistant page</p>
              <Button 
                variant="outline" 
                className="mt-3 border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                onClick={() => navigate('/features/voice-assistant')}
              >
                Voice Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSettings;
