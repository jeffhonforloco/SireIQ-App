
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';

const SystemSettings = () => {
  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-xl">
          <Settings className="w-5 h-5 mr-2 text-sireiq-cyan" />
          System Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* System settings content would be displayed here */}
        <p className="text-sireiq-light/70">Configure system-wide settings and preferences</p>
      </CardContent>
    </Card>
  );
};

export default SystemSettings;
