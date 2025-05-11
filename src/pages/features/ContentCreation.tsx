
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Feather, Check, Copy, Download } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const ContentCreation = () => {
  const [contentType, setContentType] = useState<'blog' | 'social' | 'marketing' | 'email'>('blog');
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  
  // Mock content templates for different types
  const contentTemplates = {
    blog: "# The Ultimate Guide to [Topic]\n\nIn today's fast-paced world, [topic] has become increasingly important. This comprehensive guide will explore the key aspects of [topic] and provide actionable insights for implementing effective strategies.\n\n## Understanding [Topic]\n\n[Topic] refers to the process of...",
    social: "✨ Exciting news! We've just launched our new [product/service] that will revolutionize how you [benefit]! 🚀\n\nCheck out the link in bio to learn more about how [product/service] can help you [achieve goal].\n\n#Innovation #NewLaunch #[Industry]",
    marketing: "Introducing [Product Name]: The Revolutionary Solution for [Pain Point]\n\nAre you tired of [common problem]? Our innovative [product] helps you [benefit] without the hassle of [pain point].\n\nJoin thousands of satisfied customers who have transformed their [area of life/business] with [Product Name].",
    email: "Subject: Exclusive Offer: Transform Your [Area] with [Product/Service]\n\nDear [Name],\n\nI hope this email finds you well. I wanted to personally reach out about our new [product/service] that I believe could significantly impact your [business area].\n\n[Product/Service] helps professionals like you to [benefit] while avoiding [pain point]."
  };
  
  const handleGenerateContent = () => {
    if (!prompt.trim()) {
      toast.error('Please enter a topic or brief first');
      return;
    }
    
    setGenerating(true);
    
    // Simulate AI content generation with a delay
    setTimeout(() => {
      const template = contentTemplates[contentType];
      const filledContent = template.replace(/\[topic\]/gi, prompt)
        .replace(/\[product\/service\]/gi, prompt)
        .replace(/\[product\]/gi, prompt)
        .replace(/\[Product Name\]/gi, prompt)
        .replace(/\[area of life\/business\]/gi, 'workflow')
        .replace(/\[benefit\]/gi, 'save time and increase productivity')
        .replace(/\[pain point\]/gi, 'manual processes')
        .replace(/\[common problem\]/gi, 'repetitive tasks')
        .replace(/\[Industry\]/gi, 'AI')
        .replace(/\[achieve goal\]/gi, 'streamline your workflow')
        .replace(/\[business area\]/gi, 'operations')
        .replace(/\[Area\]/gi, 'Business')
        .replace(/\[Name\]/gi, 'Valued Customer');
      
      setGeneratedContent(filledContent);
      setGenerating(false);
      toast.success('Content generated successfully!');
    }, 1500);
  };
  
  const handleCopyContent = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success('Content copied to clipboard');
  };
  
  const handleDownloadContent = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${contentType}-content.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Content downloaded');
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Content Creation | SireIQ</title>
        <meta name="description" content="Generate high-quality content for any purpose" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Feather className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Content</span> Creation
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Generate high-quality content for any purpose
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Content creation form */}
            <Card className="glass-effect border border-sireiq-accent/30 w-full lg:w-1/2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Create Content</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  <Button 
                    variant={contentType === 'blog' ? 'default' : 'outline'} 
                    onClick={() => setContentType('blog')}
                    className={contentType === 'blog' ? 'bg-sireiq-cyan text-sireiq-darker' : ''}
                  >
                    Blog
                  </Button>
                  <Button 
                    variant={contentType === 'social' ? 'default' : 'outline'} 
                    onClick={() => setContentType('social')}
                    className={contentType === 'social' ? 'bg-sireiq-cyan text-sireiq-darker' : ''}
                  >
                    Social
                  </Button>
                  <Button 
                    variant={contentType === 'marketing' ? 'default' : 'outline'} 
                    onClick={() => setContentType('marketing')}
                    className={contentType === 'marketing' ? 'bg-sireiq-cyan text-sireiq-darker' : ''}
                  >
                    Marketing
                  </Button>
                  <Button 
                    variant={contentType === 'email' ? 'default' : 'outline'} 
                    onClick={() => setContentType('email')}
                    className={contentType === 'email' ? 'bg-sireiq-cyan text-sireiq-darker' : ''}
                  >
                    Email
                  </Button>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="topic" className="block text-sm font-medium mb-2">
                    {contentType === 'blog' ? 'Topic:' : 
                     contentType === 'social' ? 'Product or Announcement:' : 
                     contentType === 'marketing' ? 'Product Name:' : 'Service or Offering:'}
                  </label>
                  <Input 
                    id="topic"
                    placeholder={`Enter ${contentType === 'blog' ? 'blog topic' : 
                                   contentType === 'social' ? 'product or announcement' : 
                                   contentType === 'marketing' ? 'product name' : 'service name'}`} 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-sireiq-darker border-sireiq-accent/50"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="additional-info" className="block text-sm font-medium mb-2">
                    Additional Information (optional):
                  </label>
                  <Textarea 
                    id="additional-info"
                    placeholder="Enter any additional details you want included in your content..." 
                    rows={4}
                    className="bg-sireiq-darker border-sireiq-accent/50"
                  />
                </div>
                
                <Button 
                  onClick={handleGenerateContent}
                  disabled={generating || !prompt.trim()}
                  className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 transition-opacity"
                >
                  {generating ? 'Generating...' : 'Generate Content'} 
                  {!generating && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
            
            {/* Generated content */}
            <Card className="glass-effect border border-sireiq-accent/30 w-full lg:w-1/2">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Generated Content</h2>
                  {generatedContent && (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleCopyContent}
                        className="flex items-center gap-1"
                      >
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleDownloadContent}
                        className="flex items-center gap-1"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="min-h-[400px] bg-sireiq-darker rounded-md p-4 border border-sireiq-accent/20 whitespace-pre-wrap overflow-auto">
                  {generatedContent ? generatedContent : (
                    <div className="text-sireiq-light/50 h-full flex flex-col items-center justify-center">
                      <p className="mb-2">No content generated yet</p>
                      <p className="text-sm">Select content type and enter a topic to get started</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Content Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Blog Articles
              </h3>
              <p className="text-sireiq-light/70">
                Generate comprehensive, well-researched blog articles that engage readers and establish your authority in your industry.
              </p>
            </div>
            
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Social Media Posts
              </h3>
              <p className="text-sireiq-light/70">
                Create platform-specific social media content that drives engagement and builds community around your brand.
              </p>
            </div>
            
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Marketing Copy
              </h3>
              <p className="text-sireiq-light/70">
                Craft persuasive marketing materials that highlight your unique selling points and convert prospects into customers.
              </p>
            </div>
            
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Email Newsletters
              </h3>
              <p className="text-sireiq-light/70">
                Develop engaging email content that nurtures relationships with subscribers and drives meaningful actions.
              </p>
            </div>
          </div>
        </section>
        
        {/* How it works section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="glass-effect rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 border border-sireiq-accent/30 text-sireiq-cyan">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Content Type</h3>
              <p className="text-sireiq-light/70">
                Choose the type of content you need from our wide range of options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="glass-effect rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 border border-sireiq-accent/30 text-sireiq-cyan">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Provide Details</h3>
              <p className="text-sireiq-light/70">
                Enter your topic, target audience, and any specific requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="glass-effect rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 border border-sireiq-accent/30 text-sireiq-cyan">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Quality Content</h3>
              <p className="text-sireiq-light/70">
                Our AI generates high-quality, engaging content tailored to your needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default ContentCreation;
