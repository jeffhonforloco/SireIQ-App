
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import MobileAuthButtons from './MobileAuthButtons';
import NavLinks from './NavLinks';
import BuildInfoSection from './BuildInfoSection';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface MobileMenuProps {
  isSheetOpen: boolean;
  setIsSheetOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isSheetOpen, setIsSheetOpen }) => {
  return (
    <div className="flex md:hidden items-center">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black border-gray-800 flex flex-col">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col gap-6">
            <NavLinks orientation="vertical" />
          </div>
          
          <div className="flex items-center mt-6 mb-8">
            <ThemeToggle />
          </div>
          
          <div className="mt-auto">
            <MobileAuthButtons />
          </div>
          
          {/* Add the BuildInfoSection at the bottom of the menu */}
          <BuildInfoSection />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
