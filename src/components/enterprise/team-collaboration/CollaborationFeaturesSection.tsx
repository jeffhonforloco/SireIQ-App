
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, RotateCcw, Share2 } from 'lucide-react';

const CollaborationFeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-gradient">Real-Time</span> Collaboration
          </h2>
          <p className="text-lg text-sireiq-light/70 mb-8">
            SireIQ's enterprise collaboration tools enable your teams to work together seamlessly, regardless of location. Experience the power of simultaneous editing, instant feedback, and streamlined workflows.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "Multiple team members can edit AI prompts simultaneously",
              "Comment and provide feedback directly on generated content",
              "Assign tasks and track progress within the platform",
              "Set custom permissions for different team roles",
              "Integration with existing team communication tools"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-sireiq-cyan/20 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-sireiq-cyan rounded-full"></div>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          
          <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
            Request Team Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
          <div className="bg-sireiq-darker rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="flex -space-x-2">
                {['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-xs font-medium border-2 border-sireiq-darker`}>
                    {['AJ', 'TK', 'SR', 'MP'][i]}
                  </div>
                ))}
              </div>
              <span className="ml-3 text-sm text-sireiq-light/70">4 team members collaborating</span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-sireiq-accent/10 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sireiq-cyan">Marketing Campaign</span>
                  <span className="text-xs text-sireiq-light/50">Last edit: 5 mins ago</span>
                </div>
                <p className="text-sm">Working on summer campaign copy. Need feedback on tone.</p>
              </div>
              
              <div className="bg-sireiq-accent/10 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sireiq-cyan">Product Description</span>
                  <span className="text-xs text-sireiq-light/50">Last edit: 1 hour ago</span>
                </div>
                <p className="text-sm">Updated technical specs section. Please review.</p>
              </div>
              
              <div className="bg-sireiq-accent/10 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sireiq-cyan">Social Media Posts</span>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 text-sireiq-light/50 mr-1" />
                    <span className="text-xs text-sireiq-light/50">Due: Tomorrow</span>
                  </div>
                </div>
                <p className="text-sm">Created 5 post variations. Vote on your favorite.</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <Button variant="outline" size="sm" className="text-xs border-sireiq-accent/30">
                <RotateCcw className="h-3 w-3 mr-1" /> History
              </Button>
              <Button size="sm" className="text-xs bg-sireiq-cyan text-sireiq-darker">
                <Share2 className="h-3 w-3 mr-1" /> Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationFeaturesSection;
