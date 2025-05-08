
import React from 'react';

type SystemSettingsTabProps = {
  subTab: string;
};

const SystemSettingsTab = ({ subTab }: SystemSettingsTabProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">System Settings {subTab.charAt(0).toUpperCase() + subTab.slice(1)}</h3>
      <p className="text-sireiq-light/70">This is a placeholder for the {subTab} system settings content.</p>
      
      <div className="border border-sireiq-accent/20 rounded-lg p-6">
        <div className="h-40 flex items-center justify-center">
          <p className="text-sireiq-light/50">System settings configuration will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default SystemSettingsTab;
