
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignInForm from '@/components/auth/SignInForm';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSuccessfulSignIn = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Sign In | SireIQ</title>
        <meta name="description" content="Sign in to your SireIQ account to access AI-powered tools and creative workflows." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <SignInForm onSuccessfulSignIn={handleSuccessfulSignIn} />
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
