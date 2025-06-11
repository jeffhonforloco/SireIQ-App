
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface DataUploadSectionProps {
  fileName: string;
  activeDataLength: number;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploadedDataLength: number;
}

const DataUploadSection: React.FC<DataUploadSectionProps> = ({
  fileName,
  activeDataLength,
  onFileUpload,
  uploadedDataLength
}) => {
  const refreshData = () => {
    if (uploadedDataLength > 0) {
      toast.success('Data refreshed from uploaded file');
    } else {
      toast.success('Using enhanced sample business data');
    }
  };

  return (
    <Card className="glass-effect border border-sireiq-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="mr-2 h-5 w-5" />
          Smart Data Import
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <Input
              type="file"
              accept=".csv,.json"
              onChange={onFileUpload}
              className="hidden"
              id="viz-file-upload"
            />
            <Button variant="outline" asChild className="bg-gradient-to-r from-sireiq-cyan/10 to-sireiq-cyan2/10 border-sireiq-cyan/30">
              <label htmlFor="viz-file-upload" className="cursor-pointer">
                <Upload className="mr-2 h-4 w-4" />
                Upload Your Data
              </label>
            </Button>
          </div>
          {fileName && (
            <div className="text-sm text-sireiq-cyan">
              ✓ {fileName} ({activeDataLength} records)
            </div>
          )}
          {!fileName && (
            <div className="text-sm text-sireiq-light/70">
              Using enhanced sample data ({activeDataLength} records)
            </div>
          )}
          <Button variant="outline" size="sm" onClick={refreshData}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataUploadSection;
