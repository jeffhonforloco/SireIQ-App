
// This is a unit test file for the research agent
// Using Vitest as the test runner

import { describe, test, expect } from 'vitest';
import { researchAgent } from '../research';

describe('Research Agent', () => {
  test('should process research requests successfully', async () => {
    const input = 'latest developments in quantum computing';
    const response = await researchAgent.process(input);
    
    expect(response).toBeDefined();
    expect(response.status).toBe('success');
    expect(response.content).toContain('Research Results');
    expect(response.metadata).toBeDefined();
  });
  
  test('should handle empty input gracefully', async () => {
    const input = '';
    const response = await researchAgent.process(input);
    
    expect(response).toBeDefined();
    expect(response.status).toBe('success'); // Our current implementation doesn't validate empty input
    expect(response.content).toBeDefined();
  });
});
