
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Lock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CoreFunctionalityProps {
  onDemoRequest: () => void;
}

const CoreFunctionality: React.FC<CoreFunctionalityProps> = ({ onDemoRequest }) => {
  const coreFunctionality = [
    {
      icon: Users,
      title: "Team Management",
      description: "Centralized controls and permissions for your entire creative team.",
      path: "/enterprise/team-management"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Advanced security features including SSO, audit logs, and role-based access.",
      path: "/features/enterprise-security"
    },
    {
      icon: Database,
      title: "Custom Training",
      description: "Train SireIQ on your brand assets and content for perfectly aligned outputs.",
      path: "/enterprise/custom-training"
    }
  ];

  return (
    <section className="py-16 bg-sireiq-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-gradient">Enterprise-Grade AI</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coreFunctionality.map((item, index) => (
            <Link to={item.path} key={index} className="group">
              <Card className="bg-transparent h-full border border-sireiq-accent/30 hover:border-sireiq-cyan/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-sireiq-accent/20 p-3 rounded-lg w-fit mb-4 text-sireiq-cyan group-hover:bg-sireiq-cyan/30 transition-all">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-sireiq-cyan transition-colors">{item.title}</h3>
                  <p className="text-sireiq-light/70 mb-4 flex-1">{item.description}</p>
                  <div className="flex justify-end">
                    <Button variant="outline" className="border-sireiq-accent/30 hover:bg-sireiq-accent/10">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800" 
              alt="Enterprise Team" 
              className="rounded-lg w-full object-cover h-80"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gradient">Enterprise-Grade AI</span>
            </h2>
            <p className="text-lg mb-6 text-sireiq-light/70">
              SireIQ Enterprise delivers a comprehensive solution for organizations looking to harness the power of AI for creative content at scale.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-sireiq-cyan/20 p-2 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-sireiq-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Team Management</h3>
                  <p className="text-sireiq-light/70">Centralized controls and permissions for your entire creative team</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sireiq-cyan/20 p-2 rounded-lg mr-4">
                  <Lock className="h-6 w-6 text-sireiq-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Enterprise Security</h3>
                  <p className="text-sireiq-light/70">Advanced security features including SSO, audit logs, and role-based access</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sireiq-cyan/20 p-2 rounded-lg mr-4">
                  <Database className="h-6 w-6 text-sireiq-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Custom Training</h3>
                  <p className="text-sireiq-light/70">Train SireIQ on your brand assets and content for perfectly aligned outputs</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="mt-8 bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6 py-3 h-auto"
              onClick={onDemoRequest}
            >
              Request Enterprise Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFunctionality;
