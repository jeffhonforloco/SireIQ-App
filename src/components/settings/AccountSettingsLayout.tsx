
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

import SettingsSidebar from './SettingsSidebar';
import SettingsContent from './SettingsContent';

const AccountSettingsLayout = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('general');

  // Handle close settings
  const handleCloseSettings = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sireiq-dark/80 backdrop-blur-sm text-sireiq-light p-4">
      <Helmet>
        <title>SireIQ | Settings</title>
        <meta name="description" content="Manage your SireIQ account settings" />
      </Helmet>
      
      {/* Modal-like settings card */}
      <Card className="max-w-3xl w-full bg-sireiq-darker border border-sireiq-accent/20 rounded-lg shadow-xl overflow-hidden">
        {/* Header with title and close button */}
        <div className="p-4 flex items-center justify-between border-b border-sireiq-accent/20">
          <h1 className="text-xl font-medium">SireIQ Settings</h1>
          <Button variant="ghost" size="icon" onClick={handleCloseSettings} className="hover:bg-sireiq-accent/10">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Settings content */}
        <div className="flex h-[70vh]">
          {/* Sidebar */}
          <SettingsSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          
          {/* Main content */}
          <div className="flex-1 overflow-y-auto p-6">
            <SettingsContent activeSection={activeSection} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccountSettingsLayout;
