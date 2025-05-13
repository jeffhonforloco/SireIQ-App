
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Check, Info } from 'lucide-react';
import { toast } from "sonner";
import './styles.css';

interface Policy {
  id: string;
  name: string;
  status: string;
  compliance: number;
}

interface ComplianceData {
  overallCompliance: number;
  totalPolicies: number;
  activePolicies: number;
}

const GovernancePanel: React.FC = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [complianceData, setComplianceData] = useState<ComplianceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/agents/governance/run', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'list' })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch policies');
        }

        const data = await response.json();
        setPolicies(data.data);
        
        // Also fetch compliance data
        const complianceResponse = await fetch('/api/agents/governance/run', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ action: 'check-compliance' })
        });

        if (!complianceResponse.ok) {
          throw new Error('Failed to fetch compliance data');
        }

        const complianceData = await complianceResponse.json();
        setComplianceData(complianceData.data);
        setError('');
      } catch (err) {
        console.error('Error fetching governance data:', err);
        setError('Failed to load governance data. Please try again.');
        toast.error('Failed to load governance data');
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  const getComplianceColor = (compliance: number) => {
    if (compliance >= 90) return 'bg-green-500';
    if (compliance >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="status-badge bg-green-100 text-green-800"><Check size={12} /> Active</span>;
      case 'pending-review':
        return <span className="status-badge bg-yellow-100 text-yellow-800"><Info size={12} /> Pending Review</span>;
      default:
        return <span className="status-badge bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  if (loading) {
    return <div className="governance-panel loading">Loading governance data...</div>;
  }

  if (error) {
    return (
      <div className="governance-panel error">
        <AlertTriangle className="text-red-500" />
        <p>{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  return (
    <div className="governance-panel">
      <div className="panel-header">
        <Shield className="text-blue-500" />
        <h2>Governance & Compliance</h2>
      </div>

      {complianceData && (
        <Card className="summary-card">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3>Overall Compliance</h3>
              <span className="text-lg font-bold">{complianceData.overallCompliance}%</span>
            </div>
            
            <Progress 
              value={complianceData.overallCompliance} 
              className={`h-2 ${getComplianceColor(complianceData.overallCompliance)}`} 
            />
            
            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <span>{complianceData.activePolicies} active policies</span>
              <span>{complianceData.totalPolicies} total policies</span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="policies-list">
        <h3>Policy Status</h3>
        
        {policies.map((policy) => (
          <div key={policy.id} className="policy-item">
            <div>
              <div className="flex justify-between">
                <h4>{policy.name}</h4>
                {getStatusBadge(policy.status)}
              </div>
              
              <div className="flex items-center mt-1">
                <Progress 
                  value={policy.compliance} 
                  className={`h-1 flex-1 ${getComplianceColor(policy.compliance)}`} 
                />
                <span className="ml-2 text-xs font-medium">{policy.compliance}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernancePanel;
