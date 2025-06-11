
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
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sireiq-light/50 text-sm">{range}</span>
          <span className="text-sireiq-cyan font-medium text-sm min-w-[3rem] text-right">{value}%</span>
        </div>
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
