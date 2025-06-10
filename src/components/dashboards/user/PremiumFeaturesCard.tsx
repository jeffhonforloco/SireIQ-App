
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Users, 
  ArrowRight,
  Check,
  Lock
} from 'lucide-react';

interface PremiumFeaturesCardProps {
  onUpgrade?: () => void;
  onLearnMore?: () => void;
  currentPlan?: 'free' | 'pro' | 'enterprise';
}

const PremiumFeaturesCard = ({ 
  onUpgrade, 
  onLearnMore, 
  currentPlan = 'free' 
}: PremiumFeaturesCardProps) => {
  
  const features = [
    {
      name: 'Advanced AI Models',
      description: 'Access to GPT-4, Claude 3, and latest models',
      icon: Cpu,
      available: currentPlan !== 'free',
      highlight: true
    },
    {
      name: 'Unlimited Conversations',
      description: 'No limits on chat sessions and messages',
      icon: Zap,
      available: currentPlan === 'enterprise',
      highlight: false
    },
    {
      name: 'Priority Support',
      description: '24/7 dedicated customer support',
      icon: Shield,
      available: currentPlan !== 'free',
      highlight: false
    },
    {
      name: 'Custom Integrations',
      description: 'Connect with your favorite tools and APIs',
      icon: Database,
      available: currentPlan === 'enterprise',
      highlight: false
    },
    {
      name: 'Team Collaboration',
      description: 'Share workspaces and collaborate in real-time',
      icon: Users,
      available: currentPlan === 'enterprise',
      highlight: currentPlan === 'free'
    }
  ];

  const getPlanBadge = () => {
    switch (currentPlan) {
      case 'pro':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Pro Plan</Badge>;
      case 'enterprise':
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Enterprise</Badge>;
      default:
        return <Badge variant="outline" className="border-sireiq-accent/30">Free Plan</Badge>;
    }
  };

  const getUpgradeText = () => {
    switch (currentPlan) {
      case 'free':
        return 'Upgrade to Pro';
      case 'pro':
        return 'Upgrade to Enterprise';
      default:
        return 'Contact Sales';
    }
  };

  const handleUpgradeClick = () => {
    if (onUpgrade) {
      onUpgrade();
    } else {
      // Default upgrade action
      if (currentPlan === 'free') {
        window.open('/pricing', '_blank');
      } else {
        window.open('/enterprise', '_blank');
      }
    }
  };

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Crown className="w-5 h-5 mr-2 text-yellow-400" />
            Premium Features
          </CardTitle>
          {getPlanBadge()}
        </div>
        <CardDescription>
          {currentPlan === 'free' 
            ? 'Unlock the full potential of SireIQ' 
            : 'Your premium features and benefits'
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                feature.highlight ? 'bg-sireiq-accent/10 border border-sireiq-accent/20' : 'hover:bg-sireiq-accent/5'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                feature.available 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-sireiq-accent/20 text-sireiq-light/50'
              }`}>
                {feature.available ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <feature.icon className="w-4 h-4 text-sireiq-cyan" />
                  <h4 className={`font-medium text-sm ${
                    feature.available ? 'text-sireiq-light' : 'text-sireiq-light/70'
                  }`}>
                    {feature.name}
                  </h4>
                </div>
                <p className="text-xs text-sireiq-light/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 space-y-3">
          {currentPlan !== 'enterprise' && (
            <Button 
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium"
              onClick={handleUpgradeClick}
            >
              <Crown className="w-4 h-4 mr-2" />
              {getUpgradeText()}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          
          <Button 
            variant="outline" 
            size="sm"
            className="w-full border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            onClick={onLearnMore || (() => window.open('/pricing', '_blank'))}
          >
            Compare Plans
          </Button>
        </div>

        {currentPlan === 'free' && (
          <div className="mt-4 p-3 bg-gradient-to-r from-sireiq-cyan/10 to-sireiq-purple/10 rounded-lg border border-sireiq-accent/20">
            <p className="text-xs text-sireiq-light/80 text-center">
              🎉 <strong>Limited Time:</strong> Get 50% off your first month with Pro upgrade!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PremiumFeaturesCard;
