
import { Workflow, WorkflowStep } from './types';

class WorkflowStore {
  private workflows: Workflow[] = [];
  
  async createWorkflow(userId: string, name: string, description: string): Promise<Workflow> {
    const workflow: Workflow = {
      id: `wf_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name,
      description,
      steps: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
    };
    
    this.workflows.push(workflow);
    return workflow;
  }
  
  async getWorkflowById(id: string): Promise<Workflow | undefined> {
    return this.workflows.find(wf => wf.id === id);
  }
  
  async getWorkflowsByUserId(userId: string): Promise<Workflow[]> {
    return this.workflows.filter(wf => wf.userId === userId);
  }
  
  async updateWorkflow(id: string, updates: Partial<Workflow>): Promise<Workflow | undefined> {
    const index = this.workflows.findIndex(wf => wf.id === id);
    if (index === -1) return undefined;
    
    const workflow = this.workflows[index];
    const updated = { 
      ...workflow, 
      ...updates, 
      updatedAt: new Date(),
      // Ensure these fields aren't overwritten
      id: workflow.id,
      userId: workflow.userId,
      createdAt: workflow.createdAt,
    };
    
    this.workflows[index] = updated;
    return updated;
  }
  
  async deleteWorkflow(id: string): Promise<boolean> {
    const initialLength = this.workflows.length;
    this.workflows = this.workflows.filter(wf => wf.id !== id);
    return initialLength > this.workflows.length;
  }
  
  async addWorkflowStep(workflowId: string, step: Omit<WorkflowStep, 'id'>): Promise<WorkflowStep | undefined> {
    const workflow = await this.getWorkflowById(workflowId);
    if (!workflow) return undefined;
    
    const newStep: WorkflowStep = {
      ...step,
      id: `step_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    };
    
    workflow.steps.push(newStep);
    workflow.updatedAt = new Date();
    return newStep;
  }
  
  async updateWorkflowStep(workflowId: string, stepId: string, updates: Partial<WorkflowStep>): Promise<WorkflowStep | undefined> {
    const workflow = await this.getWorkflowById(workflowId);
    if (!workflow) return undefined;
    
    const stepIndex = workflow.steps.findIndex(step => step.id === stepId);
    if (stepIndex === -1) return undefined;
    
    const step = workflow.steps[stepIndex];
    const updatedStep = { ...step, ...updates, id: step.id };
    workflow.steps[stepIndex] = updatedStep;
    workflow.updatedAt = new Date();
    
    return updatedStep;
  }
  
  async deleteWorkflowStep(workflowId: string, stepId: string): Promise<boolean> {
    const workflow = await this.getWorkflowById(workflowId);
    if (!workflow) return false;
    
    const initialLength = workflow.steps.length;
    workflow.steps = workflow.steps.filter(step => step.id !== stepId);
    workflow.updatedAt = new Date();
    
    return initialLength > workflow.steps.length;
  }
}

export const workflowStore = new WorkflowStore();

export const createWorkflow = async (
  userId: string, 
  name: string, 
  description: string
): Promise<Workflow> => {
  return workflowStore.createWorkflow(userId, name, description);
};

export const getWorkflowById = async (
  id: string
): Promise<Workflow | undefined> => {
  return workflowStore.getWorkflowById(id);
};

export const getUserWorkflows = async (
  userId: string
): Promise<Workflow[]> => {
  return workflowStore.getWorkflowsByUserId(userId);
};

export const updateWorkflow = async (
  id: string, 
  updates: Partial<Workflow>
): Promise<Workflow | undefined> => {
  return workflowStore.updateWorkflow(id, updates);
};

export const deleteWorkflow = async (
  id: string
): Promise<boolean> => {
  return workflowStore.deleteWorkflow(id);
};

export const addWorkflowStep = async (
  workflowId: string, 
  step: Omit<WorkflowStep, 'id'>
): Promise<WorkflowStep | undefined> => {
  return workflowStore.addWorkflowStep(workflowId, step);
};

export const updateWorkflowStep = async (
  workflowId: string, 
  stepId: string, 
  updates: Partial<WorkflowStep>
): Promise<WorkflowStep | undefined> => {
  return workflowStore.updateWorkflowStep(workflowId, stepId, updates);
};

export const deleteWorkflowStep = async (
  workflowId: string, 
  stepId: string
): Promise<boolean> => {
  return workflowStore.deleteWorkflowStep(workflowId, stepId);
};
