
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Grid2X2, List } from 'lucide-react';

interface PricingTabsProps {
  activeView: 'cards' | 'table';
  setActiveView: (view: 'cards' | 'table') => void;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="flex justify-center mb-8">
      <Tabs 
        value={activeView} 
        onValueChange={(v) => setActiveView(v as 'cards' | 'table')}
        className="bg-sireiq-accent/10 rounded-full p-1 border border-sireiq-accent/30"
      >
        <TabsList className="bg-transparent">
          <TabsTrigger 
            value="cards" 
            className={`rounded-full px-4 py-2 text-sm flex items-center gap-2 ${
              activeView === 'cards' 
                ? 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker' 
                : 'bg-transparent hover:bg-sireiq-accent/20'
            }`}
          >
            <Grid2X2 className="h-4 w-4" />
            <span>Card View</span>
          </TabsTrigger>
          <TabsTrigger 
            value="table" 
            className={`rounded-full px-4 py-2 text-sm flex items-center gap-2 ${
              activeView === 'table' 
                ? 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker' 
                : 'bg-transparent hover:bg-sireiq-accent/20'
            }`}
          >
            <List className="h-4 w-4" />
            <span>Detailed Comparison</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PricingTabs;
