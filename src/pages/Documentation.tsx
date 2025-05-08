
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, ChevronRight, File, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentation | SireIQ</title>
        <meta name="description" content="Comprehensive documentation to help you get the most out of the SireIQ platform." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sireiq-cyan to-purple-500 bg-clip-text text-transparent">Documentation</h1>
            <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto">
              Everything you need to know about SireIQ's AI platform. Explore our guides, tutorials, and references to get the most out of our services.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-sireiq-accent/30 focus:outline-none focus:ring-2 focus:ring-sireiq-cyan"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-black px-4 py-1 rounded-md">
                Search
              </button>
            </div>
          </div>
          
          {/* Documentation Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Getting Started */}
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
              <div className="flex items-center mb-4">
                <Book className="text-sireiq-cyan mr-3" size={24} />
                <h3 className="text-xl font-bold">Getting Started</h3>
              </div>
              <p className="text-sireiq-light/70 mb-4">Quick guides to help you set up and start using SireIQ's platform in minutes.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>Platform Overview</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>Account Setup</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>First AI Agent Creation</span>
                </li>
              </ul>
              <Link to="#" className="text-sireiq-cyan hover:text-sireiq-cyan/80 flex items-center">
                View all guides
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Core Concepts */}
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
              <div className="flex items-center mb-4">
                <File className="text-sireiq-cyan mr-3" size={24} />
                <h3 className="text-xl font-bold">Core Concepts</h3>
              </div>
              <p className="text-sireiq-light/70 mb-4">Learn the fundamental concepts behind SireIQ's AI technology.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>AI Models Explained</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>Personality Engine</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>Voice Assistant Technology</span>
                </li>
              </ul>
              <Link to="#" className="text-sireiq-cyan hover:text-sireiq-cyan/80 flex items-center">
                Explore concepts
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Video Tutorials */}
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
              <div className="flex items-center mb-4">
                <Video className="text-sireiq-cyan mr-3" size={24} />
                <h3 className="text-xl font-bold">Video Tutorials</h3>
              </div>
              <p className="text-sireiq-light/70 mb-4">Visual step-by-step guides to master SireIQ's features quickly.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>Platform Walkthrough</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>Creating Advanced Workflows</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="text-sireiq-cyan mr-1" size={16} />
                  <span>Integration Setup Guide</span>
                </li>
              </ul>
              <Link to="#" className="text-sireiq-cyan hover:text-sireiq-cyan/80 flex items-center">
                Watch tutorials
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Popular Topics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Popular Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['API Integration', 'Voice Model Training', 'Custom Workflows', 'Data Privacy', 'Enterprise Setup', 'Team Collaboration', 'Performance Optimization', 'Analytics'].map((topic) => (
                <Link 
                  key={topic}
                  to="#"
                  className="block bg-black/20 hover:bg-black/30 border border-sireiq-accent/30 rounded-lg px-4 py-3 text-center transition-all hover:border-sireiq-cyan/50"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Documentation Updates */}
          <div className="bg-gradient-to-r from-sireiq-accent/20 to-sireiq-cyan/10 rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-sireiq-light/70 mb-6">
                Our documentation is constantly evolving as we improve our platform. Subscribe to receive updates whenever we add new guides or make significant changes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-sireiq-accent/30 focus:outline-none focus:ring-2 focus:ring-sireiq-cyan"
                />
                <button className="bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-black font-medium px-6 py-2 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Documentation;
