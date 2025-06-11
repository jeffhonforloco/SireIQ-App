
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Image as ImageIcon, Download, CheckCircle } from 'lucide-react';

interface ImagePreviewProps {
  uploadedImage: string | null;
  enhancedImage: string | null;
  outputFormat: string;
  onDownload: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  uploadedImage,
  enhancedImage,
  outputFormat,
  onDownload
}) => {
  if (!uploadedImage) {
    return (
      <Card className="glass-effect border border-sireiq-accent/30 h-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ImageIcon className="h-5 w-5 text-sireiq-cyan mr-2" />
            Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-sireiq-accent/30 rounded-lg">
            <div className="text-center">
              <ImageIcon className="h-16 w-16 text-sireiq-accent/50 mx-auto mb-4" />
              <p className="text-sireiq-light/70 mb-2">Upload an image to get started</p>
              <p className="text-sm text-sireiq-light/50">
                Supports PNG, JPEG, GIF, WebP up to 10MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-effect border border-sireiq-accent/30 h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <ImageIcon className="h-5 w-5 text-sireiq-cyan mr-2" />
            Preview
          </span>
          {enhancedImage && (
            <Button 
              onClick={onDownload}
              size="sm"
              className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker"
            >
              <Download className="h-4 w-4 mr-2" />
              Download {outputFormat.toUpperCase()}
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Original Image */}
          <div>
            <div className="flex items-center mb-2">
              <Badge variant="secondary" className="bg-sireiq-darker/50">Original</Badge>
            </div>
            <div className="border border-sireiq-accent/30 rounded-lg overflow-hidden">
              <img 
                src={uploadedImage} 
                alt="Original" 
                className="w-full h-64 object-contain bg-sireiq-darker/20"
              />
            </div>
          </div>

          {/* Enhanced Image */}
          <div>
            <div className="flex items-center mb-2">
              <Badge 
                variant="secondary" 
                className={enhancedImage ? "bg-green-500/20 text-green-400" : "bg-sireiq-darker/50"}
              >
                {enhancedImage ? (
                  <>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Enhanced
                  </>
                ) : "Preview"}
              </Badge>
            </div>
            <div className="border border-sireiq-accent/30 rounded-lg overflow-hidden">
              {enhancedImage ? (
                <img 
                  src={enhancedImage} 
                  alt="Enhanced" 
                  className="w-full h-64 object-contain bg-sireiq-darker/20"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-sireiq-darker/20 text-sireiq-light/50">
                  Click "Enhance" to process
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImagePreview;
