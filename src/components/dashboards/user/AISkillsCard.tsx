
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
}

interface AISkillsCardProps {
  skills: Skill[];
  categories: string[];
}

const AISkillsCard = ({ skills, categories }: AISkillsCardProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Layers className="w-5 h-5 mr-2 text-sireiq-cyan" />
            AI Skills
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-sireiq-cyan hover:text-sireiq-cyan/80 h-8 px-2">
            Browse All
          </Button>
        </div>
        <CardDescription>Specialized tools to help with specific tasks</CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90" 
                : "border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {filteredSkills.map(skill => (
            <div 
              key={skill.id} 
              className="flex flex-col items-center p-3 rounded-lg border border-sireiq-accent/20 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan/50 cursor-pointer transition-colors"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-xs text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AISkillsCard;
