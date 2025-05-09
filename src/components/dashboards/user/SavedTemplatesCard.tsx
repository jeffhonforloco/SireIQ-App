
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, ArrowRight, PlusCircle } from 'lucide-react';

interface Template {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SavedTemplatesCardProps {
  templates: Template[];
}

const SavedTemplatesCard = ({ templates }: SavedTemplatesCardProps) => {
  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Bookmark className="w-5 h-5 mr-2 text-sireiq-cyan" />
            Saved Templates
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-sireiq-cyan hover:text-sireiq-cyan/80 h-8 px-2">
            Browse Library
          </Button>
        </div>
        <CardDescription>Your frequently used templates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {templates.map(template => (
          <div key={template.id} className="flex items-center p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer group">
            <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3">
              <span className="text-xl">{template.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{template.title}</h3>
              <p className="text-sm text-sireiq-light/70">{template.description}</p>
            </div>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full justify-center gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
          <PlusCircle className="w-4 h-4 text-sireiq-cyan" />
          <span>Create Template</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SavedTemplatesCard;
