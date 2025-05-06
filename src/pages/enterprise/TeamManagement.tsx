
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, UserCog, UserMinus, Shield } from 'lucide-react';
import DemoRequestModal from '@/components/enterprise/DemoRequestModal';

const TeamManagement = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  const teamMembers = [
    { id: 1, name: "Alex Johnson", role: "Admin", email: "alex@example.com", avatar: "AJ" },
    { id: 2, name: "Sarah Williams", role: "Editor", email: "sarah@example.com", avatar: "SW" },
    { id: 3, name: "Michael Chen", role: "Viewer", email: "michael@example.com", avatar: "MC" },
    { id: 4, name: "Emma Davis", role: "Editor", email: "emma@example.com", avatar: "ED" },
  ];
  
  const teamRoles = [
    { name: "Admin", description: "Full access to all features and settings", color: "bg-red-500" },
    { name: "Editor", description: "Can edit content but not manage team or settings", color: "bg-blue-500" },
    { name: "Viewer", description: "Read-only access to content", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Team Management | SireIQ Enterprise</title>
        <meta name="description" content="Centralized controls and permissions for your entire creative team with SireIQ's enterprise team management." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Users className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Team Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Centralized controls and permissions for your entire creative team.
            </p>
          </div>
        </section>
        
        {/* Team Management UI */}
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
              </TabsContent>
              
              <TabsContent value="roles-permissions" className="p-6">
                <h2 className="text-2xl font-bold mb-6">Roles & Permissions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {teamRoles.map((role, index) => (
                    <Card key={index} className="bg-transparent border border-sireiq-accent/30 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-3 h-3 rounded-full ${role.color}`}></div>
                          <h3 className="text-xl font-bold">{role.name}</h3>
                        </div>
                        <p className="text-sireiq-light/70 mb-4">{role.description}</p>
                        <Button variant="outline" size="sm" className="w-full border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          Edit Permissions
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-sireiq-darker rounded-lg border border-sireiq-accent/20 p-4">
                  <h3 className="font-bold mb-3">Permission Categories</h3>
                  <div className="space-y-4">
                    {[
                      "Content Creation & Editing",
                      "AI Model Access",
                      "Team Management",
                      "Analytics & Reporting",
                      "Settings & Configuration"
                    ].map((category, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-sireiq-accent/5 rounded-lg">
                        <span>{category}</span>
                        <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          Configure
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="access-logs" className="p-6">
                <h2 className="text-2xl font-bold mb-6">Access Logs</h2>
                
                <div className="bg-sireiq-darker rounded-lg border border-sireiq-accent/20 p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Recent Activity</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                        Today
                      </Button>
                      <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                        This Week
                      </Button>
                      <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                        This Month
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { user: "Alex Johnson", action: "Added new team member", time: "Today, 10:45 AM" },
                      { user: "Sarah Williams", action: "Modified permissions for Editor role", time: "Yesterday, 3:20 PM" },
                      { user: "Alex Johnson", action: "Removed team member", time: "Yesterday, 11:15 AM" },
                      { user: "Michael Chen", action: "Logged in from new device", time: "Jun 15, 2023, 9:30 AM" },
                      { user: "Emma Davis", action: "Changed password", time: "Jun 14, 2023, 2:45 PM" }
                    ].map((log, i) => (
                      <div key={i} className="flex flex-col md:flex-row md:justify-between p-3 bg-sireiq-accent/5 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                          <span className="font-medium">{log.user}</span>
                          <span className="text-sireiq-light/70">{log.action}</span>
                        </div>
                        <span className="text-sm text-sireiq-light/50">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Features grid */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Key Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Role-Based Access Control",
                description: "Define custom roles with granular permissions tailored to your organization's structure."
              },
              {
                title: "Audit Logging",
                description: "Track all user activities with detailed logs for security and compliance purposes."
              },
              {
                title: "Team Onboarding",
                description: "Streamlined onboarding flows to get new team members up and running quickly."
              },
              {
                title: "Usage Analytics",
                description: "Monitor user activity and resource usage across your organization."
              },
              {
                title: "Team Collaboration",
                description: "Enable seamless collaboration with shared workspaces and controlled access."
              },
              {
                title: "Custom Permissions",
                description: "Create custom permission sets for specialized roles within your team."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-transparent border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sireiq-light/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* CTA section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-xl border border-sireiq-accent/30 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to centralize your team management?
            </h2>
            <p className="text-lg text-sireiq-light/70 mb-8 max-w-2xl mx-auto">
              Get started with SireIQ's enterprise team management solution and streamline your creative workflows today.
            </p>
            <Button 
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
              onClick={() => setDemoModalOpen(true)}
            >
              Request Enterprise Demo
            </Button>
          </div>
        </section>
      </main>
      
      <CTASection />
      <Footer />
      
      {/* Demo Request Modal */}
      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </div>
  );
};

export default TeamManagement;
