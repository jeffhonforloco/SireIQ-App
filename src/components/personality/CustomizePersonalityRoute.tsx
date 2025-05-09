
import React from 'react';
import { Route } from 'react-router-dom';
import CustomizePersonality from '@/pages/features/CustomizePersonality';

/**
 * This component provides the route for the CustomizePersonality page.
 * To use it, add the following to your App.tsx Routes component:
 * 
 * <Route path="/features/customize-personality" element={<CustomizePersonality />} />
 */
const CustomizePersonalityRoute = () => {
  return <Route path="/features/customize-personality" element={<CustomizePersonality />} />;
};

export default CustomizePersonalityRoute;
