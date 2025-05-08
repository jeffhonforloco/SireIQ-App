
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  // Sample blog data
  const featuredPost = {
    id: 'post-1',
    title: 'The Future of AI-Powered Content Creation',
    excerpt: 'Discover how artificial intelligence is revolutionizing content creation across industries and what this means for creators.',
    author: 'Sarah Johnson',
    role: 'Chief AI Officer',
    date: 'October 15, 2023',
    category: 'AI Trends',
    readTime: '8 min read',
    image: '/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png'
  };
  
  const recentPosts = [
    {
      id: 'post-2',
      title: 'Optimizing AI Models for Enterprise Applications',
      excerpt: 'Learn best practices for implementing and optimizing AI models in enterprise environments.',
      author: 'Michael Chen',
      role: 'Lead AI Engineer',
      date: 'September 28, 2023',
      category: 'Technical',
      readTime: '11 min read',
      image: '/lovable-uploads/5a32017e-bddc-4e56-b9a8-8f233099e02a.png'
    },
    {
      id: 'post-3',
      title: 'Voice AI: Creating Natural Conversations',
      excerpt: 'How advances in voice recognition and natural language processing are creating more human-like AI interactions.',
      author: 'Emma Wilson',
      role: 'Voice Technology Specialist',
      date: 'September 14, 2023',
      category: 'Product Updates',
      readTime: '6 min read',
      image: '/lovable-uploads/c3e0c182-65f5-4612-a523-35da753a98a4.png'
    },
    {
      id: 'post-4',
      title: 'The Ethics of AI Decision Making',
      excerpt: 'Exploring the ethical considerations and responsibilities in developing decision-making AI systems.',
      author: 'David Martinez',
      role: 'AI Ethics Researcher',
      date: 'August 30, 2023',
      category: 'AI Ethics',
      readTime: '9 min read',
      image: '/lovable-uploads/650ef573-eb4d-4913-8d70-592d1b24760a.png'
    }
  ];
  
  const categories = [
    'AI Trends', 'Technical', 'Product Updates', 'Case Studies', 
    'AI Ethics', 'Tutorials', 'Industry Insights', 'Research'
  ];

  return (
    <>
      <Helmet>
        <title>Blog | SireIQ</title>
        <meta name="description" content="Insights, updates, and perspectives from the SireIQ team on AI technology and innovations." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sireiq-cyan to-purple-500 bg-clip-text text-transparent">SireIQ Blog</h1>
            <p className="text-lg text-sireiq-light/70 max-w-3xl mx-auto">
              Insights, updates, and perspectives from the SireIQ team on AI technology and innovations.
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <Link to={`/blog/${featuredPost.id}`} className="block group">
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl overflow-hidden hover:border-sireiq-cyan/50 transition-all">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-3 p-6 md:p-8">
                    <div className="mb-4">
                      <span className="bg-sireiq-accent/20 text-sireiq-cyan text-xs font-medium px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-sireiq-light/60 text-sm ml-3">
                        {featuredPost.date} • {featuredPost.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-sireiq-cyan transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-sireiq-light/70 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-sireiq-accent/30 flex items-center justify-center mr-3">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{featuredPost.author}</p>
                        <p className="text-sm text-sireiq-light/60">{featuredPost.role}</p>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center text-sireiq-cyan group-hover:translate-x-1 transition-transform">
                      Read article <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 relative min-h-[250px]">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Content Area with Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Main Content - Recent Posts */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              
              <div className="space-y-8">
                {recentPosts.map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                    <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl overflow-hidden hover:border-sireiq-cyan/50 transition-all">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative md:col-span-1 min-h-[200px]">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="md:col-span-2 p-6">
                          <div className="mb-3">
                            <span className="bg-sireiq-accent/20 text-sireiq-cyan text-xs font-medium px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-sireiq-light/60 text-sm ml-3">
                              {post.date} • {post.readTime}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 group-hover:text-sireiq-cyan transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-sireiq-light/70 mb-4">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-sireiq-accent/30 flex items-center justify-center mr-3">
                              {post.author.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{post.author}</p>
                              <p className="text-xs text-sireiq-light/60">{post.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow-sm">
                  <a href="#" className="px-3 py-2 text-sm rounded-l-md bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border-y border-l border-sireiq-accent/30">
                    Previous
                  </a>
                  <a href="#" className="px-4 py-2 text-sm bg-sireiq-cyan/80 text-black border border-sireiq-cyan/80">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 text-sm bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border border-sireiq-accent/30">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 text-sm bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border-y border-sireiq-accent/30">
                    3
                  </a>
                  <a href="#" className="px-3 py-2 text-sm rounded-r-md bg-sireiq-accent/20 hover:bg-sireiq-accent/30 border-y border-r border-sireiq-accent/30">
                    Next
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-sireiq-accent/30 focus:outline-none focus:ring-2 focus:ring-sireiq-cyan"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-sireiq-cyan">
                    Search
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-black/30 border border-sireiq-accent/30 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <a href="#" className="flex items-center justify-between text-sireiq-light/70 hover:text-sireiq-cyan">
                        <span>{category}</span>
                        <ChevronRight size={16} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-sireiq-accent/20 to-sireiq-cyan/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-sireiq-light/70 mb-4">
                  Get the latest articles, updates and insights delivered directly to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 mb-3 rounded-lg bg-black/50 border border-sireiq-accent/30 focus:outline-none focus:ring-2 focus:ring-sireiq-cyan"
                />
                <button className="w-full bg-sireiq-cyan hover:bg-sireiq-cyan/80 text-black font-medium py-2 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
