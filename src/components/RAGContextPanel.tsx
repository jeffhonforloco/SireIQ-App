
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { UserMemoryItem } from '@/lib/ai/types';
import { addUserMemory, getUserMemories, searchUserMemories, deleteUserMemory } from '@/lib/ai/memory';

interface RAGContextPanelProps {
  userId: string;
}

export const RAGContextPanel: React.FC<RAGContextPanelProps> = ({ userId }) => {
  const { toast } = useToast();
  const [memories, setMemories] = useState<UserMemoryItem[]>([]);
  const [memoryContent, setMemoryContent] = useState('');
  const [memoryTags, setMemoryTags] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const loadMemories = async () => {
    setIsLoading(true);
    try {
      const userMemories = await getUserMemories(userId);
      setMemories(userMemories);
    } catch (error) {
      toast({
        title: 'Failed to load memories',
        description: 'There was an error loading your memories.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleAddMemory = async () => {
    if (!memoryContent.trim()) {
      toast({
        title: 'Content required',
        description: 'Please enter content for your memory.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const tags = memoryTags.split(',').map(tag => tag.trim()).filter(Boolean);
      const newMemory = await addUserMemory(userId, memoryContent, {}, tags);
      setMemories([...memories, newMemory]);
      setMemoryContent('');
      setMemoryTags('');
      
      toast({
        title: 'Memory added',
        description: 'Your memory has been added successfully.',
      });
    } catch (error) {
      toast({
        title: 'Failed to add memory',
        description: 'There was an error adding your memory.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearchMemories = async () => {
    if (!searchQuery.trim()) {
      await loadMemories();
      return;
    }
    
    setIsLoading(true);
    try {
      const searchResults = await searchUserMemories(userId, searchQuery);
      setMemories(searchResults);
    } catch (error) {
      toast({
        title: 'Search failed',
        description: 'There was an error searching your memories.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDeleteMemory = async (id: string) => {
    setIsLoading(true);
    try {
      const success = await deleteUserMemory(id);
      if (success) {
        setMemories(memories.filter(memory => memory.id !== id));
        toast({
          title: 'Memory deleted',
          description: 'The memory has been deleted successfully.',
        });
      }
    } catch (error) {
      toast({
        title: 'Failed to delete memory',
        description: 'There was an error deleting the memory.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  React.useEffect(() => {
    loadMemories();
  }, [userId]);
  
  return (
    <div className="p-4 border border-sireiq-accent/30 rounded-lg bg-sireiq-darker">
      <h2 className="text-lg font-semibold mb-4">Personal Memory Store</h2>
      
      {/* Add new memory form */}
      <div className="space-y-3 mb-6">
        <Textarea
          placeholder="Enter knowledge or context to store..."
          value={memoryContent}
          onChange={(e) => setMemoryContent(e.target.value)}
          className="bg-transparent border-sireiq-accent/30 min-h-[100px]"
        />
        <Input
          placeholder="Tags (comma separated)"
          value={memoryTags}
          onChange={(e) => setMemoryTags(e.target.value)}
          className="bg-transparent border-sireiq-accent/30"
        />
        <Button
          onClick={handleAddMemory}
          disabled={isLoading || !memoryContent.trim()}
          className="w-full bg-sireiq-cyan hover:bg-sireiq-cyan/90"
        >
          Add to Memory
        </Button>
      </div>
      
      <Separator className="my-4" />
      
      {/* Search memories */}
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Search memories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent border-sireiq-accent/30"
        />
        <Button
          onClick={handleSearchMemories}
          disabled={isLoading}
          variant="outline"
          className="border-sireiq-accent/30"
        >
          Search
        </Button>
      </div>
      
      {/* Memory list */}
      <div className="space-y-3">
        {memories.length === 0 ? (
          <p className="text-center text-sireiq-light/50 py-6">
            {isLoading ? 'Loading...' : 'No memories found.'}
          </p>
        ) : (
          memories.map(memory => (
            <Card key={memory.id} className="bg-transparent border border-sireiq-accent/30">
              <CardHeader className="py-3 px-4">
                <CardTitle className="text-sm font-medium text-sireiq-light flex justify-between items-start">
                  <span>Memory</span>
                  <span className="text-xs text-sireiq-light/50">
                    {new Date(memory.createdAt).toLocaleDateString()}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2 px-4">
                <p className="text-sm text-sireiq-light/80 whitespace-pre-wrap">
                  {memory.content}
                </p>
                
                {memory.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {memory.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-0.5 rounded-full bg-sireiq-accent/20 text-sireiq-light/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="py-2 px-4 flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteMemory(memory.id)}
                  className="text-xs hover:bg-red-500/20 hover:text-red-400"
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
