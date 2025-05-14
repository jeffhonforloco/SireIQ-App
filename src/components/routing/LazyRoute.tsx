
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface LazyRouteProps {
  children?: React.ReactNode;
}

/**
 * A wrapper for lazy-loaded routes that shows a loading spinner
 */
const LazyRoute: React.FC<LazyRouteProps> = ({ children }) => {
  return (
    <Suspense 
      fallback={
        <div className="flex items-center justify-center min-h-[50vh]">
          <Loader2 className="h-8 w-8 text-sireiq-cyan animate-spin" />
        </div>
      }
    >
      {children || <Outlet />}
    </Suspense>
  );
};

export default LazyRoute;
