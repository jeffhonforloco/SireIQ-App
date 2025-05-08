
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
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
        <SheetContent side="left" className="bg-black border-gray-800 flex flex-col p-0 pt-4 px-4 w-[85vw] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <Logo size="md" />
            {/* Removed the duplicate X button here since SheetContent already has a built-in close button */}
          </div>
          
          <div className="mt-6 flex flex-col gap-6">
            <NavLinks orientation="vertical" />
          </div>
          
          <div className="flex items-center mt-6 mb-4">
            <ThemeToggle />
          </div>
          
          <div className="my-6">
            <MobileAuthButtons />
          </div>
          
          {/* Add the BuildInfoSection with no extra margin to avoid double borders */}
          <div className="mt-auto -mx-4">
            <BuildInfoSection />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
