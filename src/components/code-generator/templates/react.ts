
import { CodeExample } from '../types';

export const reactTemplate: CodeExample = {
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
};
