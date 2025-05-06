import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Settings, Bell, Zap, Code, Users } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';

const QuickPreferences = () => {
  const { role, preferences, setPreferences, setOnboardingStep } = useRole();

  const handleNextStep = () => {
    setOnboardingStep(3);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-gradient glow">Quick Preferences</span>
      </h1>
      
      <p className="text-center text-sireiq-light/70">
        Customize your {role} experience with these quick settings.
      </p>
      
      <div className="w-full space-y-6 bg-sireiq-darker p-8 rounded-lg border border-sireiq-accent/20">
        {/* Theme Preference */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="h-5 w-5 text-sireiq-cyan" />
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
          <Switch 
            id="dark-mode" 
            checked={preferences.darkMode}
            onCheckedChange={(checked) => setPreferences({ darkMode: checked })}
          />
        </div>
        
        {/* Notification Preference */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-sireiq-cyan" />
            <Label htmlFor="notifications">Enable Notifications</Label>
          </div>
          <Switch 
            id="notifications" 
            checked={preferences.notifications}
            onCheckedChange={(checked) => setPreferences({ notifications: checked })}
          />
        </div>
        
        {/* AI Model Preference */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-sireiq-cyan" />
            <Label>AI Model Preference</Label>
          </div>
          
          <RadioGroup 
            value={preferences.aiModel}
            onValueChange={(value) => setPreferences({ aiModel: value as AIModel })}
            className="flex flex-col space-y-2 ml-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fast" id="fast" />
              <Label htmlFor="fast">Fast (Optimized for speed)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="balanced" id="balanced" />
              <Label htmlFor="balanced">Balanced (Default)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="powerful" id="powerful" />
              <Label htmlFor="powerful">Powerful (Best quality)</Label>
            </div>
          </RadioGroup>
        </div>
        
        {/* Role-specific preferences */}
        {role === 'developer' && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-sireiq-cyan" />
              <Label htmlFor="code-auto-complete">Code Auto-Complete</Label>
            </div>
            <Switch 
              id="code-auto-complete" 
              checked={preferences.codeAutoComplete}
              onCheckedChange={(checked) => setPreferences({ codeAutoComplete: checked })}
              defaultChecked={true}
            />
          </div>
        )}
        
        {role === 'enterprise' && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-sireiq-cyan" />
              <Label htmlFor="team-updates">Team Activity Updates</Label>
            </div>
            <Switch 
              id="team-updates" 
              checked={preferences.teamUpdates}
              onCheckedChange={(checked) => setPreferences({ teamUpdates: checked })}
              defaultChecked={true}
            />
          </div>
        )}
      </div>
      
      <div className="flex space-x-4">
        <Button 
          variant="outline"
          onClick={() => setOnboardingStep(1)}
          className="px-6"
        >
          Back
        </Button>
        <Button 
          onClick={handleNextStep} 
          className="bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker px-6"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default QuickPreferences;
