
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ModelsTab = () => {
  return (
    <Card className="bg-sireiq-accent/5 border-sireiq-accent/20">
      <CardHeader>
        <CardTitle className="text-base font-medium">AI Models</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Model Name</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Latency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: "Text Generator", version: "1.2.0", status: "Active", latency: "120ms" },
              { name: "Image Classifier", version: "2.1.5", status: "Active", latency: "85ms" },
              { name: "Sentiment Analyzer", version: "0.9.3", status: "Testing", latency: "152ms" },
            ].map((model, i) => (
              <TableRow key={i} className="hover:bg-sireiq-accent/10">
                <TableCell>{model.name}</TableCell>
                <TableCell>{model.version}</TableCell>
                <TableCell>
                  <Badge className={`${model.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'} text-sireiq-darker`}>
                    {model.status}
                  </Badge>
                </TableCell>
                <TableCell>{model.latency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ModelsTab;
