
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Memory, Brain, Search, ThumbsUp, ThumbsDown, RotateCcw } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type VectorQuery = {
  id: string;
  query: string;
  timestamp: string;
  confidence: number;
  category: string;
  feedback?: 'positive' | 'negative';
};

// Sample data - would be populated from a vector database in production
const sampleQueries: VectorQuery[] = [
  {
    id: 'q1',
    query: 'Marketing strategies for SaaS products',
    timestamp: '2025-05-12T09:15:00',
    confidence: 0.92,
    category: 'marketing',
  },
  {
    id: 'q2',
    query: 'Legal compliance for AI agents',
    timestamp: '2025-05-12T08:45:00',
    confidence: 0.85,
    category: 'legal',
  },
  {
    id: 'q3',
    query: 'Financial forecast automation',
    timestamp: '2025-05-11T16:30:00',
    confidence: 0.78,
    category: 'finance',
  },
];

const MemorySnapshot: React.FC = () => {
  const [queries, setQueries] = useState<VectorQuery[]>(sampleQueries);
  const [isEnabled] = useLocalStorage('memory-snapshot-enabled', true);
  
  if (!isEnabled) return null;

  const handleFeedback = (id: string, type: 'positive' | 'negative') => {
    setQueries(queries.map(query => 
      query.id === id ? { ...query, feedback: type } : query
    ));
  };

  const handleRefresh = () => {
    // In a real app, this would fetch fresh data
    // For now, just update the timestamp on the first item
    const updatedQueries = [...queries];
    updatedQueries[0] = {
      ...updatedQueries[0],
      timestamp: new Date().toISOString()
    };
    setQueries(updatedQueries);
  };

  return (
    <Card className="border-sireiq-accent/30 bg-sireiq-darker">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium flex items-center gap-2">
          <Memory className="h-4 w-4 text-sireiq-cyan" />
          <span>Memory Snapshot</span>
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={handleRefresh}>
          <RotateCcw className="h-3.5 w-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-xs text-sireiq-light/60 mb-3">
          Recent vector queries from your knowledge base:
        </div>
        
        <div className="space-y-3">
          {queries.map((query) => (
            <div 
              key={query.id}
              className="border border-sireiq-accent/20 rounded-md p-2.5 bg-black/20"
            >
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center">
                  <Search className="h-3 w-3 text-sireiq-cyan mr-1.5" />
                  <span className="text-sm">{query.query}</span>
                </div>
                <Badge variant="outline" className="text-[10px] h-5">
                  {query.category}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-[10px] text-sireiq-light/50">
                  {new Date(query.timestamp).toLocaleString()} • 
                  <span className="ml-1">
                    {query.confidence * 100}% confidence
                  </span>
                </div>
                
                <div className="flex gap-1.5">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-6 w-6 ${query.feedback === 'positive' ? 'bg-green-500/20 text-green-400' : ''}`}
                    onClick={() => handleFeedback(query.id, 'positive')}
                  >
                    <ThumbsUp className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-6 w-6 ${query.feedback === 'negative' ? 'bg-red-500/20 text-red-400' : ''}`}
                    onClick={() => handleFeedback(query.id, 'negative')}
                  >
                    <ThumbsDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" size="sm" className="w-full mt-3 border-dashed">
          <Brain className="h-3.5 w-3.5 mr-2" /> Teach Memory System
        </Button>
      </CardContent>
    </Card>
  );
};

export default MemorySnapshot;
