
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';

const PersonalizationSettings = () => {
  const { preferences, setPreferences } = useRole();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ Interface</h2>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-sireiq-light/60">Use dark theme throughout the application</p>
            </div>
            <Switch 
              checked={preferences.darkMode || false} 
              onCheckedChange={(checked) => handlePreferenceChange('darkMode', checked)}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-medium mb-1">Chat Experience</h2>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Show code blocks</p>
              <p className="text-sm text-sireiq-light/60">Display code in chat responses</p>
            </div>
            <Switch 
              checked={preferences.showCode || false} 
              onCheckedChange={(checked) => handlePreferenceChange('showCode', checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Follow-up suggestions</p>
              <p className="text-sm text-sireiq-light/60">Show suggested follow-up questions</p>
            </div>
            <Switch 
              checked={preferences.showSuggestions || false} 
              onCheckedChange={(checked) => handlePreferenceChange('showSuggestions', checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationSettings;
