
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, to }) => {
  return (
    <Link 
      to={to} 
      className="group block transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 rounded-xl"
    >
      <div className="glass-effect border border-brand-accent/30 hover:border-brand-primary/50 rounded-xl p-6 transition-all h-full cursor-pointer">
        <div className="flex items-center mb-4">
          <div className="rounded-full p-2 bg-brand-primary/20 mr-3">
            <Icon className="h-6 w-6 text-brand-primary" />
          </div>
          <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">{title}</h3>
        </div>
        <p className="text-text-secondary group-hover:text-text-primary transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
