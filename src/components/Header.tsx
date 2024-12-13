import React from 'react';
import { Brain, MessageSquare, BarChart3 } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SireIQ</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-indigo-600">Solutions</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-indigo-600">Sign In</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}