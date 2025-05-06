
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Check, MessageCircle, User, Users } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { CollaborationProvider } from '@/contexts/CollaborationContext';
import UserList from '@/components/collaboration/UserList';
import CollaborativeDocument from '@/components/collaboration/CollaborativeDocument';
import CommentsSection from '@/components/collaboration/CommentsSection';

// Sample document content
const documentContent = `
Welcome to SireIQ's Real-Time Collaboration feature. This demonstration shows how multiple team members can work together seamlessly.

Our collaborative editing features allow you to:
- Edit documents simultaneously with other team members
- Leave comments and suggestions directly on specific content
- Track changes and revisions with detailed history
- Communicate in context without switching between tools

Try selecting some text to add a comment, or edit the document to see changes in real-time!
`;

// Sample project documents
const projectDocuments = [
  {
    title: "Marketing Campaign",
    content: "Working on summer campaign copy. Need feedback on tone and messaging strategy. The target audience is tech-savvy professionals aged 25-40.",
    lastEdit: "5 mins ago"
  },
  {
    title: "Product Description",
    content: "Updated technical specs section with the latest features and performance metrics. Please review for accuracy and completeness.",
    lastEdit: "1 hour ago"
  },
  {
    title: "Social Media Posts",
    content: "Created 5 post variations for the upcoming product launch. Please vote on your favorite or suggest improvements to the messaging.",
    lastEdit: "3 hours ago"
  }
];

const RealTimeCollaboration = () => {
  return (
    <CollaborationProvider>
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
                  <UserList />
                  
                  <Button className="bg-sireiq-cyan text-sireiq-darker" size="sm">
                    <Users className="h-4 w-4 mr-1" /> Invite Team Member
                  </Button>
                </div>
                <div className="p-6">
                  <CollaborativeDocument 
                    title="Team Collaboration Document"
                    content={documentContent}
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Interactive collaboration section */}
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
              
              <CommentsSection />
            </div>
          </section>

          {/* Project documents section */}
          <section className="container mx-auto px-4 mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Current</span> Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectDocuments.map((doc, index) => (
                <CollaborativeDocument
                  key={index}
                  title={doc.title}
                  content={doc.content}
                  lastEdit={doc.lastEdit}
                />
              ))}
            </div>
          </section>
        </main>
        
        <CTASection />
        
        <Footer />
      </div>
    </CollaborationProvider>
  );
};

export default RealTimeCollaboration;
