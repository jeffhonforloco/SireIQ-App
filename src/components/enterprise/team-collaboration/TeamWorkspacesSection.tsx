
import React from 'react';
import { Button } from '@/components/ui/button';

const TeamWorkspacesSection = () => {
  return (
    <section className="container mx-auto px-4 mb-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        <span className="text-gradient">Team Workspaces</span>
      </h2>
      <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto mb-10">
        Create dedicated workspaces for different teams, projects, or departments. Organize content, share resources, and track progress all in one place.
      </p>
      
      <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Marketing Team",
              members: 12,
              projects: 8,
              activity: "High"
            },
            {
              title: "Product Team",
              members: 8,
              projects: 5,
              activity: "Medium"
            },
            {
              title: "Creative Team",
              members: 15,
              projects: 10,
              activity: "Very High"
            }
          ].map((workspace, index) => (
            <div key={index} className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
              <h3 className="font-bold text-xl mb-3">{workspace.title}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-sireiq-light/70">Members:</span>
                  <span>{workspace.members}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-sireiq-light/70">Active Projects:</span>
                  <span>{workspace.projects}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-sireiq-light/70">Activity Level:</span>
                  <span>{workspace.activity}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full border-sireiq-accent/30">
                View Workspace
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamWorkspacesSection;
