
import { CodeExample } from './types';

export const codeTemplates: Record<string, CodeExample> = {
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
