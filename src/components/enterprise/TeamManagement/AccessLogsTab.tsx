
import React from 'react';
import { Button } from '@/components/ui/button';

const AccessLogsTab = () => {
  return (
    <div>
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
    </div>
  );
};

export default AccessLogsTab;
