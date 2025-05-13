
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Check, X, Play, Clock, ArrowRight } from 'lucide-react';
import { toast } from "sonner";
import './styles.css';

interface WorkflowTemplate {
  id: string;
  name: string;
  steps: number;
  category: string;
}

interface WorkflowInstance {
  id: string;
  templateId: string;
  status: 'running' | 'completed' | 'failed';
  progress: number;
  createdAt: string;
}

const WorkflowLauncher: React.FC = () => {
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const [instances, setInstances] = useState<WorkflowInstance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch workflow templates
        const templatesResponse = await fetch('/api/agents/workflow/run', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'list-templates' })
        });

        if (!templatesResponse.ok) {
          throw new Error('Failed to fetch workflow templates');
        }

        const templatesData = await templatesResponse.json();
        setTemplates(templatesData.data);
        
        // Fetch workflow instances
        const instancesResponse = await fetch('/api/agents/workflow/run', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'list-instances' })
        });

        if (!instancesResponse.ok) {
          throw new Error('Failed to fetch workflow instances');
        }

        const instancesData = await instancesResponse.json();
        setInstances(instancesData.data);
        
        setError('');
      } catch (err) {
        console.error('Error fetching workflow data:', err);
        setError('Failed to load workflow data. Please try again.');
        toast.error('Failed to load workflow data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateInstance = async (templateId: string) => {
    try {
      const response = await fetch('/api/agents/workflow/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: 'create-instance', templateId })
      });

      if (!response.ok) {
        throw new Error('Failed to create workflow instance');
      }

      const data = await response.json();
      setInstances([...instances, data.data]);
      toast.success('Workflow started successfully');
    } catch (err) {
      console.error('Error creating workflow instance:', err);
      toast.error('Failed to start workflow');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="status-icon completed" />;
      case 'failed':
        return <X className="status-icon failed" />;
      case 'running':
        return <Clock className="status-icon running" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (loading) {
    return <div className="workflow-launcher loading">Loading workflow data...</div>;
  }

  if (error) {
    return (
      <div className="workflow-launcher error">
        <p>{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="workflow-launcher">
      <div className="panel-header">
        <Play className="text-blue-500" />
        <h2>Workflow Launcher</h2>
      </div>

      <div className="sections-container">
        <div className="templates-section">
          <h3>Available Workflows</h3>
          
          <div className="templates-list">
            {templates.map((template) => (
              <Card key={template.id} className="template-card">
                <CardContent className="p-4">
                  <div className="template-header">
                    <h4>{template.name}</h4>
                    <div className="category-badge">{template.category}</div>
                  </div>
                  
                  <div className="template-details">
                    <span className="steps-indicator">
                      {template.steps} steps
                    </span>
                  </div>
                  
                  <Button 
                    className="mt-2 w-full" 
                    onClick={() => handleCreateInstance(template.id)}
                  >
                    Launch <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="instances-section">
          <h3>Active Workflows</h3>
          
          <div className="instances-list">
            {instances.length === 0 ? (
              <div className="empty-state">
                <p>No active workflows</p>
              </div>
            ) : (
              instances.map((instance) => {
                const template = templates.find(t => t.id === instance.templateId);
                
                return (
                  <Card key={instance.id} className="instance-card">
                    <CardContent className="p-4">
                      <div className="instance-header">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(instance.status)}
                          <h4>{template?.name || 'Unknown Workflow'}</h4>
                        </div>
                        <span className="instance-id">{instance.id}</span>
                      </div>
                      
                      <Progress 
                        value={instance.progress} 
                        className={`h-2 mt-2 ${
                          instance.status === 'failed' ? 'bg-red-500' : 
                          instance.status === 'completed' ? 'bg-green-500' : 
                          'bg-blue-500'
                        }`} 
                      />
                      
                      <div className="flex justify-between mt-1 text-xs text-sireiq-light/60">
                        <span>Progress: {instance.progress}%</span>
                        <span>{instance.status}</span>
                      </div>
                      
                      <div className="instance-details">
                        <span className="text-xs">
                          Started: {formatDate(instance.createdAt)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowLauncher;
