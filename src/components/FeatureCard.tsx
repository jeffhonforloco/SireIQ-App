
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, to }) => {
  return (
    <Link to={to} className="block">
      <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
        {/* Card background with gradient */}
        <div className="absolute inset-0 bg-card-gradient"></div>
        
        {/* Border effect */}
        <div className="gradient-border absolute inset-0 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Content */}
        <div className="relative p-6 md:p-8 flex flex-col h-full">
          <div className="glass-effect rounded-full p-3 w-fit mb-5 text-sireiq-cyan group-hover:scale-110 transition-transform">
            <Icon className="h-7 w-7" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-sireiq-cyan transition-colors">
            {title}
          </h3>
          
          <p className="text-sireiq-light/70 group-hover:text-sireiq-light/90 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
