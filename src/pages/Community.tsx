
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronRight, Users, Link as LinkIcon } from 'lucide-react';

const Community: React.FC = () => {
  const communityStats = {
    members: '25,000+',
    countries: '85+',
    topics: '1,200+',
    mentors: '100+'
  };
  
  const featuredDiscussions = [
    {
      id: 'disc-1',
      title: 'Best practices for fine-tuning the personality engine',
      preview: 'I've been experimenting with different parameter settings for personality generation and wanted to share some insights...',
      author: 'Michelle K.',
      replies: 28,
      views: 342,
      category: 'Technical Discussion',
      time: '2 days ago'
    },
    {
      id: 'disc-2',
      title: 'Show & Tell: Voice Assistant for Healthcare',
      preview: 'I've built a specialized voice assistant for patient intake using SireIQ's platform. Here's how it works...',
      author: 'Dr. James Wilson',
      replies: 45,
      views: 512,
      category: 'Project Showcase',
      time: '1 week ago'
    },
    {
      id: 'disc-3',
      title: 'Upcoming developer meetups in Europe?',
      preview: 'I'll be traveling through Europe next month and would love to connect with other SireIQ developers...',
      author: 'Thomas G.',
      replies: 17,
      views: 203,
      category: 'Events',
      time: '3 days ago'
    }
  ];
  
  const upcomingEvents = [
    {
      id: 'event-1',
      title: 'SireIQ Developer Conference 2023',
      date: 'November 15-17, 2023',
      location: 'San Francisco, CA',
      attendees: 2300,
      type: 'Conference'
    },
    {
      id: 'event-2',
      title: 'AI Voice Technology Webinar',
      date: 'October 28, 2023 • 2:00 PM PST',
      location: 'Online',
      attendees: 850,
      type: 'Webinar'
    },
    {
      id: 'event-3',
      title: 'SireIQ Platform Workshop',
      date: 'November 5, 2023',
      location: 'London, UK',
      attendees: 120,
      type: 'Workshop'
    }
  ];
  
  const communitySpotlight = {
    name: 'Elena Rodriguez',
    role: 'AI Developer',
    company: 'HealthTech Solutions',
    bio: 'Elena has been an active community contributor, helping other developers implement voice AI solutions in healthcare applications. Her tutorial series on SireIQ integration has over 50,000 views.',
    achievement: 'Top Contributor 2023',
    image: '/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png'
  };

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
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1">{communityStats.members}</div>
              <div className="text-sm text-sireiq-light/70">Community Members</div>
            </div>
            
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1">{communityStats.countries}</div>
              <div className="text-sm text-sireiq-light/70">Countries</div>
            </div>
            
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1">{communityStats.topics}</div>
              <div className="text-sm text-sireiq-light/70">Discussion Topics</div>
            </div>
            
            <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 text-center hover:border-sireiq-cyan/50 transition-all">
              <div className="text-3xl font-bold text-sireiq-cyan mb-1">{communityStats.mentors}</div>
              <div className="text-sm text-sireiq-light/70">Community Mentors</div>
            </div>
          </div>
          
          {/* Featured Discussions */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Discussions</h2>
              <Link to="#" className="text-sireiq-cyan flex items-center group">
                View all discussions 
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {featuredDiscussions.map(discussion => (
                <Link key={discussion.id} to="#" className="block group">
                  <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
                    <div className="flex flex-wrap items-start justify-between mb-3 gap-2">
                      <div className="bg-sireiq-accent/20 text-sireiq-cyan text-xs px-3 py-1 rounded-full">
                        {discussion.category}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-xs text-sireiq-light/60">
                        <span className="flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          {discussion.replies} replies
                        </span>
                        <span>{discussion.views} views</span>
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-sireiq-cyan transition-colors">
                      {discussion.title}
                    </h3>
                    
                    <p className="text-sireiq-light/70 mb-4">
                      {discussion.preview}
                    </p>
                    
                    <div className="flex items-center text-sm">
                      <span className="flex items-center">
                        <span className="w-6 h-6 rounded-full bg-sireiq-accent/30 flex items-center justify-center mr-2">
                          {discussion.author.charAt(0)}
                        </span>
                        Started by {discussion.author}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Community Spotlight */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Community Spotlight</h2>
              
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl overflow-hidden hover:border-sireiq-cyan/50 transition-all">
                <div className="h-48 relative">
                  <img 
                    src={communitySpotlight.image}
                    alt={communitySpotlight.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="inline-block bg-sireiq-accent/20 text-sireiq-cyan text-xs px-3 py-1 rounded-full mb-3">
                    {communitySpotlight.achievement}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{communitySpotlight.name}</h3>
                  <p className="text-sireiq-light/70 text-sm mb-4">
                    {communitySpotlight.role} at {communitySpotlight.company}
                  </p>
                  
                  <p className="text-sireiq-light/70 text-sm mb-4">
                    {communitySpotlight.bio}
                  </p>
                  
                  <Link to="#" className="text-sireiq-cyan flex items-center text-sm">
                    View profile <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Upcoming Events */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Upcoming Events</h2>
                <Link to="#" className="text-sireiq-cyan flex items-center group">
                  View all events
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <Link key={event.id} to="#" className="block group">
                    <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl overflow-hidden hover:border-sireiq-cyan/50 transition-all">
                      <div className="grid md:grid-cols-5 gap-4">
                        <div className="md:col-span-1 flex flex-col items-center justify-center p-4 md:border-r border-sireiq-accent/30">
                          <div className="text-xl font-bold text-sireiq-cyan">{event.type}</div>
                        </div>
                        
                        <div className="md:col-span-4 p-4 md:p-6">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-sireiq-cyan transition-colors">
                            {event.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-sireiq-light/70 mb-3">
                            <div>{event.date}</div>
                            <div>{event.location}</div>
                            <div>{event.attendees} attendees</div>
                          </div>
                          
                          <div className="flex gap-2">
                            <button className="bg-sireiq-cyan/80 hover:bg-sireiq-cyan text-black text-sm px-3 py-1 rounded">
                              Register
                            </button>
                            <button className="bg-sireiq-accent/20 hover:bg-sireiq-accent/30 text-sm px-3 py-1 rounded">
                              Add to calendar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Community Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Community Resources</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
                <h3 className="text-xl font-bold mb-3">GitHub Repository</h3>
                <p className="text-sm text-sireiq-light/70 mb-4">
                  Access code samples, example projects, and SDKs on our official GitHub repository.
                </p>
                <a href="#" className="text-sireiq-cyan flex items-center group text-sm">
                  View Repository <LinkIcon size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
                <h3 className="text-xl font-bold mb-3">Community Discord</h3>
                <p className="text-sm text-sireiq-light/70 mb-4">
                  Join our Discord server for real-time support and discussions with the community.
                </p>
                <a href="#" className="text-sireiq-cyan flex items-center group text-sm">
                  Join Discord <LinkIcon size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
                <h3 className="text-xl font-bold mb-3">Developer Forum</h3>
                <p className="text-sm text-sireiq-light/70 mb-4">
                  Ask questions, share knowledge, and connect with other developers on our forum.
                </p>
                <a href="#" className="text-sireiq-cyan flex items-center group text-sm">
                  Browse Forum <LinkIcon size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 hover:border-sireiq-cyan/50 transition-all">
                <h3 className="text-xl font-bold mb-3">Knowledge Base</h3>
                <p className="text-sm text-sireiq-light/70 mb-4">
                  Find answers to common questions and learn best practices from our knowledge base.
                </p>
                <a href="#" className="text-sireiq-cyan flex items-center group text-sm">
                  Explore Knowledge Base <LinkIcon size={14} className="ml-1" />
                </a>
              </div>
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
                <Link to="#" className="bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border border-sireiq-accent/30 px-6 py-3 rounded-lg flex items-center">
                  <Users size={18} className="mr-2" />
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
