/**
 * SireIQ Design System - Tailwind Extensions
 * 
 * This file contains the Tailwind extensions for the SireIQ design system.
 * It transforms our design tokens into Tailwind-compatible format.
 */

import { colors, typography, spacing, borderRadius, shadows, animations } from './design-tokens';

export const tailwindThemeExtensions = {
  extend: {
    colors: {
      sireiq: {
        dark: colors.background.dark,
        darker: colors.background.darker,
        light: colors.text.light,
        accent: colors.brand.primary,
        cyan: colors.brand.primary,
        cyan2: colors.brand.secondary,
        purple: colors.brand.accent,
      },
      // Add all neutral colors
      neutral: colors.neutral,
    },
    fontFamily: typography.fontFamily,
    fontSize: {
      // Keep existing font sizes if needed
    },
    boxShadow: {
      ...shadows,
      glow: shadows.glow,
      'glow-strong': shadows['glow-strong'],
    },
    keyframes: animations.keyframes,
    animation: animations.animation,
    zIndex: {
      // Add any custom z-indices
    },
  },
};

/**
 * Custom component class definitions
 * These can be used in the @layer components section of your CSS
 */
export const tailwindComponentClasses = {
  // Glass effect styling
  '.glass-effect': {
    '@apply': 'bg-opacity-10 backdrop-blur-lg border border-white/10 bg-white/5',
  },

  // Text gradient effect
  '.text-gradient': {
    '@apply': 'bg-clip-text text-transparent bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2',
  },

  // Glow effect
  '.glow': {
    'text-shadow': '0 0 15px rgba(60, 223, 255, 0.5)',
  },

  // Glow effect for images
  '.glow-image': {
    'filter': 'drop-shadow(0 0 8px rgba(60, 223, 255, 0.5))',
  },

  // Gradient border effect
  '.gradient-border': {
    'position': 'relative',
    '&::after': {
      'content': '""',
      'position': 'absolute',
      'inset': '0',
      'border-radius': 'inherit',
      'padding': '1px',
      'background': 'linear-gradient(90deg, #3CDFFF, #00A3C4)',
      'mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      'mask-composite': 'exclude',
      'pointer-events': 'none',
    }
  },

  // Button variants
  '.btn-primary': {
    '@apply': 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90 px-6 py-2 rounded-md transition-colors',
  },
  
  '.btn-secondary': {
    '@apply': 'border border-sireiq-cyan text-sireiq-cyan bg-transparent hover:bg-sireiq-cyan/10 px-6 py-2 rounded-md transition-colors',
  },
  
  '.btn-danger': {
    '@apply': 'bg-transparent border border-red-500/50 hover:bg-red-500/10 text-red-400 px-6 py-2 rounded-md transition-colors',
  },

  // Card variants
  '.card-base': {
    '@apply': 'bg-sireiq-darker border border-sireiq-accent/30 rounded-xl p-6',
  },
  
  '.card-interactive': {
    '@apply': 'card-base hover:border-sireiq-cyan/50 transition-all hover:shadow-[0_0_15px_rgba(60,223,255,0.15)]',
  },
  
  '.card-glass': {
    '@apply': 'glass-effect rounded-xl p-6',
  },

  // Badge variants
  '.badge': {
    '@apply': 'inline-block px-2 py-1 rounded-full text-xs font-medium',
  },
  
  '.badge-primary': {
    '@apply': 'badge bg-sireiq-accent/20 text-sireiq-cyan',
  },
  
  '.badge-secondary': {
    '@apply': 'badge bg-gray-700/50 text-gray-300',
  },

  // Chat interface specific styles
  '.chat-bubble-user': {
    '@apply': 'bg-sireiq-accent/30 rounded-2xl rounded-tr-sm p-4',
  },
  
  '.chat-bubble-assistant': {
    '@apply': 'bg-gray-800 rounded-2xl rounded-tl-sm p-4',
  },
  
  '.chat-input': {
    '@apply': 'bg-gray-800 border border-gray-700 rounded-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sireiq-accent',
  },
};
