
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SecurityDashboardCard from '@/components/enterprise/SecurityDashboardCard';
import SecurityEventsCard from '@/components/enterprise/SecurityEventsCard';
import SecurityHealthCard from '@/components/enterprise/SecurityHealthCard';
import ComplianceStatusCard from '@/components/enterprise/ComplianceStatusCard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SecurityDashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <section className="container mx-auto px-4 mb-20">
      <Tabs 
        defaultValue="overview" 
        className="w-full" 
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value);
          setIsLoading(true);
          setTimeout(() => setIsLoading(false), 800);
        }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-gradient">Security</span> Dashboard
          </h2>
          
          <TabsList className="bg-sireiq-accent/10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
        </div>
        
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SecurityDashboardCard />
              <SecurityEventsCard />
            </div>
          </TabsContent>
          
          <TabsContent value="compliance" className="space-y-6">
            <ComplianceStatusCard />
            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-6">Regulatory Documentation</h3>
              <p className="mb-4 text-sireiq-light/70">
                Access and download our latest regulatory compliance documentation and certifications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "GDPR Compliance Statement", date: "Updated May 2025" },
                  { name: "HIPAA Security Assessment", date: "Updated March 2025" },
                  { name: "SOC 2 Type II Report", date: "Updated January 2025" },
                  { name: "ISO 27001 Certification", date: "Valid until December 2026" }
                ].map((doc, i) => (
                  <div key={i} className="p-4 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer transition-colors" onClick={() => toast.success(`Downloading ${doc.name}...`)}>
                    <h4 className="font-medium">{doc.name}</h4>
                    <p className="text-xs text-sireiq-light/50">{doc.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-6">
            <SecurityHealthCard />
            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-4">Security Alerts</h3>
              <div className="space-y-4">
                {[
                  { title: "System update scheduled", message: "Security patches will be applied on May 15", severity: "info" },
                  { title: "New login location detected", message: "If this wasn't you, contact support immediately", severity: "warning" },
                  { title: "Data backup completed", message: "Automatic backup completed successfully", severity: "success" }
                ].map((alert, i) => (
                  <div 
                    key={i} 
                    className={`p-4 rounded-md ${
                      alert.severity === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/30' : 
                      alert.severity === 'info' ? 'bg-blue-500/10 border border-blue-500/30' : 
                      'bg-green-500/10 border border-green-500/30'
                    }`}
                  >
                    <h4 className="font-medium mb-1">{alert.title}</h4>
                    <p className="text-sm text-sireiq-light/70">{alert.message}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="mt-4 w-full border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                onClick={() => toast.info("Security alert settings opened")}
              >
                Configure Alert Settings
              </Button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default SecurityDashboardTabs;
