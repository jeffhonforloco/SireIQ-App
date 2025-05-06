
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Cpu, HardDrive, Network, Cloud, RefreshCcw, Zap, BarChart3 } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const DedicatedInfrastructure = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Dedicated Infrastructure | SireIQ Enterprise</title>
        <meta name="description" content="Dedicated cloud resources ensure maximum performance and availability for your enterprise AI needs with SireIQ's enterprise infrastructure." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Server className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Dedicated</span> Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Dedicated cloud resources ensure maximum performance and availability for your enterprise.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Cpu,
                  title: "Dedicated Resources",
                  description: "Reserved computing power for your organization's needs"
                },
                {
                  icon: Cloud,
                  title: "Private Cloud",
                  description: "Isolated environment for maximum security and compliance"
                },
                {
                  icon: RefreshCcw,
                  title: "Guaranteed Uptime",
                  description: "99.9% uptime SLA with enterprise support"
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
        
        {/* Performance metrics */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Enterprise-Grade</span> Performance
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                SireIQ's dedicated infrastructure ensures your team gets consistent, high-performance AI processing power exactly when you need it, without the bottlenecks of shared resources.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Dedicated GPU clusters for faster AI inference",
                  "Custom scaling to handle peak demand periods",
                  "Load balancing for optimal performance",
                  "Regular performance optimizations and upgrades",
                  "Priority processing for your organization's requests"
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
                Performance Benchmarks <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <h3 className="font-bold mb-6 text-xl text-center">Performance Metrics</h3>
              
              <div className="space-y-8">
                {[
                  {
                    name: "Response Time",
                    value: "54ms",
                    change: "-32%",
                    good: true,
                    percent: 88
                  },
                  {
                    name: "Throughput",
                    value: "850 req/s",
                    change: "+64%",
                    good: true,
                    percent: 92
                  },
                  {
                    name: "Availability",
                    value: "99.99%",
                    change: "+0.04%",
                    good: true,
                    percent: 99
                  }
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-medium">{metric.name}</h4>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold mr-2">{metric.value}</span>
                          <span className={`text-sm ${metric.good ? 'text-green-400' : 'text-red-400'}`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                      <div>
                        <BarChart3 className="h-6 w-6 text-sireiq-cyan" />
                      </div>
                    </div>
                    <div className="w-full h-2 bg-sireiq-accent/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-sireiq-cyan rounded-full" 
                        style={{ width: `${metric.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Infrastructure options */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Infrastructure</span> Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Standard Dedicated",
                description: "Isolated infrastructure for medium-sized teams with moderate usage patterns.",
                features: [
                  "4 dedicated GPUs",
                  "99.9% uptime SLA",
                  "Standard support response",
                  "Monthly scaling reviews"
                ],
                highlight: false
              },
              {
                title: "Enterprise Premium",
                description: "High-performance dedicated resources for large organizations with intensive AI needs.",
                features: [
                  "16+ dedicated GPUs",
                  "99.99% uptime SLA",
                  "Priority support (1hr response)",
                  "Weekly scaling reviews",
                  "Custom hardware options"
                ],
                highlight: true
              },
              {
                title: "Hybrid Solution",
                description: "Combination of cloud and on-premises deployment for specialized requirements.",
                features: [
                  "Custom resource allocation",
                  "On-premises option available",
                  "Data residency guarantees",
                  "Custom SLAs available"
                ],
                highlight: false
              }
            ].map((option, index) => (
              <div 
                key={index} 
                className={`glass-effect rounded-xl p-6 border ${option.highlight ? 'border-sireiq-cyan' : 'border-sireiq-accent/20'} ${option.highlight ? 'bg-sireiq-accent/5' : ''}`}
              >
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-sireiq-light/70 mb-6">{option.description}</p>
                
                <div className="space-y-3 mb-6">
                  {option.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full ${option.highlight ? 'bg-sireiq-cyan/30' : 'bg-sireiq-accent/30'} flex items-center justify-center mr-3`}>
                        <Zap className={`h-3 w-3 ${option.highlight ? 'text-sireiq-cyan' : 'text-sireiq-light/70'}`} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={option.highlight 
                    ? "w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker" 
                    : "w-full bg-transparent border border-sireiq-accent/30 hover:bg-sireiq-accent/10"
                  }
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </section>
        
        {/* Deployment options */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Deployment</span> Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-sireiq-darker rounded-lg p-6 border border-sireiq-accent/20">
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-sireiq-cyan mr-4" />
                  <h3 className="text-xl font-bold">Cloud Deployment</h3>
                </div>
                <p className="text-sireiq-light/70 mb-4">
                  Fully managed cloud infrastructure with dedicated resources in secure data centers around the world.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <span className="text-sm">Multiple region options</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <span className="text-sm">Automatic scaling</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <span className="text-sm">Zero maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sireiq-darker rounded-lg p-6 border border-sireiq-accent/20">
                <div className="flex items-center mb-4">
                  <HardDrive className="h-8 w-8 text-sireiq-cyan mr-4" />
                  <h3 className="text-xl font-bold">On-Premises</h3>
                </div>
                <p className="text-sireiq-light/70 mb-4">
                  Deploy SireIQ within your own data center for maximum control over your infrastructure and data.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <span className="text-sm">Complete data sovereignty</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <span className="text-sm">Integration with existing systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 bg-sireiq-cyan rounded-full"></div>
                    </div>
                    <span className="text-sm">Custom hardware configurations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default DedicatedInfrastructure;
