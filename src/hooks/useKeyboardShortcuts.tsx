
import { useEffect } from 'react';
import { toast } from 'sonner';

type ShortcutAction = {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  description: string;
  action: () => void;
  disabled?: boolean;
};

export const useKeyboardShortcuts = (shortcuts: ShortcutAction[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in an input, textarea, etc.
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      for (const shortcut of shortcuts) {
        if (shortcut.disabled) continue;
        
        const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const ctrlMatches = shortcut.ctrlKey ? event.ctrlKey : !event.ctrlKey;
        const altMatches = shortcut.altKey ? event.altKey : !event.altKey;
        const shiftMatches = shortcut.shiftKey ? event.shiftKey : !event.shiftKey;

        if (keyMatches && ctrlMatches && altMatches && shiftMatches) {
          event.preventDefault();
          shortcut.action();
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcuts]);
};

// Helper function to format keyboard shortcut for display
export const formatShortcut = (shortcut: ShortcutAction): string => {
  const parts = [];
  if (shortcut.ctrlKey) parts.push('Ctrl');
  if (shortcut.altKey) parts.push('Alt');
  if (shortcut.shiftKey) parts.push('Shift');
  
  // Handle special keys
  let key = shortcut.key;
  if (key === 'ArrowUp') key = '↑';
  if (key === 'ArrowDown') key = '↓';
  if (key === 'ArrowLeft') key = '←';
  if (key === 'ArrowRight') key = '→';
  if (key === ' ') key = 'Space';
  
  parts.push(key.length === 1 ? key.toUpperCase() : key);
  
  return parts.join(' + ');
};
