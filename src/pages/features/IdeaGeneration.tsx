
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Check } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const IdeaGeneration = () => {
  const [product, setProduct] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [ideas, setIdeas] = useState<{ title: string; description: string }[]>([]);
  const { toast } = useToast();
  
  const generateIdeas = async () => {
    if (!product.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a product or service to generate ideas.",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      // Generate ideas based on the product
      const generatedIdeas = generateCampaignIdeas(product);
      setIdeas(generatedIdeas);
      setIsGenerating(false);
      
      toast({
        title: "Ideas generated",
        description: `Generated ${generatedIdeas.length} campaign ideas for ${product}`,
      });
    }, 1500);
  };
  
  // Function to generate campaign ideas based on the product
  const generateCampaignIdeas = (productName: string): { title: string; description: string }[] => {
    const productLower = productName.toLowerCase();
    
    const ideasSet = [
      {
        fitness: [
          {
            title: "30 Days, New You Challenge",
            description: "A monthly program where users track improvements in key metrics, sharing progress with a supportive community."
          },
          {
            title: "Smart Sleep Revolution",
            description: "Campaign focusing on how the tracker's sleep metrics can transform users' rest quality and overall wellbeing."
          },
          {
            title: "Data-Driven Fitness Series",
            description: "Educational content showing how small, measured improvements lead to significant health outcomes over time."
          },
          {
            title: "Move More, Live Better",
            description: "Showcase real stories of users whose lives changed through consistent activity tracking and goal setting."
          }
        ],
        food: [
          {
            title: "Flavor Journey Challenge",
            description: "Weekly subscription introducing customers to new global flavors with accompanying cultural stories."
          },
          {
            title: "From Farm to Table Stories",
            description: "Campaign highlighting the journey of ingredients and the farmers behind your food."
          },
          {
            title: "Quick Gourmet at Home",
            description: "Series showing how your product transforms ordinary meals into extraordinary dining experiences in minutes."
          },
          {
            title: "Seasonal Celebrations",
            description: "Limited-time offerings that celebrate seasonal ingredients and traditions from around the world."
          }
        ],
        tech: [
          {
            title: "Life Simplified",
            description: "Show how your technology removes friction from everyday tasks, giving users back valuable time."
          },
          {
            title: "Future-Proof Your World",
            description: "Campaign demonstrating how your technology adapts and grows with users' changing needs over time."
          },
          {
            title: "Tech That Understands You",
            description: "Highlight personalization features that make users feel the product was designed specifically for them."
          },
          {
            title: "Connected Living Series",
            description: "Showcase how your product integrates seamlessly with other devices to create a complete ecosystem."
          }
        ],
        default: [
          {
            title: `${productName} Revolution`,
            description: `Campaign showcasing how ${productName} is changing the industry standards and improving customer experience.`
          },
          {
            title: `The ${productName} Experience`,
            description: `Immersive content series highlighting different ways ${productName} enhances users' daily lives.`
          },
          {
            title: `${productName} Community Spotlights`,
            description: `Feature real customer stories and creative ways they're using ${productName} to solve problems.`
          },
          {
            title: `Reimagining ${productName}`,
            description: `Forward-looking campaign about future innovations and the evolution of ${productName} in the market.`
          }
        ]
      }
    ][0];
    
    // Determine which category to use
    let categoryIdeas = ideasSet.default;
    
    if (productLower.includes('fitness') || productLower.includes('workout') || productLower.includes('exercise') || 
        productLower.includes('gym') || productLower.includes('wellness') || productLower.includes('tracker')) {
      categoryIdeas = ideasSet.fitness;
    } else if (productLower.includes('food') || productLower.includes('meal') || productLower.includes('recipe') || 
               productLower.includes('kitchen') || productLower.includes('cooking') || productLower.includes('dining')) {
      categoryIdeas = ideasSet.food;
    } else if (productLower.includes('tech') || productLower.includes('device') || productLower.includes('app') || 
               productLower.includes('software') || productLower.includes('digital') || productLower.includes('smart')) {
      categoryIdeas = ideasSet.tech;
    }
    
    return categoryIdeas;
  };

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
                <div className="flex gap-3 flex-col sm:flex-row">
                  <Input 
                    type="text" 
                    placeholder="e.g., Smart fitness tracker"
                    className="flex-1 bg-sireiq-darker border border-sireiq-accent/30 rounded-md px-4 py-2 text-sireiq-light"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && generateIdeas()}
                  />
                  <Button 
                    className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                    onClick={generateIdeas}
                    disabled={isGenerating}
                  >
                    {isGenerating ? 'Generating...' : 'Generate Ideas'}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                {ideas.length > 0 ? (
                  ideas.map((idea, index) => (
                    <div key={index} className="glass-effect rounded-lg p-4 border border-sireiq-accent/20 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <h4 className="font-bold text-sireiq-cyan mb-1">"{idea.title}"</h4>
                      <p className="text-sm text-sireiq-light/70">{idea.description}</p>
                    </div>
                  ))
                ) : (
                  // Default examples
                  <>
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
                  </>
                )}
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
              
              <Button 
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                onClick={() => {
                  // Scroll to top of the page to focus on the idea generator
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
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
