
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Globe, Shield, Lock, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const URLStructureSecurity = () => {
  const [allowedIPs, setAllowedIPs] = useState(['192.168.1.0/24', '10.0.0.0/16']);
  const [newIP, setNewIP] = useState('');

  const addIPRange = () => {
    if (newIP && !allowedIPs.includes(newIP)) {
      setAllowedIPs([...allowedIPs, newIP]);
      setNewIP('');
      toast.success('IP range added successfully');
    }
  };

  const removeIPRange = (ip: string) => {
    setAllowedIPs(allowedIPs.filter(range => range !== ip));
    toast.success('IP range removed');
  };

  const securityFeatures = [
    {
      title: "HTTPS Enforcement",
      status: "Active",
      description: "All traffic redirected to HTTPS",
      icon: Lock,
      color: "text-green-400"
    },
    {
      title: "HSTS Headers",
      status: "Active",
      description: "HTTP Strict Transport Security enabled",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Rate Limiting",
      status: "Active",
      description: "API rate limits configured",
      icon: AlertTriangle,
      color: "text-green-400"
    },
    {
      title: "CORS Policy",
      status: "Configured",
      description: "Cross-origin requests restricted",
      icon: Globe,
      color: "text-yellow-400"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="w-5 h-5 mr-2 text-sireiq-cyan" />
            URL Structure & Network Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="p-4 border border-sireiq-accent/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`w-4 h-4 ${feature.color}`} />
                      <h4 className="font-medium">{feature.title}</h4>
                    </div>
                    <Badge className={`${
                      feature.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-sireiq-light/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle>IP Whitelist Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter IP range (e.g., 192.168.1.0/24)"
              value={newIP}
              onChange={(e) => setNewIP(e.target.value)}
              className="bg-sireiq-dark border-sireiq-accent/30"
            />
            <Button onClick={addIPRange} className="bg-sireiq-cyan text-sireiq-darker">
              Add Range
            </Button>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Allowed IP Ranges</h4>
            {allowedIPs.map((ip, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-sireiq-accent/5 rounded-lg">
                <span className="font-mono text-sm">{ip}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => removeIPRange(ip)}
                  className="border-red-500/30 text-red-400 hover:bg-red-900/20"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default URLStructureSecurity;
