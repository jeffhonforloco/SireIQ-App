
import React, { createContext, useContext, useState } from 'react';

interface PersonalityEngineContextType {
  tone: string;
  style: string;
  formality: number;
  creativity: number;
  vocabulary: number;
  setTone: (tone: string) => void;
  setStyle: (style: string) => void;
  setFormality: (value: number) => void;
  setCreativity: (value: number) => void;
  setVocabulary: (value: number) => void;
}

const defaultContextValue: PersonalityEngineContextType = {
  tone: 'friendly',
  style: 'casual',
  formality: 50,
  creativity: 70,
  vocabulary: 60,
  setTone: () => {},
  setStyle: () => {},
  setFormality: () => {},
  setCreativity: () => {},
  setVocabulary: () => {},
};

export const PersonalityEngineContext = createContext<PersonalityEngineContextType>(defaultContextValue);

export const PersonalityEngineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tone, setTone] = useState(defaultContextValue.tone);
  const [style, setStyle] = useState(defaultContextValue.style);
  const [formality, setFormality] = useState(defaultContextValue.formality);
  const [creativity, setCreativity] = useState(defaultContextValue.creativity);
  const [vocabulary, setVocabulary] = useState(defaultContextValue.vocabulary);

  const value = {
    tone,
    style,
    formality,
    creativity,
    vocabulary,
    setTone,
    setStyle,
    setFormality,
    setCreativity,
    setVocabulary,
  };

  return (
    <PersonalityEngineContext.Provider value={value}>
      {children}
    </PersonalityEngineContext.Provider>
  );
};

export const usePersonalityEngine = () => {
  const context = useContext(PersonalityEngineContext);
  if (!context) {
    throw new Error('usePersonalityEngine must be used within a PersonalityEngineProvider');
  }
  return context;
};
