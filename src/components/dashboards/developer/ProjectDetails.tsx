
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Terminal } from 'lucide-react';
import ProjectTabs from './tabs/ProjectTabs';

type ProjectDetailsProps = {
  activeProject: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProjectDetails = ({ activeProject, activeTab, setActiveTab }: ProjectDetailsProps) => {
  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{activeProject}</CardTitle>
            <CardDescription>API Gateway for intelligent content routing</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
              <Code className="w-4 h-4 mr-2 text-sireiq-cyan" />
              Code
            </Button>
            <Button size="sm" className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
              <Terminal className="w-4 h-4 mr-2" />
              Terminal
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;
