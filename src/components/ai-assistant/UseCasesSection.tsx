
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  PenTool, 
  BarChart3, 
  Code, 
  Search, 
  Lightbulb, 
  Users,
  MessageSquare,
  Zap
} from 'lucide-react';

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Generate blog posts, social media content, marketing copy, and creative writing with AI assistance.",
      examples: ["Blog articles", "Social media posts", "Email campaigns", "Product descriptions"]
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Analyze complex datasets, generate insights, and create visualizations from your business data.",
      examples: ["Sales reports", "Customer insights", "Market trends", "Performance metrics"]
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Write, debug, and optimize code in multiple programming languages with intelligent suggestions.",
      examples: ["React components", "API endpoints", "Database queries", "Unit tests"]
    },
    {
      icon: Search,
      title: "Research Assistant",
      description: "Gather information, summarize documents, and compile research from multiple sources.",
      examples: ["Market research", "Competitor analysis", "Literature reviews", "Fact checking"]
    },
    {
      icon: Lightbulb,
      title: "Creative Brainstorming",
      description: "Generate ideas, solve problems creatively, and explore innovative solutions.",
      examples: ["Product ideas", "Campaign concepts", "Problem solving", "Innovation workshops"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Facilitate meetings, generate summaries, and help coordinate team activities.",
      examples: ["Meeting notes", "Project planning", "Task delegation", "Team updates"]
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Draft responses, handle inquiries, and provide consistent customer service.",
      examples: ["Response templates", "FAQ generation", "Issue resolution", "Chat automation"]
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and optimize business processes with AI automation.",
      examples: ["Email automation", "Data entry", "Report generation", "Process optimization"]
    }
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Real-World</span> Use Cases
        </h2>
        <p className="text-xl text-sireiq-light/70 max-w-3xl mx-auto">
          Discover how SireIQ's AI assistant can transform your daily workflows and boost productivity
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index} className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <useCase.icon className="h-6 w-6 text-sireiq-cyan" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
              <p className="text-sm text-sireiq-light/70 mb-4">{useCase.description}</p>
              
              <div className="space-y-1">
                <p className="text-xs font-medium text-sireiq-cyan mb-2">Examples:</p>
                {useCase.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center text-xs text-sireiq-light/60">
                    <div className="w-1 h-1 rounded-full bg-sireiq-cyan/60 mr-2"></div>
                    {example}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
