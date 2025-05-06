
import React from 'react';
import { Button } from '@/components/ui/button';
import { UserPlus, UserCog, UserMinus } from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
};

type TeamMembersTabProps = {
  teamMembers: TeamMember[];
};

const TeamMembersTab = ({ teamMembers }: TeamMembersTabProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>
      
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between bg-sireiq-darker p-4 rounded-lg border border-sireiq-accent/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sireiq-accent/30 flex items-center justify-center text-lg font-medium">
                {member.avatar}
              </div>
              <div>
                <p className="font-bold">{member.name}</p>
                <p className="text-sm text-sireiq-light/70">{member.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 rounded-full bg-sireiq-accent/20 text-sm">
                {member.role}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  <UserCog className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:text-red-400 hover:border-red-400/30">
                  <UserMinus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersTab;
