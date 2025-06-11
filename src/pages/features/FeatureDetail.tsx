
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureDetail = () => {
  const { featureId } = useParams();
  
  // Convert kebab-case to title case
  const formatTitle = (str: string) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = featureId ? formatTitle(featureId) : 'Feature';

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Helmet>
        <title>{title} | SireIQ Features</title>
        <meta name="description" content={`Learn more about ${title} feature in SireIQ.`} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/features" 
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Features
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{title}</span>
            </h1>
            
            <div className="card-glass p-8">
              <p className="text-xl text-text-secondary mb-8">
                This feature is currently under development. Check back soon for more details!
              </p>
              
              <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Coming Soon</h3>
                <p className="text-text-secondary">
                  We're working hard to bring you the best {title.toLowerCase()} experience. 
                  Stay tuned for updates and new features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeatureDetail;
