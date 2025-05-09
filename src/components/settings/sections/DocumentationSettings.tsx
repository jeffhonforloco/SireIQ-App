
import React from 'react';
import { BookOpen, MessageSquare, FileCode, ChevronRight } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';

const DocumentationSettings = () => {
  const { role } = useRole();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-1">SireIQ Documentation</h2>
        <p className="text-sm text-sireiq-light/70 mb-4">Access resources to get the most out of SireIQ</p>
        
        <div className="grid grid-cols-1 gap-3 mt-4">
          <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-sireiq-cyan" />
              <div>
                <p className="font-medium">User Guide</p>
                <p className="text-sm text-sireiq-light/60">Complete documentation for SireIQ</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
          
          <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-sireiq-cyan" />
              <div>
                <p className="font-medium">Community Forums</p>
                <p className="text-sm text-sireiq-light/60">Ask questions and share ideas</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
          
          {(role === 'developer' || role === 'enterprise' || role === 'admin') && (
            <div className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md hover:bg-sireiq-accent/5 cursor-pointer">
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-sireiq-cyan" />
                <div>
                  <p className="font-medium">API Documentation</p>
                  <p className="text-sm text-sireiq-light/60">Integrate with SireIQ API</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentationSettings;
