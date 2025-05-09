
import React from 'react';
import { Helmet } from 'react-helmet-async';
import KeyboardShortcutsDialog from '@/components/keyboard/KeyboardShortcutsDialog';
import { getShortcutCategories } from '@/components/keyboard/AppKeyboardShortcuts';
import { Command } from 'lucide-react';

const GetStarted = () => {
  const shortcutCategories = getShortcutCategories();
  
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Get Started | SireIQ</title>
        <meta name="description" content="Get started with SireIQ" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-10">
          <Command className="h-12 w-12 text-sireiq-cyan mr-4" />
          <h1 className="text-3xl font-bold text-gradient glow">Keyboard Shortcuts</h1>
        </div>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {shortcutCategories.map((category) => (
            <div key={category.name} className="bg-sireiq-accent/5 border border-sireiq-accent/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-sireiq-cyan">{category.name}</h2>
              <div className="space-y-3">
                {category.shortcuts.map((shortcut, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sireiq-light/80">{shortcut.description}</span>
                    <kbd className="px-2.5 py-1.5 bg-sireiq-accent/20 border border-sireiq-accent/30 rounded text-sm">
                      {[
                        shortcut.ctrlKey && 'Ctrl',
                        shortcut.altKey && 'Alt',
                        shortcut.shiftKey && 'Shift',
                        shortcut.key === ' ' ? 'Space' : shortcut.key
                      ].filter(Boolean).join(' + ')}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-sireiq-light/50">
          <p>Press <kbd className="px-1.5 py-0.5 bg-sireiq-accent/20 border border-sireiq-accent/30 rounded mx-1">?</kbd> anywhere in the app to view these shortcuts</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
