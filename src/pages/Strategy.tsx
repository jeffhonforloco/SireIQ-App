import React, { useState } from 'react';
import { Brain, Plus, Check, X } from 'lucide-react';
import { Button } from '../components/common/Button';
import { useStrategies } from '../utils/hooks/useStrategies';

interface Strategy {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'active' | 'completed';
}

export function Strategy() {
  const { strategies, loading, error, createStrategy } = useStrategies();
  const [showNewStrategy, setShowNewStrategy] = useState(false);
  const [newStrategy, setNewStrategy] = useState({ title: '', description: '' });

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
        Error loading strategies: {error.message}
      </div>
    );
  }

  const handleCreateStrategy = async () => {
    await createStrategy(newStrategy);
    setNewStrategy({ title: '', description: '' });
    setShowNewStrategy(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Strategy Planner</h1>
        <Button onClick={() => setShowNewStrategy(true)} icon={Plus}>
          New Strategy
        </Button>
      </div>

      {showNewStrategy && (
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <input
            type="text"
            placeholder="Strategy Title"
            className="w-full p-2 border rounded-md"
            value={newStrategy.title}
            onChange={(e) => setNewStrategy({ ...newStrategy, title: e.target.value })}
          />
          <textarea
            placeholder="Strategy Description"
            className="w-full p-2 border rounded-md"
            value={newStrategy.description}
            onChange={(e) => setNewStrategy({ ...newStrategy, description: e.target.value })}
          />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" icon={X} onClick={() => setShowNewStrategy(false)}>
              Cancel
            </Button>
            <Button icon={Check} onClick={handleCreateStrategy}>
              Create
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((strategy: Strategy) => (
          <div
            key={strategy.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{strategy.title}</h3>
                <p className="text-gray-600 mt-2">{strategy.description}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  strategy.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : strategy.status === 'active'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {strategy.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}