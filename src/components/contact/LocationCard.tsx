
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

interface LocationCardProps {
  region: string;
  description: string;
  location: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ region, description, location }) => {
  return (
    <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Globe className="h-5 w-5 text-sireiq-cyan mr-2" />
          <h3 className="text-lg font-bold">{region}</h3>
        </div>
        <p className="text-sireiq-light/70 mb-2">{description}</p>
        <p className="text-sm text-sireiq-light/70">
          {location}
        </p>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
