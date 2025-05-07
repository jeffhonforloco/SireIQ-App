
import React, { useState } from 'react';
import { TeamMember } from '../../TeamManagementDialog';
import TeamMembersCard from './TeamMembersCard';
import TeamManagementDialog from '../../TeamManagementDialog';
import DeleteConfirmationDialog from '../../DeleteConfirmationDialog';

interface TeamMembersSectionProps {
  teamMembers: TeamMember[];
  selectedMember: TeamMember | undefined;
  setSelectedMember: (member: TeamMember | undefined) => void;
  onAddMember: (memberData: Omit<TeamMember, 'id' | 'lastActive' | 'status'>) => void;
  onUpdateMember: (memberData: Omit<TeamMember, 'id' | 'lastActive' | 'status'>) => void;
  onDeleteMember: () => void;
}

const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({
  teamMembers,
  selectedMember,
  setSelectedMember,
  onAddMember,
  onUpdateMember,
  onDeleteMember
}) => {
  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

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

      {/* Add Member Dialog */}
      <TeamManagementDialog 
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onSave={onAddMember}
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
        onSave={onUpdateMember}
        mode="edit"
      />
      
      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog 
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedMember(undefined);
        }}
        onConfirm={onDeleteMember}
        title="Remove Team Member"
        description={`Are you sure you want to remove ${selectedMember?.name} from the team? This action cannot be undone.`}
      />
    </>
  );
};

export default TeamMembersSection;
