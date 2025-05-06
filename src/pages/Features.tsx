import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Rocket, BarChart4, BookOpen, Code, Image, LayoutDashboard, Lightbulb, MessagesSquare, Search } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
// Add this import
import { Mic } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Features | SireIQ</title>
        <meta name="description" content="Explore the powerful AI features offered by SireIQ to enhance your business and creativity." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful <span className="text-gradient glow">AI Features</span> for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Explore our full suite of AI-powered tools and features designed to transform your workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card: Idea Generation */}
            <Link to="/features/idea-generation" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <Lightbulb className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Idea Generation</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Overcome creative blocks with AI-assisted brainstorming that sparks innovative concepts.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: Personality Engine */}
            <Link to="/features/personality-engine" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <MessagesSquare className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Personality Engine</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Create content with consistent tone, style, and voice that reflects your brand's unique personality.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: SEO Analyzer */}
            <Link to="/features/seo-analyzer" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <Search className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">SEO Analyzer</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Optimize your content for search engines with AI-driven insights and recommendations.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: Content Summarizer */}
            <Link to="/features/content-summarizer" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <BookOpen className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Content Summarizer</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Quickly condense lengthy articles and documents into concise summaries for efficient information consumption.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: Code Generator */}
            <Link to="/features/code-generator" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <Code className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Code Generator</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Automate code creation with AI that understands your specifications and generates clean, functional code.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: Image Enhancer */}
            <Link to="/features/image-enhancer" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <Image className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Image Enhancer</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Improve the quality of your images with AI-powered enhancement tools that sharpen details and reduce noise.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: AI Assistant */}
            <Link to="/features/ai-assistant" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <Rocket className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">AI Assistant</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Your personal AI assistant is here to help you with any task.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: Data Analysis */}
            <Link to="/features/data-analysis" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <BarChart4 className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Data Analysis</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Analyze your data with AI-powered insights and recommendations.
                </p>
              </div>
            </Link>
            
            {/* Feature Card: Dashboard */}
            <Link to="/dashboard" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <LayoutDashboard className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Dashboard</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Track your progress and manage your AI-powered tools.
                </p>
              </div>
            </Link>
            
            {/* Add Voice Assistant feature card */}
            <Link to="/features/voice-assistant" className="group">
              <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
                <div className="flex items-center mb-4">
                  <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
                    <Mic className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold">Voice Assistant</h3>
                </div>
                <p className="text-sireiq-light/70">
                  Interact naturally with SireIQ through voice commands. Ask questions, get insights, and accomplish tasks using just your voice.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Features;
