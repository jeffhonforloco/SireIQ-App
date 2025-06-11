
import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string, dimensions: { width: number; height: number }) => void;
  originalDimensions: { width: number; height: number };
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, originalDimensions }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File upload triggered');
    const file = event.target.files?.[0];
    console.log('Selected file:', file);
    
    if (!file) {
      console.log('No file selected');
      return;
    }

    if (!file.type.startsWith('image/')) {
      console.log('Invalid file type:', file.type);
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (PNG, JPEG, GIF, WebP)",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      console.log('File too large:', file.size);
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive"
      });
      return;
    }

    console.log('Starting file read process');
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log('File read completed');
      const img = new Image();
      img.onload = () => {
        console.log('Image loaded successfully:', img.width, 'x', img.height);
        onImageUpload(e.target?.result as string, { width: img.width, height: img.height });
        toast({
          title: "Image uploaded successfully",
          description: `${img.width}×${img.height} pixels - Ready for enhancement!`
        });
      };
      img.onerror = (error) => {
        console.error('Image load error:', error);
        toast({
          title: "Error loading image",
          description: "The selected file could not be processed as an image",
          variant: "destructive"
        });
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = (error) => {
      console.error('FileReader error:', error);
      toast({
        title: "Error reading file",
        description: "There was an error reading the selected file",
        variant: "destructive"
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('Drag over');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('File dropped');
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      console.log('Dropped file:', file);
      
      // Create a synthetic event to reuse the same handler
      const syntheticEvent = {
        target: { files: [file] }
      } as React.ChangeEvent<HTMLInputElement>;
      
      handleFileUpload(syntheticEvent);
    }
  };

  return (
    <Card className="glass-effect border border-sireiq-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="h-5 w-5 text-sireiq-cyan mr-2" />
          Upload Image
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="border-2 border-dashed border-sireiq-accent/50 rounded-lg p-8 text-center cursor-pointer hover:border-sireiq-cyan/50 transition-colors"
          onClick={() => {
            console.log('Upload area clicked');
            fileInputRef.current?.click();
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-sireiq-accent mx-auto mb-4" />
          <p className="text-sm text-sireiq-light/70 mb-2">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-sireiq-light/50">
            PNG, JPG, JPEG, GIF, WebP (max 10MB)
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        
        {originalDimensions.width > 0 && (
          <div className="mt-4 text-center text-sm text-sireiq-light/70">
            Original: {originalDimensions.width} × {originalDimensions.height} pixels
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
