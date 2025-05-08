
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Newspaper, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Press = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Press | SireIQ</title>
        <meta name="description" content="SireIQ press releases, media coverage, and resources for journalists." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl max-w-3xl mx-auto text-sireiq-light/70">
              News, announcements, and resources from SireIQ. For press inquiries, please contact our media team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Press Team
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Press Kit
              </Button>
            </div>
          </div>
          
          {/* Latest Press Releases */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10">Latest Press Releases</h2>
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <CardContent className="p-6 text-center">
                <p className="text-sireiq-light/70">No press releases available at this time.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Media Coverage */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10">Media Coverage</h2>
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <CardContent className="p-6 text-center">
                <p className="text-sireiq-light/70">No media coverage available at this time.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Company Facts */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10">Company Facts</h2>
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <CardContent className="p-6 text-center">
                <p className="text-sireiq-light/70">Company facts coming soon.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Media Resources */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10">Media Resources</h2>
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <CardContent className="p-6 text-center">
                <p className="text-sireiq-light/70">Media resources coming soon.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact */}
          <div className="bg-sireiq-accent/20 p-8 rounded-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <Newspaper className="h-8 w-8 text-sireiq-cyan mr-2" />
              <h2 className="text-2xl font-bold">Press Inquiries</h2>
            </div>
            <p className="max-w-2xl mx-auto mb-6 text-sireiq-light/70">
              For interviews, additional information, or to be added to our press release distribution list, 
              please contact our media relations team.
            </p>
            <div className="mb-6">
              <p className="font-bold">Media Contact:</p>
              <p className="text-sireiq-cyan">press@sireiq.com</p>
            </div>
            <Button>Contact Press Team</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Press;
