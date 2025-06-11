
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  ExternalLink,
  BarChart2,
  Target,
  Globe
} from 'lucide-react';

interface SEOAnalysisData {
  url: string;
  keywords: string[];
  score: number;
  issues: string[];
  improvements: string[];
  timestamp: string;
}

interface SEOAnalysisResultsProps {
  data: SEOAnalysisData;
  onNewAnalysis: () => void;
}

const SEOAnalysisResults: React.FC<SEOAnalysisResultsProps> = ({ data, onNewAnalysis }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Improvement';
  };

  const handleSEOAgentProRedirect = () => {
    const encodedUrl = encodeURIComponent(data.url);
    window.open(`https://www.seoagentpro.com?url=${encodedUrl}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <Card className="bg-card-gradient border border-brand-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-brand-primary" />
              SEO Analysis Results
            </span>
            <Button variant="outline" onClick={onNewAnalysis} size="sm">
              New Analysis
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Globe className="h-4 w-4 text-text-secondary" />
                <span className="text-sm text-text-secondary">Analyzing:</span>
              </div>
              <p className="font-medium">{data.url}</p>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${getScoreColor(data.score)}`}>
                {data.score}
              </div>
              <div className="text-sm text-text-secondary">
                {getScoreLabel(data.score)}
              </div>
            </div>
          </div>
          
          <Progress value={data.score} className="mb-4" />
          
          {data.keywords.length > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-text-secondary" />
              <span className="text-sm text-text-secondary">Target Keywords:</span>
            </div>
          )}
          
          {data.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Issues Found */}
      <Card className="bg-card-gradient border border-brand-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-400">
            <AlertTriangle className="h-5 w-5" />
            Issues Found ({data.issues.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.issues.map((issue, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{issue}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Improvement Suggestions */}
      <Card className="bg-card-gradient border border-brand-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-400">
            <TrendingUp className="h-5 w-5" />
            Improvement Suggestions ({data.improvements.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.improvements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{improvement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA for SEO Agent Pro */}
      <Card className="bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 border border-brand-primary/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">Want More Detailed Analysis?</h3>
            <p className="text-text-secondary">
              Get comprehensive SEO audits, competitor analysis, keyword research, and actionable recommendations with SEO Agent Pro.
            </p>
            <Button 
              onClick={handleSEOAgentProRedirect}
              className="btn-primary"
              size="lg"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Analyze with SEO Agent Pro
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOAnalysisResults;
