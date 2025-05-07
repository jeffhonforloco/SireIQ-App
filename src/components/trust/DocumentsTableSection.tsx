
import React from 'react';
import { Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

interface DocumentProps {
  name: string;
  type: string;
  size: string;
}

const DocumentsTableSection = () => {
  const complianceDocuments: DocumentProps[] = [
    { name: 'Security Whitepaper', type: 'PDF', size: '4.2 MB' },
    { name: 'Privacy Policy', type: 'PDF', size: '1.8 MB' },
    { name: 'GDPR Compliance Statement', type: 'PDF', size: '2.1 MB' },
    { name: 'Penetration Test Summary', type: 'PDF', size: '3.5 MB' },
    { name: 'Incident Response Plan', type: 'PDF', size: '2.3 MB' }
  ];

  const handleDocumentDownload = (documentName) => {
    toast("This is a sample document. In production, this would download the actual file.", {
      description: `You selected: ${documentName}`,
      action: {
        label: "Dismiss",
        onClick: () => console.log("Dismissed")
      }
    });
  };

  return (
    <section>
      <Card className="bg-sireiq-darker border-sireiq-accent/20">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Available Public Documents</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complianceDocuments.map((doc, i) => (
                <TableRow key={i}>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-sireiq-cyan border-sireiq-cyan/30 hover:bg-sireiq-cyan/10"
                      onClick={() => handleDocumentDownload(doc.name)}
                    >
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default DocumentsTableSection;
