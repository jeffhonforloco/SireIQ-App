
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Database, Layers, Sparkles, BarChart3, Users, Mic, Code, Image, Brain, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import MobileAuthButtons from './MobileAuthButtons';
import NavLinks from './NavLinks';
import BuildInfoSection from './BuildInfoSection';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import MemoryBrowser from '@/plugins/memory';
import { useRole } from '@/contexts/RoleContext';

interface MobileMenuProps {
  isSheetOpen: boolean;
  setIsSheetOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isSheetOpen, setIsSheetOpen }) => {
  const [showMemory, setShowMemory] = useState(false);
  const { role } = useRole();
  
  const features = [
    { name: 'AI Assistant', icon: Sparkles, path: '/features/ai-assistant', description: 'Intelligent AI conversations' },
    { name: 'Data Analysis', icon: BarChart3, path: '/features/data-analysis', description: 'Advanced analytics tools' },
    { name: 'Voice Assistant', icon: Mic, path: '/features/voice-assistant', description: 'Voice-powered interactions' },
    { name: 'Code Generator', icon: Code, path: '/features/code-generator', description: 'Generate code instantly' },
    { name: 'Image Enhancer', icon: Image, path: '/features/image-enhancer', description: 'AI-powered image editing' },
    { name: 'Idea Generation', icon: Brain, path: '/features/idea-generation', description: 'Creative brainstorming' },
  ];
  
  return (
    <div className="flex md:hidden items-center">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black border-gray-800 flex flex-col p-0 pt-4 px-4 w-[85vw] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <Logo size="md" />
          </div>
          
          <div className="mt-6 flex flex-col gap-6">
            <NavLinks orientation="vertical" />
          </div>

          {/* Features Dropdown */}
          <div className="mt-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-between bg-sireiq-darker border-sireiq-accent/20 hover:bg-sireiq-accent/10"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sireiq-cyan" />
                    <span>Features</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-80 bg-sireiq-darker border-sireiq-accent/20 z-50"
                align="start"
                side="bottom"
              >
                <DropdownMenuLabel className="text-sireiq-cyan font-semibold">
                  AI Features
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-sireiq-accent/20" />
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <DropdownMenuItem key={feature.name} asChild>
                      <Link
                        to={feature.path}
                        onClick={() => setIsSheetOpen(false)}
                        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-sireiq-accent/10 focus:bg-sireiq-accent/10"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sireiq-cyan/20 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-sireiq-cyan" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">{feature.name}</div>
                          <div className="text-xs text-gray-400">{feature.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Quick Actions */}
          {role && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  to="/chat"
                  onClick={() => setIsSheetOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="text-sm font-medium text-white">Start New Chat</div>
                </Link>
                <Link
                  to="/dashboard"
                  onClick={() => setIsSheetOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-sm font-medium text-white">View Dashboard</div>
                </Link>
              </div>
            </div>
          )}
          
          <Button 
            variant="outline" 
            className="mt-6 flex items-center justify-center gap-2"
            onClick={() => setShowMemory(!showMemory)}
          >
            <Database className="h-4 w-4 text-sireiq-cyan" />
            <span>{showMemory ? "Hide Memory Browser" : "Show Memory Browser"}</span>
          </Button>
          
          {showMemory && (
            <div className="my-4 border border-gray-800 rounded-lg overflow-hidden">
              <MemoryBrowser inMenu={true} />
            </div>
          )}
          
          <div className="flex items-center mt-6 mb-4">
            <ThemeToggle />
          </div>
          
          <div className="my-6">
            <MobileAuthButtons />
          </div>
          
          <div className="mt-auto -mx-4">
            <BuildInfoSection />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
