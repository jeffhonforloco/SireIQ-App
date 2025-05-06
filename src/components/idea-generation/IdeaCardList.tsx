
import React from 'react';
import { Sparkles } from 'lucide-react';
import IdeaCard from './IdeaCard';

interface Idea {
  title: string;
  description: string;
}

interface IdeaCardListProps {
  ideas: Idea[];
  isGenerating: boolean;
}

const IdeaCardList = ({ ideas, isGenerating }: IdeaCardListProps) => {
  // Sample ideas to show when no ideas have been generated yet
  const sampleIdeas = [
    {
      title: "30 Days, New You Challenge",
      description: "A monthly program where users track improvements in key metrics, sharing progress with a supportive community."
    },
    {
      title: "Smart Sleep Revolution",
      description: "Campaign focusing on how the tracker's sleep metrics can transform users' rest quality and overall wellbeing."
    },
    {
      title: "Data-Driven Fitness Series",
      description: "Educational content showing how small, measured improvements lead to significant health outcomes over time."
    }
  ];

  if (isGenerating) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="glass-effect rounded-full p-4 animate-pulse">
          <Sparkles className="h-8 w-8 text-sireiq-cyan" />
        </div>
      </div>
    );
  }

  // Show generated ideas if available, otherwise show sample ideas
  const displayIdeas = ideas.length > 0 ? ideas : sampleIdeas;

  return (
    <div className="space-y-3">
      {displayIdeas.map((idea, index) => (
        <IdeaCard
          key={index}
          title={idea.title}
          description={idea.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default IdeaCardList;
