
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Code, Zap, Download, Sparkles } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';
import PageHeader from '@/components/trust/PageHeader';
import CodeGeneratorTool from '@/components/code-generator/CodeGeneratorTool';
import { Card, CardContent } from '@/components/ui/card';

const CodeGenerator = () => {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Helmet>
        <title>AI Code Generator | SireIQ</title>
        <meta name="description" content="Generate clean, efficient code across multiple programming languages with SireIQ's AI-powered code generation tool." />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <PageHeader 
            title="AI Code Generator"
            subtitle="Transform your ideas into functional code with our advanced AI code generation engine. Like Lovable and Bolt.new, but more powerful."
            icon={<Code className="h-8 w-8 text-brand-primary" />}
          />
        </section>
        
        {/* Code Generator Tool */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <CodeGeneratorTool />
          </div>
        </section>
        
        {/* Features and Benefits */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Advanced Code Generation Capabilities
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Our AI code generator leverages cutting-edge language models to create clean, efficient, and maintainable code across multiple programming languages and frameworks.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Generate code in 12+ programming languages",
                  "Create React components with TypeScript support",
                  "Build backend APIs and database schemas",
                  "Generate complete HTML/CSS layouts",
                  "Create Python scripts with async capabilities",
                  "Build responsive web applications"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <FeatureCard 
                icon={<Sparkles className="h-6 w-6 text-brand-primary" />}
                title="AI-Powered Generation"
                description="Uses advanced language models to understand your requirements and generate high-quality, production-ready code."
              />
              <FeatureCard 
                icon={<Zap className="h-6 w-6 text-brand-primary" />}
                title="Instant Results"
                description="Get functional code in seconds. No more starting from scratch or searching through documentation."
              />
              <FeatureCard 
                icon={<Download className="h-6 w-6 text-brand-primary" />}
                title="Export & Download"
                description="Copy to clipboard or download generated code files directly. Ready to use in your projects."
              />
            </div>
          </div>
        </section>

        {/* Code Examples Preview */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Supported Languages & Frameworks
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'JavaScript', 'TypeScript', 'React', 'Python', 
                'HTML/CSS', 'SQL', 'Java', 'C#', 
                'Go', 'Rust', 'PHP', 'Vue.js'
              ].map((lang) => (
                <Card key={lang} className="bg-card-gradient border border-brand-accent/30 hover:border-brand-primary/50 transition-all duration-300">
                  <CardContent className="pt-4 pb-4">
                    <div className="text-center">
                      <Code className="h-6 w-6 text-brand-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">{lang}</p>
                    </div>
                  </CardContent>
                </Card>
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

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => {
  return (
    <Card className="bg-card-gradient border border-brand-accent/30 hover:border-brand-primary/50 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-text-secondary">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeGenerator;
