
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Database, Globe, Settings, CheckCircle } from 'lucide-react';

const ResourcesTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Knowledge Sources',
            icon: Database,
            description: 'Connect and manage your data sources',
            items: [
              { name: 'Company Wiki', type: 'Document Repository', status: 'Connected' },
              { name: 'Product Documentation', type: 'API', status: 'Connected' },
              { name: 'Customer Support Tickets', type: 'Database', status: 'Connected' }
            ]
          },
          {
            title: 'Global Deployment',
            icon: Globe,
            description: 'Manage your worldwide infrastructure',
            items: [
              { name: 'North America', type: 'Region', status: 'Active' },
              { name: 'Europe', type: 'Region', status: 'Active' },
              { name: 'Asia Pacific', type: 'Region', status: 'Planned' }
            ]
          },
          {
            title: 'Custom Workflows',
            icon: Settings,
            description: 'Configure your business processes',
            items: [
              { name: 'Customer Onboarding', type: 'Process', status: 'Active' },
              { name: 'Support Ticket Triage', type: 'Process', status: 'Active' },
              { name: 'Content Approval', type: 'Process', status: 'Draft' }
            ]
          }
        ].map((resource, i) => (
          <Card key={i} className="bg-sireiq-accent/5 border-sireiq-accent/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <resource.icon className="h-5 w-5 text-sireiq-cyan" />
                <CardTitle className="text-base font-medium">{resource.title}</CardTitle>
              </div>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {resource.items.map((item, j) => (
                  <div key={j} className="p-3 border border-sireiq-accent/20 rounded-md">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <Badge className={`${
                        item.status === 'Active' || item.status === 'Connected' ? 'bg-green-500' : 
                        item.status === 'Draft' || item.status === 'Planned' ? 'bg-yellow-500' : 'bg-gray-500'
                      } text-sireiq-darker`}>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-sireiq-light/70">{item.type}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10 w-full">
                Manage {resource.title}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="text-base font-medium">Enterprise Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 border border-sireiq-accent/20 rounded-md bg-gradient-to-r from-sireiq-accent/10 to-sireiq-cyan/5">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">Enterprise Premium</h2>
                <p className="text-sireiq-light/70 mb-4">Your plan renews on June 15, 2025</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Unlimited AI agents</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">10M requests per month</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">24/7 dedicated support</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 text-center md:text-right">
                <div className="text-lg font-bold mb-2">Current Usage</div>
                <div className="text-3xl font-bold text-sireiq-cyan">6.2M / 10M</div>
                <p className="text-sm text-sireiq-light/70">requests this month</p>
                <Button className="mt-4 bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90">
                  Manage Plan
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ResourcesTab;
