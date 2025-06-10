
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shield, AlertTriangle, CheckCircle, Clock, Zap, Database, Globe, Lock } from 'lucide-react';

interface SecurityMeasure {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  effectiveness: number;
  lastUpdated: string;
  status: 'active' | 'inactive' | 'warning';
}

const ApplicationSecurity = () => {
  const [securityMeasures, setSecurityMeasures] = useState<SecurityMeasure[]>([
    {
      id: 'csrf',
      name: 'CSRF Protection',
      description: 'Cross-Site Request Forgery protection with secure tokens',
      enabled: true,
      effectiveness: 98,
      lastUpdated: '2024-01-10',
      status: 'active'
    },
    {
      id: 'xss',
      name: 'XSS Prevention',
      description: 'Input sanitization and Content Security Policy',
      enabled: true,
      effectiveness: 95,
      lastUpdated: '2024-01-10',
      status: 'active'
    },
    {
      id: 'sql-injection',
      name: 'SQL Injection Protection',
      description: 'Parameterized queries and input validation',
      enabled: true,
      effectiveness: 99,
      lastUpdated: '2024-01-09',
      status: 'active'
    },
    {
      id: 'rate-limiting',
      name: 'Rate Limiting',
      description: 'Request throttling for API endpoints',
      enabled: true,
      effectiveness: 92,
      lastUpdated: '2024-01-10',
      status: 'active'
    },
    {
      id: 'waf',
      name: 'Web Application Firewall',
      description: 'Advanced threat detection and blocking',
      enabled: false,
      effectiveness: 0,
      lastUpdated: '2024-01-05',
      status: 'inactive'
    },
    {
      id: 'input-validation',
      name: 'Input Validation',
      description: 'Comprehensive server-side input validation',
      enabled: true,
      effectiveness: 94,
      lastUpdated: '2024-01-10',
      status: 'active'
    }
  ]);

  const [rateLimits] = useState([
    { endpoint: '/admin/api/users', limit: '100 req/min', current: '23 req/min', status: 'normal' },
    { endpoint: '/admin/api/models', limit: '50 req/min', current: '12 req/min', status: 'normal' },
    { endpoint: '/admin/login', limit: '5 req/min', current: '2 req/min', status: 'normal' },
    { endpoint: '/admin/api/data', limit: '200 req/min', current: '180 req/min', status: 'warning' }
  ]);

  const toggleSecurityMeasure = (id: string) => {
    setSecurityMeasures(prev => prev.map(measure => 
      measure.id === id 
        ? { 
            ...measure, 
            enabled: !measure.enabled,
            status: !measure.enabled ? 'active' : 'inactive',
            effectiveness: !measure.enabled ? measure.effectiveness : 0
          }
        : measure
    ));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'inactive': return <Clock className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getEffectivenessColor = (effectiveness: number) => {
    if (effectiveness >= 95) return 'text-green-400';
    if (effectiveness >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getRateLimitStatus = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-400 border-green-500/50';
      case 'warning': return 'text-yellow-400 border-yellow-500/50';
      case 'critical': return 'text-red-400 border-red-500/50';
      default: return 'text-gray-400 border-gray-500/50';
    }
  };

  const overallSecurity = Math.round(
    securityMeasures.reduce((acc, measure) => acc + (measure.enabled ? measure.effectiveness : 0), 0) / securityMeasures.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-6 h-6 mr-3 text-sireiq-cyan" />
              Application-Level Security
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className={`${getEffectivenessColor(overallSecurity)} border-current`}>
                {overallSecurity}% Protected
              </Badge>
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Run Security Scan
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={overallSecurity} className="mb-4" />
          <p className="text-sireiq-light/70">
            Protect against common web application vulnerabilities including CSRF, XSS, SQL injection, and implement comprehensive rate limiting.
          </p>
        </CardContent>
      </Card>

      {/* Security Measures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {securityMeasures.map((measure) => (
          <Card key={measure.id} className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-lg">
                <div className="flex items-center">
                  {getStatusIcon(measure.status)}
                  <span className="ml-2">{measure.name}</span>
                </div>
                <Switch 
                  checked={measure.enabled}
                  onCheckedChange={() => toggleSecurityMeasure(measure.id)}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-sireiq-light/70 mb-3">{measure.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-sireiq-light/60">Effectiveness</span>
                  <span className={`text-sm font-medium ${getEffectivenessColor(measure.effectiveness)}`}>
                    {measure.effectiveness}%
                  </span>
                </div>
                <Progress value={measure.effectiveness} className="h-2" />
                
                <div className="flex justify-between items-center text-xs text-sireiq-light/60">
                  <span>Last Updated: {measure.lastUpdated}</span>
                  <Button variant="outline" size="sm" className="text-xs h-6">
                    Configure
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rate Limiting Dashboard */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Rate Limiting & Traffic Control
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rateLimits.map((limit, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getRateLimitStatus(limit.status)}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-sireiq-light">{limit.endpoint}</h4>
                  <Badge variant="outline" className={getRateLimitStatus(limit.status)}>
                    {limit.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-sireiq-light/70">Current Rate:</span>
                    <span className="font-medium text-sireiq-cyan">{limit.current}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-sireiq-light/70">Limit:</span>
                    <span className="font-medium">{limit.limit}</span>
                  </div>
                  <Progress 
                    value={
                      (parseInt(limit.current.split(' ')[0]) / parseInt(limit.limit.split(' ')[0])) * 100
                    } 
                    className="h-2 mt-2" 
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* WAF Configuration */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Web Application Firewall (WAF)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {securityMeasures.find(m => m.id === 'waf')?.enabled ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-sireiq-accent/5 rounded-lg">
                  <h4 className="font-semibold text-sireiq-light mb-2">Blocked Requests</h4>
                  <div className="text-2xl font-bold text-red-400">1,247</div>
                  <p className="text-xs text-sireiq-light/60">Last 24 hours</p>
                </div>
                <div className="p-4 bg-sireiq-accent/5 rounded-lg">
                  <h4 className="font-semibold text-sireiq-light mb-2">Threat Score</h4>
                  <div className="text-2xl font-bold text-green-400">Low</div>
                  <p className="text-xs text-sireiq-light/60">Current risk level</p>
                </div>
                <div className="p-4 bg-sireiq-accent/5 rounded-lg">
                  <h4 className="font-semibold text-sireiq-light mb-2">Rules Active</h4>
                  <div className="text-2xl font-bold text-sireiq-cyan">156</div>
                  <p className="text-xs text-sireiq-light/60">Security rules</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-semibold text-sireiq-light mb-2">WAF Not Enabled</h3>
              <p className="text-sireiq-light/70 mb-4">
                Enable Web Application Firewall for advanced threat protection and automated blocking of malicious requests.
              </p>
              <Button 
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                onClick={() => toggleSecurityMeasure('waf')}
              >
                Enable WAF Protection
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Headers */}
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Security Headers Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Content-Security-Policy', status: 'enabled', value: "default-src 'self'; script-src 'self' 'unsafe-inline'" },
              { name: 'X-Frame-Options', status: 'enabled', value: 'DENY' },
              { name: 'X-Content-Type-Options', status: 'enabled', value: 'nosniff' },
              { name: 'Referrer-Policy', status: 'enabled', value: 'strict-origin-when-cross-origin' },
              { name: 'Permissions-Policy', status: 'enabled', value: 'camera=(), microphone=(), geolocation=()' },
              { name: 'Strict-Transport-Security', status: 'enabled', value: 'max-age=31536000; includeSubDomains' }
            ].map((header, index) => (
              <div key={index} className="p-3 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sireiq-light text-sm">{header.name}</h4>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <code className="text-xs text-sireiq-cyan bg-sireiq-dark p-1 rounded block overflow-hidden">
                  {header.value}
                </code>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationSecurity;
