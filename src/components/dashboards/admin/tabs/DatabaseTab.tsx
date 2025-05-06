
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Save, FileBarChart, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

type DatabaseTabProps = {
  subTab: string;
};

const DatabaseTab = ({ subTab }: DatabaseTabProps) => {
  // Sample database stats
  const dbStats = [
    { label: "Total Size", value: "1.2 GB" },
    { label: "Records", value: "523,491" },
    { label: "Tables", value: "24" },
    { label: "Last Backup", value: "2 hours ago" },
  ];
  
  // Sample queries
  const recentQueries = [
    { query: "SELECT * FROM users WHERE last_login > ?", time: "120ms", rows: 24, timestamp: "10:23 AM" },
    { query: "UPDATE settings SET value = ? WHERE key = ?", time: "85ms", rows: 1, timestamp: "10:15 AM" },
    { query: "SELECT COUNT(*) FROM events WHERE date > ?", time: "210ms", rows: 1, timestamp: "10:02 AM" },
    { query: "INSERT INTO logs (...) VALUES (...)", time: "65ms", rows: 1, timestamp: "09:58 AM" },
    { query: "SELECT * FROM projects WHERE status = ?", time: "145ms", rows: 12, timestamp: "09:45 AM" },
  ];
  
  // Sample backups
  const backups = [
    { name: "Full Backup - May 6, 2025", size: "1.2 GB", timestamp: "May 6, 2025 01:00 AM", status: "Completed" },
    { name: "Full Backup - May 5, 2025", size: "1.1 GB", timestamp: "May 5, 2025 01:00 AM", status: "Completed" },
    { name: "Full Backup - May 4, 2025", size: "1.1 GB", timestamp: "May 4, 2025 01:00 AM", status: "Completed" },
    { name: "Full Backup - May 3, 2025", size: "1.0 GB", timestamp: "May 3, 2025 01:00 AM", status: "Completed" },
    { name: "Full Backup - May 2, 2025", size: "980 MB", timestamp: "May 2, 2025 01:00 AM", status: "Completed" },
  ];

  // Render content based on selected tab
  const renderContent = () => {
    switch (subTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {dbStats.map((stat, index) => (
                <Card key={index} className="bg-sireiq-accent/5 border-sireiq-accent/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-sireiq-light/70">{stat.label}</p>
                      <p className="text-2xl font-semibold">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Database Health</CardTitle>
                <Database className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-sireiq-light/70">Connection Pool</span>
                      <span className="text-sm">12/20</span>
                    </div>
                    <div className="w-full bg-sireiq-accent/20 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-sireiq-light/70">Query Cache Hit Rate</span>
                      <span className="text-sm">82%</span>
                    </div>
                    <div className="w-full bg-sireiq-accent/20 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-sireiq-light/70">Disk Usage</span>
                      <span className="text-sm">65%</span>
                    </div>
                    <div className="w-full bg-sireiq-accent/20 h-2 rounded-full">
                      <div className="bg-sireiq-cyan h-2 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button className="bg-sireiq-cyan text-sireiq-darker">
                    Optimize Database
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'queries':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Queries</h3>
              <Button size="sm" variant="outline">
                Query Browser
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-4 font-medium border-b border-sireiq-accent/20">
                <div className="col-span-2">Query</div>
                <div>Performance</div>
                <div>Time</div>
              </div>
              
              {recentQueries.map((query, index) => (
                <div key={index} className="p-4 grid grid-cols-4 items-center hover:bg-sireiq-accent/10">
                  <div className="col-span-2 font-mono text-sm text-sireiq-light/70">{query.query}</div>
                  <div className="text-sireiq-light/70">{query.time} ({query.rows} rows)</div>
                  <div className="text-sireiq-light/70">{query.timestamp}</div>
                </div>
              ))}
            </div>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Custom Query</CardTitle>
                <Database className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea 
                    className="w-full h-32 p-3 font-mono text-sm rounded-md border border-sireiq-accent/30 bg-sireiq-darker resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sireiq-cyan" 
                    placeholder="Enter SQL query..."
                  />
                  
                  <div className="flex justify-end">
                    <Button className="bg-sireiq-cyan text-sireiq-darker">
                      Execute Query
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'backups':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Backup History</h3>
              <Button size="sm" className="bg-sireiq-cyan text-sireiq-darker">
                <Save className="w-4 h-4 mr-2" />
                Create Backup
              </Button>
            </div>
            
            <div className="rounded-md border border-sireiq-accent/20">
              <div className="p-4 grid grid-cols-4 font-medium border-b border-sireiq-accent/20">
                <div>Name</div>
                <div>Size</div>
                <div>Date</div>
                <div>Status</div>
              </div>
              
              {backups.map((backup, index) => (
                <div key={index} className="p-4 grid grid-cols-4 items-center hover:bg-sireiq-accent/10">
                  <div className="flex items-center">
                    <Save className="w-4 h-4 mr-2 text-sireiq-cyan" />
                    {backup.name}
                  </div>
                  <div className="text-sireiq-light/70">{backup.size}</div>
                  <div className="text-sireiq-light/70">{backup.timestamp}</div>
                  <div>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500">
                      {backup.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Backup Settings</CardTitle>
                <Save className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-sireiq-light/70">Backup Frequency</label>
                      <select className="flex h-10 w-full rounded-md border border-sireiq-accent/30 bg-sireiq-darker px-3 py-2 text-sm">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-sireiq-light/70">Backup Time</label>
                      <select className="flex h-10 w-full rounded-md border border-sireiq-accent/30 bg-sireiq-darker px-3 py-2 text-sm">
                        <option value="1">1:00 AM</option>
                        <option value="2">2:00 AM</option>
                        <option value="3">3:00 AM</option>
                        <option value="4">4:00 AM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-sireiq-light/70">Retention Period</label>
                    <select className="flex h-10 w-full rounded-md border border-sireiq-accent/30 bg-sireiq-darker px-3 py-2 text-sm">
                      <option value="7">7 days</option>
                      <option value="14">14 days</option>
                      <option value="30">30 days</option>
                      <option value="90">90 days</option>
                    </select>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button className="bg-sireiq-cyan text-sireiq-darker">
                      Save Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'monitoring':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-sireiq-darker border-sireiq-accent/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium">Query Load</CardTitle>
                  <Activity className="w-4 h-4 text-sireiq-cyan" />
                </CardHeader>
                <CardContent>
                  <div className="h-40 flex items-center justify-center bg-sireiq-accent/10 rounded-md">
                    <p className="text-sireiq-light/70">Query Load Chart</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-darker border-sireiq-accent/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium">Memory Usage</CardTitle>
                  <FileBarChart className="w-4 h-4 text-sireiq-cyan" />
                </CardHeader>
                <CardContent>
                  <div className="h-40 flex items-center justify-center bg-sireiq-accent/10 rounded-md">
                    <p className="text-sireiq-light/70">Memory Usage Chart</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-darker border-sireiq-accent/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium">Disk I/O</CardTitle>
                  <Database className="w-4 h-4 text-sireiq-cyan" />
                </CardHeader>
                <CardContent>
                  <div className="h-40 flex items-center justify-center bg-sireiq-accent/10 rounded-md">
                    <p className="text-sireiq-light/70">Disk I/O Chart</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium">Database Alerts</CardTitle>
                <Database className="w-4 h-4 text-sireiq-cyan" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-sireiq-accent/5 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="flex items-start">
                        <div className="bg-yellow-500/20 rounded-full p-2 mr-3">
                          <Activity className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div>
                          <p className="font-medium">High CPU Usage</p>
                          <p className="text-sm text-sireiq-light/70">Database server experiencing high CPU load</p>
                        </div>
                      </div>
                      <span className="text-xs text-sireiq-light/70">2h ago</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-sireiq-accent/5 rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="flex items-start">
                        <div className="bg-sireiq-accent/20 rounded-full p-2 mr-3">
                          <Database className="w-4 h-4 text-sireiq-cyan" />
                        </div>
                        <div>
                          <p className="font-medium">Index Optimization Recommended</p>
                          <p className="text-sm text-sireiq-light/70">Some queries could benefit from index optimization</p>
                        </div>
                      </div>
                      <span className="text-xs text-sireiq-light/70">1d ago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return renderContent();
};

export default DatabaseTab;
