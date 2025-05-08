
import { Share2, Code, Database, Puzzle } from 'lucide-react';
import { AdobeIcon, TeamsIcon } from '@/components/CustomIcons';

export interface Integration {
  name: string;
  icon: React.ElementType;
  description: string;
  comingSoon: boolean;
  primaryColor: string;
}

export const integrations: Integration[] = [
  {
    name: 'Slack',
    icon: Share2,
    description: 'Send AI-generated content directly to your Slack channels and collaborate with your team.',
    comingSoon: false,
    primaryColor: 'bg-[#4A154B]'
  },
  {
    name: 'Adobe',
    icon: AdobeIcon,
    description: 'Seamlessly integrate SireIQ content with Adobe Creative Cloud applications.',
    comingSoon: true,
    primaryColor: 'bg-[#FF0000]'
  },
  {
    name: 'Microsoft Teams',
    icon: TeamsIcon,
    description: 'Share and collaborate on SireIQ projects within Microsoft Teams.',
    comingSoon: true,
    primaryColor: 'bg-[#6264A7]'
  },
  {
    name: 'Zapier',
    icon: Share2,
    description: 'Connect SireIQ to 3000+ apps with custom workflow automation.',
    comingSoon: false,
    primaryColor: 'bg-[#FF4A00]'
  },
  {
    name: 'Content Platforms',
    icon: Puzzle,
    description: 'Publish directly to WordPress, Medium, or other content platforms.',
    comingSoon: true,
    primaryColor: 'bg-[#21759B]'
  },
  {
    name: 'API',
    icon: Code,
    description: 'Import data from various sources to inform your AI-powered content creation.',
    comingSoon: true,
    primaryColor: 'bg-[#0078D4]'
  }
];
