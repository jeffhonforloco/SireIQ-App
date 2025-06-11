
import { useToast } from '@/hooks/use-toast';
import { CodeExample } from '../types';

export const useCodeActions = () => {
  const { toast } = useToast();

  const copyToClipboard = async (generatedCode: CodeExample | null) => {
    if (!generatedCode) return;
    
    try {
      await navigator.clipboard.writeText(generatedCode.code);
      toast({
        title: "📋 Copied to clipboard",
        description: "Smart code has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "❌ Copy failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive"
      });
    }
  };

  const downloadCode = (generatedCode: CodeExample | null, selectedLanguage: string) => {
    if (!generatedCode) return;
    
    const extensions: Record<string, string> = {
      javascript: 'js',
      typescript: 'ts',
      react: 'jsx',
      python: 'py',
      html: 'html',
      css: 'css',
      sql: 'sql',
      java: 'java',
      csharp: 'cs',
      go: 'go',
      rust: 'rs',
      php: 'php'
    };
    
    const extension = extensions[selectedLanguage] || 'txt';
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
    const filename = `ai-generated-code-${timestamp}.${extension}`;
    
    const blob = new Blob([generatedCode.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "💾 Download started",
      description: `Smart code saved as ${filename}`,
    });
  };

  return {
    copyToClipboard,
    downloadCode
  };
};
