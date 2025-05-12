
import React, { useState } from 'react';
import { Sidebar, SidebarContent, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Activity, List, Database } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ScrollArea } from '@/components/ui/scroll-area';

type LogEntry = {
  id: string;
  timestamp: string;
  event: string;
  user: string;
  details: string;
  severity: 'info' | 'warning' | 'error';
};

type MetricEntry = {
  id: string;
  name: string;
  value: number;
  change: number;
  unit: string;
};

// Sample data - in a real app this would come from an API
const sampleLogs: LogEntry[] = [
  {
    id: '1',
    timestamp: '2025-05-12T09:23:11',
    event: 'Agent execution',
    user: 'current_user',
    details: 'Content generation completed',
    severity: 'info',
  },
  {
    id: '2',
    timestamp: '2025-05-12T09:15:44',
    event: 'Data access',
    user: 'system',
    details: 'Vector database query performed',
    severity: 'info',
  },
  {
    id: '3',
    timestamp: '2025-05-12T08:54:22',
    event: 'Bias detected',
    user: 'system',
    details: 'Potential gender bias in generation',
    severity: 'warning',
  },
  {
    id: '4',
    timestamp: '2025-05-12T08:45:18',
    event: 'Agent deployment',
    user: 'current_user',
    details: 'Custom agent deployed to production',
    severity: 'info',
  },
];

const sampleMetrics: MetricEntry[] = [
  { id: '1', name: 'Fairness Score', value: 92, change: 3, unit: '%' },
  { id: '2', name: 'Data Diversity', value: 87, change: -2, unit: '%' },
  { id: '3', name: 'Response Consistency', value: 95, change: 1, unit: '%' },
  { id: '4', name: 'Gender Representation', value: 83, change: 5, unit: '%' },
];

const GovernancePanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('audit');
  const [isEnabled] = useLocalStorage('governance-panel-enabled', true);
  
  if (!isEnabled) return null;

  return (
    <Sidebar
      className="border-l border-sireiq-accent/30 w-[350px] transition-all duration-300 bg-sireiq-darker"
      collapsible
    >
      <div className="flex items-center justify-between p-4 border-b border-sireiq-accent/20">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-sireiq-cyan" />
          <h2 className="text-sm font-medium">Governance & Monitoring</h2>
        </div>
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </SidebarTrigger>
      </div>

      <SidebarContent>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="audit">Audit</TabsTrigger>
            <TabsTrigger value="metrics">Bias Metrics</TabsTrigger>
            <TabsTrigger value="lineage">Data Lineage</TabsTrigger>
          </TabsList>
          
          <TabsContent value="audit" className="m-0">
            <div className="p-2">
              <h3 className="text-xs font-medium text-sireiq-light/60 mb-2">Recent Activity</h3>
              <ScrollArea className="h-[calc(100vh-230px)] pr-2">
                <div className="space-y-2">
                  {sampleLogs.map((log) => (
                    <div 
                      key={log.id} 
                      className="border border-sireiq-accent/20 rounded-md p-3 bg-black/20"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm font-medium">{log.event}</div>
                          <div className="text-xs text-sireiq-light/60">{log.user}</div>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          log.severity === 'warning' ? 'bg-amber-500/20 text-amber-300' : 
                          log.severity === 'error' ? 'bg-red-500/20 text-red-300' :
                          'bg-sireiq-accent/20 text-sireiq-light/60'
                        }`}>
                          {log.severity}
                        </div>
                      </div>
                      <p className="text-xs mt-1 text-sireiq-light/80">{log.details}</p>
                      <div className="text-[10px] text-sireiq-light/40 mt-2">
                        {new Date(log.timestamp).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="metrics" className="m-0">
            <div className="p-2">
              <h3 className="text-xs font-medium text-sireiq-light/60 mb-2">Bias Detection Metrics</h3>
              <ScrollArea className="h-[calc(100vh-230px)] pr-2">
                <div className="space-y-4">
                  {sampleMetrics.map((metric) => (
                    <div key={metric.id} className="border border-sireiq-accent/20 rounded-md p-3 bg-black/20">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{metric.name}</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-lg font-medium">{metric.value}{metric.unit}</span>
                          <span className={`text-xs ${metric.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {metric.change > 0 ? `+${metric.change}` : metric.change}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 bg-sireiq-accent/20 h-1 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2" 
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="lineage" className="m-0">
            <div className="p-2">
              <h3 className="text-xs font-medium text-sireiq-light/60 mb-2">Data Sources & Lineage</h3>
              <ScrollArea className="h-[calc(100vh-230px)] pr-2">
                <div className="flex flex-col space-y-1">
                  <Button variant="ghost" className="justify-start text-sm">
                    <Database className="h-4 w-4 mr-2" /> Vector Database (Primary)
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm">
                    <Database className="h-4 w-4 mr-2" /> Knowledge Graph
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm">
                    <Database className="h-4 w-4 mr-2" /> Document Storage
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm">
                    <Database className="h-4 w-4 mr-2" /> User Feedback DB
                  </Button>
                  <div className="pt-4 pb-2 border-t border-sireiq-accent/20 mt-4">
                    <h4 className="text-xs font-medium text-sireiq-light/60 mb-2">Data Flow Visualization</h4>
                  </div>
                  <div className="h-64 border border-dashed border-sireiq-accent/30 rounded-md flex items-center justify-center">
                    <p className="text-xs text-sireiq-light/40">Interactive data flow diagram</p>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
      </SidebarContent>
    </Sidebar>
  );
};

export default GovernancePanel;
