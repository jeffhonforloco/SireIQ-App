
import React, { useState } from 'react';
import TeamPermissionsCard from './TeamPermissionsCard';
import PermissionsSheet from './PermissionsSheet';

const TeamPermissionsSection = () => {
  const [isPermissionsSheetOpen, setIsPermissionsSheetOpen] = useState(false);

  return (
    <>
      <TeamPermissionsCard onOpenPermissionsSheet={() => setIsPermissionsSheetOpen(true)} />
      
      {/* Permissions Sheet */}
      <PermissionsSheet 
        isOpen={isPermissionsSheetOpen}
        onOpenChange={setIsPermissionsSheetOpen}
      />
    </>
  );
};

export default TeamPermissionsSection;
