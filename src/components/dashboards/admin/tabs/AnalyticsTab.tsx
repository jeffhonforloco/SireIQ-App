
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type AnalyticsTabProps = {
  subTab: string;
};

const AnalyticsTab = ({ subTab }: AnalyticsTabProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Analytics {subTab.charAt(0).toUpperCase() + subTab.slice(1)}</h3>
      <p className="text-sireiq-light/70">This is a placeholder for the {subTab} analytics content.</p>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardContent className="p-4">
          <div className="h-40 flex items-center justify-center">
            <p className="text-sireiq-light/50">Analytics data visualization will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsTab;
