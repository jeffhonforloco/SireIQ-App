
import React, { useState } from 'react';
import MemoryBrowser from '@/plugins/memory';
import { 
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "@/components/ui/menubar";
import { Database } from 'lucide-react';

const MemoryMenuItem: React.FC = () => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="cursor-pointer px-4 py-2 text-sireiq-light hover:text-sireiq-cyan focus:text-sireiq-cyan data-[state=open]:text-sireiq-cyan border-0 border-none">
        <div className="flex items-center gap-1">
          <Database className="h-4 w-4 text-sireiq-cyan" />
          <span>Memory</span>
        </div>
      </MenubarTrigger>
      <MenubarContent className="bg-black border-gray-800 w-[400px] p-0">
        <div className="w-full p-0">
          <MemoryBrowser inMenu={true} />
        </div>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default MemoryMenuItem;
