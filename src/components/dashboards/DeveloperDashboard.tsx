
import React, { useState } from 'react';
import DashboardHeader from './developer/DashboardHeader';
import ProjectsList from './developer/ProjectsList';
import Integrations from './developer/Integrations';
import ProjectDetails from './developer/ProjectDetails';

const DeveloperDashboard = () => {
  const [activeProject, setActiveProject] = useState('API Gateway');
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <DashboardHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          {/* Projects List */}
          <ProjectsList 
            activeProject={activeProject} 
            setActiveProject={setActiveProject} 
          />
          
          {/* Resources & Integrations */}
          <Integrations />
        </div>
        
        {/* Main content area */}
        <div className="lg:col-span-9 space-y-6">
          {/* Project Details */}
          <ProjectDetails 
            activeProject={activeProject}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
