
export interface Chat {
  id: number;
  title: string;
  date: string;
  icon: string;
}

export interface Template {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
}

export interface UserStats {
  tokensUsed: number;
  totalAllowance: number;
  percentUsed: number;
  activeSessions: number;
  savedChats: number;
  completedTasks: number;
}
