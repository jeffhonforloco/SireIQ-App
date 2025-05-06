
import React from 'react';
import ActiveSessionsCard from './ActiveSessionsCard';

interface Session {
  user: string;
  device: string;
  location: string;
  time: string;
}

interface ActiveSessionsSectionProps {
  sessions: Session[];
}

const ActiveSessionsSection: React.FC<ActiveSessionsSectionProps> = ({ sessions }) => {
  return <ActiveSessionsCard sessions={sessions} />;
};

export default ActiveSessionsSection;
