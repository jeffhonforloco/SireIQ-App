
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, ArrowRight } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';

const CodeGenerator = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Code Generator | SireIQ</title>
        <meta name="description" content="Generate clean, efficient code across multiple programming languages with SireIQ's AI-powered code generation tool." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <PageHeader 
            title="Code Generator"
            subtitle="Transform your ideas into functional code with our advanced AI code generation engine."
            icon={<Code className="h-8 w-8 text-sireiq-cyan" />}
          />
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sireiq-cyan/20 to-sireiq-accent/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 max-w-2xl w-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-sireiq-darker/70 rounded-md p-2 mr-3">
                      <Code className="h-6 w-6 text-sireiq-cyan" />
                    </div>
                    <h3 className="text-xl font-bold">Code Generator</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-sireiq-darker/80 p-3 rounded-md border border-sireiq-accent/20 font-mono text-sm overflow-x-auto">
                      <div className="text-sireiq-accent"># Generate a React component for a user profile</div>
                      <div className="text-sireiq-light/70">import React from 'react';</div>
                      <div className="text-sireiq-light/70">import &#123; User &#125; from './types';</div>
                      <div className="text-sireiq-light/70"></div>
                      <div className="text-sireiq-light/70">interface ProfileProps &#123;</div>
                      <div className="text-sireiq-light/70">  user: User;</div>
                      <div className="text-sireiq-light/70">&#125;</div>
                      <div className="text-sireiq-light/70"></div>
                      <div className="text-sireiq-light/70">const Profile = (&#123; user &#125;: ProfileProps) => &#123;</div>
                      <div className="text-sireiq-light/70">  return (</div>
                      <div className="text-sireiq-cyan">    &lt;div className="profile-container"&gt;</div>
                      <div className="text-sireiq-cyan">      &lt;img src=&#123;user.avatar&#125; alt="Profile" /&gt;</div>
                      <div className="text-sireiq-cyan">      &lt;h2&gt;&#123;user.name&#125;&lt;/h2&gt;</div>
                      <div className="text-sireiq-cyan">      &lt;p&gt;&#123;user.bio&#125;&lt;/p&gt;</div>
                      <div className="text-sireiq-cyan">    &lt;/div&gt;</div>
                      <div className="text-sireiq-light/70">  );</div>
                      <div className="text-sireiq-light/70">&#125;</div>
                      <div className="text-sireiq-light/70"></div>
                      <div className="text-sireiq-light/70">export default Profile;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-effect rounded-2xl p-8 border border-sireiq-accent/30 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Transform Ideas Into Working Code</h2>
            <p className="text-lg mb-8">
              Our AI code generator helps developers of all skill levels create clean, efficient code across multiple programming languages. 
              From simple functions to complex applications, SireIQ can generate code based on natural language descriptions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Multi-Language Support</h3>
                <p>Generate code in JavaScript, Python, TypeScript, Java, C#, Go, Ruby, PHP, and more.</p>
              </div>
              
              <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Framework Integration</h3>
                <p>Create components for React, Angular, Vue, and other popular frameworks with best practices built in.</p>
              </div>
              
              <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Documentation Generation</h3>
                <p>Automatically create comprehensive documentation for your code with examples and explanations.</p>
              </div>
              
              <div className="bg-sireiq-darker p-6 rounded-lg border border-sireiq-accent/20">
                <h3 className="text-xl font-semibold mb-3 text-sireiq-cyan">Code Optimization</h3>
                <p>Generate efficient, optimized code that follows modern development standards and best practices.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                Start Generating Code <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default CodeGenerator;
