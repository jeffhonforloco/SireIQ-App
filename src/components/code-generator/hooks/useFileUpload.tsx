
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useFileUpload = (selectedLanguage: string, setPrompt: (prompt: string) => void) => {
  const [uploadedImage, setUploadedImage] = useState<{ file: File; data: string } | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (file: File, imageData: string) => {
    setUploadedImage({ file, data: imageData });
    
    // Intelligent prompt suggestions based on file type and name
    const fileName = file.name.toLowerCase();
    
    let suggestedPrompt = '';
    
    if (fileName.includes('dashboard') || fileName.includes('admin')) {
      suggestedPrompt = `Create a modern ${selectedLanguage} dashboard based on this design. Include interactive charts, responsive layout, data tables, and smooth animations.`;
    } else if (fileName.includes('login') || fileName.includes('auth')) {
      suggestedPrompt = `Build a sleek ${selectedLanguage} authentication interface matching this design with form validation, loading states, and security best practices.`;
    } else if (fileName.includes('landing') || fileName.includes('hero')) {
      suggestedPrompt = `Generate a stunning ${selectedLanguage} landing page based on this design with hero section, call-to-action buttons, and modern animations.`;
    } else {
      suggestedPrompt = `Convert this UI design to high-quality ${selectedLanguage} code with pixel-perfect styling, responsive design, modern patterns, and interactive elements.`;
    }
    
    setPrompt(suggestedPrompt);
    
    toast({
      title: "🎨 Design uploaded successfully!",
      description: "AI has analyzed your design and suggested an intelligent prompt.",
    });
  };

  const clearUploadedImage = () => {
    setUploadedImage(null);
  };

  return {
    uploadedImage,
    handleFileUpload,
    clearUploadedImage
  };
};
