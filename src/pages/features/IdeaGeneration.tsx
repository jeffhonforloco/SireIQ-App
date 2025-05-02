
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Check } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const IdeaGeneration = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Idea Generation | SireIQ</title>
        <meta name="description" content="Overcome creative blocks with AI-assisted brainstorming that sparks innovative concepts." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Lightbulb className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Idea</span> Generation
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Overcome creative blocks with AI-assisted brainstorming that sparks innovative concepts.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="glass-effect rounded-2xl p-8 max-w-4xl w-full border border-sireiq-accent/30">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Campaign Idea Generator</h3>
                <p className="text-sireiq-light/70 mb-4">Enter your product or service to generate campaign ideas</p>
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    placeholder="e.g., Smart fitness tracker"
                    className="flex-1 bg-sireiq-darker border border-sireiq-accent/30 rounded-md px-4 py-2 text-sireiq-light"
                  />
                  <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                    Generate Ideas
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-4 border border-sireiq-accent/20">
                  <h4 className="font-bold text-sireiq-cyan mb-1">"30 Days, New You" Challenge</h4>
                  <p className="text-sm text-sireiq-light/70">A monthly program where users track improvements in key metrics, sharing progress with a supportive community.</p>
                </div>
                
                <div className="glass-effect rounded-lg p-4 border border-sireiq-accent/20">
                  <h4 className="font-bold text-sireiq-cyan mb-1">"Smart Sleep Revolution"</h4>
                  <p className="text-sm text-sireiq-light/70">Campaign focusing on how the tracker's sleep metrics can transform users' rest quality and overall wellbeing.</p>
                </div>
                
                <div className="glass-effect rounded-lg p-4 border border-sireiq-accent/20">
                  <h4 className="font-bold text-sireiq-cyan mb-1">"Data-Driven Fitness" Series</h4>
                  <p className="text-sm text-sireiq-light/70">Educational content showing how small, measured improvements lead to significant health outcomes over time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-4">Idea Web</h3>
              <div className="aspect-square bg-sireiq-darker rounded-lg flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sireiq-cyan/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-sireiq-cyan">Main Concept</span>
                  </div>
                  
                  {[
                    { top: '15%', left: '25%', label: 'Idea 1' },
                    { top: '75%', left: '30%', label: 'Idea 2' },
                    { top: '60%', left: '70%', label: 'Idea 3' },
                    { top: '25%', left: '80%', label: 'Idea 4' },
                    { top: '40%', left: '50%', label: 'Idea 5' },
                  ].map((node, index) => (
                    <React.Fragment key={index}>
                      <div className="absolute w-16 h-16 bg-sireiq-accent/30 rounded-full flex items-center justify-center" style={{ top: node.top, left: node.left }}>
                        <span className="text-sm">{node.label}</span>
                      </div>
                      <div className="absolute border-t border-sireiq-cyan/30 w-16" style={{ 
                        top: `calc(${node.top} + 8px)`, 
                        left: `calc(${node.left} + 8px)`, 
                        width: '60px',
                        transform: `rotate(${45 * index}deg)`,
                        transformOrigin: '0 0'
                      }}></div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Spark Creativity</span> On Demand
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Never face a creative block again. Our AI idea generation tools help you brainstorm concepts, develop new angles, and expand your thinking—all tailored to your brand's unique needs and market position.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Generate dozens of ideas in seconds", 
                  "Explore conceptual relationships with idea mapping", 
                  "Filter suggestions by relevance and originality", 
                  "Save and organize ideas for future reference"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-sireiq-cyan mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Try Idea Generation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Ideation</span> Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Campaign Concepts",
              "Product Names",
              "Content Themes",
              "Blog Topics",
              "Social Media Posts",
              "Email Subject Lines",
              "Video Scripts",
              "Brand Storytelling"
            ].map((useCase, index) => (
              <div key={index} className="glass-effect rounded-lg p-4 border border-sireiq-accent/20 text-center">
                <span className="text-sireiq-light font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default IdeaGeneration;
