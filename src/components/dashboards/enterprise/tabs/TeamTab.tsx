
import React, { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { TeamMember } from '../TeamManagementDialog';
import TeamMembersSection from './team/TeamMembersSection';
import TeamPermissionsSection from './team/TeamPermissionsSection';
import ActiveSessionsSection from './team/ActiveSessionsSection';

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
  };

  // Selected member and dialog states
  const [selectedMember, setSelectedMember] = useState<TeamMember | undefined>(undefined);

  return (
    <>
      <TeamMembersSection 
        teamMembers={teamMembers}
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
        onAddMember={handleAddMember}
        onUpdateMember={handleUpdateMember}
        onDeleteMember={handleDeleteMember}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <TeamPermissionsSection />
        <ActiveSessionsSection sessions={activeSessions} />
      </div>
    </>
  );
};

export default TeamTab;
