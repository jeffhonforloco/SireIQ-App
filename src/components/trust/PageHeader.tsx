
import React from 'react';

const PageHeader = () => {
  return (
    <header className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-6">
        <span className="text-sireiq-light inline-block">Trust & </span>
        <span className="text-gradient inline-block">Compliance</span>
      </h1>
      <p className="text-xl text-sireiq-light/70 max-w-2xl mx-auto">
        Secure, transparent, and compliant. Your data and creative assets are protected with enterprise-grade security.
      </p>
    </header>
  );
};

export default PageHeader;
