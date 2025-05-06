
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Languages, Map, Network, Users2, FileCheck, Check, Building2 } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const GlobalDeployment = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Global Deployment | SireIQ Enterprise</title>
        <meta name="description" content="Deploy SireIQ across international teams with multi-language support and regional adaptations for global operations." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Globe className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Global</span> Deployment
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Deploy SireIQ across international teams with multi-language support and regional adaptations.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Languages,
                  title: "Multi-Language Support",
                  description: "Interface and AI outputs in multiple languages"
                },
                {
                  icon: Map,
                  title: "Regional Compliance",
                  description: "Adapt to local regulatory requirements automatically"
                },
                {
                  icon: Network,
                  title: "Global Infrastructure",
                  description: "Data centers in multiple regions for optimal performance"
                }
              ].map((feature, index) => (
                <div key={index} className="glass-effect rounded-lg p-6 border border-sireiq-accent/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-sireiq-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-sireiq-light/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Global reach */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Worldwide</span> Availability
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                SireIQ's global deployment solution ensures consistent performance and compliance for teams operating across different countries and regions.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Multi-region data centers for global reach and compliance",
                  "Interface localization in over 20 languages",
                  "AI content generation in multiple languages",
                  "Regional settings for date formats, currencies, and measurements",
                  "Compliance with local data sovereignty requirements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-sireiq-cyan/20 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Global Capabilities Overview <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="font-bold mb-6 text-xl text-center">Global Deployment Map</h3>
              
              <div className="bg-sireiq-darker rounded-lg p-4 mb-6">
                {/* World map visualization would go here in a real implementation */}
                <div className="h-64 flex items-center justify-center border border-sireiq-accent/20 rounded-lg">
                  <p className="text-sireiq-light/50">Interactive world map visualization</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sireiq-accent/5 rounded-lg p-3 border border-sireiq-accent/10">
                  <h4 className="font-medium text-sm mb-2">Data Center Regions</h4>
                  <div className="space-y-1">
                    {["North America", "Europe", "Asia Pacific", "South America"].map((region, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="h-3 w-3 text-sireiq-cyan mr-2" />
                        <span className="text-xs">{region}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-sireiq-accent/5 rounded-lg p-3 border border-sireiq-accent/10">
                  <h4 className="font-medium text-sm mb-2">Language Support</h4>
                  <div className="space-y-1">
                    {["English", "Spanish", "French", "German", "Japanese", "Chinese"].map((lang, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="h-3 w-3 text-sireiq-cyan mr-2" />
                        <span className="text-xs">{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Global team features */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Global Team</span> Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users2,
                title: "Team Regionalization",
                description: "Organize teams by geography with customized settings for each region.",
                features: [
                  "Region-specific templates",
                  "Local administrator roles",
                  "Regional usage reporting",
                  "Time zone optimized scheduling"
                ]
              },
              {
                icon: Languages,
                title: "Translation & Localization",
                description: "Built-in translation features to enable seamless cross-language collaboration.",
                features: [
                  "Real-time content translation",
                  "Language preference settings",
                  "Localized UI elements",
                  "Cultural context adaptation"
                ]
              },
              {
                icon: FileCheck,
                title: "Global Governance",
                description: "Centralized management with localized flexibility for global operations.",
                features: [
                  "Global policy controls",
                  "Regional compliance settings",
                  "Unified user management",
                  "Cross-region reporting"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 border border-sireiq-accent/20">
                <div className="mb-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-sireiq-accent/20 flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-sireiq-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-sireiq-light/70 mb-5 text-center">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.features.map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-2">
                        <Check className="h-3 w-3 text-sireiq-cyan" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Success stories */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">
              <span className="text-gradient">Global Success</span> Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  company: "Global Tech Innovations",
                  logo: Building2,
                  quote: "SireIQ's global deployment allowed us to maintain consistent brand voice across 12 countries while adapting to local markets.",
                  stats: {
                    regions: 4,
                    languages: 8,
                    teams: 24
                  }
                },
                {
                  company: "Worldwide Media Group",
                  logo: Building2,
                  quote: "We've reduced content production time by 68% while expanding to 5 new markets thanks to SireIQ's multi-language capabilities.",
                  stats: {
                    regions: 3,
                    languages: 6,
                    teams: 15
                  }
                }
              ].map((story, index) => (
                <div key={index} className="bg-sireiq-darker rounded-lg p-6 border border-sireiq-accent/20">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-sireiq-accent/20 flex items-center justify-center mr-4">
                      <story.logo className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{story.company}</h3>
                      <p className="text-xs text-sireiq-cyan">Global Enterprise Client</p>
                    </div>
                  </div>
                  
                  <p className="italic text-sireiq-light/80 mb-6">"{story.quote}"</p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-sireiq-accent/10 rounded-lg">
                      <p className="text-2xl font-bold text-sireiq-cyan">{story.stats.regions}</p>
                      <p className="text-xs text-sireiq-light/70">Regions</p>
                    </div>
                    <div className="text-center p-2 bg-sireiq-accent/10 rounded-lg">
                      <p className="text-2xl font-bold text-sireiq-cyan">{story.stats.languages}</p>
                      <p className="text-xs text-sireiq-light/70">Languages</p>
                    </div>
                    <div className="text-center p-2 bg-sireiq-accent/10 rounded-lg">
                      <p className="text-2xl font-bold text-sireiq-cyan">{story.stats.teams}</p>
                      <p className="text-xs text-sireiq-light/70">Teams</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default GlobalDeployment;
