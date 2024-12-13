import React from 'react';
import { Sparkles, Brain, Zap, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from './common/Button';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze complex data to provide actionable insights.',
  },
  {
    icon: MessageSquare,
    title: 'Real-time Collaboration',
    description: 'Connect with experts and peers for immediate feedback and guidance.',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Monitor progress and measure success with detailed analytics.',
  },
];

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            <span className="block">Transform Your Decision Making</span>
            <span className="block text-indigo-600">with AI-Powered Intelligence</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            SireIQ combines advanced AI with human expertise to deliver personalized insights,
            helping you make smarter decisions and achieve better outcomes.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button icon={Sparkles}>Start Free Trial</Button>
            <Button icon={Zap} variant="outline">Watch Demo</Button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-gray-50 rounded-xl">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern)" />
        </svg>
      </div>
    </div>
  );
}