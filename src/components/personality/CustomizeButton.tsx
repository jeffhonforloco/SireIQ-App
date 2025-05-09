
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

interface CustomizeButtonProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

const CustomizeButton: React.FC<CustomizeButtonProps> = ({ 
  variant = 'default',
  size = 'default',
  className = ''
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/features/customize-personality');
  };
  
  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
    >
      <Brain className="mr-2 h-4 w-4" />
      Customize SireIQ
    </Button>
  );
};

export default CustomizeButton;
