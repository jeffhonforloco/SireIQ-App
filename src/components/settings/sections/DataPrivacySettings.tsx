
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const DataPrivacySettings = () => {
  const navigate = useNavigate();
  const { role, preferences, setPreferences } = useRole();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ Data Usage</h2>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Improve SireIQ</p>
              <p className="text-sm text-sireiq-light/60">Allow your conversations to improve our AI</p>
            </div>
            <Switch 
              checked={preferences.dataSharing || false} 
              onCheckedChange={(checked) => handlePreferenceChange('dataSharing', checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Data Export</p>
              <p className="text-sm text-sireiq-light/60">Download a copy of your conversation data</p>
            </div>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              Export
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Clear All Data</p>
              <p className="text-sm text-sireiq-light/60">Remove all your personal data from SireIQ</p>
            </div>
            <Button variant="destructive" size="sm" className="bg-red-500/80 hover:bg-red-600">
              Clear Data
            </Button>
          </div>
        </div>
      </div>
      
      {(role === 'enterprise' || role === 'admin') && (
        <div>
          <h2 className="text-lg font-medium mb-1">Enterprise Data Controls</h2>
          <div className="flex items-center justify-between mt-4 p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
            <div>
              <p className="font-medium">Advanced Data Management</p>
              <p className="text-sm text-sireiq-light/60">Enterprise data handling policies</p>
            </div>
            <Button 
              variant="outline" 
              className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
              onClick={() => navigate('/enterprise/compliance-controls')}
            >
              Configure
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataPrivacySettings;
