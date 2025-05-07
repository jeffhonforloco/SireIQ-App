
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';

type Session = {
  user: string;
  device: string;
  location: string;
  time: string;
};

type ActiveSessionsCardProps = {
  sessions: Session[];
};

const ActiveSessionsCard = ({ sessions }: ActiveSessionsCardProps) => {
  return (
    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
      <CardHeader>
        <CardTitle className="text-base font-medium">Active Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session, i) => (
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
        <Button 
          variant="outline" 
          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full text-red-400"
          onClick={() => {
            toast.success('All other sessions have been ended');
          }}
        >
          End All Other Sessions
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActiveSessionsCard;
