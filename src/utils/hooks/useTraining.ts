import { useState, useEffect } from 'react';
import { api } from '../api';

interface TrainingSession {
  id: string;
  title: string;
  description: string;
  duration: number;
  participants: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export function useTraining() {
  const [sessions, setSessions] = useState<TrainingSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchSessions() {
      try {
        const data = await api.training.getAll();
        setSessions(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch training sessions'));
      } finally {
        setLoading(false);
      }
    }

    fetchSessions();
  }, []);

  return { sessions, loading, error };
}