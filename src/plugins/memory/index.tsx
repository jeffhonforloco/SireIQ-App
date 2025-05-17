
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Database, History, Plus, Trash, ChevronUp, ChevronDown } from 'lucide-react';
import { toast } from "sonner";
import './styles.css';

interface MemoryItem {
  id: string;
  score?: number;
  metadata: {
    text: string;
    timestamp: string;
    source: string;
    category: string;
  };
}

const mockMemories: MemoryItem[] = [
  {
    id: 'mem1',
    score: 0.95,
    metadata: {
      text: 'User prefers concise explanations over detailed tutorials',
      timestamp: '2023-10-15T14:30:00Z',
      source: 'chat',
      category: 'preference'
    }
  },
  {
    id: 'mem2',
    score: 0.87,
    metadata: {
      text: 'User is working on a medical research project about diabetes',
      timestamp: '2023-10-14T09:15:00Z',
      source: 'query',
      category: 'context'
    }
  },
  {
    id: 'mem3',
    score: 0.82,
    metadata: {
      text: 'User has experience with Python but is new to JavaScript',
      timestamp: '2023-10-12T16:45:00Z',
      source: 'chat',
      category: 'skill'
    }
  },
];

interface MemoryBrowserProps {
  inMenu?: boolean;
}

const MemoryBrowser: React.FC<MemoryBrowserProps> = ({ inMenu = false }) => {
  const [memories, setMemories] = useState<MemoryItem[]>(mockMemories);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('browse');
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // In a real implementation, this would fetch from the memory agent
  const fetchMemories = async (query?: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 700));
      
      // Filter memories based on search query
      if (query) {
        const filtered = mockMemories.filter(mem => 
          mem.metadata.text.toLowerCase().includes(query.toLowerCase()) ||
          mem.metadata.category.toLowerCase().includes(query.toLowerCase())
        );
        setMemories(filtered);
      } else {
        setMemories(mockMemories);
      }
    } catch (error) {
      console.error('Error fetching memories:', error);
      // Silently handle error - don't show toast to avoid UI noise
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchMemories();
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMemories(searchQuery);
  };
  
  const handleDeleteMemory = (id: string) => {
    setMemories(memories.filter(mem => mem.id !== id));
    toast.success('Memory deleted');
  };
  
  const handleCreateMemory = () => {
    toast.info('Creating new memory - feature coming soon!');
  };
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Adjust the class based on whether it's in the menu or standalone
  const containerClass = inMenu 
    ? 'memory-browser-in-menu' 
    : `memory-browser transition-all duration-300 ${isExpanded ? 'expanded' : 'collapsed'}`;

  return (
    <div className={containerClass}>
      <div 
        className="panel-header cursor-pointer flex justify-between items-center"
        onClick={toggleExpanded}
      >
        <div className="flex items-center">
          <Database className="text-blue-500 mr-2" />
          <h2>Memory Browser</h2>
        </div>
        {isExpanded ? 
          <ChevronDown className="h-4 w-4" /> : 
          <ChevronUp className="h-4 w-4" />
        }
      </div>
      
      {isExpanded && (
        <>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="browse">
                <Search className="mr-2 h-4 w-4" />
                Browse
              </TabsTrigger>
              <TabsTrigger value="history">
                <History className="mr-2 h-4 w-4" />
                Recent
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="browse" className="mt-4">
              <form onSubmit={handleSearch} className="mb-4 flex gap-2">
                <Input
                  type="text"
                  placeholder="Search memories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" disabled={loading}>
                  {loading ? 'Searching...' : 'Search'}
                </Button>
              </form>
              
              <div className="memory-list">
                {memories.length === 0 ? (
                  <div className="empty-state">
                    <p>No memories found</p>
                  </div>
                ) : (
                  memories.map((memory) => (
                    <MemoryCard 
                      key={memory.id} 
                      memory={memory} 
                      onDelete={() => handleDeleteMemory(memory.id)} 
                    />
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg">Recent Memories</h3>
                <Button variant="outline" size="sm" onClick={handleCreateMemory}>
                  <Plus className="mr-1 h-4 w-4" />
                  Create
                </Button>
              </div>
              
              <div className="memory-list">
                {memories
                  .sort((a, b) => new Date(b.metadata.timestamp).getTime() - new Date(a.metadata.timestamp).getTime())
                  .map((memory) => (
                    <MemoryCard 
                      key={memory.id} 
                      memory={memory} 
                      onDelete={() => handleDeleteMemory(memory.id)} 
                    />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

interface MemoryCardProps {
  memory: MemoryItem;
  onDelete: () => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ memory, onDelete }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  
  return (
    <Card className="memory-card">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div className="category-badge">{memory.metadata.category}</div>
          <div className="source-badge">{memory.metadata.source}</div>
        </div>
        
        <p className="memory-text">{memory.metadata.text}</p>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-400">
            {formatDate(memory.metadata.timestamp)}
          </span>
          
          <div className="flex gap-2">
            {memory.score && (
              <span className="relevance-score">
                {(memory.score * 100).toFixed(0)}%
              </span>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0" 
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <Trash className="h-4 w-4 text-red-400" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemoryBrowser;
