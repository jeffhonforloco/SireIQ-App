
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export type AccountType = 'personal' | 'developer' | 'enterprise';

interface AccountTypeSelectorProps {
  accountType: AccountType;
  onChange: (value: AccountType) => void;
}

const AccountTypeSelector: React.FC<AccountTypeSelectorProps> = ({
  accountType,
  onChange
}) => {
  return (
    <div>
      <label htmlFor="accountType" className="block text-sm font-medium mb-2">Account Type</label>
      <RadioGroup
        value={accountType}
        onValueChange={(value) => onChange(value as AccountType)}
        className="flex flex-wrap gap-3"
      >
        <div className="flex items-center space-x-2 bg-sireiq-dark/50 border border-sireiq-accent/20 px-3 py-2 rounded-md">
          <RadioGroupItem value="personal" id="personal" />
          <Label htmlFor="personal" className="cursor-pointer">Personal</Label>
        </div>
        <div className="flex items-center space-x-2 bg-sireiq-dark/50 border border-sireiq-accent/20 px-3 py-2 rounded-md">
          <RadioGroupItem value="developer" id="developer" />
          <Label htmlFor="developer" className="cursor-pointer">Developer</Label>
        </div>
        <div className="flex items-center space-x-2 bg-sireiq-dark/50 border border-sireiq-accent/20 px-3 py-2 rounded-md">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label htmlFor="enterprise" className="cursor-pointer">Enterprise</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AccountTypeSelector;
