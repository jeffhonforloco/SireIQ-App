import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface SecurityActivity {
  event: string;
  time: string;
}

const SecurityDashboardCard = () => {
  const [securityScore, setSecurityScore] = useState(92);
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState<SecurityActivity[]>([
    { event: "Security scan completed", time: "Today, 09:45 AM" },
    { event: "Admin login from new IP", time: "Yesterday, 02:15 PM" },
    { event: "Password policy updated", time: "Jun 15, 2023, 11:30 AM" }
  ]);

  // Simulate periodic security score updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setTimeout(() => {
        setSecurityScore(prev => {
          // Random fluctuation between -3 and +3
          const change = Math.floor(Math.random() * 7) - 3;
          // Keep score between 85 and 99
          return Math.min(99, Math.max(85, prev + change));
        });
        setLoading(false);
      }, 800);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
      <h3 className="text-xl font-bold mb-6 flex items-center">
        <Shield className="h-5 w-5 text-sireiq-cyan mr-2" />
        Security Dashboard
      </h3>
      
      <div className="space-y-6">
        <div className={`space-y-3 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex justify-between items-center">
            <span className="font-medium">Security Score</span>
            <span className={`font-bold ${
              securityScore > 90 ? 'text-green-400' : 
              securityScore > 80 ? 'text-yellow-400' : 'text-red-400'
            }`}>{securityScore}/100</span>
          </div>
          <div className="w-full h-2 bg-sireiq-accent/20 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                securityScore > 90 ? 'bg-green-400' : 
                securityScore > 80 ? 'bg-yellow-400' : 'bg-red-400'
              }`} 
              style={{ width: `${securityScore}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "2FA Enabled", status: "Enabled", color: "text-green-400" },
            { name: "SSO Integration", status: "Active", color: "text-green-400" },
            { name: "Data Encryption", status: "Enabled", color: "text-green-400" },
            { name: "Last Security Scan", status: "Today", color: "text-green-400" }
          ].map((item, i) => (
            <div key={i} className="bg-sireiq-darker rounded-lg p-3 hover:bg-sireiq-accent/10 transition-colors">
              <p className="text-xs text-sireiq-light/50 mb-1">{item.name}</p>
              <p className={`font-medium ${item.color} flex items-center`}>
                <CheckCircle className="h-3 w-3 mr-1" />
                {item.status}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-sireiq-darker rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
          <div className="space-y-3">
            {activities.map((activity, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <p className="text-sireiq-light/80">{activity.event}</p>
                <p className="text-xs text-sireiq-light/50 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {activity.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboardCard;
