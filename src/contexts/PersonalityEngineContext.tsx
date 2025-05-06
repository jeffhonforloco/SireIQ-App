
import React, { createContext, useContext, useState } from 'react';

// Define the style interface
interface StyleOption {
  id: string;
  name: string;
  description: string;
  isSelected: boolean;
}

// Define the parameter interface
interface Parameter {
  name: string;
  value: number;
  range: string;
}

interface PersonalityEngineContextType {
  // Original properties
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
  
  // Additional properties needed by components
  selectedStyle: StyleOption | null;
  previewText: string;
  styles: StyleOption[];
  parameters: Parameter[];
  updateSelectedStyle: (id: string) => void;
  updateParameter: (paramName: string, value: number) => void;
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
  
  // Default values for new properties
  selectedStyle: null,
  previewText: 'This is a sample text that demonstrates how your content would sound with the selected style and parameters.',
  styles: [],
  parameters: [],
  updateSelectedStyle: () => {},
  updateParameter: () => {},
};

export const PersonalityEngineContext = createContext<PersonalityEngineContextType>(defaultContextValue);

export const PersonalityEngineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tone, setTone] = useState(defaultContextValue.tone);
  const [style, setStyle] = useState(defaultContextValue.style);
  const [formality, setFormality] = useState(defaultContextValue.formality);
  const [creativity, setCreativity] = useState(defaultContextValue.creativity);
  const [vocabulary, setVocabulary] = useState(defaultContextValue.vocabulary);
  
  // Add new state properties
  const [previewText, setPreviewText] = useState(defaultContextValue.previewText);
  const [styles, setStyles] = useState<StyleOption[]>([
    { id: 'professional', name: 'Professional', description: 'Formal and business-like tone', isSelected: true },
    { id: 'casual', name: 'Casual', description: 'Relaxed and friendly tone', isSelected: false },
    { id: 'enthusiastic', name: 'Enthusiastic', description: 'Excited and energetic tone', isSelected: false },
  ]);
  
  const [parameters, setParameters] = useState<Parameter[]>([
    { name: 'Formality', value: formality, range: 'Casual to Formal' },
    { name: 'Creativity', value: creativity, range: 'Straightforward to Creative' },
    { name: 'Vocabulary', value: vocabulary, range: 'Simple to Complex' },
  ]);
  
  // Select the style that is marked as selected
  const selectedStyle = styles.find(s => s.isSelected) || null;
  
  // Update the selected style
  const updateSelectedStyle = (id: string) => {
    const updatedStyles = styles.map(style => ({
      ...style,
      isSelected: style.id === id
    }));
    setStyles(updatedStyles);
    
    // Update preview text based on selected style
    const style = updatedStyles.find(s => s.id === id);
    if (style) {
      let newPreviewText = "This is a sample text that demonstrates how your content would sound with the ";
      newPreviewText += style.name.toLowerCase() + " style.";
      setPreviewText(newPreviewText);
    }
  };
  
  // Update a parameter value
  const updateParameter = (paramName: string, value: number) => {
    const updatedParameters = parameters.map(param => {
      if (param.name === paramName) {
        return { ...param, value };
      }
      return param;
    });
    setParameters(updatedParameters);
    
    // Also update the corresponding state value
    if (paramName === 'Formality') setFormality(value);
    if (paramName === 'Creativity') setCreativity(value);
    if (paramName === 'Vocabulary') setVocabulary(value);
  };
  
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
    selectedStyle,
    previewText,
    styles,
    parameters,
    updateSelectedStyle,
    updateParameter,
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
