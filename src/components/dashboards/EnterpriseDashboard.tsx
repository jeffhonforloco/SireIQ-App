
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Users, 
  BarChart, 
  FileText, 
  Settings, 
  Shield, 
  Database, 
  Globe,
  Search,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const EnterpriseDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const teamMembers = [
    { name: 'Alex Johnson', role: 'Admin', avatar: 'AJ', lastActive: '2 min ago', status: 'active' },
    { name: 'Maria Garcia', role: 'Editor', avatar: 'MG', lastActive: '1 hour ago', status: 'active' },
    { name: 'David Kim', role: 'Viewer', avatar: 'DK', lastActive: '3 hours ago', status: 'idle' },
    { name: 'Sarah Wilson', role: 'Editor', avatar: 'SW', lastActive: '2 days ago', status: 'offline' },
  ];
  
  const inviteTeamMember = () => {
    toast.success('Invitation sent successfully');
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-sireiq-light">Enterprise Dashboard</h1>
          <p className="text-sireiq-light/70">Manage your organization's AI solutions</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            onClick={() => toast.success('Help center opened')}
          >
            <Search className="w-4 h-4 mr-2 text-sireiq-cyan" />
            Help Center
          </Button>
          
          <Button 
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
            onClick={() => toast.success('Settings opened')}
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main tabs */}
      <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="grid grid-cols-5 mb-6 bg-sireiq-accent/10">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-green-500">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">AI Agents Active</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-green-500">+3 from last month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">982K</div>
                <p className="text-xs text-green-500">+18% from last month</p>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Knowledge Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-green-500">+5 from last month</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    icon: CheckCircle,
                    iconColor: 'text-green-500',
                    title: 'New knowledge base connected',
                    description: 'Legal documentation was successfully indexed',
                    time: '10 minutes ago'
                  },
                  { 
                    icon: Users,
                    iconColor: 'text-blue-500',
                    title: 'New team member added',
                    description: 'Sarah Wilson joined as Editor',
                    time: '2 hours ago'
                  },
                  { 
                    icon: Shield,
                    iconColor: 'text-yellow-500',
                    title: 'Security audit completed',
                    description: 'All systems passed security verification',
                    time: '1 day ago'
                  },
                  { 
                    icon: Database,
                    iconColor: 'text-purple-500',
                    title: 'Data processing complete',
                    description: 'Monthly analytics report generated',
                    time: '2 days ago'
                  },
                ].map((activity, i) => (
                  <div key={i} className="flex">
                    <div className={`flex-shrink-0 ${activity.iconColor}`}>
                      <activity.icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-sm text-sireiq-light/70">{activity.description}</p>
                      <p className="text-xs text-sireiq-light/50 mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Resource Usage */}
          <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="text-base font-medium">Resource Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">AI Credit Usage</span>
                  <span className="text-sm">68% of monthly allocation</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">Storage</span>
                  <span className="text-sm">42% of 500GB</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">API Rate Limit</span>
                  <span className="text-sm">23% of maximum</span>
                </div>
                <Progress value={23} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Team Tab */}
        <TabsContent value="team" className="space-y-6">
          <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base font-medium">Team Members</CardTitle>
                <CardDescription>Manage your organization's team</CardDescription>
              </div>
              <Button 
                size="sm" 
                className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
                onClick={inviteTeamMember}
              >
                <Users className="w-4 h-4 mr-2" />
                Invite Member
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member, i) => (
                    <TableRow key={i} className="hover:bg-sireiq-accent/10">
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
                        <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader>
                <CardTitle className="text-base font-medium">Team Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { role: 'Admin', permissions: 'Full access to all resources' },
                    { role: 'Editor', permissions: 'Can edit but not delete resources' },
                    { role: 'Viewer', permissions: 'Read-only access to resources' }
                  ].map((role, i) => (
                    <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md">
                      <h3 className="font-medium">{role.role}</h3>
                      <p className="text-sm text-sireiq-light/70">{role.permissions}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full">
                  Edit Roles
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader>
                <CardTitle className="text-base font-medium">Active Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { user: 'Alex Johnson', device: 'MacBook Pro', location: 'San Francisco, US', time: '2 hours' },
                    { user: 'Maria Garcia', device: 'Windows PC', location: 'Austin, US', time: '45 minutes' },
                    { user: 'David Kim', device: 'iPhone 16', location: 'New York, US', time: '30 minutes' }
                  ].map((session, i) => (
                    <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{session.user}</h3>
                        <Badge className="bg-green-500 text-sireiq-darker">Active</Badge>
                      </div>
                      <p className="text-sm text-sireiq-light/70">{session.device} · {session.location}</p>
                      <p className="text-xs text-sireiq-light/50 mt-1">Active for {session.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full text-red-400">
                  End All Other Sessions
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-base font-medium">Usage Trends</CardTitle>
              </CardHeader>
              <CardContent className="h-72 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center border border-dashed border-sireiq-accent/30 rounded-md">
                  <BarChart className="h-10 w-10 text-sireiq-cyan" />
                  <span className="ml-2 text-sireiq-light/70">Usage chart visualization</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader>
                <CardTitle className="text-base font-medium">Top AI Models Used</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Content Generator', usage: '43%', trend: '+5%' },
                  { name: 'Data Analyzer', usage: '28%', trend: '+2%' },
                  { name: 'Sentiment Analysis', usage: '18%', trend: '-3%' },
                  { name: 'Image Recognition', usage: '11%', trend: '+8%' }
                ].map((model, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{model.name}</span>
                        <span className="text-sm">{model.usage}</span>
                      </div>
                      <Progress value={parseInt(model.usage)} className="h-2" />
                      <div className="flex justify-end mt-1">
                        <span className={`text-xs ${model.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {model.trend} from last month
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-base font-medium">Reports</CardTitle>
                <CardDescription>Access detailed analytics reports</CardDescription>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
              >
                <FileText className="w-4 h-4 mr-2 text-sireiq-cyan" />
                Generate Report
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Report</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Generated</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: 'Monthly Usage Summary', period: 'April 2025', date: 'May 1, 2025', status: 'Ready' },
                    { name: 'Model Performance', period: 'Q1 2025', date: 'April 15, 2025', status: 'Ready' },
                    { name: 'User Activity', period: 'Last 30 days', date: 'May 5, 2025', status: 'Processing' },
                    { name: 'Cost Analysis', period: 'Q2 2025 (partial)', date: 'May 6, 2025', status: 'Ready' }
                  ].map((report, i) => (
                    <TableRow key={i} className="hover:bg-sireiq-accent/10">
                      <TableCell>{report.name}</TableCell>
                      <TableCell>{report.period}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <Badge className={`${report.status === 'Ready' ? 'bg-green-500' : 'bg-yellow-500'} text-sireiq-darker`}>
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader>
                <CardTitle className="text-base font-medium">Security Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Two-Factor Authentication', status: 'Enabled', icon: CheckCircle, iconColor: 'text-green-500' },
                    { name: 'Data Encryption', status: 'Enabled', icon: CheckCircle, iconColor: 'text-green-500' },
                    { name: 'Regular Backups', status: 'Enabled', icon: CheckCircle, iconColor: 'text-green-500' },
                    { name: 'Vulnerability Scan', status: 'Due in 15 days', icon: AlertCircle, iconColor: 'text-yellow-500' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md">
                      <div className="flex items-center">
                        <item.icon className={`h-5 w-5 ${item.iconColor} mr-3`} />
                        <span>{item.name}</span>
                      </div>
                      <Badge className={`${item.status === 'Enabled' ? 'bg-green-500' : 'bg-yellow-500'} text-sireiq-darker`}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
              <CardHeader>
                <CardTitle className="text-base font-medium">Recent Security Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      event: 'New login from unrecognized device',
                      details: 'Windows PC - Chicago, US',
                      time: '2 hours ago',
                      severity: 'Medium'
                    },
                    { 
                      event: 'Password changed',
                      details: 'Alex Johnson',
                      time: '1 day ago',
                      severity: 'Low'
                    },
                    { 
                      event: 'Failed login attempts (5)',
                      details: 'Account: maria.garcia@company.com',
                      time: '2 days ago',
                      severity: 'High'
                    },
                    { 
                      event: 'API key rotated',
                      details: 'Development environment',
                      time: '3 days ago',
                      severity: 'Low'
                    }
                  ].map((event, i) => (
                    <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{event.event}</h3>
                        <Badge className={`
                          ${event.severity === 'High' ? 'bg-red-500' : 
                            event.severity === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'} 
                          text-sireiq-darker
                        `}>
                          {event.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-sireiq-light/70">{event.details}</p>
                      <p className="text-xs text-sireiq-light/50 mt-1">{event.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full">
                  <Shield className="w-4 h-4 mr-2 text-sireiq-cyan" />
                  View All Security Events
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="text-base font-medium">Compliance Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Framework</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Audit</TableHead>
                    <TableHead>Next Audit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { framework: 'GDPR', status: 'Compliant', lastAudit: 'March 15, 2025', nextAudit: 'September 15, 2025' },
                    { framework: 'HIPAA', status: 'Compliant', lastAudit: 'January 20, 2025', nextAudit: 'July 20, 2025' },
                    { framework: 'SOC 2', status: 'In Progress', lastAudit: 'N/A', nextAudit: 'June 30, 2025' },
                    { framework: 'ISO 27001', status: 'Compliant', lastAudit: 'February 10, 2025', nextAudit: 'August 10, 2025' }
                  ].map((item, i) => (
                    <TableRow key={i} className="hover:bg-sireiq-accent/10">
                      <TableCell>{item.framework}</TableCell>
                      <TableCell>
                        <Badge className={`${
                          item.status === 'Compliant' ? 'bg-green-500' : 
                          item.status === 'In Progress' ? 'bg-yellow-500' : 'bg-red-500'
                        } text-sireiq-darker`}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.lastAudit}</TableCell>
                      <TableCell>{item.nextAudit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-between">
                <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                  Download Reports
                </Button>
                <Button className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
                  Schedule Audit
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Knowledge Sources',
                icon: Database,
                description: 'Connect and manage your data sources',
                items: [
                  { name: 'Company Wiki', type: 'Document Repository', status: 'Connected' },
                  { name: 'Product Documentation', type: 'API', status: 'Connected' },
                  { name: 'Customer Support Tickets', type: 'Database', status: 'Connected' }
                ]
              },
              {
                title: 'Global Deployment',
                icon: Globe,
                description: 'Manage your worldwide infrastructure',
                items: [
                  { name: 'North America', type: 'Region', status: 'Active' },
                  { name: 'Europe', type: 'Region', status: 'Active' },
                  { name: 'Asia Pacific', type: 'Region', status: 'Planned' }
                ]
              },
              {
                title: 'Custom Workflows',
                icon: Settings,
                description: 'Configure your business processes',
                items: [
                  { name: 'Customer Onboarding', type: 'Process', status: 'Active' },
                  { name: 'Support Ticket Triage', type: 'Process', status: 'Active' },
                  { name: 'Content Approval', type: 'Process', status: 'Draft' }
                ]
              }
            ].map((resource, i) => (
              <Card key={i} className="bg-sireiq-accent/5 border-sireiq-accent/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <resource.icon className="h-5 w-5 text-sireiq-cyan" />
                    <CardTitle className="text-base font-medium">{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resource.items.map((item, j) => (
                      <div key={j} className="p-3 border border-sireiq-accent/20 rounded-md">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <Badge className={`${
                            item.status === 'Active' || item.status === 'Connected' ? 'bg-green-500' : 
                            item.status === 'Draft' || item.status === 'Planned' ? 'bg-yellow-500' : 'bg-gray-500'
                          } text-sireiq-darker`}>
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-sireiq-light/70">{item.type}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full">
                    Manage {resource.title}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
            <CardHeader>
              <CardTitle className="text-base font-medium">Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border border-sireiq-accent/20 rounded-md bg-gradient-to-r from-sireiq-accent/10 to-sireiq-cyan/5">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-2">Enterprise Premium</h2>
                    <p className="text-sireiq-light/70 mb-4">Your plan renews on June 15, 2025</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Unlimited AI agents</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">10M requests per month</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Enterprise-grade security</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">24/7 dedicated support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-0 text-center md:text-right">
                    <div className="text-lg font-bold mb-2">Current Usage</div>
                    <div className="text-3xl font-bold text-sireiq-cyan">6.2M / 10M</div>
                    <p className="text-sm text-sireiq-light/70">requests this month</p>
                    <Button className="mt-4 bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
                      Manage Plan
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnterpriseDashboard;
