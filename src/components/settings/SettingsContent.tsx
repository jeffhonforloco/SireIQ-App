
import React from 'react';
import GeneralSettings from './sections/GeneralSettings';
import AIModelsSettings from './sections/AIModelsSettings';
import NotificationsSettings from './sections/NotificationsSettings';
import PersonalizationSettings from './sections/PersonalizationSettings';
import VoiceSettings from './sections/VoiceSettings';
import DataPrivacySettings from './sections/DataPrivacySettings';
import BuilderProfileSettings from './sections/BuilderProfileSettings';
import CodeToolsSettings from './sections/CodeToolsSettings';
import DocumentationSettings from './sections/DocumentationSettings';
import SecuritySettings from './sections/SecuritySettings';

interface SettingsContentProps {
  activeSection: string;
}

const SettingsContent: React.FC<SettingsContentProps> = ({ activeSection }) => {
  // Render content based on active section
  switch(activeSection) {
    case 'general':
      return <GeneralSettings />;
    case 'ai-models':
      return <AIModelsSettings />;
    case 'notifications':
      return <NotificationsSettings />;
    case 'personalization':
      return <PersonalizationSettings />;
    case 'speech':
      return <VoiceSettings />;
    case 'data-controls':
      return <DataPrivacySettings />;
    case 'builder-profile':
      return <BuilderProfileSettings />;
    case 'code-tools':
      return <CodeToolsSettings />;
    case 'documentation':
      return <DocumentationSettings />;
    case 'security':
      return <SecuritySettings />;
    default:
      return (
        <div className="flex items-center justify-center h-40">
          <p>Select a setting from the sidebar</p>
        </div>
      );
  }
};

export default SettingsContent;
