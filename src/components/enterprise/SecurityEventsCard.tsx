
import React, { useState, useEffect } from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SecurityEvent {
  event: string;
  details: string;
  time: string;
  severity: 'High' | 'Medium' | 'Low';
}

const SecurityEventsCard = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([
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
  ]);

  // Simulate new security event appearing periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const randomEvents = [
        { 
          event: 'Unusual API access pattern',
          details: 'From IP: 203.45.67.89',
          time: 'Just now',
          severity: 'Medium' as const
        },
        { 
          event: 'New admin account created',
          details: 'By user: system_admin',
          time: 'Just now',
          severity: 'Medium' as const
        },
        {
          event: 'Password policy exception',
          details: 'Account: developer@company.com',
          time: 'Just now',
          severity: 'Low' as const
        }
      ];
      
      const randomEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
      
      setEvents(prev => [randomEvent, ...prev.slice(0, 3)]);
      toast.info(`New security event: ${randomEvent.event}`, {
        description: randomEvent.details
      });
    }, 60000); // Every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleResolveEvent = (index: number) => {
    setEvents(prev => {
      const newEvents = [...prev];
      // Remove the event
      newEvents.splice(index, 1);
      toast.success("Security event marked as resolved");
      return newEvents;
    });
  };

  const viewAllEvents = () => {
    toast.info("Viewing all security events");
  };

  return (
    <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
      <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
        <span className="flex items-center">
          <Shield className="h-5 w-5 text-sireiq-cyan mr-2" />
          Security Events
        </span>
        <Badge className="bg-sireiq-cyan/20 text-sireiq-cyan hover:bg-sireiq-cyan/30 cursor-pointer">
          {events.length} Active
        </Badge>
      </h3>
      
      <div className="space-y-4 mb-6">
        {events.map((event, i) => (
          <div key={i} className="p-3 border border-sireiq-accent/20 rounded-md relative group hover:bg-sireiq-accent/5 transition-all">
            <div className="flex items-center justify-between">
              <h4 className="font-medium flex items-center">
                {event.severity === 'High' && <AlertCircle className="h-4 w-4 text-red-500 mr-1" />}
                {event.event}
              </h4>
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
            
            <Button
              size="sm"
              variant="outline"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity border-sireiq-accent/30 hover:bg-sireiq-accent/20"
              onClick={() => handleResolveEvent(i)}
            >
              Resolve
            </Button>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full" onClick={viewAllEvents}>
        <Shield className="w-4 h-4 mr-2 text-sireiq-cyan" />
        View All Security Events
      </Button>
    </div>
  );
};

export default SecurityEventsCard;
