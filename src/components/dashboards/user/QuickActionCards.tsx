
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, BookOpen, ArrowRight } from 'lucide-react';

const QuickActionCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg">
            <Sparkles className="w-5 h-5 mr-2 text-sireiq-cyan" />
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-sireiq-light/70">Get instant answers and assistance with any question</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full justify-between hover:bg-sireiq-accent/10">
            <span>Start chatting</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg">
            <Calendar className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-sireiq-light/70">Plan your day with AI-powered scheduling</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full justify-between hover:bg-sireiq-accent/10">
            <span>Plan my day</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg">
            <BookOpen className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-sireiq-light/70">Discover new capabilities and tutorials</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full justify-between hover:bg-sireiq-accent/10">
            <span>View tutorials</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuickActionCards;
