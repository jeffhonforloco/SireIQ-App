
import React from 'react';
import WelcomeSection from './user/WelcomeSection';
import QuickActionCards from './user/QuickActionCards';
import RecentChatsCard from './user/RecentChatsCard';
import SavedTemplatesCard from './user/SavedTemplatesCard';
import AISkillsCard from './user/AISkillsCard';
import UsageStatsCard from './user/UsageStatsCard';
import PremiumFeaturesCard from './user/PremiumFeaturesCard';
import { Chat, Template, Skill, UserStats } from './user/types';

const UserDashboard = () => {
  // Sample data (in a real app, this would come from API/context)
  const suggestions = [
    "Summarize this article for me",
    "Help me plan my weekly schedule",
    "Draft an email to my team about the project status",
    "Generate creative ideas for my presentation"
  ];
  
  const recentChats: Chat[] = [
    { id: 1, title: "Planning my vacation", date: "Today", icon: "🌍" },
    { id: 2, title: "Summarizing meeting notes", date: "Yesterday", icon: "📝" },
    { id: 3, title: "Creative writing help", date: "3 days ago", icon: "✍️" }
  ];
  
  const aiSkills: Skill[] = [
    { id: 1, name: "Travel Planner", icon: "🌍", category: "Planning" },
    { id: 2, name: "Finance Assistant", icon: "💰", category: "Finance" },
    { id: 3, name: "Content Writer", icon: "✍️", category: "Creative" },
    { id: 4, name: "Meeting Assistant", icon: "📅", category: "Work" },
    { id: 5, name: "Code Helper", icon: "💻", category: "Technical" },
    { id: 6, name: "Data Visualizer", icon: "📊", category: "Analysis" }
  ];

  const savedTemplates: Template[] = [
    { id: 1, title: "Weekly Report", description: "Generate a summary of weekly activities", icon: "📊" },
    { id: 2, title: "Email Template", description: "Professional email format with signature", icon: "📧" }
  ];
  
  const categories = ['All', 'Planning', 'Finance', 'Creative', 'Work', 'Technical', 'Analysis'];
  
  const userStats: UserStats = {
    tokensUsed: 78540,
    totalAllowance: 100000,
    percentUsed: 78.5,
    activeSessions: 3,
    savedChats: 12,
    completedTasks: 28
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      {/* Main content area */}
      <div className="lg:col-span-5 space-y-6">
        {/* Welcome section with user info */}
        <WelcomeSection suggestions={suggestions} />
        
        {/* Quick actions row */}
        <QuickActionCards />
        
        {/* Recent chats and activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent chats */}
          <RecentChatsCard chats={recentChats} />
          
          {/* Saved templates */}
          <SavedTemplatesCard templates={savedTemplates} />
        </div>
        
        {/* AI Skills section */}
        <AISkillsCard skills={aiSkills} categories={categories} />
      </div>
      
      {/* Sidebar */}
      <div className="lg:col-span-2 space-y-6">
        {/* User stats */}
        <UsageStatsCard stats={userStats} />
        
        {/* Premium features */}
        <PremiumFeaturesCard />
      </div>
    </div>
  );
};

export default UserDashboard;
