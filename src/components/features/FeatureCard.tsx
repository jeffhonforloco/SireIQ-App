
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
    <Link to={to} className="group">
      <div className="glass-effect border border-sireiq-accent/30 hover:border-sireiq-cyan/50 rounded-xl p-6 transition-all h-full">
        <div className="flex items-center mb-4">
          <div className="rounded-full p-2 bg-sireiq-cyan/20 mr-3">
            <Icon className="h-6 w-6 text-sireiq-cyan" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sireiq-light/70">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
