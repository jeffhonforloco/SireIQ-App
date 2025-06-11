
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Lock, Shield, Key, Users, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const AuthenticationSecurity = () => {
  const [settings, setSettings] = useState({
    mfaRequired: true,
    ssoEnabled: true,
    passwordPolicy: true,
    sessionTimeout: true,
    deviceTrust: false,
    biometricAuth: false
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast.success(`${key} ${settings[key] ? 'disabled' : 'enabled'}`);
  };

  const securityItems = [
    {
      key: 'mfaRequired' as const,
      title: 'Multi-Factor Authentication',
      description: 'Require MFA for all admin accounts',
      icon: Shield,
      critical: true
    },
    {
      key: 'ssoEnabled' as const,
      title: 'Single Sign-On (SSO)',
      description: 'Enterprise SSO integration',
      icon: Key,
      critical: false
    },
    {
      key: 'passwordPolicy' as const,
      title: 'Strong Password Policy',
      description: 'Enforce complex password requirements',
      icon: Lock,
      critical: true
    },
    {
      key: 'sessionTimeout' as const,
      title: 'Session Timeout',
      description: 'Auto-logout after inactivity',
      icon: Users,
      critical: false
    },
    {
      key: 'deviceTrust' as const,
      title: 'Device Trust Management',
      description: 'Track and manage trusted devices',
      icon: Shield,
      critical: false
    },
    {
      key: 'biometricAuth' as const,
      title: 'Biometric Authentication',
      description: 'Fingerprint and face recognition',
      icon: Key,
      critical: false
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Authentication & Access Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {securityItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.key} className="flex items-center justify-between p-4 border border-sireiq-accent/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 text-sireiq-cyan" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{item.title}</h4>
                      {item.critical && (
                        <Badge variant="destructive" className="text-xs">Critical</Badge>
                      )}
                    </div>
                    <p className="text-sm text-sireiq-light/70">{item.description}</p>
                  </div>
                </div>
                <Switch
                  checked={settings[item.key]}
                  onCheckedChange={() => handleToggle(item.key)}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>Security Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { text: "Enable MFA for all administrative accounts", priority: "high" },
              { text: "Implement regular password rotation policy", priority: "medium" },
              { text: "Set up automated security monitoring", priority: "high" },
              { text: "Configure device trust management", priority: "low" }
            ].map((rec, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-sireiq-accent/5 rounded-lg">
                <AlertTriangle className={`w-4 h-4 ${
                  rec.priority === 'high' ? 'text-red-400' : 
                  rec.priority === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                }`} />
                <span className="text-sm">{rec.text}</span>
                <Badge className={`ml-auto ${
                  rec.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                  rec.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {rec.priority}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthenticationSecurity;
