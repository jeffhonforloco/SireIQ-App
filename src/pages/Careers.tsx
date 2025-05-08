
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Shield, Mail } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Eligible)",
      type: "Full-Time"
    },
    {
      title: "Product Manager, AI Platform",
      department: "Product",
      location: "Remote (US)",
      type: "Full-Time"
    },
    {
      title: "UX Researcher",
      department: "Design",
      location: "New York, NY",
      type: "Full-Time"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-Time"
    },
    {
      title: "Marketing Director",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Full-Time"
    }
  ];

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Careers | SireIQ</title>
        <meta name="description" content="Join the SireIQ team and help shape the future of AI. Explore our open positions." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto text-sireiq-light/70">
              Help us build the future of AI and make a global impact with your skills and passion.
            </p>
          </div>
          
          {/* Why Join Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Why Join SireIQ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex">
                <div className="mr-6 mt-1">
                  <div className="bg-sireiq-accent/20 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Meaningful Work</h3>
                  <p className="text-sireiq-light/70">
                    Build products that genuinely improve how people work and create. Our AI platform helps 
                    thousands of businesses and creators achieve their goals more efficiently.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6 mt-1">
                  <div className="bg-sireiq-accent/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Exceptional Team</h3>
                  <p className="text-sireiq-light/70">
                    Work alongside industry experts in AI, product design, and engineering. We value diverse 
                    perspectives and foster a collaborative culture where everyone can thrive.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6 mt-1">
                  <div className="bg-sireiq-accent/20 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Benefits</h3>
                  <p className="text-sireiq-light/70">
                    Competitive salary, equity options, healthcare coverage, flexible PTO, home office stipend, 
                    and continued learning opportunities. We invest in our team's wellbeing.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6 mt-1">
                  <div className="bg-sireiq-accent/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Remote-First Culture</h3>
                  <p className="text-sireiq-light/70">
                    We embrace flexible work arrangements and have team members across the globe. We focus on 
                    results and trust you to work where you're most productive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Open Positions */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 gap-4">
              {openPositions.map((position, index) => (
                <Card key={index} className="bg-sireiq-accent/10 border-sireiq-accent/30 hover:border-sireiq-cyan transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-6">
                          <span className="text-sireiq-light/70">{position.department}</span>
                          <span className="hidden sm:block text-sireiq-light/50">•</span>
                          <span className="text-sireiq-light/70">{position.location}</span>
                          <span className="hidden sm:block text-sireiq-light/50">•</span>
                          <span className="text-sireiq-light/70">{position.type}</span>
                        </div>
                      </div>
                      <Button className="mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-6">Don't see a position that matches your skills?</p>
              <Button variant="outline" className="text-sireiq-cyan border-sireiq-cyan">
                Submit an Open Application
              </Button>
            </div>
          </div>
          
          {/* Culture */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  At SireIQ, we've built a culture that values innovation, diversity, and work-life balance. 
                  We believe that the best ideas come from teams where everyone feels empowered to contribute 
                  and where different perspectives are welcomed.
                </p>
                <p className="text-lg leading-relaxed">
                  We work in small, autonomous teams that move quickly and have the freedom to experiment. 
                  We celebrate successes together and learn from failures without blame. Transparency is 
                  key - from our leadership team to our newest hire, we share information openly and often.
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Professional growth is a priority. We offer learning stipends, regular internal workshops, 
                  and encourage team members to attend conferences and share their knowledge with the broader 
                  community.
                </p>
                <p className="text-lg leading-relaxed">
                  We also know that life extends beyond work. We encourage everyone to maintain a healthy 
                  work-life balance, take time off when needed, and bring their authentic selves to work 
                  every day. Our flexible policies are designed to support you in all aspects of your life.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              We're looking for passionate, talented individuals to help us build the future of AI. 
              If you're excited about our mission, we'd love to hear from you.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg">
              View All Positions
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
