
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light flex flex-col items-center justify-center px-4">
      <Helmet>
        <title>Page Not Found | SireIQ</title>
        <meta name="description" content="The page you're looking for couldn't be found. Return to SireIQ to continue exploring AI-powered creative tools." />
      </Helmet>
      
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold mb-2 text-gradient glow">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        
        <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20 mb-8">
          <p className="text-sireiq-light/70 mb-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-sireiq-light/50">
            <HelpCircle className="h-4 w-4" />
            <span>Path: {location.pathname}</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Button 
            asChild
            className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker hover:opacity-90"
          >
            <Link to="/">Return to Home</Link>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            className="border border-sireiq-accent/30 hover:bg-sireiq-accent/10"
          >
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
