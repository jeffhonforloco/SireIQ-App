
import React from 'react';
import { 
  Settings, 
  Bell, 
  Keyboard, 
  Database, 
  UserCircle, 
  LogOut,
  Shield,
  Zap,
  FileCode,
  MessageSquare,
  BookOpen
} from 'lucide-react';

// Settings sidebar items with SireIQ specific sections
const sidebarItems = [
  { id: 'general', label: 'General', icon: Settings },
  { id: 'ai-models', label: 'AI Models', icon: Zap },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'personalization', label: 'Personalization', icon: Keyboard },
  { id: 'speech', label: 'Voice Assistant', icon: MessageSquare },
  { id: 'data-controls', label: 'Data & Privacy', icon: Database },
  { id: 'builder-profile', label: 'Builder Profile', icon: UserCircle },
  { id: 'code-tools', label: 'Code Tools', icon: FileCode },
  { id: 'documentation', label: 'Documentation', icon: BookOpen },
  { id: 'security', label: 'Security', icon: Shield },
];

interface SettingsSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="w-64 border-r border-sireiq-accent/20 overflow-y-auto">
      <nav className="py-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
              activeSection === item.id 
                ? 'bg-sireiq-accent/10 text-sireiq-cyan' 
                : 'hover:bg-sireiq-accent/5'
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SettingsSidebar;
