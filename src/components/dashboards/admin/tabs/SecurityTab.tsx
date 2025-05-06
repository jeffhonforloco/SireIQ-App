
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ShieldCheck, ShieldX, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

type SecurityTabProps = {
  subTab: string;
};

const SecurityTab = ({ subTab }: SecurityTabProps) => {
  // Sample security settings
  const securitySettings = [
    { id: "2fa", label: "Enforce Two-Factor Authentication", value: true },
    { id: "password_policy", label: "Strong Password Policy", value: true },
    { id: "session_timeout", label: "Auto Session Timeout (30 minutes)", value: false },
    { id: "ip_restriction", label: "IP Address Restrictions", value: false },
  ];
  
  // Sample authentication methods
  const authMethods = [
    { name: "Email/Password", enabled: true, primary: true },
    { name: "Google OAuth", enabled: true, primary: false },
    { name: "GitHub OAuth", enabled: false, primary: false },
    { name: "Microsoft OAuth", enabled: false, primary: false },
    { name: "SAML SSO", enabled: false, primary: false },
  ];
  
  // Sample access controls
  const accessControls = [
    { resource: "User Management", roles: ["Admin"], access: "Full" },
    { resource: "Analytics", roles: ["Admin", "Manager"], access: "Read" },
    { resource: "Settings", roles: ["Admin"], access: "Full" },
    { resource: "Content", roles: ["Admin", "Editor", "Contributor"], access: "Varies" },
    { resource: "API", roles: ["Admin", "Developer"], access: "Full" },
  ];
  
  // Sample audit logs
  const auditLogs = [
    { user: "admin@example.com", action: "Changed password policy", timestamp: "May 6, 2025 09:23 AM", ip: "192.168.1.1" },
    { user: "jane@example.com", action: "User login", timestamp: "May 6, 2025 08:17 AM", ip: "192.168.1.15" },
    { user: "admin@example.com", action: "Added new user", timestamp: "May 5, 2025 04:32 PM", ip: "192.168.1.1" },
    { user: "john@example.com", action: "Failed login attempt", timestamp: "May 5, 2025 02:14 PM", ip: "192.168.1.22" },
    { user: "system", action: "System update", timestamp: "May 5, 2025 01:00 AM", ip: "System" },
  ];

  // Render content based on selected tab
  const renderContent = () => {
    switch (subTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <ShieldCheck className="w-10 h-10 text-green-500 mb-2" />
                    <p className="text-sm text-sireiq-light/70">Security Status</p>
                    <p className="text-xl font-semibold text-green-500">Good</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Activity className="w-10 h-10 text-sireiq-cyan mb-2" />
                    <p className="text-sm text-sireiq-light/70">Issues Detected</p>
                    <p className="text-xl font-semibold">2 Minor</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Shield className="w-10 h-10 text-sireiq-cyan mb-2" />
                    <p className="text-sm text-sireiq-light/70">Last Security Scan</p>
                    <p className="text-xl font-semibold">12 hours ago</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Security Settings</CardTitle>
                <Shield className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securitySettings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between">
                      <label htmlFor={setting.id} className="cursor-pointer">
                        {setting.label}
                      </label>
                      <Switch id={setting.id} checked={setting.value} />
                    </div>
                  ))}
                  
                  <div className="pt-4">
                    <Button className="bg-sireiq-cyan text-sireiq-darker">
                      Run Security Scan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'authentication':
        return (
          <div className="space-y-6">
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Authentication Methods</CardTitle>
                <ShieldCheck className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {authMethods.map((method, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-sireiq-accent/10 pb-3">
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="font-medium">{method.name}</span>
                          {method.primary && (
                            <Badge className="ml-2 bg-sireiq-accent/20 text-sireiq-cyan">Primary</Badge>
                          )}
                        </div>
                        <span className="text-xs text-sireiq-light/70 mt-1">
                          {method.enabled ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                      <div>
                        <Switch checked={method.enabled} />
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 flex justify-between items-center">
                    <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                      Configure SSO
                    </Button>
                    <Button className="bg-sireiq-cyan text-sireiq-darker">
                      Add Auth Provider
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Password Policy</CardTitle>
                <Shield className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="min_length" className="cursor-pointer">
                      Minimum Length (8 characters)
                    </label>
                    <Switch id="min_length" checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label htmlFor="uppercase" className="cursor-pointer">
                      Require Uppercase Letter
                    </label>
                    <Switch id="uppercase" checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label htmlFor="number" className="cursor-pointer">
                      Require Number
                    </label>
                    <Switch id="number" checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label htmlFor="special" className="cursor-pointer">
                      Require Special Character
                    </label>
                    <Switch id="special" checked={false} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label htmlFor="expiry" className="cursor-pointer">
                      Password Expires After 90 Days
                    </label>
                    <Switch id="expiry" checked={false} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'access':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Resource Access Controls</h3>
              <Button size="sm" variant="outline">
                Modify Access Controls
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-3 font-medium border-b border-sireiq-accent/20">
                <div>Resource</div>
                <div>Roles</div>
                <div>Access Level</div>
              </div>
              
              {accessControls.map((control, index) => (
                <div key={index} className="p-4 grid grid-cols-3 items-center hover:bg-sireiq-accent/10">
                  <div>{control.resource}</div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {control.roles.map((role) => (
                        <Badge key={role} variant="outline" className="border-sireiq-cyan/30 bg-sireiq-accent/10">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-sireiq-light/70">{control.access}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'audit':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Audit Logs</h3>
              <Button size="sm" variant="outline">
                Export Logs
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-4 font-medium border-b border-sireiq-accent/20">
                <div>User</div>
                <div>Action</div>
                <div>Timestamp</div>
                <div>IP Address</div>
              </div>
              
              {auditLogs.map((log, index) => (
                <div key={index} className="p-4 grid grid-cols-4 items-center hover:bg-sireiq-accent/10">
                  <div>{log.user}</div>
                  <div className="text-sireiq-light/70">{log.action}</div>
                  <div className="text-sireiq-light/70">{log.timestamp}</div>
                  <div className="text-sireiq-light/70">{log.ip}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return renderContent();
};

export default SecurityTab;
