
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type FeatureFlag = {
  id: string;
  name: string;
  description: string;
  defaultValue: boolean;
};

const featureFlags: FeatureFlag[] = [
  {
    id: 'governance-panel-enabled',
    name: 'Governance & Monitoring Panel',
    description: 'Shows real-time audit logs, bias metrics, and data-lineage links',
    defaultValue: true,
  },
  {
    id: 'memory-snapshot-enabled',
    name: 'Memory Browser',
    description: 'Displays recent vector queries and memory interactions',
    defaultValue: true,
  },
  {
    id: 'edge-sync-enabled',
    name: 'Edge Sync Indicator',
    description: 'Shows status of device vs cloud connection for local ONNX agents',
    defaultValue: true,
  },
  {
    id: 'marketplace-teaser-enabled',
    name: 'Marketplace Teaser',
    description: 'Featured agents carousel on landing page',
    defaultValue: true,
  },
];

const FeatureFlags: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Flags</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {featureFlags.map((feature) => (
          <FeatureFlagToggle key={feature.id} feature={feature} />
        ))}
      </CardContent>
    </Card>
  );
};

const FeatureFlagToggle: React.FC<{ feature: FeatureFlag }> = ({ feature }) => {
  const [enabled, setEnabled] = useLocalStorage(feature.id, feature.defaultValue);
  
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor={feature.id}>{feature.name}</Label>
        <p className="text-sm text-sireiq-light/60">{feature.description}</p>
      </div>
      <Switch
        id={feature.id}
        checked={enabled}
        onCheckedChange={setEnabled}
      />
    </div>
  );
};

export default FeatureFlags;
