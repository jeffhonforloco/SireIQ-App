
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserCog, Shield } from 'lucide-react';
import TeamMembersTab from './TeamMembersTab';
import RolesPermissionsTab from './RolesPermissionsTab';
import AccessLogsTab from './AccessLogsTab';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
};

type TeamRole = {
  name: string;
  description: string;
  color: string;
};

type TeamManagementTabsProps = {
  teamMembers: TeamMember[];
  teamRoles: TeamRole[];
};

const TeamManagementTabs = ({ teamMembers, teamRoles }: TeamManagementTabsProps) => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="glass-effect rounded-xl border border-sireiq-accent/30 overflow-hidden">
        <Tabs defaultValue="team-members" className="w-full">
          <div className="border-b border-sireiq-accent/20 px-4">
            <TabsList className="bg-transparent h-16">
              <TabsTrigger 
                value="team-members"
                className="data-[state=active]:bg-sireiq-accent/20 data-[state=active]:text-sireiq-cyan"
              >
                <Users className="h-5 w-5 mr-2" />
                Team Members
              </TabsTrigger>
              <TabsTrigger 
                value="roles-permissions"
                className="data-[state=active]:bg-sireiq-accent/20 data-[state=active]:text-sireiq-cyan"
              >
                <UserCog className="h-5 w-5 mr-2" />
                Roles & Permissions
              </TabsTrigger>
              <TabsTrigger 
                value="access-logs"
                className="data-[state=active]:bg-sireiq-accent/20 data-[state=active]:text-sireiq-cyan"
              >
                <Shield className="h-5 w-5 mr-2" />
                Access Logs
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="team-members" className="p-6">
            <TeamMembersTab teamMembers={teamMembers} />
          </TabsContent>
          
          <TabsContent value="roles-permissions" className="p-6">
            <RolesPermissionsTab teamRoles={teamRoles} />
          </TabsContent>
          
          <TabsContent value="access-logs" className="p-6">
            <AccessLogsTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamManagementTabs;
