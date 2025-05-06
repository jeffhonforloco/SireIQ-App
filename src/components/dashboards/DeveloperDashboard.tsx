
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Code, 
  Terminal, 
  Rocket, 
  Github, 
  Database, 
  Layers,
  Settings,
  Play,
  FileCode,
  GitBranch,
  Bug 
} from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const DeveloperDashboard = () => {
  const [activeProject, setActiveProject] = useState('API Gateway');
  const [activeTab, setActiveTab] = useState('overview');

  const runCode = () => {
    toast.success('Code executed successfully!');
  };
  
  const createProject = () => {
    toast.success('New project created');
  };
  
  const deployProject = () => {
    toast.loading('Deploying project...', {
      duration: 3000,
      onAutoClose: () => toast.success('Project deployed successfully!')
    });
  };
  
  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-sireiq-light">Developer Dashboard</h1>
          <p className="text-sireiq-light/70">Build, test, and deploy AI-powered applications</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            onClick={createProject}
          >
            <FileCode className="w-4 h-4 mr-2 text-sireiq-cyan" />
            New Project
          </Button>
          
          <Button 
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
            onClick={deployProject}
          >
            <Rocket className="w-4 h-4 mr-2" />
            Deploy
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          {/* Projects List */}
          <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Layers className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Projects
            </h2>
            <div className="space-y-3">
              {['API Gateway', 'Custom Agent', 'React Dashboard', 'Chatbot UI', 'Data Analyzer'].map((project, i) => (
                <div 
                  key={i} 
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    activeProject === project 
                      ? "bg-sireiq-accent/20 border-l-2 border-sireiq-cyan" 
                      : "hover:bg-sireiq-accent/10"
                  }`}
                  onClick={() => setActiveProject(project)}
                >
                  <h3 className="font-medium">{project}</h3>
                  <div className="flex items-center justify-between text-xs text-sireiq-light/70">
                    <span>Last edited {i+1}d ago</span>
                    {i === 0 && <Badge className="bg-green-500 text-sireiq-darker">Active</Badge>}
                  </div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2 border-dashed border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan mt-2"
                onClick={createProject}
              >
                <Play className="w-4 h-4 text-sireiq-cyan" />
                <span>New Project</span>
              </Button>
            </div>
          </div>
          
          {/* Resources & Integrations */}
          <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <GitBranch className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Integrations
            </h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
                <Github className="w-4 h-4 text-sireiq-cyan" />
                <span>GitHub</span>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
                <Database className="w-4 h-4 text-sireiq-cyan" />
                <span>Supabase</span>
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
                <Code className="w-4 h-4 text-sireiq-cyan" />
                <span>VSCode</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="lg:col-span-9 space-y-6">
          {/* Project Details */}
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold">{activeProject}</CardTitle>
                  <CardDescription>API Gateway for intelligent content routing</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                    <Code className="w-4 h-4 mr-2 text-sireiq-cyan" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
                    <Terminal className="w-4 h-4 mr-2" />
                    Terminal
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
                <TabsList className="grid grid-cols-4 mb-6 bg-sireiq-accent/10">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="models">Models</TabsTrigger>
                  <TabsTrigger value="logs">Logs</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  {/* Status Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">API Requests</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24,582</div>
                        <p className="text-xs text-green-500">+12% from last week</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">156ms</div>
                        <p className="text-xs text-green-500">-24ms from last week</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">0.08%</div>
                        <p className="text-xs text-red-500">+0.01% from last week</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Resource Usage */}
                  <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                    <CardHeader>
                      <CardTitle className="text-base font-medium">Resource Usage</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">CPU</span>
                          <span className="text-sm">32%</span>
                        </div>
                        <Progress value={32} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Memory</span>
                          <span className="text-sm">58%</span>
                        </div>
                        <Progress value={58} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">API Quota</span>
                          <span className="text-sm">76%</span>
                        </div>
                        <Progress value={76} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Recent Deploys */}
                  <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                    <CardHeader>
                      <CardTitle className="text-base font-medium">Recent Deployments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>Version</TableHead>
                            <TableHead>Deployment Time</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Author</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            { version: "v1.4.2", time: "Today, 10:23 AM", status: "Success", author: "Alice Chen" },
                            { version: "v1.4.1", time: "Yesterday", status: "Success", author: "David Kim" },
                            { version: "v1.4.0", time: "3 days ago", status: "Failed", author: "James Wilson" }
                          ].map((deploy, i) => (
                            <TableRow key={i} className="hover:bg-sireiq-accent/10">
                              <TableCell>{deploy.version}</TableCell>
                              <TableCell>{deploy.time}</TableCell>
                              <TableCell>
                                <Badge className={`${deploy.status === 'Success' ? 'bg-green-500' : 'bg-red-500'} text-sireiq-darker`}>
                                  {deploy.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{deploy.author}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="models" className="space-y-6">
                  <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                    <CardHeader>
                      <CardTitle className="text-base font-medium">AI Models</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>Model Name</TableHead>
                            <TableHead>Version</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Latency</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            { name: "Text Generator", version: "1.2.0", status: "Active", latency: "120ms" },
                            { name: "Image Classifier", version: "2.1.5", status: "Active", latency: "85ms" },
                            { name: "Sentiment Analyzer", version: "0.9.3", status: "Testing", latency: "152ms" },
                          ].map((model, i) => (
                            <TableRow key={i} className="hover:bg-sireiq-accent/10">
                              <TableCell>{model.name}</TableCell>
                              <TableCell>{model.version}</TableCell>
                              <TableCell>
                                <Badge className={`${model.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'} text-sireiq-darker`}>
                                  {model.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{model.latency}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="logs" className="space-y-6">
                  <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                    <CardHeader>
                      <CardTitle className="text-base font-medium">System Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-sireiq-darker p-4 rounded-md font-mono text-sm space-y-2 max-h-96 overflow-y-auto">
                        <div className="text-green-400">[INFO] 2025-05-06 10:23:45 - System initialization complete</div>
                        <div className="text-blue-400">[DEBUG] 2025-05-06 10:23:47 - Loading configuration files</div>
                        <div className="text-green-400">[INFO] 2025-05-06 10:23:48 - API Gateway started on port 3000</div>
                        <div className="text-yellow-400">[WARNING] 2025-05-06 10:25:12 - High latency detected on /api/analyze endpoint</div>
                        <div className="text-green-400">[INFO] 2025-05-06 10:26:30 - Processing batch job #45132</div>
                        <div className="text-red-400">[ERROR] 2025-05-06 10:27:05 - Failed to connect to database: timeout</div>
                        <div className="text-green-400">[INFO] 2025-05-06 10:27:10 - Database connection re-established</div>
                        <div className="text-blue-400">[DEBUG] 2025-05-06 10:28:00 - Cache hit ratio: 87.3%</div>
                        <div className="text-green-400">[INFO] 2025-05-06 10:30:00 - Scheduled maintenance task completed</div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
                          <Bug className="w-4 h-4 mr-2 text-sireiq-cyan" />
                          Debug Mode
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings" className="space-y-6">
                  <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
                    <CardHeader>
                      <CardTitle className="text-base font-medium">Project Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
                        <div>
                          <h3 className="font-medium">Environment</h3>
                          <p className="text-sm text-sireiq-light/70">Development</p>
                        </div>
                        <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          Change
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
                        <div>
                          <h3 className="font-medium">API Authentication</h3>
                          <p className="text-sm text-sireiq-light/70">OAuth 2.0</p>
                        </div>
                        <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          Configure
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
                        <div>
                          <h3 className="font-medium">Deployment Target</h3>
                          <p className="text-sm text-sireiq-light/70">Edge Network</p>
                        </div>
                        <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          Change
                        </Button>
                      </div>
                      
                      <div className="flex justify-end mt-4">
                        <Button className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
                          <Settings className="w-4 h-4 mr-2" />
                          Save Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
