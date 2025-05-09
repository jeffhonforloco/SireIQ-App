
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  Bell, 
  User, 
  Keyboard, 
  Database, 
  UserCircle, 
  LogOut,
  X,
  ChevronRight
} from 'lucide-react';

// Import the icons from the image
import {
  Settings as GeneralIcon,
  Bell as NotificationsIcon,
  Keyboard as PersonalizationIcon,
  Mic as SpeechIcon,
  Database as DataControlsIcon,
  UserCircle as BuilderProfileIcon,
  Share2 as ConnectedAppsIcon,
  Shield as SecurityIcon
} from 'lucide-react';

// Settings sidebar items
const sidebarItems = [
  { id: 'general', label: 'General', icon: GeneralIcon },
  { id: 'notifications', label: 'Notifications', icon: NotificationsIcon },
  { id: 'personalization', label: 'Personalization', icon: PersonalizationIcon },
  { id: 'speech', label: 'Speech', icon: SpeechIcon },
  { id: 'data-controls', label: 'Data controls', icon: DataControlsIcon },
  { id: 'builder-profile', label: 'Builder profile', icon: BuilderProfileIcon },
  { id: 'connected-apps', label: 'Connected apps', icon: ConnectedAppsIcon },
  { id: 'security', label: 'Security', icon: SecurityIcon },
];

const AccountSettings = () => {
  const { role, preferences, setPreferences } = useRole();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('general');
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };

  // Handle close settings
  const handleCloseSettings = () => {
    navigate('/dashboard');
  };

  // Render content based on active section
  const renderContent = () => {
    switch(activeSection) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">Theme</h2>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Always show code when using data analyst</p>
                  </div>
                  <Switch 
                    checked={preferences.showCode || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('showCode', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Show follow up suggestions in chats</p>
                  </div>
                  <Switch 
                    checked={preferences.showSuggestions || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('showSuggestions', checked)}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-1">Language</h2>
              <div className="flex items-center justify-between mt-2">
                <span>Auto-detect</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-sireiq-light/60">English</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-1">Archived chats</h2>
              <div className="flex items-center justify-between mt-2">
                <span>Manage</span>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  Manage
                </Button>
              </div>
              
              <div className="mt-6 pt-2 flex items-center justify-between">
                <span>Archive all chats</span>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  Archive all
                </Button>
              </div>
              
              <div className="mt-6 pt-2 flex items-center justify-between">
                <span>Delete all chats</span>
                <Button variant="destructive" size="sm" className="bg-red-500/80 hover:bg-red-600">
                  Delete all
                </Button>
              </div>
              
              <div className="mt-6 pt-2 flex items-center justify-between">
                <span>Log out on this device</span>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  Log out
                </Button>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">Email Notifications</h2>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Important updates</p>
                    <p className="text-sm text-sireiq-light/60">Receive important updates via email</p>
                  </div>
                  <Switch 
                    checked={preferences.notifications || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('notifications', checked)}
                  />
                </div>
                {role === 'enterprise' && (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Team updates</p>
                      <p className="text-sm text-sireiq-light/60">Get notifications about team activity</p>
                    </div>
                    <Switch 
                      checked={preferences.teamUpdates || false} 
                      onCheckedChange={(checked) => handlePreferenceChange('teamUpdates', checked)}
                    />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Product updates</p>
                    <p className="text-sm text-sireiq-light/60">Learn about new features and improvements</p>
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
      case 'personalization':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">Display Preferences</h2>
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">AI Model</p>
                    <p className="text-sm text-sireiq-light/60">Select your preferred AI model</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant={preferences.aiModel === 'fast' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => handlePreferenceChange('aiModel', 'fast')}
                    >
                      Fast
                    </Button>
                    <Button 
                      variant={preferences.aiModel === 'balanced' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => handlePreferenceChange('aiModel', 'balanced')}
                    >
                      Balanced
                    </Button>
                    <Button 
                      variant={preferences.aiModel === 'powerful' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => handlePreferenceChange('aiModel', 'powerful')}
                    >
                      Powerful
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'speech':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">Voice Assistant Settings</h2>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Voice Input</p>
                    <p className="text-sm text-sireiq-light/60">Use voice commands to interact with SireIQ</p>
                  </div>
                  <Switch 
                    checked={preferences.voiceEnabled || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('voiceEnabled', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Voice Feedback</p>
                    <p className="text-sm text-sireiq-light/60">Receive audio responses from SireIQ</p>
                  </div>
                  <Switch 
                    checked={preferences.voiceFeedback || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('voiceFeedback', checked)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 'data-controls':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">Data Usage</h2>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Improve SireIQ</p>
                    <p className="text-sm text-sireiq-light/60">Allow your data to be used for AI training</p>
                  </div>
                  <Switch 
                    checked={preferences.dataSharing || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('dataSharing', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Data Export</p>
                    <p className="text-sm text-sireiq-light/60">Download a copy of your data</p>
                  </div>
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    Export
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">Account Security</h2>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-sireiq-light/60">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    Setup
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Change Password</p>
                    <p className="text-sm text-sireiq-light/60">Update your password</p>
                  </div>
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    Change
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Management</p>
                    <p className="text-sm text-sireiq-light/60">View and manage active sessions</p>
                  </div>
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    Manage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-40">
            <p>Select a setting from the sidebar</p>
          </div>
        );
    }
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
          <h1 className="text-xl font-medium">Settings</h1>
          <Button variant="ghost" size="icon" onClick={handleCloseSettings} className="hover:bg-sireiq-accent/10">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Settings content */}
        <div className="flex h-[70vh]">
          {/* Sidebar */}
          <div className="w-64 border-r border-sireiq-accent/20 overflow-y-auto">
            <nav className="py-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeSection === item.id 
                      ? 'bg-sireiq-accent/10 text-sireiq-cyan' 
                      : 'hover:bg-sireiq-accent/5'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Main content */}
          <div className="flex-1 overflow-y-auto p-6">
            {renderContent()}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccountSettings;
