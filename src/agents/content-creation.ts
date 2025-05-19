
import { Agent, AgentOptions, AgentResponse } from './types';

export const contentCreationAgent: Agent = {
  id: 'content-creation',
  name: 'Content Creator',
  description: 'Generates high-quality content based on your specifications and target audience',
  category: 'creation',
  icon: 'file-text',
  status: 'available',
  capabilities: [
    'Blog post creation',
    'Marketing copy',
    'Product descriptions',
    'Email templates'
  ],
  process: async (input: string, options?: AgentOptions): Promise<AgentResponse> => {
    try {
      console.log(`Content creation agent processing: "${input}" with options:`, options);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Basic validation
      if (input.length < 10) {
        return {
          status: 'error',
          content: '',
          error: 'Please provide a more detailed content request with topic, audience, and preferred style.'
        };
      }
      
      // Extract potential content type from input
      let contentType = 'article';
      if (input.toLowerCase().includes('blog')) contentType = 'blog post';
      if (input.toLowerCase().includes('email')) contentType = 'email template';
      if (input.toLowerCase().includes('product')) contentType = 'product description';
      
      return {
        status: 'success',
        content: `# ${input.split(' ').slice(0, 5).join(' ')}...\n\n` +
          `## Introduction\n\n` +
          `This compelling ${contentType} engages readers from the start with a powerful hook related to ${input}.\n\n` +
          `## Main Points\n\n` +
          `1. The first section covers essential background and context\n` +
          `2. The middle part presents key arguments and evidence\n` +
          `3. The final section ties everything together with actionable insights\n\n` +
          `## Conclusion\n\n` +
          `The piece concludes with a thought-provoking statement that encourages further engagement.`,
        metadata: {
          wordCount: Math.floor(Math.random() * 500) + 300,
          readingTime: Math.floor(Math.random() * 5) + 2 + ' minutes',
          contentType: contentType,
          seoScore: (Math.random() * 20 + 80).toFixed(0) + '/100'
        }
      };
    } catch (error) {
      return {
        status: 'error',
        content: '',
        error: error instanceof Error ? error.message : 'Unknown error during content creation'
      };
    }
  }
};
