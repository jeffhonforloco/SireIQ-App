
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const GeneralSettings = () => {
  const { preferences, setPreferences } = useRole();
  const navigate = useNavigate();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ Settings</h2>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Always show code when using data analyst</p>
              <p className="text-sm text-sireiq-light/60">Display code snippets in analyst responses</p>
            </div>
            <Switch 
              checked={preferences.showCode || false} 
              onCheckedChange={(checked) => handlePreferenceChange('showCode', checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Show follow up suggestions in chats</p>
              <p className="text-sm text-sireiq-light/60">Display follow-up question suggestions</p>
            </div>
            <Switch 
              checked={preferences.showSuggestions || false} 
              onCheckedChange={(checked) => handlePreferenceChange('showSuggestions', checked)}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-medium mb-1">Interface Language</h2>
        <div className="flex items-center justify-between mt-2">
          <span>Platform language</span>
          <div className="flex items-center gap-1">
            <span className="text-sm text-sireiq-light/60">English</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-medium mb-1">Chat Management</h2>
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="font-medium">Manage archived chats</p>
            <p className="text-sm text-sireiq-light/60">View and restore past conversations</p>
          </div>
          <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
            Manage
          </Button>
        </div>
        
        <div className="mt-6 pt-2 flex items-center justify-between">
          <div>
            <p className="font-medium">Archive all chats</p>
            <p className="text-sm text-sireiq-light/60">Move all conversations to archive</p>
          </div>
          <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
            Archive all
          </Button>
        </div>
        
        <div className="mt-6 pt-2 flex items-center justify-between">
          <div>
            <p className="font-medium">Delete all chats</p>
            <p className="text-sm text-sireiq-light/60">Permanently remove all conversations</p>
          </div>
          <Button variant="destructive" size="sm" className="bg-red-500/80 hover:bg-red-600">
            Delete all
          </Button>
        </div>
        
        <div className="mt-6 pt-2 flex items-center justify-between">
          <div>
            <p className="font-medium">Session management</p>
            <p className="text-sm text-sireiq-light/60">Log out of current device</p>
          </div>
          <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
