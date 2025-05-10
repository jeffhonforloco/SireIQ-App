
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, UserPlus, Settings, Bell, Search, Filter } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const AdminDashboardHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const addUser = () => {
    toast.success('User creation dialog opened');
  };
  
  const openSettings = () => {
    toast.loading('Loading system settings...', {
      duration: 2000,
      onAutoClose: () => toast.success('Settings loaded successfully!')
    });
  };

  const handleNotificationClick = () => {
    toast.info('Notifications panel opened');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="flex flex-col gap-6 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-sireiq-light">Admin Dashboard</h1>
          <p className="text-sireiq-light/70">Manage users, monitor platform performance, and configure system settings</p>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button 
            variant="outline" 
            size="icon"
            className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            onClick={handleNotificationClick}
          >
            <Bell className="w-4 h-4 text-sireiq-cyan" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
          </Button>
          
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
      
      <div className="flex flex-col sm:flex-row gap-4">
        <form className="relative flex-1" onSubmit={handleSearch}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sireiq-light/50" />
          <Input
            placeholder="Search users, settings, or resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-sireiq-darker border-sireiq-accent/20 w-full"
          />
        </form>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-sireiq-accent/30 gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-sireiq-darker border-sireiq-accent/20">
            <DropdownMenuItem className="cursor-pointer hover:bg-sireiq-accent/10">
              All Resources
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-sireiq-accent/10">
              Users Only
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-sireiq-accent/20" />
            <DropdownMenuItem className="cursor-pointer hover:bg-sireiq-accent/10">
              Last 24 hours
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-sireiq-accent/10">
              Last 7 days
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-sireiq-accent/10">
              Last 30 days
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
