
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Database, Code, GitBranch } from 'lucide-react';

const Integrations = () => {
  return (
    <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <GitBranch className="w-5 h-5 mr-2 text-sireiq-cyan" />
        Integrations
      </h2>
      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
          <Github className="w-4 h-4 text-sireiq-cyan" />
          <span>GitHub</span>
        </Button>
        <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
          <Database className="w-4 h-4 text-sireiq-cyan" />
          <span>Supabase</span>
        </Button>
        <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
          <Code className="w-4 h-4 text-sireiq-cyan" />
          <span>VSCode</span>
        </Button>
      </div>
    </div>
  );
};

export default Integrations;
