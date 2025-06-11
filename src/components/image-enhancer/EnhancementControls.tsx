
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Settings, 
  Undo, 
  Redo, 
  Sun, 
  Contrast, 
  Palette, 
  Focus, 
  Zap, 
  RefreshCw 
} from 'lucide-react';
import { Enhancement } from './types';

interface EnhancementControlsProps {
  enhancement: Enhancement;
  isProcessing: boolean;
  historyIndex: number;
  historyLength: number;
  outputFormat: string;
  quality: number[];
  onEnhancementChange: (key: keyof Enhancement, value: number) => void;
  onUndo: () => void;
  onRedo: () => void;
  onApplyEnhancements: () => void;
  onReset: () => void;
  onOutputFormatChange: (format: string) => void;
  onQualityChange: (quality: number[]) => void;
}

const EnhancementControls: React.FC<EnhancementControlsProps> = ({
  enhancement,
  isProcessing,
  historyIndex,
  historyLength,
  outputFormat,
  quality,
  onEnhancementChange,
  onUndo,
  onRedo,
  onApplyEnhancements,
  onReset,
  onOutputFormatChange,
  onQualityChange
}) => {
  const basicControls = [
    { key: 'brightness' as keyof Enhancement, label: 'Brightness', icon: Sun, min: 50, max: 150, value: enhancement.brightness },
    { key: 'contrast' as keyof Enhancement, label: 'Contrast', icon: Contrast, min: 50, max: 150, value: enhancement.contrast },
    { key: 'saturation' as keyof Enhancement, label: 'Saturation', icon: Palette, min: 0, max: 200, value: enhancement.saturation },
    { key: 'sharpness' as keyof Enhancement, label: 'Sharpness', icon: Focus, min: 50, max: 150, value: enhancement.sharpness }
  ];

  const advancedControls = [
    { key: 'exposure' as keyof Enhancement, label: 'Exposure', min: 50, max: 150, value: enhancement.exposure },
    { key: 'highlights' as keyof Enhancement, label: 'Highlights', min: 50, max: 150, value: enhancement.highlights },
    { key: 'shadows' as keyof Enhancement, label: 'Shadows', min: 50, max: 150, value: enhancement.shadows },
    { key: 'vibrance' as keyof Enhancement, label: 'Vibrance', min: 50, max: 150, value: enhancement.vibrance },
    { key: 'clarity' as keyof Enhancement, label: 'Clarity', min: 50, max: 150, value: enhancement.clarity },
    { key: 'warmth' as keyof Enhancement, label: 'Warmth', min: -50, max: 50, value: enhancement.warmth },
    { key: 'hue' as keyof Enhancement, label: 'Hue Shift', min: -180, max: 180, value: enhancement.hue },
    { key: 'gamma' as keyof Enhancement, label: 'Gamma', min: 50, max: 150, value: enhancement.gamma }
  ];

  return (
    <Card className="glass-effect border border-sireiq-accent/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 text-sireiq-cyan mr-2" />
            Fine Controls
          </CardTitle>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={onUndo}
              disabled={historyIndex <= 0}
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onRedo}
              disabled={historyIndex >= historyLength - 1}
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 max-h-96 overflow-y-auto">
        
        {/* Basic Controls */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-sireiq-cyan">Basic Adjustments</h4>
          
          {basicControls.map(({ key, label, icon: Icon, min, max, value }) => (
            <div key={key}>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium flex items-center">
                  <Icon className="h-4 w-4 mr-1" />
                  {label}
                </label>
                <span className="text-xs text-sireiq-light/70">{value}%</span>
              </div>
              <Slider
                value={[value]}
                onValueChange={(values) => onEnhancementChange(key, values[0])}
                min={min}
                max={max}
                step={1}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Advanced Controls */}
        <div className="space-y-4 pt-4 border-t border-sireiq-accent/20">
          <h4 className="text-sm font-semibold text-sireiq-cyan">Advanced Adjustments</h4>
          
          {advancedControls.map(({ key, label, min, max, value }) => (
            <div key={key}>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">{label}</label>
                <span className="text-xs text-sireiq-light/70">
                  {key === 'hue' ? `${value}°` : key === 'warmth' ? `${value > 0 ? '+' : ''}${value}` : `${value}%`}
                </span>
              </div>
              <Slider
                value={[value]}
                onValueChange={(values) => onEnhancementChange(key, values[0])}
                min={min}
                max={max}
                step={1}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Output Settings */}
        <div className="pt-4 border-t border-sireiq-accent/20">
          <h4 className="text-sm font-semibold text-sireiq-cyan mb-4">Output Settings</h4>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Format</label>
              <Select value={outputFormat} onValueChange={onOutputFormatChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG (Lossless)</SelectItem>
                  <SelectItem value="jpeg">JPEG (Smaller size)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {outputFormat === 'jpeg' && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Quality</label>
                  <span className="text-xs text-sireiq-light/70">{quality[0]}%</span>
                </div>
                <Slider
                  value={quality}
                  onValueChange={onQualityChange}
                  min={50}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button 
            onClick={onApplyEnhancements}
            disabled={isProcessing}
            className="flex-1 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Enhance
              </>
            )}
          </Button>
          <Button 
            variant="outline" 
            onClick={onReset}
            className="border-sireiq-accent/50"
          >
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancementControls;
