
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { usePersonalityEngine } from '@/contexts/PersonalityEngineContext';
import { toast } from 'sonner';
import { useRole } from '@/contexts/RoleContext';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Dialog, 
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { 
  X, 
  Info, 
  ChevronDown, 
  Sparkles,
  Brain, 
  User,
  Settings,
  AlertCircle,
  Check
} from 'lucide-react';

// Personality trait options
const personalityTraits = [
  { id: 'professional', label: 'Professional' },
  { id: 'friendly', label: 'Friendly' },
  { id: 'technical', label: 'Technical' },
  { id: 'concise', label: 'Concise' },
  { id: 'detailed', label: 'Detailed' },
  { id: 'analytical', label: 'Analytical' },
  { id: 'creative', label: 'Creative' },
  { id: 'encouraging', label: 'Encouraging' },
];

// Communication style options
const communicationStyles = [
  { id: 'formal', label: 'Formal' },
  { id: 'casual', label: 'Casual' },
  { id: 'direct', label: 'Direct' },
  { id: 'conversational', label: 'Conversational' },
];

const CustomizePersonality = () => {
  const navigate = useNavigate();
  const { role } = useRole();
  const { 
    updateSelectedStyle, 
    updateParameter, 
    parameters,
    previewText 
  } = usePersonalityEngine();
  
  // Local state for the form
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string>('conversational');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [enableForAllChats, setEnableForAllChats] = useState(true);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  // Handle trait selection
  const toggleTrait = (traitId: string) => {
    if (selectedTraits.includes(traitId)) {
      setSelectedTraits(selectedTraits.filter(id => id !== traitId));
    } else {
      setSelectedTraits([...selectedTraits, traitId]);
    }
  };
  
  // Handle style selection
  const handleStyleChange = (styleId: string) => {
    setSelectedStyle(styleId);
    updateSelectedStyle(styleId);
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set parameters based on form values
    parameters.forEach(param => {
      // This is a simple example - you might want more sophisticated mapping logic
      if (param.name === 'Creativity' && selectedTraits.includes('creative')) {
        updateParameter(param.name, 80);
      }
      if (param.name === 'Formality' && selectedStyle === 'formal') {
        updateParameter(param.name, 90);
      }
    });
    
    toast.success("SireIQ personality customized successfully!");
    navigate('/dashboard');
  };
  
  // Handle reset 
  const handleReset = () => {
    setName('');
    setProfession('');
    setSelectedTraits([]);
    setSelectedStyle('conversational');
    setAdditionalInfo('');
    setShowResetConfirm(false);
    toast.info("Customization settings reset");
  };
  
  // Handle cancel
  const handleCancel = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-sireiq-dark/80 backdrop-blur-sm text-sireiq-light p-4">
      <Helmet>
        <title>SireIQ | Customize Personality</title>
        <meta name="description" content="Customize how SireIQ AI responds to you" />
      </Helmet>
      
      <Card className="max-w-2xl w-full bg-sireiq-darker border border-sireiq-accent/20 rounded-lg shadow-xl overflow-hidden">
        {/* Header with title and close button */}
        <div className="p-4 flex items-center justify-between border-b border-sireiq-accent/20">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-sireiq-cyan" />
            <h1 className="text-xl font-medium">Customize SireIQ</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={handleCancel} className="hover:bg-sireiq-accent/10">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Main content */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div>
              <p className="text-sireiq-light/80 mb-6">
                Introduce yourself to get better, more personalized responses from SireIQ
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  What should SireIQ call you?
                </label>
                <Input
                  id="name"
                  placeholder="Your name or nickname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-sireiq-accent/5 border-sireiq-accent/20 text-sireiq-light"
                />
              </div>
              
              <div>
                <label htmlFor="profession" className="block text-sm font-medium mb-2">
                  What do you do?
                </label>
                <Input
                  id="profession"
                  placeholder="Your role or profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="bg-sireiq-accent/5 border-sireiq-accent/20 text-sireiq-light"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">
                  What traits should SireIQ have?
                </label>
                <Textarea
                  placeholder="Describe your preferred traits or select from below"
                  className="mb-3 bg-sireiq-accent/5 border-sireiq-accent/20 text-sireiq-light"
                  value={selectedTraits.join(', ')}
                  readOnly
                />
                <div className="flex flex-wrap gap-2">
                  {personalityTraits.map((trait) => (
                    <Button
                      key={trait.id}
                      type="button"
                      size="sm"
                      variant={selectedTraits.includes(trait.id) ? "default" : "outline"}
                      className={selectedTraits.includes(trait.id) 
                        ? "bg-sireiq-cyan text-sireiq-darker" 
                        : "border-sireiq-accent/30 hover:bg-sireiq-accent/10"}
                      onClick={() => toggleTrait(trait.id)}
                    >
                      {selectedTraits.includes(trait.id) && <Check className="mr-1 h-3 w-3" />}
                      {trait.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">
                  What communication style do you prefer?
                </label>
                <div className="flex flex-wrap gap-2">
                  {communicationStyles.map((style) => (
                    <Button
                      key={style.id}
                      type="button"
                      size="sm"
                      variant={selectedStyle === style.id ? "default" : "outline"}
                      className={selectedStyle === style.id 
                        ? "bg-sireiq-cyan text-sireiq-darker" 
                        : "border-sireiq-accent/30 hover:bg-sireiq-accent/10"}
                      onClick={() => handleStyleChange(style.id)}
                    >
                      {selectedStyle === style.id && <Check className="mr-1 h-3 w-3" />}
                      {style.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                  Anything else SireIQ should know about you?
                </label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Interests, values, or preferences to keep in mind"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="bg-sireiq-accent/5 border-sireiq-accent/20 text-sireiq-light"
                  rows={4}
                />
              </div>
              
              <div className="pt-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="flex items-center gap-1 text-sireiq-light/70 hover:text-sireiq-light hover:bg-sireiq-accent/10"
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                >
                  <span>Advanced</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                {isAdvancedOpen && (
                  <div className="mt-4 space-y-4 p-4 rounded-md bg-sireiq-accent/5 border border-sireiq-accent/20">
                    {role === 'developer' && (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Code-specific terminology</p>
                          <p className="text-sm text-sireiq-light/60">Use more technical terms in code examples</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Citation quality</p>
                        <p className="text-sm text-sireiq-light/60">Provide more comprehensive citations</p>
                      </div>
                      <Switch defaultChecked={false} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Diagram generation</p>
                        <p className="text-sm text-sireiq-light/60">Generate visual diagrams when appropriate</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="mt-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm" 
                        className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                        onClick={() => setShowPreview(true)}
                      >
                        Preview response style
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center pt-4 border-t border-sireiq-accent/20">
              <Switch 
                id="enableForChats"
                checked={enableForAllChats}
                onCheckedChange={setEnableForAllChats}
              />
              <label 
                htmlFor="enableForChats" 
                className="ml-2 text-sm text-sireiq-light/80 cursor-pointer"
              >
                Enable for new chats
              </label>
            </div>
          </div>
          
          {/* Footer with buttons */}
          <div className="p-4 bg-sireiq-accent/5 border-t border-sireiq-accent/20 flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowResetConfirm(true)}
              className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
            >
              Reset
            </Button>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </Card>
      
      {/* Reset confirmation dialog */}
      <AlertDialog open={showResetConfirm} onOpenChange={setShowResetConfirm}>
        <AlertDialogContent className="bg-sireiq-darker border border-sireiq-accent/20 text-sireiq-light">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset Customization</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reset all customization settings? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 text-sireiq-light">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleReset}
              className="bg-red-500/80 hover:bg-red-600 focus:ring-red-500"
            >
              Reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Preview dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="sm:max-w-lg bg-sireiq-darker border border-sireiq-accent/20 text-sireiq-light">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-sireiq-cyan" />
              Response Style Preview
            </DialogTitle>
            <DialogDescription>
              Here's how SireIQ will respond with your selected preferences
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 border border-sireiq-accent/20 rounded-md bg-sireiq-accent/5">
            <p className="italic text-sireiq-light/90">{previewText}</p>
          </div>
          <p className="text-sm text-sireiq-light/70">
            This is just a preview. The actual responses will be tailored to your questions and context.
          </p>
          <DialogFooter>
            <Button 
              onClick={() => setShowPreview(false)}
              className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
            >
              Close Preview
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomizePersonality;
