
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const AIModelsSettings = () => {
  const { role, preferences, setPreferences } = useRole();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ AI Model Selection</h2>
        <p className="text-sm text-sireiq-light/70 mb-4">Choose the AI engine that powers your experience</p>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
            <div>
              <p className="font-medium">Fast</p>
              <p className="text-sm text-sireiq-light/60">Quick responses for simple queries</p>
            </div>
            <Button 
              variant={preferences.aiModel === 'fast' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => handlePreferenceChange('aiModel', 'fast')}
              className={preferences.aiModel === 'fast' ? 'bg-sireiq-cyan text-sireiq-darker' : ''}
            >
              {preferences.aiModel === 'fast' ? 'Selected' : 'Select'}
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
            <div>
              <p className="font-medium">Balanced</p>
              <p className="text-sm text-sireiq-light/60">Good mix of speed and intelligence</p>
            </div>
            <Button 
              variant={preferences.aiModel === 'balanced' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => handlePreferenceChange('aiModel', 'balanced')}
              className={preferences.aiModel === 'balanced' ? 'bg-sireiq-cyan text-sireiq-darker' : ''}
            >
              {preferences.aiModel === 'balanced' ? 'Selected' : 'Select'}
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
            <div>
              <p className="font-medium">Powerful</p>
              <p className="text-sm text-sireiq-light/60">Advanced reasoning for complex tasks</p>
            </div>
            <Button 
              variant={preferences.aiModel === 'powerful' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => handlePreferenceChange('aiModel', 'powerful')}
              className={preferences.aiModel === 'powerful' ? 'bg-sireiq-cyan text-sireiq-darker' : ''}
            >
              {preferences.aiModel === 'powerful' ? 'Selected' : 'Select'}
            </Button>
          </div>
        </div>
      </div>
      
      {role === 'developer' || role === 'enterprise' ? (
        <div className="mt-6">
          <h2 className="text-lg font-medium mb-1">Developer Settings</h2>
          <div className="flex items-center justify-between mt-4 p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
            <div>
              <p className="font-medium">Code Auto-Complete</p>
              <p className="text-sm text-sireiq-light/60">Enable AI-powered code suggestions</p>
            </div>
            <Switch 
              checked={preferences.codeAutoComplete || false} 
              onCheckedChange={(checked) => handlePreferenceChange('codeAutoComplete', checked)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AIModelsSettings;
