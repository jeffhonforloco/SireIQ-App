
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DemoRequestForm from './DemoRequestForm';
import { Server, Shield, Database } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface DemoRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  
  const handleSuccess = () => {
    toast({
      title: "Demo Request Submitted",
      description: "Our enterprise team will contact you within 1 business day.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-sireiq-dark border-sireiq-accent/30">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <span className="text-gradient">Enterprise Demo</span> Request
          </DialogTitle>
          <DialogDescription className="text-sireiq-light/70">
            Fill out the form below to request a personalized enterprise demo.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center gap-8 py-3 border-y border-sireiq-accent/20 mb-4">
          <div className="flex flex-col items-center">
            <div className="bg-sireiq-accent/20 p-2 rounded-full">
              <Server className="h-5 w-5 text-sireiq-cyan" />
            </div>
            <span className="text-xs mt-1">Dedicated Infrastructure</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-sireiq-accent/20 p-2 rounded-full">
              <Shield className="h-5 w-5 text-sireiq-cyan" />
            </div>
            <span className="text-xs mt-1">Enterprise Security</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-sireiq-accent/20 p-2 rounded-full">
              <Database className="h-5 w-5 text-sireiq-cyan" />
            </div>
            <span className="text-xs mt-1">Private Knowledge Base</span>
          </div>
        </div>

        <DemoRequestForm onSuccess={handleSuccess} />
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-3 pt-3 border-t border-sireiq-accent/20">
          <p className="text-xs text-sireiq-light/60">
            By submitting this form, you agree to our privacy policy and terms of service. 
            We'll contact you within 1 business day.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestModal;
