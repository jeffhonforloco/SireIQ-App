
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, UserPlus, Settings } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const AdminDashboardHeader = () => {
  const addUser = () => {
    toast.success('User creation dialog opened');
  };
  
  const openSettings = () => {
    toast.loading('Loading system settings...', {
      duration: 2000,
      onAutoClose: () => toast.success('Settings loaded successfully!')
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-sireiq-light">Admin Dashboard</h1>
        <p className="text-sireiq-light/70">Manage users, monitor platform performance, and configure system settings</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
          onClick={addUser}
        >
          <UserPlus className="w-4 h-4 mr-2 text-sireiq-cyan" />
          Add User
        </Button>
        
        <Button 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          onClick={openSettings}
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
