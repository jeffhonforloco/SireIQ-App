
import React from 'react';
import { colors, typography, spacing, borderRadius, shadows } from '@/styles/design-tokens';

const DesignSystem = () => {
  return (
    <div className="container mx-auto py-8 px-4 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-gradient">SireIQ Design System</h1>
        <p className="text-lg text-sireiq-light/70 max-w-3xl">
          A comprehensive collection of design tokens, components, and guidelines to ensure consistency across the SireIQ platform.
        </p>
      </section>
      
      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Palette</h2>
        
        {/* Brand Colors */}
        <div>
          <h3 className="text-xl mb-3">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch name="Primary" color={colors.brand.primary} className="bg-sireiq-cyan" />
            <ColorSwatch name="Secondary" color={colors.brand.secondary} className="bg-sireiq-cyan2" />
            <ColorSwatch name="Accent" color={colors.brand.accent} className="bg-[#7134FA]" />
            <div className="aspect-square rounded-md p-3 flex flex-col justify-between" style={{ background: colors.brand.gradient }}>
              <span className="text-sireiq-darker font-medium">Gradient</span>
              <span className="text-xs text-sireiq-darker opacity-75">{colors.brand.gradient}</span>
            </div>
          </div>
        </div>
        
        {/* Background Colors */}
        <div>
          <h3 className="text-xl mb-3">Background Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ColorSwatch name="Dark" color={colors.background.dark} className="bg-sireiq-dark" />
            <ColorSwatch name="Darker" color={colors.background.darker} className="bg-sireiq-darker" />
            <ColorSwatch name="Light" color={colors.background.light} className="bg-sireiq-light" textClass="text-gray-800" />
          </div>
        </div>
        
        {/* Text Colors */}
        <div>
          <h3 className="text-xl mb-3">Text Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ColorSwatch name="Light" color={colors.text.light} className="bg-sireiq-light" textClass="text-gray-800" />
            <ColorSwatch name="Muted" color={colors.text.muted} className="bg-[#9EA3AE]" textClass="text-gray-800" />
            <ColorSwatch name="Dark" color={colors.text.dark} className="bg-[#1A1F2C]" />
          </div>
        </div>
        
        {/* State Colors */}
        <div>
          <h3 className="text-xl mb-3">State Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch name="Success" color={colors.state.success} className="bg-[#10B981]" />
            <ColorSwatch name="Error" color={colors.state.error} className="bg-[#EF4444]" />
            <ColorSwatch name="Warning" color={colors.state.warning} className="bg-[#F59E0B]" />
            <ColorSwatch name="Info" color={colors.state.info} className="bg-[#3B82F6]" />
          </div>
        </div>
        
        {/* Neutral Colors */}
        <div>
          <h3 className="text-xl mb-3">Neutral Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(colors.neutral).map(([key, color]) => (
              <ColorSwatch 
                key={key} 
                name={`${key}`} 
                color={color} 
                className={`bg-[${color}]`}
                textClass={parseInt(key) < 500 ? 'text-gray-800' : 'text-white'}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Typography */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Typography</h2>
        
        <div className="space-y-8">
          {/* Font Families */}
          <div>
            <h3 className="text-xl mb-4">Font Families</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-700 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Display (Montserrat)</p>
                <p className="font-display text-4xl">The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Sans (Inter)</p>
                <p className="font-sans text-lg">The quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>
          </div>
          
          {/* Type Scale */}
          <div>
            <h3 className="text-xl mb-4">Type Scale</h3>
            <div className="space-y-6 border border-gray-700 rounded-lg p-6">
              <div>
                <p className="text-sm text-gray-400">6xl - {typography.fontSize['6xl']}</p>
                <p className="text-6xl">Heading 6XL</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">5xl - {typography.fontSize['5xl']}</p>
                <p className="text-5xl">Heading 5XL</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">4xl - {typography.fontSize['4xl']}</p>
                <p className="text-4xl">Heading 4XL</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">3xl - {typography.fontSize['3xl']}</p>
                <p className="text-3xl">Heading 3XL</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">2xl - {typography.fontSize['2xl']}</p>
                <p className="text-2xl">Heading 2XL</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">xl - {typography.fontSize.xl}</p>
                <p className="text-xl">Heading XL</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">lg - {typography.fontSize.lg}</p>
                <p className="text-lg">Heading LG</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">base - {typography.fontSize.base}</p>
                <p className="text-base">Body text base</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">sm - {typography.fontSize.sm}</p>
                <p className="text-sm">Small text sm</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">xs - {typography.fontSize.xs}</p>
                <p className="text-xs">Extra small text xs</p>
              </div>
            </div>
          </div>
          
          {/* Font Weights */}
          <div>
            <h3 className="text-xl mb-4">Font Weights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(typography.fontWeight).map(([name, weight]) => (
                <div key={name} className="p-4 border border-gray-700 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">{name} - {weight}</p>
                  <p className="text-xl" style={{ fontWeight: weight }}>The quick brown fox jumps over the lazy dog.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Components</h2>
        
        {/* Buttons */}
        <div>
          <h3 className="text-xl mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-danger">Danger Button</button>
          </div>
        </div>
        
        {/* Cards */}
        <div>
          <h3 className="text-xl mb-4">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-base">
              <h4 className="text-lg font-semibold mb-2">Basic Card</h4>
              <p className="text-sireiq-light/70">Standard card component with base styling.</p>
            </div>
            <div className="card-interactive">
              <h4 className="text-lg font-semibold mb-2">Interactive Card</h4>
              <p className="text-sireiq-light/70">Card with hover effects for interactive elements.</p>
            </div>
            <div className="card-glass">
              <h4 className="text-lg font-semibold mb-2">Glass Card</h4>
              <p className="text-sireiq-light/70">Card with glassmorphism effect for modern UI.</p>
            </div>
          </div>
        </div>
        
        {/* Badges */}
        <div>
          <h3 className="text-xl mb-4">Badges</h3>
          <div className="flex flex-wrap gap-4">
            <span className="badge-primary">Primary Badge</span>
            <span className="badge-secondary">Secondary Badge</span>
          </div>
        </div>
        
        {/* Text Effects */}
        <div>
          <h3 className="text-xl mb-4">Text Effects</h3>
          <div className="space-y-4">
            <p className="text-xl text-gradient">Text Gradient Effect</p>
            <p className="text-xl glow">Text Glow Effect</p>
            <div className="p-4 border gradient-border inline-block rounded-lg">
              Gradient Border Effect
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Spacing</h2>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            {[1, 2, 4, 6, 8, 10, 12, 16, 20].map((size) => (
              <div key={size} className="flex flex-col items-center">
                <div 
                  className="bg-sireiq-accent/30 border border-sireiq-accent/50 rounded" 
                  style={{ width: `${size/4}rem`, height: `${size/4}rem` }}
                ></div>
                <span className="text-xs mt-2">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Border Radius */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Border Radius</h2>
        <div className="flex flex-wrap gap-6">
          {Object.entries(borderRadius).map(([name, size]) => {
            if (name === 'DEFAULT') return null;
            return (
              <div key={name} className="flex flex-col items-center">
                <div 
                  className="bg-sireiq-accent/30 border border-sireiq-accent/50 w-16 h-16"
                  style={{ borderRadius: size }}
                ></div>
                <span className="text-xs mt-2">{name}</span>
              </div>
            )
          })}
        </div>
      </section>
      
      {/* Shadows */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Shadows</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(shadows).map(([name, value]) => {
            if (name === 'DEFAULT') return null;
            return (
              <div key={name} className="p-6">
                <div 
                  className="bg-sireiq-darker border border-sireiq-accent/30 rounded-lg p-4 h-24 flex items-center justify-center"
                  style={{ boxShadow: value }}
                >
                  <span className="text-sm font-medium">{name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
};

// Helper component for color swatches
const ColorSwatch = ({ name, color, className, textClass = "text-white" }) => (
  <div style={{ backgroundColor: color }} className={`aspect-square rounded-md p-3 flex flex-col justify-between ${className}`}>
    <span className={`font-medium ${textClass}`}>{name}</span>
    <span className={`text-xs opacity-75 ${textClass}`}>{color}</span>
  </div>
);

export default DesignSystem;
