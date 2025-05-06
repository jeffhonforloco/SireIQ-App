
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLinks from './navbar/NavLinks';
import AuthButtons from './navbar/AuthButtons';
import MobileMenu from './navbar/MobileMenu';
import { ThemeToggle } from './ui/theme-toggle';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  // Add scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-black'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="mr-0" showText={false} size="sm" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 items-center">
          <NavLinks />
        </nav>
        
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/signin">
            <Button variant="outline" className="rounded-full px-6 py-2 h-auto bg-white text-black hover:bg-gray-100">
              Log in
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation */}
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

// Import Button component directly here to avoid circular dependency issues
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export default Navbar;
