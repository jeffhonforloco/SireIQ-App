
import { UserMemoryItem } from './types';

// Mock implementation - in a real app, this would be connected to a vector database
class UserMemoryStore {
  private items: UserMemoryItem[] = [];
  
  async addMemory(userId: string, content: string, metadata: Record<string, any> = {}, tags: string[] = []): Promise<UserMemoryItem> {
    const item: UserMemoryItem = {
      id: `mem_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      userId,
      content,
      metadata,
      tags,
      createdAt: new Date(),
    };
    
    // In a real implementation, we would generate embeddings here
    // item.embedding = await this.generateEmbedding(content);
    
    this.items.push(item);
    return item;
  }
  
  async getMemoriesByUserId(userId: string): Promise<UserMemoryItem[]> {
    return this.items.filter(item => item.userId === userId);
  }
  
  async searchMemories(userId: string, query: string): Promise<UserMemoryItem[]> {
    // In a real implementation, this would use vector similarity search
    // For now, we'll just use simple text matching
    const lowerQuery = query.toLowerCase();
    return this.items
      .filter(item => item.userId === userId && item.content.toLowerCase().includes(lowerQuery))
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async deleteMemory(id: string): Promise<boolean> {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    return initialLength > this.items.length;
  }
  
  // In a real implementation, this would call an embedding API
  private async generateEmbedding(text: string): Promise<number[]> {
    // Mock embedding generation
    return Array(384).fill(0).map(() => Math.random() - 0.5);
  }
}

export const userMemoryStore = new UserMemoryStore();

export const addUserMemory = async (
  userId: string, 
  content: string, 
  metadata: Record<string, any> = {},
  tags: string[] = []
): Promise<UserMemoryItem> => {
  return userMemoryStore.addMemory(userId, content, metadata, tags);
};

export const getUserMemories = async (userId: string): Promise<UserMemoryItem[]> => {
  return userMemoryStore.getMemoriesByUserId(userId);
};

export const searchUserMemories = async (userId: string, query: string): Promise<UserMemoryItem[]> => {
  return userMemoryStore.searchMemories(userId, query);
};

export const deleteUserMemory = async (id: string): Promise<boolean> => {
  return userMemoryStore.deleteMemory(id);
};
