
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
    <Link to={to} className="group block">
      <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full cursor-pointer">
        <div className="flex items-center mb-4">
          <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
            <Icon className="h-6 w-6 text-sireiq-cyan" />
          </div>
          <h3 className="text-xl font-bold group-hover:text-sireiq-cyan transition-colors">{title}</h3>
        </div>
        <p className="text-sireiq-light/70 group-hover:text-sireiq-light/90 transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
