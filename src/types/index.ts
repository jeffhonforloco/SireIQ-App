export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AIAnalysis {
  id: string;
  userId: string;
  timestamp: Date;
  insights: string[];
  recommendations: string[];
}

export interface Strategy {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'draft' | 'active' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}