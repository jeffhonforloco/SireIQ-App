
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Keyboard } from 'lucide-react';
import { formatShortcut } from '@/hooks/useKeyboardShortcuts';

export type ShortcutCategory = {
  name: string;
  shortcuts: {
    key: string;
    ctrlKey?: boolean;
    altKey?: boolean;
    shiftKey?: boolean;
    description: string;
  }[];
};

interface KeyboardShortcutsDialogProps {
  categories: ShortcutCategory[];
}

const KeyboardShortcutsDialog = ({ categories }: KeyboardShortcutsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-9 w-9 p-0 text-sireiq-light/70 hover:bg-sireiq-accent/10"
          title="Keyboard Shortcuts"
        >
          <Keyboard className="h-5 w-5" />
          <span className="sr-only">Keyboard Shortcuts</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl bg-sireiq-darker border-sireiq-accent/30 text-sireiq-light">
        <DialogHeader>
          <DialogTitle className="text-xl">Keyboard Shortcuts</DialogTitle>
          <DialogDescription className="text-sireiq-light/70">
            Increase your productivity with these keyboard shortcuts
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 my-2">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="font-medium text-sireiq-cyan mb-2">{category.name}</h3>
              <div className="space-y-1.5">
                {category.shortcuts.map((shortcut, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-1.5"
                  >
                    <span className="text-sm">{shortcut.description}</span>
                    <kbd className="px-2 py-1 text-xs bg-sireiq-accent/20 border border-sireiq-accent/30 rounded">
                      {formatShortcut(shortcut)}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs text-sireiq-light/50 mt-4">
          Press <kbd className="px-1 bg-sireiq-accent/20 border border-sireiq-accent/30 rounded">?</kbd> anywhere to open this dialog
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KeyboardShortcutsDialog;
