
import React from 'react';
import FeatureCard from './FeatureCard';
import {
  Rocket,
  BarChart4,
  BookOpen,
  Code,
  Image,
  LayoutDashboard,
  Lightbulb,
  MessagesSquare,
  Search,
  Mic
} from 'lucide-react';

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: "Idea Generation",
      description: "Overcome creative blocks with AI-assisted brainstorming that sparks innovative concepts.",
      icon: Lightbulb,
      to: "/features/idea-generation"
    },
    {
      title: "Personality Engine",
      description: "Create content with consistent tone, style, and voice that reflects your brand's unique personality.",
      icon: MessagesSquare,
      to: "/features/personality-engine"
    },
    {
      title: "SEO Analyzer",
      description: "Optimize your content for search engines with AI-driven insights and recommendations.",
      icon: Search,
      to: "/features/seo-analyzer"
    },
    {
      title: "Content Summarizer",
      description: "Quickly condense lengthy articles and documents into concise summaries for efficient information consumption.",
      icon: BookOpen,
      to: "/features/content-summarizer"
    },
    {
      title: "Code Generator",
      description: "Automate code creation with AI that understands your specifications and generates clean, functional code.",
      icon: Code,
      to: "/features/code-generator"
    },
    {
      title: "Image Enhancer",
      description: "Improve the quality of your images with AI-powered enhancement tools that sharpen details and reduce noise.",
      icon: Image,
      to: "/features/image-enhancer"
    },
    {
      title: "AI Assistant",
      description: "Your personal AI assistant is here to help you with any task.",
      icon: Rocket,
      to: "/features/ai-assistant"
    },
    {
      title: "Data Analysis",
      description: "Analyze your data with AI-powered insights and recommendations.",
      icon: BarChart4,
      to: "/features/data-analysis"
    },
    {
      title: "Voice Assistant",
      description: "Interact naturally with SireIQ through voice commands. Ask questions, get insights, and accomplish tasks using just your voice.",
      icon: Mic,
      to: "/features/voice-assistant"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          to={feature.to}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
