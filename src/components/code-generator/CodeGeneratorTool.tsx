import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Code, Copy, Download, Play, Loader2, Sparkles, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  const [showPreview, setShowPreview] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
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
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Item Manager</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add new item..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addItem}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">{item.name}</span>
                <span className={\`px-2 py-1 text-xs rounded-full \${item.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}\`}>
                  {item.status}
                </span>
              </div>
              
              <button
                onClick={() => removeItem(item.id)}
                className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-md focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          
          {filteredItems.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No items found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemManager;`
    },
    html: {
      language: 'html',
      description: 'A complete HTML page with modern styling',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Landing Page</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero {
            text-align: center;
            padding: 4rem 0;
            color: white;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .btn {
            display: inline-block;
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            font-weight: bold;
        }
        
        .btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
        }
        
        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .feature-card p {
            opacity: 0.9;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .container {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <section class="hero">
            <h1>Welcome to the Future</h1>
            <p>Experience the next generation of web development with our cutting-edge platform</p>
            <a href="#features" class="btn">Get Started</a>
        </section>
        
        <section id="features" class="features">
            <div class="feature-card">
                <h3>🚀 Lightning Fast</h3>
                <p>Built with performance in mind, our platform delivers blazing fast experiences that keep your users engaged.</p>
            </div>
            
            <div class="feature-card">
                <h3>🎨 Beautiful Design</h3>
                <p>Modern, clean, and responsive designs that look great on every device and screen size.</p>
            </div>
            
            <div class="feature-card">
                <h3>🔧 Easy to Use</h3>
                <p>Intuitive interface and powerful tools that make building amazing experiences simple and enjoyable.</p>
            </div>
        </section>
    </div>
    
    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Add some interactivity
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.background = 'rgba(255, 255, 255, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        });
    </script>
</body>
</html>`
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
      
      // Update preview if it's HTML/React
      if ((selectedLanguage === 'html' || selectedLanguage === 'react') && showPreview) {
        updatePreview(generatedExample.code, selectedLanguage);
      }

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

  const updatePreview = (code: string, language: string) => {
    if (!iframeRef.current) return;

    let previewContent = '';
    
    if (language === 'html') {
      previewContent = code;
    } else if (language === 'react') {
      // Create a simple HTML wrapper for React component preview
      previewContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>React Component Preview</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #f5f5f5; }
        .preview-container { max-width: 800px; margin: 0 auto; }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        ${code.replace('export default ItemManager;', '')}
        
        const App = () => {
            return React.createElement('div', { className: 'preview-container' }, 
                React.createElement(ItemManager, {
                    initialItems: [
                        { id: '1', name: 'Sample Item 1', category: 'demo', status: 'active', createdAt: new Date() },
                        { id: '2', name: 'Sample Item 2', category: 'demo', status: 'inactive', createdAt: new Date() }
                    ]
                })
            );
        };
        
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>`;
    }

    const blob = new Blob([previewContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;
  };

  const generateCustomCode = (language: string, userPrompt: string): string => {
    const templates: Record<string, string> = {
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
    if (iframeRef.current) {
      iframeRef.current.src = 'about:blank';
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
    if (!showPreview && generatedCode && (selectedLanguage === 'html' || selectedLanguage === 'react')) {
      updatePreview(generatedCode.code, selectedLanguage);
    }
  };

  const canShowPreview = selectedLanguage === 'html' || selectedLanguage === 'react';

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
          {canShowPreview && (
            <Button
              variant="outline"
              size="sm"
              onClick={togglePreview}
              className="ml-auto"
            >
              {showPreview ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
          )}
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
            <Tabs defaultValue="code" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="code">Generated Code</TabsTrigger>
                {canShowPreview && showPreview && (
                  <TabsTrigger value="preview">Live Preview</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="code" className="space-y-4">
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
              </TabsContent>
              
              {canShowPreview && showPreview && (
                <TabsContent value="preview" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium flex items-center">
                      <Play className="h-5 w-5 text-brand-primary mr-2" />
                      Live Preview
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      Real-time rendering
                    </Badge>
                  </div>
                  
                  <div className="bg-background/50 border border-brand-accent/20 rounded-lg overflow-hidden">
                    <div className="bg-background/30 px-4 py-2 border-b border-brand-accent/20">
                      <span className="text-xs text-text-secondary">
                        Interactive Preview - {generatedCode.language}
                      </span>
                    </div>
                    <div className="relative">
                      <iframe
                        ref={iframeRef}
                        className="w-full h-96 border-0"
                        title="Code Preview"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  </div>
                </TabsContent>
              )}
            </Tabs>
            
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
