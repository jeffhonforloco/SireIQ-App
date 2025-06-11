
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { Enhancement } from './types';

interface QuickPresetsProps {
  enhancementType: string;
  onPresetSelect: (preset: string) => void;
}

const QuickPresets: React.FC<QuickPresetsProps> = ({ enhancementType, onPresetSelect }) => {
  const presets = [
    { id: 'portrait', label: 'Portrait', icon: '👤' },
    { id: 'landscape', label: 'Landscape', icon: '🏔️' },
    { id: 'vivid', label: 'Vivid', icon: '🌈' },
    { id: 'bw', label: 'B&W', icon: '⚫' },
    { id: 'vintage', label: 'Vintage', icon: '📷' },
    { id: 'auto', label: 'Auto', icon: '✨' }
  ];

  return (
    <Card className="glass-effect border border-sireiq-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Filter className="h-5 w-5 text-sireiq-cyan mr-2" />
          Quick Presets
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <Button
              key={preset.id}
              variant={enhancementType === preset.id ? "default" : "outline"}
              size="sm"
              onClick={() => onPresetSelect(preset.id)}
              className="text-xs"
            >
              <span className="mr-1">{preset.icon}</span>
              {preset.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickPresets;
