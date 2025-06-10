
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Brain, 
  Search, 
  Filter, 
  Star, 
  Play, 
  Plus,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
  description?: string;
  rating?: number;
  popularity?: number;
  lastUsed?: string;
  isCustom?: boolean;
}

interface AISkillsCardProps {
  skills: Skill[];
  categories: string[];
  onSkillSelect?: (skill: Skill) => void;
  onCreateSkill?: () => void;
  onSkillFavorite?: (skillId: number) => void;
}

const AISkillsCard = ({ 
  skills, 
  categories, 
  onSkillSelect, 
  onCreateSkill,
  onSkillFavorite 
}: AISkillsCardProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSkillClick = (skill: Skill) => {
    if (onSkillSelect) {
      onSkillSelect(skill);
    }
  };

  const handleFavorite = (e: React.MouseEvent, skillId: number) => {
    e.stopPropagation();
    if (onSkillFavorite) {
      onSkillFavorite(skillId);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Creative': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Analysis': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Technical': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Planning': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Marketing': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Research': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    };
    return colors[category as keyof typeof colors] || 'bg-sireiq-accent/20 text-sireiq-cyan border-sireiq-accent/30';
  };

  const renderStars = (rating: number = 0) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-sireiq-light/30'}`} 
      />
    ));
  };

  return (
    <Card className="bg-sireiq-darker border-sireiq-accent/20">
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <CardTitle className="text-lg flex items-center">
              <Brain className="w-5 h-5 mr-2 text-sireiq-cyan" />
              AI Skills
              <Badge variant="secondary" className="ml-2 bg-sireiq-accent/20 text-sireiq-cyan">
                {filteredSkills.length}
              </Badge>
            </CardTitle>
            <CardDescription>Discover and activate specialized AI capabilities</CardDescription>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onCreateSkill}
              className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
            >
              <Plus className="w-4 h-4 mr-1" />
              Create Skill
            </Button>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sireiq-light/50" />
            <Input
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-sireiq-dark border-sireiq-accent/20 focus:border-sireiq-cyan"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap ${
                  selectedCategory === category 
                    ? 'bg-sireiq-cyan text-sireiq-dark' 
                    : 'border-sireiq-accent/30 hover:bg-sireiq-accent/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {filteredSkills.length === 0 ? (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 mx-auto mb-4 text-sireiq-accent/40" />
            <p className="text-sireiq-light/70 mb-4">
              {searchTerm ? 'No skills match your search' : 'No skills in this category'}
            </p>
            <Button 
              onClick={onCreateSkill}
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-purple hover:opacity-90"
            >
              Create Custom Skill
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map(skill => (
              <div
                key={skill.id}
                className="group p-4 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/20 hover:border-sireiq-cyan/50 cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => handleSkillClick(skill)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm text-sireiq-light group-hover:text-sireiq-cyan transition-colors">
                        {skill.name}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs mt-1 ${getCategoryColor(skill.category)}`}
                      >
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => handleFavorite(e, skill.id)}
                  >
                    <Star className="w-4 h-4" />
                  </Button>
                </div>
                
                {skill.description && (
                  <p className="text-xs text-sireiq-light/70 mb-3 line-clamp-2">
                    {skill.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {skill.rating && (
                      <div className="flex items-center gap-1">
                        {renderStars(skill.rating)}
                      </div>
                    )}
                    {skill.popularity && (
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-sireiq-light/50" />
                        <span className="text-xs text-sireiq-light/50">{skill.popularity}+</span>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    size="sm"
                    className="h-7 px-3 bg-sireiq-cyan/20 hover:bg-sireiq-cyan/30 text-sireiq-cyan border border-sireiq-cyan/30"
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Activate
                  </Button>
                </div>
                
                {skill.lastUsed && (
                  <div className="flex items-center gap-1 mt-2 pt-2 border-t border-sireiq-accent/10">
                    <Clock className="w-3 h-3 text-sireiq-light/50" />
                    <span className="text-xs text-sireiq-light/50">Last used {skill.lastUsed}</span>
                  </div>
                )}
                
                {skill.isCustom && (
                  <Badge variant="outline" className="mt-2 text-xs border-yellow-500/50 text-yellow-400">
                    Custom
                  </Badge>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AISkillsCard;
