import { useState, useEffect } from 'react';
import { api } from '../api';

interface AnalyticsData {
  analysisCount: number;
  teamSize: number;
  goalsAchieved: number;
}

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData>({
    analysisCount: 0,
    teamSize: 0,
    goalsAchieved: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const [analysis, team] = await Promise.all([
          api.analysis.getAll(),
          // Add team API endpoint when ready
        ]);

        setData({
          analysisCount: analysis.length,
          teamSize: 12, // Replace with actual team size
          goalsAchieved: 8, // Replace with actual goals
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch analytics'));
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  return { data, loading, error };
}