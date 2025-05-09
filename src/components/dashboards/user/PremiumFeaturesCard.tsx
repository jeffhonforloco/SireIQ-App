
import React from 'react';
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, FileText, Clock, Settings, Check } from 'lucide-react';

const PremiumFeaturesCard = () => {
  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Star className="w-5 h-5 mr-2 text-sireiq-cyan" />
          Premium Features
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
          <div className="bg-sireiq-accent/20 p-2 rounded-full">
            <FileText className="w-4 h-4 text-sireiq-cyan" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Long-form Document Analysis</h3>
            <p className="text-xs text-sireiq-light/70">Process and analyze large documents</p>
          </div>
          <Check className="w-4 h-4 text-green-500" />
        </div>
        
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
          <div className="bg-sireiq-accent/20 p-2 rounded-full">
            <Clock className="w-4 h-4 text-sireiq-cyan" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Priority Processing</h3>
            <p className="text-xs text-sireiq-light/70">Faster responses during peak times</p>
          </div>
          <Check className="w-4 h-4 text-green-500" />
        </div>
        
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
          <div className="bg-sireiq-accent/20 p-2 rounded-full">
            <Settings className="w-4 h-4 text-sireiq-cyan" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Advanced Customization</h3>
            <p className="text-xs text-sireiq-light/70">Personalize AI behavior and responses</p>
          </div>
          <Check className="w-4 h-4 text-green-500" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
          Manage Subscription
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PremiumFeaturesCard;
