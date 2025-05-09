
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
  ChevronRight,
  Shield,
  Zap,
  FileCode,
  MessageSquare,
  BookOpen
} from 'lucide-react';

// Settings sidebar items with SireIQ specific sections
const sidebarItems = [
  { id: 'general', label: 'General', icon: Settings },
  { id: 'ai-models', label: 'AI Models', icon: Zap },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'personalization', label: 'Personalization', icon: Keyboard },
  { id: 'speech', label: 'Voice Assistant', icon: MessageSquare },
  { id: 'data-controls', label: 'Data & Privacy', icon: Database },
  { id: 'builder-profile', label: 'Builder Profile', icon: UserCircle },
  { id: 'code-tools', label: 'Code Tools', icon: FileCode },
  { id: 'documentation', label: 'Documentation', icon: BookOpen },
  { id: 'security', label: 'Security', icon: Shield },
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
      case 'ai-models':
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
      case 'notifications':
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
      case 'personalization':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">SireIQ Interface</h2>
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
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-1">Chat Experience</h2>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Show code blocks</p>
                    <p className="text-sm text-sireiq-light/60">Display code in chat responses</p>
                  </div>
                  <Switch 
                    checked={preferences.showCode || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('showCode', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Follow-up suggestions</p>
                    <p className="text-sm text-sireiq-light/60">Show suggested follow-up questions</p>
                  </div>
                  <Switch 
                    checked={preferences.showSuggestions || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('showSuggestions', checked)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 'speech':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">SireIQ Voice Assistant</h2>
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Voice Input</p>
                    <p className="text-sm text-sireiq-light/60">Talk to SireIQ with your voice</p>
                  </div>
                  <Switch 
                    checked={preferences.voiceEnabled || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('voiceEnabled', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Voice Responses</p>
                    <p className="text-sm text-sireiq-light/60">Let SireIQ respond with audio</p>
                  </div>
                  <Switch 
                    checked={preferences.voiceFeedback || false} 
                    onCheckedChange={(checked) => handlePreferenceChange('voiceFeedback', checked)}
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-medium mb-2">Voice Settings</h3>
                  <div className="p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
                    <p className="text-sm">To configure voice characteristics, go to the Voice Assistant page</p>
                    <Button 
                      variant="outline" 
                      className="mt-3 border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                      onClick={() => navigate('/features/voice-assistant')}
                    >
                      Voice Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'data-controls':
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
      case 'code-tools':
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
      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">SireIQ Account Security</h2>
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
            
            {(role === 'enterprise' || role === 'admin') && (
              <div>
                <h2 className="text-lg font-medium mb-1">Enterprise Security</h2>
                <div className="flex items-center justify-between mt-4 p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
                  <div>
                    <p className="font-medium">Advanced Security Controls</p>
                    <p className="text-sm text-sireiq-light/60">Configure enterprise-grade security</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                    onClick={() => navigate('/features/enterprise-security')}
                  >
                    Configure
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      case 'documentation':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-1">SireIQ Documentation</h2>
              <p className="text-sm text-sireiq-light/70 mb-4">Access resources to get the most out of SireIQ</p>
              
              <div className="grid grid-cols-1 gap-3 mt-4">
                <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-sireiq-cyan" />
                    <div>
                      <p className="font-medium">User Guide</p>
                      <p className="text-sm text-sireiq-light/60">Complete documentation for SireIQ</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </div>
                
                <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-sireiq-cyan" />
                    <div>
                      <p className="font-medium">Community Forums</p>
                      <p className="text-sm text-sireiq-light/60">Ask questions and share ideas</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </div>
                
                {(role === 'developer' || role === 'enterprise' || role === 'admin') && (
                  <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FileCode className="w-5 h-5 text-sireiq-cyan" />
                      <div>
                        <p className="font-medium">API Documentation</p>
                        <p className="text-sm text-sireiq-light/60">Integrate with SireIQ API</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
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
          <h1 className="text-xl font-medium">SireIQ Settings</h1>
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
