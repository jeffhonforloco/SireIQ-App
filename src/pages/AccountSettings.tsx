
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRole } from '@/contexts/RoleContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { User, Bell, Shield, Keyboard } from 'lucide-react';

const AccountSettings = () => {
  const { role, preferences, setPreferences } = useRole();
  
  // Handle preference changes
  const handlePreferenceChange = (key: string, value: boolean | string) => {
    setPreferences({ [key as keyof typeof preferences]: value });
    toast.success(`Preference updated successfully`);
  };
  
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ | Account Settings</title>
        <meta name="description" content="Manage your SireIQ account settings" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto pt-28 pb-20 px-4 md:px-6">
        <h1 className="text-2xl font-bold text-gradient mb-6">Account Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section - Left Side */}
          <Card className="p-6 bg-sireiq-darker border border-sireiq-accent/20">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="w-24 h-24 border-2 border-sireiq-accent/30">
                <AvatarImage src="/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png" />
                <AvatarFallback className="bg-sireiq-accent/20 text-sireiq-cyan text-xl">
                  {role?.substring(0, 2).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-1">
                  {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Guest'} Account
                </h2>
                <p className="text-sireiq-light/60 text-sm mb-4">
                  {role === 'developer' ? 'Developer Access' : 
                   role === 'enterprise' ? 'Enterprise Access' : 
                   role === 'user' ? 'Standard Access' : 'Limited Access'}
                </p>
                
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  Upload Photo
                </Button>
              </div>
              
              {role && (
                <div className="w-full mt-4 pt-4 border-t border-sireiq-accent/20">
                  <div className="flex justify-between items-center mb-2">
                    <span>Account Type</span>
                    <span className="text-sireiq-cyan">{role.charAt(0).toUpperCase() + role.slice(1)}</span>
                  </div>
                  
                  {role !== 'enterprise' && (
                    <Button className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker rounded-full mt-2">
                      Upgrade Account
                    </Button>
                  )}
                </div>
              )}
            </div>
          </Card>
          
          {/* Settings Tabs - Right Side */}
          <div className="col-span-1 lg:col-span-2">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-sireiq-darker/70 border border-sireiq-accent/20">
                <TabsTrigger value="profile" className="data-[state=active]:bg-sireiq-accent/10 data-[state=active]:text-sireiq-cyan">
                  <User className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="preferences" className="data-[state=active]:bg-sireiq-accent/10 data-[state=active]:text-sireiq-cyan">
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Preferences</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-sireiq-accent/10 data-[state=active]:text-sireiq-cyan">
                  <Bell className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-6">
                <Card className="p-6 bg-sireiq-darker border border-sireiq-accent/20">
                  <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input id="bio" placeholder="Tell us about yourself" className="bg-sireiq-dark border-sireiq-accent/30" />
                    </div>
                    
                    <Button className="bg-sireiq-accent/80 hover:bg-sireiq-accent text-white mt-2">
                      Save Changes
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-6 bg-sireiq-darker border border-sireiq-accent/20">
                  <h3 className="text-lg font-medium mb-4">Password</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="bg-sireiq-dark border-sireiq-accent/30" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </div>
                    </div>
                    
                    <Button className="bg-sireiq-accent/80 hover:bg-sireiq-accent text-white mt-2">
                      Update Password
                    </Button>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences" className="space-y-6">
                <Card className="p-6 bg-sireiq-darker border border-sireiq-accent/20">
                  <h3 className="text-lg font-medium mb-4">Display Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-sireiq-light/60">Use dark theme throughout the application</p>
                      </div>
                      <Switch 
                        checked={preferences.darkMode} 
                        onCheckedChange={(checked) => handlePreferenceChange('darkMode', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-sireiq-accent/10">
                      <div>
                        <p className="font-medium">AI Model</p>
                        <p className="text-sm text-sireiq-light/60">Select your preferred AI model</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <Button 
                          variant={preferences.aiModel === 'fast' ? 'default' : 'outline'}
                          onClick={() => handlePreferenceChange('aiModel', 'fast')}
                          className="h-8 px-3"
                        >
                          Fast
                        </Button>
                        <Button 
                          variant={preferences.aiModel === 'balanced' ? 'default' : 'outline'}
                          onClick={() => handlePreferenceChange('aiModel', 'balanced')}
                          className="h-8 px-3"
                        >
                          Balanced
                        </Button>
                        <Button 
                          variant={preferences.aiModel === 'powerful' ? 'default' : 'outline'}
                          onClick={() => handlePreferenceChange('aiModel', 'powerful')}
                          className="h-8 px-3"
                        >
                          Powerful
                        </Button>
                      </div>
                    </div>
                    
                    {role === 'developer' && (
                      <div className="flex items-center justify-between pt-2 border-t border-sireiq-accent/10">
                        <div>
                          <p className="font-medium">Code Auto-Complete</p>
                          <p className="text-sm text-sireiq-light/60">Enable AI-powered code suggestions</p>
                        </div>
                        <Switch 
                          checked={preferences.codeAutoComplete} 
                          onCheckedChange={(checked) => handlePreferenceChange('codeAutoComplete', checked)}
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-6">
                <Card className="p-6 bg-sireiq-darker border border-sireiq-accent/20">
                  <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-sireiq-light/60">Receive important updates via email</p>
                      </div>
                      <Switch 
                        checked={preferences.notifications} 
                        onCheckedChange={(checked) => handlePreferenceChange('notifications', checked)}
                      />
                    </div>
                    
                    {(role === 'enterprise') && (
                      <div className="flex items-center justify-between pt-2 border-t border-sireiq-accent/10">
                        <div>
                          <p className="font-medium">Team Updates</p>
                          <p className="text-sm text-sireiq-light/60">Get notifications about team activity</p>
                        </div>
                        <Switch 
                          checked={preferences.teamUpdates} 
                          onCheckedChange={(checked) => handlePreferenceChange('teamUpdates', checked)}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-2 border-t border-sireiq-accent/10">
                      <div>
                        <p className="font-medium">Product Updates</p>
                        <p className="text-sm text-sireiq-light/60">Learn about new features and improvements</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-sireiq-darker border border-sireiq-accent/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Security Alerts</h3>
                      <p className="text-sm text-sireiq-light/60">Receive alerts about security-related events</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountSettings;
