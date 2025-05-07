
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MessageSquare, FileText, PlusCircle, Sparkles, BookOpen, Clock, ArrowRight, Star, Check, Bookmark, Settings, Layers } from 'lucide-react';

const UserDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const recentChats = [
    { id: 1, title: "Planning my vacation", date: "Today", icon: "🌍" },
    { id: 2, title: "Summarizing meeting notes", date: "Yesterday", icon: "📝" },
    { id: 3, title: "Creative writing help", date: "3 days ago", icon: "✍️" }
  ];
  
  const aiSkills = [
    { id: 1, name: "Travel Planner", icon: "🌍", category: "Planning" },
    { id: 2, name: "Finance Assistant", icon: "💰", category: "Finance" },
    { id: 3, name: "Content Writer", icon: "✍️", category: "Creative" },
    { id: 4, name: "Meeting Assistant", icon: "📅", category: "Work" },
    { id: 5, name: "Code Helper", icon: "💻", category: "Technical" },
    { id: 6, name: "Data Visualizer", icon: "📊", category: "Analysis" }
  ];

  const savedTemplates = [
    { id: 1, title: "Weekly Report", description: "Generate a summary of weekly activities", icon: "📊" },
    { id: 2, title: "Email Template", description: "Professional email format with signature", icon: "📧" }
  ];
  
  const categories = ['All', 'Planning', 'Finance', 'Creative', 'Work', 'Technical', 'Analysis'];
  
  const userStats = {
    tokensUsed: 78540,
    totalAllowance: 100000,
    percentUsed: 78.5,
    activeSessions: 3,
    savedChats: 12,
    completedTasks: 28
  };

  const filteredSkills = selectedCategory === 'All' 
    ? aiSkills 
    : aiSkills.filter(skill => skill.category === selectedCategory);
  
  const suggestions = [
    "Summarize this article for me",
    "Help me plan my weekly schedule",
    "Draft an email to my team about the project status",
    "Generate creative ideas for my presentation"
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      {/* Main content area */}
      <div className="lg:col-span-5 space-y-6">
        {/* Welcome section with user info */}
        <div className="bg-sireiq-darker rounded-xl p-8 border border-sireiq-accent/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-gradient glow">Welcome back, Alex</span>
              </h1>
              <p className="text-sireiq-light/70">Continue where you left off or start something new</p>
            </div>
            <Avatar className="h-16 w-16 border-2 border-sireiq-accent/30">
              <AvatarImage src="/lovable-uploads/8e6b4446-3486-45e0-b6f6-b46acd418ac4.png" />
              <AvatarFallback className="bg-sireiq-accent/20 text-sireiq-cyan">AU</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask me anything or try a suggestion below..." 
              className="w-full bg-sireiq-dark p-4 pr-12 rounded-lg border border-sireiq-accent/20 focus:border-sireiq-cyan focus:ring-1 focus:ring-sireiq-cyan focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sireiq-cyan">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((suggestion, idx) => (
              <Button 
                key={idx} 
                variant="outline" 
                size="sm" 
                className="bg-sireiq-dark/50 border border-sireiq-accent/20 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan text-sm"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Quick actions row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Sparkles className="w-5 h-5 mr-2 text-sireiq-cyan" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-sireiq-light/70">Get instant answers and assistance with any question</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-between hover:bg-sireiq-accent/10">
                <span>Start chatting</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Calendar className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-sireiq-light/70">Plan your day with AI-powered scheduling</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-between hover:bg-sireiq-accent/10">
                <span>Plan my day</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-sireiq-darker border-sireiq-accent/20 hover:border-sireiq-cyan/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <BookOpen className="w-5 h-5 mr-2 text-sireiq-cyan" />
                Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-sireiq-light/70">Discover new capabilities and tutorials</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-between hover:bg-sireiq-accent/10">
                <span>View tutorials</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Recent chats and activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent chats */}
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-sireiq-cyan" />
                  Recent Chats
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-sireiq-cyan hover:text-sireiq-cyan/80 h-8 px-2">
                  View All
                </Button>
              </div>
              <CardDescription>Continue your conversations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentChats.map(chat => (
                <div key={chat.id} className="flex items-center p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer group">
                  <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3">
                    <span className="text-xl">{chat.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{chat.title}</h3>
                    <p className="text-sm text-sireiq-light/70">{chat.date}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full justify-center gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
                <PlusCircle className="w-4 h-4 text-sireiq-cyan" />
                <span>New Chat</span>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Saved templates */}
          <Card className="bg-sireiq-darker border-sireiq-accent/20">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg flex items-center">
                  <Bookmark className="w-5 h-5 mr-2 text-sireiq-cyan" />
                  Saved Templates
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-sireiq-cyan hover:text-sireiq-cyan/80 h-8 px-2">
                  Browse Library
                </Button>
              </div>
              <CardDescription>Your frequently used templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {savedTemplates.map(template => (
                <div key={template.id} className="flex items-center p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer group">
                  <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3">
                    <span className="text-xl">{template.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{template.title}</h3>
                    <p className="text-sm text-sireiq-light/70">{template.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full justify-center gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
                <PlusCircle className="w-4 h-4 text-sireiq-cyan" />
                <span>Create Template</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* AI Skills section */}
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center">
                <Layers className="w-5 h-5 mr-2 text-sireiq-cyan" />
                AI Skills
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-sireiq-cyan hover:text-sireiq-cyan/80 h-8 px-2">
                Browse All
              </Button>
            </div>
            <CardDescription>Specialized tools to help with specific tasks</CardDescription>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-sireiq-cyan text-sireiq-darker hover:bg-sireiq-cyan/90" 
                    : "border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {filteredSkills.map(skill => (
                <div 
                  key={skill.id} 
                  className="flex flex-col items-center p-3 rounded-lg border border-sireiq-accent/20 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan/50 cursor-pointer transition-colors"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-xs text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Sidebar */}
      <div className="lg:col-span-2 space-y-6">
        {/* User stats */}
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Settings className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Account Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-sireiq-light/70">Token Usage</span>
                <span className="text-sm font-medium">{userStats.percentUsed}%</span>
              </div>
              <Progress value={userStats.percentUsed} className="h-2" />
              <p className="text-xs text-sireiq-light/70 mt-1">
                {userStats.tokensUsed.toLocaleString()} / {userStats.totalAllowance.toLocaleString()} tokens used this month
              </p>
            </div>
            
            <Separator className="bg-sireiq-accent/20" />
            
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-2xl font-semibold text-sireiq-cyan">{userStats.activeSessions}</p>
                <p className="text-xs text-sireiq-light/70">Active Sessions</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-sireiq-cyan">{userStats.savedChats}</p>
                <p className="text-xs text-sireiq-light/70">Saved Chats</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-sireiq-cyan">{userStats.completedTasks}</p>
                <p className="text-xs text-sireiq-light/70">Tasks Done</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Quick actions */}
        <Card className="bg-sireiq-darker border-sireiq-accent/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Star className="w-5 h-5 mr-2 text-sireiq-cyan" />
              Premium Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
              <div className="bg-sireiq-accent/20 p-2 rounded-full">
                <FileText className="w-4 h-4 text-sireiq-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Long-form Document Analysis</h3>
                <p className="text-xs text-sireiq-light/70">Process and analyze large documents</p>
              </div>
              <Check className="w-4 h-4 text-green-500" />
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
              <div className="bg-sireiq-accent/20 p-2 rounded-full">
                <Clock className="w-4 h-4 text-sireiq-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Priority Processing</h3>
                <p className="text-xs text-sireiq-light/70">Faster responses during peak times</p>
              </div>
              <Check className="w-4 h-4 text-green-500" />
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
              <div className="bg-sireiq-accent/20 p-2 rounded-full">
                <Settings className="w-4 h-4 text-sireiq-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">Advanced Customization</h3>
                <p className="text-xs text-sireiq-light/70">Personalize AI behavior and responses</p>
              </div>
              <Check className="w-4 h-4 text-green-500" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2 text-sireiq-darker">
              Manage Subscription
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
