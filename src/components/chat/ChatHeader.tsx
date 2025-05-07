
import React, { useState } from 'react';
import { Menu, X, Plus, MessageSquare, Trash2, Settings, HelpCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface ChatHeaderProps {
  clearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ clearChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { icon: <MessageSquare size={16} />, label: "New chat", onClick: clearChat },
    { icon: <Trash2 size={16} />, label: "Clear conversations", onClick: clearChat },
    { icon: <Settings size={16} />, label: "Settings", onClick: () => console.log("Settings clicked") },
    { icon: <HelpCircle size={16} />, label: "Help & FAQ", onClick: () => console.log("Help clicked") },
    { icon: <LogOut size={16} />, label: "Log out", onClick: () => console.log("Log out clicked") },
  ];

  return (
    <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700/50 bg-[#0f1117] sticky top-0 z-10">
      <div className="flex items-center">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800 mr-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900 border-gray-800 p-0 max-w-[250px]">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <Logo size="md" />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsMenuOpen(false)}
                  className="h-7 w-7 text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <nav className="flex-1 overflow-y-auto py-2">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-300 hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      item.onClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
              
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-300">U</span>
                  </div>
                  <span className="text-sm font-medium text-gray-300">User</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center">
          <Logo size="md" />
        </div>
      </div>
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={clearChat}
        className="flex items-center gap-1 h-8 text-xs border-gray-700 hover:bg-gray-800 text-gray-300"
      >
        <Plus className="h-3.5 w-3.5" />
        <span>New chat</span>
      </Button>
    </div>
  );
};

export default ChatHeader;
