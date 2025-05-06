
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileCode, Rocket } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const DashboardHeader = () => {
  const createProject = () => {
    toast.success('New project created');
  };
  
  const deployProject = () => {
    toast.loading('Deploying project...', {
      duration: 3000,
      onAutoClose: () => toast.success('Project deployed successfully!')
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-sireiq-light">Developer Dashboard</h1>
        <p className="text-sireiq-light/70">Build, test, and deploy AI-powered applications</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
          onClick={createProject}
        >
          <FileCode className="w-4 h-4 mr-2 text-sireiq-cyan" />
          New Project
        </Button>
        
        <Button 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          onClick={deployProject}
        >
          <Rocket className="w-4 h-4 mr-2" />
          Deploy
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
