
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Info } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  inquiry: z.string().min(1, {
    message: "Please select an inquiry type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      inquiry: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Your message has been sent! We'll be in touch soon.");
    form.reset();
  }

  return (
    <div className="min-h-screen bg-sireiq-dark text-sireiq-light">
      <Helmet>
        <title>Contact Us | SireIQ</title>
        <meta name="description" content="Get in touch with the SireIQ team for sales, support, or general inquiries." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-sireiq-light/70">
              Have questions or want to learn more about SireIQ? Our team is here to help.
            </p>
          </div>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-sireiq-accent/20">
                  <Mail className="h-6 w-6 text-sireiq-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-sireiq-light/70 mb-4">
                  For general inquiries and information
                </p>
                <p className="text-sireiq-cyan">hello@sireiq.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-sireiq-accent/20">
                  <Phone className="h-6 w-6 text-sireiq-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-sireiq-light/70 mb-4">
                  Available Monday-Friday, 9am-5pm PT
                </p>
                <p className="text-sireiq-cyan">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-sireiq-accent/20">
                  <MapPin className="h-6 w-6 text-sireiq-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-sireiq-light/70 mb-4">
                  Our headquarters location
                </p>
                <p className="text-sireiq-cyan">123 AI Avenue, San Francisco, CA 94105</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-sireiq-light/70 mb-6">
                Fill out the form and we'll get back to you as soon as possible. 
                Our team is ready to answer your questions about our AI platform, 
                pricing, or how we can help with your specific needs.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Specific Departments</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Sales Inquiries</p>
                    <p className="text-sireiq-cyan">sales@sireiq.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Technical Support</p>
                    <p className="text-sireiq-cyan">support@sireiq.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Media Relations</p>
                    <p className="text-sireiq-cyan">press@sireiq.com</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-sireiq-accent/20 rounded-lg">
                <div className="flex items-center mb-4">
                  <Info className="h-5 w-5 text-sireiq-cyan mr-2" />
                  <h3 className="text-lg font-bold">Need Immediate Help?</h3>
                </div>
                <p className="text-sireiq-light/70 mb-4">
                  For urgent matters, check out our comprehensive help center or 
                  reach out to our support team directly.
                </p>
                <Button variant="outline" className="w-full">Visit Help Center</Button>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-sireiq-accent/10 p-6 rounded-lg border border-sireiq-accent/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="inquiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an inquiry type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Information</SelectItem>
                              <SelectItem value="sales">Sales Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="press">Press/Media</SelectItem>
                              <SelectItem value="careers">Careers</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                  
                  <p className="text-xs text-center text-sireiq-light/50">
                    By submitting this form, you agree to our <a href="/privacy-policy" className="text-sireiq-cyan">Privacy Policy</a>.
                    We'll never share your information with third parties.
                  </p>
                </form>
              </Form>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-lg font-bold mb-2">What industries does SireIQ serve?</h3>
                <p className="text-sireiq-light/70">
                  SireIQ works with companies across various industries including marketing, media, 
                  education, e-commerce, and enterprise. Our platform is designed to be versatile 
                  and adaptable to different content creation needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Do you offer demos for enterprise clients?</h3>
                <p className="text-sireiq-light/70">
                  Yes, we offer personalized demos for enterprise clients. Please contact our 
                  sales team at sales@sireiq.com or fill out the contact form to schedule a demo.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Where is SireIQ based?</h3>
                <p className="text-sireiq-light/70">
                  Our headquarters is in San Francisco, California, but we have team members 
                  around the world. We operate fully remotely and serve clients globally.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Is there a free trial available?</h3>
                <p className="text-sireiq-light/70">
                  Yes, we offer a 14-day free trial for new users. You can sign up on our website 
                  and explore all the features before committing to a subscription.
                </p>
              </div>
            </div>
          </div>
          
          {/* Global Offices */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">Our Global Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">San Francisco</h3>
                  <p className="text-sireiq-light/70 mb-2">Headquarters</p>
                  <p className="text-sm text-sireiq-light/70">
                    123 AI Avenue<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">New York</h3>
                  <p className="text-sireiq-light/70 mb-2">Sales & Marketing</p>
                  <p className="text-sm text-sireiq-light/70">
                    456 Tech Plaza<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">London</h3>
                  <p className="text-sireiq-light/70 mb-2">European Operations</p>
                  <p className="text-sm text-sireiq-light/70">
                    78 Innovation Street<br />
                    London, EC2A 4NE<br />
                    United Kingdom
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-sireiq-accent/10 border-sireiq-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Singapore</h3>
                  <p className="text-sireiq-light/70 mb-2">APAC Headquarters</p>
                  <p className="text-sm text-sireiq-light/70">
                    90 Digital Tower<br />
                    Singapore, 018956<br />
                    Singapore
                  </p>
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

export default Contact;
