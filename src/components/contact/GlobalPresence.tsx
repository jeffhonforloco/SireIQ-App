
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const GlobalPresence: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">Our Global Presence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-2">North America</h3>
            <p className="text-sireiq-light/70 mb-2">Headquarters</p>
            <p className="text-sm text-sireiq-light/70">
              United States
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-2">Europe</h3>
            <p className="text-sireiq-light/70 mb-2">Regional Office</p>
            <p className="text-sm text-sireiq-light/70">
              United Kingdom
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-2">Asia Pacific</h3>
            <p className="text-sireiq-light/70 mb-2">APAC Operations</p>
            <p className="text-sm text-sireiq-light/70">
              Singapore
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-2">Global Support</h3>
            <p className="text-sireiq-light/70 mb-2">24/7 Coverage</p>
            <p className="text-sm text-sireiq-light/70">
              International
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalPresence;
