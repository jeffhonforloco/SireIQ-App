
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, FileText, Search, Upload, RefreshCw, Layers, Filter, FileSearch } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import CTASection from '@/components/CTASection';

const PrivateKnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Private Knowledge Base | SireIQ Enterprise</title>
        <meta name="description" content="Train AI on your company's private data for more relevant and brand-aligned outputs with SireIQ's secure knowledge base." />
      </Helmet>
      
      <ParticleBackground />
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <div className="glass-effect inline-flex rounded-full p-3 mb-4">
              <Database className="h-8 w-8 text-sireiq-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient glow">Private Knowledge</span> Base
            </h1>
            <p className="text-xl md:text-2xl text-sireiq-light/70 max-w-3xl mx-auto">
              Train AI on your company's private data for more relevant and brand-aligned outputs.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Document Integration",
                  description: "Import and process company documents and knowledge assets"
                },
                {
                  icon: Search,
                  title: "Semantic Search",
                  description: "Find exactly what you need with advanced search capabilities"
                },
                {
                  icon: RefreshCw,
                  title: "Continuous Learning",
                  description: "Knowledge base improves with use and feedback"
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
        
        {/* Knowledge base features */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect rounded-2xl p-6 border border-sireiq-accent/30">
              <div className="bg-sireiq-darker rounded-lg p-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl text-sireiq-cyan">Knowledge Base Portal</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="h-8 border-sireiq-accent/30">
                      <Upload className="h-3 w-3 mr-1" />
                      <span className="text-xs">Import</span>
                    </Button>
                    <Button size="sm" className="h-8 bg-sireiq-cyan text-sireiq-darker">
                      <Search className="h-3 w-3 mr-1" />
                      <span className="text-xs">Search</span>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center bg-sireiq-accent/10 rounded-lg p-2 mb-4">
                  <Search className="h-4 w-4 text-sireiq-light/50 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Search knowledge base..." 
                    className="bg-transparent border-none focus:outline-none text-sm w-full text-sireiq-light/80"
                  />
                  <Filter className="h-4 w-4 text-sireiq-light/50 ml-2" />
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "Brand Guidelines 2023", type: "PDF", size: "4.2 MB", date: "Yesterday" },
                    { name: "Product Specifications", type: "DOCX", size: "1.8 MB", date: "3 days ago" },
                    { name: "Marketing Strategy Q3", type: "PPTX", size: "8.7 MB", date: "1 week ago" },
                    { name: "Customer Personas", type: "PDF", size: "2.1 MB", date: "2 weeks ago" },
                    { name: "Competitive Analysis", type: "XLSX", size: "3.5 MB", date: "1 month ago" }
                  ].map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-sireiq-accent/5 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded bg-sireiq-accent/20 flex items-center justify-center mr-3">
                          <FileSearch className="h-4 w-4 text-sireiq-cyan" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{file.name}</p>
                          <p className="text-xs text-sireiq-light/50">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <span className="text-xs text-sireiq-light/50">{file.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Company-Specific</span> Intelligence
              </h2>
              <p className="text-lg text-sireiq-light/70 mb-8">
                Import your organization's documents, style guides, and internal knowledge to train SireIQ on your specific terminology, brand voice, and domain expertise.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Train AI on your specific company terminology and style",
                  "Connect to internal knowledge repositories and databases",
                  "Ensure AI outputs conform to your brand guidelines",
                  "Automatically process and index new documents",
                  "Built-in version control for knowledge assets"
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
                Schedule Knowledge Base Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Knowledge processing */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Knowledge</span> Processing
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-8 border border-sireiq-accent/30 mb-8">
              <h3 className="text-xl font-bold mb-6">How Your Knowledge Base Works</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: Upload,
                    title: "Document Import",
                    description: "Upload or connect to your document repositories"
                  },
                  {
                    icon: Layers,
                    title: "Processing & Analysis",
                    description: "AI analyzes and indexes content for quick retrieval"
                  },
                  {
                    icon: Search,
                    title: "Semantic Understanding",
                    description: "System understands concepts, not just keywords"
                  },
                  {
                    icon: FileText,
                    title: "Intelligent Output",
                    description: "AI applies your knowledge to generate content"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-sireiq-accent/20 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-7 w-7 text-sireiq-cyan" />
                    </div>
                    <h4 className="font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-sireiq-light/70">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-sireiq-darker rounded-lg p-6 border border-sireiq-accent/20">
                <h3 className="text-xl font-bold mb-4">Supported File Types</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "PDF Documents (.pdf)",
                    "Word Documents (.docx, .doc)",
                    "PowerPoint (.pptx, .ppt)",
                    "Excel Spreadsheets (.xlsx, .xls)",
                    "Text Files (.txt)",
                    "Markdown Files (.md)",
                    "HTML Documents (.html)",
                    "JSON Data (.json)"
                  ].map((filetype, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-sireiq-cyan mr-2"></div>
                      <span className="text-sm">{filetype}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-sireiq-darker rounded-lg p-6 border border-sireiq-accent/20">
                <h3 className="text-xl font-bold mb-4">External Connections</h3>
                <p className="text-sireiq-light/70 mb-4">
                  Connect your knowledge base to these external systems:
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "SharePoint & Office 365",
                    "Google Workspace",
                    "Confluence & Atlassian Products",
                    "Dropbox Business",
                    "Notion Workspaces"
                  ].map((connection, index) => (
                    <div key={index} className="flex items-center p-2 bg-sireiq-accent/10 rounded-lg">
                      <div className="w-4 h-4 rounded-full bg-sireiq-cyan/20 flex items-center justify-center mr-2">
                        <div className="w-1.5 h-1.5 bg-sireiq-cyan rounded-full"></div>
                      </div>
                      <span>{connection}</span>
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

export default PrivateKnowledgeBase;
