
import React from 'react';
import { Sparkles } from 'lucide-react';

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  gradient?: boolean;
  icon?: React.ReactNode;
  alignment?: 'left' | 'center';
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title = "Trust & Compliance",
  subtitle = "Secure, transparent, and compliant. Your data and creative assets are protected with enterprise-grade security.",
  gradient = true,
  icon = <Sparkles className="h-6 w-6 text-sireiq-cyan" />,
  alignment = 'center'
}) => {
  return (
    <header className={`mb-16 animate-fade-in ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <div className="inline-flex items-center justify-center bg-sireiq-accent/30 rounded-full p-3 mb-6">
        {icon}
      </div>
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4`}>
        {gradient ? (
          <>
            <span className="text-sireiq-light inline-block">{title.split(' ')[0]} </span>
            <span className="text-gradient inline-block">{title.split(' ').slice(1).join(' ')}</span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </h1>
      <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};

export default PageHeader;
