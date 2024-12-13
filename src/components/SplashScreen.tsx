import React from 'react';
import { Brain } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Brain className="h-16 w-16 text-cyan-500" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">SireIQ</h1>
        <p className="text-gray-400">AI-Powered Intelligence</p>
        <div className="mt-8">
          <div className="h-1 w-32 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full w-1/2 bg-cyan-500 rounded-full animate-[loading_1s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}