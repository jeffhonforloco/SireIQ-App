
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";

// Define types for our collaboration context
type User = {
  id: string;
  name: string;
  avatar: string;
  color: string;
  isActive: boolean;
};

type Comment = {
  id: string;
  userId: string;
  userName: string;
  userColor: string;
  text: string;
  timestamp: Date;
  resolved: boolean;
};

type CollaborationContextType = {
  users: User[];
  activeUsers: User[];
  comments: Comment[];
  selectedContent: string | null;
  addComment: (text: string) => void;
  resolveComment: (id: string) => void;
  setSelectedContent: (content: string | null) => void;
  currentUser: User;
};

const MOCK_USERS: User[] = [
  { id: '1', name: 'Sarah', avatar: 'S', color: 'bg-pink-500', isActive: true },
  { id: '2', name: 'Michael', avatar: 'M', color: 'bg-blue-500', isActive: true },
  { id: '3', name: 'Jamie', avatar: 'J', color: 'bg-amber-500', isActive: true },
  { id: '4', name: 'You', avatar: 'Y', color: 'bg-green-500', isActive: true },
];

const MOCK_COMMENTS: Comment[] = [
  { 
    id: '1', 
    userId: '1', 
    userName: 'Sarah', 
    userColor: 'bg-pink-500', 
    text: "I've updated the introduction paragraph to better highlight our value proposition.", 
    timestamp: new Date(Date.now() - 120000), 
    resolved: false 
  },
  { 
    id: '2', 
    userId: '2', 
    userName: 'Michael', 
    userColor: 'bg-blue-500', 
    text: 'Looks great! Could we also add something about our recent case study results?', 
    timestamp: new Date(Date.now() - 60000), 
    resolved: false 
  }
];

// Create the context
const CollaborationContext = createContext<CollaborationContextType | undefined>(undefined);

export const CollaborationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  
  // Current user is always the last one in the list
  const currentUser = users[users.length - 1];

  // Filter active users
  const activeUsers = users.filter(user => user.isActive);

  // Simulate random user activity
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => 
        prev.map(user => {
          if (user.id === currentUser.id) return user; // Don't change current user's status
          return { 
            ...user, 
            isActive: Math.random() > 0.2 // 80% chance of being active
          };
        })
      );
    }, 30000); // Check every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const addComment = (text: string) => {
    if (!text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      userId: currentUser.id,
      userName: currentUser.name,
      userColor: currentUser.color,
      text,
      timestamp: new Date(),
      resolved: false,
    };

    setComments(prev => [...prev, newComment]);
    toast({
      title: "Comment added",
      description: "Your comment has been added to the document."
    });
  };

  const resolveComment = (id: string) => {
    setComments(prev => 
      prev.map(comment => 
        comment.id === id ? { ...comment, resolved: true } : comment
      )
    );
    toast({
      title: "Comment resolved",
      description: "The comment has been marked as resolved."
    });
  };

  return (
    <CollaborationContext.Provider
      value={{
        users,
        activeUsers,
        comments,
        selectedContent,
        addComment,
        resolveComment,
        setSelectedContent,
        currentUser,
      }}
    >
      {children}
    </CollaborationContext.Provider>
  );
};

export const useCollaboration = () => {
  const context = useContext(CollaborationContext);
  if (context === undefined) {
    throw new Error('useCollaboration must be used within a CollaborationProvider');
  }
  return context;
};
