
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Rocket, ArrowRight, MessageSquare, Brain, Zap, Target } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';
import NewChatButton from '@/components/chat/NewChatButton';
import AICapabilityCard from '@/components/ai-assistant/AICapabilityCard';
import InteractiveDemo from '@/components/ai-assistant/InteractiveDemo';
import UseCasesSection from '@/components/ai-assistant/UseCasesSection';
import { useNavigate } from 'react-router-dom';

const AIAssistant = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: Brain,
      title: "Advanced Reasoning",
      description: "Complex problem-solving and analytical thinking capabilities",
      features: [
        "Multi-step reasoning",
        "Contextual understanding",
        "Logical analysis",
        "Pattern recognition"
      ],
      onTryNow: () => navigate('/chat')
    },
    {
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Human-like dialogue with memory and context retention",
      features: [
        "Context awareness",
        "Memory retention",
        "Conversational flow",
        "Personality adaptation"
      ],
      onTryNow: () => navigate('/chat')
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Real-time responses with lightning-fast processing speed",
      features: [
        "Sub-second responses",
        "Parallel processing",
        "Optimized algorithms",
        "Scalable architecture"
      ],
      onTryNow: () => navigate('/chat')
    },
    {
      icon: Target,
      title: "Task Specialization",
      description: "Specialized agents for specific domains and use cases",
      features: [
        "Domain expertise",
        "Task optimization",
        "Custom workflows",
        "Intelligent routing"
      ],
      onTryNow: () => navigate('/agents')
    }
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>AI Assistant | SireIQ</title>
        <meta name="description" content="Your personal AI assistant powered by SireIQ, ready to help with any task." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20 relative">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <PageHeader 
            title="AI Assistant"
            subtitle="Your personal AI assistant is here to help you with any task, from answering questions to completing complex workflows."
            icon={<Rocket className="h-8 w-8 text-sireiq-cyan" />}
          />
          
          <div className="flex justify-center mb-12">
            <InteractiveDemo />
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-8 py-3 h-auto text-lg font-semibold"
            >
              Start Chatting Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        
        {/* AI Capabilities section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Advanced AI</span> Capabilities
            </h2>
            <p className="text-xl text-sireiq-light/70 max-w-3xl mx-auto">
              Experience the power of next-generation AI with our comprehensive suite of intelligent features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <AICapabilityCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                features={capability.features}
                onTryNow={capability.onTryNow}
              />
            ))}
          </div>
        </section>

        {/* Use Cases section */}
        <UseCasesSection />
        
        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How SireIQ's AI Assistant Can Help You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Content Creation",
                  description: "Generate articles, social media posts, and marketing copy tailored to your brand voice."
                },
                {
                  title: "Data Analysis",
                  description: "Process and interpret complex data sets to extract valuable insights and trends."
                },
                {
                  title: "Task Automation",
                  description: "Automate repetitive tasks and workflows to save time and increase productivity."
                },
                {
                  title: "Research Assistant",
                  description: "Find, compile, and summarize information on any topic from reliable sources."
                },
                {
                  title: "Brainstorming Partner",
                  description: "Generate creative ideas and solutions for any challenge or project."
                },
                {
                  title: "24/7 Support",
                  description: "Get help whenever you need it with our always-available AI assistant."
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sireiq-light/70">{feature.description}</p>
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

export default AIAssistant;
