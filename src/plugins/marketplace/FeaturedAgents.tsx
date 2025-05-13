
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ArrowUpRight, Star, Download, Download as DownloadIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

type Agent = {
  id: string;
  name: string;
  description: string;
  author: string;
  upvotes: number;
  version: string;
  downloads: number;
  tags: string[];
};

// Sample agents - in a real app would be fetched from an API
const featuredAgents: Agent[] = [
  {
    id: 'agent1',
    name: 'Research Assistant',
    description: 'Helps with academic research and paper summarization',
    author: 'SireIQ',
    upvotes: 4289,
    version: '2.4.0',
    downloads: 24500,
    tags: ['research', 'academic', 'verified'],
  },
  {
    id: 'agent2',
    name: 'Code Reviewer',
    description: 'Reviews code for security and performance issues',
    author: 'DevTeam',
    upvotes: 3150,
    version: '1.8.5',
    downloads: 18200,
    tags: ['coding', 'security', 'verified'],
  },
  {
    id: 'agent3',
    name: 'Meeting Summarizer',
    description: 'Creates concise summaries from meeting transcripts',
    author: 'Productivity+',
    upvotes: 2780,
    version: '3.1.2',
    downloads: 15600,
    tags: ['productivity', 'business'],
  },
  {
    id: 'agent4',
    name: 'Data Visualizer',
    description: 'Creates charts and graphs from your data',
    author: 'DataLabs',
    upvotes: 2105,
    version: '2.0.1',
    downloads: 9800,
    tags: ['data', 'visualization'],
  },
  {
    id: 'agent5',
    name: 'Email Assistant',
    description: 'Drafts and manages emails with smart suggestions',
    author: 'CommunicateAI',
    upvotes: 1850,
    version: '1.5.0',
    downloads: 12300,
    tags: ['email', 'communication'],
  },
];

const FeaturedAgents: React.FC = () => {
  const [isEnabled] = useLocalStorage('marketplace-teaser-enabled', true);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  if (!isEnabled) return null;

  const handleExploreMarketplace = () => {
    navigate('/marketplace');
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full px-4 py-6 bg-sireiq-darker">
      <div className="container mx-auto">
        {/* Header - Always visible */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Star className="h-5 w-5 text-sireiq-cyan" />
            Featured Agents
          </h2>
          
          <div className="flex gap-2 items-center">
            <Button 
              variant="link" 
              className="text-sireiq-cyan"
              onClick={handleExploreMarketplace}
            >
              Explore Marketplace <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleExpand}
              className="text-sireiq-cyan"
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Content - Conditionally visible based on expanded state */}
        {isExpanded && (
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
              {featuredAgents.map((agent) => (
                <motion.div
                  key={agent.id}
                  className="min-w-[280px] snap-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-sireiq-accent/30 bg-black/30 h-full">
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{agent.name}</h3>
                          <div className="bg-sireiq-accent/20 text-xs px-2 py-1 rounded">v{agent.version}</div>
                        </div>
                        <div className="text-xs text-sireiq-light/60">by {agent.author}</div>
                      </div>
                      
                      <p className="text-sm text-sireiq-light/80 mb-3 line-clamp-2">
                        {agent.description}
                      </p>
                      
                      <div className="flex gap-1 mb-3">
                        {agent.tags.map((tag) => (
                          <div 
                            key={tag} 
                            className={`text-[10px] px-1.5 py-0.5 rounded-full 
                              ${tag === 'verified' ? 
                                'bg-green-500/20 text-green-400' : 
                                'bg-sireiq-accent/20 text-sireiq-light/60'
                              }`}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-xs">
                            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                            <span>{agent.upvotes.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-sireiq-light/60">
                            <DownloadIcon className="h-3 w-3" />
                            <span>{agent.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="h-7">
                          <Download className="h-3 w-3 mr-1" /> Install
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Fade effect at the edges */}
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-sireiq-darker to-transparent pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedAgents;
