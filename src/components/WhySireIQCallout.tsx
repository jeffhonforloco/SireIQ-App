
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import InfoTooltip from '@/components/InfoTooltip';

interface WhySireIQCalloutProps {
  className?: string;
}

const WhySireIQCallout: React.FC<WhySireIQCalloutProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-sireiq-darker to-sireiq-accent/40 rounded-xl p-6 ${className}`}>
      <div className="flex items-start">
        <div className="bg-sireiq-cyan/20 rounded-full p-2 mr-4">
          <TrendingUp className="h-6 w-6 text-sireiq-cyan" />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center">
            Why Choose SireIQ?
            <InfoTooltip 
              content="Based on Forrester Research" 
              className="ml-2" 
            />
          </h3>
          <p className="text-sireiq-light/90 mb-4">
            <span className="font-bold text-sireiq-cyan">67%</span> of AI leaders plan to increase investment in generative AI over the coming year.
          </p>
          <Link 
            to="/enterprise" 
            className="text-sm text-sireiq-cyan hover:underline flex items-center"
          >
            Read the full Forrester survey
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhySireIQCallout;
