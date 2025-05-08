
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="glass-effect rounded-xl border border-sireiq-accent/30 p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h3 className="text-gradient text-2xl font-bold mb-4">Case Study: Global Brand</h3>
            <p className="text-sireiq-light/70 mb-4">
              A leading global brand trained SireIQ on their extensive content library, 
              style guides, and brand assets. The results were transformative:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sireiq-cyan flex-shrink-0 mt-0.5" />
                <span>85% reduction in content editing time</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sireiq-cyan flex-shrink-0 mt-0.5" />
                <span>97% brand alignment score on AI-generated content</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-sireiq-cyan flex-shrink-0 mt-0.5" />
                <span>3x increase in content production capacity</span>
              </li>
            </ul>
            <Button 
              variant="outline" 
              className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
            >
              Read Full Case Study
            </Button>
          </div>
          <div className="md:w-1/2 bg-sireiq-darker p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-1">Before Custom Training</h4>
                <p className="p-3 bg-sireiq-accent/5 rounded-lg text-sm text-sireiq-light/70">
                  "We're excited to announce our new product! It's really great and you should definitely buy it."
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1">After Custom Training</h4>
                <p className="p-3 bg-sireiq-cyan/10 rounded-lg text-sm">
                  "We're thrilled to introduce our groundbreaking innovation – designed with our signature attention to detail and backed by our industry-leading guarantee. Experience the difference today."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
