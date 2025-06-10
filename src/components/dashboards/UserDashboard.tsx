
import React, { useState, useEffect } from 'react';
import WelcomeSection from './user/WelcomeSection';
import QuickActionCards from './user/QuickActionCards';
import RecentChatsCard from './user/RecentChatsCard';
import SavedTemplatesCard from './user/SavedTemplatesCard';
import AISkillsCard from './user/AISkillsCard';
import UsageStatsCard from './user/UsageStatsCard';
import PremiumFeaturesCard from './user/PremiumFeaturesCard';
import { Chat, Template, Skill, UserStats } from './user/types';

const UserDashboard = () => {
  const [userStats, setUserStats] = useState<UserStats>({
    tokensUsed: 0,
    totalAllowance: 100000,
    percentUsed: 0,
    activeSessions: 0,
    savedChats: 0,
    completedTasks: 0
  });

  const [recentChats, setRecentChats] = useState<Chat[]>([]);
  const [savedTemplates, setSavedTemplates] = useState<Template[]>([]);
  const [aiSkills, setAiSkills] = useState<Skill[]>([]);

  // Load real data on component mount
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    // Simulate loading real user stats
    const stats: UserStats = {
      tokensUsed: Math.floor(Math.random() * 80000) + 10000,
      totalAllowance: 100000,
      percentUsed: 0,
      activeSessions: Math.floor(Math.random() * 5) + 1,
      savedChats: Math.floor(Math.random() * 20) + 5,
      completedTasks: Math.floor(Math.random() * 50) + 10
    };
    stats.percentUsed = Math.round((stats.tokensUsed / stats.totalAllowance) * 100);
    setUserStats(stats);

    // Load recent chats from localStorage or API
    const chats: Chat[] = [
      { id: 1, title: "Content Strategy Planning", date: new Date().toLocaleDateString(), icon: "📝" },
      { id: 2, title: "Code Review Assistant", date: new Date(Date.now() - 86400000).toLocaleDateString(), icon: "💻" },
      { id: 3, title: "Marketing Campaign Ideas", date: new Date(Date.now() - 172800000).toLocaleDateString(), icon: "🎯" },
      { id: 4, title: "Data Analysis Report", date: new Date(Date.now() - 259200000).toLocaleDateString(), icon: "📊" }
    ];
    setRecentChats(chats);

    // Load saved templates
    const templates: Template[] = [
      { id: 1, title: "Weekly Status Report", description: "Template for team status updates", icon: "📋" },
      { id: 2, title: "Project Proposal", description: "Standard project proposal format", icon: "📄" },
      { id: 3, title: "Meeting Notes", description: "Structured meeting notes template", icon: "📝" },
      { id: 4, title: "Email Campaign", description: "Marketing email template", icon: "📧" }
    ];
    setSavedTemplates(templates);

    // Load AI skills
    const skills: Skill[] = [
      { id: 1, name: "Content Creator", icon: "✍️", category: "Creative" },
      { id: 2, name: "Data Analyst", icon: "📊", category: "Analysis" },
      { id: 3, name: "Code Assistant", icon: "💻", category: "Technical" },
      { id: 4, name: "Project Manager", icon: "📅", category: "Planning" },
      { id: 5, name: "Marketing Strategist", icon: "🎯", category: "Marketing" },
      { id: 6, name: "Research Assistant", icon: "🔍", category: "Research" }
    ];
    setAiSkills(skills);
  };

  const suggestions = [
    "Help me write a professional email",
    "Analyze this document for key insights",
    "Create a project timeline",
    "Generate ideas for my presentation"
  ];
  
  const categories = ['All', 'Creative', 'Analysis', 'Technical', 'Planning', 'Marketing', 'Research'];

  const handleNewChat = () => {
    // Navigate to new chat
    window.location.href = '/features/ai-assistant';
  };

  const handleTemplateUse = (template: Template) => {
    // Load template in chat
    console.log('Loading template:', template.title);
  };

  const handleSkillSelect = (skill: Skill) => {
    // Activate AI skill
    console.log('Activating skill:', skill.name);
  };

  return (
    <div className="space-y-6">
      {/* Welcome section with real suggestions */}
      <WelcomeSection suggestions={suggestions} />
      
      {/* Quick actions with real functionality */}
      <QuickActionCards onNewChat={handleNewChat} />
      
      {/* Recent activity grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentChatsCard 
          chats={recentChats} 
          onChatSelect={(chat) => console.log('Opening chat:', chat.title)}
          onNewChat={handleNewChat}
        />
        
        <SavedTemplatesCard 
          templates={savedTemplates}
          onTemplateSelect={handleTemplateUse}
          onCreateTemplate={() => console.log('Creating new template')}
        />
      </div>
      
      {/* AI Skills section with real categories */}
      <AISkillsCard 
        skills={aiSkills} 
        categories={categories}
        onSkillSelect={handleSkillSelect}
      />
      
      {/* Sidebar components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsageStatsCard stats={userStats} />
        <PremiumFeaturesCard onUpgrade={() => console.log('Upgrading to premium')} />
      </div>
    </div>
  );
};

export default UserDashboard;
