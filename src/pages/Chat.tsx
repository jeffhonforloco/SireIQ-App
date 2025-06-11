
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageSquare } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import HomeChatExperience from '@/components/chat/HomeChatExperience';

const Chat = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>AI Chat | SireIQ</title>
        <meta name="description" content="Chat with SireIQ's advanced AI assistant for all your needs." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-sireiq-cyan/20 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-sireiq-cyan" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Chat with <span className="text-gradient">SireIQ</span>
            </h1>
            <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
              Experience the power of advanced AI conversation. Ask questions, get help, or explore ideas.
            </p>
          </div>
          
          <HomeChatExperience />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
