
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Wrench, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

type SystemSettingsTabProps = {
  subTab: string;
};

const SystemSettingsTab = ({ subTab }: SystemSettingsTabProps) => {
  // Sample system settings
  const generalSettings = [
    { id: "notifications", label: "System Notifications", value: true },
    { id: "updates", label: "Automatic Updates", value: false },
    { id: "analytics", label: "Usage Analytics", value: true },
    { id: "maintenance", label: "Maintenance Mode", value: false },
  ];
  
  // Sample integrations
  const integrations = [
    { name: "GitHub", status: "Connected", lastSync: "1 hour ago" },
    { name: "Slack", status: "Connected", lastSync: "30 minutes ago" },
    { name: "Google Analytics", status: "Disconnected", lastSync: "Never" },
    { name: "AWS", status: "Connected", lastSync: "2 days ago" },
    { name: "Jira", status: "Connected", lastSync: "1 day ago" },
  ];
  
  // Sample maintenance tasks
  const maintenanceTasks = [
    { name: "Database Backup", schedule: "Daily", nextRun: "Tomorrow, 2:00 AM" },
    { name: "Log Rotation", schedule: "Weekly", nextRun: "May 10, 2025" },
    { name: "Cache Clearing", schedule: "Daily", nextRun: "Tomorrow, 1:00 AM" },
    { name: "System Updates", schedule: "Monthly", nextRun: "Jun 1, 2025" },
    { name: "Security Scan", schedule: "Weekly", nextRun: "May 10, 2025" },
  ];

  // Render content based on selected tab
  const renderContent = () => {
    switch (subTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">General Settings</CardTitle>
                <Settings className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {generalSettings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between">
                      <label htmlFor={setting.id} className="cursor-pointer">
                        {setting.label}
                      </label>
                      <Switch id={setting.id} checked={setting.value} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Connected Services</CardTitle>
                <Wrench className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {integrations.slice(0, 4).map((integration, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>{integration.name}</div>
                      <Button size="sm" variant={integration.status === "Connected" ? "outline" : "default"}>
                        {integration.status === "Connected" ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20 md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">System Status</CardTitle>
                <Server className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-sireiq-accent/5 rounded-md">
                    <p className="text-sm text-sireiq-light/70">CPU Usage</p>
                    <p className="text-2xl font-semibold">28%</p>
                    <div className="w-full bg-sireiq-accent/20 h-2 rounded-full mt-2">
                      <div className="bg-sireiq-cyan h-2 rounded-full" style={{width: '28%'}}></div>
                    </div>
                  </div>
                  <div className="p-4 bg-sireiq-accent/5 rounded-md">
                    <p className="text-sm text-sireiq-light/70">Memory Usage</p>
                    <p className="text-2xl font-semibold">42%</p>
                    <div className="w-full bg-sireiq-accent/20 h-2 rounded-full mt-2">
                      <div className="bg-sireiq-cyan h-2 rounded-full" style={{width: '42%'}}></div>
                    </div>
                  </div>
                  <div className="p-4 bg-sireiq-accent/5 rounded-md">
                    <p className="text-sm text-sireiq-light/70">Disk Space</p>
                    <p className="text-2xl font-semibold">56%</p>
                    <div className="w-full bg-sireiq-accent/20 h-2 rounded-full mt-2">
                      <div className="bg-sireiq-cyan h-2 rounded-full" style={{width: '56%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'configurations':
        return (
          <div className="space-y-6">
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">System Configurations</CardTitle>
                <Settings className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-sireiq-light/70">Site Name</label>
                      <div className="flex">
                        <input 
                          type="text" 
                          className="flex h-10 w-full rounded-md border border-sireiq-accent/30 bg-sireiq-darker px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sireiq-cyan" 
                          defaultValue="SireIQ Admin"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-sireiq-light/70">Support Email</label>
                      <div className="flex">
                        <input 
                          type="email" 
                          className="flex h-10 w-full rounded-md border border-sireiq-accent/30 bg-sireiq-darker px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sireiq-cyan" 
                          defaultValue="support@sireiq.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-sireiq-light/70">File Upload Limit (MB)</label>
                    <div className="flex">
                      <input 
                        type="number" 
                        className="flex h-10 w-full rounded-md border border-sireiq-accent/30 bg-sireiq-darker px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sireiq-cyan" 
                        defaultValue="50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-sireiq-light/70">Default Language</label>
                    <select className="flex h-10 w-full rounded-md border border-sireiq-accent/30 bg-sireiq-darker px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sireiq-cyan">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button className="bg-sireiq-cyan text-sireiq-darker">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'integrations':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Connected Services</h3>
              <Button size="sm" variant="outline">
                Add New Integration
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integrations.map((integration, index) => (
                <Card key={index} className="bg-sireiq-accent/5 border-sireiq-accent/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{integration.name}</h4>
                        <div className="flex items-center mt-1">
                          <div className={`h-2 w-2 rounded-full mr-2 ${integration.status === "Connected" ? "bg-green-500" : "bg-red-500"}`}></div>
                          <span className="text-sm text-sireiq-light/70">{integration.status}</span>
                        </div>
                        {integration.status === "Connected" && (
                          <p className="text-xs text-sireiq-light/70 mt-1">Last sync: {integration.lastSync}</p>
                        )}
                      </div>
                      <div>
                        <Button size="sm" variant={integration.status === "Connected" ? "outline" : "default"}>
                          {integration.status === "Connected" ? "Disconnect" : "Connect"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'maintenance':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Scheduled Tasks</h3>
              <Button size="sm" variant="outline">
                Schedule New Task
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-3 font-medium border-b border-sireiq-accent/20">
                <div>Task</div>
                <div>Schedule</div>
                <div>Next Run</div>
              </div>
              
              {maintenanceTasks.map((task, index) => (
                <div key={index} className="p-4 grid grid-cols-3 items-center hover:bg-sireiq-accent/10">
                  <div>{task.name}</div>
                  <div className="text-sireiq-light/70">{task.schedule}</div>
                  <div className="text-sireiq-light/70">{task.nextRun}</div>
                </div>
              ))}
            </div>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Manual Maintenance</CardTitle>
                <Wrench className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    Clear Cache
                  </Button>
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    Rebuild Index
                  </Button>
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    Run Security Scan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return renderContent();
};

export default SystemSettingsTab;
