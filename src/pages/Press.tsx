
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Newspaper, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Press = () => {
  const pressReleases = [
    {
      title: "SireIQ Launches Next-Generation AI Platform for Content Creators",
      date: "May 1, 2025",
      summary: "New platform combines personality engine and voice assistant to revolutionize content creation workflow."
    },
    {
      title: "SireIQ Raises $50 Million in Series B to Expand Enterprise AI Solutions",
      date: "March 15, 2025",
      summary: "Funding will accelerate development of enterprise security features and global expansion."
    },
    {
      title: "SireIQ Announces Strategic Partnership with Global Publishing Giant",
      date: "February 2, 2025",
      summary: "Partnership will bring AI-powered content tools to thousands of journalists and editors worldwide."
    },
    {
      title: "SireIQ Named to Fast Company's Most Innovative Companies List",
      date: "January 10, 2025",
      summary: "Recognition highlights breakthrough AI technology and rapid user adoption."
    }
  ];
  
  const newsArticles = [
    {
      title: "How SireIQ is Changing the Game for Content Creators",
      publisher: "TechCrunch",
      date: "April 28, 2025",
      link: "#"
    },
    {
      title: "SireIQ's Revolutionary Approach to Enterprise AI",
      publisher: "Forbes",
      date: "March 20, 2025",
      link: "#"
    },
    {
      title: "The Team Behind SireIQ's Rapid Rise",
      publisher: "Business Insider",
      date: "February 15, 2025",
      link: "#"
    },
    {
      title: "SireIQ: The AI Platform Built for Creativity",
      publisher: "Wired",
      date: "January 25, 2025",
      link: "#"
    }
  ];
  
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
            <div className="grid grid-cols-1 gap-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="bg-sireiq-accent/10 border-sireiq-accent/30 hover:bg-sireiq-accent/15 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-sm text-sireiq-cyan mb-2">{release.date}</div>
                    <h3 className="text-xl font-bold mb-3">{release.title}</h3>
                    <p className="text-sireiq-light/70 mb-4">{release.summary}</p>
                    <Button variant="link" className="p-0 text-sireiq-cyan">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Media Coverage */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10">Media Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles.map((article, index) => (
                <a 
                  href={article.link} 
                  key={index} 
                  className="block p-6 rounded-lg border border-sireiq-accent/30 hover:border-sireiq-cyan transition-colors"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-sireiq-cyan">{article.publisher}</span>
                    <span className="text-sireiq-light/50">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                  <div className="text-sm text-sireiq-light/70">Read article →</div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Company Facts */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10">Company Facts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">About SireIQ</h3>
                  <p className="text-sireiq-light/70 mb-4">
                    SireIQ is a leading AI platform for content creation and workflow optimization. 
                    Our mission is to empower creators and businesses with accessible, powerful AI tools.
                  </p>
                  <ul className="space-y-2 text-sireiq-light/70">
                    <li>• Founded in 2023</li>
                    <li>• Headquarters: San Francisco, CA</li>
                    <li>• 120+ employees globally</li>
                    <li>• Series B funded ($75M total)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Leadership</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium">Alexandra Chen</div>
                      <div className="text-sm text-sireiq-cyan">CEO & Co-founder</div>
                      <div className="text-xs text-sireiq-light/70 mt-1">Former AI Research Lead at Google</div>
                    </li>
                    <li>
                      <div className="font-medium">Michael Roberts</div>
                      <div className="text-sm text-sireiq-cyan">CTO & Co-founder</div>
                      <div className="text-xs text-sireiq-light/70 mt-1">Serial entrepreneur and AI expert</div>
                    </li>
                    <li>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-sireiq-cyan">Chief Product Officer</div>
                      <div className="text-xs text-sireiq-light/70 mt-1">Former VP of Product at Adobe</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Key Metrics</h3>
                  <ul className="space-y-4 text-sireiq-light/70">
                    <li>
                      <div className="text-2xl font-bold text-white">500,000+</div>
                      <div className="text-sm">Active users</div>
                    </li>
                    <li>
                      <div className="text-2xl font-bold text-white">200+</div>
                      <div className="text-sm">Enterprise customers</div>
                    </li>
                    <li>
                      <div className="text-2xl font-bold text-white">50M+</div>
                      <div className="text-sm">AI-generated content pieces</div>
                    </li>
                    <li>
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-sm">Customer satisfaction rate</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Media Resources */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10">Media Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4">Brand Assets</h3>
                <p className="mb-6 text-sireiq-light/70">
                  Download our logo, product screenshots, and executive photos for use in publications.
                </p>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Logo Package (.zip)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Product Screenshots (.zip)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Leadership Photos (.zip)
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
                <p className="mb-6 text-sireiq-light/70">
                  Access our style guide, company timeline, and additional materials for journalists.
                </p>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    SireIQ Brand Guidelines (.pdf)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Company Fact Sheet (.pdf)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Executive Bios (.pdf)
                  </Button>
                </div>
              </div>
            </div>
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
