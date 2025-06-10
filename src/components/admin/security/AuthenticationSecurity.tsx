
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shield, Users, Key, Lock, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface SecuritySetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  status: 'active' | 'pending' | 'disabled';
  criticality: 'high' | 'medium' | 'low';
}

const AuthenticationSecurity = () => {
  const [settings, setSettings] = useState<SecuritySetting[]>([
    {
      id: 'mfa',
      title: 'Multi-Factor Authentication (MFA)',
      description: 'Require MFA for all admin accounts',
      enabled: true,
      status: 'active',
      criticality: 'high'
    },
    {
      id: 'rbac',
      title: 'Role-Based Access Control',
      description: 'Enforce strict role separation: Super Admin, Data Scientist, Annotator, Analyst',
      enabled: true,
      status: 'active',
      criticality: 'high'
    },
    {
      id: 'oauth',
      title: 'OAuth/OpenID Connect SSO',
      description: 'Single Sign-On integration with enterprise identity providers',
      enabled: false,
      status: 'pending',
      criticality: 'medium'
    },
    {
      id: 'brute-force',
      title: 'Brute Force Protection',
      description: 'Rate limiting, account lockout, and CAPTCHA after failed attempts',
      enabled: true,
      status: 'active',
      criticality: 'high'
    },
    {
      id: 'session-management',
      title: 'Secure Session Management',
      description: 'Short session lifetimes, HTTP-only, same-site cookies',
      enabled: true,
      status: 'active',
      criticality: 'high'
    },
    {
      id: 'password-policy',
      title: 'Strong Password Policy',
      description: 'Complex passwords with minimum 12 characters, special chars, numbers',
      enabled: true,
      status: 'active',
      criticality: 'high'
    }
  ]);

  const roles = [
    { name: 'Super Admin', permissions: 'Full system access', users: 2, color: 'red' },
    { name: 'Data Scientist', permissions: 'Model management, data access', users: 8, color: 'blue' },
    { name: 'Annotator', permissions: 'Data labeling, limited dataset access', users: 15, color: 'green' },
    { name: 'Analyst', permissions: 'Read-only access, reporting', users: 12, color: 'yellow' }
  ];

  const toggleSetting = (id: string) => {
    setSettings(prev => prev.map(setting => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'disabled': return <AlertCircle className="w-4 h-4 text-red-400" />;
    }
  };

  const getCriticalityColor = (criticality: string) => {
    switch (criticality) {
      case 'high': return 'border-red-500/50 bg-red-500/10';
      case 'medium': return 'border-yellow-500/50 bg-yellow-500/10';
      case 'low': return 'border-green-500/50 bg-green-500/10';
    }
  };

  const completionRate = Math.round((settings.filter(s => s.enabled).length / settings.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header with completion rate */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Lock className="w-6 h-6 mr-3 text-sireiq-cyan" />
              Authentication & Access Control
            </div>
            <Badge variant="outline" className="text-sireiq-cyan border-sireiq-cyan/50">
              {completionRate}% Complete
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={completionRate} className="mb-4" />
          <p className="text-sireiq-light/70">
            Configure strong authentication mechanisms and role-based access controls to protect admin functionality.
          </p>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {settings.map((setting) => (
          <Card 
            key={setting.id} 
            className={`bg-sireiq-darker border ${getCriticalityColor(setting.criticality)}`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-lg">
                <div className="flex items-center">
                  {getStatusIcon(setting.status)}
                  <span className="ml-2">{setting.title}</span>
                </div>
                <Switch 
                  checked={setting.enabled}
                  onCheckedChange={() => toggleSetting(setting.id)}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-sireiq-light/70 mb-2">{setting.description}</p>
              <div className="flex justify-between items-center">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    setting.criticality === 'high' ? 'border-red-500/50 text-red-400' :
                    setting.criticality === 'medium' ? 'border-yellow-500/50 text-yellow-400' :
                    'border-green-500/50 text-green-400'
                  }`}
                >
                  {setting.criticality.toUpperCase()} PRIORITY
                </Badge>
                <Button variant="outline" size="sm" className="text-xs">
                  Configure
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Role-Based Access Control */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Role-Based Access Control (RBAC)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role, index) => (
              <div key={index} className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                <h4 className="font-semibold text-sireiq-light mb-2">{role.name}</h4>
                <p className="text-sm text-sireiq-light/70 mb-3">{role.permissions}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-sireiq-light/60">{role.users} users</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Key className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Quick Security Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
              Force Password Reset
            </Button>
            <Button variant="outline" className="border-sireiq-accent/30">
              Audit User Sessions
            </Button>
            <Button variant="outline" className="border-sireiq-accent/30">
              Review Failed Logins
            </Button>
            <Button variant="outline" className="border-sireiq-accent/30">
              Export Security Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthenticationSecurity;
