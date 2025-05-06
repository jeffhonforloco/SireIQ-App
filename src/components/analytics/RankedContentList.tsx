
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

interface ContentItem {
  title: string;
  views: number;
  change: number; // positive for increase, negative for decrease, 0 for no change
}

interface RankedContentListProps {
  initialItems: ContentItem[];
  title: string;
}

const RankedContentList = ({ initialItems, title }: RankedContentListProps) => {
  const [items, setItems] = useState<ContentItem[]>(initialItems);
  const [sortOrder, setSortOrder] = useState<'views' | 'trending'>('views');
  
  // Simulate real-time content ranking updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Create a copy of the current items
      const newItems = [...items];
      
      // Randomly update 1-2 items
      const numItemsToUpdate = Math.floor(Math.random() * 2) + 1;
      
      for (let i = 0; i < numItemsToUpdate; i++) {
        const randomIndex = Math.floor(Math.random() * newItems.length);
        const viewChange = Math.floor(Math.random() * 200) - 50;
        
        newItems[randomIndex] = {
          ...newItems[randomIndex],
          views: Math.max(0, newItems[randomIndex].views + viewChange),
          change: viewChange > 0 ? 1 : viewChange < 0 ? -1 : 0
        };
      }
      
      // Apply current sort order
      sortItems(newItems, sortOrder);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [items, sortOrder]);
  
  // Function to sort items
  const sortItems = (itemsToSort: ContentItem[], order: 'views' | 'trending') => {
    let sorted;
    
    if (order === 'views') {
      sorted = [...itemsToSort].sort((a, b) => b.views - a.views);
    } else {
      sorted = [...itemsToSort].sort((a, b) => {
        // First by change direction (up, same, down)
        if (a.change !== b.change) return b.change - a.change;
        // Then by view count
        return b.views - a.views;
      });
    }
    
    setItems(sorted);
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'views' ? 'trending' : 'views';
    setSortOrder(newOrder);
    sortItems(items, newOrder);
  };

  return (
    <div className="bg-sireiq-darker rounded-lg p-4 h-full">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-sm font-medium">{title}</h4>
        <button 
          onClick={toggleSortOrder}
          className="text-xs text-sireiq-light/70 hover:text-sireiq-cyan transition-colors"
        >
          Sort by {sortOrder === 'views' ? 'Views' : 'Trending'}
        </button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow className="border-sireiq-accent/10">
            <TableHead className="text-sireiq-light/70">Content</TableHead>
            <TableHead className="text-right text-sireiq-light/70">Views</TableHead>
            <TableHead className="text-right text-sireiq-light/70">Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow 
              key={index} 
              className="border-sireiq-accent/10 hover:bg-sireiq-accent/5 cursor-pointer transition-colors"
            >
              <TableCell className="font-medium truncate max-w-[150px]">
                {item.title}
              </TableCell>
              <TableCell className="text-right">
                {item.views.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                {item.change > 0 ? (
                  <ChevronUp className="h-4 w-4 text-green-400 inline-block animate-bounce" />
                ) : item.change < 0 ? (
                  <ChevronDown className="h-4 w-4 text-red-400 inline-block animate-bounce" />
                ) : (
                  <Minus className="h-4 w-4 text-sireiq-light/50 inline-block" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RankedContentList;
