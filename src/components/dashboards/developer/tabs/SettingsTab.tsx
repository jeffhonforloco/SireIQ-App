
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const SettingsTab = () => {
  return (
    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
      <CardHeader>
        <CardTitle className="text-base font-medium">Project Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
          <div>
            <h3 className="font-medium">Environment</h3>
            <p className="text-sm text-sireiq-light/70">Development</p>
          </div>
          <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
            Change
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
          <div>
            <h3 className="font-medium">API Authentication</h3>
            <p className="text-sm text-sireiq-light/70">OAuth 2.0</p>
          </div>
          <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
            Configure
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
          <div>
            <h3 className="font-medium">Deployment Target</h3>
            <p className="text-sm text-sireiq-light/70">Edge Network</p>
          </div>
          <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
            Change
          </Button>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
            <Settings className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsTab;
