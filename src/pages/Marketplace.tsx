
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Star, Search, Filter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { agents } from '@/registry/agents';

// Agent categories for the tabs
const categories = [
  'All Agents',
  'Analysis',
  'Creation', 
  'Research',
  'Summarization',
  'Utility'
];

// Extended agent interface with marketplace-specific properties
interface MarketplaceAgent {
  id: string;
  name: string;
  description: string;
  author: string;
  upvotes: number;
  version: string;
  downloads: number;
  tags: string[];
  category: string;
  pricing?: string;
  status: string;
}

// Convert real agents to marketplace format
const marketplaceAgents: MarketplaceAgent[] = agents.map((agent, index) => ({
  id: agent.id,
  name: agent.name,
  description: agent.description,
  author: 'SireIQ',
  upvotes: Math.floor(Math.random() * 3000) + 1500, // Generate realistic upvote counts
  version: '2.1.0',
  downloads: Math.floor(Math.random() * 20000) + 5000, // Generate realistic download counts
  tags: [...agent.capabilities.slice(0, 2).map(cap => cap.toLowerCase().replace(/\s+/g, '-')), agent.status === 'available' ? 'verified' : agent.status],
  category: agent.category.charAt(0).toUpperCase() + agent.category.slice(1),
  pricing: agent.status === 'beta' ? 'Beta' : 'Free',
  status: agent.status
}));

const AgentCard: React.FC<{ agent: MarketplaceAgent }> = ({ agent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
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
                <Download className="h-3 w-3" />
                <span>{agent.downloads.toLocaleString()}</span>
              </div>
            </div>
            {agent.pricing && (
              <div className={`text-xs px-2 py-1 rounded ${
                agent.pricing === 'Beta' ? 'bg-amber-500/20 text-amber-400' : 'bg-green-500/20 text-green-400'
              }`}>
                {agent.pricing}
              </div>
            )}
            <Button variant="outline" size="sm" className="h-7">
              <Download className="h-3 w-3 mr-1" /> Install
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredAgents = React.useMemo(() => {
    return marketplaceAgents.filter(agent => 
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  
  return (
    <div className="min-h-screen bg-black flex flex-col overflow-hidden">
      <Helmet>
        <title>Agent Marketplace | SireIQ</title>
        <meta name="description" content="Browse and install AI agents to enhance your SireIQ experience." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Agent Marketplace</h1>
          <p className="text-sireiq-light/70 max-w-xl mx-auto">
            Browse and install specialized AI agents to enhance your SireIQ experience
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sireiq-light/50" />
            <input 
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-sireiq-dark border border-sireiq-accent/30 rounded-lg text-sireiq-light focus:ring-1 focus:ring-sireiq-cyan focus:outline-none"
            />
          </div>
          <Button variant="outline" className="whitespace-nowrap">
            <Filter className="h-4 w-4 mr-1" /> Filter
          </Button>
        </div>
        
        <Tabs defaultValue="All Agents" className="w-full">
          <TabsList className="mb-6 w-full overflow-x-auto flex border-b border-sireiq-accent/20 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:text-sireiq-cyan data-[state=active]:border-b-2 data-[state=active]:border-sireiq-cyan rounded-none bg-transparent flex-1"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredAgents
                  .filter(agent => category === 'All Agents' || agent.category === category)
                  .map((agent) => (
                    <AgentCard key={agent.id} agent={agent} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
