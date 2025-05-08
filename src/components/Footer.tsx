
import React from 'react';
import { Link } from 'react-router-dom';
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
              <li><Link to="/features" className="text-sireiq-light/70 hover:text-sireiq-cyan">Features</Link></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Pricing</a></li>
              <li><Link to="/enterprise/integrations" className="text-sireiq-light/70 hover:text-sireiq-cyan">Integrations</Link></li>
              <li><Link to="/enterprise" className="text-sireiq-light/70 hover:text-sireiq-cyan">Enterprise</Link></li>
              <li><a href="#" className="text-sireiq-light/70 hover:text-sireiq-cyan">Case Studies</a></li>
            </ul>
          </div>

          {/* Resources links - Updated with links to new pages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/documentation" className="text-sireiq-light/70 hover:text-sireiq-cyan">Documentation</Link></li>
              <li><Link to="/api-reference" className="text-sireiq-light/70 hover:text-sireiq-cyan">API Reference</Link></li>
              <li><Link to="/blog" className="text-sireiq-light/70 hover:text-sireiq-cyan">Blog</Link></li>
              <li><Link to="/tutorials" className="text-sireiq-light/70 hover:text-sireiq-cyan">Tutorials</Link></li>
              <li><Link to="/community" className="text-sireiq-light/70 hover:text-sireiq-cyan">Community</Link></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-sireiq-light/70 hover:text-sireiq-cyan">About Us</Link></li>
              <li><Link to="/careers" className="text-sireiq-light/70 hover:text-sireiq-cyan">Careers</Link></li>
              <li><Link to="/press" className="text-sireiq-light/70 hover:text-sireiq-cyan">Press</Link></li>
              <li><Link to="/contact" className="text-sireiq-light/70 hover:text-sireiq-cyan">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-sireiq-light/70 hover:text-sireiq-cyan">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-sireiq-accent/30 flex flex-col md:flex-row justify-between items-center text-sm text-sireiq-light/50">
          <p>© {new Date().getFullYear()} SireIQ. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sireiq-cyan">Terms</a>
            <Link to="/privacy-policy" className="hover:text-sireiq-cyan">Privacy</Link>
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
