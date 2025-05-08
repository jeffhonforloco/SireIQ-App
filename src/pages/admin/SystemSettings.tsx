
import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';
import { Settings, Save, RefreshCw, Database } from 'lucide-react';

const SystemSettingsPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleSaveSettings = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('System settings saved successfully');
    }, 1500);
  };
  
  const handleClearCache = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Cache cleared successfully');
    }, 1500);
  };

  return (
    <AdminLayout title="System Settings">
      <h1 className="text-2xl font-bold text-sireiq-light mb-6">System Settings</h1>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure application-wide settings</CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <div className="grid gap-6">
                  <FormField name="siteName">
                    <FormItem>
                      <FormLabel>Site Name</FormLabel>
                      <FormControl>
                        <Input defaultValue="SireIQ" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        The name displayed in the browser title bar and throughout the application
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="maintenanceMode">
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-sireiq-accent/30 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Maintenance Mode</FormLabel>
                        <FormDescription className="text-sireiq-light/50">
                          When enabled, users will see a maintenance page
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch />
                      </FormControl>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="debugMode">
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-sireiq-accent/30 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Debug Mode</FormLabel>
                        <FormDescription className="text-sireiq-light/50">
                          Show detailed error messages and logs for debugging
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch />
                      </FormControl>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="cache">
                    <FormItem>
                      <FormLabel>Cache Timeout (minutes)</FormLabel>
                      <FormControl>
                        <Input type="number" defaultValue="60" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        How long items should remain in cache before expiring
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={handleClearCache}
                      disabled={isLoading}
                      className="border-sireiq-accent/30"
                    >
                      <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                      Clear Cache
                    </Button>
                    <Button
                      onClick={handleSaveSettings}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Settings
                    </Button>
                  </div>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security policies and features</CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <div className="grid gap-6">
                  <FormField name="twoFactorAuth">
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-sireiq-accent/30 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Require Two-Factor Authentication</FormLabel>
                        <FormDescription className="text-sireiq-light/50">
                          Force users to set up 2FA for their accounts
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch defaultChecked />
                      </FormControl>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="passwordPolicy">
                    <FormItem>
                      <FormLabel>Password Policy</FormLabel>
                      <FormControl>
                        <select className="w-full h-10 rounded-md border border-input bg-sireiq-dark px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-sireiq-accent/30">
                          <option value="standard">Standard</option>
                          <option value="strict" selected>Strict</option>
                          <option value="enterprise">Enterprise</option>
                        </select>
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        Password complexity requirements for users
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="sessionTimeout">
                    <FormItem>
                      <FormLabel>Session Timeout (minutes)</FormLabel>
                      <FormControl>
                        <Input type="number" defaultValue="30" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        How long before inactive users are automatically logged out
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="ipRestriction">
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-sireiq-accent/30 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">IP Address Restriction</FormLabel>
                        <FormDescription className="text-sireiq-light/50">
                          Limit login access to specific IP addresses
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch />
                      </FormControl>
                    </FormItem>
                  </FormField>
                  
                  <div className="flex justify-end">
                    <Button
                      onClick={handleSaveSettings}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Settings
                    </Button>
                  </div>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>Manage API keys and access</CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <div className="grid gap-6">
                  <FormField name="apiEnabled">
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-sireiq-accent/30 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Enable Public API</FormLabel>
                        <FormDescription className="text-sireiq-light/50">
                          Allow external applications to access the API
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch defaultChecked />
                      </FormControl>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="apiKey">
                    <FormItem>
                      <FormLabel>API Key</FormLabel>
                      <div className="flex gap-2">
                        <FormControl>
                          <Input
                            type="password"
                            value="sk_live_7f4c38a9d2e96c31a4f219f73a"
                            readOnly
                            className="bg-sireiq-dark border-sireiq-accent/30 flex-1"
                          />
                        </FormControl>
                        <Button variant="outline" className="border-sireiq-accent/30">
                          Regenerate
                        </Button>
                      </div>
                      <FormDescription className="text-sireiq-light/50">
                        Your API key for authentication (keep this secure)
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="rateLimiting">
                    <FormItem>
                      <FormLabel>Rate Limiting (requests per minute)</FormLabel>
                      <FormControl>
                        <Input type="number" defaultValue="100" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        Maximum number of API requests allowed per minute
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="webhookUrl">
                    <FormItem>
                      <FormLabel>Webhook URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://your-app.com/webhook" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        URL to receive event notifications
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <div className="flex justify-end">
                    <Button
                      onClick={handleSaveSettings}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save API Settings
                    </Button>
                  </div>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="database">
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader>
              <CardTitle>Database Settings</CardTitle>
              <CardDescription>Configure database connections and backups</CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <div className="grid gap-6">
                  <FormField name="databaseBackup">
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-sireiq-accent/30 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Automated Backups</FormLabel>
                        <FormDescription className="text-sireiq-light/50">
                          Automatically backup the database on schedule
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch defaultChecked />
                      </FormControl>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="backupFrequency">
                    <FormItem>
                      <FormLabel>Backup Frequency</FormLabel>
                      <FormControl>
                        <select className="w-full h-10 rounded-md border border-input bg-sireiq-dark px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-sireiq-accent/30">
                          <option value="daily">Daily</option>
                          <option value="weekly" selected>Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        How often database backups should run
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <FormField name="maxConnections">
                    <FormItem>
                      <FormLabel>Maximum Connections</FormLabel>
                      <FormControl>
                        <Input type="number" defaultValue="100" className="bg-sireiq-dark border-sireiq-accent/30" />
                      </FormControl>
                      <FormDescription className="text-sireiq-light/50">
                        Maximum number of simultaneous database connections
                      </FormDescription>
                    </FormItem>
                  </FormField>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline"
                      className="border-sireiq-accent/30"
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Run Backup Now
                    </Button>
                    <Button
                      onClick={handleSaveSettings}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Database Settings
                    </Button>
                  </div>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default SystemSettingsPage;
