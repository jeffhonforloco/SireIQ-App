
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ClipboardCopyProps {
  code: string;
  language?: string;
  className?: string;
}

const ClipboardCopy: React.FC<ClipboardCopyProps> = ({ 
  code, 
  language = 'javascript',
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Copy failed",
        description: "Please try again",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute right-2 top-2">
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md bg-sireiq-accent/50 hover:bg-sireiq-accent/80 focus:outline-none focus:ring-2 focus:ring-sireiq-cyan transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-sireiq-light/70" />
          )}
        </button>
      </div>
      <pre className="p-4 rounded-lg bg-sireiq-darker border border-sireiq-accent/30 overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code}</code>
      </pre>
    </div>
  );
};

export default ClipboardCopy;
