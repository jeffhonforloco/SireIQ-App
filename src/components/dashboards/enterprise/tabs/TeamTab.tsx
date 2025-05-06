
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import TeamManagementDialog, { TeamMember } from '../TeamManagementDialog';
import DeleteConfirmationDialog from '../DeleteConfirmationDialog';
import TeamMembersCard from './team/TeamMembersCard';
import TeamPermissionsCard from './team/TeamPermissionsCard';
import ActiveSessionsCard from './team/ActiveSessionsCard';
import PermissionsSheet from './team/PermissionsSheet';

const TeamTab = () => {
  // Team members state
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: 1, name: 'Alex Johnson', role: 'Admin', avatar: 'AJ', email: 'alex@example.com', lastActive: '2 min ago', status: 'active' },
    { id: 2, name: 'Maria Garcia', role: 'Editor', avatar: 'MG', email: 'maria@example.com', lastActive: '1 hour ago', status: 'active' },
    { id: 3, name: 'David Kim', role: 'Viewer', avatar: 'DK', email: 'david@example.com', lastActive: '3 hours ago', status: 'idle' },
    { id: 4, name: 'Sarah Wilson', role: 'Editor', avatar: 'SW', email: 'sarah@example.com', lastActive: '2 days ago', status: 'offline' },
  ]);

  // Active sessions data
  const activeSessions = [
    { user: 'Alex Johnson', device: 'MacBook Pro', location: 'San Francisco, US', time: '2 hours' },
    { user: 'Maria Garcia', device: 'Windows PC', location: 'Austin, US', time: '45 minutes' },
    { user: 'David Kim', device: 'iPhone 16', location: 'New York, US', time: '30 minutes' }
  ];

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
      <TeamMembersCard 
        teamMembers={teamMembers}
        onAddMember={() => setIsAddDialogOpen(true)}
        onEditMember={handleSelectForEdit}
        onDeleteMember={handleSelectForDelete}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <TeamPermissionsCard onOpenPermissionsSheet={() => setIsPermissionsSheetOpen(true)} />
        <ActiveSessionsCard sessions={activeSessions} />
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
      <PermissionsSheet 
        isOpen={isPermissionsSheetOpen}
        onOpenChange={setIsPermissionsSheetOpen}
      />
    </>
  );
};

export default TeamTab;
