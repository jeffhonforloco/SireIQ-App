
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Check, Sparkles, Copy, FileText } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AIPoweredCreation = () => {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<'product' | 'blog' | 'social'>('product');
  const [tone, setTone] = useState<'professional' | 'casual' | 'enthusiastic'>('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const { toast } = useToast();

  // Sample content examples based on content type and tone
  const contentExamples = {
    product: {
      professional: "The XPS7200 Smart Fitness Watch combines cutting-edge health monitoring technology with sleek, professional design. Featuring 24/7 heart rate monitoring, blood oxygen tracking, and advanced sleep analysis, this premium device delivers actionable insights to optimize your wellness journey. The aerospace-grade aluminum casing houses a vibrant AMOLED display protected by Gorilla Glass, ensuring durability without compromising on style. With 7-day battery life and seamless integration with all major fitness platforms, the XPS7200 represents the pinnacle of modern health technology.",
      casual: "Meet the XPS7200 Smart Fitness Watch – your new favorite workout buddy! This awesome little gadget tracks everything from your heart rate to how well you're sleeping, all while looking pretty darn good on your wrist. The screen is super bright and easy to read, even when you're out running in the sunshine. The battery lasts a full week (for real!), and it works with all your favorite fitness apps. Plus, it's tough enough to handle whatever your active lifestyle throws at it. Ready to level up your fitness game?",
      enthusiastic: "WOW! The incredible XPS7200 Smart Fitness Watch is about to REVOLUTIONIZE your fitness journey! This AMAZING device doesn't just track your heart rate—it provides a COMPLETE health ecosystem right on your wrist! The STUNNING display delivers crystal-clear metrics that will TRANSFORM how you view your workout data! With INCREDIBLE 7-day battery life and SEAMLESS app connections, you'll NEVER want to take it off! The XPS7200 isn't just a fitness tracker—it's your passport to the BEST version of yourself! Get ready for AMAZING results!"
    },
    blog: {
      professional: "Optimizing Productivity in Remote Work Environments\n\nThe transition to remote work has permanently altered the professional landscape. Organizations seeking to maximize team efficiency must implement structured frameworks that balance autonomy with accountability. This article explores evidence-based strategies that enhance distributed team productivity while maintaining organizational cohesion.\n\nResearch indicates that establishing clear communication protocols significantly reduces friction in remote collaboration. Rather than relying on ad-hoc messaging, successful remote teams implement tiered communication systems that distinguish between urgent matters requiring immediate attention and routine updates that can be addressed asynchronously.",
      casual: "Making Remote Work Actually Work For You\n\nLet's face it – remote work can be awesome (hello, pajama pants!) but it definitely comes with its own set of challenges. If you're finding yourself distracted by the laundry pile or that Netflix show you've been meaning to binge, you're not alone!\n\nI've been working remotely for years now, and I've picked up some pretty helpful tricks along the way. The biggest game-changer? Having a communication game plan with your team. Nothing's worse than Slack messages blowing up your phone at dinner time because nobody knows when they should expect responses.",
      enthusiastic: "TRANSFORM Your Remote Work Experience with These INCREDIBLE Productivity Hacks!\n\nRemote work is your GOLDEN TICKET to the work-life balance you've ALWAYS dreamed of – but only if you know the SECRETS to staying productive! I'm THRILLED to share these GAME-CHANGING strategies that have COMPLETELY REVOLUTIONIZED how I work from home!\n\nFirst, communication is ABSOLUTELY ESSENTIAL! Creating AMAZING communication routines with your team will INSTANTLY boost your productivity! When everyone knows EXACTLY when to expect responses, your workflow will become SEAMLESSLY efficient!"
    },
    social: {
      professional: "Introducing our latest precision-engineered solution for enterprise data management. The DataStream Platform offers unparalleled integration capabilities while maintaining rigorous security protocols. Learn more about how forward-thinking organizations are implementing this technology: [Link]",
      casual: "Just dropped! Our new DataStream tool makes handling all your data stuff way easier. No more switching between different apps or losing important files. Check out the link to see how it works! [Link]",
      enthusiastic: "🚨 GAME-CHANGER ALERT! 🚨 Our REVOLUTIONARY DataStream Platform just launched and it's going to TRANSFORM how you handle data FOREVER! 🔥 This INCREDIBLE tool brings ALL your information together in ONE AMAZING place! Click the link to see the MAGIC happen! ✨ [Link]"
    }
  };

  const generateContent = () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate content.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    setTimeout(() => {
      // Get the appropriate example based on content type and tone
      const generatedExample = contentExamples[contentType][tone];
      
      // Add some contextual customization based on the prompt
      let customizedContent = generatedExample;
      
      if (prompt.toLowerCase().includes('sustainable') || prompt.toLowerCase().includes('eco')) {
        customizedContent = customizedContent.replace(
          /smart|premium|revolutionary/gi, 
          match => ['sustainable', 'eco-friendly', 'green'][Math.floor(Math.random() * 3)]
        );
      }
      
      if (prompt.toLowerCase().includes('affordable') || prompt.toLowerCase().includes('budget')) {
        customizedContent = customizedContent.replace(
          /premium|luxury|advanced/gi, 
          match => ['affordable', 'cost-effective', 'budget-friendly'][Math.floor(Math.random() * 3)]
        );
      }
      
      setGeneratedContent(customizedContent);
      setIsGenerating(false);
      
      toast({
        title: "Content generated",
        description: "Your AI-generated content is ready!",
      });
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied to clipboard",
      description: "Content has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>AI-Powered Creation | SireIQ</title>
        <meta name="description" content="Leverage advanced neural networks to generate creative content that's indistinguishable from human-made work." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <BrainCircuit className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">AI-Powered</span> Creation
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Leverage advanced neural networks to generate creative content that's indistinguishable from human-made work.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sireiq-cyan/20 to-sireiq-accent/10"></div>
              <img 
                src="/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png" 
                alt="AI Content Generation" 
                className="w-full h-full object-cover opacity-70" 
              />
            </div>
          </div>
        </section>
        
        {/* Content Generator */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Sparkles className="h-6 w-6 text-sireiq-cyan mr-2" />
              AI Content Generator
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Content Type</label>
                  <Select value={contentType} onValueChange={(value: 'product' | 'blog' | 'social') => setContentType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product Description</SelectItem>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="social">Social Media Post</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium">Tone</label>
                  <Select value={tone} onValueChange={(value: 'professional' | 'casual' | 'enthusiastic') => setTone(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Your Prompt</label>
                <Textarea 
                  placeholder="Describe what you want to generate, e.g., 'Write a product description for a smart fitness watch'"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="h-24"
                />
              </div>
              
              <Button 
                onClick={generateContent}
                disabled={isGenerating} 
                className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-sireiq-darker" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Content...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <BrainCircuit className="mr-2 h-5 w-5" /> Generate Content
                  </span>
                )}
              </Button>
              
              {generatedContent && (
                <div className="mt-8 space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium flex items-center">
                      <FileText className="h-5 w-5 text-sireiq-cyan mr-2" />
                      Generated Content
                    </h3>
                    <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center">
                      <Copy className="h-4 w-4 mr-1" /> Copy
                    </Button>
                  </div>
                  
                  <div className="bg-sireiq-darker/50 border border-sireiq-accent/20 rounded-lg p-4 whitespace-pre-wrap">
                    {generatedContent}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Content Features */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Next Generation</span> Content Creation
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Our AI-powered creation tools use advanced machine learning models to understand your brand, your audience, and your goals. The result? Content that's not just coherent, but compelling and conversion-focused.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Generate long-form content in seconds", 
                  "Adapt to your brand voice automatically", 
                  "Multi-modal creation across text, images, and more", 
                  "Context-aware content that understands your business"
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
                  // Scroll to the AI content generator
                  document.querySelector('h2')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Try Advanced AI <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-4">Real-time Content Preview</h3>
              
              <div className="space-y-4">
                <div className="bg-sireiq-darker rounded-lg p-4">
                  <p className="text-sm font-medium text-sireiq-light/50 mb-2">Generating product description for</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-sireiq-accent/30 rounded-md flex items-center justify-center mr-3">
                      <BrainCircuit className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <p className="text-sireiq-light/80 font-medium">Smart Water Bottle</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-1">
                    <span className="block w-2 h-2 bg-sireiq-cyan rounded-full animate-pulse"></span>
                    <span className="block w-2 h-2 bg-sireiq-cyan rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                    <span className="block w-2 h-2 bg-sireiq-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
                
                <div className="bg-sireiq-darker/50 border border-sireiq-accent/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-sireiq-light/50 mb-2">AI Generated Output</p>
                  <p className="text-sireiq-light/80">
                    <span className="text-sireiq-cyan">HydroSync:</span> Where intelligence meets hydration. This sleek, minimalist bottle doesn't just hold water—it transforms your drinking experience with temperature-sensing technology that keeps your beverage at the perfect temperature for up to 24 hours. The subtle glow at the base reminds you when it's time to hydrate, while the companion app tracks your intake and adjusts recommendations based on your activity level and local weather conditions. With HydroSync, staying hydrated isn't just healthy—it's effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">AI Creation</span> Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Content Marketing",
                description: "Generate blog posts, social media content, and email campaigns that engage your audience and drive conversions."
              },
              {
                title: "Product Descriptions",
                description: "Create compelling product descriptions that highlight benefits and features while maintaining brand voice."
              },
              {
                title: "Creative Briefs",
                description: "Develop comprehensive creative briefs that align teams around project goals, audience, and deliverables."
              }
            ].map((useCase, index) => (
              <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 hover:border-sireiq-accent/40 transition-colors">
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-sireiq-light/70">{useCase.description}</p>
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

export default AIPoweredCreation;
