
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Sparkles } from 'lucide-react';
import { InsightData } from '../types';

interface AIInsightsPanelProps {
  insights: InsightData[];
}

const AIInsightsPanel: React.FC<AIInsightsPanelProps> = ({ insights }) => {
  if (insights.length === 0) return null;

  return (
    <Card className="glass-effect border border-sireiq-cyan/30 bg-gradient-to-r from-sireiq-cyan/5 to-sireiq-cyan2/5">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 h-5 w-5 text-sireiq-cyan" />
          AI-Powered Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div key={index} className="bg-sireiq-darker/50 p-4 rounded-lg border border-sireiq-accent/20">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sireiq-cyan">{insight.title}</h4>
                <div className={`px-2 py-1 rounded text-xs ${
                  insight.impact === 'high' ? 'bg-red-500/20 text-red-300' :
                  insight.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  {insight.impact} impact
                </div>
              </div>
              <p className="text-sm text-sireiq-light/70 mb-2">{insight.description}</p>
              <div className="flex items-center">
                <Sparkles className="h-3 w-3 text-sireiq-cyan mr-1" />
                <span className="text-xs text-sireiq-cyan">{insight.confidence}% confidence</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightsPanel;
