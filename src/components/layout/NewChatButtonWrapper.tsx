
import React from 'react';
import { useLocation } from 'react-router-dom';
import NewChatButton from '@/components/chat/NewChatButton';

const NewChatButtonWrapper: React.FC = () => {
  const location = useLocation();
  
  // Define paths where the button should be shown, including the home page
  const showOnPaths = [
    '/',
    '/dashboard',
    '/features/ai-assistant',
    '/features/code-assistance',
    '/features/content-creation'
  ];
  
  // Check if current path matches exactly any of the paths in the array
  const shouldShowButton = showOnPaths.some(path => 
    location.pathname === path
  );
  
  return shouldShowButton ? <NewChatButton position="fixed" /> : null;
};

export default NewChatButtonWrapper;
