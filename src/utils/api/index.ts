import { AIAnalysis, Strategy } from '../../types';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  analysis: {
    getAll: () => fetchWithAuth('/analysis'),
    create: (data: Partial<AIAnalysis>) => 
      fetchWithAuth('/analysis', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },
  strategy: {
    getAll: () => fetchWithAuth('/strategy'),
    create: (data: Partial<Strategy>) =>
      fetchWithAuth('/strategy', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },
};