
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Globe, Code, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>About Us | SireIQ</title>
        <meta name="description" content="Learn about SireIQ - our mission, vision, and the team behind our AI platform." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About SireIQ</h1>
            <p className="text-xl max-w-3xl mx-auto text-sireiq-light/70">
              We're building the next generation of AI tools to empower creators, businesses, and developers.
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-4">
                SireIQ is on a mission to democratize artificial intelligence and make it accessible, 
                powerful, and easy to use for everyone. We believe AI should be a tool that enhances 
                human creativity rather than replacing it.
              </p>
              <p className="text-lg leading-relaxed">
                Our platform is designed to work alongside you, understanding your unique needs and 
                helping you achieve your goals more efficiently than ever before.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed mb-4">
                We envision a world where AI becomes an invisible yet powerful ally in every creative 
                and business process. Where complex tasks are simplified, where insights are uncovered 
                faster, and where innovation is accelerated.
              </p>
              <p className="text-lg leading-relaxed">
                SireIQ aims to be at the forefront of this transformation, continuously pushing the 
                boundaries of what AI can achieve.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Human-Centered</h3>
                  <p className="text-center text-sireiq-light/70">
                    We put people first in everything we do. Our AI is designed to enhance human capabilities, not replace them.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Code className="h-12 w-12 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Technical Excellence</h3>
                  <p className="text-center text-sireiq-light/70">
                    We're committed to building the most advanced, reliable, and efficient AI systems possible.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Globe className="h-12 w-12 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Global Impact</h3>
                  <p className="text-center text-sireiq-light/70">
                    We strive to create technology that solves real problems and makes a positive difference in the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Team */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Leadership Role 1 */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-sireiq-accent to-sireiq-cyan/30 flex items-center justify-center overflow-hidden">
                  <Users className="h-24 w-24 text-sireiq-light/40" />
                </div>
                <h3 className="text-xl font-bold mb-1">Chief Executive Officer</h3>
                <p className="text-sireiq-cyan mb-3">Leadership</p>
              </div>
              
              {/* Leadership Role 2 */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-sireiq-accent to-sireiq-cyan/30 flex items-center justify-center overflow-hidden">
                  <Users className="h-24 w-24 text-sireiq-light/40" />
                </div>
                <h3 className="text-xl font-bold mb-1">Chief Technology Officer</h3>
                <p className="text-sireiq-cyan mb-3">Leadership</p>
              </div>
              
              {/* Leadership Role 3 */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-sireiq-accent to-sireiq-cyan/30 flex items-center justify-center overflow-hidden">
                  <Users className="h-24 w-24 text-sireiq-light/40" />
                </div>
                <h3 className="text-xl font-bold mb-1">Chief Product Officer</h3>
                <p className="text-sireiq-cyan mb-3">Leadership</p>
              </div>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              SireIQ began in 2023 when a group of AI researchers and product designers came together with a shared 
              frustration: despite the incredible advances in artificial intelligence, most tools remained 
              inaccessible to everyday users and businesses.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We set out to build something different - an AI platform that was not only powerful but also 
              intuitive and adaptable to different workflows. After months of development and testing with 
              early users, SireIQ was born.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Today, we're a growing team passionate about pushing the boundaries of what's possible with AI. 
              We're backed by leading venture capital firms who believe in our vision of making advanced AI 
              accessible to everyone.
            </p>
            <p className="text-lg leading-relaxed">
              But this is just the beginning. We're constantly innovating, learning, and improving our platform 
              to help our users achieve more than they ever thought possible.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
