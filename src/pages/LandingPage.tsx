
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import ParticleBackground from '@/components/ParticleBackground';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>SireIQ | Think it. Build it. With SireIQ</title>
        <meta name="description" content="SireIQ is an advanced AI platform that helps businesses and creative professionals enhance their workflows and productivity." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Next Generation <span className="text-gradient glow">AI Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Empowering businesses and creative professionals with advanced AI solutions.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
