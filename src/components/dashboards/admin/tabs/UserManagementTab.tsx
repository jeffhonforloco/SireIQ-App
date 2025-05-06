
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserPlus, Shield, Activity } from 'lucide-react';

type UserManagementTabProps = {
  subTab: string;
};

const UserManagementTab = ({ subTab }: UserManagementTabProps) => {
  // Sample user data
  const users = [
    { id: 1, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User', status: 'Inactive', lastLogin: '5 days ago' },
    { id: 4, name: 'Robert Williams', email: 'robert@example.com', role: 'Enterprise', status: 'Active', lastLogin: '30 minutes ago' },
    { id: 5, name: 'Sarah Miller', email: 'sarah@example.com', role: 'Developer', status: 'Active', lastLogin: '3 hours ago' },
  ];

  // Sample roles data
  const roles = [
    { id: 1, name: 'Admin', users: 2, permissions: 32 },
    { id: 2, name: 'Developer', users: 8, permissions: 24 },
    { id: 3, name: 'User', users: 12, permissions: 16 },
    { id: 4, name: 'Enterprise', users: 2, permissions: 28 },
  ];
  
  // Sample permissions data
  const permissions = [
    { id: 1, name: 'User Management', roles: ['Admin'] },
    { id: 2, name: 'Content Creation', roles: ['Admin', 'Developer', 'Enterprise'] },
    { id: 3, name: 'Analytics View', roles: ['Admin', 'Enterprise'] },
    { id: 4, name: 'System Settings', roles: ['Admin'] },
    { id: 5, name: 'API Access', roles: ['Admin', 'Developer'] },
  ];
  
  // Sample activity data
  const activities = [
    { id: 1, user: 'Jane Smith', action: 'Updated user permissions', timestamp: '2 hours ago' },
    { id: 2, user: 'System', action: 'Automated backup completed', timestamp: '6 hours ago' },
    { id: 3, user: 'John Doe', action: 'Created new project', timestamp: '1 day ago' },
    { id: 4, user: 'Robert Williams', action: 'Invited team member', timestamp: '1 day ago' },
    { id: 5, user: 'Jane Smith', action: 'Modified security settings', timestamp: '2 days ago' },
  ];

  // Render content based on selected tab
  const renderContent = () => {
    switch (subTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Users ({users.length})</h3>
              <Button size="sm" variant="outline">
                <UserPlus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-6 font-medium border-b border-sireiq-accent/20">
                <div>Name</div>
                <div className="col-span-2">Email</div>
                <div>Role</div>
                <div>Status</div>
                <div>Last Login</div>
              </div>
              
              {users.map((user) => (
                <div key={user.id} className="p-4 grid grid-cols-6 items-center hover:bg-sireiq-accent/10">
                  <div>{user.name}</div>
                  <div className="col-span-2 text-sireiq-light/70">{user.email}</div>
                  <div>
                    <Badge variant="outline" className="border-sireiq-cyan/30 bg-sireiq-accent/10">
                      {user.role}
                    </Badge>
                  </div>
                  <div>
                    <Badge className={user.status === 'Active' ? 'bg-green-600' : 'bg-gray-400'}>
                      {user.status}
                    </Badge>
                  </div>
                  <div className="text-sireiq-light/70">{user.lastLogin}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'roles':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">System Roles</h3>
              <Button size="sm" variant="outline">
                Create Role
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => (
                <Card key={role.id} className="bg-sireiq-accent/5 border-sireiq-accent/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-sireiq-cyan" />
                        <h4 className="font-medium">{role.name}</h4>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-sireiq-light/70">Users</p>
                        <p>{role.users}</p>
                      </div>
                      <div>
                        <p className="text-sireiq-light/70">Permissions</p>
                        <p>{role.permissions}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'permissions':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">System Permissions</h3>
              <Button size="sm" variant="outline">
                Create Permission
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-2 font-medium border-b border-sireiq-accent/20">
                <div>Permission</div>
                <div>Assigned Roles</div>
              </div>
              
              {permissions.map((permission) => (
                <div key={permission.id} className="p-4 grid grid-cols-2 items-center hover:bg-sireiq-accent/10">
                  <div>{permission.name}</div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {permission.roles.map((role) => (
                        <Badge key={role} variant="outline" className="border-sireiq-cyan/30 bg-sireiq-accent/10">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'activity':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <Button size="sm" variant="outline">
                <Activity className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="p-4 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="bg-sireiq-accent/20 rounded-full p-2 mr-3">
                        <Activity className="w-4 h-4 text-sireiq-cyan" />
                      </div>
                      <div>
                        <p className="font-medium">{activity.user}</p>
                        <p className="text-sireiq-light/70">{activity.action}</p>
                      </div>
                    </div>
                    <div className="text-sm text-sireiq-light/70">{activity.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return renderContent();
};

export default UserManagementTab;
