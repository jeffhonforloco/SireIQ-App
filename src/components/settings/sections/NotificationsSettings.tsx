
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const NotificationsSettings = () => {
  const { role, preferences, setPreferences } = useRole();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ Notifications</h2>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Platform updates</p>
              <p className="text-sm text-sireiq-light/60">Receive important SireIQ updates</p>
            </div>
            <Switch 
              checked={preferences.notifications || false} 
              onCheckedChange={(checked) => handlePreferenceChange('notifications', checked)}
            />
          </div>
          {(role === 'enterprise' || role === 'admin') && (
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Team activity notifications</p>
                <p className="text-sm text-sireiq-light/60">Get alerts about team actions</p>
              </div>
              <Switch 
                checked={preferences.teamUpdates || false} 
                onCheckedChange={(checked) => handlePreferenceChange('teamUpdates', checked)}
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Feature releases</p>
              <p className="text-sm text-sireiq-light/60">Learn about new SireIQ capabilities</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
      
      <Separator className="bg-sireiq-accent/20" />
      
      <div>
        <h2 className="text-lg font-medium mb-1">Security Alerts</h2>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="font-medium">Security notifications</p>
            <p className="text-sm text-sireiq-light/60">Receive alerts about security-related events</p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettings;
