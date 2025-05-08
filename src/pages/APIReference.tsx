
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, ChevronRight, Link as LinkIcon } from 'lucide-react';

const APIReference: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Reference | SireIQ</title>
        <meta name="description" content="Complete reference documentation for the SireIQ API." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sireiq-cyan to-purple-500 bg-clip-text text-transparent">API Reference</h1>
            <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto">
              Comprehensive documentation for the SireIQ API. Find endpoints, parameters, response formats, and code samples.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-4 sticky top-24">
                <h3 className="font-medium text-lg mb-4 pb-2 border-b border-sireiq-accent/30">API Sections</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#authentication" className="text-sireiq-cyan hover:text-sireiq-cyan/80">Authentication</a>
                  </li>
                  <li>
                    <a href="#endpoints" className="text-sireiq-cyan hover:text-sireiq-cyan/80">Endpoints</a>
                    <ul className="ml-4 mt-2 space-y-2 text-sm">
                      <li><a href="#content-generation" className="hover:text-sireiq-cyan">Content Generation</a></li>
                      <li><a href="#personality-engine" className="hover:text-sireiq-cyan">Personality Engine</a></li>
                      <li><a href="#voice-assistant" className="hover:text-sireiq-cyan">Voice Assistant</a></li>
                      <li><a href="#analytics" className="hover:text-sireiq-cyan">Analytics</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#rate-limiting" className="text-sireiq-cyan hover:text-sireiq-cyan/80">Rate Limiting</a>
                  </li>
                  <li>
                    <a href="#error-handling" className="text-sireiq-cyan hover:text-sireiq-cyan/80">Error Handling</a>
                  </li>
                  <li>
                    <a href="#webhooks" className="text-sireiq-cyan hover:text-sireiq-cyan/80">Webhooks</a>
                  </li>
                  <li>
                    <a href="#sdks" className="text-sireiq-cyan hover:text-sireiq-cyan/80">SDKs & Libraries</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Authentication Section */}
              <section id="authentication" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Authentication</h2>
                <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 mb-4">
                  <p className="mb-4">
                    The SireIQ API uses API keys for authentication. You can manage your API keys in the 
                    <a href="#" className="text-sireiq-cyan mx-1 hover:text-sireiq-cyan/80">developer dashboard</a>.
                  </p>
                  
                  <h4 className="font-medium mb-2">API Key Authentication</h4>
                  <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
                    <pre><code>{`curl -X POST https://api.sireiq.com/v1/content/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "Generate a creative story about AI"}'`}</code></pre>
                  </div>
                  
                  <div className="flex items-center bg-blue-900/20 border border-blue-500/30 rounded-md p-4">
                    <Code size={20} className="text-blue-400 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      Never share your API keys or commit them to version control. Use environment variables or secret management systems to store your keys securely.
                    </p>
                  </div>
                </div>
              </section>

              {/* Endpoints Section */}
              <section id="endpoints" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Endpoints</h2>
                
                <div id="content-generation" className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 mb-4">
                  <h3 className="text-xl font-bold mb-3">Content Generation</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">POST</span>
                        <code className="text-sireiq-cyan">/v1/content/generate</code>
                      </div>
                      <a href="#" className="text-xs text-sireiq-cyan flex items-center hover:text-sireiq-cyan/80">
                        <LinkIcon size={14} className="mr-1" />
                        Try in playground
                      </a>
                    </div>
                    <p className="mt-2 text-sm text-sireiq-light/70">Generate AI-powered content based on a prompt.</p>
                    
                    <div className="mt-3 space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Request Body</h4>
                        <div className="bg-gray-900 rounded-md p-3 overflow-x-auto">
                          <pre><code>{JSON.stringify({
                            "prompt": "Generate a creative story about AI",
                            "max_tokens": 500,
                            "temperature": 0.7
                          }, null, 2)}</code></pre>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-1">Response</h4>
                        <div className="bg-gray-900 rounded-md p-3 overflow-x-auto">
                          <pre><code>{JSON.stringify({
                            "id": "gen-123abc",
                            "content": "In the year 2050, AI assistants had become common in every household...",
                            "tokens_used": 285,
                            "created_at": "2023-09-15T14:30:45Z"
                          }, null, 2)}</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* More endpoints would be listed here */}
                  <a href="#" className="text-sireiq-cyan hover:text-sireiq-cyan/80 flex items-center text-sm">
                    View all Content Generation endpoints
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
                
                {/* Similar sections for other endpoint categories */}
                <div id="personality-engine" className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 mb-4">
                  <h3 className="text-xl font-bold mb-3">Personality Engine</h3>
                  <p className="text-sireiq-light/70 mb-4">Endpoints for creating and managing AI personalities.</p>
                  <a href="#" className="text-sireiq-cyan hover:text-sireiq-cyan/80 flex items-center text-sm">
                    View Personality Engine endpoints
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
                
                <div id="voice-assistant" className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 mb-4">
                  <h3 className="text-xl font-bold mb-3">Voice Assistant</h3>
                  <p className="text-sireiq-light/70 mb-4">Endpoints for text-to-speech and speech-to-text operations.</p>
                  <a href="#" className="text-sireiq-cyan hover:text-sireiq-cyan/80 flex items-center text-sm">
                    View Voice Assistant endpoints
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
                
                <div id="analytics" className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Analytics</h3>
                  <p className="text-sireiq-light/70 mb-4">Endpoints for retrieving usage statistics and performance metrics.</p>
                  <a href="#" className="text-sireiq-cyan hover:text-sireiq-cyan/80 flex items-center text-sm">
                    View Analytics endpoints
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </section>

              {/* Additional sections would go here */}
              {/* Rate Limiting, Error Handling, Webhooks, SDKs */}
            </div>
          </div>
          
          {/* Getting Help */}
          <div className="bg-gradient-to-r from-sireiq-accent/20 to-sireiq-cyan/10 rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help with the API?</h2>
              <p className="text-sireiq-light/70 mb-6">
                Our developer support team is ready to assist you with any API integration challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border border-sireiq-accent/40 px-6 py-3 rounded-lg flex items-center">
                  <Code size={20} className="mr-2" />
                  Join Developer Community
                </a>
                <a href="#" className="bg-sireiq-cyan/80 hover:bg-sireiq-cyan text-black px-6 py-3 rounded-lg">
                  Contact API Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default APIReference;
