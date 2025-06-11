
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Code, Copy, Download, Play, Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

interface CodeExample {
  language: string;
  code: string;
  description: string;
}

const CodeGeneratorTool = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [generatedCode, setGeneratedCode] = useState<CodeExample | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'react', label: 'React Component' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'sql', label: 'SQL' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'php', label: 'PHP' }
  ];

  const codeTemplates: Record<string, CodeExample> = {
    javascript: {
      language: 'javascript',
      description: 'A utility function with error handling and validation',
      code: `// Utility function for data processing
function processData(data, options = {}) {
  // Input validation
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid data provided');
  }

  const { 
    sortBy = 'name', 
    filterBy = null, 
    transform = false 
  } = options;

  let result = Array.isArray(data) ? [...data] : [data];

  // Apply filtering
  if (filterBy && typeof filterBy === 'function') {
    result = result.filter(filterBy);
  }

  // Apply sorting
  if (sortBy) {
    result.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });
  }

  // Apply transformation
  if (transform && typeof transform === 'function') {
    result = result.map(transform);
  }

  return result;
}

// Example usage
const sampleData = [
  { name: 'Alice', age: 30, role: 'developer' },
  { name: 'Bob', age: 25, role: 'designer' },
  { name: 'Charlie', age: 35, role: 'manager' }
];

const processed = processData(sampleData, {
  sortBy: 'age',
  filterBy: (item) => item.age >= 30,
  transform: (item) => ({ ...item, senior: item.age >= 30 })
});

console.log(processed);`
    },
    react: {
      language: 'jsx',
      description: 'A modern React component with hooks and TypeScript',
      code: `import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Trash2 } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

interface ItemManagerProps {
  initialItems?: Item[];
  onItemsChange?: (items: Item[]) => void;
}

const ItemManager: React.FC<ItemManagerProps> = ({ 
  initialItems = [], 
  onItemsChange 
}) => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [newItemName, setNewItemName] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addItem = useCallback(() => {
    if (!newItemName.trim()) return;
    
    const newItem: Item = {
      id: crypto.randomUUID(),
      name: newItemName.trim(),
      category: 'general',
      status: 'active',
      createdAt: new Date()
    };
    
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setNewItemName('');
    onItemsChange?.(updatedItems);
  }, [items, newItemName, onItemsChange]);

  const removeItem = useCallback((id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    onItemsChange?.(updatedItems);
  }, [items, onItemsChange]);

  useEffect(() => {
    console.log(\`Total items: \${items.length}\`);
  }, [items]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Item Manager
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
        </div>
        
        <div className="flex gap-2">
          <Input
            placeholder="Add new item..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            className="flex-1"
          />
          <Button onClick={addItem} size="sm">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
        
        <div className="space-y-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">{item.name}</span>
                <Badge 
                  variant={item.status === 'active' ? 'default' : 'secondary'}
                >
                  {item.status}
                </Badge>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          {filteredItems.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No items found
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemManager;`
    },
    python: {
      language: 'python',
      description: 'A Python class with async functionality and error handling',
      code: `import asyncio
import aiohttp
import json
from typing import List, Dict, Optional, Any
from dataclasses import dataclass
from datetime import datetime

@dataclass
class APIResponse:
    status: int
    data: Any
    timestamp: datetime
    
class DataProcessor:
    """Advanced data processor with async capabilities."""
    
    def __init__(self, base_url: str, timeout: int = 30):
        self.base_url = base_url
        self.timeout = timeout
        self.session: Optional[aiohttp.ClientSession] = None
    
    async def __aenter__(self):
        """Async context manager entry."""
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=self.timeout)
        )
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        """Async context manager exit."""
        if self.session:
            await self.session.close()
    
    async def fetch_data(self, endpoint: str, params: Dict[str, Any] = None) -> APIResponse:
        """Fetch data from API endpoint with error handling."""
        if not self.session:
            raise RuntimeError("Session not initialized. Use async context manager.")
        
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        
        try:
            async with self.session.get(url, params=params) as response:
                data = await response.json()
                
                return APIResponse(
                    status=response.status,
                    data=data,
                    timestamp=datetime.now()
                )
        
        except aiohttp.ClientError as e:
            print(f"Client error: {e}")
            raise
        except json.JSONDecodeError as e:
            print(f"JSON decode error: {e}")
            raise
    
    async def process_batch(self, endpoints: List[str]) -> List[APIResponse]:
        """Process multiple endpoints concurrently."""
        tasks = [self.fetch_data(endpoint) for endpoint in endpoints]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Filter out exceptions and return successful responses
        successful_results = [
            result for result in results 
            if isinstance(result, APIResponse)
        ]
        
        return successful_results
    
    def transform_data(self, data: List[Dict], transform_func=None) -> List[Dict]:
        """Transform data using provided function or default processing."""
        if transform_func:
            return [transform_func(item) for item in data]
        
        # Default transformation
        return [
            {
                **item,
                'processed_at': datetime.now().isoformat(),
                'id': f"processed_{i}"
            }
            for i, item in enumerate(data)
        ]

# Usage example
async def main():
    endpoints = ['/users', '/posts', '/comments']
    
    async with DataProcessor('https://jsonplaceholder.typicode.com') as processor:
        # Fetch data from multiple endpoints
        responses = await processor.process_batch(endpoints)
        
        print(f"Successfully processed {len(responses)} endpoints")
        
        for response in responses:
            print(f"Status: {response.status}, Data length: {len(response.data)}")

# Run the async function
if __name__ == "__main__":
    asyncio.run(main())`
    }
  };

  const generateCode = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please describe what code you want to generate.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For demo purposes, use template based on language or create custom code
      let generatedExample: CodeExample;

      if (codeTemplates[selectedLanguage]) {
        generatedExample = {
          ...codeTemplates[selectedLanguage],
          description: `Generated ${selectedLanguage} code based on: "${prompt}"`
        };
      } else {
        // Generate custom code for other languages
        generatedExample = {
          language: selectedLanguage,
          description: `Generated ${selectedLanguage} code for: "${prompt}"`,
          code: generateCustomCode(selectedLanguage, prompt)
        };
      }

      setGeneratedCode(generatedExample);

      toast({
        title: "Code generated successfully!",
        description: `Generated ${selectedLanguage} code based on your prompt.`,
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "Failed to generate code. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateCustomCode = (language: string, userPrompt: string): string => {
    const templates: Record<string, string> = {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Page</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .container { max-width: 800px; margin: 0 auto; }
        .header { color: #333; border-bottom: 2px solid #eee; padding-bottom: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="header">Generated Content</h1>
        <p>This HTML was generated based on: "${userPrompt}"</p>
        <div id="content">
            <!-- Your content here -->
        </div>
    </div>
</body>
</html>`,
      css: `.generated-component {
  /* Generated CSS for: ${userPrompt} */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.generated-component h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.generated-component p {
  margin: 0;
  opacity: 0.9;
  line-height: 1.6;
}

.generated-component .button {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.generated-component .button:hover {
  background: rgba(255, 255, 255, 0.3);
}`,
      sql: `-- Generated SQL for: ${userPrompt}
-- Database schema and queries

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    status VARCHAR(20) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample queries
SELECT u.username, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY u.id, u.username
ORDER BY post_count DESC;

-- Insert sample data
INSERT INTO users (username, email) VALUES
('john_doe', 'john@example.com'),
('jane_smith', 'jane@example.com');`
    };

    return templates[language] || `// Generated ${language} code for: ${userPrompt}
// This is a placeholder implementation

function generatedFunction() {
    console.log("Generated code based on: ${userPrompt}");
    // Implementation would go here
    return "Generated result";
}`;
  };

  const copyToClipboard = async () => {
    if (!generatedCode) return;
    
    try {
      await navigator.clipboard.writeText(generatedCode.code);
      toast({
        title: "Copied to clipboard",
        description: "Code has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive"
      });
    }
  };

  const downloadCode = () => {
    if (!generatedCode) return;
    
    const extensions: Record<string, string> = {
      javascript: 'js',
      typescript: 'ts',
      react: 'jsx',
      python: 'py',
      html: 'html',
      css: 'css',
      sql: 'sql',
      java: 'java',
      csharp: 'cs',
      go: 'go',
      rust: 'rs',
      php: 'php'
    };
    
    const extension = extensions[selectedLanguage] || 'txt';
    const filename = `generated-code.${extension}`;
    
    const blob = new Blob([generatedCode.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: `Code saved as ${filename}`,
    });
  };

  const clearAll = () => {
    setPrompt('');
    setGeneratedCode(null);
  };

  return (
    <Card className="bg-card-gradient border border-brand-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-brand-primary" />
          AI Code Generator
          <Badge variant="secondary" className="ml-2">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="language-select" className="block text-sm font-medium">
              Programming Language
            </label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="code-prompt" className="block text-sm font-medium">
            Describe what you want to build
          </label>
          <Textarea 
            id="code-prompt"
            placeholder="E.g., Create a React component for user authentication, Build a Python function to process CSV files, Generate HTML for a landing page..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] resize-none bg-background/50"
          />
          <div className="text-xs text-text-secondary">
            Be specific about functionality, styling, and any special requirements.
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={generateCode}
            disabled={isGenerating || !prompt.trim()} 
            className="btn-primary flex-1"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Code...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Code
              </>
            )}
          </Button>
          
          <Button 
            variant="outline"
            onClick={clearAll}
            disabled={isGenerating}
            className="border-brand-accent/50 hover:border-brand-primary/50"
          >
            Clear
          </Button>
        </div>
        
        {generatedCode && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium flex items-center">
                  <Code className="h-5 w-5 text-brand-primary mr-2" />
                  Generated {generatedCode.language.toUpperCase()} Code
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  {generatedCode.description}
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyToClipboard}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" /> 
                  Copy
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={downloadCode}
                  className="flex items-center gap-1"
                >
                  <Download className="h-4 w-4" /> 
                  Download
                </Button>
              </div>
            </div>
            
            <div className="bg-background/50 border border-brand-accent/20 rounded-lg overflow-hidden">
              <div className="bg-background/30 px-4 py-2 border-b border-brand-accent/20 flex items-center justify-between">
                <span className="text-xs font-mono text-text-secondary">
                  {generatedCode.language}
                </span>
                <Badge variant="outline" className="text-xs">
                  {generatedCode.code.split('\n').length} lines
                </Badge>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono whitespace-pre-wrap leading-relaxed">
                  {generatedCode.code}
                </code>
              </pre>
            </div>
            
            <div className="flex justify-between text-xs text-text-secondary">
              <span>Language: {generatedCode.language}</span>
              <span>Generated: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CodeGeneratorTool;
