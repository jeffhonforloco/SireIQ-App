
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Copy, Music3, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useRole } from '@/contexts/RoleContext';
import { useNavigate } from 'react-router-dom';

const NeuralComposer = () => {
  const navigate = useNavigate();
  const { role } = useRole();
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('neutral');
  const [contentType, setContentType] = useState('story');
  const [length, setLength] = useState(50);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [creativityLevel, setCreativityLevel] = useState(70);
  
  // Demo content for different types and tones
  const generateContent = () => {
    if (!prompt) {
      toast.error("Please enter a prompt to generate content");
      return;
    }
    
    setIsGenerating(true);
    
    // Mock API call
    setTimeout(() => {
      let tonedContent = '';
      
      // Base content based on content type
      switch (contentType) {
        case 'story':
          tonedContent = `The sun was setting as ${prompt} appeared on the horizon. It was a sight that would change everything.`;
          if (creativityLevel > 70) {
            tonedContent += '\n\nBut what no one knew was that this was just the beginning of something far greater than any of them could have imagined.';
          }
          break;
        case 'poem':
          tonedContent = `Whispers of ${prompt}\nDancing through the evening air\nMemories remain`;
          break;
        case 'song':
          tonedContent = `Verse 1:\nLooking back at all the times\nWhen ${prompt} was all I knew\n\nChorus:\nBut now I see clearly\nWhat was meant to be\nThe path before me`;
          break;
        case 'script':
          tonedContent = `FADE IN:\n\nEXT. CITYSCAPE - SUNSET\n\nThe city bustles below as we focus on ${prompt}. This moment feels suspended in time.`;
          break;
        default:
          tonedContent = `Exploring the fascinating world of ${prompt} reveals unexpected connections and insights.`;
      }
      
      // Add tonal adjustments
      switch (tone) {
        case 'formal':
          tonedContent += '\n\nIt is imperative to consider the implications of such developments in our contemporary discourse.';
          break;
        case 'casual':
          tonedContent += "\n\nAnyway, that's just how it goes sometimes. Cool, right?";
          break;
        case 'humorous':
          tonedContent += "\n\nOf course, that's when the universe decided to add a punchline. Timing is everything!";
          break;
        case 'poetic':
          tonedContent += '\n\nLike whispers on the wind, these moments cascade through the fabric of existence, ephemeral yet eternal.';
          break;
        case 'dramatic':
          tonedContent += '\n\nIn that moment, everything changed. The world would never be the same again.';
          break;
      }
      
      setGeneratedContent(tonedContent);
      setIsGenerating(false);
      toast.success("Content generated successfully!");
    }, 1500);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Neural Composer | SireIQ</title>
        <meta name="description" content="Create amazing content with SireIQ's Neural Composer" />
      </Helmet>
      
      <Navbar />
      
      <main className="container max-w-6xl mx-auto pt-32 pb-20 px-4">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4 text-gradient glow">Neural Composer</h1>
          <p className="text-xl text-sireiq-light/70 max-w-3xl mx-auto">
            Transform your ideas into beautifully crafted content using our advanced AI composer
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-sireiq-darker border-sireiq-accent/20">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="prompt" className="block text-sm font-medium mb-2">Your Inspiration</label>
                    <Textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Enter your idea, theme, or concept..."
                      className="bg-sireiq-dark resize-none h-32"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Content Type</label>
                    <Select value={contentType} onValueChange={setContentType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Content Type</SelectLabel>
                          <SelectItem value="story">Short Story</SelectItem>
                          <SelectItem value="poem">Poem</SelectItem>
                          <SelectItem value="song">Song Lyrics</SelectItem>
                          <SelectItem value="script">Script</SelectItem>
                          <SelectItem value="article">Article</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Tone</label>
                    <Tabs defaultValue="neutral" value={tone} onValueChange={setTone} className="w-full">
                      <TabsList className="grid grid-cols-5 mb-2">
                        <TabsTrigger value="neutral">Neutral</TabsTrigger>
                        <TabsTrigger value="formal">Formal</TabsTrigger>
                        <TabsTrigger value="casual">Casual</TabsTrigger>
                        <TabsTrigger value="humorous">Humorous</TabsTrigger>
                        <TabsTrigger value="dramatic">Dramatic</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Creativity Level: {creativityLevel}%
                    </label>
                    <Slider 
                      value={[creativityLevel]} 
                      onValueChange={(values) => setCreativityLevel(values[0])} 
                      min={0} 
                      max={100} 
                      step={10}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-sireiq-light/50">
                      <span>Conservative</span>
                      <span>Experimental</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={generateContent} 
                    disabled={!prompt || isGenerating}
                    className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Music3 className="mr-2 h-4 w-4" />
                        Compose Content
                      </>
                    )}
                  </Button>
                  
                  {!role && (
                    <p className="text-xs text-center text-sireiq-light/50 mt-2">
                      <span 
                        className="text-sireiq-cyan cursor-pointer hover:underline"
                        onClick={() => navigate('/get-started')}
                      >
                        Create an account
                      </span> for advanced features
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="h-full bg-sireiq-darker border-sireiq-accent/20">
              <CardContent className="p-6">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-sireiq-cyan" />
                    Generated Composition
                  </h3>
                  {generatedContent && (
                    <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  )}
                </div>
                
                {generatedContent ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-sireiq-dark rounded-md p-6 min-h-[300px] whitespace-pre-line"
                  >
                    {generatedContent}
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[300px] bg-sireiq-dark/50 rounded-md text-sireiq-light/30">
                    <Music3 className="h-16 w-16 mb-4" />
                    <p>Your composition will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Feature callout */}
        <div className="mt-20 bg-sireiq-accent/10 rounded-lg p-8 border border-sireiq-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Unlock Premium Capabilities</h2>
              <p className="text-sireiq-light/70 mb-6">
                Upgrade to Developer or Enterprise plans for advanced features like custom model fine-tuning, 
                longer content generation, and specialized composition styles.
              </p>
              <Button 
                onClick={() => navigate('/pricing')} 
                className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
              >
                View Pricing
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sireiq-dark/50 rounded-lg p-4 border border-sireiq-accent/20">
                <h3 className="font-medium mb-2">Content Length</h3>
                <p className="text-sm text-sireiq-light/60">Generate up to 10x longer content with premium plans</p>
              </div>
              <div className="bg-sireiq-dark/50 rounded-lg p-4 border border-sireiq-accent/20">
                <h3 className="font-medium mb-2">Advanced Styles</h3>
                <p className="text-sm text-sireiq-light/60">Access professional writing styles and specialized formats</p>
              </div>
              <div className="bg-sireiq-dark/50 rounded-lg p-4 border border-sireiq-accent/20">
                <h3 className="font-medium mb-2">Bulk Generation</h3>
                <p className="text-sm text-sireiq-light/60">Create multiple pieces of content in one session</p>
              </div>
              <div className="bg-sireiq-dark/50 rounded-lg p-4 border border-sireiq-accent/20">
                <h3 className="font-medium mb-2">Export Options</h3>
                <p className="text-sm text-sireiq-light/60">Save as PDF, DOCX, or markdown formats</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NeuralComposer;
