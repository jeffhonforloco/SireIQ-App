
import React from 'react';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-sireiq-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <img 
                src="/lovable-uploads/207b3383-58aa-491c-8000-d56fca868602.png" 
                alt="SireIQ Logo" 
                className="h-8 w-8" 
              />
              <span className="text-xl font-display font-bold text-gradient">SireIQ</span>
            </div>
            <p className="text-sm text-sireiq-light/70 mb-4">
              Empowering creativity with artificial intelligence. Transform how you create content with our world-class AI platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">
                <Github size={18} />
              </a>
              <a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Features</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Pricing</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Integrations</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Enterprise</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Case Studies</a></li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Documentation</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">API Reference</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Blog</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Tutorials</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Community</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">About Us</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Careers</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Press</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Contact</a></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-sireiq-accent/30 flex flex-col md:flex-row justify-between items-center text-sm text-sireiq-light/50">
          <p>© {new Date().getFullYear()} SireIQ. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sireiq-cyan">Terms</a>
            <a href="#" className="hover:text-sireiq-cyan">Privacy</a>
            <a href="#" className="hover:text-sireiq-cyan">Cookies</a>
          </div>
        </div>

        {/* Powered by Vytreon */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-sm text-sireiq-light/50 mb-2">Powered by</p>
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/cede0156-a68f-404d-91b9-3e895f531627.png" 
              alt="Vytreon Logo" 
              className="h-8" 
            />
            <span className="text-white font-medium">Vytreon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
