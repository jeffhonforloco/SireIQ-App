import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, Check, Copy, Scissors } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import PageHeader from '@/components/trust/PageHeader';

const ContentSummarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summarizedContent, setSummarizedContent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewContent, setPreviewContent] = useState('');
  const { toast } = useToast();

  const summarizeContent = () => {
    if (!inputText.trim()) {
      toast({
        title: "Empty content",
        description: "Please enter some content to summarize.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setPreviewContent(''); // Clear preview content first
    
    // Show typing animation in preview while generating
    let typingIndex = 0;
    const typingText = "Summarizing content";
    const typingInterval = setInterval(() => {
      typingIndex = (typingIndex + 1) % (typingText.length + 4);
      const dots = ".".repeat(Math.min(typingIndex, 3));
      setPreviewContent(`${typingText}${dots}`);
    }, 300);
    
    // Simulate AI summarization with a delay
    setTimeout(() => {
      clearInterval(typingInterval);
      
      // Create a summary based on input length
      let summary = '';
      
      if (inputText.length > 500) {
        // Extract key sentences for longer content
        const sentences = inputText.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const selectedSentences = sentences.length > 5 
          ? [sentences[0], sentences[Math.floor(sentences.length/3)], sentences[Math.floor(2*sentences.length/3)]]
          : sentences.slice(0, Math.min(3, sentences.length));
        
        summary = selectedSentences.join('. ') + '.';
      } else {
        // For shorter content, shorten while keeping key points
        const words = inputText.split(/\s+/);
        summary = words.slice(0, Math.ceil(words.length * 0.6)).join(' ');
      }
      
      // Further polish the summary
      summary = summary
        .replace(/\s+/g, ' ')
        .trim();
      
      // Real-time summary preview effect - show text appearing letter by letter
      let displayIndex = 0;
      setPreviewContent('');
      
      const previewInterval = setInterval(() => {
        if (displayIndex <= summary.length) {
          setPreviewContent(summary.substring(0, displayIndex));
          displayIndex += 5; // Show 5 characters at a time for faster display
        } else {
          clearInterval(previewInterval);
          setSummarizedContent(summary);
          setIsProcessing(false);
          toast({
            title: "Summary created",
            description: "Your content summary is ready!",
          });
        }
      }, 30);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summarizedContent);
    toast({
      title: "Copied to clipboard",
      description: "Summary has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Content Summarizer | SireIQ</title>
        <meta name="description" content="Transform lengthy content into concise summaries with SireIQ's advanced AI content summarization tool." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <PageHeader 
            title="Content Summarizer"
            subtitle="Transform lengthy content into concise summaries that retain essential information and key points."
            icon={<Scissors className="h-8 w-8 text-sireiq-cyan" />}
          />
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sireiq-cyan/20 to-sireiq-accent/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-lg bg-sireiq-darker/80 backdrop-blur-sm p-4 rounded-lg mb-6">
                    <div className="h-3 w-full bg-sireiq-accent/30 rounded-full mb-2"></div>
                    <div className="h-3 w-5/6 bg-sireiq-accent/30 rounded-full mb-2"></div>
                    <div className="h-3 w-4/6 bg-sireiq-accent/30 rounded-full"></div>
                  </div>
                  
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Scissors className="h-10 w-10 text-sireiq-cyan animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="w-full max-w-md bg-sireiq-darker/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="h-3 w-2/3 bg-sireiq-cyan/50 rounded-full mb-2"></div>
                    <div className="h-3 w-1/2 bg-sireiq-cyan/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Summarizer Tool */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Scissors className="h-6 w-6 text-sireiq-cyan mr-2" />
              Content Summarizer
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Paste your content</label>
                <Textarea 
                  placeholder="Paste the content you want to summarize here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="h-48 resize-none"
                />
              </div>
              
              <Button 
                onClick={summarizeContent}
                disabled={isProcessing} 
                className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-sireiq-darker" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Summarizing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Scissors className="mr-2 h-5 w-5" /> Summarize Content
                  </span>
                )}
              </Button>
              
              {/* Summary preview */}
              {(previewContent || summarizedContent) && (
                <div className="mt-8 space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium flex items-center">
                      <FileText className="h-5 w-5 text-sireiq-cyan mr-2" />
                      {isProcessing ? "Generating Summary..." : "Summarized Content"}
                    </h3>
                    {summarizedContent && !isProcessing && (
                      <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center">
                        <Copy className="h-4 w-4 mr-1" /> Copy
                      </Button>
                    )}
                  </div>
                  
                  <div className="bg-sireiq-darker/50 border border-sireiq-accent/20 rounded-lg p-4 whitespace-pre-wrap min-h-[100px]">
                    {isProcessing ? previewContent : summarizedContent}
                    {isProcessing && <span className="animate-pulse">|</span>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Features and Benefits */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Key Benefits</span> of Content Summarization
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Our AI content summarizer helps you distill lengthy documents into concise, informative summaries. Save time and improve comprehension without losing key information.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Extract essential information from long documents",
                  "Create executive summaries for reports and research",
                  "Generate concise meeting notes from transcripts",
                  "Maintain the core message while reducing length by up to 80%"
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
                  // Scroll to the summarizer tool
                  document.querySelector('h2')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Try Summarizer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="text-xl font-bold mb-4">Use Cases</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Research Efficiency",
                    description: "Quickly extract key findings from academic papers and research reports without reading the entire document."
                  },
                  {
                    title: "Content Creation",
                    description: "Generate article summaries for newsletters, content previews, or executive briefings."
                  },
                  {
                    title: "Information Management",
                    description: "Create concise summaries of meetings, presentations, or lengthy correspondence for easy reference."
                  },
                  {
                    title: "Learning Enhancement",
                    description: "Summarize complex educational material to improve comprehension and retention."
                  }
                ].map((useCase, index) => (
                  <div key={index} className="bg-sireiq-darker/50 p-4 rounded-lg border border-sireiq-accent/20">
                    <h4 className="font-medium text-sireiq-cyan mb-1">{useCase.title}</h4>
                    <p className="text-sm text-sireiq-light/70">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default ContentSummarizer;
