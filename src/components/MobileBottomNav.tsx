
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, Layers, Settings, Mic, User } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';
import { motion } from 'framer-motion';

const MobileBottomNav = () => {
  const location = useLocation();
  const { role } = useRole();
  
  // Only show bottom nav when user is logged in (has a role)
  if (!role) return null;
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/features', icon: Layers, label: 'Features' },
    { path: '/features/voice-assistant', icon: Mic, label: 'Voice' },
    { path: '/dashboard', icon: Settings, label: 'Dashboard' }
  ];
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-sireiq-darker/90 backdrop-blur-md border-t border-sireiq-accent/20 z-50">
      <nav className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className="flex flex-col items-center justify-center py-2 px-3 relative"
          >
            <div className="relative">
              {isActive(item.path) && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-sireiq-accent/20 rounded-full -m-2"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <item.icon size={20} className={isActive(item.path) ? 'text-sireiq-cyan' : 'text-sireiq-light/70'} />
            </div>
            <span className={`text-xs mt-1 ${isActive(item.path) ? 'text-sireiq-cyan' : 'text-sireiq-light/70'}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileBottomNav;
