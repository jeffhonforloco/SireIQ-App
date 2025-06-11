
export interface Enhancement {
  brightness: number;
  contrast: number;
  saturation: number;
  sharpness: number;
  hue: number;
  gamma: number;
  vibrance: number;
  exposure: number;
  highlights: number;
  shadows: number;
  clarity: number;
  warmth: number;
}

export interface HistoryState {
  enhancement: Enhancement;
  timestamp: number;
}

export const defaultEnhancement: Enhancement = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  sharpness: 100,
  hue: 0,
  gamma: 100,
  vibrance: 100,
  exposure: 100,
  highlights: 100,
  shadows: 100,
  clarity: 100,
  warmth: 0
};
