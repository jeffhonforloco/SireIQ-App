
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Globe, Shield, Lock, AlertTriangle, CheckCircle, Copy } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const URLStructureSecurity = () => {
  const [settings, setSettings] = useState({
    httpsEnforced: true,
    hstsEnabled: true,
    customAdminPath: true,
    ipWhitelisting: false,
    vpnRequired: false,
    geoBlocking: false
  });

  const [adminPath, setAdminPath] = useState('admin.sireiq.com');
  const [whitelistedIPs, setWhitelistedIPs] = useState([
    '192.168.1.0/24',
    '10.0.0.0/8',
    '203.0.113.0/24'
  ]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const securityChecks = [
    {
      name: 'HTTPS/TLS Encryption',
      status: settings.httpsEnforced,
      description: 'All traffic encrypted with TLS 1.3',
      severity: 'critical'
    },
    {
      name: 'HSTS (HTTP Strict Transport Security)',
      status: settings.hstsEnabled,
      description: 'Force HTTPS connections for enhanced security',
      severity: 'high'
    },
    {
      name: 'Non-obvious Admin Path',
      status: settings.customAdminPath,
      description: 'Custom subdomain to reduce attack surface',
      severity: 'medium'
    },
    {
      name: 'IP Whitelisting',
      status: settings.ipWhitelisting,
      description: 'Restrict access to approved IP addresses',
      severity: 'high'
    },
    {
      name: 'VPN Requirement',
      status: settings.vpnRequired,
      description: 'Require VPN connection for admin access',
      severity: 'medium'
    },
    {
      name: 'Geographic Blocking',
      status: settings.geoBlocking,
      description: 'Block access from high-risk countries',
      severity: 'low'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500/50 bg-red-500/10';
      case 'high': return 'border-orange-500/50 bg-orange-500/10';
      case 'medium': return 'border-yellow-500/50 bg-yellow-500/10';
      case 'low': return 'border-green-500/50 bg-green-500/10';
    }
  };

  const completionRate = Math.round((securityChecks.filter(check => check.status).length / securityChecks.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="w-6 h-6 mr-3 text-sireiq-cyan" />
              URL Structure & Access Security
            </div>
            <Badge variant="outline" className="text-sireiq-cyan border-sireiq-cyan/50">
              {completionRate}% Secure
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sireiq-light/70">
            Configure secure URL structure, enforce HTTPS, and implement access controls for the admin panel.
          </p>
        </CardContent>
      </Card>

      {/* Admin URL Configuration */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Admin Panel URL Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-sireiq-light">Current Admin URL</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(`https://${adminPath}`)}
                className="text-xs"
              >
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <code className="px-3 py-1 bg-sireiq-dark rounded text-sireiq-cyan">
                https://{adminPath}
              </code>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-sm text-sireiq-light/70">
              Using a non-obvious subdomain reduces automated attack attempts and improves security through obscurity.
            </p>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-sireiq-light">
              Custom Admin Domain
            </label>
            <Input
              value={adminPath}
              onChange={(e) => setAdminPath(e.target.value)}
              className="bg-sireiq-dark border-sireiq-accent/30"
              placeholder="admin.yourdomain.com"
            />
            <p className="text-xs text-sireiq-light/60">
              Recommended: Use a subdomain like admin.sireiq.com instead of sireiq.com/admin
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security Checks */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Security Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityChecks.map((check, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${getSeverityColor(check.severity)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {check.status ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    )}
                    <h4 className="font-semibold text-sireiq-light">{check.name}</h4>
                  </div>
                  <Switch 
                    checked={check.status}
                    onCheckedChange={() => {
                      const settingKey = check.name.toLowerCase().replace(/[^a-z]/g, '');
                      const mappedKey = {
                        'httpstlsencryption': 'httpsEnforced',
                        'hstshttpstricttransportsecurity': 'hstsEnabled',
                        'nonobviousadminpath': 'customAdminPath',
                        'ipwhitelisting': 'ipWhitelisting',
                        'vpnrequirement': 'vpnRequired',
                        'geographicblocking': 'geoBlocking'
                      }[settingKey] as keyof typeof settings;
                      
                      if (mappedKey) {
                        toggleSetting(mappedKey);
                      }
                    }}
                  />
                </div>
                <p className="text-sm text-sireiq-light/70 mb-2">{check.description}</p>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    check.severity === 'critical' ? 'border-red-500/50 text-red-400' :
                    check.severity === 'high' ? 'border-orange-500/50 text-orange-400' :
                    check.severity === 'medium' ? 'border-yellow-500/50 text-yellow-400' :
                    'border-green-500/50 text-green-400'
                  }`}
                >
                  {check.severity.toUpperCase()} PRIORITY
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* IP Whitelisting */}
      {settings.ipWhitelisting && (
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="w-5 h-5 mr-2 text-sireiq-cyan" />
              IP Address Whitelisting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-sireiq-light/70">
                Only the following IP addresses and ranges are allowed to access the admin panel:
              </p>
              <div className="space-y-2">
                {whitelistedIPs.map((ip, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                    <code className="text-sireiq-cyan">{ip}</code>
                    <Button variant="outline" size="sm" className="text-xs text-red-400 border-red-500/50">
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="Add IP address or CIDR range"
                  className="bg-sireiq-dark border-sireiq-accent/30"
                />
                <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  Add IP
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* SSL/TLS Configuration */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="w-5 h-5 mr-2 text-sireiq-cyan" />
            SSL/TLS Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
              <h4 className="font-semibold text-sireiq-light mb-2">TLS Version</h4>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <code className="text-sireiq-cyan">TLS 1.3</code>
              </div>
              <p className="text-xs text-sireiq-light/60 mt-1">Latest and most secure</p>
            </div>
            <div className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
              <h4 className="font-semibold text-sireiq-light mb-2">Certificate</h4>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">Valid</span>
              </div>
              <p className="text-xs text-sireiq-light/60 mt-1">Expires: 2024-12-15</p>
            </div>
            <div className="p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
              <h4 className="font-semibold text-sireiq-light mb-2">HSTS</h4>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">Enabled</span>
              </div>
              <p className="text-xs text-sireiq-light/60 mt-1">Max-age: 31536000</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default URLStructureSecurity;
