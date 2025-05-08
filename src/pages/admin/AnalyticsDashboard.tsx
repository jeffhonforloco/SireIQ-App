
import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, BarChart3, Calendar, Users, Database, ArrowUpRight, ArrowDownRight, ActivitySquare } from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, AreaChart, Area, BarChart as RechartsBarChart,
  Bar, PieChart, Pie, Cell 
} from 'recharts';

// Mock data
const userActivityData = [
  { name: 'Mon', users: 120 },
  { name: 'Tue', users: 140 },
  { name: 'Wed', users: 180 },
  { name: 'Thu', users: 250 },
  { name: 'Fri', users: 220 },
  { name: 'Sat', users: 190 },
  { name: 'Sun', users: 130 },
];

const resourceUsageData = [
  { name: 'Database', current: 68, limit: 100 },
  { name: 'Storage', current: 45, limit: 100 },
  { name: 'Bandwidth', current: 87, limit: 100 },
  { name: 'API Calls', current: 32, limit: 100 },
];

const systemHealthData = [
  { name: 'Uptime', value: 99.8 },
  { name: 'Response', value: 0.2 },
];

const COLORS = ['#00A3C4', '#3CDFFF', '#7134FA', '#F97316'];

const AnalyticsDashboardPage = () => {
  return (
    <AdminLayout title="Analytics Dashboard">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-sireiq-light">Analytics Dashboard</h1>
          <p className="text-sireiq-light/70">Monitor platform performance, user activity, and system resources</p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <select className="bg-sireiq-darker border border-sireiq-accent/30 rounded-md px-3 py-1 text-sm">
            <option value="today">Today</option>
            <option value="7days">Last 7 days</option>
            <option value="30days" selected>Last 30 days</option>
            <option value="90days">Last 90 days</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm text-sireiq-light/70">Total Users</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">1,432</h3>
                  <span className="ml-2 text-xs text-green-400 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />+8.2%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-full bg-sireiq-accent/10">
                <Users className="text-sireiq-cyan h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm text-sireiq-light/70">Active Sessions</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">287</h3>
                  <span className="ml-2 text-xs text-green-400 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />+12.5%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-full bg-sireiq-accent/10">
                <ActivitySquare className="text-sireiq-cyan h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm text-sireiq-light/70">Database Size</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">6.8 GB</h3>
                  <span className="ml-2 text-xs text-red-400 flex items-center">
                    <ArrowDownRight className="h-3 w-3 mr-1" />+3.1%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-full bg-sireiq-accent/10">
                <Database className="text-sireiq-cyan h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm text-sireiq-light/70">API Requests</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">24.3K</h3>
                  <span className="ml-2 text-xs text-green-400 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />+18.7%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-full bg-sireiq-accent/10">
                <BarChart3 className="text-sireiq-cyan h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-sireiq-darker border-sireiq-accent/20 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">User Activity</CardTitle>
            <CardDescription>Active users over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={userActivityData}
                  margin={{ top: 10, right: 0, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3CDFFF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3CDFFF" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" tick={{ fill: '#9EA3AE' }} />
                  <YAxis tick={{ fill: '#9EA3AE' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#434857' }}
                    itemStyle={{ color: '#f3f6fc' }}
                    labelStyle={{ color: '#f3f6fc' }}
                  />
                  <Area type="monotone" dataKey="users" stroke="#3CDFFF" fillOpacity={1} fill="url(#colorUsers)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">System Health</CardTitle>
            <CardDescription>Current system performance status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={systemHealthData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {systemHealthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#434857' }}
                    itemStyle={{ color: '#f3f6fc' }}
                    labelStyle={{ color: '#f3f6fc' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Resource Usage</CardTitle>
            <CardDescription>Current consumption of system resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                  data={resourceUsageData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" tick={{ fill: '#9EA3AE' }} />
                  <YAxis tick={{ fill: '#9EA3AE' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#434857' }}
                    itemStyle={{ color: '#f3f6fc' }}
                    labelStyle={{ color: '#f3f6fc' }}
                  />
                  <Bar dataKey="current" fill="#3CDFFF" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AnalyticsDashboardPage;
