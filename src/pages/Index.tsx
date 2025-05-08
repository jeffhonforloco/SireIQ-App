
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeChatExperience from '@/components/chat/HomeChatExperience';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignInModal from '@/components/auth/SignInModal';
import { useRole } from '@/contexts/RoleContext';

const Index = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const { role } = useRole();

  useEffect(() => {
    // Only show the sign-in modal after a delay if the user is not logged in
    if (!role) {
      const timer = setTimeout(() => {
        setShowSignInModal(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [role]);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col overflow-hidden">
      <Helmet>
        <title>SireIQ | Think it. Build it. With SireIQ</title>
        <meta name="description" content="An advanced AI platform that helps businesses leverage data for better insights, content creation, and decision-making." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-1 flex justify-center items-center p-0 overflow-hidden">
        <div className="w-full max-w-3xl h-full">
          <HomeChatExperience />
        </div>
      </div>

      <Footer />
      
      <SignInModal isOpen={showSignInModal} onOpenChange={setShowSignInModal} />
    </div>
  );
};

export default Index;
