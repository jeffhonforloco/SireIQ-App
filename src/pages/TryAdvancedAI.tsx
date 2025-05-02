
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, BrainCircuit, MessageSquare, Image as ImageIcon, FileText, Code, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TryAdvancedAI = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [aiMode, setAiMode] = useState('text');
  const [aiResult, setAiResult] = useState('');

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate content.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      
      const results = {
        text: "Our advanced neural networks have processed your request and generated this response. The content is tailored to your specific input and demonstrates the capabilities of multi-agent reasoning. Each sentence is carefully crafted to maintain coherence while delivering information that's relevant to your query.",
        image: "AI-generated image would appear here. SireIQ's image generation capabilities use advanced diffusion models to create highly detailed visualizations based on textual descriptions.",
        code: "function processUserInput(input) {\n  // Initialize the multi-agent system\n  const agents = initializeAgents(['reasoning', 'memory', 'creativity']);\n  \n  // Process the input through our neural network\n  const context = agents.reasoning.analyze(input);\n  const history = agents.memory.retrieve(context);\n  \n  // Generate creative response\n  return agents.creativity.generate(context, history);\n}"
      };
      
      setAiResult(results[aiMode]);
      
      toast({
        title: "Content generated!",
        description: "Your AI-generated content is ready to view.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Start Building with SireIQ | AI Tools for Modern Creators</title>
        <meta name="description" content="Get started with SireIQ and bring your ideas to life. Use intelligent workflows and AI-native tools to build faster, smarter digital experiences." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient glow">Try Advanced AI</span>
            </h1>
            <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
              Experience the power of SireIQ's multi-agent AI system. Generate text, images, or code with our cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* AI Input Panel */}
            <div className="lg:col-span-2 glass-effect rounded-xl p-6 border border-sireiq-accent/30">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <BrainCircuit className="mr-2 text-sireiq-cyan" />
                AI Parameters
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-sireiq-light/90">Select Generation Type</label>
                  <Tabs defaultValue="text" onValueChange={setAiMode} className="w-full">
                    <TabsList className="w-full grid grid-cols-3">
                      <TabsTrigger value="text" className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" /> Text
                      </TabsTrigger>
                      <TabsTrigger value="image" className="flex items-center">
                        <ImageIcon className="w-4 h-4 mr-2" /> Image
                      </TabsTrigger>
                      <TabsTrigger value="code" className="flex items-center">
                        <Code className="w-4 h-4 mr-2" /> Code
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <div>
                  <label className="block mb-2 text-sireiq-light/90">Model</label>
                  <Select defaultValue="advanced">
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert (Multi-agent)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block mb-2 text-sireiq-light/90">Your Prompt</label>
                  <Textarea 
                    placeholder="Enter your prompt here..." 
                    className="h-32"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={handleGenerate}
                  disabled={isLoading} 
                  className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" /> Generate Content
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {/* AI Output Panel */}
            <div className="lg:col-span-3 glass-effect rounded-xl p-6 border border-sireiq-accent/30">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <MessageSquare className="mr-2 text-sireiq-cyan" />
                AI Generated Result
              </h2>
              
              <div className="bg-sireiq-darker rounded-lg p-4 min-h-[300px] border border-sireiq-accent/20">
                {aiResult ? (
                  <div className="whitespace-pre-wrap">{aiResult}</div>
                ) : (
                  <div className="text-sireiq-light/50 h-full flex items-center justify-center text-center">
                    <p>Enter a prompt and click "Generate Content" to see AI-generated results here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Technology Explanation */}
          <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center text-gradient">
              How Our Advanced AI Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-sireiq-accent/20 rounded-full p-4 inline-flex mb-4">
                  <BrainCircuit className="h-8 w-8 text-sireiq-cyan" />
                </div>
                <h3 className="font-bold mb-2">Neural Processing</h3>
                <p className="text-sireiq-light/70">
                  State-of-the-art neural networks trained on diverse datasets analyze your inputs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-sireiq-accent/20 rounded-full p-4 inline-flex mb-4">
                  <MessageSquare className="h-8 w-8 text-sireiq-cyan" />
                </div>
                <h3 className="font-bold mb-2">Multi-Agent System</h3>
                <p className="text-sireiq-light/70">
                  Multiple specialized AI agents collaborate to generate comprehensive outputs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-sireiq-accent/20 rounded-full p-4 inline-flex mb-4">
                  <Sparkles className="h-8 w-8 text-sireiq-cyan" />
                </div>
                <h3 className="font-bold mb-2">Creative Enhancement</h3>
                <p className="text-sireiq-light/70">
                  Creative refinement algorithms polish the output for professional quality results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TryAdvancedAI;
