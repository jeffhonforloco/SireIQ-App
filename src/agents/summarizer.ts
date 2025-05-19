
import { Agent, AgentOptions, AgentResponse } from './types';

export const summarizerAgent: Agent = {
  id: 'summarizer',
  name: 'Content Summarizer',
  description: 'Creates concise summaries from long-form content while preserving key insights',
  category: 'summarization',
  icon: 'file-text',
  status: 'available',
  capabilities: [
    'Document summarization',
    'Key point extraction',
    'Multiple output formats',
    'Adjustable detail levels'
  ],
  process: async (input: string, options?: AgentOptions): Promise<AgentResponse> => {
    try {
      console.log(`Summarizer agent processing: "${input}" with options:`, options);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if input is too short to summarize
      if (input.length < 100) {
        return {
          status: 'error',
          content: '',
          error: 'Input text is too short to generate a meaningful summary. Please provide longer content.'
        };
      }
      
      // Generate summary based on input text
      const wordCount = input.split(' ').length;
      const paragraphCount = input.split('\n\n').length;
      
      return {
        status: 'success',
        content: `## Summary\n\n` +
          `This ${wordCount}-word document covers key topics related to ${input.split(' ').slice(0, 3).join(' ')}...\n\n` +
          `### Key Points:\n\n` +
          `1. The main argument focuses on core concepts and their applications\n` +
          `2. Several supporting examples reinforce the central thesis\n` +
          `3. The conclusion suggests practical implications and next steps`,
        metadata: {
          originalLength: wordCount,
          summaryLength: Math.floor(wordCount * 0.2),
          compressionRate: `${Math.floor(100 - (Math.floor(wordCount * 0.2) / wordCount * 100))}%`,
          paragraphsAnalyzed: paragraphCount
        }
      };
    } catch (error) {
      return {
        status: 'error',
        content: '',
        error: error instanceof Error ? error.message : 'Unknown error during summarization'
      };
    }
  }
};
