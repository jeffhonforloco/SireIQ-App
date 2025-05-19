
export interface AgentResponse {
  content: string;
  metadata?: Record<string, any>;
  error?: string;
  status: 'success' | 'error' | 'processing';
}

export interface AgentOptions {
  maxRetries?: number;
  timeout?: number;
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  category: AgentCategory;
  icon: string;
  status: 'available' | 'maintenance' | 'beta';
  capabilities: string[];
  process: (input: string, options?: AgentOptions) => Promise<AgentResponse>;
}

export type AgentCategory = 'analysis' | 'creation' | 'research' | 'summarization' | 'utility';
