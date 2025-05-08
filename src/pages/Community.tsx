import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Community | SireIQ</title>
        <meta name="description" content="Join the SireIQ community to connect with other developers, share your projects, and learn from experts." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sireiq-cyan to-purple-500 bg-clip-text text-transparent">SireIQ Community</h1>
            <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto">
              Connect with developers, share knowledge, and collaborate with others in the SireIQ ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="#" className="bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-black font-medium px-6 py-3 rounded-lg">
                Join the Community
              </Link>
              <Link to="#" className="bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border border-sireiq-accent/30 px-6 py-3 rounded-lg">
                Browse Discussions
              </Link>
            </div>
          </div>
          
          {/* Community Stats - Empty */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1"></div>
              <div className="text-sm text-sireiq-light/70">Community Members</div>
            </div>
            
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1"></div>
              <div className="text-sm text-sireiq-light/70">Countries</div>
            </div>
            
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1"></div>
              <div className="text-sm text-sireiq-light/70">Discussion Topics</div>
            </div>
            
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1"></div>
              <div className="text-sm text-sireiq-light/70">Community Mentors</div>
            </div>
          </div>
          
          {/* Featured Discussions - Empty */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Discussions</h2>
              <Link to="#" className="text-sireiq-cyan flex items-center group">
                View all discussions 
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {/* Content removed */}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Community Spotlight - Empty */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Community Spotlight</h2>
              
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl overflow-hidden hover:border-sireiq-cyan/50 transition-all p-6">
                {/* Content removed */}
              </div>
            </div>
            
            {/* Upcoming Events - Empty */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Upcoming Events</h2>
                <Link to="#" className="text-sireiq-cyan flex items-center group">
                  View all events
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {/* Content removed */}
              </div>
            </div>
          </div>
          
          {/* Community Resources - Empty */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Community Resources</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Content removed */}
            </div>
          </div>
          
          {/* Community CTA */}
          <div className="bg-gradient-to-r from-sireiq-accent/20 to-sireiq-cyan/10 rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Global Community Today</h2>
              <p className="text-sireiq-light/70 mb-6">
                Connect with developers around the world, share your projects, and help shape the future of AI technology.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="#" className="bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-black font-medium px-6 py-3 rounded-lg">
                  Create an Account
                </Link>
                <Link to="#" className="bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border border-sireiq-accent/30 px-6 py-3 rounded-lg">
                  Browse Community Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Community;
