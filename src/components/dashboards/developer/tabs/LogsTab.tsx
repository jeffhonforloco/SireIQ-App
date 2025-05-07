
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bug } from 'lucide-react';

const LogsTab = () => {
  return (
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
  );
};

export default LogsTab;
