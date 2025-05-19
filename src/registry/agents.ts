
import { Agent } from '@/agents/types';
import { researchAgent } from '@/agents/research';
import { summarizerAgent } from '@/agents/summarizer';
import { dataAnalysisAgent } from '@/agents/data-analysis';
import { contentCreationAgent } from '@/agents/content-creation';

export const agents: Agent[] = [
  researchAgent,
  summarizerAgent,
  dataAnalysisAgent,
  contentCreationAgent,
];

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};
