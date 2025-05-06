
import React from 'react';
import { Search, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-sireiq-light">Enterprise Dashboard</h1>
        <p className="text-sireiq-light/70">Manage your organization's AI solutions</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
          onClick={() => toast.success('Help center opened')}
        >
          <Search className="w-4 h-4 mr-2 text-sireiq-cyan" />
          Help Center
        </Button>
        
        <Button 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          onClick={() => toast.success('Settings opened')}
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
