
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Image, FileImage, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onFileUpload: (file: File, imageData: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (!file) return;

    // Check file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (PNG, JPEG, GIF, WebP, SVG)",
        variant: "destructive"
      });
      return;
    }

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target?.result as string;
      setUploadedFile(file);
      setPreviewUrl(imageData);
      onFileUpload(file, imageData);
      
      toast({
        title: "Image uploaded successfully",
        description: "AI will analyze your design and generate code accordingly",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Upload UI Design (Optional)
        </label>
        <p className="text-xs text-text-secondary">
          Upload a Figma export, screenshot, or any UI design image to generate code based on your design
        </p>
      </div>

      {!uploadedFile ? (
        <Card 
          className={`border-2 border-dashed transition-colors cursor-pointer ${
            dragActive 
              ? 'border-brand-primary bg-brand-primary/10' 
              : 'border-brand-accent/50 hover:border-brand-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Upload className="h-10 w-10 text-text-secondary mb-4" />
            <p className="text-sm text-text-secondary text-center mb-2">
              <span className="font-medium">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-text-secondary">
              PNG, JPEG, GIF, WebP, SVG (max 10MB)
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-background/50 border border-brand-accent/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              {previewUrl && (
                <div className="flex-shrink-0">
                  <img 
                    src={previewUrl} 
                    alt="Uploaded design" 
                    className="w-20 h-20 object-cover rounded border border-brand-accent/20"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <FileImage className="h-4 w-4 text-brand-primary" />
                  <span className="text-sm font-medium">{uploadedFile.name}</span>
                </div>
                <p className="text-xs text-text-secondary">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={removeFile}
                className="flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FileUpload;
