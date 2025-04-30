
import { Agent } from './types';

export const availableAgents: Agent[] = [
  {
    id: 'researcher',
    name: 'Researcher',
    type: 'researcher',
    description: 'Gathers information from the web and your knowledge base',
    capabilities: ['Web search', 'Document analysis', 'Knowledge retrieval'],
  },
  {
    id: 'writer',
    name: 'Writer',
    type: 'writer',
    description: 'Creates high-quality content based on research',
    capabilities: ['Text generation', 'Content structuring', 'Style adaptation'],
  },
  {
    id: 'analyst',
    name: 'Analyst',
    type: 'analyst',
    description: 'Analyzes data and extracts insights',
    capabilities: ['Data analysis', 'Pattern recognition', 'Report generation'],
  },
  {
    id: 'summarizer',
    name: 'Summarizer',
    type: 'summarizer',
    description: 'Creates concise summaries of longer content',
    capabilities: ['Text summarization', 'Key point extraction', 'Simplification'],
  },
  {
    id: 'designer',
    name: 'Designer',
    type: 'designer',
    description: 'Generates visual designs and creative assets',
    capabilities: ['Image generation', 'Style transfer', 'Layout design'],
  },
];

export const getAgentById = (id: string): Agent | undefined => {
  return availableAgents.find(agent => agent.id === id);
};
