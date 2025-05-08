
import React from 'react';
import LocationCard from './LocationCard';

interface LocationData {
  region: string;
  description: string;
  location: string;
}

const locations: LocationData[] = [
  {
    region: "North America",
    description: "Headquarters",
    location: "United States"
  },
  {
    region: "Europe",
    description: "Regional Office",
    location: "United Kingdom"
  },
  {
    region: "Asia Pacific",
    description: "APAC Operations",
    location: "Singapore"
  },
  {
    region: "Global Support",
    description: "24/7 Coverage",
    location: "International"
  }
];

const GlobalPresence: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">Our Global Presence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            region={location.region}
            description={location.description}
            location={location.location}
          />
        ))}
      </div>
    </div>
  );
};

export default GlobalPresence;
