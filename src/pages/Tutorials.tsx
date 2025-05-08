
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Book, Video, ChevronRight } from 'lucide-react';

const Tutorials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Tutorials' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];
  
  const tutorials = [
    {
      id: 'tut-1',
      title: 'Getting Started with SireIQ',
      description: 'Learn the basics of the SireIQ platform and set up your first project.',
      category: 'beginner',
      type: 'video',
      duration: '10 minutes',
      author: 'Alex Morgan',
      image: '/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png'
    },
    {
      id: 'tut-2',
      title: 'Creating Custom Voice Models',
      description: 'Step-by-step guide to creating and training custom voice models for your applications.',
      category: 'intermediate',
      type: 'article',
      duration: '12 minutes',
      author: 'Jennifer Wu',
      image: '/lovable-uploads/5a32017e-bddc-4e56-b9a8-8f233099e02a.png'
    },
    {
      id: 'tut-3',
      title: 'Advanced AI Workflows',
      description: 'Build complex AI workflows that combine multiple models and data sources.',
      category: 'advanced',
      type: 'code',
      duration: '25 minutes',
      author: 'Marcus Johnson',
      image: '/lovable-uploads/650ef573-eb4d-4913-8d70-592d1b24760a.png'
    },
    {
      id: 'tut-4',
      title: 'Integrating the SireIQ API',
      description: 'Learn how to integrate the SireIQ API into your applications and services.',
      category: 'intermediate',
      type: 'code',
      duration: '15 minutes',
      author: 'Sophia Chen',
      image: '/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png'
    },
    {
      id: 'tut-5',
      title: 'Understanding AI Model Parameters',
      description: 'Explore and optimize various parameters to get the best results from your AI models.',
      category: 'beginner',
      type: 'article',
      duration: '8 minutes',
      author: 'Robert Kim',
      image: '/lovable-uploads/632c4f0b-ba29-449a-b90e-7f8516581db2.png'
    },
    {
      id: 'tut-6',
      title: 'Building a Voice Assistant',
      description: 'Create a complete voice assistant application using SireIQ technology.',
      category: 'advanced',
      type: 'video',
      duration: '30 minutes',
      author: 'Emily Parker',
      image: '/lovable-uploads/207b3383-58aa-491c-8000-d56fca868602.png'
    }
  ];
  
  const filteredTutorials = activeFilter === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === activeFilter);
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'video': return <Video className="text-sireiq-cyan" size={20} />;
      case 'code': return <Code className="text-sireiq-cyan" size={20} />;
      case 'article': return <Book className="text-sireiq-cyan" size={20} />;
      default: return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorials | SireIQ</title>
        <meta name="description" content="Step-by-step guides and tutorials to help you master the SireIQ platform." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sireiq-cyan to-purple-500 bg-clip-text text-transparent">Tutorials</h1>
            <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto">
              Step-by-step guides to help you master the SireIQ platform and make the most of our AI technology.
            </p>
          </div>
          
          {/* Search & Filters */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="relative md:w-1/2">
                <input
                  type="text"
                  placeholder="Search tutorials..."
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-sireiq-accent/30 focus:outline-none focus:ring-2 focus:ring-sireiq-cyan"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      activeFilter === category.id
                        ? 'bg-sireiq-cyan text-black'
                        : 'bg-sireiq-accent/20 hover:bg-sireiq-accent/30 text-sireiq-light'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured Tutorial */}
          <div className="mb-12">
            <a href="#" className="block group">
              <div className="bg-gradient-to-r from-sireiq-accent/20 to-sireiq-cyan/10 rounded-xl overflow-hidden border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8">
                    <div className="inline-flex items-center mb-4 text-sm bg-sireiq-accent/20 text-sireiq-cyan px-3 py-1 rounded-full">
                      <Video size={16} className="mr-2" />
                      Featured Video Tutorial
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-sireiq-cyan transition-colors">
                      Master the SireIQ Platform in 60 Minutes
                    </h2>
                    
                    <p className="text-sireiq-light/70 mb-6">
                      A comprehensive walkthrough of all major features of the SireIQ platform, from setup to advanced usage.
                    </p>
                    
                    <div className="flex items-center mb-4 text-sm">
                      <span className="flex items-center bg-black/30 px-3 py-1 rounded-full">
                        <span className="w-5 h-5 rounded-full bg-sireiq-accent/50 flex items-center justify-center mr-2">
                          E
                        </span>
                        Emma Wilson
                      </span>
                      <span className="mx-3">•</span>
                      <span>60 minutes</span>
                    </div>
                    
                    <div className="inline-flex items-center text-sireiq-cyan group-hover:translate-x-1 transition-transform">
                      Watch tutorial <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                  
                  <div className="relative min-h-[250px] md:min-h-[300px]">
                    <img 
                      src="/lovable-uploads/632c4f0b-ba29-449a-b90e-7f8516581db2.png"
                      alt="Master the SireIQ Platform"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-sireiq-cyan/90 flex items-center justify-center">
                        <div className="ml-1 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* Tutorials Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              {activeFilter === 'all' ? 'All Tutorials' : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Tutorials`}
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map(tutorial => (
                <a key={tutorial.id} href="#" className="group">
                  <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl overflow-hidden hover:border-sireiq-cyan/50 transition-all h-full flex flex-col">
                    <div className="relative h-48">
                      <img 
                        src={tutorial.image}
                        alt={tutorial.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/60 px-3 py-2 rounded-full flex items-center">
                          <span className="text-sireiq-cyan">View Tutorial</span>
                          <ChevronRight size={16} className="ml-1 text-sireiq-cyan" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="flex items-center text-xs font-medium bg-sireiq-accent/20 text-sireiq-cyan px-2 py-1 rounded-full">
                          {getIcon(tutorial.type)}
                          <span className="ml-1 capitalize">{tutorial.type}</span>
                        </span>
                        
                        <span className="text-xs text-sireiq-light/60">
                          {tutorial.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 group-hover:text-sireiq-cyan transition-colors">
                        {tutorial.title}
                      </h3>
                      
                      <p className="text-sm text-sireiq-light/70 mb-4 flex-1">
                        {tutorial.description}
                      </p>
                      
                      <div className="flex items-center text-xs">
                        <span className="w-5 h-5 rounded-full bg-sireiq-accent/30 flex items-center justify-center mr-2">
                          {tutorial.author.charAt(0)}
                        </span>
                        {tutorial.author}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Learning Paths */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Guided Learning Paths</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
                <h3 className="text-xl font-bold mb-3">AI Development Fundamentals</h3>
                <p className="text-sireiq-light/70 mb-4">
                  Master the core concepts of AI development with SireIQ. Perfect for beginners.
                </p>
                <div className="flex items-center mb-4">
                  <div className="bg-sireiq-accent/20 text-sireiq-cyan text-xs px-2 py-1 rounded-full">
                    6 Tutorials
                  </div>
                  <span className="mx-2">•</span>
                  <div className="text-xs text-sireiq-light/60">3 hours total</div>
                </div>
                <a href="#" className="text-sireiq-cyan flex items-center hover:underline">
                  Start learning path <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
                <h3 className="text-xl font-bold mb-3">Enterprise AI Integration</h3>
                <p className="text-sireiq-light/70 mb-4">
                  Learn how to integrate and scale SireIQ solutions in enterprise environments.
                </p>
                <div className="flex items-center mb-4">
                  <div className="bg-sireiq-accent/20 text-sireiq-cyan text-xs px-2 py-1 rounded-full">
                    8 Tutorials
                  </div>
                  <span className="mx-2">•</span>
                  <div className="text-xs text-sireiq-light/60">5 hours total</div>
                </div>
                <a href="#" className="text-sireiq-cyan flex items-center hover:underline">
                  Start learning path <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Request Tutorial */}
          <div className="bg-gradient-to-r from-sireiq-accent/20 to-sireiq-cyan/10 rounded-xl p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Can't Find What You Need?</h2>
              <p className="text-sireiq-light/70 mb-6">
                Request a tutorial on a specific topic, and our team will consider creating it for the community.
              </p>
              <button className="bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-black font-medium px-6 py-3 rounded-lg">
                Request a Tutorial
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Tutorials;
