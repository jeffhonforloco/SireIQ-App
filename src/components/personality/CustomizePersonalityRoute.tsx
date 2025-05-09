
import React from 'react';
import { Route } from 'react-router-dom';
import CustomizePersonality from '@/pages/features/CustomizePersonality';

/**
 * This component provides the route for the CustomizePersonality page.
 * The route has been added to App.tsx:
 * <Route path="/features/customize-personality" element={<CustomizePersonality />} />
 */
const CustomizePersonalityRoute = () => {
  return <Route path="/features/customize-personality" element={<CustomizePersonality />} />;
};

export default CustomizePersonalityRoute;
