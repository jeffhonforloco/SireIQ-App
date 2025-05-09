
import React from 'react';
import { usePersonalityEngine } from '@/contexts/PersonalityEngineContext';
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

interface AdvancedSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdvancedSettingsDialog: React.FC<AdvancedSettingsDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const { 
    parameters, 
    updateParameter,
    selectedStyle
  } = usePersonalityEngine();

  // Additional advanced parameters
  const advancedParameters = [
    { name: "Detail Level", value: 65, range: "Concise to Detailed" },
    { name: "Technical Depth", value: 70, range: "Beginner to Expert" },
    { name: "Elaboration", value: 55, range: "Brief to Thorough" },
  ];

  const [advancedValues, setAdvancedValues] = React.useState<{[key: string]: number}>({
    "Detail Level": 65,
    "Technical Depth": 70,
    "Elaboration": 55,
  });

  // Handle value changes for advanced parameters
  const handleAdvancedValueChange = (name: string, value: number) => {
    setAdvancedValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save changes
  const handleSave = () => {
    // Here you would typically save to API
    toast.success("Advanced settings saved successfully");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-sireiq-darker border border-sireiq-accent/30 text-sireiq-light max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-sireiq-light">
            Advanced Personality Settings
          </DialogTitle>
          <DialogDescription className="text-sireiq-light/70">
            Fine-tune additional parameters for {selectedStyle?.name || "Professional"} style.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Standard parameters preview */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-sireiq-cyan">Current Settings</h3>
            <div className="space-y-4">
              {parameters.map((param) => (
                <div key={param.name} className="flex justify-between items-center">
                  <span>{param.name}</span>
                  <span className="text-sireiq-light/60">{param.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Advanced parameters */}
          <div>
            <h3 className="text-sm font-medium mb-3 text-sireiq-cyan">Advanced Parameters</h3>
            <div className="space-y-5">
              {advancedParameters.map((param) => (
                <div key={param.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{param.name}</span>
                    <span className="text-sireiq-light/50 text-sm">{param.range}</span>
                  </div>
                  <Slider
                    defaultValue={[param.value]}
                    max={100}
                    step={1}
                    onValueChange={(values) => handleAdvancedValueChange(param.name, values[0])}
                    className="h-2"
                  />
                  <div className="flex justify-end">
                    <span className="text-xs text-sireiq-light/60">{advancedValues[param.name]}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="border-sireiq-accent/30"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedSettingsDialog;
