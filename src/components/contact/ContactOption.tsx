
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ContactOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  contactInfo: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({
  icon: Icon,
  title,
  description,
  contactInfo,
}) => {
  return (
    <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-sireiq-accent/20">
          <Icon className="h-6 w-6 text-sireiq-cyan" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sireiq-light/70 mb-4">
          {description}
        </p>
        <p className="text-sireiq-cyan">{contactInfo}</p>
      </CardContent>
    </Card>
  );
};

export default ContactOption;
