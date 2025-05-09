
import { useNavigate } from 'react-router-dom';
import { useKeyboardShortcuts, ShortcutDisplay } from '@/hooks/useKeyboardShortcuts';
import { toast } from 'sonner';
import { useRole } from '@/contexts/RoleContext';

// Define shortcut data to share with the dialog component
export const getShortcutCategories = () => {
  return [
    {
      name: "Navigation",
      shortcuts: [
        { key: "h", description: "Go to home page" },
        { key: "g", description: "Go to get started" },
        { key: "c", description: "Go to contact page" },
        { key: "p", description: "Go to pricing" },
        { key: "/", description: "Focus search", ctrlKey: true }
      ]
    },
    {
      name: "Chat",
      shortcuts: [
        { key: "n", description: "New chat", ctrlKey: true },
        { key: "ArrowUp", description: "Previous message", altKey: true },
        { key: "ArrowDown", description: "Next message", altKey: true },
        { key: "v", description: "Toggle voice input", ctrlKey: true }
      ]
    },
    {
      name: "General",
      shortcuts: [
        { key: "?", description: "Show keyboard shortcuts" },
        { key: "Escape", description: "Close dialogs/modals" },
        { key: "r", description: "Refresh data", ctrlKey: true },
        { key: "d", description: "Toggle dark mode", ctrlKey: true, shiftKey: true }
      ]
    }
  ];
};

const AppKeyboardShortcuts = () => {
  const navigate = useNavigate();
  const { role } = useRole();

  const shortcuts = [
    {
      key: '?',
      description: 'Show keyboard shortcuts dialog',
      action: () => {
        // Find the keyboard shortcuts button and click it
        const button = document.querySelector('[title="Keyboard Shortcuts"]') as HTMLButtonElement;
        if (button) button.click();
      }
    },
    {
      key: 'h',
      description: 'Go to home page',
      action: () => navigate('/')
    },
    {
      key: 'g',
      description: 'Go to get started',
      action: () => navigate('/get-started')
    },
    {
      key: 'c',
      description: 'Go to contact page',
      action: () => navigate('/contact')
    },
    {
      key: 'p',
      description: 'Go to pricing',
      action: () => navigate('/pricing')
    },
    {
      key: 'n',
      ctrlKey: true,
      description: 'New chat',
      action: () => {
        // Dispatch custom event for new chat
        window.dispatchEvent(new CustomEvent('new-chat-created'));
        toast.info('Starting a new chat');
      }
    },
    {
      key: '/',
      ctrlKey: true,
      description: 'Focus search',
      action: () => {
        const searchInput = document.querySelector('input[placeholder*="search" i]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
          toast.info('Search focused');
        }
      }
    }
  ];

  useKeyboardShortcuts(shortcuts);

  // This component doesn't render anything, it just adds the keyboard shortcuts
  return null;
};

export default AppKeyboardShortcuts;
