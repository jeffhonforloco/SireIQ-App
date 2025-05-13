
import { create } from 'zustand';

// Interface for governance-related state
interface GovernanceState {
  complianceScore: number;
  activePolicies: number;
  totalPolicies: number;
  isLoading: boolean;
  error: string | null;
  setComplianceData: (score: number, active: number, total: number) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

// Interface for memory-related state
interface MemoryState {
  recentSearches: string[];
  memoriesLoaded: number;
  isLoading: boolean;
  error: string | null;
  addSearch: (search: string) => void;
  setMemoriesLoaded: (count: number) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

// Interface for workflow-related state
interface WorkflowState {
  activeWorkflows: number;
  completedWorkflows: number;
  failedWorkflows: number;
  isLoading: boolean;
  error: string | null;
  updateWorkflowCounts: (active: number, completed: number, failed: number) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

// Combined agents store
export const useGovernanceStore = create<GovernanceState>((set) => ({
  complianceScore: 0,
  activePolicies: 0,
  totalPolicies: 0,
  isLoading: false,
  error: null,
  setComplianceData: (score, active, total) => set({
    complianceScore: score,
    activePolicies: active,
    totalPolicies: total
  }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error })
}));

export const useMemoryStore = create<MemoryState>((set) => ({
  recentSearches: [],
  memoriesLoaded: 0,
  isLoading: false,
  error: null,
  addSearch: (search) => set((state) => ({
    recentSearches: [search, ...state.recentSearches].slice(0, 10) // Keep only 10 most recent
  })),
  setMemoriesLoaded: (count) => set({ memoriesLoaded: count }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error })
}));

export const useWorkflowStore = create<WorkflowState>((set) => ({
  activeWorkflows: 0,
  completedWorkflows: 0,
  failedWorkflows: 0,
  isLoading: false,
  error: null,
  updateWorkflowCounts: (active, completed, failed) => set({
    activeWorkflows: active,
    completedWorkflows: completed,
    failedWorkflows: failed
  }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error })
}));
