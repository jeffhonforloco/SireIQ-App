
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Layers, Play } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

type ProjectsListProps = {
  activeProject: string;
  setActiveProject: (project: string) => void;
};

const ProjectsList = ({ activeProject, setActiveProject }: ProjectsListProps) => {
  const createProject = () => {
    toast.success('New project created');
  };

  return (
    <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Layers className="w-5 h-5 mr-2 text-sireiq-cyan" />
        Projects
      </h2>
      <div className="space-y-3">
        {['API Gateway', 'Custom Agent', 'React Dashboard', 'Chatbot UI', 'Data Analyzer'].map((project, i) => (
          <div 
            key={i} 
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              activeProject === project 
                ? "bg-sireiq-accent/20 border-l-2 border-sireiq-cyan" 
                : "hover:bg-sireiq-accent/10"
            }`}
            onClick={() => setActiveProject(project)}
          >
            <h3 className="font-medium">{project}</h3>
            <div className="flex items-center justify-between text-xs text-sireiq-light/70">
              <span>Last edited {i+1}d ago</span>
              {i === 0 && <Badge className="bg-green-500 text-sireiq-darker">Active</Badge>}
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2 border-dashed border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan mt-2"
          onClick={createProject}
        >
          <Play className="w-4 h-4 text-sireiq-cyan" />
          <span>New Project</span>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsList;
