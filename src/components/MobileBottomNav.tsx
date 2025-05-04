
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, Search, Settings, User, Layers } from 'lucide-react';

const MobileBottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-sireiq-darker border-t border-sireiq-accent/30 z-50">
      <nav className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center p-2 ${isActive('/') ? 'text-sireiq-cyan' : 'text-sireiq-light'}`}
        >
          <HomeIcon size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/features" 
          className={`flex flex-col items-center justify-center p-2 ${isActive('/features') ? 'text-sireiq-cyan' : 'text-sireiq-light'}`}
        >
          <Layers size={24} />
          <span className="text-xs mt-1">Features</span>
        </Link>
        
        <Link 
          to="/ai-workflows" 
          className={`flex flex-col items-center justify-center p-2 ${isActive('/ai-workflows') ? 'text-sireiq-cyan' : 'text-sireiq-light'}`}
        >
          <Search size={24} />
          <span className="text-xs mt-1">AI Tools</span>
        </Link>
        
        <Link 
          to="/get-started" 
          className={`flex flex-col items-center justify-center p-2 ${isActive('/get-started') ? 'text-sireiq-cyan' : 'text-sireiq-light'}`}
        >
          <User size={24} />
          <span className="text-xs mt-1">Get Started</span>
        </Link>
        
        <Link 
          to="/enterprise" 
          className={`flex flex-col items-center justify-center p-2 ${isActive('/enterprise') ? 'text-sireiq-cyan' : 'text-sireiq-light'}`}
        >
          <Settings size={24} />
          <span className="text-xs mt-1">Enterprise</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
