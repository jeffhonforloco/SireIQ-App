
import React, { useState } from 'react';
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
  
  // Function to sort items by views
  const sortByViews = () => {
    const sorted = [...items].sort((a, b) => b.views - a.views);
    setItems(sorted);
  };

  return (
    <div className="bg-sireiq-darker rounded-lg p-4 h-full">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-sm font-medium">{title}</h4>
        <button 
          onClick={sortByViews}
          className="text-xs text-sireiq-light/70 hover:text-sireiq-cyan"
        >
          Sort
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
              className="border-sireiq-accent/10 hover:bg-sireiq-accent/5"
            >
              <TableCell className="font-medium truncate max-w-[150px]">
                {item.title}
              </TableCell>
              <TableCell className="text-right">
                {item.views.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                {item.change > 0 ? (
                  <ChevronUp className="h-4 w-4 text-green-400 inline-block" />
                ) : item.change < 0 ? (
                  <ChevronDown className="h-4 w-4 text-red-400 inline-block" />
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
