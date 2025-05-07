
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, FileText, PlusCircle } from 'lucide-react';

const UserDashboard = () => {
  const recentChats = [
    { id: 1, title: "Planning my vacation", date: "Today" },
    { id: 2, title: "Summarizing meeting notes", date: "Yesterday" },
    { id: 3, title: "Creative writing help", date: "3 days ago" }
  ];
  
  const aiSkills = [
    { id: 1, name: "Travel Planner", icon: "🌍" },
    { id: 2, name: "Finance Assistant", icon: "💰" },
    { id: 3, name: "Content Writer", icon: "✍️" },
    { id: 4, name: "Meeting Assistant", icon: "📅" }
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      {/* Main content area */}
      <div className="lg:col-span-5 space-y-6">
        {/* Welcome prompt area */}
        <div className="bg-sireiq-darker rounded-xl p-8 border border-sireiq-accent/20">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-gradient glow">What would you like to do today?</span>
          </h1>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="w-full bg-sireiq-dark p-4 pr-12 rounded-lg border border-sireiq-accent/20 focus:border-sireiq-cyan focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sireiq-cyan">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Smart suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="flex items-center justify-center gap-2 h-auto py-4 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
            <Calendar className="w-5 h-5 text-sireiq-cyan" />
            <span>Plan My Week</span>
          </Button>
          
          <Button variant="outline" className="flex items-center justify-center gap-2 h-auto py-4 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
            <MessageSquare className="w-5 h-5 text-sireiq-cyan" />
            <span>AI Companion</span>
          </Button>
          
          <Button variant="outline" className="flex items-center justify-center gap-2 h-auto py-4 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
            <FileText className="w-5 h-5 text-sireiq-cyan" />
            <span>Summarize Content</span>
          </Button>
        </div>
        
        {/* Recent chats */}
        <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Chats</h2>
            <Button variant="ghost" size="sm" className="text-sireiq-cyan hover:text-sireiq-cyan/80">
              View All
            </Button>
          </div>
          
          <div className="space-y-2">
            {recentChats.map(chat => (
              <div key={chat.id} className="flex items-center p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer">
                <div className="bg-sireiq-accent/20 p-2 rounded-full mr-3">
                  <MessageSquare className="w-4 h-4 text-sireiq-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{chat.title}</h3>
                  <p className="text-sm text-sireiq-light/70">{chat.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="lg:col-span-2 space-y-6">
        {/* Quick actions */}
        <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
              <PlusCircle className="w-4 h-4 text-sireiq-cyan" />
              <span>New Chat</span>
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 border-sireiq-accent/30 hover:bg-sireiq-accent/10 hover:border-sireiq-cyan">
              <FileText className="w-4 h-4 text-sireiq-cyan" />
              <span>Upload File</span>
            </Button>
          </div>
        </div>
        
        {/* AI Skills */}
        <div className="bg-sireiq-darker rounded-xl p-6 border border-sireiq-accent/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">AI Skills</h2>
            <Button variant="ghost" size="sm" className="text-sireiq-cyan hover:text-sireiq-cyan/80">
              Browse More
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {aiSkills.map(skill => (
              <div key={skill.id} className="flex flex-col items-center p-3 rounded-lg hover:bg-sireiq-accent/10 cursor-pointer border border-sireiq-accent/10">
                <div className="text-2xl mb-1">{skill.icon}</div>
                <p className="text-xs text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
