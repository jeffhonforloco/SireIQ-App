
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Star, Search, Filter, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Agent categories for the tabs
const categories = [
  'All Agents',
  'Productivity',
  'Research',
  'Creative',
  'Development',
  'Business',
  'Education',
];

// Extended agent interface with more detailed information
interface Agent {
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
  installedCount?: number;
}

// Expanded list of agents for the marketplace
const marketplaceAgents: Agent[] = [
  {
    id: 'agent1',
    name: 'Research Assistant',
    description: 'Helps with academic research and paper summarization',
    author: 'SireIQ',
    upvotes: 4289,
    version: '2.4.0',
    downloads: 24500,
    tags: ['research', 'academic', 'verified'],
    category: 'Research',
    pricing: 'Free',
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
    category: 'Development',
    pricing: 'Premium',
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
    category: 'Productivity',
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
    category: 'Business',
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
    category: 'Productivity',
  },
  {
    id: 'agent6',
    name: 'Creative Writer',
    description: 'Generate creative content for blogs, stories, and marketing',
    author: 'WordCraft',
    upvotes: 2430,
    version: '2.2.1',
    downloads: 19500,
    tags: ['writing', 'content', 'creative'],
    category: 'Creative',
  },
  {
    id: 'agent7',
    name: 'Math Solver',
    description: 'Step-by-step solutions for math problems and equations',
    author: 'EducateMe',
    upvotes: 1980,
    version: '1.7.3',
    downloads: 14200,
    tags: ['education', 'mathematics'],
    category: 'Education',
  },
  {
    id: 'agent8',
    name: 'Language Translator',
    description: 'Translate text between 50+ languages with contextual accuracy',
    author: 'LinguaTech',
    upvotes: 3250,
    version: '3.0.0',
    downloads: 22800,
    tags: ['language', 'translation', 'verified'],
    category: 'Productivity',
  },
];

const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => {
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
                agent.pricing === 'Premium' ? 'bg-sireiq-cyan/20 text-sireiq-cyan' : ''
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
