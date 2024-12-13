import React from 'react';
import { Lightbulb, Trophy, Clock, Users } from 'lucide-react';
import { useTraining } from '../utils/hooks/useTraining';

interface TrainingSession {
  id: string;
  title: string;
  description: string;
  duration: number;
  participants: number;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export function Training() {
  const { sessions, loading, error } = useTraining();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4 bg-red-50 rounded-lg">
        Error loading training sessions: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Training Hub</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sessions.map((session: TrainingSession) => (
          <div
            key={session.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">{session.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{session.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{session.duration} mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{session.participants} enrolled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span className="capitalize">{session.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}