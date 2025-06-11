
import { CodeExample } from '../types';
import { javascriptTemplate } from './javascript';
import { reactTemplate } from './react';
import { htmlTemplate } from './html';

// Export all templates as a record for easy access
export const codeTemplates: Record<string, CodeExample> = {
  javascript: javascriptTemplate,
  react: reactTemplate,
  html: htmlTemplate
};
