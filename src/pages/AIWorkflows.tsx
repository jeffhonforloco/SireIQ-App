import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { AgentCard } from '@/components/AgentCard';
import { WorkflowStep } from '@/components/WorkflowStep';
import { RAGContextPanel } from '@/components/RAGContextPanel';
import { availableAgents } from '@/lib/ai/agents';
import { Agent, Workflow, WorkflowStep as WorkflowStepType } from '@/lib/ai/types';
import { 
  createWorkflow, 
  getUserWorkflows, 
  updateWorkflow, 
  addWorkflowStep, 
  deleteWorkflowStep 
} from '@/lib/ai/workflows';

const AIWorkflows: React.FC = () => {
  const { toast } = useToast();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [currentWorkflow, setCurrentWorkflow] = useState<Workflow | null>(null);
  const [workflowName, setWorkflowName] = useState('');
  const [workflowDescription, setWorkflowDescription] = useState('');
  const [activeTab, setActiveTab] = useState('workflows');

  // For demo purposes, use a hardcoded user ID
  const userId = 'user_demo';

  useEffect(() => {
    const loadWorkflows = async () => {
      const userWorkflows = await getUserWorkflows(userId);
      setWorkflows(userWorkflows);
    };
    
    loadWorkflows();
  }, []);

  const handleCreateWorkflow = async () => {
    if (!workflowName.trim()) {
      toast({
        title: 'Workflow name required',
        description: 'Please enter a name for your workflow.',
        variant: 'destructive',
      });
      return;
    }
    
    const newWorkflow = await createWorkflow(
      userId,
      workflowName,
      workflowDescription
    );
    
    setWorkflows([...workflows, newWorkflow]);
    setCurrentWorkflow(newWorkflow);
    
    toast({
      title: 'Workflow created',
      description: `"${newWorkflow.name}" has been created successfully.`,
    });
  };

  const handleAddAgent = async (agent: Agent) => {
    if (!currentWorkflow) return;
    
    const newStep = await addWorkflowStep(currentWorkflow.id, {
      agentId: agent.id,
      position: currentWorkflow.steps.length,
      inputFrom: currentWorkflow.steps.length === 0 ? 'user' : currentWorkflow.steps[currentWorkflow.steps.length - 1].id,
      outputTo: 'user',
    });
    
    if (newStep) {
      const updatedWorkflow = { 
        ...currentWorkflow,
        steps: [...currentWorkflow.steps, newStep]
      };
      
      setCurrentWorkflow(updatedWorkflow);
      
      // Update the workflows array
      setWorkflows(workflows.map(wf => 
        wf.id === currentWorkflow.id ? updatedWorkflow : wf
      ));
      
      toast({
        title: 'Agent added',
        description: `"${agent.name}" has been added to your workflow.`,
      });
    }
  };

  const handleDeleteStep = async (stepId: string) => {
    if (!currentWorkflow) return;
    
    const success = await deleteWorkflowStep(currentWorkflow.id, stepId);
    
    if (success) {
      const updatedSteps = currentWorkflow.steps.filter(step => step.id !== stepId);
      
      // Recalculate positions and connections
      const reorderedSteps = updatedSteps.map((step, index) => ({
        ...step,
        position: index,
        inputFrom: index === 0 ? 'user' : updatedSteps[index - 1].id,
        outputTo: index === updatedSteps.length - 1 ? 'user' : 'next',
      }));
      
      const updatedWorkflow = {
        ...currentWorkflow,
        steps: reorderedSteps
      };
      
      await updateWorkflow(currentWorkflow.id, { steps: reorderedSteps });
      
      setCurrentWorkflow(updatedWorkflow);
      
      // Update the workflows array
      setWorkflows(workflows.map(wf => 
        wf.id === currentWorkflow.id ? updatedWorkflow : wf
      ));
      
      toast({
        title: 'Step removed',
        description: 'The workflow step has been removed.',
      });
    }
  };

  const handleConfigureStep = (stepId: string) => {
    // This would open a modal or panel for configuring the step
    toast({
      title: 'Configure step',
      description: 'Step configuration interface would open here.',
    });
  };

  const handleSelectWorkflow = (workflow: Workflow) => {
    setCurrentWorkflow(workflow);
    setWorkflowName(workflow.name);
    setWorkflowDescription(workflow.description);
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ Community | Build Together with AI-Driven Innovation</title>
        <meta name="description" content="Join a vibrant community of developers, creators, and thinkers building innovative applications using SireIQ's AI-first development platform." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">AI Studio</h1>
        
        <Tabs defaultValue="workflows" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="workflows">Workflow Editor</TabsTrigger>
            <TabsTrigger value="memory">Memory & Context</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workflows">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left sidebar: Workflow list */}
              <div className="space-y-4">
                <div className="p-4 border border-sireiq-accent/30 rounded-lg bg-sireiq-darker">
                  <h2 className="text-lg font-semibold mb-4">Your Workflows</h2>
                  
                  {workflows.length === 0 ? (
                    <p className="text-sm text-sireiq-light/70">No workflows created yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {workflows.map(workflow => (
                        <Button
                          key={workflow.id}
                          variant="ghost"
                          className={`w-full justify-start ${
                            currentWorkflow?.id === workflow.id 
                              ? 'bg-sireiq-accent/30 text-sireiq-light' 
                              : 'text-sireiq-light/70'
                          }`}
                          onClick={() => handleSelectWorkflow(workflow)}
                        >
                          {workflow.name}
                        </Button>
                      ))}
                    </div>
                  )}
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Create New Workflow</h3>
                    <Input 
                      placeholder="Workflow name"
                      value={workflowName}
                      onChange={(e) => setWorkflowName(e.target.value)}
                      className="bg-transparent border-sireiq-accent/30"
                    />
                    <Textarea 
                      placeholder="Description (optional)"
                      value={workflowDescription}
                      onChange={(e) => setWorkflowDescription(e.target.value)}
                      className="bg-transparent border-sireiq-accent/30 min-h-[80px]"
                    />
                    <Button 
                      className="w-full bg-sireiq-cyan hover:bg-sireiq-cyan/90"
                      onClick={handleCreateWorkflow}
                    >
                      Create Workflow
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Middle: Current workflow */}
              <div className="p-4 border border-sireiq-accent/30 rounded-lg bg-sireiq-darker">
                <h2 className="text-lg font-semibold mb-4">
                  {currentWorkflow ? `Workflow: ${currentWorkflow.name}` : 'Select or Create a Workflow'}
                </h2>
                
                {currentWorkflow ? (
                  <div className="space-y-4">
                    <p className="text-sm text-sireiq-light/70">
                      {currentWorkflow.description || 'No description provided.'}
                    </p>
                    
                    <Separator className="my-4" />
                    
                    {currentWorkflow.steps.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-sm text-sireiq-light/50 mb-2">
                          This workflow has no steps yet.
                        </p>
                        <p className="text-xs text-sireiq-light/50">
                          Add agents from the right panel to build your workflow.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {currentWorkflow.steps.map((step, index) => (
                          <WorkflowStep 
                            key={step.id}
                            step={step}
                            isLast={index === currentWorkflow.steps.length - 1}
                            onDelete={handleDeleteStep}
                            onConfigure={handleConfigureStep}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="flex justify-center mt-8">
                      <Button 
                        className="bg-sireiq-cyan hover:bg-sireiq-cyan/90"
                        disabled={currentWorkflow.steps.length === 0}
                      >
                        Run Workflow
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-sireiq-light/50">
                      Select an existing workflow or create a new one to get started.
                    </p>
                  </div>
                )}
              </div>
              
              {/* Right sidebar: Available agents */}
              <div className="p-4 border border-sireiq-accent/30 rounded-lg bg-sireiq-darker">
                <h2 className="text-lg font-semibold mb-4">Available Agents</h2>
                
                <div className="space-y-3">
                  {availableAgents.map(agent => (
                    <AgentCard 
                      key={agent.id}
                      agent={agent}
                      onAdd={currentWorkflow ? handleAddAgent : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="memory">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RAGContextPanel userId={userId} />
              
              <div className="p-4 border border-sireiq-accent/30 rounded-lg bg-sireiq-darker">
                <h2 className="text-lg font-semibold mb-4">How Memory Works</h2>
                
                <div className="space-y-4 text-sireiq-light/80">
                  <p>
                    The memory system allows you to store personal knowledge that can be used to personalize AI responses and workflows.
                  </p>
                  
                  <h3 className="text-md font-medium mt-4">How it's used:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Memories are stored and retrieved using semantic search</li>
                    <li>Relevant memories are included in the context window when generating AI responses</li>
                    <li>Workflows can access your memories to provide personalized outputs</li>
                    <li>Tag your memories to organize them and improve retrieval</li>
                  </ul>
                  
                  <h3 className="text-md font-medium mt-4">Example uses:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Store personal preferences or writing style examples</li>
                    <li>Add domain-specific knowledge for your projects</li>
                    <li>Include company information or brand guidelines</li>
                    <li>Save frequently referenced documents or information</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AIWorkflows;
