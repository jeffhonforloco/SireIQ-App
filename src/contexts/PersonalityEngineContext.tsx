
import React, { createContext, useState, useContext, ReactNode } from 'react';

type VoiceParameter = {
  name: string;
  range: string;
  value: number;
};

type PersonalityStyle = {
  id: string;
  name: string;
  isSelected: boolean;
  description: string;
  exampleText: string;
};

interface PersonalityEngineContextType {
  selectedStyle: PersonalityStyle | null;
  styles: PersonalityStyle[];
  parameters: VoiceParameter[];
  updateSelectedStyle: (id: string) => void;
  updateParameter: (paramName: string, value: number) => void;
  previewText: string;
}

const PersonalityEngineContext = createContext<PersonalityEngineContextType | undefined>(undefined);

export const personalityStyles: PersonalityStyle[] = [
  {
    id: "professional",
    name: "Professional",
    isSelected: false,
    description: "Formal, business-oriented communication style",
    exampleText: "We're delighted to introduce our new cloud storage solution, designed to enhance productivity and security for enterprises of all sizes."
  },
  {
    id: "friendly",
    name: "Friendly",
    isSelected: true,
    description: "Warm, approachable communication style",
    exampleText: "Hey there! Super excited to show you our awesome new cloud storage that makes keeping your stuff safe a total breeze. You're gonna love it!"
  },
  {
    id: "quirky",
    name: "Quirky",
    isSelected: false,
    description: "Playful, unique communication style",
    exampleText: "Drumroll please! 🥁 Our cloud storage just got a magical upgrade - it's like having a digital superhero guard your precious files. Neat-o!"
  },
  {
    id: "technical",
    name: "Technical",
    isSelected: false,
    description: "Detail-oriented, precise communication style",
    exampleText: "Our next-gen distributed cloud architecture implements AES-256 encryption with multi-region failover, ensuring 99.99% uptime and zero data loss for mission-critical operations."
  },
  {
    id: "inspirational",
    name: "Inspirational",
    isSelected: false,
    description: "Motivational, uplifting communication style",
    exampleText: "Imagine a world where your data isn't just stored—it's empowered. Our cloud solution doesn't just safeguard your journey; it elevates it to new heights of possibility."
  },
  {
    id: "minimalist",
    name: "Minimalist",
    isSelected: false,
    description: "Concise, efficient communication style",
    exampleText: "New cloud storage. Secure. Fast. Reliable. Try now."
  }
];

const defaultParameters: VoiceParameter[] = [
  {
    name: "Formality",
    range: "Casual to Formal",
    value: 70
  },
  {
    name: "Technical Level",
    range: "Simple to Complex",
    value: 45
  },
  {
    name: "Emotion",
    range: "Neutral to Expressive",
    value: 60
  },
  {
    name: "Conciseness",
    range: "Detailed to Brief",
    value: 30
  }
];

export const PersonalityEngineProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [styles, setStyles] = useState<PersonalityStyle[]>(personalityStyles);
  const [parameters, setParameters] = useState<VoiceParameter[]>(defaultParameters);
  const [selectedStyle, setSelectedStyle] = useState<PersonalityStyle | null>(
    styles.find(style => style.isSelected) || styles[0]
  );
  
  const updateSelectedStyle = (id: string) => {
    const updatedStyles = styles.map(style => ({
      ...style,
      isSelected: style.id === id
    }));
    
    setStyles(updatedStyles);
    setSelectedStyle(updatedStyles.find(style => style.id === id) || null);
  };
  
  const updateParameter = (paramName: string, value: number) => {
    const updatedParams = parameters.map(param => 
      param.name === paramName ? { ...param, value } : param
    );
    setParameters(updatedParams);
  };
  
  const value = {
    selectedStyle,
    styles,
    parameters,
    updateSelectedStyle,
    updateParameter,
    previewText: selectedStyle?.exampleText || ""
  };
  
  return (
    <PersonalityEngineContext.Provider value={value}>
      {children}
    </PersonalityEngineContext.Provider>
  );
};

export const usePersonalityEngine = () => {
  const context = useContext(PersonalityEngineContext);
  if (context === undefined) {
    throw new Error('usePersonalityEngine must be used within a PersonalityEngineProvider');
  }
  return context;
};
