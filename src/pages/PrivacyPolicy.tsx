import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, FileText, Info } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "May 1, 2025";
  
  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Privacy Policy | SireIQ</title>
        <meta name="description" content="SireIQ's privacy policy details how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-sireiq-cyan mr-2" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-center text-sireiq-light/70">
              Last Updated: {lastUpdated}
            </p>
          </div>
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Info className="h-5 w-5 text-sireiq-cyan mr-2" />
                  <h2 className="text-xl font-bold">Our Commitment to Your Privacy</h2>
                </div>
                <p className="text-sireiq-light/70">
                  At SireIQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you use our AI platform and related services. 
                  Please read this policy carefully. If you do not agree with the terms of this privacy policy, 
                  please do not access the platform.
                </p>
              </CardContent>
            </Card>
            
            <p className="mb-6">
              SireIQ, Inc. ("SireIQ", "we", "our", or "us") is committed to protecting your privacy. This Privacy 
              Policy applies to information we collect when you use our website, applications, and services 
              (collectively, the "Services") or when you otherwise interact with us.
            </p>
            <p className="mb-6">
              We may change this Privacy Policy from time to time. If we make changes, we will notify you by 
              revising the date at the top of the policy and, in some cases, we may provide you with 
              additional notice (such as adding a statement to our website or sending you a notification).
            </p>
          </div>
          
          {/* Policy Sections */}
          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            <section>
              <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Information You Provide to Us</h3>
                  <p className="mb-4 text-sireiq-light/70">
                    We collect information you provide directly to us. For example, we collect information when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sireiq-light/70">
                    <li>Create an account or profile</li>
                    <li>Fill out forms or fields on our Services</li>
                    <li>Submit content to our AI models</li>
                    <li>Communicate with us via third-party social media sites</li>
                    <li>Request customer support</li>
                    <li>Otherwise communicate with us</li>
                  </ul>
                  <p className="mt-4 text-sireiq-light/70">
                    The types of information we may collect include your name, email address, postal address, 
                    phone number, credit card information, billing details, and any other information you 
                    choose to provide.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Information We Collect Automatically</h3>
                  <p className="mb-4 text-sireiq-light/70">
                    When you access or use our Services, we automatically collect information about you, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sireiq-light/70">
                    <li>
                      <span className="font-medium">Log Information:</span> We collect log information about your use of the Services, 
                      including the type of browser you use, access times, pages viewed, your IP address, and the 
                      page you visited before navigating to our Services.
                    </li>
                    <li>
                      <span className="font-medium">Device Information:</span> We collect information about the computer or mobile device 
                      you use to access our Services, including the hardware model, operating system and version, 
                      unique device identifiers, and mobile network information.
                    </li>
                    <li>
                      <span className="font-medium">Usage Data:</span> We collect information about your interactions with our AI platform, 
                      such as the queries submitted, results generated, and features used.
                    </li>
                    <li>
                      <span className="font-medium">Location Information:</span> We may collect information about the precise location of your 
                      device when you use our Services. We may also collect information about your approximate 
                      location based on your IP address.
                    </li>
                    <li>
                      <span className="font-medium">Cookies and Similar Technologies:</span> We use cookies, web beacons, and other tracking 
                      technologies to collect information about you when you interact with our Services.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">How We Use Your Information</h2>
              <p className="mb-4 text-sireiq-light/70">
                We may use information about you for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sireiq-light/70">
                <li>Provide, maintain, and improve our Services;</li>
                <li>Process transactions and send related information;</li>
                <li>Send you technical notices, updates, security alerts, and administrative messages;</li>
                <li>Respond to your comments, questions, and requests;</li>
                <li>Communicate with you about products, services, offers, promotions, and events;</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services;</li>
                <li>Personalize and improve the Services and provide content or features that match user profiles or interests;</li>
                <li>Train and improve our AI models;</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities; and</li>
                <li>Carry out any other purpose described to you at the time the information was collected.</li>
              </ul>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Sharing of Information</h2>
              <p className="mb-4 text-sireiq-light/70">
                We may share information about you as follows or as otherwise described in this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-sireiq-light/70">
                <li>
                  <span className="font-medium">With vendors, consultants, and other service providers</span> who need access to such 
                  information to carry out work on our behalf;
                </li>
                <li>
                  <span className="font-medium">In response to a request for information</span> if we believe disclosure is in accordance 
                  with, or required by, any applicable law, regulation, or legal process;
                </li>
                <li>
                  <span className="font-medium">If we believe your actions are inconsistent with our user agreements</span> or policies, 
                  or to protect the rights, property, and safety of SireIQ or others;
                </li>
                <li>
                  <span className="font-medium">In connection with, or during negotiations of, any merger, sale of company assets,</span> 
                  financing, or acquisition of all or a portion of our business by another company;
                </li>
                <li>
                  <span className="font-medium">Between and among SireIQ and our current and future parents, affiliates, subsidiaries,</span> 
                  and other companies under common control and ownership; and
                </li>
                <li>
                  <span className="font-medium">With your consent</span> or at your direction.
                </li>
              </ul>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Data Retention</h2>
              <p className="mb-4 text-sireiq-light/70">
                We store the information we collect about you for as long as is necessary for the purpose(s) for 
                which we originally collected it. We may retain certain information for legitimate business purposes or 
                as required by law.
              </p>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Security</h2>
              <p className="text-sireiq-light/70">
                SireIQ takes reasonable measures to help protect information about you from loss, theft, misuse, 
                and unauthorized access, disclosure, alteration, and destruction. These include encryption of data 
                at rest and in transit, access controls, and secure infrastructure hosted with industry-leading providers. 
                However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
              </p>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Your Choices</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Account Information</h3>
                  <p className="text-sireiq-light/70">
                    You may update, correct, or delete information about you at any time by logging into your online 
                    account or emailing us at privacy@sireiq.com. If you wish to delete or deactivate your account, 
                    please email us at privacy@sireiq.com, but note that we may retain certain information as 
                    required by law or for legitimate business purposes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Cookies</h3>
                  <p className="text-sireiq-light/70">
                    Most web browsers are set to accept cookies by default. If you prefer, you can usually choose 
                    to set your browser to remove or reject browser cookies. Please note that if you choose to 
                    remove or reject cookies, this could affect the availability and functionality of our Services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Promotional Communications</h3>
                  <p className="text-sireiq-light/70">
                    You may opt out of receiving promotional emails from SireIQ by following the instructions in those 
                    emails or by adjusting your notification settings in your account preferences. If you opt out, we may 
                    still send you non-promotional emails, such as those about your account or our ongoing business relations.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">International Data Transfers</h2>
              <p className="text-sireiq-light/70">
                SireIQ is based in the United States and the information we collect is governed by U.S. law. By accessing 
                or using the Services or otherwise providing information to us, you consent to the processing, transfer, 
                and storage of information in and to the U.S. and other countries, where you may not have the same rights 
                and protections as you do under local law.
              </p>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Children's Privacy</h2>
              <p className="text-sireiq-light/70">
                Our Services are not directed to children under 13, and we do not knowingly collect personal information from 
                children under 13. If we learn we have collected or received personal information from a child under 13 without 
                verification of parental consent, we will delete that information. If you believe we might have any information 
                from or about a child under 13, please contact us at privacy@sireiq.com.
              </p>
            </section>
            
            <Separator className="bg-sireiq-accent/30" />
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="mb-4 text-sireiq-light/70">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-sireiq-accent/10 border border-sireiq-accent/30 rounded-lg p-4">
                <p className="font-bold">SireIQ</p>
                <p className="mt-2">Email: <span className="text-sireiq-cyan">privacy@sireiq.com</span></p>
              </div>
            </section>
          </div>
          
          {/* Additional Resources */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30 hover:border-sireiq-cyan transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <FileText className="h-8 w-8 text-sireiq-cyan mb-4" />
                  <h3 className="text-lg font-bold mb-2">Terms of Service</h3>
                  <p className="text-sm text-sireiq-light/70">
                    Review our terms and conditions for using SireIQ services.
                  </p>
                  <a href="#" className="mt-4 text-sireiq-cyan text-sm">Read Terms</a>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30 hover:border-sireiq-cyan transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-sireiq-cyan mb-4" />
                  <h3 className="text-lg font-bold mb-2">Security Practices</h3>
                  <p className="text-sm text-sireiq-light/70">
                    Learn about how we protect your data and our infrastructure.
                  </p>
                  <a href="#" className="mt-4 text-sireiq-cyan text-sm">Learn More</a>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30 hover:border-sireiq-cyan transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Info className="h-8 w-8 text-sireiq-cyan mb-4" />
                  <h3 className="text-lg font-bold mb-2">Data FAQs</h3>
                  <p className="text-sm text-sireiq-light/70">
                    Answers to common questions about data handling and privacy.
                  </p>
                  <a href="#" className="mt-4 text-sireiq-cyan text-sm">View FAQs</a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
