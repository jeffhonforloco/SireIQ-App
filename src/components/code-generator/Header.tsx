
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Sparkles, Eye, EyeOff } from 'lucide-react';

interface HeaderProps {
  canShowPreview: boolean;
  showPreview: boolean;
  onTogglePreview: () => void;
}

const Header: React.FC<HeaderProps> = ({ canShowPreview, showPreview, onTogglePreview }) => {
  return (
    <div className="border-b border-border-primary bg-background-glass backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-brand-primary to-brand-accent">
              <Code className="h-5 w-5 text-text-inverse" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-text-primary">AI Code Generator</h1>
              <p className="text-sm text-text-secondary">Build anything with AI</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-brand-primary/20 text-brand-primary border-brand-primary/30">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
            {canShowPreview && (
              <Button
                variant="outline"
                size="sm"
                onClick={onTogglePreview}
                className="border-border-primary hover:border-brand-primary/50 hover:bg-brand-primary/10"
              >
                {showPreview ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
