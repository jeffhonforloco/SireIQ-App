
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserCog, UserMinus } from 'lucide-react';
import { TeamMember } from '../../TeamManagementDialog';

type TeamMemberListProps = {
  teamMembers: TeamMember[];
  onEditMember: (member: TeamMember) => void;
  onDeleteMember: (member: TeamMember) => void;
};

const TeamMemberList = ({ teamMembers, onEditMember, onDeleteMember }: TeamMemberListProps) => {
  return (
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
                  onClick={() => onEditMember(member)}
                >
                  <UserCog className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:text-red-400 hover:border-red-400/30"
                  onClick={() => onDeleteMember(member)}
                >
                  <UserMinus className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TeamMemberList;
