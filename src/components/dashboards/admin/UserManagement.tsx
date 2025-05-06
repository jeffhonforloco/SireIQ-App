
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

const UserManagement = () => {
  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-xl">
          <Users className="w-5 h-5 mr-2 text-sireiq-cyan" />
          User Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* User management content would be displayed here */}
        <p className="text-sireiq-light/70">Manage system users, roles, and permissions</p>
      </CardContent>
    </Card>
  );
};

export default UserManagement;
