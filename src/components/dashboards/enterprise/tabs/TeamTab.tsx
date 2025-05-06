
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, UserPlus, UserCog, UserMinus } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import TeamManagementDialog, { TeamMember } from '../TeamManagementDialog';
import DeleteConfirmationDialog from '../DeleteConfirmationDialog';

const TeamTab = () => {
  // Team members state
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: 1, name: 'Alex Johnson', role: 'Admin', avatar: 'AJ', email: 'alex@example.com', lastActive: '2 min ago', status: 'active' },
    { id: 2, name: 'Maria Garcia', role: 'Editor', avatar: 'MG', email: 'maria@example.com', lastActive: '1 hour ago', status: 'active' },
    { id: 3, name: 'David Kim', role: 'Viewer', avatar: 'DK', email: 'david@example.com', lastActive: '3 hours ago', status: 'idle' },
    { id: 4, name: 'Sarah Wilson', role: 'Editor', avatar: 'SW', email: 'sarah@example.com', lastActive: '2 days ago', status: 'offline' },
  ]);

  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | undefined>(undefined);
  const [isPermissionsSheetOpen, setIsPermissionsSheetOpen] = useState(false);

  // Add a new team member
  const handleAddMember = (memberData: Omit<TeamMember, 'id' | 'lastActive' | 'status'>) => {
    const newMember: TeamMember = {
      ...memberData,
      id: Math.max(0, ...teamMembers.map(m => m.id)) + 1,
      lastActive: 'Just now',
      status: 'active'
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  // Update an existing team member
  const handleUpdateMember = (memberData: Omit<TeamMember, 'id' | 'lastActive' | 'status'>) => {
    if (!selectedMember) return;
    
    setTeamMembers(teamMembers.map(member => 
      member.id === selectedMember.id 
        ? { ...member, ...memberData } 
        : member
    ));
  };

  // Delete a team member
  const handleDeleteMember = () => {
    if (!selectedMember) return;
    
    setTeamMembers(teamMembers.filter(member => member.id !== selectedMember.id));
    toast.success('Team member removed successfully');
    setIsDeleteDialogOpen(false);
    setSelectedMember(undefined);
  };

  // Select a member for editing
  const handleSelectForEdit = (member: TeamMember) => {
    setSelectedMember(member);
    setIsEditDialogOpen(true);
  };

  // Select a member for deletion
  const handleSelectForDelete = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDeleteDialogOpen(true);
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
            onClick={() => setIsAddDialogOpen(true)}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id} className="hover:bg-sireiq-accent/10">
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
                  <TableCell>{member.email}</TableCell>
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
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                        onClick={() => handleSelectForEdit(member)}
                      >
                        <UserCog className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:text-red-400 hover:border-red-400/30"
                        onClick={() => handleSelectForDelete(member)}
                      >
                        <UserMinus className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
            <Button 
              variant="outline" 
              className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full"
              onClick={() => setIsPermissionsSheetOpen(true)}
            >
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
            <Button 
              variant="outline" 
              className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full text-red-400"
              onClick={() => {
                toast.success('All other sessions have been ended');
              }}
            >
              End All Other Sessions
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Add Member Dialog */}
      <TeamManagementDialog 
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onSave={handleAddMember}
        mode="add"
      />
      
      {/* Edit Member Dialog */}
      <TeamManagementDialog 
        isOpen={isEditDialogOpen}
        onClose={() => {
          setIsEditDialogOpen(false);
          setSelectedMember(undefined);
        }}
        member={selectedMember}
        onSave={handleUpdateMember}
        mode="edit"
      />
      
      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog 
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedMember(undefined);
        }}
        onConfirm={handleDeleteMember}
        title="Remove Team Member"
        description={`Are you sure you want to remove ${selectedMember?.name} from the team? This action cannot be undone.`}
      />
      
      {/* Permissions Sheet */}
      <Sheet open={isPermissionsSheetOpen} onOpenChange={setIsPermissionsSheetOpen}>
        <SheetContent className="bg-sireiq-darker text-sireiq-light border-l-sireiq-accent/30">
          <SheetHeader>
            <SheetTitle>Role Permissions</SheetTitle>
            <SheetDescription className="text-sireiq-light/70">
              Configure access levels for each team role.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            {['Admin', 'Editor', 'Viewer'].map((role) => (
              <div key={role} className="space-y-4">
                <h3 className="text-lg font-medium">{role} Permissions</h3>
                <div className="space-y-2">
                  {[
                    'View Content', 'Create Content', 'Edit Content', 'Delete Content',
                    'Manage Users', 'Configure Settings', 'Access Analytics'
                  ].map((permission) => (
                    <div key={permission} className="flex items-center justify-between p-2 border border-sireiq-accent/20 rounded-md">
                      <span>{permission}</span>
                      <Badge className={
                        role === 'Admin' ? 'bg-green-500' :
                        role === 'Editor' && !['Delete Content', 'Manage Users', 'Configure Settings'].includes(permission) ? 'bg-green-500' :
                        role === 'Viewer' && ['View Content', 'Access Analytics'].includes(permission) ? 'bg-green-500' :
                        'bg-gray-500'
                      }>
                        {role === 'Admin' || 
                        (role === 'Editor' && !['Delete Content', 'Manage Users', 'Configure Settings'].includes(permission)) ||
                        (role === 'Viewer' && ['View Content', 'Access Analytics'].includes(permission))
                          ? 'Allowed'
                          : 'Denied'
                        }
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Button 
              className="w-full mt-4 bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
              onClick={() => {
                setIsPermissionsSheetOpen(false);
                toast.success('Permission settings updated');
              }}
            >
              Save Changes
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default TeamTab;
