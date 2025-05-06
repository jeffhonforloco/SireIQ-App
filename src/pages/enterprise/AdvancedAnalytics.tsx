
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, LineChart, PieChart, UserCheck, TrendingUp, Download, Calendar, Filter, PlusCircle } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const AdvancedAnalytics = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Advanced Analytics | SireIQ Enterprise</title>
        <meta name="description" content="Comprehensive reporting on usage, performance, and ROI across your organization with SireIQ's advanced analytics." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <BarChart className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Advanced</span> Analytics
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Comprehensive reporting on usage, performance, and ROI across your organization.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: LineChart,
                  title: "Usage Metrics",
                  description: "Track AI usage patterns across teams and projects"
                },
                {
                  icon: PieChart,
                  title: "Performance Insights",
                  description: "Measure content effectiveness and engagement metrics"
                },
                {
                  icon: TrendingUp,
                  title: "ROI Analysis",
                  description: "Calculate time savings and productivity improvements"
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
        
        {/* Analytics dashboard */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Data-Driven</span> Insights
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                SireIQ's advanced analytics platform provides comprehensive insights into how AI is being used across your organization, helping you optimize workflows, measure impact, and demonstrate ROI.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Track usage patterns across departments and teams",
                  "Measure time savings compared to traditional methods",
                  "Identify top-performing content and templates",
                  "Monitor compliance with company guidelines",
                  "Generate executive-ready reports with key metrics"
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
                Schedule Analytics Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <div className="bg-sireiq-darker rounded-lg p-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl text-sireiq-cyan">Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="h-8 border-sireiq-accent/30">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="text-xs">This Month</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 border-sireiq-accent/30">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-sireiq-accent/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-sireiq-light/70">Total AI Interactions</span>
                      <span className="text-xs text-green-400">+24%</span>
                    </div>
                    <p className="text-2xl font-bold">12,645</p>
                  </div>
                  
                  <div className="bg-sireiq-accent/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-sireiq-light/70">Time Saved</span>
                      <span className="text-xs text-green-400">+36%</span>
                    </div>
                    <p className="text-2xl font-bold">347 hrs</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium">Usage by Department</h4>
                    <Button size="sm" variant="ghost" className="h-6 p-1">
                      <Filter className="h-3 w-3" />
                    </Button>
                  </div>
                  {/* Chart visualization would go here */}
                  <div className="h-40 bg-sireiq-accent/5 rounded-lg border border-sireiq-accent/10 flex items-center justify-center">
                    <p className="text-sireiq-light/50">Department usage chart visualization</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium">Top Users</h4>
                    <Button size="sm" variant="ghost" className="h-6 p-1 text-xs text-sireiq-cyan">
                      View All
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { name: "Alex Johnson", role: "Content Manager", usage: 546 },
                      { name: "Samantha Li", role: "Marketing Lead", usage: 412 },
                      { name: "David Park", role: "Creative Director", usage: 387 }
                    ].map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-sireiq-accent/5 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-sireiq-accent/30 flex items-center justify-center mr-3 text-xs">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-sireiq-light/50">{user.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{user.usage}</p>
                          <p className="text-xs text-sireiq-light/50">interactions</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Analytics features */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Analytics</span> Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/20">
              <h3 className="text-xl font-bold mb-4">User Analytics</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <UserCheck className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Adoption Tracking</p>
                    <p className="text-sm text-sireiq-light/70">Track user onboarding and platform adoption rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <LineChart className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">User Growth</p>
                    <p className="text-sm text-sireiq-light/70">Monitor user growth and activity over time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PieChart className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Role Distribution</p>
                    <p className="text-sm text-sireiq-light/70">Analyze usage by role and department</p>
                  </div>
                </div>
              </div>
              <div className="h-24 bg-sireiq-accent/5 rounded-lg"></div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/20">
              <h3 className="text-xl font-bold mb-4">Content Analytics</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <BarChart className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Content Production</p>
                    <p className="text-sm text-sireiq-light/70">Track AI-generated content volume and type</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Quality Metrics</p>
                    <p className="text-sm text-sireiq-light/70">Monitor content quality and improvement over time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PlusCircle className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Usage Patterns</p>
                    <p className="text-sm text-sireiq-light/70">Identify most popular content types and templates</p>
                  </div>
                </div>
              </div>
              <div className="h-24 bg-sireiq-accent/5 rounded-lg"></div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/20">
              <h3 className="text-xl font-bold mb-4">Business Impact</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Productivity Metrics</p>
                    <p className="text-sm text-sireiq-light/70">Calculate time saved and efficiency gains</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">ROI Analysis</p>
                    <p className="text-sm text-sireiq-light/70">Quantify business impact and return on investment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <LineChart className="h-5 w-5 text-sireiq-cyan mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Cost Comparison</p>
                    <p className="text-sm text-sireiq-light/70">Compare AI vs. traditional content creation costs</p>
                  </div>
                </div>
              </div>
              <div className="h-24 bg-sireiq-accent/5 rounded-lg"></div>
            </div>
          </div>
        </section>
        
        {/* Custom reports section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Custom</span> Reports
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-sireiq-light/70 mb-6">
                  Create custom reports tailored to your organization's specific KPIs and metrics. Schedule automated reports to be delivered to stakeholders at regular intervals.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <PieChart className="h-5 w-5 text-sireiq-cyan" />
                    </div>
                    <div>
                      <h3 className="font-medium">Executive Dashboard</h3>
                      <p className="text-sm text-sireiq-light/70">High-level metrics for leadership</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <BarChart className="h-5 w-5 text-sireiq-cyan" />
                    </div>
                    <div>
                      <h3 className="font-medium">Team Performance</h3>
                      <p className="text-sm text-sireiq-light/70">Detailed team usage and productivity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-sireiq-accent/20 flex items-center justify-center mr-3">
                      <LineChart className="h-5 w-5 text-sireiq-cyan" />
                    </div>
                    <div>
                      <h3 className="font-medium">Content Analytics</h3>
                      <p className="text-sm text-sireiq-light/70">Content generation and quality metrics</p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6 bg-sireiq-cyan text-sireiq-darker">
                  Create Custom Report
                </Button>
              </div>
              
              <div className="bg-sireiq-darker rounded-lg p-5 border border-sireiq-accent/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Scheduled Reports</h3>
                  <Button variant="outline" size="sm" className="h-8 border-sireiq-accent/30">
                    <PlusCircle className="h-3 w-3 mr-1" />
                    <span className="text-xs">New</span>
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {[
                    {
                      name: "Weekly Executive Summary",
                      schedule: "Every Monday",
                      recipients: 5
                    },
                    {
                      name: "Monthly ROI Report",
                      schedule: "1st of month",
                      recipients: 12
                    },
                    {
                      name: "Content Performance",
                      schedule: "Every Friday",
                      recipients: 8
                    },
                    {
                      name: "Quarterly Business Review",
                      schedule: "End of quarter",
                      recipients: 18
                    }
                  ].map((report, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-sireiq-accent/5 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{report.name}</p>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 text-sireiq-light/50 mr-1" />
                          <span className="text-xs text-sireiq-light/50">{report.schedule}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs">
                        <UserCheck className="h-3 w-3 mr-1 text-sireiq-light/70" />
                        <span>{report.recipients}</span>
                      </div>
                    </div>
                  ))}
                </div>
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

export default AdvancedAnalytics;
