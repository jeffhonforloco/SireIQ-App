
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ArrowUpRight, Star, Download, Download as DownloadIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { agents } from '@/registry/agents';

interface FeaturedAgentsProps {
  containerClassName?: string;
}

const FeaturedAgents: React.FC<FeaturedAgentsProps> = ({ containerClassName = "" }) => {
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

  const getAgentIcon = (iconName: string) => {
    // Map icon names to actual icon components or return a default
    switch (iconName) {
      case 'search':
        return '🔍';
      case 'file-text':
        return '📄';
      case 'chart-bar':
        return '📊';
      default:
        return '🤖';
    }
  };

  const getRandomStats = () => ({
    upvotes: Math.floor(Math.random() * 5000) + 1000,
    downloads: Math.floor(Math.random() * 50000) + 5000,
    version: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}`
  });

  return (
    <div className={`w-full px-4 py-6 bg-sireiq-darker ${containerClassName}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Header - Always visible with improved spacing */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-sireiq-cyan" />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Featured AI Agents
            </h2>
          </div>
          
          <div className="flex gap-3 items-center">
            <Button 
              variant="outline" 
              className="text-sireiq-cyan border-sireiq-cyan/30 hover:bg-sireiq-cyan/10 hidden sm:flex"
              onClick={handleExploreMarketplace}
            >
              Explore Marketplace <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleExpand}
              className="text-sireiq-cyan hover:bg-sireiq-cyan/10 p-2"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Hide featured agents" : "Show featured agents"}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Explore Button */}
        <div className="sm:hidden mb-4">
          <Button 
            variant="outline" 
            className="w-full text-sireiq-cyan border-sireiq-cyan/30 hover:bg-sireiq-cyan/10"
            onClick={handleExploreMarketplace}
          >
            Explore Marketplace <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Content - Conditionally visible with enhanced animations */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative"
            >
              {/* Enhanced grid layout for better responsiveness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {agents.map((agent, index) => {
                  const stats = getRandomStats();
                  return (
                    <motion.div
                      key={agent.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="w-full"
                    >
                      <Card className="border-sireiq-accent/30 bg-gradient-to-br from-black/50 to-sireiq-darker/50 h-full hover:border-sireiq-cyan/50 transition-all duration-300 backdrop-blur-sm">
                        <CardContent className="p-4 h-full flex flex-col">
                          {/* Header with version */}
                          <div className="mb-3">
                            <div className="flex justify-between items-start mb-1">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{getAgentIcon(agent.icon)}</span>
                                <h3 className="font-semibold text-white text-sm lg:text-base line-clamp-1">
                                  {agent.name}
                                </h3>
                              </div>
                              <div className="bg-sireiq-accent/20 text-xs px-2 py-1 rounded text-sireiq-cyan font-mono">
                                v{stats.version}
                              </div>
                            </div>
                            <div className="text-xs text-sireiq-light/60">by SireIQ</div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-sm text-sireiq-light/80 mb-4 flex-grow line-clamp-2 leading-relaxed">
                            {agent.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            <div className="bg-green-500/20 text-green-300 border border-green-500/30 text-[10px] px-2 py-1 rounded-full font-medium">
                              verified
                            </div>
                            <div className="bg-sireiq-accent/20 text-sireiq-light/70 border border-sireiq-accent/30 text-[10px] px-2 py-1 rounded-full font-medium">
                              {agent.category}
                            </div>
                            <div className={`text-[10px] px-2 py-1 rounded-full font-medium bg-sireiq-accent/20 text-sireiq-light/70 border border-sireiq-accent/30`}>
                              {agent.status}
                            </div>
                          </div>
                          
                          {/* Stats and Install */}
                          <div className="flex justify-between items-center mt-auto">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1 text-xs">
                                <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                                <span className="text-white font-medium">{stats.upvotes.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-sireiq-light/60">
                                <DownloadIcon className="h-3 w-3" />
                                <span>{stats.downloads.toLocaleString()}</span>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-7 text-xs border-sireiq-cyan/30 text-sireiq-cyan hover:bg-sireiq-cyan/10 hover:border-sireiq-cyan/50"
                              onClick={() => navigate('/featured-agents')}
                            >
                              <Download className="h-3 w-3 mr-1" /> Use
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedAgents;
