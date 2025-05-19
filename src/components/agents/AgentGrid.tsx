
import React from 'react';
import { agents } from '@/registry/agents';
import AgentCard from './AgentCard';
import AgentErrorBoundary from './AgentErrorBoundary';

const AgentGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <AgentErrorBoundary key={agent.id}>
          <AgentCard agent={agent} />
        </AgentErrorBoundary>
      ))}
    </div>
  );
};

export default AgentGrid;
