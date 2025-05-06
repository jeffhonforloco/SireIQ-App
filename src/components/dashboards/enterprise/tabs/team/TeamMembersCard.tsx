
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import TeamMemberList from './TeamMemberList';
import { TeamMember } from '../../TeamManagementDialog';

type TeamMembersCardProps = {
  teamMembers: TeamMember[];
  onAddMember: () => void;
  onEditMember: (member: TeamMember) => void;
  onDeleteMember: (member: TeamMember) => void;
};

const TeamMembersCard = ({ 
  teamMembers, 
  onAddMember, 
  onEditMember, 
  onDeleteMember 
}: TeamMembersCardProps) => {
  return (
    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium">Team Members</CardTitle>
          <CardDescription>Manage your organization's team</CardDescription>
        </div>
        <Button 
          size="sm" 
          className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
          onClick={onAddMember}
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </CardHeader>
      <CardContent>
        <TeamMemberList 
          teamMembers={teamMembers} 
          onEditMember={onEditMember} 
          onDeleteMember={onDeleteMember} 
        />
      </CardContent>
    </Card>
  );
};

export default TeamMembersCard;
