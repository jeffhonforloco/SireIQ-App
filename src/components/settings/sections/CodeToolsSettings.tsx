
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const CodeToolsSettings = () => {
  const navigate = useNavigate();
  const { role, preferences, setPreferences } = useRole();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  return (
    <div className="space-y-6">
      {(role === 'developer' || role === 'enterprise' || role === 'admin') ? (
        <>
          <div>
            <h2 className="text-lg font-medium mb-1">SireIQ Developer Tools</h2>
            <div className="flex flex-col gap-5 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Code Auto-Complete</p>
                  <p className="text-sm text-sireiq-light/60">Enable AI code suggestions</p>
                </div>
                <Switch 
                  checked={preferences.codeAutoComplete || false} 
                  onCheckedChange={(checked) => handlePreferenceChange('codeAutoComplete', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">API Access</p>
                  <p className="text-sm text-sireiq-light/60">Manage API tokens and access</p>
                </div>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  Manage
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Integration Settings</p>
                  <p className="text-sm text-sireiq-light/60">Configure third-party integrations</p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                  onClick={() => navigate('/enterprise/integrations')}
                >
                  Configure
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <Shield className="w-12 h-12 text-sireiq-accent/40 mb-4" />
          <h3 className="text-lg font-medium mb-2">Developer Tools</h3>
          <p className="text-center text-sireiq-light/60 mb-4">
            Upgrade to Developer or Enterprise plan to access code tools
          </p>
          <Button className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
            Upgrade Plan
          </Button>
        </div>
      )}
    </div>
  );
};

export default CodeToolsSettings;
