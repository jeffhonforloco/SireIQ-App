
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Bot, Database, BarChart3, Settings, Bell, UserRound } from 'lucide-react';

const EnterpriseDashboard = () => {
  const teamMembers = [
    { name: "Alex Johnson", role: "Admin", avatar: "AJ" },
    { name: "Maria Rodriguez", role: "Agent Builder", avatar: "MR" },
    { name: "Sam Chen", role: "Analyst", avatar: "SC" },
    { name: "Taylor Kim", role: "Developer", avatar: "TK" }
  ];
  
  const teamAgents = [
    { name: "Content Writer", status: "active", lastUsed: "2 hours ago" },
    { name: "Data Analyst", status: "active", lastUsed: "Yesterday" },
    { name: "Research Assistant", status: "idle", lastUsed: "3 days ago" }
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Acme Team</h2>
            <div className="p-2 rounded-full bg-sireiq-accent/20 cursor-pointer">
              <Settings className="w-4 h-4 text-sireiq-cyan" />
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex flex-col">
              <span className="text-xs text-sireiq-light/70">Plan</span>
              <span className="font-medium">Enterprise Pro</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-sireiq-light/70">Usage</span>
              <div className="w-full bg-sireiq-accent/10 rounded-full h-2 mt-1">
                <div className="bg-sireiq-cyan h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
              <span className="text-xs mt-1">65% of quota used</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-sireiq-accent/20">
            <h3 className="text-sm font-semibold mb-3">Team Members</h3>
            <div className="space-y-2">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-sireiq-accent/10 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-sireiq-accent/30 flex items-center justify-center text-xs font-medium">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-xs text-sireiq-light/70">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
              <Users className="w-3 h-3 mr-1" />
              Manage Team
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="lg:col-span-9">
        {/* Header with quick actions */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            <span className="text-gradient glow">Enterprise Dashboard</span>
          </h1>
          
          <div className="flex gap-3">
            <div className="relative">
              <Button variant="ghost" size="icon" className="rounded-full bg-sireiq-accent/10">
                <Bell className="w-5 h-5" />
              </Button>
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-sireiq-cyan"></span>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full bg-sireiq-accent/10">
              <UserRound className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-sireiq-light/70">Active Users</h3>
              <Users className="w-4 h-4 text-sireiq-cyan" />
            </div>
            <p className="text-2xl font-bold">24 / 30</p>
            <p className="text-xs text-sireiq-light/70 mt-1">+3 from last week</p>
          </div>
          
          <div className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-sireiq-light/70">AI Interactions</h3>
              <Bot className="w-4 h-4 text-sireiq-cyan" />
            </div>
            <p className="text-2xl font-bold">1,243</p>
            <p className="text-xs text-sireiq-light/70 mt-1">+17% from last month</p>
          </div>
          
          <div className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-sireiq-light/70">Knowledge Base</h3>
              <Database className="w-4 h-4 text-sireiq-cyan" />
            </div>
            <p className="text-2xl font-bold">89 GB</p>
            <p className="text-xs text-sireiq-light/70 mt-1">Documents: 2,354</p>
          </div>
        </div>
        
        {/* Team workspace content */}
        <div className="bg-sireiq-darker rounded-xl border border-sireiq-accent/20 overflow-hidden">
          <Tabs defaultValue="team-agents" className="w-full">
            <div className="border-b border-sireiq-accent/20">
              <TabsList className="bg-sireiq-dark">
                <TabsTrigger value="team-agents" className="data-[state=active]:bg-sireiq-accent/20">
                  <Bot className="w-4 h-4 mr-2" />
                  Team Agents
                </TabsTrigger>
                <TabsTrigger value="knowledge-sync" className="data-[state=active]:bg-sireiq-accent/20">
                  <Database className="w-4 h-4 mr-2" />
                  Knowledge Sync
                </TabsTrigger>
                <TabsTrigger value="usage-reports" className="data-[state=active]:bg-sireiq-accent/20">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Usage Reports
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="team-agents" className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Workspace AI Agents</h2>
                <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  <Bot className="w-4 h-4 mr-2" />
                  Create New Agent
                </Button>
              </div>
              
              <div className="space-y-4">
                {teamAgents.map((agent, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sireiq-accent/20 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-sireiq-cyan" />
                      </div>
                      <div>
                        <h3 className="font-medium">{agent.name}</h3>
                        <p className="text-xs text-sireiq-light/70">Last used: {agent.lastUsed}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                      <span className="text-sm">{agent.status === 'active' ? 'Active' : 'Idle'}</span>
                      <Button variant="ghost" size="sm">Configure</Button>
                      <Button variant="outline" size="sm">Chat</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="knowledge-sync" className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Knowledge Sources</h2>
                  <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                    <Database className="w-4 h-4 mr-2" />
                    Connect New Source
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Google Drive", connected: true, files: 324 },
                    { name: "Notion", connected: true, files: 56 },
                    { name: "SharePoint", connected: false, files: 0 },
                    { name: "Confluence", connected: false, files: 0 }
                  ].map((source, i) => (
                    <div key={i} className={`p-4 rounded-lg border ${source.connected ? 'bg-sireiq-accent/5 border-sireiq-accent/20' : 'bg-sireiq-darker border-sireiq-accent/10'}`}>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">{source.name}</h3>
                        <div className={`px-2 py-1 rounded-full text-xs ${source.connected ? 'bg-green-400/10 text-green-400' : 'bg-sireiq-accent/20 text-sireiq-light/70'}`}>
                          {source.connected ? 'Connected' : 'Not Connected'}
                        </div>
                      </div>
                      {source.connected && (
                        <p className="text-sm text-sireiq-light/70">
                          {source.files} files indexed • Last synced 2 hours ago
                        </p>
                      )}
                      <Button 
                        variant={source.connected ? "outline" : "default"}
                        size="sm"
                        className={source.connected ? "mt-3 border-sireiq-accent/30" : "mt-3 bg-sireiq-cyan text-sireiq-darker"}
                      >
                        {source.connected ? 'Manage' : 'Connect'}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="usage-reports" className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Usage Analytics</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">This Week</Button>
                    <Button variant="outline" size="sm">This Month</Button>
                    <Button variant="outline" size="sm">Custom</Button>
                  </div>
                </div>
                
                <div className="h-64 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20 p-4 flex items-center justify-center">
                  <p className="text-sireiq-light/50">Chart visualization would appear here</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-sireiq-darker rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-sm font-medium text-sireiq-light/70 mb-1">Top User</h3>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-xs text-sireiq-light/70 mt-1">463 interactions</p>
                  </div>
                  
                  <div className="p-4 bg-sireiq-darker rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-sm font-medium text-sireiq-light/70 mb-1">Most Used Agent</h3>
                    <p className="font-medium">Content Writer</p>
                    <p className="text-xs text-sireiq-light/70 mt-1">327 sessions</p>
                  </div>
                  
                  <div className="p-4 bg-sireiq-darker rounded-lg border border-sireiq-accent/20">
                    <h3 className="text-sm font-medium text-sireiq-light/70 mb-1">Average Session</h3>
                    <p className="font-medium">14 minutes</p>
                    <p className="text-xs text-sireiq-light/70 mt-1">+2min from last week</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
