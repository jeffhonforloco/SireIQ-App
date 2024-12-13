import { useState, useEffect } from 'react';
import { api } from '../api';
import type { Strategy } from '../../types';

export function useStrategies() {
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchStrategies();
  }, []);

  async function fetchStrategies() {
    try {
      const data = await api.strategy.getAll();
      setStrategies(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch strategies'));
    } finally {
      setLoading(false);
    }
  }

  async function createStrategy(data: Partial<Strategy>) {
    try {
      const newStrategy = await api.strategy.create(data);
      setStrategies([...strategies, newStrategy]);
      return newStrategy;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create strategy'));
      throw err;
    }
  }

  return { strategies, loading, error, createStrategy };
}