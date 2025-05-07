
import React, { useState } from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SecurityFeature {
  name: string;
  status: 'Enabled' | 'Disabled' | 'Due in 15 days';
  recommended: boolean;
}

const SecurityHealthCard = () => {
  const [securityFeatures, setSecurityFeatures] = useState<SecurityFeature[]>([
    { name: "Two-Factor Authentication", status: "Enabled", recommended: true },
    { name: "Data Encryption", status: "Enabled", recommended: true },
    { name: "Regular Backups", status: "Enabled", recommended: true },
    { name: "Vulnerability Scan", status: "Due in 15 days", recommended: true },
    { name: "IP Address Allowlist", status: "Disabled", recommended: true },
    { name: "Advanced Threat Protection", status: "Disabled", recommended: false }
  ]);

  const handleToggleFeature = (index: number) => {
    setSecurityFeatures(prev => {
      const newFeatures = [...prev];
      const feature = newFeatures[index];
      
      // Toggle the feature status
      if (feature.status === "Enabled") {
        feature.status = "Disabled";
        toast.warning(`${feature.name} has been disabled`);
      } else if (feature.status === "Disabled") {
        feature.status = "Enabled";
        toast.success(`${feature.name} has been enabled`);
      } else if (feature.status === "Due in 15 days") {
        // Run the vulnerability scan now
        toast.success(`Running ${feature.name} now...`);
        setTimeout(() => {
          newFeatures[index] = {
            ...feature,
            status: "Enabled"
          };
          setSecurityFeatures([...newFeatures]);
          toast.success(`${feature.name} completed successfully`);
        }, 3000);
      }
      
      return newFeatures;
    });
  };

  return (
    <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 mb-8">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Shield className="h-5 w-5 text-sireiq-cyan mr-2" />
        Security Health
      </h3>
      
      <div className="space-y-3 mb-6">
        {securityFeatures.map((feature, i) => (
          <div key={i} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 transition-colors">
            <div className="flex items-center">
              {feature.status === 'Enabled' ? (
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              ) : feature.status === 'Due in 15 days' ? (
                <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
              )}
              <span className="flex flex-col">
                <span>{feature.name}</span>
                {feature.recommended && feature.status === 'Disabled' && (
                  <span className="text-xs text-yellow-400">Recommended</span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={`${
                feature.status === 'Enabled' ? 'bg-green-500' : 
                feature.status === 'Due in 15 days' ? 'bg-yellow-500' : 'bg-red-500'
              } text-sireiq-darker`}>
                {feature.status}
              </Badge>
              
              <Button 
                size="sm" 
                variant="outline" 
                className="border-sireiq-cyan/30 hover:bg-sireiq-cyan/10 text-xs"
                onClick={() => handleToggleFeature(i)}
              >
                {feature.status === 'Enabled' ? 'Disable' : 
                 feature.status === 'Disabled' ? 'Enable' : 'Run Now'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        className="w-full bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
        onClick={() => toast.success("Security assessment started. This may take a few minutes.")}
      >
        <Shield className="w-4 h-4 mr-2" />
        Run Full Security Assessment
      </Button>
    </div>
  );
};

export default SecurityHealthCard;
