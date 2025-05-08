
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLinks from './navbar/NavLinks';
import AuthButtons from './navbar/AuthButtons';
import MobileMenu from './navbar/MobileMenu';
import { ThemeToggle } from './ui/theme-toggle';
import BuildInfoSection from './navbar/BuildInfoSection';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Book, Code, FileText, MessageSquare, Video } from "lucide-react";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showBuildInfo, setShowBuildInfo] = useState(false);
  
  // Add scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black'} border-0 border-none border-b-0 shadow-none`} 
      style={{
        borderBottom: "none", 
        boxShadow: "none",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none"
      }}
    >
      <div className="w-full px-2 md:px-3 lg:px-4 mx-auto flex items-center justify-between border-0 border-none">
        {/* Logo - Left side */}
        <div className="flex-none">
          <Link to="/" className="flex items-center pl-0 border-0 border-none">
            <Logo size="md" />
          </Link>
        </div>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-1 justify-center items-center border-0 border-none">
          <NavLinks />
          
          {/* Resources Menu - New */}
          <NavigationMenu className="ml-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sireiq-light hover:text-sireiq-cyan">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-sireiq-accent/30">
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/documentation" className="flex items-start p-3 hover:bg-sireiq-accent/10 rounded-md">
                          <Book className="h-6 w-6 text-sireiq-cyan mr-3" />
                          <div>
                            <div className="text-sm font-medium mb-1">Documentation</div>
                            <p className="text-xs text-sireiq-light/70">Comprehensive guides for using the SireIQ platform</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/api-reference" className="flex items-start p-3 hover:bg-sireiq-accent/10 rounded-md">
                          <Code className="h-6 w-6 text-sireiq-cyan mr-3" />
                          <div>
                            <div className="text-sm font-medium mb-1">API Reference</div>
                            <p className="text-xs text-sireiq-light/70">Technical documentation for API integration</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/blog" className="flex items-start p-3 hover:bg-sireiq-accent/10 rounded-md">
                          <FileText className="h-6 w-6 text-sireiq-cyan mr-3" />
                          <div>
                            <div className="text-sm font-medium mb-1">Blog</div>
                            <p className="text-xs text-sireiq-light/70">Insights, updates, and AI industry perspectives</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/tutorials" className="flex items-start p-3 hover:bg-sireiq-accent/10 rounded-md">
                          <Video className="h-6 w-6 text-sireiq-cyan mr-3" />
                          <div>
                            <div className="text-sm font-medium mb-1">Tutorials</div>
                            <p className="text-xs text-sireiq-light/70">Step-by-step guides and educational videos</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <Link to="/community" className="flex items-start p-3 hover:bg-sireiq-accent/10 rounded-md">
                          <MessageSquare className="h-6 w-6 text-sireiq-cyan mr-3" />
                          <div>
                            <div className="text-sm font-medium mb-1">Community</div>
                            <p className="text-xs text-sireiq-light/70">Connect with other developers and share knowledge</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        {/* Auth Buttons and Build Info Toggle - Right side */}
        <div className="hidden md:flex items-center space-x-4 pr-0 border-0 border-none flex-none">
          <ThemeToggle />
          
          {/* "Build it" menu item */}
          <Menubar className="bg-transparent border-0 border-none">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer px-4 py-2 text-sireiq-light hover:text-sireiq-cyan focus:text-sireiq-cyan data-[state=open]:text-sireiq-cyan border-0 border-none">
                Build it
              </MenubarTrigger>
              <MenubarContent className="bg-black border-gray-800 w-[400px] p-0">
                <BuildInfoSection />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          
          <AuthButtons />
        </div>
        
        {/* Mobile Navigation - No changes for mobile */}
        {isMobile && (
          <MobileMenu 
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
