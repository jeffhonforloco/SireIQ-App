
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Settings, UserPlus, Search, Filter, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const AdminHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#6366F1]/20 border border-[#00D4FF]/30">
          <Shield className="h-6 w-6 text-[#00D4FF]" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gradient">Admin Control Center</h1>
          <p className="text-[#B4B4B4]">Manage platform operations and user accounts</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="relative border-[#00D4FF]/30 hover:bg-[#00D4FF]/10"
          >
            <Bell className="h-5 w-5 text-[#00D4FF]" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
              5
            </Badge>
          </Button>
        </div>
        
        <Button
          className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] text-[#0A0A0A] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
        
        <Button
          variant="outline"
          className="border-[#6366F1]/30 hover:bg-[#6366F1]/10"
        >
          <Settings className="h-4 w-4 mr-2 text-[#6366F1]" />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
