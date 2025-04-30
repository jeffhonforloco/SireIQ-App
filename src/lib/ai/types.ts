
export type AgentType = 'researcher' | 'writer' | 'analyst' | 'summarizer' | 'designer';

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  description: string;
  capabilities: string[];
  icon?: string;
}

export interface AgentStep {
  id: string;
  agentId: string;
  input: string;
  output?: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  startedAt?: Date;
  completedAt?: Date;
  error?: string;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface WorkflowStep {
  id: string;
  agentId: string;
  position: number;
  inputFrom?: string; // Previous step ID or 'user'
  outputTo?: string; // Next step ID or 'user'
  config?: Record<string, any>;
}

export interface UserMemoryItem {
  id: string;
  userId: string;
  content: string;
  metadata: Record<string, any>;
  embedding?: number[];
  createdAt: Date;
  tags: string[];
}
