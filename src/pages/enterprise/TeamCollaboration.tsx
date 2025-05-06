
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Share2, MessageSquare, Calendar, History, RotateCcw } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const TeamCollaboration = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Team Collaboration | SireIQ Enterprise</title>
        <meta name="description" content="Foster seamless collaboration across your creative teams with SireIQ's powerful team features and real-time editing capabilities." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Users className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Team</span> Collaboration
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Enable seamless collaboration across your creative teams with shared workspaces and real-time editing.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Share2,
                  title: "Shared Workspaces",
                  description: "Create dedicated spaces for teams to collaborate on content"
                },
                {
                  icon: MessageSquare,
                  title: "Threaded Comments",
                  description: "Discuss ideas and provide feedback directly on content"
                },
                {
                  icon: History,
                  title: "Version History",
                  description: "Track changes and revert to previous versions when needed"
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-sireiq-light/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Collaboration features */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Real-Time</span> Collaboration
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                SireIQ's enterprise collaboration tools enable your teams to work together seamlessly, regardless of location. Experience the power of simultaneous editing, instant feedback, and streamlined workflows.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Multiple team members can edit AI prompts simultaneously",
                  "Comment and provide feedback directly on generated content",
                  "Assign tasks and track progress within the platform",
                  "Set custom permissions for different team roles",
                  "Integration with existing team communication tools"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-sireiq-cyan/20 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Request Team Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <div className="bg-sireiq-darker rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    {['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((color, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-xs font-medium border-2 border-sireiq-darker`}>
                        {['AJ', 'TK', 'SR', 'MP'][i]}
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-sireiq-light/70">4 team members collaborating</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-sireiq-accent/10 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sireiq-cyan">Marketing Campaign</span>
                      <span className="text-xs text-sireiq-light/50">Last edit: 5 mins ago</span>
                    </div>
                    <p className="text-sm">Working on summer campaign copy. Need feedback on tone.</p>
                  </div>
                  
                  <div className="bg-sireiq-accent/10 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sireiq-cyan">Product Description</span>
                      <span className="text-xs text-sireiq-light/50">Last edit: 1 hour ago</span>
                    </div>
                    <p className="text-sm">Updated technical specs section. Please review.</p>
                  </div>
                  
                  <div className="bg-sireiq-accent/10 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sireiq-cyan">Social Media Posts</span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 text-sireiq-light/50 mr-1" />
                        <span className="text-xs text-sireiq-light/50">Due: Tomorrow</span>
                      </div>
                    </div>
                    <p className="text-sm">Created 5 post variations. Vote on your favorite.</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <Button variant="outline" size="sm" className="text-xs border-sireiq-accent/30">
                    <RotateCcw className="h-3 w-3 mr-1" /> History
                  </Button>
                  <Button size="sm" className="text-xs bg-sireiq-cyan text-sireiq-darker">
                    <Share2 className="h-3 w-3 mr-1" /> Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team workspace section */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-gradient">Team Workspaces</span>
          </h2>
          <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto mb-10">
            Create dedicated workspaces for different teams, projects, or departments. Organize content, share resources, and track progress all in one place.
          </p>
          
          <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Marketing Team",
                  members: 12,
                  projects: 8,
                  activity: "High"
                },
                {
                  title: "Product Team",
                  members: 8,
                  projects: 5,
                  activity: "Medium"
                },
                {
                  title: "Creative Team",
                  members: 15,
                  projects: 10,
                  activity: "Very High"
                }
              ].map((workspace, index) => (
                <div key={index} className="bg-sireiq-darker rounded-lg p-4 border border-sireiq-accent/20">
                  <h3 className="font-bold text-xl mb-3">{workspace.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-sireiq-light/70">Members:</span>
                      <span>{workspace.members}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-sireiq-light/70">Active Projects:</span>
                      <span>{workspace.projects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-sireiq-light/70">Activity Level:</span>
                      <span>{workspace.activity}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-sireiq-accent/30">
                    View Workspace
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default TeamCollaboration;
