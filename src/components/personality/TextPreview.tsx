
import React from 'react';
import { usePersonalityEngine } from '@/contexts/PersonalityEngineContext';

const TextPreview: React.FC = () => {
  const { selectedStyle, previewText } = usePersonalityEngine();

  if (!selectedStyle) return null;

  return (
    <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
      <h3 className="text-xl font-bold mb-4">
        <span className="text-gradient">{selectedStyle.name}</span> Text Preview
      </h3>
      
      <div className="bg-sireiq-darker rounded-lg p-4 mb-4">
        <p className="text-sireiq-light/80">{previewText}</p>
      </div>
      
      <p className="text-sm text-sireiq-light/60">
        This is how your content would sound using the {selectedStyle.name.toLowerCase()} tone.
        Adjust the parameters below to fine-tune the voice.
      </p>
    </div>
  );
};

export default TextPreview;
