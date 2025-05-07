
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WelcomeMessage: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-6">
      <CardContent className="p-4">
        <h3 className="text-lg font-medium mb-2 text-white">Welcome to Sire Voice Assistant</h3>
        <p className="text-gray-400 text-sm mb-3">
          I can help you with information, answer questions, and assist with various tasks.
        </p>
        <div className="space-y-1 text-sm">
          <p className="text-blue-400">Try asking:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>"Tell me about SireIQ features"</li>
            <li>"How can AI improve my workflow?"</li>
            <li>"What are the benefits of voice assistants?"</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeMessage;
