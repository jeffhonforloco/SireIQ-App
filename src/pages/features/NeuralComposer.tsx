
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Feather, Check, Copy, Download, Music3, RotateCw } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NeuralComposer = () => {
  const [generating, setGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<'story' | 'poetry' | 'dialogue' | 'script'>('story');
  const [generatedContent, setGeneratedContent] = useState('');
  const [creativeLevel, setCreativeLevel] = useState(50);
  const [tone, setTone] = useState('neutral');
  const [style, setStyle] = useState('modern');
  const [selectedTab, setSelectedTab] = useState('compose');
  
  const tones = [
    { value: 'joyful', label: 'Joyful' },
    { value: 'somber', label: 'Somber' },
    { value: 'mysterious', label: 'Mysterious' },
    { value: 'passionate', label: 'Passionate' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'humorous', label: 'Humorous' },
  ];
  
  const styles = [
    { value: 'modern', label: 'Modern' },
    { value: 'classical', label: 'Classical' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'baroque', label: 'Baroque' },
    { value: 'surrealist', label: 'Surrealist' },
    { value: 'gothic', label: 'Gothic' },
  ];

  // Content templates based on type and style
  const contentTemplates = {
    story: {
      modern: "In the gleaming metropolis of New Horizon, %prompt% became the talk of the town. It wasn't just the way technology had transformed everyday life, but how people adapted to these changes that fascinated sociologists and casual observers alike...",
      classical: "Once upon a time, in a kingdom far away, there lived a curious soul who pondered deeply about %prompt%. The townsfolk would gather around to hear tales of wonder and mystery that unfolded across the ancient lands...",
      minimalist: "%prompt%. Silence. Movement. A figure in the distance. Questions without answers. Footsteps. The wind whispers. Memory fades. Time passes. Understanding dawns slowly...",
      baroque: "Amidst the ornate chambers of the grand palace, where golden filigree adorned every surface and tapestries told stories of conquest and romance, the matter of %prompt% became the subject of intense deliberation among the nobles and scholars who had gathered for the seasonal symposium...",
      surrealist: "The clock melted over the edge of reality while %prompt% floated upside-down through the sky of floating eyeballs. Fish swam through the desert as mountains turned to liquid and poured into teacups held by gloved hands without bodies...",
      gothic: "In the shadow of the decrepit manor house, its windows like vacant eyes staring into the fog-shrouded moors, the secret of %prompt% lay buried beneath centuries of family shame and supernatural dread..."
    },
    poetry: {
      modern: "Urban rhythms and digital dreams,\n%prompt% flows through fiber optic streams.\nConnected yet alone in the endless scroll,\nFinding meaning in fragments that make us whole.",
      classical: "O gentle muse, inspire my humble pen,\nTo speak of %prompt% once again;\nIn measured verse and rhyme divine,\nLet truth and beauty both combine.",
      minimalist: "%prompt%\nSilence\nSpace\nBrief words\nDeep meaning\nLess is more.",
      baroque: "Upon the stage of mortal contemplation,\nWhere %prompt% doth inspire fascination;\nThe grandeur of the cosmos, vast and bright,\nIlluminates the soul with wondrous light.",
      surrealist: "Blue elephants dance on typewriter keys,\n%prompt% dissolves in the underwater breeze.\nClocks without hands tell perfect time,\nWhile logic sleeps and reason climbs.",
      gothic: "Beneath the pallid moon's forlorn light,\n%prompt% haunts my dreams this dreaded night;\nDarkness whispers secrets of the grave,\nAs phantom memories I cannot save."
    },
    dialogue: {
      modern: "\"Have you heard about %prompt%?\"\n\"Yeah, it's all over social media. Can't believe it's actually happening.\"\n\"I know, right? My timeline is flooded with hot takes.\"\n\"What's your opinion on it?\"\n\"I'm still processing, to be honest. It's complicated.\"",
      classical: "\"Pray tell, dear friend, what news of %prompt%?\"\n\"Ah, a matter most curious indeed! The town speaks of little else these days.\"\n\"I find myself most intrigued by the implications.\"\n\"As do I. Shall we discuss it over tea in the garden?\"",
      minimalist: "\"%prompt%.\"\n\"Yes?\"\n\"Thoughts?\"\n\"Many.\"\n\"Share.\"\n\"Later.\"\n\"Why?\"\n\"Complex.\"\n\"Try.\"\n\"...\"",
      baroque: "\"I must confess, the matter of %prompt% has occupied my scholarly pursuits for many a fortnight!\"\n\"Indeed, your excellency! The intricacies and subtle complexities therein have provided ample fodder for the most stimulating discourse among the learned circles of our acquaintance!\"\n\"How eloquently you express what my heart has long felt but my tongue failed to articulate!\"",
      surrealist: "\"The zebras told me about %prompt% while I was swimming in the chandelier.\"\n\"Did they use backwards words or melting clocks to explain?\"\n\"Neither. They painted it with invisible colors on the sound of thunder.\"\n\"Perfectly unclear. I understand everything and nothing simultaneously.\"",
      gothic: "\"Dare I speak of %prompt%, even as the candle gutters and strange sounds emanate from behind the walls?\"\n\"Speak softly, lest they hear us. This house has ears, and secrets best left buried.\"\n\"Too late... the portrait's eyes follow us. It knows what we discuss.\"\n\"Then we are already doomed.\""
    },
    script: {
      modern: "INT. DOWNTOWN COFFEE SHOP - DAY\n\nThe buzz of conversation and espresso machines fills the air. ALEX (30s, casual but put-together) types intensely on a laptop while JORDAN (20s, artistic type) sketches in a notebook.\n\nJORDAN\nHave you been following that thing about %prompt%?\n\nALEX\n(not looking up)\nTrying not to. It's become so divisive online.\n\nJORDAN\nBut don't you think it's important to engage with?\n\nAlex finally looks up, conflicted.",
      classical: "ACT I, SCENE I\n\nA grand hall in the royal palace. Ornate columns and tapestries adorn the walls. LORD BLACKWOOD and LADY ELIZABETH enter from opposite sides.\n\nLORD BLACKWOOD\nMy lady, word has reached the court of %prompt%. What say you on this matter?\n\nLADY ELIZABETH\n(with a curtsy)\nA delicate affair that requires both wisdom and discretion, my lord.\n\nLORD BLACKWOOD\nIndeed. His Majesty has requested our counsel forthwith.",
      minimalist: "EMPTY ROOM\n\nA chair. A table. Nothing else.\n\nPERSON A enters. Sits. Waits.\n\nPERSON B enters.\n\nPERSON A\n%prompt%.\n\nPERSON B\nI know.\n\nSilence.\n\nPERSON B exits.\n\nPERSON A remains.",
      baroque: "THE GRAND SALON - EVENING\n\nCandlelight flickers across gold-leafed walls. A dozen aristocrats in elaborate costumes and powdered wigs engage in animated conversation. COUNT AURELIUS raises his hand for silence.\n\nCOUNT AURELIUS\n(with theatrical flourish)\nEsteemed colleagues and noble friends, I bring forth for your intellectual delectation the fascinating matter of %prompt%, which has caused such a stir in the royal academy!\n\nMurmurs of interest and surprise ripple through the gathering.",
      surrealist: "SCENE: IMPOSSIBLE LOCATION\n\nA staircase leads both up and down simultaneously. Clocks drip from the ceiling. Fish swim through the air.\n\nPROTAGONIST\n(speaking to a melting telephone)\nThe %prompt% has escaped from the dictionary again.\n\nA door opens. Instead of a person, a parade of musical instruments enters, playing themselves.\n\nMUSICAL INSTRUMENTS\n(in perfect harmony)\nReality is just a consensus hallucination.",
      gothic: "INT. ANCIENT LIBRARY - NIGHT\n\nThunder CRASHES. Rain lashes against stained glass windows. PROFESSOR BLACKWOOD hunches over a crumbling manuscript, his candle creating monstrous shadows.\n\nA KNOCK at the door. He startles.\n\nPROFESSOR BLACKWOOD\nEnter... if you must.\n\nYOUNG SCHOLAR\n(entering nervously)\nForgive the intrusion, Professor, but I've found something about %prompt% in the forbidden texts.\n\nPROFESSOR BLACKWOOD\n(face paling)\nGod help us all."
    }
  };

  const handleGenerateContent = () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt first');
      return;
    }
    
    setGenerating(true);
    
    // Simulate AI content generation with a delay
    setTimeout(() => {
      const template = contentTemplates[contentType][style];
      let filledContent = template.replace(/%prompt%/g, prompt);
      
      // Apply creative level to make content shorter or longer
      if (creativeLevel < 30) {
        // Shorter, more concise version
        filledContent = filledContent.split('.').slice(0, 2).join('.') + '.';
      } else if (creativeLevel > 70) {
        // Longer, more elaborate version
        filledContent = filledContent + '\n\n' + filledContent;
      }
      
      // Apply tone adjustments
      let tonedContent = filledContent;
      switch (tone) {
        case 'joyful':
          tonedContent += '\n\nThe brightness of possibility illuminated everything. What a wonderful discovery!';
          break;
        case 'somber':
          tonedContent += '\n\nA heavy silence followed. Some truths are difficult to bear.';
          break;
        case 'mysterious':
          tonedContent += '\n\nQuestions remained. The answers, if they existed at all, remained hidden in shadow.';
          break;
        case 'passionate':
          tonedContent += '\n\nThe intensity of emotion was overwhelming. Nothing would ever be the same!';
          break;
        case 'humorous':
          tonedContent += '\n\nOf course, that's when the universe decided to add a punchline. Timing is everything!';
          break;
      }
      
      setGeneratedContent(tonedContent);
      setGenerating(false);
      toast.success('Content generated successfully!');
    }, 2000);
  };
  
  const handleCopyContent = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success('Content copied to clipboard');
  };
  
  const handleDownloadContent = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `neural-composer-${contentType}-${style}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Content downloaded');
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Neural Composer | SireIQ</title>
        <meta name="description" content="Create beautifully crafted content with AI assistance" />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Music3 className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Neural</span> Composer
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Craft beautiful, creative content in any style or format
            </p>
          </div>
          
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 w-[400px] mx-auto mb-8">
              <TabsTrigger value="compose">Compose</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            
            <TabsContent value="compose">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Content creation form */}
                <Card className="glass-effect border border-sireiq-accent/30 w-full lg:w-1/2">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Neural Composition</h2>
                    
                    <div className="mb-6">
                      <label htmlFor="content-type" className="block text-sm font-medium mb-2">
                        Content Format:
                      </label>
                      <Select value={contentType} onValueChange={(value: any) => setContentType(value)}>
                        <SelectTrigger className="w-full bg-sireiq-darker border-sireiq-accent/50">
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="story">Story</SelectItem>
                          <SelectItem value="poetry">Poetry</SelectItem>
                          <SelectItem value="dialogue">Dialogue</SelectItem>
                          <SelectItem value="script">Script</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="prompt" className="block text-sm font-medium mb-2">
                        Theme or Subject:
                      </label>
                      <Input 
                        id="prompt"
                        placeholder="Enter your theme or subject..." 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="bg-sireiq-darker border-sireiq-accent/50"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="style" className="block text-sm font-medium mb-2">
                        Writing Style:
                      </label>
                      <Select value={style} onValueChange={setStyle}>
                        <SelectTrigger className="w-full bg-sireiq-darker border-sireiq-accent/50">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          {styles.map(style => (
                            <SelectItem key={style.value} value={style.value}>
                              {style.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="tone" className="block text-sm font-medium mb-2">
                        Emotional Tone:
                      </label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger className="w-full bg-sireiq-darker border-sireiq-accent/50">
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent>
                          {tones.map(tone => (
                            <SelectItem key={tone.value} value={tone.value}>
                              {tone.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium mb-2">
                        Creativity Level: {creativeLevel}%
                      </label>
                      <Slider 
                        defaultValue={[50]} 
                        max={100} 
                        step={1} 
                        className="py-4"
                        onValueChange={(value) => setCreativeLevel(value[0])}
                      />
                      <div className="flex justify-between text-xs text-sireiq-light/70">
                        <span>Conservative</span>
                        <span>Balanced</span>
                        <span>Experimental</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleGenerateContent}
                      disabled={generating || !prompt.trim()}
                      className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 transition-opacity"
                    >
                      {generating ? (
                        <>
                          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                          Composing...
                        </>
                      ) : (
                        <>
                          Compose Content 
                          <Feather className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Generated content */}
                <Card className="glass-effect border border-sireiq-accent/30 w-full lg:w-1/2">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Your Composition</h2>
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
                          <p className="mb-2">No content composed yet</p>
                          <p className="text-sm">Enter a theme and click "Compose Content" to begin</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="examples">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Card className="glass-effect border border-sireiq-accent/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Short Story Example</h3>
                    <div className="bg-sireiq-darker rounded-md p-4 border border-sireiq-accent/20 whitespace-pre-wrap h-[300px] overflow-auto">
                      In the gleaming metropolis of New Horizon, artificial dreams became the talk of the town. It wasn't just the way technology had transformed everyday life, but how people adapted to these changes that fascinated sociologists and casual observers alike...
                      
                      The brightness of possibility illuminated everything. What a wonderful discovery!
                    </div>
                    <div className="mt-4 text-sm text-sireiq-light/70">
                      <p><strong>Format:</strong> Story</p>
                      <p><strong>Style:</strong> Modern</p>
                      <p><strong>Tone:</strong> Joyful</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-effect border border-sireiq-accent/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Poetry Example</h3>
                    <div className="bg-sireiq-darker rounded-md p-4 border border-sireiq-accent/20 whitespace-pre-wrap h-[300px] overflow-auto">
                      Beneath the pallid moon's forlorn light,
                      memory haunts my dreams this dreaded night;
                      Darkness whispers secrets of the grave,
                      As phantom memories I cannot save.
                      
                      Questions remained. The answers, if they existed at all, remained hidden in shadow.
                    </div>
                    <div className="mt-4 text-sm text-sireiq-light/70">
                      <p><strong>Format:</strong> Poetry</p>
                      <p><strong>Style:</strong> Gothic</p>
                      <p><strong>Tone:</strong> Mysterious</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-effect border border-sireiq-accent/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Dialogue Example</h3>
                    <div className="bg-sireiq-darker rounded-md p-4 border border-sireiq-accent/20 whitespace-pre-wrap h-[300px] overflow-auto">
                      "Have you heard about quantum computing?"
                      "Yeah, it's all over social media. Can't believe it's actually happening."
                      "I know, right? My timeline is flooded with hot takes."
                      "What's your opinion on it?"
                      "I'm still processing, to be honest. It's complicated."
                      
                      A heavy silence followed. Some truths are difficult to bear.
                    </div>
                    <div className="mt-4 text-sm text-sireiq-light/70">
                      <p><strong>Format:</strong> Dialogue</p>
                      <p><strong>Style:</strong> Modern</p>
                      <p><strong>Tone:</strong> Somber</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-effect border border-sireiq-accent/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Script Example</h3>
                    <div className="bg-sireiq-darker rounded-md p-4 border border-sireiq-accent/20 whitespace-pre-wrap h-[300px] overflow-auto">
                      SCENE: IMPOSSIBLE LOCATION

                      A staircase leads both up and down simultaneously. Clocks drip from the ceiling. Fish swim through the air.

                      PROTAGONIST
                      (speaking to a melting telephone)
                      The paradox has escaped from the dictionary again.

                      A door opens. Instead of a person, a parade of musical instruments enters, playing themselves.

                      MUSICAL INSTRUMENTS
                      (in perfect harmony)
                      Reality is just a consensus hallucination.
                      
                      Of course, that's when the universe decided to add a punchline. Timing is everything!
                    </div>
                    <div className="mt-4 text-sm text-sireiq-light/70">
                      <p><strong>Format:</strong> Script</p>
                      <p><strong>Style:</strong> Surrealist</p>
                      <p><strong>Tone:</strong> Humorous</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Creative Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Multiple Formats
              </h3>
              <p className="text-sireiq-light/70">
                Create stories, poetry, dialogue, or scripts to match your creative needs and desired output format.
              </p>
            </div>
            
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Style Selection
              </h3>
              <p className="text-sireiq-light/70">
                Choose from modern, classical, minimalist, baroque, surrealist, or gothic writing styles to match your vision.
              </p>
            </div>
            
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Emotional Tone
              </h3>
              <p className="text-sireiq-light/70">
                Set the emotional tone of your content from joyful to mysterious, passionate to somber, or keep it neutral.
              </p>
            </div>
            
            <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/40 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Check className="h-5 w-5 text-sireiq-cyan mr-2" />
                Creativity Control
              </h3>
              <p className="text-sireiq-light/70">
                Adjust the creativity level to make your content more conservative or experimental based on your preferences.
              </p>
            </div>
          </div>
        </section>
        
        {/* How it works section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How Neural Composer Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="glass-effect rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 border border-sireiq-accent/30 text-sireiq-cyan">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Format</h3>
              <p className="text-sireiq-light/70">
                Select from stories, poetry, dialogue or scripts to match your creative needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="glass-effect rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 border border-sireiq-accent/30 text-sireiq-cyan">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Parameters</h3>
              <p className="text-sireiq-light/70">
                Define your theme, style, tone and creativity level to guide the AI composition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="glass-effect rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 border border-sireiq-accent/30 text-sireiq-cyan">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate & Refine</h3>
              <p className="text-sireiq-light/70">
                Get beautiful AI-generated content that you can download, copy, or refine further.
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

export default NeuralComposer;
