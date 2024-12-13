import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { UserMenu } from '../auth/UserMenu';
import { ROUTES } from '../../utils/constants';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to={ROUTES.DASHBOARD} className="flex items-center">
            <Brain className="h-8 w-8 text-cyan-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SireIQ</span>
          </Link>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}