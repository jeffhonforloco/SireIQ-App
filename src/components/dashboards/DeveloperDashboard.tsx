
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Terminal, Rocket, Github, Database, Server } from 'lucide-react';

const DeveloperDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
          <h2 className="text-xl font-semibold mb-4">Integrations</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
              <Github className="w-4 h-4 text-sireiq-cyan" />
              <span>GitHub</span>
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
              <Database className="w-4 h-4 text-sireiq-cyan" />
              <span>Firebase</span>
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
              <Server className="w-4 h-4 text-sireiq-cyan" />
              <span>S3</span>
            </Button>
          </div>
        </div>
        
        <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
          <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
          <div className="space-y-3">
            {['API Gateway', 'Custom Agent', 'React Dashboard'].map((project, i) => (
              <div key={i} className="p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
                <h3 className="font-medium">{project}</h3>
                <p className="text-xs text-sireiq-light/70">Last edited {i+1}d ago</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="lg:col-span-9">
        <div className="bg-sireiq-darker rounded-xl border border-sireiq-accent/20 overflow-hidden">
          <Tabs defaultValue="terminal" className="w-full">
            <div className="border-b border-sireiq-accent/20">
              <TabsList className="bg-sireiq-dark">
                <TabsTrigger value="terminal" className="data-[state=active]:bg-sireiq-accent/20">
                  <Terminal className="w-4 h-4 mr-2" />
                  Terminal
                </TabsTrigger>
                <TabsTrigger value="editor" className="data-[state=active]:bg-sireiq-accent/20">
                  <Code className="w-4 h-4 mr-2" />
                  Code Editor
                </TabsTrigger>
                <TabsTrigger value="api" className="data-[state=active]:bg-sireiq-accent/20">
                  <Server className="w-4 h-4 mr-2" />
                  API Playground
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="terminal" className="p-0 m-0">
              <div className="p-6 bg-sireiq-dark min-h-[500px]">
                <div className="mb-4 text-sireiq-light/70">
                  <p className="font-mono text-sm mb-1">// Welcome to SireIQ Developer Terminal</p>
                  <p className="font-mono text-sm">// What would you like to build today?</p>
                </div>
                
                <div className="mb-4 space-y-4">
                  <div className="font-mono text-sm text-sireiq-light/70">
                    <span className="text-sireiq-cyan">$</span> help
                  </div>
                  <div className="font-mono text-sm ml-4">
                    <p>Available commands:</p>
                    <p className="ml-4">- create-agent: Start agent creation wizard</p>
                    <p className="ml-4">- api-docs: Open API documentation</p>
                    <p className="ml-4">- generate: Generate code from description</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-sireiq-cyan font-mono text-sm mr-2">$</span>
                  <input 
                    type="text" 
                    className="flex-1 bg-transparent border-none outline-none font-mono text-sm"
                    placeholder="Type a command or ask a question..."
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="editor" className="p-0 m-0">
              <div className="bg-sireiq-dark min-h-[500px] p-6">
                <div className="p-4 bg-sireiq-darker rounded-md mb-4 font-mono text-sm overflow-auto">
                  <pre className="text-sireiq-light/90">
{`import React from 'react';

const CustomAgent = () => {
  // Your agent configuration goes here
  const agentConfig = {
    name: 'CodeHelper',
    model: 'gpt-4',
    tools: ['code-interpreter', 'web-search']
  };

  return (
    <div className="agent-container">
      {/* Agent UI components */}
    </div>
  );
};

export default CustomAgent;`}
                  </pre>
                </div>
                
                <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
                  <Code className="w-4 h-4 mr-2" />
                  Run Code
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="p-0 m-0">
              <div className="bg-sireiq-dark min-h-[500px] p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Request</h3>
                    <div className="p-4 bg-sireiq-darker rounded-md font-mono text-sm h-[400px] overflow-auto">
                      <pre className="text-sireiq-light/90">
{`{
  "endpoint": "/api/agents/create",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  "body": {
    "name": "CodeAssistant",
    "description": "Helps with coding tasks",
    "model": "gpt-4-turbo",
    "tools": ["code-interpreter"]
  }
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Response</h3>
                    <div className="p-4 bg-sireiq-darker rounded-md font-mono text-sm h-[400px] overflow-auto">
                      <pre className="text-sireiq-light/90">
{`{
  "success": true,
  "agent": {
    "id": "agt_12345",
    "name": "CodeAssistant",
    "description": "Helps with coding tasks",
    "model": "gpt-4-turbo",
    "created_at": "2023-05-03T15:30:00Z",
    "status": "active"
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker mt-4">
                  <Server className="w-4 h-4 mr-2" />
                  Send Request
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-6">
          <Button className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker gap-2">
            <Rocket className="w-4 h-4" />
            Build an Agent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
