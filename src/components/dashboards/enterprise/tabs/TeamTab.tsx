
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const TeamTab = () => {
  const teamMembers = [
    { name: 'Alex Johnson', role: 'Admin', avatar: 'AJ', lastActive: '2 min ago', status: 'active' },
    { name: 'Maria Garcia', role: 'Editor', avatar: 'MG', lastActive: '1 hour ago', status: 'active' },
    { name: 'David Kim', role: 'Viewer', avatar: 'DK', lastActive: '3 hours ago', status: 'idle' },
    { name: 'Sarah Wilson', role: 'Editor', avatar: 'SW', lastActive: '2 days ago', status: 'offline' },
  ];
  
  const inviteTeamMember = () => {
    toast.success('Invitation sent successfully');
  };
  
  return (
    <>
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-base font-medium">Team Members</CardTitle>
            <CardDescription>Manage your organization's team</CardDescription>
          </div>
          <Button 
            size="sm" 
            className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
            onClick={inviteTeamMember}
          >
            <Users className="w-4 h-4 mr-2" />
            Invite Member
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member, i) => (
                <TableRow key={i} className="hover:bg-sireiq-accent/10">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-sireiq-cyan/20 text-sireiq-cyan">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <span>{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <Badge className={`${
                      member.status === 'active' ? 'bg-green-500' : 
                      member.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-500'
                    } text-sireiq-darker`}>
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{member.lastActive}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="text-base font-medium">Team Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { role: 'Admin', permissions: 'Full access to all resources' },
                { role: 'Editor', permissions: 'Can edit but not delete resources' },
                { role: 'Viewer', permissions: 'Read-only access to resources' }
              ].map((role, i) => (
                <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md">
                  <h3 className="font-medium">{role.role}</h3>
                  <p className="text-sm text-sireiq-light/70">{role.permissions}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full">
              Edit Roles
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="text-base font-medium">Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: 'Alex Johnson', device: 'MacBook Pro', location: 'San Francisco, US', time: '2 hours' },
                { user: 'Maria Garcia', device: 'Windows PC', location: 'Austin, US', time: '45 minutes' },
                { user: 'David Kim', device: 'iPhone 16', location: 'New York, US', time: '30 minutes' }
              ].map((session, i) => (
                <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{session.user}</h3>
                    <Badge className="bg-green-500 text-sireiq-darker">Active</Badge>
                  </div>
                  <p className="text-sm text-sireiq-light/70">{session.device} · {session.location}</p>
                  <p className="text-xs text-sireiq-light/50 mt-1">Active for {session.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full text-red-400">
              End All Other Sessions
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default TeamTab;
