import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

interface TrafficSourcesPanelProps {
  initialSources: TrafficSource[];
}

const TrafficSourcesPanel = ({ initialSources }: TrafficSourcesPanelProps) => {
  const [sources, setSources] = useState<TrafficSource[]>(initialSources);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        const newSources = [...sources];
        // Randomly adjust traffic source percentages while keeping total at 100%
        const sourceToIncrease = Math.floor(Math.random() * sources.length);
        const sourceToDecrease = (sourceToIncrease + 1) % sources.length;
        const change = Math.floor(Math.random() * 3) + 1;
        
        if (newSources[sourceToDecrease].value > change + 5) {
          newSources[sourceToIncrease].value += change;
          newSources[sourceToDecrease].value -= change;
          setSources(newSources);
        }
        
        setIsUpdating(false);
      }, 500);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [sources]);

  const onPieEnter = (_, index: number) => {
    setActiveIndex(index);
  };
  
  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={`bg-sireiq-darker rounded-lg p-4 h-full ${isUpdating ? 'animate-pulse' : ''}`}>
      <h4 className="text-sm font-medium mb-3">Traffic Sources</h4>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sources}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={activeIndex !== null ? 85 : 60}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {sources.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    className={index === activeIndex ? 'filter drop-shadow-xl' : ''}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => `${value}%`}
                contentStyle={{
                  backgroundColor: '#1A1F2C',
                  borderColor: 'rgba(155, 135, 245, 0.2)',
                  borderRadius: '4px',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2">
          {sources.map((source, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>{source.name}</span>
                <span>{source.value}%</span>
              </div>
              <div className="w-full h-1 bg-sireiq-accent/20 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500 ease-in-out" 
                  style={{ 
                    width: `${source.value}%`,
                    backgroundColor: source.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficSourcesPanel;
