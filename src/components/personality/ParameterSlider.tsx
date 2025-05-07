
import React from 'react';
import { Slider } from "@/components/ui/slider";

interface ParameterSliderProps {
  name: string;
  range: string;
  value: number;
  onChange: (value: number) => void;
}

const ParameterSlider: React.FC<ParameterSliderProps> = ({
  name,
  range,
  value,
  onChange
}) => {
  const handleValueChange = (values: number[]) => {
    onChange(values[0]);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-sireiq-light/50 text-sm">{range}</span>
      </div>
      <Slider
        defaultValue={[value]}
        max={100}
        step={1}
        onValueChange={handleValueChange}
        className="h-2"
      />
    </div>
  );
};

export default ParameterSlider;
