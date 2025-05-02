
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Check, MessageCircle, User, Users } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const RealTimeCollaboration = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Real-time Collaboration | SireIQ</title>
        <meta name="description" content="Work seamlessly with your team in real-time, sharing ideas and refining content together." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Network className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Real-time</span> Collaboration
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Work seamlessly with your team in real-time, sharing ideas and refining content together.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden bg-sireiq-darker border border-sireiq-accent/30">
              <div className="p-4 border-b border-sireiq-accent/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">3 team members online</span>
                </div>
                <div className="flex -space-x-2">
                  {[
                    { color: "bg-pink-500", initial: "S" },
                    { color: "bg-blue-500", initial: "M" },
                    { color: "bg-amber-500", initial: "J" },
                  ].map((user, index) => (
                    <div key={index} className={`w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-xs font-bold border-2 border-sireiq-darker`}>
                      {user.initial}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 flex items-center justify-center h-64">
                <div className="text-center text-sireiq-light/50">
                  <Network className="h-12 w-12 mx-auto mb-4 text-sireiq-cyan opacity-50" />
                  <p>Collaboration visualization would appear here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features grid */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Collaboration</span> Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "Simultaneous Editing",
                description: "Multiple team members can work on the same document simultaneously with real-time updates."
              },
              {
                icon: MessageCircle,
                title: "Contextual Comments",
                description: "Leave comments and suggestions directly on specific parts of your content."
              },
              {
                icon: User,
                title: "Role-based Access",
                description: "Control who can view, comment, or edit content with customizable permission settings."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20">
                <div className="w-10 h-10 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-sireiq-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sireiq-light/70">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Work Together,</span> Create Better
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Our real-time collaboration tools bring your team together, no matter where they're located. Work on documents simultaneously, chat in context, and get feedback instantly to accelerate your creative process.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "See changes as they happen with no refresh needed", 
                  "Track revision history with detailed change logs", 
                  "Resolve conflicts smoothly with intelligent merging", 
                  "Integrate with notification systems for updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Start Collaborating <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <div className="bg-sireiq-darker rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">M</div>
                  <div>
                    <p className="font-medium">Michael</p>
                    <p className="text-xs text-sireiq-light/50">Just now</p>
                  </div>
                </div>
                <p className="text-sireiq-light/80">I've updated the introduction paragraph to better highlight our value proposition.</p>
              </div>
              
              <div className="bg-sireiq-darker rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold">S</div>
                  <div>
                    <p className="font-medium">Sarah</p>
                    <p className="text-xs text-sireiq-light/50">2 minutes ago</p>
                  </div>
                </div>
                <p className="text-sireiq-light/80">Looks great! Could we also add something about our recent case study results?</p>
                
                <div className="flex mt-3 ml-6 gap-2">
                  <Button variant="outline" size="sm" className="text-xs h-7 px-2 border-sireiq-accent/30">Reply</Button>
                  <Button variant="outline" size="sm" className="text-xs h-7 px-2 border-sireiq-accent/30">Resolve</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default RealTimeCollaboration;
