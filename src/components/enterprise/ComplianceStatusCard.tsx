
import React, { useState } from 'react';
import { Shield, AlertTriangle, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ComplianceItem {
  framework: string;
  status: 'Compliant' | 'In Progress' | 'Attention Required';
  lastAudit: string;
  nextAudit: string;
}

const ComplianceStatusCard = () => {
  const [complianceItems, setComplianceItems] = useState<ComplianceItem[]>([
    { framework: 'GDPR', status: 'Compliant', lastAudit: 'March 15, 2025', nextAudit: 'September 15, 2025' },
    { framework: 'HIPAA', status: 'Compliant', lastAudit: 'January 20, 2025', nextAudit: 'July 20, 2025' },
    { framework: 'SOC 2', status: 'In Progress', lastAudit: 'N/A', nextAudit: 'June 30, 2025' },
    { framework: 'ISO 27001', status: 'Compliant', lastAudit: 'February 10, 2025', nextAudit: 'August 10, 2025' }
  ]);

  const handleStatusUpdate = (index: number) => {
    setComplianceItems(items => {
      const newItems = [...items];
      if (newItems[index].status === 'In Progress') {
        newItems[index].status = 'Compliant';
        newItems[index].lastAudit = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        toast.success(`${newItems[index].framework} compliance updated to Compliant`);
      }
      return newItems;
    });
  };

  const scheduleAudit = () => {
    toast.success('Audit scheduled. You will receive a confirmation email shortly.');
  };

  const downloadReports = () => {
    toast.success('Downloading compliance reports...');
    setTimeout(() => {
      toast.info('Reports downloaded successfully');
    }, 2000);
  };

  return (
    <div className="glass-effect rounded-xl p-6 border border-sireiq-accent/30 mb-8">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Shield className="h-5 w-5 text-sireiq-cyan mr-2" />
        Compliance Status
      </h3>
      
      <div className="space-y-4 mb-6">
        {complianceItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 border border-sireiq-accent/20 rounded-md bg-sireiq-darker hover:bg-sireiq-accent/5 transition-colors">
            <div className="flex items-center">
              {item.status === 'Compliant' ? (
                <Check className="h-5 w-5 text-green-400 mr-3" />
              ) : item.status === 'In Progress' ? (
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-400 mr-3" />
              )}
              <div>
                <p className="font-medium">{item.framework}</p>
                <p className="text-xs text-sireiq-light/50">
                  Next audit: {item.nextAudit}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={`${
                item.status === 'Compliant' ? 'bg-green-500' : 
                item.status === 'In Progress' ? 'bg-yellow-500' : 'bg-red-500'
              } text-sireiq-darker`}>
                {item.status}
              </Badge>
              
              {item.status === 'In Progress' && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-sireiq-cyan/30 hover:bg-sireiq-cyan/10 text-xs"
                  onClick={() => handleStatusUpdate(index)}
                >
                  Update
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <Button 
          variant="outline" 
          className="border-sireiq-accent/30 hover:bg-sireiq-accent/10"
          onClick={downloadReports}
        >
          Download Reports
        </Button>
        <Button 
          className="bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90"
          onClick={scheduleAudit}
        >
          Schedule Audit
        </Button>
      </div>
    </div>
  );
};

export default ComplianceStatusCard;
